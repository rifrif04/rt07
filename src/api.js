import crypto from 'node:crypto';
import { generateLoanPdfBuffer } from './pdf.js';
import { DEFAULT_CATEGORIES, normalizePosName, matchPosName } from './store.js';
import {
  hashPassword,
  verifyPassword,
  createSessionCookie,
  clearSessionCookie,
  checkRateLimit,
  recordFailure,
  clearFailures,
  publicUser,
} from './auth.js';

class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const MONTH = /^(\d{4})-(\d{2})$/;
const USERNAME = /^[a-zA-Z0-9._-]{3,32}$/;
const ROLES = ['admin', 'bendahara', 'warga'];
const CONDITIONS = ['baik', 'rusak-ringan', 'rusak-berat'];

function requireWritePermission(ctx) {
  if (!ctx.user) throw new ApiError(401, 'Sesi berakhir, silakan login kembali');
  if (ctx.user.role === 'warga') {
    throw new ApiError(403, 'Akun warga hanya memiliki hak akses melihat (read-only)');
  }
}

function sendJson(res, status, data, extraHeaders = {}) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store',
    ...extraHeaders,
  });
  res.end(body);
}

async function readJson(req) {
  const contentType = String(req.headers['content-type'] || '')
    .split(';')[0]
    .trim()
    .toLowerCase();
  if (contentType !== 'application/json') {
    throw new ApiError(415, 'Content-Type harus application/json');
  }
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 1024 * 1024) throw new ApiError(413, 'Data terlalu besar');
    chunks.push(chunk);
  }
  if (!size) return {};
  try {
    const parsed = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('not object');
    }
    return parsed;
  } catch {
    throw new ApiError(400, 'Format JSON tidak valid');
  }
}

function text(value, field, { min = 1, max = 200, required = true } = {}) {
  if (value === undefined || value === null) {
    if (!required) return '';
    throw new ApiError(400, `${field} wajib diisi`);
  }
  if (typeof value !== 'string') throw new ApiError(400, `${field} tidak valid`);
  const v = value.trim();
  if (required && v.length < min) throw new ApiError(400, `${field} wajib diisi`);
  if (v.length > max) throw new ApiError(400, `${field} maksimal ${max} karakter`);
  return v;
}

function intValue(value, field, { min = 0, max = 1e12 } = {}) {
  const n = Number(value);
  if (!Number.isFinite(n) || !Number.isInteger(n) || n < min || n > max) {
    throw new ApiError(400, `${field} harus bilangan bulat ${min} - ${max.toLocaleString('id-ID')}`);
  }
  return n;
}

function dateValue(value, field, { required = true } = {}) {
  if (!required && (value === undefined || value === null || value === '')) return '';
  if (typeof value !== 'string' || !ISO_DATE.test(value)) {
    throw new ApiError(400, `${field} tidak valid`);
  }
  const d = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(d.getTime()) || d.toISOString().slice(0, 10) !== value) {
    throw new ApiError(400, `${field} tidak valid`);
  }
  return value;
}

function monthValue(value) {
  if (typeof value !== 'string') return null;
  const match = MONTH.exec(value);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  if (month < 1 || month > 12 || year < 1900 || year > 2200) return null;
  return value;
}

function monthRange(month) {
  const [year, mon] = month.split('-').map(Number);
  const lastDay = new Date(Date.UTC(year, mon, 0)).getUTCDate();
  return { from: `${month}-01`, to: `${month}-${String(lastDay).padStart(2, '0')}` };
}

function currentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

function filterTransactions(db, { from, to, type, category, month, q } = {}) {
  let list = db.transactions;
  if (month) {
    const range = monthRange(month);
    from = range.from;
    to = range.to;
  }
  if (from) list = list.filter((t) => t.date >= from);
  if (to) list = list.filter((t) => t.date <= to);
  if (type === 'income' || type === 'expense') list = list.filter((t) => t.type === type);
  if (category) {
    list = list.filter((t) => matchPosName(t.category, category));
  }
  if (q) {
    const needle = q.toLowerCase();
    list = list.filter((t) =>
      `${t.category} ${t.description}`.toLowerCase().includes(needle)
    );
  }
  return list.slice().sort(
    (a, b) =>
      b.date.localeCompare(a.date) ||
      String(b.createdAt || '').localeCompare(String(a.createdAt || ''))
  );
}

function totals(list) {
  let income = 0;
  let expense = 0;
  for (const item of list) {
    if (item.type === 'income') income += item.amount;
    else expense += item.amount;
  }
  return { income, expense, balance: income - expense };
}

function byCategory(list) {
  const income = new Map();
  const expense = new Map();
  for (const item of list) {
    const bucket = item.type === 'income' ? income : expense;
    bucket.set(item.category, (bucket.get(item.category) || 0) + item.amount);
  }
  const toArray = (map) =>
    [...map.entries()]
      .map(([category, amount]) => ({ category, amount }))
      .sort((a, b) => b.amount - a.amount);
  return { income: toArray(income), expense: toArray(expense) };
}

function lastMonths(month, count = 6) {
  const [year, mon] = month.split('-').map(Number);
  const result = [];
  for (let i = count - 1; i >= 0; i -= 1) {
    const d = new Date(Date.UTC(year, mon - 1 - i, 1));
    result.push(`${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`);
  }
  return result;
}

export function getBorrowedByAssetId(loans, excludeLoanId = null) {
  const map = new Map();
  for (const loan of (loans || [])) {
    if (loan.status === 'dipinjam' && (!excludeLoanId || loan.id !== excludeLoanId)) {
      if (Array.isArray(loan.items) && loan.items.length > 0) {
        for (const item of loan.items) {
          if (item && item.assetId) {
            const q = Number(item.quantity) || 0;
            map.set(item.assetId, (map.get(item.assetId) || 0) + q);
          }
        }
      } else if (loan.assetId) {
        const q = Number(loan.quantity) || 0;
        map.set(loan.assetId, (map.get(loan.assetId) || 0) + q);
      }
    }
  }
  return map;
}

function assetSummary(db) {
  const loans = Array.isArray(db.assetLoans) ? db.assetLoans : [];
  const borrowedByAssetId = getBorrowedByAssetId(loans);
  let totalBorrowedUnits = 0;
  let activeLoansCount = 0;

  for (const loan of loans) {
    if (loan.status === 'dipinjam') {
      activeLoansCount++;
      if (Array.isArray(loan.items) && loan.items.length > 0) {
        totalBorrowedUnits += loan.items.reduce((s, it) => s + (Number(it.quantity) || 0), 0);
      } else {
        totalBorrowedUnits += Number(loan.quantity) || 0;
      }
    }
  }

  const summary = {
    items: db.assets.length,
    units: 0,
    value: 0,
    baik: 0,
    rusakRingan: 0,
    rusakBerat: 0,
    diTempat: 0,
    dipinjam: totalBorrowedUnits,
    activeLoansCount,
    totalLoansCount: loans.length,
    byItem: [],
    byCategory: [],
  };

  const itemMap = new Map();
  const catMap = new Map();

  for (const asset of db.assets) {
    const qty = Number(asset.quantity) || 0;
    const val = Number(asset.value) || 0;
    const borrowedQty = borrowedByAssetId.get(asset.id) || 0;
    const availableQty = Math.max(0, qty - borrowedQty);

    summary.units += qty;
    summary.value += val;
    if (asset.condition === 'baik') summary.baik += qty;
    else if (asset.condition === 'rusak-ringan') summary.rusakRingan += qty;
    else if (asset.condition === 'rusak-berat') summary.rusakBerat += qty;

    const rawName = String(asset.name || '').trim();
    if (rawName) {
      const key = rawName.toLowerCase();
      if (!itemMap.has(key)) {
        itemMap.set(key, {
          name: rawName,
          category: asset.category || 'Lainnya',
          icon: asset.icon || '',
          quantity: 0,
          diTempat: 0,
          dipinjam: 0,
          value: 0,
          baik: 0,
          rusakRingan: 0,
          rusakBerat: 0,
          locations: new Set(),
        });
      }
      const itemGroup = itemMap.get(key);
      if (asset.icon && !itemGroup.icon) {
        itemGroup.icon = asset.icon;
      }
      itemGroup.quantity += qty;
      itemGroup.diTempat += availableQty;
      itemGroup.dipinjam += borrowedQty;
      itemGroup.value += val;
      if (asset.condition === 'baik') itemGroup.baik += qty;
      else if (asset.condition === 'rusak-ringan') itemGroup.rusakRingan += qty;
      else if (asset.condition === 'rusak-berat') itemGroup.rusakBerat += qty;
      if (asset.location && String(asset.location).trim()) {
        itemGroup.locations.add(String(asset.location).trim());
      }
    }

    const cat = asset.category || 'Lainnya';
    if (!catMap.has(cat)) {
      catMap.set(cat, { category: cat, items: 0, units: 0, diTempat: 0, dipinjam: 0, value: 0 });
    }
    const catGroup = catMap.get(cat);
    catGroup.items += 1;
    catGroup.units += qty;
    catGroup.diTempat += availableQty;
    catGroup.dipinjam += borrowedQty;
    catGroup.value += val;
  }

  summary.diTempat = Math.max(0, summary.units - totalBorrowedUnits);

  summary.byItem = Array.from(itemMap.values())
    .map((item) => ({
      ...item,
      locations: Array.from(item.locations).join(', '),
    }))
    .sort((a, b) => b.quantity - a.quantity || a.name.localeCompare(b.name));

  summary.byCategory = Array.from(catMap.values())
    .sort((a, b) => b.units - a.units);

  return summary;
}

function csvEscape(value) {
  let s = String(value ?? '');
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return /[;"\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function sendCsv(res, filename, rows) {
  const body = `\uFEFF${rows.map((row) => row.map(csvEscape).join(';')).join('\r\n')}`;
  res.writeHead(200, {
    'Content-Type': 'text/csv; charset=utf-8',
    'Content-Disposition': `attachment; filename="${filename}"`,
    'Cache-Control': 'no-store',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function typeLabel(type) {
  return type === 'income' ? 'Pemasukan' : 'Pengeluaran';
}

function conditionLabel(condition) {
  if (condition === 'rusak-ringan') return 'Rusak ringan';
  if (condition === 'rusak-berat') return 'Rusak berat';
  return 'Baik';
}

function parseFilters(url) {
  const params = url.searchParams;
  const month = monthValue(params.get('month'));
  const from = dateValue(params.get('from'), 'Dari tanggal', { required: false }) || '';
  const to = dateValue(params.get('to'), 'Sampai tanggal', { required: false }) || '';
  const type = params.get('type');
  const category = text(params.get('category'), 'Kategori', { required: false, max: 50 });
  const q = text(params.get('q'), 'Pencarian', { required: false, max: 100 });
  return { month, from, to, type, category, q };
}

function getCategories(db) {
  if (!db.categories || typeof db.categories !== 'object') {
    db.categories = {};
  }
  if (!Array.isArray(db.categories.pos)) {
    db.categories.pos = [...DEFAULT_CATEGORIES.pos];
  }
  if (!Array.isArray(db.categories.income)) {
    db.categories.income = [...DEFAULT_CATEGORIES.income];
  }
  if (!Array.isArray(db.categories.expense)) {
    db.categories.expense = [...DEFAULT_CATEGORIES.expense];
  }

  const posSet = new Set(db.categories.pos.map((p) => normalizePosName(p)));
  for (const t of db.transactions) {
    if (t.category) {
      const norm = normalizePosName(t.category);
      if (norm && !posSet.has(norm)) {
        const cleanName = t.category.replace(/^(pemasukan|pengeluaran)\s+/i, '').trim();
        if (cleanName) {
          db.categories.pos.push(cleanName);
          posSet.add(norm);
        }
      }
    }
  }

  const incomeSet = new Set(db.categories.income.map((c) => c.toLowerCase()));
  for (const t of db.transactions) {
    if (t.type === 'income' && t.category && !incomeSet.has(t.category.toLowerCase())) {
      db.categories.income.push(t.category);
      incomeSet.add(t.category.toLowerCase());
    }
  }

  const expenseSet = new Set(db.categories.expense.map((c) => c.toLowerCase()));
  for (const t of db.transactions) {
    if (t.type === 'expense' && t.category && !expenseSet.has(t.category.toLowerCase())) {
      db.categories.expense.push(t.category);
      expenseSet.add(t.category.toLowerCase());
    }
  }

  return db.categories;
}

function getPosSummary(db, month) {
  const cats = getCategories(db);
  const posList = cats.pos || [];
  return posList.map((posName) => {
    const allTxs = db.transactions.filter((t) => matchPosName(t.category, posName));
    const allTotals = totals(allTxs);
    const monthTxs = filterTransactions(db, { month, category: posName });
    const monthTotals = totals(monthTxs);
    return {
      name: posName,
      balance: allTotals.balance,
      income: allTotals.income,
      expense: allTotals.expense,
      count: allTxs.length,
      incomeCount: allTxs.filter((t) => t.type === 'income').length,
      expenseCount: allTxs.filter((t) => t.type === 'expense').length,
      monthIncome: monthTotals.income,
      monthExpense: monthTotals.expense,
      monthBalance: monthTotals.balance,
      monthCount: monthTxs.length,
    };
  });
}

function handleListCategories(ctx) {
  const categories = getCategories(ctx.db);
  sendJson(ctx.res, 200, { categories });
}

async function handleCreateCategory(ctx) {
  requireWritePermission(ctx);
  const body = await readJson(ctx.req);
  const type = body.type === 'expense' ? 'expense' : body.type === 'pos' ? 'pos' : 'income';
  const name = text(body.name, 'Nama pos / kategori', { min: 2, max: 50 });
  const categories = getCategories(ctx.db);
  const targetList = categories[type] || categories.pos;
  const normName = normalizePosName(name);

  if (targetList.some((c) => normalizePosName(c) === normName)) {
    throw new ApiError(409, `Pos / kategori "${name}" sudah ada`);
  }
  targetList.push(name);
  if (type === 'pos') {
    if (!categories.income.some((c) => normalizePosName(c) === normName)) {
      categories.income.push(name);
    }
    if (!categories.expense.some((c) => normalizePosName(c) === normName)) {
      categories.expense.push(name);
    }
  }
  ctx.save();
  sendJson(ctx.res, 201, { ok: true, name, categories });
}

async function handleUpdateCategory(ctx) {
  requireWritePermission(ctx);
  const body = await readJson(ctx.req);
  const type = body.type === 'expense' ? 'expense' : body.type === 'pos' ? 'pos' : 'income';
  const oldName = text(body.oldName, 'Nama lama', { min: 1, max: 50 });
  const newName = text(body.newName, 'Nama baru', { min: 2, max: 50 });
  const categories = getCategories(ctx.db);
  const targetList = categories[type] || categories.pos;
  const index = targetList.findIndex((c) => matchPosName(c, oldName));
  if (index === -1) {
    throw new ApiError(404, 'Pos / kategori tidak ditemukan');
  }

  const normNew = normalizePosName(newName);
  if (targetList.some((c, i) => i !== index && normalizePosName(c) === normNew)) {
    throw new ApiError(409, `Pos / kategori "${newName}" sudah ada`);
  }

  targetList[index] = newName;

  if (type === 'pos') {
    const incIdx = categories.income.findIndex((c) => matchPosName(c, oldName));
    if (incIdx !== -1) categories.income[incIdx] = newName;
    else if (!categories.income.some((c) => normalizePosName(c) === normNew)) categories.income.push(newName);

    const expIdx = categories.expense.findIndex((c) => matchPosName(c, oldName));
    if (expIdx !== -1) categories.expense[expIdx] = newName;
    else if (!categories.expense.some((c) => normalizePosName(c) === normNew)) categories.expense.push(newName);
  }

  let updatedTxCount = 0;
  for (const t of ctx.db.transactions) {
    if (matchPosName(t.category, oldName)) {
      t.category = newName;
      t.updatedAt = new Date().toISOString();
      updatedTxCount++;
    }
  }

  ctx.save();
  sendJson(ctx.res, 200, { ok: true, oldName, newName, updatedTxCount, categories });
}

async function handleDeleteCategory(ctx) {
  requireWritePermission(ctx);
  const body = await readJson(ctx.req);
  const type = body.type === 'expense' ? 'expense' : body.type === 'pos' ? 'pos' : 'income';
  const name = text(body.name, 'Nama pos / kategori', { min: 1, max: 50 });
  const categories = getCategories(ctx.db);
  const targetList = categories[type] || categories.pos;
  const index = targetList.findIndex((c) => matchPosName(c, name));
  if (index === -1) {
    throw new ApiError(404, 'Pos / kategori tidak ditemukan');
  }
  const inUse = ctx.db.transactions.some((t) => matchPosName(t.category, name));
  if (inUse) {
    throw new ApiError(400, `Pos "${name}" tidak dapat dihapus karena masih digunakan dalam catatan transaksi`);
  }
  targetList.splice(index, 1);
  ctx.save();
  sendJson(ctx.res, 200, { ok: true, categories });
}

async function handleLogin(ctx) {
  const { req, res, db, ip, secure } = ctx;
  if (!checkRateLimit(ip)) {
    throw new ApiError(429, 'Terlalu banyak percobaan login. Coba lagi 15 menit lagi.');
  }
  const body = await readJson(req);
  const username = text(body.username, 'Username', { max: 64 }).toLowerCase();
  const password = typeof body.password === 'string' ? body.password : '';
  const user = db.users.find((u) => u.username.toLowerCase() === username);
  if (!user || !verifyPassword(password, user.salt, user.hash)) {
    recordFailure(ip);
    throw new ApiError(401, 'Username atau password salah');
  }
  clearFailures(ip);
  sendJson(res, 200, { user: publicUser(user) }, { 'Set-Cookie': createSessionCookie(user, secure) });
}

function handleLogout(ctx) {
  sendJson(
    ctx.res,
    200,
    { ok: true },
    { 'Set-Cookie': clearSessionCookie(ctx.secure) }
  );
}

function handleMe(ctx) {
  sendJson(ctx.res, 200, { user: publicUser(ctx.user) });
}

function handleDashboard(ctx) {
  const { db, url, rtName } = ctx;
  const month = monthValue(url.searchParams.get('month')) || currentMonth();
  const category = text(url.searchParams.get('category'), 'Kategori / Pos', { required: false, max: 50 });
  const posList = getPosSummary(db, month);

  if (category) {
    const allPosTx = db.transactions.filter((t) => matchPosName(t.category, category));
    const monthPosTx = filterTransactions(db, { month, category });
    const posTotals = totals(allPosTx);
    const monthPosTotals = totals(monthPosTx);

    const chartMonths = lastMonths(month, 6).map((key) => {
      const list = filterTransactions(db, { month: key, category });
      return {
        month: key,
        ...totals(list),
      };
    });

    const cleanPosName = category.replace(/^(pemasukan|pengeluaran)\s+/i, '').trim();

    return sendJson(ctx.res, 200, {
      mode: 'category',
      category: cleanPosName,
      pos: cleanPosName,
      month,
      rtName,
      balance: posTotals.balance,
      totals: posTotals,
      monthTotals: monthPosTotals,
      counts: {
        total: allPosTx.length,
        income: allPosTx.filter((t) => t.type === 'income').length,
        expense: allPosTx.filter((t) => t.type === 'expense').length,
        monthTotal: monthPosTx.length,
        monthIncome: monthPosTx.filter((t) => t.type === 'income').length,
        monthExpense: monthPosTx.filter((t) => t.type === 'expense').length,
      },
      chart: chartMonths,
      recent: filterTransactions(db, { category }).slice(0, 3),
      assets: assetSummary(db),
      posList,
    });
  }

  const chartMonths = lastMonths(month, 6).map((key) => ({
    month: key,
    ...totals(filterTransactions(db, { month: key })),
  }));
  const monthList = filterTransactions(db, { month });

  sendJson(ctx.res, 200, {
    mode: 'all',
    month,
    rtName,
    balance: totals(db.transactions),
    monthTotals: totals(monthList),
    monthCount: monthList.length,
    chart: chartMonths,
    recent: filterTransactions(db, {}).slice(0, 3),
    assets: assetSummary(db),
    posBreakdown: posList,
    posList,
  });
}

function handleListTransactions(ctx) {
  const { db, url } = ctx;
  const filters = parseFilters(url);
  const limitParam = Number(url.searchParams.get('limit'));
  const limit = Number.isInteger(limitParam) && limitParam > 0 ? Math.min(limitParam, 2000) : 1000;
  const all = filterTransactions(db, filters);
  sendJson(ctx.res, 200, {
    transactions: all.slice(0, limit),
    count: all.length,
    totals: totals(all),
  });
}

async function handleCreateTransaction(ctx) {
  requireWritePermission(ctx);
  const { req, res, db, save, user } = ctx;
  const body = await readJson(req);
  const type = body.type === 'income' || body.type === 'expense' ? body.type : null;
  if (!type) throw new ApiError(400, 'Jenis transaksi tidak valid');
  const category = text(body.category, 'Kategori', { max: 50 });

  // Daftarkan otomatis ke master kategori & master pos jika belum ada
  const cats = getCategories(db);
  const targetList = type === 'expense' ? cats.expense : cats.income;
  if (!targetList.some((c) => c.toLowerCase() === category.toLowerCase())) {
    targetList.push(category);
  }
  const cleanPos = category.replace(/^(pemasukan|pengeluaran)\s+/i, '').trim();
  if (cleanPos && !cats.pos.some((p) => normalizePosName(p) === normalizePosName(cleanPos))) {
    cats.pos.push(cleanPos);
  }

  const now = new Date().toISOString();
  const transaction = {
    id: crypto.randomUUID(),
    type,
    date: dateValue(body.date, 'Tanggal'),
    category,
    description: text(body.description, 'Keterangan', { required: false, max: 300 }),
    amount: intValue(body.amount, 'Nominal', { min: 1 }),
    createdBy: user.username,
    createdAt: now,
    updatedAt: now,
  };
  db.transactions.push(transaction);
  save();
  sendJson(res, 201, { transaction });
}

async function handleUpdateTransaction(ctx, id) {
  requireWritePermission(ctx);
  const { req, res, db, save } = ctx;
  const transaction = db.transactions.find((t) => t.id === id);
  if (!transaction) throw new ApiError(404, 'Transaksi tidak ditemukan');
  const body = await readJson(req);
  const type = body.type === 'income' || body.type === 'expense' ? body.type : null;
  if (!type) throw new ApiError(400, 'Jenis transaksi tidak valid');
  const category = text(body.category, 'Kategori', { max: 50 });

  const cats = getCategories(db);
  const targetList = type === 'expense' ? cats.expense : cats.income;
  if (!targetList.some((c) => c.toLowerCase() === category.toLowerCase())) {
    targetList.push(category);
  }
  const cleanPos = category.replace(/^(pemasukan|pengeluaran)\s+/i, '').trim();
  if (cleanPos && !cats.pos.some((p) => normalizePosName(p) === normalizePosName(cleanPos))) {
    cats.pos.push(cleanPos);
  }

  transaction.type = type;
  transaction.date = dateValue(body.date, 'Tanggal');
  transaction.category = category;
  transaction.description = text(body.description, 'Keterangan', { required: false, max: 300 });
  transaction.amount = intValue(body.amount, 'Nominal', { min: 1 });
  transaction.updatedAt = new Date().toISOString();
  save();
  sendJson(res, 200, { transaction });
}

function handleDeleteTransaction(ctx, id) {
  requireWritePermission(ctx);
  const { db, save } = ctx;
  const index = db.transactions.findIndex((t) => t.id === id);
  if (index === -1) throw new ApiError(404, 'Transaksi tidak ditemukan');
  db.transactions.splice(index, 1);
  save();
  sendJson(ctx.res, 200, { ok: true });
}

function handleListAssets(ctx) {
  const { db, url } = ctx;
  const q = text(url.searchParams.get('q'), 'Pencarian', { required: false, max: 100 }).toLowerCase();
  const category = text(url.searchParams.get('category'), 'Kategori', { required: false, max: 50 });
  const loans = Array.isArray(db.assetLoans) ? db.assetLoans : [];
  const borrowedByAssetId = getBorrowedByAssetId(loans);

  let list = db.assets.map((a) => {
    const borrowedQty = borrowedByAssetId.get(a.id) || 0;
    return {
      ...a,
      borrowedQty,
      availableQty: Math.max(0, (Number(a.quantity) || 0) - borrowedQty),
    };
  });

  if (category) list = list.filter((a) => a.category === category);
  if (q) {
    list = list.filter((a) =>
      `${a.name} ${a.category} ${a.location} ${a.note}`.toLowerCase().includes(q)
    );
  }
  list = list.slice().sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')));
  sendJson(ctx.res, 200, { assets: list, summary: assetSummary(db) });
}

function assetPayload(body) {
  return {
    name: text(body.name, 'Nama aset', { max: 100 }),
    category: text(body.category, 'Kategori', { max: 50 }),
    icon: text(body.icon, 'Ikon / Emoji aset', { required: false, max: 50 }) || '',
    quantity: intValue(body.quantity, 'Jumlah', { min: 1, max: 100000 }),
    condition: CONDITIONS.includes(body.condition) ? body.condition : 'baik',
    acquiredDate: dateValue(body.acquiredDate, 'Tanggal perolehan', { required: false }),
    value: intValue(body.value ?? 0, 'Nilai', { min: 0 }),
    location: text(body.location, 'Lokasi', { required: false, max: 100 }),
    note: text(body.note, 'Catatan', { required: false, max: 500 }),
  };
}

async function handleCreateAsset(ctx) {
  requireWritePermission(ctx);
  const { req, res, db, save, user } = ctx;
  const body = await readJson(req);
  const now = new Date().toISOString();
  const asset = {
    id: crypto.randomUUID(),
    ...assetPayload(body),
    createdBy: user.username,
    createdAt: now,
    updatedAt: now,
  };
  db.assets.push(asset);
  save();
  sendJson(res, 201, { asset });
}

async function handleUpdateAsset(ctx, id) {
  requireWritePermission(ctx);
  const { req, res, db, save } = ctx;
  const asset = db.assets.find((a) => a.id === id);
  if (!asset) throw new ApiError(404, 'Aset tidak ditemukan');
  const body = await readJson(req);
  const payload = assetPayload(body);

  const loans = Array.isArray(db.assetLoans) ? db.assetLoans : [];
  const borrowedMap = getBorrowedByAssetId(loans);
  const currentlyBorrowed = borrowedMap.get(id) || 0;
  if (payload.quantity < currentlyBorrowed) {
    throw new ApiError(
      400,
      `Jumlah aset tidak boleh kurang dari unit yang sedang dipinjam (${currentlyBorrowed} unit sedang dipinjam)`
    );
  }

  Object.assign(asset, payload, { updatedAt: new Date().toISOString() });
  save();
  sendJson(res, 200, { asset });
}

function handleDeleteAsset(ctx, id) {
  requireWritePermission(ctx);
  const { db, save } = ctx;
  const index = db.assets.findIndex((a) => a.id === id);
  if (index === -1) throw new ApiError(404, 'Aset tidak ditemukan');
  const loans = Array.isArray(db.assetLoans) ? db.assetLoans : [];
  const borrowedMap = getBorrowedByAssetId(loans);
  if ((borrowedMap.get(id) || 0) > 0) {
    throw new ApiError(400, 'Aset tidak dapat dihapus karena masih ada unit yang sedang dipinjam warga');
  }
  db.assets.splice(index, 1);
  save();
  sendJson(ctx.res, 200, { ok: true });
}

async function handleUpdateAssetIcon(ctx) {
  requireWritePermission(ctx);
  const { req, res, db, save } = ctx;
  const body = await readJson(req);
  const name = text(body.name, 'Nama barang', { max: 100 }).trim();
  const iconVal = text(body.icon, 'Ikon barang', { required: false, max: 50 }).trim();
  if (!name) throw new ApiError(400, 'Nama barang wajib diisi');

  let updatedCount = 0;
  for (const asset of db.assets) {
    if (String(asset.name || '').trim().toLowerCase() === name.toLowerCase()) {
      asset.icon = iconVal;
      asset.updatedAt = new Date().toISOString();
      updatedCount++;
    }
  }
  save();
  sendJson(res, 200, { ok: true, name, icon: iconVal, updatedCount });
}

function handleReport(ctx) {
  const { db, url, rtName } = ctx;
  const params = url.searchParams;
  const month = monthValue(params.get('month'));
  let { from, to } = parseFilters(url);
  if (month) ({ from, to } = monthRange(month));
  const list = filterTransactions(db, { from, to }).sort(
    (a, b) => a.date.localeCompare(b.date) || String(a.createdAt || '').localeCompare(String(b.createdAt || ''))
  );
  const opening = from ? totals(db.transactions.filter((t) => t.date < from)) : { income: 0, expense: 0, balance: 0 };
  const periodTotals = totals(list);
  sendJson(ctx.res, 200, {
    month,
    from,
    to,
    rtName,
    openingBalance: opening.balance,
    totals: periodTotals,
    closingBalance: opening.balance + periodTotals.balance,
    byCategory: byCategory(list),
    transactions: list,
    count: list.length,
  });
}

function handleExportTransactions(ctx) {
  const { db, url } = ctx;
  const filters = parseFilters(url);
  const list = filterTransactions(db, filters).sort(
    (a, b) => a.date.localeCompare(b.date) || String(a.createdAt || '').localeCompare(String(b.createdAt || ''))
  );
  const rows = [
    ['Tanggal', 'Jenis', 'Kategori', 'Keterangan', 'Nominal (Rp)'],
    ...list.map((t) => [t.date, typeLabel(t.type), t.category, t.description, t.amount]),
  ];
  let suffix = 'semua';
  if (filters.category) {
    suffix = filters.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  } else if (filters.month) {
    suffix = filters.month;
  } else if (filters.from || filters.to) {
    suffix = `${filters.from || 'awal'}_${filters.to || 'akhir'}`;
  }
  sendCsv(ctx.res, `kas-rt-transaksi-${suffix}.csv`, rows);
}

function handleExportAssets(ctx) {
  const { db } = ctx;
  const loans = Array.isArray(db.assetLoans) ? db.assetLoans : [];
  const borrowedByAssetId = getBorrowedByAssetId(loans);

  const list = db.assets.slice().sort((a, b) => a.name.localeCompare(b.name));
  const rows = [
    [
      'Nama Aset',
      'Kategori',
      'Total Unit',
      'Ada di Tempat',
      'Sedang Dipinjam',
      'Kondisi',
      'Tanggal Perolehan',
      'Nilai (Rp)',
      'Lokasi',
      'Catatan',
    ],
    ...list.map((a) => {
      const borrowed = borrowedByAssetId.get(a.id) || 0;
      const diTempat = Math.max(0, (Number(a.quantity) || 0) - borrowed);
      return [
        a.name,
        a.category,
        a.quantity,
        diTempat,
        borrowed,
        conditionLabel(a.condition),
        a.acquiredDate,
        a.value,
        a.location,
        a.note,
      ];
    }),
  ];
  sendCsv(ctx.res, 'kas-rt-aset.csv', rows);
}

function handleListAssetLoans(ctx) {
  const { db, url } = ctx;
  const status = url.searchParams.get('status') || 'all';
  const assetId = url.searchParams.get('assetId');
  const q = text(url.searchParams.get('q'), 'Pencarian', { required: false, max: 100 }).toLowerCase();

  let loans = Array.isArray(db.assetLoans) ? db.assetLoans : [];
  if (status === 'dipinjam' || status === 'dikembalikan') {
    loans = loans.filter((l) => l.status === status);
  }
  if (assetId) {
    loans = loans.filter((l) => {
      if (Array.isArray(l.items) && l.items.length > 0) {
        return l.items.some((it) => it.assetId === assetId);
      }
      return l.assetId === assetId;
    });
  }
  if (q) {
    loans = loans.filter((l) => {
      const itemsText = Array.isArray(l.items) ? l.items.map((it) => it.assetName).join(' ') : '';
      return `${l.assetName || ''} ${itemsText} ${l.borrowerName || ''} ${l.borrowerContact || ''} ${l.purpose || ''} ${l.returnNote || ''}`
        .toLowerCase()
        .includes(q);
    });
  }

  loans = loans.slice().sort((a, b) => {
    if (a.status !== b.status) {
      return a.status === 'dipinjam' ? -1 : 1;
    }
    return (
      String(b.loanDate || '').localeCompare(String(a.loanDate || '')) ||
      String(b.createdAt || '').localeCompare(String(a.createdAt || ''))
    );
  });

  sendJson(ctx.res, 200, {
    loans,
    summary: assetSummary(db),
  });
}

async function handleCreateAssetLoan(ctx) {
  requireWritePermission(ctx);
  const { req, res, db, save, user } = ctx;
  const body = await readJson(req);

  const borrowerName = text(body.borrowerName, 'Nama peminjam', { min: 2, max: 100 });
  const borrowerContact = text(body.borrowerContact, 'Kontak / Alamat', { required: false, max: 100 });
  const loanDate = dateValue(body.loanDate, 'Tanggal pinjam');
  const expectedReturnDate = dateValue(body.expectedReturnDate, 'Estimasi tanggal kembali', { required: false });
  const purpose = text(body.purpose, 'Keperluan peminjaman', { required: false, max: 300 });

  if (expectedReturnDate && expectedReturnDate < loanDate) {
    throw new ApiError(400, 'Estimasi tanggal kembali tidak boleh sebelum tanggal pinjam');
  }

  let rawItems = [];
  if (Array.isArray(body.items) && body.items.length > 0) {
    rawItems = body.items;
  } else if (body.assetId) {
    rawItems = [{ assetId: body.assetId, quantity: body.quantity }];
  } else {
    throw new ApiError(400, 'Pilih minimal satu barang yang dipinjam');
  }

  // Deduplicate and aggregate quantities by assetId
  const itemMap = new Map();
  for (const it of rawItems) {
    const aid = text(it.assetId, 'ID Aset');
    const q = intValue(it.quantity, 'Jumlah dipinjam', { min: 1, max: 10000 });
    itemMap.set(aid, (itemMap.get(aid) || 0) + q);
  }

  const loans = Array.isArray(db.assetLoans) ? db.assetLoans : [];
  const borrowedMap = getBorrowedByAssetId(loans);

  const validatedItems = [];
  let totalQuantity = 0;

  for (const [aid, qty] of itemMap.entries()) {
    const asset = db.assets.find((a) => a.id === aid);
    if (!asset) {
      throw new ApiError(404, `Aset dengan ID "${aid}" tidak ditemukan`);
    }
    const currentlyBorrowed = borrowedMap.get(aid) || 0;
    const availableQty = Math.max(0, (Number(asset.quantity) || 0) - currentlyBorrowed);
    if (qty > availableQty) {
      throw new ApiError(
        400,
        `Unit "${asset.name}" yang ada di tempat hanya tersisa ${availableQty} unit. Tidak mencukupi untuk meminjam ${qty} unit.`
      );
    }
    validatedItems.push({
      assetId: asset.id,
      assetName: asset.name,
      quantity: qty,
    });
    totalQuantity += qty;
  }

  const assetNameSummary = validatedItems.length === 1
    ? validatedItems[0].assetName
    : validatedItems.map((i) => `${i.assetName} (${i.quantity})`).join(', ');

  const now = new Date().toISOString();
  const loan = {
    id: crypto.randomUUID(),
    items: validatedItems,
    assetId: validatedItems[0].assetId,
    assetName: assetNameSummary,
    quantity: totalQuantity,
    borrowerName,
    borrowerContact,
    loanDate,
    expectedReturnDate: expectedReturnDate || '',
    returnDate: '',
    status: 'dipinjam',
    purpose,
    returnCondition: '',
    returnNote: '',
    createdBy: user.username,
    createdAt: now,
    updatedAt: now,
  };

  if (!Array.isArray(db.assetLoans)) db.assetLoans = [];
  db.assetLoans.push(loan);
  save();

  sendJson(res, 201, { loan, summary: assetSummary(db) });
}

async function handleReturnAssetLoan(ctx, id) {
  requireWritePermission(ctx);
  const { req, res, db, save } = ctx;
  const loans = Array.isArray(db.assetLoans) ? db.assetLoans : [];
  const loan = loans.find((l) => l.id === id);
  if (!loan) throw new ApiError(404, 'Data peminjaman tidak ditemukan');

  if (loan.status === 'dikembalikan') {
    throw new ApiError(400, 'Barang pinjaman ini sudah berstatus dikembalikan');
  }

  const body = await readJson(req);
  const returnDate =
    dateValue(body.returnDate, 'Tanggal kembali', { required: false }) ||
    new Date().toISOString().slice(0, 10);
  const returnCondition = CONDITIONS.includes(body.returnCondition) ? body.returnCondition : 'baik';
  const returnNote = text(body.returnNote, 'Catatan pengembalian', { required: false, max: 300 });

  loan.status = 'dikembalikan';
  loan.returnDate = returnDate;
  loan.returnCondition = returnCondition;
  loan.returnNote = returnNote;
  loan.updatedAt = new Date().toISOString();

  save();
  sendJson(res, 200, { loan, summary: assetSummary(db) });
}

async function handleUpdateAssetLoan(ctx, id) {
  requireWritePermission(ctx);
  const { req, res, db, save } = ctx;
  const loans = Array.isArray(db.assetLoans) ? db.assetLoans : [];
  const loan = loans.find((l) => l.id === id);
  if (!loan) throw new ApiError(404, 'Data peminjaman tidak ditemukan');

  const body = await readJson(req);
  const borrowerName = text(body.borrowerName, 'Nama peminjam', { min: 2, max: 100 });
  const borrowerContact = text(body.borrowerContact, 'Kontak / Alamat', { required: false, max: 100 });
  const loanDate = dateValue(body.loanDate, 'Tanggal pinjam');
  const expectedReturnDate = dateValue(body.expectedReturnDate, 'Estimasi tanggal kembali', { required: false });
  const purpose = text(body.purpose, 'Keperluan', { required: false, max: 300 });

  let rawItems = [];
  if (Array.isArray(body.items) && body.items.length > 0) {
    rawItems = body.items;
  } else if (body.assetId) {
    rawItems = [{ assetId: body.assetId, quantity: body.quantity }];
  } else if (Array.isArray(loan.items) && loan.items.length > 0) {
    rawItems = loan.items;
  } else {
    rawItems = [{ assetId: loan.assetId, quantity: loan.quantity }];
  }

  const itemMap = new Map();
  for (const it of rawItems) {
    const aid = text(it.assetId, 'ID Aset');
    const q = intValue(it.quantity, 'Jumlah dipinjam', { min: 1, max: 10000 });
    itemMap.set(aid, (itemMap.get(aid) || 0) + q);
  }

  const borrowedMap = getBorrowedByAssetId(loans, id);
  const validatedItems = [];
  let totalQuantity = 0;

  for (const [aid, qty] of itemMap.entries()) {
    const asset = db.assets.find((a) => a.id === aid);
    if (!asset) {
      throw new ApiError(404, `Aset dengan ID "${aid}" tidak ditemukan`);
    }
    if (loan.status === 'dipinjam') {
      const currentlyBorrowed = borrowedMap.get(aid) || 0;
      const availableQty = Math.max(0, (Number(asset.quantity) || 0) - currentlyBorrowed);
      if (qty > availableQty) {
        throw new ApiError(
          400,
          `Stok "${asset.name}" yang ada di tempat hanya tersisa ${availableQty} unit. Tidak mencukupi untuk meminjam ${qty} unit.`
        );
      }
    }
    validatedItems.push({
      assetId: asset.id,
      assetName: asset.name,
      quantity: qty,
    });
    totalQuantity += qty;
  }

  const assetNameSummary = validatedItems.length === 1
    ? validatedItems[0].assetName
    : validatedItems.map((i) => `${i.assetName} (${i.quantity})`).join(', ');

  loan.items = validatedItems;
  loan.assetId = validatedItems[0].assetId;
  loan.assetName = assetNameSummary;
  loan.quantity = totalQuantity;
  loan.borrowerName = borrowerName;
  loan.borrowerContact = borrowerContact;
  loan.loanDate = loanDate;
  loan.expectedReturnDate = expectedReturnDate || '';
  loan.purpose = purpose;
  loan.updatedAt = new Date().toISOString();

  save();
  sendJson(res, 200, { loan, summary: assetSummary(db) });
}

function handleDeleteAssetLoan(ctx, id) {
  requireWritePermission(ctx);
  const { db, save } = ctx;
  const loans = Array.isArray(db.assetLoans) ? db.assetLoans : [];
  const index = loans.findIndex((l) => l.id === id);
  if (index === -1) throw new ApiError(404, 'Data peminjaman tidak ditemukan');

  loans.splice(index, 1);
  save();
  sendJson(ctx.res, 200, { ok: true, summary: assetSummary(db) });
}

function handleExportAssetLoans(ctx) {
  const { db } = ctx;
  const loans = Array.isArray(db.assetLoans) ? db.assetLoans.slice() : [];
  loans.sort((a, b) => String(b.loanDate || '').localeCompare(String(a.loanDate || '')));

  const rows = [
    [
      'Status',
      'Tanggal Pinjam',
      'Daftar Barang',
      'Total Unit',
      'Nama Peminjam',
      'Kontak / Alamat',
      'Estimasi Kembali',
      'Tanggal Kembali',
      'Kondisi Kembali',
      'Keperluan',
      'Catatan Pengembalian',
      'Petugas',
    ],
    ...loans.map((l) => {
      const itemsText = Array.isArray(l.items) && l.items.length > 0
        ? l.items.map((i) => `${i.assetName} (${i.quantity} unit)`).join('; ')
        : `${l.assetName || ''} (${l.quantity} unit)`;
      return [
        l.status === 'dipinjam' ? 'Sedang Dipinjam' : 'Sudah Dikembalikan',
        l.loanDate,
        itemsText,
        l.quantity,
        l.borrowerName,
        l.borrowerContact,
        l.expectedReturnDate || '—',
        l.returnDate || '—',
        l.returnCondition ? conditionLabel(l.returnCondition) : '—',
        l.purpose || '—',
        l.returnNote || '—',
        l.createdBy || '—',
      ];
    }),
  ];
  sendCsv(ctx.res, 'kas-rt-riwayat-peminjaman.csv', rows);
}

function sendPdf(res, filename, buffer) {
  res.removeHeader('Content-Security-Policy');
  res.removeHeader('X-Frame-Options');
  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `inline; filename="${filename}"`,
    'Cache-Control': 'no-store',
    'Content-Length': buffer.length,
  });
  res.end(buffer);
}

async function handleLoanPdf(ctx, loanId) {
  if (!ctx.user) throw new ApiError(401, 'Silakan login terlebih dahulu');
  const { db } = ctx;
  const loan = (db.assetLoans || []).find((l) => l.id === loanId);
  if (!loan) throw new ApiError(404, 'Data peminjaman tidak ditemukan');

  const assetMap = new Map((db.assets || []).map((a) => [a.id, a.name]));
  const items = Array.isArray(loan.items) && loan.items.length > 0
    ? loan.items.map((it) => ({
        ...it,
        assetName: assetMap.get(it.assetId) || it.assetName || 'Barang Inventaris',
      }))
    : [
        {
          assetId: loan.assetId,
          assetName: assetMap.get(loan.assetId) || loan.assetName || 'Barang Inventaris',
          quantity: loan.quantity,
        },
      ];

  const loanData = {
    ...loan,
    items,
    assetName: loan.assetName || items.map((i) => `${i.assetName} (${i.quantity})`).join(', '),
  };

  const buffer = await generateLoanPdfBuffer(loanData, ctx.rtName || 'RT 07');
  const safeName = (loan.borrowerName || 'peminjaman').replace(/[^a-zA-Z0-9_-]/g, '_');
  const filename = `Form_Peminjaman_${safeName}.pdf`;
  sendPdf(ctx.res, filename, buffer);
}

function handleListUsers(ctx) {
  if (ctx.user.role !== 'admin') throw new ApiError(403, 'Hanya admin yang dapat mengelola pengguna');
  const users = ctx.db.users
    .slice()
    .sort((a, b) => String(a.createdAt || '').localeCompare(String(b.createdAt || '')))
    .map(publicUser);
  sendJson(ctx.res, 200, { users });
}

function validatePassword(password, field = 'Password') {
  if (typeof password !== 'string' || password.length < 6 || password.length > 128) {
    throw new ApiError(400, `${field} minimal 6 karakter`);
  }
  return password;
}

async function handleCreateUser(ctx) {
  if (ctx.user.role !== 'admin') throw new ApiError(403, 'Hanya admin yang dapat menambah pengguna');
  const body = await readJson(ctx.req);
  const username = text(body.username, 'Username', { min: 3, max: 32 });
  if (!USERNAME.test(username)) {
    throw new ApiError(400, 'Username hanya boleh huruf, angka, titik, garis bawah, atau strip (3-32 karakter)');
  }
  if (ctx.db.users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
    throw new ApiError(409, 'Username sudah digunakan');
  }
  const role = ROLES.includes(body.role) ? body.role : 'bendahara';
  const { salt, hash } = hashPassword(validatePassword(body.password));
  const user = {
    id: crypto.randomUUID(),
    username,
    name: text(body.name, 'Nama', { max: 80 }),
    role,
    salt,
    hash,
    tokenVersion: 0,
    mustChangePassword: true,
    createdAt: new Date().toISOString(),
  };
  ctx.db.users.push(user);
  ctx.save();
  sendJson(ctx.res, 201, { user: publicUser(user) });
}

async function handleUpdateUser(ctx, id) {
  if (ctx.user.role !== 'admin') throw new ApiError(403, 'Hanya admin yang dapat mengubah pengguna');
  const target = ctx.db.users.find((u) => u.id === id);
  if (!target) throw new ApiError(404, 'Pengguna tidak ditemukan');
  const body = await readJson(ctx.req);
  const role = ROLES.includes(body.role) ? body.role : target.role;
  if (target.role === 'admin' && role !== 'admin') {
    const admins = ctx.db.users.filter((u) => u.role === 'admin').length;
    if (admins <= 1) throw new ApiError(400, 'Tidak bisa menurunkan admin terakhir');
  }
  target.name = text(body.name, 'Nama', { max: 80 });
  target.role = role;
  if (body.password) {
    if (target.id === ctx.user.id) {
      throw new ApiError(400, 'Gunakan menu Ubah Password untuk akun sendiri');
    }
    const { salt, hash } = hashPassword(validatePassword(body.password, 'Password baru'));
    target.salt = salt;
    target.hash = hash;
    target.mustChangePassword = true;
    target.tokenVersion = (target.tokenVersion || 0) + 1;
  }
  ctx.save();
  sendJson(ctx.res, 200, { user: publicUser(target) });
}

function handleDeleteUser(ctx, id) {
  if (ctx.user.role !== 'admin') throw new ApiError(403, 'Hanya admin yang dapat menghapus pengguna');
  if (id === ctx.user.id) throw new ApiError(400, 'Tidak bisa menghapus akun sendiri');
  const target = ctx.db.users.find((u) => u.id === id);
  if (!target) throw new ApiError(404, 'Pengguna tidak ditemukan');
  if (target.role === 'admin') {
    const admins = ctx.db.users.filter((u) => u.role === 'admin').length;
    if (admins <= 1) throw new ApiError(400, 'Tidak bisa menghapus admin terakhir');
  }
  ctx.db.users = ctx.db.users.filter((u) => u.id !== id);
  ctx.save();
  sendJson(ctx.res, 200, { ok: true });
}

async function handleChangePassword(ctx) {
  const body = await readJson(ctx.req);
  const current = typeof body.currentPassword === 'string' ? body.currentPassword : '';
  if (!verifyPassword(current, ctx.user.salt, ctx.user.hash)) {
    throw new ApiError(400, 'Password saat ini salah');
  }
  const newPassword = validatePassword(body.newPassword, 'Password baru');
  const { salt, hash } = hashPassword(newPassword);
  ctx.user.salt = salt;
  ctx.user.hash = hash;
  ctx.user.mustChangePassword = false;
  ctx.user.tokenVersion = (ctx.user.tokenVersion || 0) + 1;
  ctx.save();
  sendJson(
    ctx.res,
    200,
    { ok: true, user: publicUser(ctx.user) },
    { 'Set-Cookie': createSessionCookie(ctx.user, ctx.secure) }
  );
}

export async function handleApi(ctx) {
  const { req, url } = ctx;
  const method = req.method;
  const pathname = url.pathname;

  try {
    if (pathname === '/api/config' && method === 'GET') {
      return sendJson(ctx.res, 200, {
        rtName: ctx.rtName,
        appName: ctx.appName || `${ctx.rtName} Aplikasi Gank`
      });
    }
    if (pathname === '/api/login' && method === 'POST') return await handleLogin(ctx);
    if (pathname === '/api/logout' && method === 'POST') return handleLogout(ctx);
    if (pathname === '/api/me' && method === 'GET') {
      if (!ctx.user) throw new ApiError(401, 'Belum login');
      return handleMe(ctx);
    }

    if (!ctx.user) throw new ApiError(401, 'Sesi berakhir, silakan login kembali');

    if (pathname === '/api/dashboard' && method === 'GET') return handleDashboard(ctx);
    if (pathname === '/api/categories' && method === 'GET') return handleListCategories(ctx);
    if (pathname === '/api/categories' && method === 'POST') return await handleCreateCategory(ctx);
    if (pathname === '/api/categories' && method === 'PUT') return await handleUpdateCategory(ctx);
    if (pathname === '/api/categories' && method === 'DELETE') return await handleDeleteCategory(ctx);
    if (pathname === '/api/transactions' && method === 'GET') return handleListTransactions(ctx);
    if (pathname === '/api/transactions' && method === 'POST') return await handleCreateTransaction(ctx);

    let match = /^\/api\/transactions\/([^/]+)$/.exec(pathname);
    if (match) {
      if (method === 'PUT') return await handleUpdateTransaction(ctx, match[1]);
      if (method === 'DELETE') return handleDeleteTransaction(ctx, match[1]);
    }

    if (pathname === '/api/assets' && method === 'GET') return handleListAssets(ctx);
    if (pathname === '/api/assets' && method === 'POST') return await handleCreateAsset(ctx);
    if (pathname === '/api/assets/icon' && method === 'POST') return await handleUpdateAssetIcon(ctx);

    match = /^\/api\/assets\/([^/]+)$/.exec(pathname);
    if (match) {
      if (method === 'PUT') return await handleUpdateAsset(ctx, match[1]);
      if (method === 'DELETE') return handleDeleteAsset(ctx, match[1]);
    }

    if (pathname === '/api/asset-loans' && method === 'GET') return handleListAssetLoans(ctx);
    if (pathname === '/api/asset-loans' && method === 'POST') return await handleCreateAssetLoan(ctx);

    match = /^\/api\/asset-loans\/([^/]+)\/return$/.exec(pathname);
    if (match && method === 'POST') return await handleReturnAssetLoan(ctx, match[1]);

    match = /^\/api\/asset-loans\/([^/]+)\/pdf$/.exec(pathname);
    if (match && method === 'GET') return await handleLoanPdf(ctx, match[1]);

    match = /^\/api\/asset-loans\/([^/]+)$/.exec(pathname);
    if (match) {
      if (method === 'PUT') return await handleUpdateAssetLoan(ctx, match[1]);
      if (method === 'DELETE') return handleDeleteAssetLoan(ctx, match[1]);
    }

    if (pathname === '/api/report' && method === 'GET') return handleReport(ctx);
    if (pathname === '/api/export/transactions.csv' && method === 'GET') return handleExportTransactions(ctx);
    if (pathname === '/api/export/assets.csv' && method === 'GET') return handleExportAssets(ctx);
    if (pathname === '/api/export/asset-loans.csv' && method === 'GET') return handleExportAssetLoans(ctx);

    if (pathname === '/api/users' && method === 'GET') return handleListUsers(ctx);
    if (pathname === '/api/users' && method === 'POST') return await handleCreateUser(ctx);

    match = /^\/api\/users\/([^/]+)$/.exec(pathname);
    if (match) {
      if (method === 'PUT') return await handleUpdateUser(ctx, match[1]);
      if (method === 'DELETE') return handleDeleteUser(ctx, match[1]);
    }

    if (pathname === '/api/account/password' && method === 'POST') return await handleChangePassword(ctx);

    throw new ApiError(404, 'Endpoint tidak ditemukan');
  } catch (err) {
    const status = err instanceof ApiError ? err.status : 500;
    if (status >= 500) console.error(err);
    sendJson(ctx.res, status, {
      error: err instanceof ApiError ? err.message : 'Terjadi kesalahan pada server',
    });
  }
}
