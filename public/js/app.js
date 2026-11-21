const ICONS = {
  dashboard:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
  transactions:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h14"/><path d="m15 4 3 3-3 3"/><path d="M20 17H6"/><path d="m9 14-3 3 3 3"/></svg>',
  assets:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  report:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16v-4"/><path d="M12 16V8"/><path d="M17 16v-6"/></svg>',
  account:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  plus:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  edit:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  trash:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5"/><path d="M14 11v5"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
  print:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6"/><path d="M6 18H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/></svg>',
  logout:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  arrowUp:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>',
  arrowDown:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>',
  wallet:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M16 15h2"/></svg>',
  box:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  warning:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>',
  users:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  lock:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  tag:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><circle cx="7" cy="7" r="1.5"/></svg>',
  refresh:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>',
  clock:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
};

const VIEWS = new Set(['dashboard', 'transactions', 'assets', 'report', 'account']);
const DEFAULT_POS = [
  'Karnaval',
  'Tahlil',
  'Iuran Warga',
  'Donasi Warga',
  'Sosial & Kematian',
  'Keamanan',
  'Kebersihan',
  'Perbaikan',
  'Lainnya',
];
const INCOME_CATEGORIES = [
  'Karnaval',
  'Tahlil',
  'Iuran Warga',
  'Donasi',
  'Sewa',
  'Bantuan',
  'Hasil Usaha',
  'Lainnya',
];
const EXPENSE_CATEGORIES = [
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
];
const ASSET_CATEGORIES = ['Elektronik', 'Perabot', 'Kendaraan', 'Bangunan', 'Peralatan', 'Lainnya'];

function normalizePosName(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/^(pemasukan|pengeluaran)\s+/i, '');
}

function matchPosName(category, posName) {
  if (!category || !posName) return false;
  const a = normalizePosName(category);
  const b = normalizePosName(posName);
  return a === b || category.toLowerCase() === posName.toLowerCase();
}

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const moneyFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});
const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});
const monthFormatter = new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' });
const shortMonthFormatter = new Intl.DateTimeFormat('id-ID', { month: 'short' });
const liveDateFormatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

function formatLiveTime(now = new Date()) {
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  return `${h}:${m}:${s} WIB`;
}

let liveClockInterval = null;
function startLiveClock() {
  if (liveClockInterval) return;
  liveClockInterval = setInterval(() => {
    const dateEl = document.getElementById('live-clock-date');
    const timeEl = document.getElementById('live-clock-time');
    if (!dateEl && !timeEl) return;
    const now = new Date();
    if (dateEl) dateEl.textContent = liveDateFormatter.format(now);
    if (timeEl) timeEl.textContent = formatLiveTime(now);
  }, 1000);
}

function liveClockMarkup() {
  const now = new Date();
  return `
    <div class="live-clock-badge" role="timer" aria-live="off" title="Waktu saat ini (update real-time)">
      <span class="live-clock-dot" aria-hidden="true"></span>
      <span class="live-clock-icon" aria-hidden="true">${icon('clock')}</span>
      <span id="live-clock-date" class="live-clock-date">${escapeHtml(liveDateFormatter.format(now))}</span>
      <span class="live-clock-sep" aria-hidden="true">·</span>
      <span id="live-clock-time" class="live-clock-time">${escapeHtml(formatLiveTime(now))}</span>
    </div>
  `;
}

const fmtMoney = (value) => moneyFormatter.format(Number(value) || 0);

function parseDateOnly(value) {
  return new Date(`${value}T00:00:00`);
}

function fmtDate(value) {
  if (!value) return '—';
  const date = parseDateOnly(value);
  return Number.isNaN(date.getTime()) ? value : dateFormatter.format(date);
}

function monthLabel(value) {
  if (!value) return '';
  const date = parseDateOnly(`${value}-01`);
  return Number.isNaN(date.getTime()) ? value : monthFormatter.format(date);
}

function shortMonth(value) {
  const date = parseDateOnly(`${value}-01`);
  return Number.isNaN(date.getTime()) ? value : shortMonthFormatter.format(date);
}

function localDateString(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate()
  ).padStart(2, '0')}`;
}

const today = () => localDateString();
const currentMonth = () => today().slice(0, 7);

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return map[char];
  });
}

function initials(name) {
  const parts = String(name || '?')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return '?';
  return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
}

function icon(name) {
  return `<span class="icon" aria-hidden="true">${ICONS[name] || ''}</span>`;
}

const roleLabel = (role) => (role === 'admin' ? 'Admin' : 'Bendahara');
const conditionLabel = (condition) =>
  condition === 'rusak-ringan' ? 'Rusak ringan' : condition === 'rusak-berat' ? 'Rusak berat' : 'Baik';

const state = {
  user: null,
  rtName: 'RT 07',
  view: 'dashboard',
  dashboardCategory: '',
  categories: {
    pos: [...DEFAULT_POS],
    income: [...INCOME_CATEGORIES],
    expense: [...EXPENSE_CATEGORIES],
  },
  txFilters: { month: '', type: '', category: '', q: '' },
  txItems: [],
  assetFilters: { q: '', category: '' },
  assetItems: [],
  reportMonth: currentMonth(),
  users: [],
  editing: { tx: null, asset: null, user: null },
};

async function loadCategories() {
  try {
    const data = await api('/categories');
    if (data.categories) {
      if (Array.isArray(data.categories.pos) && data.categories.pos.length) {
        state.categories.pos = data.categories.pos;
      }
      if (Array.isArray(data.categories.income) && data.categories.income.length) {
        state.categories.income = data.categories.income;
      }
      if (Array.isArray(data.categories.expense) && data.categories.expense.length) {
        state.categories.expense = data.categories.expense;
      }
    }
  } catch {
    /* gunakan default jika offline atau belum login */
  }
}

function renderCategoryManagerList() {
  const container = $('#category-manager-list');
  if (!container) return;
  const list = state.categories.pos || [];
  if (!list.length) {
    container.innerHTML = '<span class="muted" style="font-size: 12px;">Belum ada pos terdaftar.</span>';
    return;
  }
  container.innerHTML = list
    .map(
      (cat) => `<span class="cat-chip">
        <span>${escapeHtml(cat)}</span>
        <div class="cat-chip-actions">
          <button class="cat-chip-btn edit" type="button" data-action="rename-pos" data-cat="${escapeHtml(
            cat
          )}" title="Ubah nama pos ${escapeHtml(cat)}" aria-label="Ubah ${escapeHtml(cat)}">
            ${icon('edit')}
          </button>
          <button class="cat-chip-btn del" type="button" data-action="delete-category" data-cat="${escapeHtml(
            cat
          )}" title="Hapus pos ${escapeHtml(cat)}" aria-label="Hapus ${escapeHtml(cat)}">
            ${icon('close')}
          </button>
        </div>
      </span>`
    )
    .join('');
}

function setupDraggableDialogs() {
  $$('.dialog-draggable').forEach((dialog) => {
    const header = dialog.querySelector('.dialog-head');
    if (!header || dialog.__draggableSetup) return;
    dialog.__draggableSetup = true;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    function onStart(clientX, clientY) {
      isDragging = true;
      dialog.classList.add('dragging');
      const rect = dialog.getBoundingClientRect();
      startX = clientX;
      startY = clientY;
      initialLeft = rect.left;
      initialTop = rect.top;
      dialog.style.position = 'fixed';
      dialog.style.margin = '0';
      dialog.style.left = `${initialLeft}px`;
      dialog.style.top = `${initialTop}px`;
    }

    function onMove(clientX, clientY) {
      if (!isDragging) return;
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;
      const maxLeft = Math.max(10, window.innerWidth - dialog.offsetWidth - 10);
      const maxTop = Math.max(10, window.innerHeight - dialog.offsetHeight - 10);
      const newLeft = Math.max(10, Math.min(maxLeft, initialLeft + deltaX));
      const newTop = Math.max(10, Math.min(maxTop, initialTop + deltaY));
      dialog.style.left = `${newLeft}px`;
      dialog.style.top = `${newTop}px`;
    }

    function onEnd() {
      if (!isDragging) return;
      isDragging = false;
      dialog.classList.remove('dragging');
    }

    header.addEventListener('mousedown', (e) => {
      if (e.target.closest('button, input, select, textarea, a')) return;
      e.preventDefault();
      onStart(e.clientX, e.clientY);

      const onMouseMove = (ev) => onMove(ev.clientX, ev.clientY);
      const onMouseUp = () => {
        onEnd();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    header.addEventListener(
      'touchstart',
      (e) => {
        if (e.target.closest('button, input, select, textarea, a')) return;
        const touch = e.touches[0];
        if (!touch) return;
        onStart(touch.clientX, touch.clientY);

        const onTouchMove = (ev) => {
          const t = ev.touches[0];
          if (t) onMove(t.clientX, t.clientY);
        };
        const onTouchEnd = () => {
          onEnd();
          document.removeEventListener('touchmove', onTouchMove);
          document.removeEventListener('touchend', onTouchEnd);
        };
        document.addEventListener('touchmove', onTouchMove, { passive: true });
        document.addEventListener('touchend', onTouchEnd);
      },
      { passive: true }
    );
  });
}

function openCategoryDialog() {
  renderCategoryManagerList();
  const input = $('#new-cat-name');
  if (input) input.value = '';
  $('#category-dialog').showModal();
  setupDraggableDialogs();
}

let renderToken = 0;
let toastTimer = null;
let txLoadSeq = 0;
let assetLoadSeq = 0;

async function api(path, { method = 'GET', body } = {}) {
  const options = { method, credentials: 'same-origin', headers: {} };
  if (body !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(body);
  }

  let response;
  try {
    response = await fetch(`/api${path}`, options);
  } catch {
    throw new Error('Tidak dapat terhubung ke server.');
  }

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (response.status === 401 && path !== '/login') {
    handleSessionExpired();
    throw new Error('Sesi berakhir. Silakan login kembali.');
  }

  if (!response.ok) {
    throw new Error(data.error || 'Terjadi kesalahan.');
  }

  return data;
}

function toast(message, isError = false) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.toggle('error', Boolean(isError));
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3400);
}

function hydrateIcons() {
  $$('[data-icon]').forEach((el) => {
    el.classList.add('icon');
    el.innerHTML = ICONS[el.dataset.icon] || '';
  });
}

function showLogin(message = '') {
  $$('dialog[open]').forEach((dialog) => dialog.close());
  state.editing = { tx: null, asset: null, user: null };
  $('#app').classList.add('hidden');
  $('#login-view').classList.remove('hidden');
  $('#login-error').textContent = message;
  $('#login-password').value = '';
  setTimeout(() => $('#login-username').focus(), 40);
}

function enterApp(user) {
  state.user = user;
  $('#login-view').classList.add('hidden');
  $('#app').classList.remove('hidden');
  updateUserChip();
  if (!location.hash || location.hash === '#' || location.hash === '#/') {
    history.replaceState(null, '', '#/dashboard');
    route();
  } else {
    route();
  }
}

function updateUserChip() {
  if (!state.user) return;
  $('#top-user-name').textContent = state.user.name;
  $('#top-user-role').textContent = roleLabel(state.user.role);
}

function handleSessionExpired() {
  if (!state.user) return;
  state.user = null;
  state.txItems = [];
  state.assetItems = [];
  state.users = [];
  history.replaceState(null, '', '#/dashboard');
  showLogin('Sesi berakhir. Silakan login kembali.');
}

async function doLogout() {
  try {
    await api('/logout', { method: 'POST', body: {} });
  } catch {
    /* tetap keluar di sisi klien */
  }
  state.user = null;
  state.txItems = [];
  state.assetItems = [];
  state.users = [];
  history.replaceState(null, '', '#/dashboard');
  showLogin();
  toast('Anda telah keluar.');
}

function currentRoute() {
  const raw = location.hash.replace(/^#\/?/, '').split('?')[0];
  return VIEWS.has(raw) ? raw : 'dashboard';
}

function updateNav(view) {
  $$('[data-nav]').forEach((el) => {
    el.classList.toggle('active', el.dataset.nav === view);
  });
}

function route() {
  if (!state.user) return;
  const view = currentRoute();
  state.view = view;
  updateNav(view);
  renderView(view);
}

async function renderView(view) {
  const token = ++renderToken;
  const main = $('#main');
  main.innerHTML = '<div class="loading"><div class="spinner"></div>Memuat…</div>';
  try {
    if (view === 'dashboard') await renderDashboard(main, token);
    else if (view === 'transactions') await renderTransactions(main, token);
    else if (view === 'assets') await renderAssets(main, token);
    else if (view === 'report') await renderReport(main, token);
    else if (view === 'account') await renderAccount(main, token);
  } catch (err) {
    if (token !== renderToken) return;
    main.innerHTML = errorState('Gagal memuat data', err.message);
  }
}

function emptyState(iconName, title, subtitle = '') {
  return `<div class="empty"><div class="empty-icon">${icon(iconName)}</div><p>${escapeHtml(
    title
  )}</p>${subtitle ? `<span>${escapeHtml(subtitle)}</span>` : ''}</div>`;
}

function errorState(title, message) {
  return `<div class="card empty"><div class="empty-icon">${icon(
    'warning'
  )}</div><p>${escapeHtml(title)}</p><span>${escapeHtml(message || '')}</span></div>`;
}

function passwordWarning(onAccountPage = false) {
  if (!state.user?.mustChangePassword) return '';
  const instruction = onAccountPage
    ? 'Segera ganti password pada formulir di halaman ini.'
    : 'Segera ganti password melalui <a href="#/account">halaman Akun</a>.';
  return `<div class="warn-card">${icon('warning')}<div><strong>Keamanan akun</strong>Anda masih menggunakan password awal. ${instruction}</div></div>`;
}

function txRow(transaction, withActions = false) {
  const isIncome = transaction.type === 'income';
  const description = transaction.description
    ? `<div class="item-sub">${escapeHtml(transaction.description)}</div>`
    : '';
  const actions = withActions
    ? `<div class="item-actions">
        <button class="icon-btn sm" type="button" data-action="edit-tx" data-id="${transaction.id}" aria-label="Ubah transaksi" title="Ubah">${icon('edit')}</button>
        <button class="icon-btn sm" type="button" data-action="delete-tx" data-id="${transaction.id}" aria-label="Hapus transaksi" title="Hapus">${icon('trash')}</button>
      </div>`
    : '';

  return `<div class="item">
    <div class="item-icon ${isIncome ? 'income' : 'expense'}">${icon(isIncome ? 'arrowUp' : 'arrowDown')}</div>
    <div class="item-main">
      <div class="item-title">${escapeHtml(transaction.category)}</div>
      <div class="item-sub">${fmtDate(transaction.date)}</div>
      ${description}
    </div>
    <div class="item-right">
      <div class="amount ${isIncome ? 'income' : 'expense'}">${isIncome ? '+' : '−'} ${fmtMoney(transaction.amount)}</div>
      ${actions}
    </div>
  </div>`;
}

async function renderDashboard(main, token) {
  startLiveClock();
  const selectedCat = state.dashboardCategory || '';
  const url = `/dashboard?month=${encodeURIComponent(currentMonth())}${
    selectedCat ? `&category=${encodeURIComponent(selectedCat)}` : ''
  }`;
  const data = await api(url);
  if (token !== renderToken) return;

  const posList = data.posList || [];
  const posFilterMarkup = `
    <div class="card dashboard-pos-filter" role="region" aria-label="Filter Pos Kegiatan">
      <label for="dashboard-pos-filter" class="pos-filter-label">
        ${icon('tag')} <span>Pos:</span>
      </label>
      <select id="dashboard-pos-filter" class="pos-filter-select" aria-label="Pilih Pos Kegiatan">
        <option value="" ${!selectedCat ? 'selected' : ''}>Semua Kas RT (Umum &amp; Seluruh Pos)</option>
        ${posList
          .map((cat) => {
            const isActive = selectedCat && matchPosName(cat.name, selectedCat);
            const balanceStr = cat.balance !== 0 ? ` · Saldo: ${fmtMoney(cat.balance)}` : '';
            return `<option value="${escapeHtml(cat.name)}" ${isActive ? 'selected' : ''}>
              ${escapeHtml(cat.name)}${balanceStr}
            </option>`;
          })
          .join('')}
      </select>
      ${
        selectedCat
          ? `<button class="btn btn-ghost pos-action-btn" type="button" data-action="filter-dashboard-cat" data-cat="" title="Kembali ke Semua Kas RT">
              ← Semua Kas
            </button>`
          : ''
      }
      <button class="btn btn-ghost pos-action-btn" type="button" data-action="open-cat-manager" title="Tambah / Kelola Pos Kegiatan">
        ${icon('plus')} <span>Kelola Pos</span>
      </button>
    </div>
  `;

  if (data.mode === 'category') {
    const hasChart = data.chart.some((item) => item.income > 0 || item.expense > 0);
    const maxChart = Math.max(1, ...data.chart.map((item) => Math.max(item.income, item.expense)));
    const chartMarkup = hasChart
      ? `<div class="chart">${data.chart
          .map(
            (item) => `<div class="chart-col" title="${escapeHtml(monthLabel(item.month))}: masuk ${fmtMoney(
              item.income
            )}, keluar ${fmtMoney(item.expense)}">
              <div class="chart-bars">
                <div class="bar" data-h="${Math.round((item.income / maxChart) * 100)}"></div>
                <div class="bar expense" data-h="${Math.round((item.expense / maxChart) * 100)}"></div>
              </div>
              <div class="chart-label">${escapeHtml(shortMonth(item.month))}</div>
            </div>`
          )
          .join('')}</div>`
      : emptyState(
          'report',
          'Belum ada arus kas pos ini',
          `Tambahkan pemasukan atau pengeluaran pos ${escapeHtml(data.pos)} untuk melihat grafik tren.`
        );

    const recentMarkup = data.recent.length
      ? `<div class="list">${data.recent.map((item) => txRow(item, true)).join('')}</div>`
      : emptyState(
          'transactions',
          'Belum ada transaksi',
          `Belum ada pemasukan maupun pengeluaran yang dicatat khusus pos ${escapeHtml(data.pos)}.`
        );

    main.innerHTML = `
      <div class="page-head">
        <div>
          <h1>Dashboard Pos: ${escapeHtml(data.pos)}</h1>
          <p class="muted">${escapeHtml(monthLabel(data.month))} · Rekap khusus pemasukan &amp; pengeluaran ${escapeHtml(data.pos)}</p>
        </div>
        <div class="head-actions">
          ${liveClockMarkup()}
        </div>
      </div>
      ${passwordWarning()}
      ${posFilterMarkup}
      <div class="pos-banner">
        <div class="pos-banner-title">
          <div class="pos-banner-icon">${icon('tag')}</div>
          <div>
            <h2>Dashboard Khusus: ${escapeHtml(data.pos)}</h2>
            <p>Hanya menampilkan transaksi pos ${escapeHtml(data.pos)} (${data.counts.total} transaksi: ${data.counts.income} masuk, ${data.counts.expense} keluar)</p>
          </div>
        </div>
        <div class="pos-banner-actions">
          <button class="btn btn-ghost" type="button" data-action="filter-dashboard-cat" data-cat="" style="background: rgba(255,255,255,0.18); color: #fff; border-color: rgba(255,255,255,0.35);">
            ← Kembali ke Semua Kas
          </button>
          <button class="btn btn-primary" type="button" data-action="new-tx-pos" data-type="income" data-category="${escapeHtml(
            data.pos
          )}" style="background: #fff; color: var(--primary);">
            ${icon('plus')} Catat Pemasukan
          </button>
          <button class="btn btn-danger-soft" type="button" data-action="new-tx-pos" data-type="expense" data-category="${escapeHtml(
            data.pos
          )}" style="background: #fee2e2; color: #dc2626; border-color: transparent;">
            ${icon('plus')} Catat Pengeluaran
          </button>
        </div>
      </div>
      <div class="grid stats">
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Sisa Saldo Dana ${escapeHtml(data.pos)}</span><span class="stat-icon">${icon(
            'wallet'
          )}</span></div>
          <div class="stat-value ${data.balance >= 0 ? 'income' : 'expense'}">${fmtMoney(data.balance)}</div>
          <div class="stat-foot">Masuk ${fmtMoney(data.totals.income)} · Keluar ${fmtMoney(data.totals.expense)}</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Total Pemasukan</span><span class="stat-icon income">${icon(
            'arrowUp'
          )}</span></div>
          <div class="stat-value income">${fmtMoney(data.totals.income)}</div>
          <div class="stat-foot">Bulan ini: ${fmtMoney(data.monthTotals.income)} (${data.counts.monthIncome} tx)</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Total Pengeluaran</span><span class="stat-icon expense">${icon(
            'arrowDown'
          )}</span></div>
          <div class="stat-value expense">${fmtMoney(data.totals.expense)}</div>
          <div class="stat-foot">Bulan ini: ${fmtMoney(data.monthTotals.expense)} (${data.counts.monthExpense} tx)</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Total Transaksi Pos</span><span class="stat-icon">${icon(
            'transactions'
          )}</span></div>
          <div class="stat-value">${data.counts.total}</div>
          <div class="stat-foot">${data.counts.income} masuk · ${data.counts.expense} keluar</div>
        </div>
      </div>
      <div class="grid cols-2">
        <div class="card">
          <div class="card-head">
            <h2>Arus Kas 6 Bulan: ${escapeHtml(data.pos)}</h2>
            <div class="legend"><span>Masuk</span><span class="exp">Keluar</span></div>
          </div>
          ${chartMarkup}
        </div>
        <div class="card">
          <div class="card-head">
            <h2>Riwayat Transaksi ${escapeHtml(data.pos)}</h2>
            <button class="btn-text" type="button" data-action="view-tx-category" data-cat="${escapeHtml(
              data.pos
            )}">Buka di Transaksi →</button>
          </div>
          ${recentMarkup}
        </div>
      </div>
    `;

    $$('.bar', main).forEach((bar) => {
      bar.style.height = `${bar.dataset.h}%`;
    });
    return;
  }

  // Mode: Semua Kas (Umum)
  const hasChart = data.chart.some((item) => item.income > 0 || item.expense > 0);
  const maxChart = Math.max(1, ...data.chart.map((item) => Math.max(item.income, item.expense)));
  const chartMarkup = hasChart
    ? `<div class="chart">${data.chart
        .map(
          (item) => `<div class="chart-col" title="${escapeHtml(monthLabel(item.month))}: masuk ${fmtMoney(
            item.income
          )}, keluar ${fmtMoney(item.expense)}">
            <div class="chart-bars">
              <div class="bar" data-h="${Math.round((item.income / maxChart) * 100)}"></div>
              <div class="bar expense" data-h="${Math.round((item.expense / maxChart) * 100)}"></div>
            </div>
            <div class="chart-label">${escapeHtml(shortMonth(item.month))}</div>
          </div>`
        )
        .join('')}</div>`
    : emptyState('report', 'Belum ada data arus kas', 'Tambahkan transaksi untuk melihat grafik.');

  const recentMarkup = data.recent.length
    ? `<div class="list">${data.recent.map((item) => txRow(item)).join('')}</div>`
    : emptyState('transactions', 'Belum ada transaksi', 'Mulai catat pemasukan atau pengeluaran.');

  const assetNeedFix = data.assets.rusakRingan + data.assets.rusakBerat;

  main.innerHTML = `
    <div class="page-head">
      <div>
        <h1>Dashboard</h1>
        <p class="muted">${escapeHtml(monthLabel(data.month))} · ${escapeHtml(data.rtName)}</p>
      </div>
      <div class="head-actions">
        ${liveClockMarkup()}
      </div>
    </div>
    ${passwordWarning()}
    ${posFilterMarkup}
    <div class="grid stats">
      <div class="card stat">
        <div class="stat-top"><span class="stat-label">Saldo kas</span><span class="stat-icon">${icon(
          'wallet'
        )}</span></div>
        <div class="stat-value">${fmtMoney(data.balance.balance)}</div>
        <div class="stat-foot">Total pemasukan ${fmtMoney(data.balance.income)}</div>
      </div>
      <div class="card stat">
        <div class="stat-top"><span class="stat-label">Pemasukan bulan ini</span><span class="stat-icon income">${icon(
          'arrowUp'
        )}</span></div>
        <div class="stat-value income">${fmtMoney(data.monthTotals.income)}</div>
        <div class="stat-foot">${data.monthCount} transaksi bulan ini</div>
      </div>
      <div class="card stat">
        <div class="stat-top"><span class="stat-label">Pengeluaran bulan ini</span><span class="stat-icon expense">${icon(
          'arrowDown'
        )}</span></div>
        <div class="stat-value expense">${fmtMoney(data.monthTotals.expense)}</div>
        <div class="stat-foot">Selisih ${fmtMoney(data.monthTotals.balance)}</div>
      </div>
      <div class="card stat">
        <div class="stat-top"><span class="stat-label">Nilai aset</span><span class="stat-icon asset">${icon(
          'assets'
        )}</span></div>
        <div class="stat-value">${fmtMoney(data.assets.value)}</div>
        <div class="stat-foot">${data.assets.items} jenis · ${data.assets.units} unit</div>
      </div>
    </div>
    <div class="grid cols-2">
      <div class="card">
        <div class="card-head">
          <h2>Arus kas 6 bulan</h2>
          <div class="legend"><span>Masuk</span><span class="exp">Keluar</span></div>
        </div>
        ${chartMarkup}
      </div>
      <div class="card">
        <div class="card-head"><h2>Transaksi terakhir</h2><a class="link" href="#/transactions">Lihat semua</a></div>
        ${recentMarkup}
      </div>
    </div>
    <div class="card">
      <div class="card-head"><h2>Aset RT</h2><a class="link" href="#/assets">Kelola aset</a></div>
      <div class="asset-summary">
        <div><span>Total unit</span><strong>${data.assets.units}</strong></div>
        <div><span>Kondisi baik</span><strong class="income">${data.assets.baik}</strong></div>
        <div><span>Perlu perbaikan</span><strong class="expense">${assetNeedFix}</strong></div>
      </div>
    </div>
  `;

  $$('.bar', main).forEach((bar) => {
    bar.style.height = `${bar.dataset.h}%`;
  });
}

async function renderTransactions(main, token) {
  const posList = state.categories.pos || DEFAULT_POS;
  const extraIncome = (state.categories.income || []).filter(
    (c) => !posList.some((p) => matchPosName(p, c))
  );
  const extraExpense = (state.categories.expense || []).filter(
    (c) => !posList.some((p) => matchPosName(p, c))
  );

  const categoryOptions = [
    '<option value="">Semua Kategori / Pos</option>',
    `<optgroup label="Pos Kegiatan / Anggaran">${posList
      .map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
      .join('')}</optgroup>`,
    extraIncome.length
      ? `<optgroup label="Kategori Pemasukan Lainnya">${extraIncome
          .map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
          .join('')}</optgroup>`
      : '',
    extraExpense.length
      ? `<optgroup label="Kategori Pengeluaran Lainnya">${extraExpense
          .map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
          .join('')}</optgroup>`
      : '',
  ].join('');

  main.innerHTML = `
    <div class="page-head">
      <div>
        <h1>Transaksi</h1>
        <p class="muted">Catatan pemasukan dan pengeluaran kas</p>
      </div>
      <div class="head-actions">
        <button class="btn btn-ghost" type="button" data-action="export-tx">${icon('download')} CSV</button>
        <button class="btn btn-primary" type="button" data-action="new-tx" data-type="income">${icon(
          'plus'
        )} Pemasukan</button>
        <button class="btn btn-danger-soft" type="button" data-action="new-tx" data-type="expense">${icon(
          'plus'
        )} Pengeluaran</button>
      </div>
    </div>
    <div class="card filters">
      <label class="field">
        <span>Bulan</span>
        <input id="tx-month" type="month" value="${escapeHtml(state.txFilters.month)}">
      </label>
      <label class="field">
        <span>Jenis</span>
        <select id="tx-type-filter">
          <option value="">Semua</option>
          <option value="income">Pemasukan</option>
          <option value="expense">Pengeluaran</option>
        </select>
      </label>
      <label class="field">
        <span>Kategori / Pos</span>
        <select id="tx-category-filter">
          ${categoryOptions}
        </select>
      </label>
      <label class="field grow">
        <span>Cari</span>
        <div class="input-icon">${icon('search')}<input id="tx-q" placeholder="Cari kategori atau keterangan" value="${escapeHtml(
          state.txFilters.q
        )}"></div>
      </label>
      <button class="btn btn-ghost" type="button" data-action="reset-tx-filter">Reset</button>
    </div>
    <div id="tx-summary" class="grid stats-3"></div>
    <p id="tx-count" class="list-note"></p>
    <div id="tx-list" class="list card"></div>
  `;

  $('#tx-type-filter').value = state.txFilters.type;
  $('#tx-category-filter').value = state.txFilters.category;

  $('#tx-month').addEventListener('change', (event) => {
    state.txFilters.month = event.target.value;
    loadTransactions(token);
  });

  $('#tx-type-filter').addEventListener('change', (event) => {
    state.txFilters.type = event.target.value;
    loadTransactions(token);
  });

  $('#tx-category-filter').addEventListener('change', (event) => {
    state.txFilters.category = event.target.value;
    loadTransactions(token);
  });

  let searchTimer;
  $('#tx-q').addEventListener('input', (event) => {
    const value = event.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.txFilters.q = value;
      loadTransactions(token);
    }, 250);
  });

  await loadTransactions(token);
}

async function loadTransactions(token) {
  const listEl = $('#tx-list');
  if (!listEl) return;
  const seq = ++txLoadSeq;
  listEl.innerHTML = '<div class="loading"><div class="spinner"></div>Memuat…</div>';

  const params = new URLSearchParams();
  if (state.txFilters.month) params.set('month', state.txFilters.month);
  if (state.txFilters.type) params.set('type', state.txFilters.type);
  if (state.txFilters.category) params.set('category', state.txFilters.category);
  if (state.txFilters.q) params.set('q', state.txFilters.q);

  try {
    const data = await api(`/transactions?${params.toString()}`);
    if (token !== renderToken || seq !== txLoadSeq) return;
    state.txItems = data.transactions;

    const summaryEl = $('#tx-summary');
    if (summaryEl) {
      summaryEl.innerHTML = `
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Pemasukan</span><span class="stat-icon income">${icon(
            'arrowUp'
          )}</span></div>
          <div class="stat-value income">${fmtMoney(data.totals.income)}</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Pengeluaran</span><span class="stat-icon expense">${icon(
            'arrowDown'
          )}</span></div>
          <div class="stat-value expense">${fmtMoney(data.totals.expense)}</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Selisih</span><span class="stat-icon">${icon(
            'wallet'
          )}</span></div>
          <div class="stat-value">${fmtMoney(data.totals.balance)}</div>
        </div>
      `;
    }

    const countEl = $('#tx-count');
    if (countEl) countEl.textContent = `${data.count} transaksi ditemukan`;

    listEl.innerHTML = data.transactions.length
      ? data.transactions.map((item) => txRow(item, true)).join('')
      : emptyState('transactions', 'Tidak ada transaksi', 'Ubah filter atau tambahkan transaksi baru.');
  } catch (err) {
    if (token !== renderToken || seq !== txLoadSeq) return;
    listEl.innerHTML = emptyState('warning', 'Gagal memuat transaksi', err.message);
  }
}

function assetRow(asset) {
  return `<div class="item">
    <div class="item-icon asset">${icon('box')}</div>
    <div class="item-main">
      <div class="item-title">${escapeHtml(asset.name)} <span class="badge">${escapeHtml(asset.category)}</span></div>
      <div class="item-sub">${asset.quantity} unit${asset.location ? ` · ${escapeHtml(asset.location)}` : ''}${
        asset.acquiredDate ? ` · ${fmtDate(asset.acquiredDate)}` : ''
      }</div>
      ${asset.note ? `<div class="item-sub">${escapeHtml(asset.note)}</div>` : ''}
    </div>
    <div class="item-right">
      <div class="amount">${asset.value ? fmtMoney(asset.value) : '<span class="muted">—</span>'}</div>
      <span class="badge ${asset.condition}">${conditionLabel(asset.condition)}</span>
      <div class="item-actions">
        <button class="icon-btn sm" type="button" data-action="edit-asset" data-id="${asset.id}" aria-label="Ubah aset" title="Ubah">${icon('edit')}</button>
        <button class="icon-btn sm" type="button" data-action="delete-asset" data-id="${asset.id}" aria-label="Hapus aset" title="Hapus">${icon('trash')}</button>
      </div>
    </div>
  </div>`;
}

async function renderAssets(main, token) {
  const categoryOptions = ['<option value="">Semua kategori</option>']
    .concat(
      ASSET_CATEGORIES.map(
        (category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`
      )
    )
    .join('');

  main.innerHTML = `
    <div class="page-head">
      <div>
        <h1>Aset RT</h1>
        <p class="muted">Inventaris barang dan aset warga</p>
      </div>
      <div class="head-actions">
        <button class="btn btn-ghost" type="button" data-action="export-assets">${icon('download')} CSV</button>
        <button class="btn btn-primary" type="button" data-action="new-asset">${icon('plus')} Tambah aset</button>
      </div>
    </div>
    <div class="card filters">
      <label class="field grow">
        <span>Cari</span>
        <div class="input-icon">${icon('search')}<input id="asset-q" placeholder="Cari nama, lokasi, catatan" value="${escapeHtml(
          state.assetFilters.q
        )}"></div>
      </label>
      <label class="field">
        <span>Kategori</span>
        <select id="asset-category-filter">${categoryOptions}</select>
      </label>
      <button class="btn btn-ghost" type="button" data-action="reset-asset-filter">Reset</button>
    </div>
    <div id="asset-summary" class="grid stats"></div>
    <p id="asset-count" class="list-note"></p>
    <div id="asset-list" class="list card"></div>
  `;

  $('#asset-category-filter').value = state.assetFilters.category;

  $('#asset-category-filter').addEventListener('change', (event) => {
    state.assetFilters.category = event.target.value;
    loadAssets(token);
  });

  let searchTimer;
  $('#asset-q').addEventListener('input', (event) => {
    const value = event.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.assetFilters.q = value;
      loadAssets(token);
    }, 250);
  });

  await loadAssets(token);
}

async function loadAssets(token) {
  const listEl = $('#asset-list');
  if (!listEl) return;
  const seq = ++assetLoadSeq;
  listEl.innerHTML = '<div class="loading"><div class="spinner"></div>Memuat…</div>';

  const params = new URLSearchParams();
  if (state.assetFilters.q) params.set('q', state.assetFilters.q);
  if (state.assetFilters.category) params.set('category', state.assetFilters.category);

  try {
    const data = await api(`/assets?${params.toString()}`);
    if (token !== renderToken || seq !== assetLoadSeq) return;
    state.assetItems = data.assets;
    const summary = data.summary;

    const summaryEl = $('#asset-summary');
    if (summaryEl) {
      summaryEl.innerHTML = `
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Jenis aset</span><span class="stat-icon asset">${icon('box')}</span></div>
          <div class="stat-value">${summary.items}</div>
          <div class="stat-foot">${summary.units} unit</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Nilai aset</span><span class="stat-icon asset">${icon('wallet')}</span></div>
          <div class="stat-value">${fmtMoney(summary.value)}</div>
          <div class="stat-foot">Perkiraan nilai</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Kondisi baik</span><span class="stat-icon income">${icon('check')}</span></div>
          <div class="stat-value income">${summary.baik}</div>
          <div class="stat-foot">unit</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Perlu perbaikan</span><span class="stat-icon expense">${icon('warning')}</span></div>
          <div class="stat-value expense">${summary.rusakRingan + summary.rusakBerat}</div>
          <div class="stat-foot">${summary.rusakRingan} ringan · ${summary.rusakBerat} berat</div>
        </div>
      `;
    }

    const countEl = $('#asset-count');
    if (countEl) countEl.textContent = `${data.assets.length} jenis aset ditampilkan`;

    listEl.innerHTML = data.assets.length
      ? data.assets.map(assetRow).join('')
      : emptyState('assets', 'Belum ada aset', 'Tambahkan aset RT untuk mulai mencatat inventaris.');
  } catch (err) {
    if (token !== renderToken || seq !== assetLoadSeq) return;
    listEl.innerHTML = emptyState('warning', 'Gagal memuat aset', err.message);
  }
}

function categoryRows(items, max, isExpense) {
  if (!items.length) return '<p class="empty-inline">Belum ada data pada periode ini.</p>';
  return items
    .map(
      (item) => `<div class="cat-row">
        <div class="cat-row-top"><strong>${escapeHtml(item.category)}</strong><span>${fmtMoney(
          item.amount
        )}</span></div>
        <div class="progress ${isExpense ? 'expense' : ''}"><span data-w="${Math.max(
          2,
          Math.round((item.amount / max) * 100)
        )}"></span></div>
      </div>`
    )
    .join('');
}

function reportTable(transactions) {
  if (!transactions.length) {
    return '<p class="empty-inline">Tidak ada transaksi pada periode ini.</p>';
  }
  const rows = transactions
    .map(
      (item) => `<tr>
        <td>${fmtDate(item.date)}</td>
        <td><span class="badge ${item.type}">${item.type === 'income' ? 'Masuk' : 'Keluar'}</span></td>
        <td>${escapeHtml(item.category)}</td>
        <td>${item.description ? escapeHtml(item.description) : '—'}</td>
        <td class="num">${fmtMoney(item.amount)}</td>
      </tr>`
    )
    .join('');
  return `<div class="table-wrap"><table>
    <thead><tr><th>Tanggal</th><th>Jenis</th><th>Kategori</th><th>Keterangan</th><th class="num">Nominal</th></tr></thead>
    <tbody>${rows}</tbody>
  </table></div>`;
}

async function renderReport(main, token) {
  const month = state.reportMonth || currentMonth();
  const data = await api(`/report?month=${encodeURIComponent(month)}`);
  if (token !== renderToken) return;

  const incomeMax = Math.max(1, ...data.byCategory.income.map((item) => item.amount));
  const expenseMax = Math.max(1, ...data.byCategory.expense.map((item) => item.amount));

  main.innerHTML = `
    <div class="page-head no-print">
      <div>
        <h1>Laporan</h1>
        <p class="muted">Rekap pemasukan dan pengeluaran kas</p>
      </div>
      <div class="head-actions">
        <label class="field">
          <span>Bulan</span>
          <input id="report-month" type="month" value="${escapeHtml(month)}">
        </label>
        <button class="btn btn-ghost" type="button" data-action="export-report">${icon('download')} CSV</button>
        <button class="btn btn-primary" type="button" data-action="print-report">${icon('print')} Cetak</button>
      </div>
    </div>
    <div class="card">
      <div class="print-header">
        <h1>Laporan Kas ${escapeHtml(data.rtName)}</h1>
        <p>Periode ${escapeHtml(monthLabel(month))} · ${data.count} transaksi</p>
      </div>
      <div class="report-head">
        <div>
          <h2>Laporan Kas ${escapeHtml(data.rtName)}</h2>
          <p>Periode ${escapeHtml(monthLabel(month))} · ${data.count} transaksi</p>
        </div>
      </div>
      <div class="grid stats">
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Saldo awal</span><span class="stat-icon">${icon('wallet')}</span></div>
          <div class="stat-value">${fmtMoney(data.openingBalance)}</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Pemasukan</span><span class="stat-icon income">${icon('arrowUp')}</span></div>
          <div class="stat-value income">${fmtMoney(data.totals.income)}</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Pengeluaran</span><span class="stat-icon expense">${icon('arrowDown')}</span></div>
          <div class="stat-value expense">${fmtMoney(data.totals.expense)}</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Saldo akhir</span><span class="stat-icon">${icon('check')}</span></div>
          <div class="stat-value">${fmtMoney(data.closingBalance)}</div>
        </div>
      </div>
      <div class="report-section">
        <h3>Rincian per kategori</h3>
        <div class="category-grid">
          <div>
            <h3>Pemasukan</h3>
            ${categoryRows(data.byCategory.income, incomeMax, false)}
          </div>
          <div>
            <h3>Pengeluaran</h3>
            ${categoryRows(data.byCategory.expense, expenseMax, true)}
          </div>
        </div>
      </div>
      <div class="report-section">
        <h3>Detail transaksi</h3>
        ${reportTable(data.transactions)}
      </div>
      <div class="signatures">
        <div>
          <p>Mengetahui,<br>Ketua ${escapeHtml(data.rtName)}</p>
          <div class="sig-line"></div>
          <p class="name">(...................................)</p>
        </div>
        <div>
          <p>Bendahara,</p>
          <div class="sig-line"></div>
          <p class="name">(${escapeHtml(state.user?.name || '...................................')})</p>
        </div>
      </div>
    </div>
  `;

  $$('.progress > span', main).forEach((el) => {
    el.style.width = `${el.dataset.w}%`;
  });

  $('#report-month').addEventListener('change', (event) => {
    state.reportMonth = event.target.value || currentMonth();
    renderView('report');
  });
}

function userRow(user) {
  const isSelf = user.id === state.user?.id;
  return `<div class="user-row">
    <div class="avatar-sm">${escapeHtml(initials(user.name))}</div>
    <div class="user-main">
      <strong>${escapeHtml(user.name)}${isSelf ? ' (Anda)' : ''}</strong>
      <span>@${escapeHtml(user.username)}</span>
    </div>
    <span class="badge role-${user.role}">${roleLabel(user.role)}</span>
    <div class="user-actions">
      <button class="icon-btn sm" type="button" data-action="edit-user" data-id="${user.id}" aria-label="Ubah pengguna" title="Ubah">${icon('edit')}</button>
      ${
        isSelf
          ? ''
          : `<button class="icon-btn sm" type="button" data-action="delete-user" data-id="${user.id}" aria-label="Hapus pengguna" title="Hapus">${icon('trash')}</button>`
      }
    </div>
  </div>`;
}

async function renderAccount(main, token) {
  const isAdmin = state.user.role === 'admin';
  let users = [];
  if (isAdmin) {
    const data = await api('/users');
    if (token !== renderToken) return;
    users = data.users;
    state.users = users;
  }

  const usersCard = isAdmin
    ? `<div class="card">
        <div class="card-head">
          <h2>Kelola pengguna</h2>
          <button class="btn btn-primary" type="button" data-action="new-user">${icon('plus')} Tambah</button>
        </div>
        <div class="list">${
          users.length ? users.map(userRow).join('') : emptyState('users', 'Belum ada pengguna')
        }</div>
      </div>`
    : '';

  main.innerHTML = `
    <div class="page-head">
      <div>
        <h1>Akun</h1>
        <p class="muted">Profil dan pengaturan keamanan</p>
      </div>
    </div>
    ${passwordWarning(true)}
    <div class="grid cols-2">
      <div class="card profile">
        <div class="avatar">${escapeHtml(initials(state.user.name))}</div>
        <h2>${escapeHtml(state.user.name)}</h2>
        <p class="muted">@${escapeHtml(state.user.username)} · ${roleLabel(state.user.role)}</p>
        <button class="btn btn-ghost" type="button" data-action="logout">${icon('logout')} Keluar</button>
      </div>
      <div class="card">
        <div class="card-head"><h2>Ubah password</h2><span class="stat-icon">${icon('lock')}</span></div>
        <form id="password-form" class="form-stack">
          <label class="field">
            <span>Password saat ini</span>
            <input id="pw-current" type="password" autocomplete="current-password" required>
          </label>
          <label class="field">
            <span>Password baru</span>
            <input id="pw-new" type="password" minlength="6" autocomplete="new-password" required>
            <small class="hint">Minimal 6 karakter.</small>
          </label>
          <label class="field">
            <span>Ulangi password baru</span>
            <input id="pw-confirm" type="password" minlength="6" autocomplete="new-password" required>
          </label>
          <p class="form-error" id="pw-error"></p>
          <div><button class="btn btn-primary" type="submit" id="pw-submit">Simpan password</button></div>
        </form>
      </div>
    </div>
    ${usersCard}
  `;

  $('#password-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const current = $('#pw-current').value;
    const next = $('#pw-new').value;
    const confirm = $('#pw-confirm').value;
    const errorEl = $('#pw-error');
    errorEl.textContent = '';
    if (next !== confirm) {
      errorEl.textContent = 'Konfirmasi password tidak sama.';
      return;
    }
    const button = $('#pw-submit');
    button.disabled = true;
    button.textContent = 'Menyimpan…';
    try {
      const data = await api('/account/password', {
        method: 'POST',
        body: { currentPassword: current, newPassword: next },
      });
      state.user = data.user;
      updateUserChip();
      toast('Password berhasil diubah.');
      renderView('account');
    } catch (err) {
      errorEl.textContent = err.message;
      button.disabled = false;
      button.textContent = 'Simpan password';
    }
  });
}

function fillCategoryOptions(type) {
  const list = $('#tx-categories');
  const pos = state.categories.pos || DEFAULT_POS;
  const extra =
    type === 'expense'
      ? (state.categories.expense.length ? state.categories.expense : EXPENSE_CATEGORIES)
      : (state.categories.income.length ? state.categories.income : INCOME_CATEGORIES);
  const combined = Array.from(new Set([...pos, ...extra]));
  list.innerHTML = combined
    .map((category) => `<option value="${escapeHtml(category)}"></option>`)
    .join('');
}

function openTxDialog(transaction = null, type = 'income', presetCategory = '') {
  state.editing.tx = transaction;
  const finalType = transaction ? transaction.type : type === 'expense' ? 'expense' : 'income';
  const cleanCat = presetCategory || (transaction ? transaction.category : '');
  $('#tx-dialog-title').textContent = transaction
    ? 'Ubah Transaksi'
    : cleanCat
      ? finalType === 'expense'
        ? `Catat Pengeluaran: ${cleanCat}`
        : `Catat Pemasukan: ${cleanCat}`
      : finalType === 'expense'
        ? 'Tambah Pengeluaran'
        : 'Tambah Pemasukan';
  $('#tx-type').value = finalType;
  $('#tx-date').value = transaction ? transaction.date : today();
  $('#tx-category').value = cleanCat;
  $('#tx-amount').value = transaction ? transaction.amount : '';
  $('#tx-description').value = transaction ? transaction.description : '';
  fillCategoryOptions(finalType);
  $('#tx-dialog').showModal();
  setupDraggableDialogs();
}

function openAssetDialog(asset = null) {
  state.editing.asset = asset;
  $('#asset-dialog-title').textContent = asset ? 'Ubah Aset' : 'Tambah Aset';
  $('#asset-name').value = asset ? asset.name : '';
  $('#asset-category').value = asset ? asset.category : 'Perabot';
  $('#asset-quantity').value = asset ? asset.quantity : 1;
  $('#asset-condition').value = asset ? asset.condition : 'baik';
  $('#asset-acquired').value = asset ? asset.acquiredDate || '' : '';
  $('#asset-value').value = asset && asset.value ? asset.value : '';
  $('#asset-location').value = asset ? asset.location || '' : '';
  $('#asset-note').value = asset ? asset.note || '' : '';
  $('#asset-dialog').showModal();
}

function openUserDialog(user = null) {
  state.editing.user = user;
  $('#user-dialog-title').textContent = user ? 'Ubah Pengguna' : 'Tambah Pengguna';
  $('#user-name').value = user ? user.name : '';
  $('#user-username').value = user ? user.username : '';
  $('#user-username').disabled = Boolean(user);
  $('#user-role').value = user ? user.role : 'bendahara';
  $('#user-password').value = '';
  $('#user-password').required = !user;
  $('#user-password-label').textContent = user ? 'Password baru (opsional)' : 'Password';
  $('#user-password-hint').textContent = user
    ? 'Kosongkan jika tidak ingin mengganti password.'
    : 'Minimal 6 karakter.';
  $('#user-dialog').showModal();
}

function downloadFile(url) {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.rel = 'noopener';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

function exportTransactions() {
  const params = new URLSearchParams();
  if (state.txFilters.month) params.set('month', state.txFilters.month);
  if (state.txFilters.type) params.set('type', state.txFilters.type);
  if (state.txFilters.category) params.set('category', state.txFilters.category);
  if (state.txFilters.q) params.set('q', state.txFilters.q);
  downloadFile(`/api/export/transactions.csv?${params.toString()}`);
}

async function deleteTransaction(id) {
  if (!confirm('Hapus transaksi ini?')) return;
  await api(`/transactions/${id}`, { method: 'DELETE' });
  await loadCategories();
  toast('Transaksi dihapus.');
  renderView(state.view);
}

async function deleteAsset(id) {
  if (!confirm('Hapus aset ini?')) return;
  await api(`/assets/${id}`, { method: 'DELETE' });
  toast('Aset dihapus.');
  renderView(state.view);
}

async function deleteUser(id) {
  if (!confirm('Hapus pengguna ini?')) return;
  await api(`/users/${id}`, { method: 'DELETE' });
  toast('Pengguna dihapus.');
  renderView('account');
}

async function handleAction(action, element) {
  const id = element.dataset.id;

  if (action === 'logout') return doLogout();
  if (action === 'new-tx') return openTxDialog(null, element.dataset.type);
  if (action === 'new-tx-pos') {
    return openTxDialog(null, element.dataset.type || 'income', element.dataset.category);
  }
  if (action === 'open-cat-manager') return openCategoryDialog();
  if (action === 'filter-dashboard-cat') {
    state.dashboardCategory = element.dataset.cat || '';
    return renderView('dashboard');
  }
  if (action === 'view-tx-category') {
    state.txFilters.category = element.dataset.cat || '';
    state.txFilters.type = '';
    location.hash = '#/transactions';
    return;
  }
  if (action === 'rename-pos') {
    const oldName = element.dataset.cat;
    if (!oldName) return;
    const newName = prompt(`Ubah nama pos "${oldName}" menjadi:`, oldName);
    if (!newName || !newName.trim() || newName.trim() === oldName.trim()) return;
    const trimmed = newName.trim();
    try {
      const data = await api('/categories', {
        method: 'PUT',
        body: { type: 'pos', oldName, newName: trimmed },
      });
      state.categories = data.categories;
      renderCategoryManagerList();
      toast(`Pos "${oldName}" berhasil diubah menjadi "${trimmed}".`);
      if (state.dashboardCategory && matchPosName(state.dashboardCategory, oldName)) {
        state.dashboardCategory = trimmed;
      }
      if (state.txFilters.category && matchPosName(state.txFilters.category, oldName)) {
        state.txFilters.category = trimmed;
      }
      renderView(state.view);
    } catch (err) {
      toast(err.message, true);
    }
    return;
  }
  if (action === 'reset-dialog-pos') {
    const dialog = element.closest('dialog');
    if (dialog) {
      dialog.style.left = '';
      dialog.style.top = '';
      dialog.style.position = '';
      dialog.style.margin = 'auto';
      toast('Posisi pop up di-reset ke tengah.');
    }
    return;
  }
  if (action === 'delete-category') {
    const catName = element.dataset.cat;
    if (!catName || !confirm(`Hapus pos "${catName}"?`)) return;
    try {
      const data = await api('/categories', { method: 'DELETE', body: { type: 'pos', name: catName } });
      state.categories = data.categories;
      renderCategoryManagerList();
      toast(`Pos "${catName}" dihapus.`);
      if (state.dashboardCategory && matchPosName(state.dashboardCategory, catName)) {
        state.dashboardCategory = '';
      }
      renderView(state.view);
    } catch (err) {
      toast(err.message, true);
    }
    return;
  }
  if (action === 'new-asset') return openAssetDialog();
  if (action === 'new-user') return openUserDialog();
  if (action === 'print-report') return window.print();
  if (action === 'export-tx') return exportTransactions();
  if (action === 'export-assets') return downloadFile('/api/export/assets.csv');
  if (action === 'export-report') {
    return downloadFile(`/api/export/transactions.csv?month=${encodeURIComponent(state.reportMonth || currentMonth())}`);
  }
  if (action === 'reset-tx-filter') {
    state.txFilters = { month: '', type: '', category: '', q: '' };
    return renderView('transactions');
  }
  if (action === 'reset-asset-filter') {
    state.assetFilters = { q: '', category: '' };
    return renderView('assets');
  }
  if (action === 'edit-tx') {
    const transaction = state.txItems.find((item) => item.id === id);
    if (transaction) openTxDialog(transaction);
    return;
  }
  if (action === 'delete-tx') return deleteTransaction(id);
  if (action === 'edit-asset') {
    const asset = state.assetItems.find((item) => item.id === id);
    if (asset) openAssetDialog(asset);
    return;
  }
  if (action === 'delete-asset') return deleteAsset(id);
  if (action === 'edit-user') {
    const user = state.users.find((item) => item.id === id);
    if (user) openUserDialog(user);
    return;
  }
  if (action === 'delete-user') return deleteUser(id);
}

function bindEvents() {
  $('#login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = $('#login-submit');
    const errorEl = $('#login-error');
    errorEl.textContent = '';
    button.disabled = true;
    button.textContent = 'Memproses…';
    try {
      const data = await api('/login', {
        method: 'POST',
        body: {
          username: $('#login-username').value,
          password: $('#login-password').value,
        },
      });
      $('#login-form').reset();
      await loadCategories();
      enterApp(data.user);
      toast(`Selamat datang, ${data.user.name}!`);
    } catch (err) {
      errorEl.textContent = err.message;
    } finally {
      button.disabled = false;
      button.textContent = 'Masuk';
    }
  });

  $('#tx-type').addEventListener('change', (event) => {
    fillCategoryOptions(event.target.value);
  });

  $('#new-cat-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = $('#new-cat-name');
    const name = input.value.trim();
    if (!name) return;
    const button = $('#new-cat-save');
    button.disabled = true;
    button.textContent = 'Menyimpan…';
    try {
      const data = await api('/categories', { method: 'POST', body: { type: 'pos', name } });
      state.categories = data.categories;
      input.value = '';
      renderCategoryManagerList();
      toast(`Pos kegiatan "${name}" berhasil ditambahkan.`);
      renderView(state.view);
    } catch (err) {
      toast(err.message, true);
    } finally {
      button.disabled = false;
      button.textContent = 'Tambah Pos';
    }
  });

  $('#tx-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = $('#tx-save');
    const id = state.editing.tx?.id;
    const payload = {
      type: $('#tx-type').value,
      date: $('#tx-date').value,
      category: $('#tx-category').value.trim(),
      amount: Number($('#tx-amount').value),
      description: $('#tx-description').value.trim(),
    };
    button.disabled = true;
    button.textContent = 'Menyimpan…';
    try {
      if (id) await api(`/transactions/${id}`, { method: 'PUT', body: payload });
      else await api('/transactions', { method: 'POST', body: payload });
      await loadCategories();
      $('#tx-dialog').close();
      state.editing.tx = null;
      toast(id ? 'Transaksi diperbarui.' : 'Transaksi disimpan.');
      renderView(state.view);
    } catch (err) {
      toast(err.message, true);
    } finally {
      button.disabled = false;
      button.textContent = 'Simpan';
    }
  });

  $('#asset-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = $('#asset-save');
    const id = state.editing.asset?.id;
    const payload = {
      name: $('#asset-name').value.trim(),
      category: $('#asset-category').value,
      quantity: Number($('#asset-quantity').value),
      condition: $('#asset-condition').value,
      acquiredDate: $('#asset-acquired').value,
      value: Number($('#asset-value').value || 0),
      location: $('#asset-location').value.trim(),
      note: $('#asset-note').value.trim(),
    };
    button.disabled = true;
    button.textContent = 'Menyimpan…';
    try {
      if (id) await api(`/assets/${id}`, { method: 'PUT', body: payload });
      else await api('/assets', { method: 'POST', body: payload });
      $('#asset-dialog').close();
      state.editing.asset = null;
      toast(id ? 'Aset diperbarui.' : 'Aset disimpan.');
      renderView(state.view);
    } catch (err) {
      toast(err.message, true);
    } finally {
      button.disabled = false;
      button.textContent = 'Simpan';
    }
  });

  $('#user-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = $('#user-save');
    const id = state.editing.user?.id;
    const password = $('#user-password').value;
    const payload = {
      name: $('#user-name').value.trim(),
      role: $('#user-role').value,
    };
    if (password) payload.password = password;
    button.disabled = true;
    button.textContent = 'Menyimpan…';
    try {
      let result;
      if (id) {
        result = await api(`/users/${id}`, { method: 'PUT', body: payload });
      } else {
        payload.username = $('#user-username').value.trim();
        result = await api('/users', { method: 'POST', body: payload });
      }
      if (id && id === state.user.id) {
        state.user = result.user;
        updateUserChip();
      }
      $('#user-dialog').close();
      state.editing.user = null;
      toast(id ? 'Pengguna diperbarui.' : 'Pengguna ditambahkan.');
      renderView('account');
    } catch (err) {
      toast(err.message, true);
    } finally {
      button.disabled = false;
      button.textContent = 'Simpan';
    }
  });

  document.addEventListener('change', (event) => {
    if (event.target && event.target.id === 'dashboard-pos-filter') {
      state.dashboardCategory = event.target.value || '';
      renderView('dashboard');
    }
  });

  document.addEventListener('click', (event) => {
    const closeButton = event.target.closest('[data-close]');
    if (closeButton) {
      closeButton.closest('dialog')?.close();
      return;
    }
    const actionElement = event.target.closest('[data-action]');
    if (!actionElement) return;
    const action = actionElement.dataset.action;
    if (!action) return;
    Promise.resolve(handleAction(action, actionElement)).catch((err) => {
      toast(err.message, true);
    });
  });

  window.addEventListener('hashchange', route);
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator && window.isSecureContext) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
}

async function loadBrand() {
  try {
    const config = await api('/config');
    if (!config.rtName && !config.appName) return;
    if (config.rtName) state.rtName = config.rtName;
    const appTitle = config.appName || `${state.rtName} Aplikasi Gank`;
    document.title = appTitle;
    const loginTitle = $('#login-title');
    const brandTitle = $('#brand-title');
    if (loginTitle) loginTitle.textContent = appTitle;
    if (brandTitle) brandTitle.textContent = appTitle;
  } catch {
    /* abaikan, gunakan nama default */
  }
}

async function init() {
  hydrateIcons();
  bindEvents();
  setupDraggableDialogs();
  startLiveClock();
  await Promise.all([loadBrand(), loadCategories()]);
  try {
    const data = await api('/me');
    enterApp(data.user);
  } catch {
    showLogin();
  } finally {
    $('#splash').classList.add('hidden');
  }
  registerServiceWorker();
}

init();
