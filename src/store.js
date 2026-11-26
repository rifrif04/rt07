import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR, DB_FILE } from './config.js';

export const DEFAULT_CATEGORIES = {
  pos: [
    'Karnaval',
    'Tahlil',
    'Iuran Warga',
    'Donasi Warga',
    'Sosial & Kematian',
    'Keamanan',
    'Kebersihan',
    'Perbaikan',
    'Lainnya',
  ],
  income: [
    'Karnaval',
    'Tahlil',
    'Iuran Warga',
    'Donasi',
    'Sewa',
    'Bantuan',
    'Hasil Usaha',
    'Lainnya',
  ],
  expense: [
    'Karnaval',
    'Tahlil',
    'Keamanan',
    'Kebersihan',
    'Perbaikan',
    'Konsumsi',
    'Listrik & Air',
    'Sosial',
    'Administrasi',
    'Lainnya',
  ],
};

export function normalizePosName(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/^(pemasukan|pengeluaran)\s+/i, '');
}

export function matchPosName(category, posName) {
  if (!category || !posName) return false;
  const a = normalizePosName(category);
  const b = normalizePosName(posName);
  return a === b || category.toLowerCase() === posName.toLowerCase();
}

function emptyDb() {
  return {
    users: [],
    transactions: [],
    assets: [],
    assetLoans: [],
    categories: {
      pos: [...DEFAULT_CATEGORIES.pos],
      income: [...DEFAULT_CATEGORIES.income],
      expense: [...DEFAULT_CATEGORIES.expense],
    },
    meta: { createdAt: new Date().toISOString() },
  };
}

export function loadDb() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_FILE)) return emptyDb();

  try {
    const db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    if (!Array.isArray(db.users)) db.users = [];
    if (!Array.isArray(db.transactions)) db.transactions = [];
    if (!Array.isArray(db.assets)) db.assets = [];
    if (!Array.isArray(db.assetLoans)) db.assetLoans = [];
    if (!db.meta || typeof db.meta !== 'object') db.meta = {};

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
          // Format clean capitalized name if it had prefix
          const cleanName = t.category.replace(/^(pemasukan|pengeluaran)\s+/i, '');
          db.categories.pos.push(cleanName);
          posSet.add(norm);
        }
      }
    }

    return db;
  } catch (err) {
    const backup = path.join(DATA_DIR, `db-corrupt-${Date.now()}.json`);
    fs.copyFileSync(DB_FILE, backup);
    console.error(`Database rusak. Salinan disimpan di ${backup}`);
    return emptyDb();
  }
}

export function saveDb(db) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = `${DB_FILE}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(db, null, 2));
  fs.renameSync(tmp, DB_FILE);
}
