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
  chevronDown:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
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
  handshake:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2"/><path d="m18 10 1.7-1.7a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L14 6"/><path d="m3 14 5.3 5.3a1 1 0 0 0 1.4 0l3-3"/><path d="m8 9-5.3 5.3"/></svg>',
  returnItem:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>',
};

// Peta emoji/gambar berdasarkan kata kunci nama aset
const ASSET_EMOJI_MAP = [
  { keys: ['meja'], emoji: '🪑', label: 'Meja',   svgPath: '<path d="M2 9h20M2 9v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9M6 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3M8 15v3M16 15v3"/>' },
  { keys: ['kursi', 'sofa', 'bangku'], emoji: '🪑', label: 'Kursi', svgPath: '<path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M3 11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3v-2ZM5 13v5M19 13v5M8 18h8"/>' },
  { keys: ['proyektor', 'lcd', 'tv', 'televisi', 'layar', 'monitor'], emoji: '📺', label: 'Elektronik', svgPath: '<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 20h8M12 18v2"/>' },
  { keys: ['speaker', 'sound', 'mic', 'microphone', 'toa'], emoji: '🔊', label: 'Audio', svgPath: '<path d="M11 5 6 9H2v6h4l5 4V5ZM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/>' },
  { keys: ['tenda', 'terpal', 'parasol'], emoji: '⛺', label: 'Tenda', svgPath: '<path d="M22 19 12 3 2 19M12 3v16"/><path d="M5 19h14"/>' },
  { keys: ['karpet', 'tikar', 'alas'], emoji: '🛏️', label: 'Karpet', svgPath: '<rect x="2" y="8" width="20" height="10" rx="2"/><path d="M2 11h20M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/>' },
  { keys: ['alat', 'kebersihan', 'sapu', 'pel', 'ember'], emoji: '🧹', label: 'Kebersihan', svgPath: '<path d="M3 22V7c0-1.5 1-2 2-2h2M9 5h1M13 5h1M17 5h2a2 2 0 0 1 2 2v15"/><path d="M5 12h14M5 17h14"/>' },
  { keys: ['generator', 'genset', 'listrik'], emoji: '⚡', label: 'Generator', svgPath: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>' },
  { keys: ['mobil', 'motor', 'kendaraan'], emoji: '🚗', label: 'Kendaraan', svgPath: '<path d="M5 17H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2l3.5-7h11L21 9a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M5 17h14M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0"/>' },
  { keys: ['pompa', 'air', 'selang'], emoji: '💧', label: 'Air', svgPath: '<path d="M12 2c-5.5 7-7 10-7 13a7 7 0 0 0 14 0c0-3-1.5-6-7-13Z"/>' },
  { keys: ['tangga', 'stegher', 'scaffolding'], emoji: '🪜', label: 'Tangga', svgPath: '<path d="M6 2v20M18 2v20M6 7h12M6 12h12M6 17h12"/>' },
  { keys: ['alat masak', 'panci', 'wajan', 'kompor', 'dapur'], emoji: '🍳', label: 'Dapur', svgPath: '<path d="M6 20V13m0 0a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4m-12 0h12M18 20V13"/>' },
  { keys: ['buku', 'dokumen', 'arsip'], emoji: '📚', label: 'Dokumen', svgPath: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V3.5A2.5 2.5 0 0 1 6.5 1H20v18H6.5A2.5 2.5 0 0 1 4 19.5Z"/>' },
  { keys: ['filling', 'lemari', 'rak', 'kabinet'], emoji: '🗄️', label: 'Lemari', svgPath: '<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M2 10h20M6 6h.01M6 15h.01"/>' },
  { keys: ['tiang', 'bendera', 'umbul'], emoji: '🚩', label: 'Bendera', svgPath: '<path d="M4 22V4M4 4h12l-2 5 2 5H4"/>' },
  { keys: ['perlengkapan', 'peralatan', 'tool'], emoji: '🔧', label: 'Peralatan', svgPath: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/>' },
];

const POPULAR_ASSET_ICONS = [
  '🪑', '🛋️', '🛏️', '🗄️', '📺', '🔊', '🎤', '💻', '🖨️', '⚡',
  '⛺', '🎪', '🚩', '🍳', '🍽️', '🫖', '🚗', '🏍️', '🚲', '🧹',
  '🪜', '🔧', '🔨', '💧', '📦', '📚', '⚽', '🏆'
];

function getAssetEmoji(name, customIcon) {
  if (customIcon && String(customIcon).trim()) {
    return String(customIcon).trim();
  }
  const lc = String(name || '').toLowerCase();
  for (const entry of ASSET_EMOJI_MAP) {
    if (entry.keys.some((k) => lc.includes(k))) return entry.emoji;
  }
  return '📦';
}

function renderIconPresets(containerEl, currentVal, onSelect) {
  if (!containerEl) return;
  containerEl.innerHTML = POPULAR_ASSET_ICONS.map((emoji) => {
    const isAct = currentVal === emoji;
    return `<button type="button" class="icon-preset-btn ${isAct ? 'is-active' : ''}" data-emoji="${emoji}" title="${emoji}">${emoji}</button>`;
  }).join('');
  containerEl.onclick = (e) => {
    const btn = e.target.closest('.icon-preset-btn');
    if (!btn) return;
    const emoji = btn.dataset.emoji;
    $$('.icon-preset-btn', containerEl).forEach((b) => b.classList.toggle('is-active', b.dataset.emoji === emoji));
    onSelect(emoji);
  };
}

// Palet warna per kategori
const CATEGORY_PALETTES = {
  'Perabot':     { bg: '#fef3c7', border: '#f59e0b', text: '#92400e', icon: '#d97706' },
  'Elektronik':  { bg: '#ede9fe', border: '#8b5cf6', text: '#4c1d95', icon: '#7c3aed' },
  'Kendaraan':   { bg: '#dbeafe', border: '#3b82f6', text: '#1e3a8a', icon: '#2563eb' },
  'Bangunan':    { bg: '#d1fae5', border: '#10b981', text: '#065f46', icon: '#059669' },
  'Peralatan':   { bg: '#fee2e2', border: '#ef4444', text: '#7f1d1d', icon: '#dc2626' },
  'Lainnya':     { bg: '#f1f5f9', border: '#94a3b8', text: '#334155', icon: '#64748b' },
};

function getCategoryPalette(category) {
  return CATEGORY_PALETTES[category] || CATEGORY_PALETTES['Lainnya'];
}

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

const roleLabel = (role) => (role === 'admin' ? 'Admin' : role === 'warga' ? 'Warga' : 'Bendahara');
const isWarga = () => state.user?.role === 'warga';
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
  assetTab: 'inventory',
  loanFilters: { status: 'all', q: '' },
  loanItems: [],
  reportMonth: currentMonth(),
  users: [],
  editing: { tx: null, asset: null, user: null, loan: null, returnLoan: null },
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
        ${
          isWarga()
            ? ''
            : `
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
            `
        }
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
      ${
        isWarga()
          ? ''
          : `<button class="btn btn-ghost pos-action-btn" type="button" data-action="open-cat-manager" title="Tambah / Kelola Pos Kegiatan">
              ${icon('plus')} <span>Kelola Pos</span>
            </button>`
      }
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
      ? `<div class="list recent-tx-list">${data.recent.slice(0, 3).map((item) => txRow(item, !isWarga())).join('')}</div>`
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
          ${
            isWarga()
              ? ''
              : `
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
              `
          }
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
    ? `<div class="list recent-tx-list">${data.recent.slice(0, 3).map((item) => txRow(item)).join('')}</div>`
    : emptyState('transactions', 'Belum ada transaksi', 'Mulai catat pemasukan atau pengeluaran.');

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
    <div class="card dashboard-asset-card">
      <div class="card-head">
        <div>
          <h2>Aset &amp; Inventaris RT</h2>
        </div>
        <a class="link" href="#/assets">Kelola Semua Aset →</a>
      </div>
      <div class="dashboard-asset-section">
        <div class="dashboard-asset-subhead">
          <span class="subhead-title">${icon('box')} Rincian Jenis Barang (${data.assets.byItem?.length || 0} jenis)</span>
          <small class="muted">Klik barang untuk detail &amp; kelola di menu Aset</small>
        </div>
        ${
          data.assets.byItem && data.assets.byItem.length > 0
            ? `<div class="asset-breakdown-grid">
                ${data.assets.byItem
                  .map((item) => {
                    const conditionBadges = [];
                    if (item.baik > 0) {
                      conditionBadges.push(`<span class="badge sm baik" title="${item.baik} unit kondisi baik">${item.baik} baik</span>`);
                    }
                    if (item.rusakRingan > 0) {
                      conditionBadges.push(`<span class="badge sm rusak-ringan" title="${item.rusakRingan} unit rusak ringan">${item.rusakRingan} rusak ringan</span>`);
                    }
                    if (item.rusakBerat > 0) {
                      conditionBadges.push(`<span class="badge sm rusak-berat" title="${item.rusakBerat} unit rusak berat">${item.rusakBerat} rusak berat</span>`);
                    }
                    return `
                    <div class="asset-item-badge" role="button" tabindex="0" data-action="filter-asset-by-name" data-name="${escapeHtml(item.name)}" title="Klik untuk lihat rincian ${escapeHtml(item.name)}">
                      <div class="asset-badge-icon" style="font-size: 20px; display: grid; place-items: center;">${getAssetEmoji(item.name, item.icon)}</div>
                      <div class="asset-badge-info">
                        <div class="asset-badge-name">${escapeHtml(item.name)}</div>
                        <div class="asset-badge-sub">
                          <span class="badge sm">${escapeHtml(item.category)}</span>
                          <span class="badge sm di-tempat" title="${item.diTempat} unit ada di tempat">${item.diTempat} di tempat</span>
                          ${item.dipinjam > 0 ? `<span class="badge sm dipinjam" title="${item.dipinjam} unit sedang dipinjam warga">🤝 ${item.dipinjam} dipinjam</span>` : ''}
                          ${conditionBadges.join(' ')}
                          ${item.locations ? `<span class="asset-badge-loc" title="Lokasi: ${escapeHtml(item.locations)}">📍 ${escapeHtml(item.locations)}</span>` : ''}
                        </div>
                      </div>
                      <div class="asset-badge-qty">
                        <span class="qty-num">${item.quantity}</span>
                        <span class="qty-unit">unit</span>
                      </div>
                    </div>
                  `;
                  })
                  .join('')}
              </div>`
            : emptyState('assets', 'Belum ada aset terdaftar', 'Klik "Kelola Semua Aset" untuk mulai mencatat inventaris barang RT.')
        }
        ${
          data.assets.dipinjam > 0
            ? `<div class="active-loans-box">
                <div class="active-loans-head">
                  <span>🤝 Ada ${data.assets.dipinjam} unit barang sedang dipinjam oleh warga</span>
                  <button class="btn btn-ghost sm" type="button" data-action="view-asset-loans" style="padding: 4px 10px; font-size: 11.5px; background: #fff;">
                    Buka Riwayat Peminjaman →
                  </button>
                </div>
              </div>`
            : ''
        }
      </div>
    </div>
  `;

  $$('.bar', main).forEach((bar) => {
    bar.style.height = `${bar.dataset.h}%`;
  });
}

function getCategoryListForType(type) {
  const pos = state.categories.pos || DEFAULT_POS;
  if (type === 'income') {
    const extra = state.categories.income?.length ? state.categories.income : INCOME_CATEGORIES;
    return Array.from(new Set([...pos, ...extra]));
  }
  if (type === 'expense') {
    const extra = state.categories.expense?.length ? state.categories.expense : EXPENSE_CATEGORIES;
    return Array.from(new Set([...pos, ...extra]));
  }
  const extraIncome = state.categories.income?.length ? state.categories.income : INCOME_CATEGORIES;
  const extraExpense = state.categories.expense?.length ? state.categories.expense : EXPENSE_CATEGORIES;
  return Array.from(new Set([...pos, ...extraIncome, ...extraExpense]));
}

function renderCategoryFilterOptions(type, selectedCategory = '') {
  const list = getCategoryListForType(type);
  return [
    '<option value="">Semua Kategori / Pos</option>',
    ...list.map(
      (cat) =>
        `<option value="${escapeHtml(cat)}" ${
          selectedCategory && cat.toLowerCase() === selectedCategory.toLowerCase() ? 'selected' : ''
        }>${escapeHtml(cat)}</option>`
    ),
  ].join('');
}

async function renderTransactions(main, token) {
  main.innerHTML = `
    <div class="page-head">
      <div>
        <h1>Transaksi</h1>
        <p class="muted">Catatan pemasukan dan pengeluaran kas</p>
      </div>
      <div class="head-actions">
        <button class="btn btn-ghost" type="button" data-action="export-tx">${icon('download')} CSV</button>
        ${
          isWarga()
            ? ''
            : `
              <button class="btn btn-primary" type="button" data-action="new-tx" data-type="income">${icon(
                'plus'
              )} Pemasukan</button>
              <button class="btn btn-danger-soft" type="button" data-action="new-tx" data-type="expense">${icon(
                'plus'
              )} Pengeluaran</button>
            `
        }
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
        <div class="field-head">
          <span>Kategori / Pos</span>
          ${isWarga() ? '' : '<button type="button" class="btn-text" data-action="open-cat-manager">+ Kelola Pos</button>'}
        </div>
        <select id="tx-category-filter">
          ${renderCategoryFilterOptions(state.txFilters.type, state.txFilters.category)}
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
    const catSelect = $('#tx-category-filter');
    if (catSelect) {
      catSelect.innerHTML = renderCategoryFilterOptions(state.txFilters.type, state.txFilters.category);
    }
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
      ? data.transactions.map((item) => txRow(item, !isWarga())).join('')
      : emptyState('transactions', 'Tidak ada transaksi', 'Ubah filter atau tambahkan transaksi baru.');
  } catch (err) {
    if (token !== renderToken || seq !== txLoadSeq) return;
    listEl.innerHTML = emptyState('warning', 'Gagal memuat transaksi', err.message);
  }
}

function assetRow(asset) {
  const diTempat = asset.availableQty ?? asset.quantity;
  const dipinjam = asset.borrowedQty ?? 0;
  const categoryPal = getCategoryPalette(asset.category);
  const emoji = getAssetEmoji(asset.name, asset.icon);
  return `
    <div class="asset-row-card ${dipinjam > 0 ? 'has-borrowed' : ''}" style="--card-bg:${categoryPal.bg};--card-border:${categoryPal.border};--card-text:${categoryPal.text};">
      <div class="arc-icon">
        ${emoji}
      </div>
      <div class="arc-main">
        <div class="arc-header">
          <span class="arc-name">${escapeHtml(asset.name)}</span>
          <span class="badge" style="background:${categoryPal.bg};color:${categoryPal.text};border-color:${categoryPal.border};">${escapeHtml(asset.category)}</span>
          <span class="badge di-tempat">${diTempat} di tempat</span>
          ${dipinjam > 0 ? `<span class="badge dipinjam">🤝 ${dipinjam} dipinjam</span>` : ''}
        </div>
        <div class="arc-meta">
          <span>Total: <strong>${asset.quantity} unit</strong></span>
          ${asset.location ? `<span class="arc-dot">·</span><span>📍 ${escapeHtml(asset.location)}</span>` : ''}
          ${asset.acquiredDate ? `<span class="arc-dot">·</span><span>📅 ${fmtDate(asset.acquiredDate)}</span>` : ''}
        </div>
        ${asset.note ? `<div class="arc-note">"${escapeHtml(asset.note)}"</div>` : ''}
      </div>
      <div class="arc-right">
        <div class="arc-amount">${asset.value ? fmtMoney(asset.value) : '<span class="muted">—</span>'}</div>
        <span class="badge ${asset.condition}">${conditionLabel(asset.condition)}</span>
        ${
          isWarga()
            ? ''
            : `
              <div class="arc-actions">
                ${
                  diTempat > 0
                    ? `<button class="icon-btn sm loan" type="button" data-action="new-loan" data-asset-id="${asset.id}" aria-label="Pinjamkan barang ini" title="Pinjamkan barang ini">${icon('handshake')}</button>`
                    : ''
                }
                <button class="icon-btn sm" type="button" data-action="edit-asset" data-id="${asset.id}" aria-label="Ubah aset" title="Ubah">${icon('edit')}</button>
                <button class="icon-btn sm danger" type="button" data-action="delete-asset" data-id="${asset.id}" aria-label="Hapus aset" title="Hapus">${icon('trash')}</button>
              </div>
            `
        }
      </div>
    </div>
  `;
}

function loanRow(loan) {
  const isActive = loan.status === 'dipinjam';
  const isOverdue = isActive && loan.expectedReturnDate && loan.expectedReturnDate < today();
  const items = Array.isArray(loan.items) && loan.items.length > 0
    ? loan.items
    : (loan.assetName ? [{ assetName: loan.assetName, quantity: loan.quantity }] : []);

  const hasMultipleItems = items.length > 1;
  const itemsHtml = hasMultipleItems
    ? `<div class="loan-multi-items">
        ${items.map((it) => `
          <span class="loan-item-pill">
            <strong>${escapeHtml(it.assetName)}</strong>
            <span class="pill-qty">${it.quantity} unit</span>
          </span>
        `).join('')}
      </div>`
    : '';

  const headerTitle = hasMultipleItems
    ? `${items.length} Jenis Barang Dipinjam (${loan.quantity} unit total)`
    : `${escapeHtml(items[0]?.assetName || loan.assetName || 'Barang Inventaris')}`;

  return `
    <div class="loan-item ${isActive ? 'is-active' : 'is-returned'}">
      <div class="loan-icon ${isActive ? 'active' : 'returned'}">
        ${icon(isActive ? 'handshake' : 'check')}
      </div>
      <div class="loan-main">
        <div class="loan-header">
          <span class="loan-asset-name">${headerTitle}</span>
          <span class="badge ${isActive ? (isOverdue ? 'overdue' : 'dipinjam') : 'dikembalikan'}">
            ${isActive ? (isOverdue ? '⚠️ Terlambat Kembali' : 'Sedang Dipinjam') : '✓ Sudah Dikembalikan'}
          </span>
        </div>
        ${itemsHtml}
        <div class="loan-borrower">
          Peminjam: <strong>${escapeHtml(loan.borrowerName)}</strong>
          ${loan.borrowerContact ? `<span class="muted">(${escapeHtml(loan.borrowerContact)})</span>` : ''}
        </div>
        <div class="loan-meta">
          <span>📅 Pinjam: <strong>${fmtDate(loan.loanDate)}</strong></span>
          ${
            isActive
              ? (loan.expectedReturnDate ? `<span>⏳ Batas: <strong>${fmtDate(loan.expectedReturnDate)}</strong></span>` : '')
              : `<span>✓ Kembali: <strong>${fmtDate(loan.returnDate)}</strong>${loan.returnCondition ? ` (${conditionLabel(loan.returnCondition)})` : ''}</span>`
          }
          ${loan.createdBy ? `<span>👤 Dicatat: ${escapeHtml(loan.createdBy)}</span>` : ''}
        </div>
        ${loan.purpose ? `<div class="loan-purpose">Keperluan: "${escapeHtml(loan.purpose)}"</div>` : ''}
        ${loan.returnNote ? `<div class="loan-purpose muted">Catatan kembali: "${escapeHtml(loan.returnNote)}"</div>` : ''}
      </div>
      <div class="loan-right">
        <div class="loan-qty-badge">${loan.quantity} unit${hasMultipleItems ? ` (${items.length} jenis)` : ''}</div>
        ${
          isWarga()
            ? `
              <div class="item-actions">
                <button class="icon-btn sm" type="button" data-action="pdf-loan" data-id="${loan.id}" title="Lihat / Cetak Formulir" aria-label="Cetak Formulir">${icon('print')}</button>
              </div>
            `
            : `
              <div class="item-actions">
                ${
                  isActive
                    ? `<button class="btn btn-primary sm" type="button" data-action="return-loan" data-id="${loan.id}" title="Proses pengembalian barang">
                        ${icon('returnItem')} Kembalikan
                      </button>`
                    : ''
                }
                <button class="icon-btn sm" type="button" data-action="pdf-loan" data-id="${loan.id}" title="Lihat / Cetak Formulir" aria-label="Cetak Formulir">${icon('print')}</button>
                <button class="icon-btn sm" type="button" data-action="edit-loan" data-id="${loan.id}" title="Ubah catatan" aria-label="Ubah">${icon('edit')}</button>
                <button class="icon-btn sm danger" type="button" data-action="delete-loan" data-id="${loan.id}" title="Hapus catatan" aria-label="Hapus">${icon('trash')}</button>
              </div>
            `
        }
      </div>
    </div>
  `;
}

async function renderAssets(main, token) {
  const currentTab = state.assetTab || 'inventory';
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
        <h1>Aset &amp; Inventaris RT</h1>
        <p class="muted">Pengelolaan barang inventaris dan riwayat peminjaman warga</p>
      </div>
      <div class="head-actions">
        <button class="btn btn-ghost" type="button" data-action="${currentTab === 'loans' ? 'export-loans' : 'export-assets'}">${icon('download')} CSV</button>
        ${
          isWarga()
            ? ''
            : `
              <button class="btn btn-primary" type="button" data-action="new-loan">${icon('handshake')} Catat Peminjaman</button>
              <button class="btn btn-ghost" type="button" data-action="new-asset">${icon('plus')} Tambah Aset</button>
            `
        }
      </div>
    </div>

    <div class="asset-view-tabs" role="tablist">
      <button type="button" class="asset-tab-btn ${currentTab === 'inventory' ? 'is-active' : ''}" data-action="switch-asset-tab" data-tab="inventory">
        ${icon('box')} <span>Inventaris Barang</span>
        <span class="tab-count" id="tab-inventory-count">${state.assetItems.length ? `${state.assetItems.length}` : ''}</span>
      </button>
      <button type="button" class="asset-tab-btn ${currentTab === 'loans' ? 'is-active' : ''}" data-action="switch-asset-tab" data-tab="loans">
        ${icon('handshake')} <span>Riwayat Peminjaman</span>
        <span class="tab-count" id="tab-loans-count"></span>
      </button>
    </div>

    <div id="asset-tab-inventory-content" class="${currentTab === 'inventory' ? '' : 'hidden'}">
      <div class="card filters">
        <label class="field grow">
          <span>Cari</span>
          <div class="input-icon">${icon('search')}<input id="asset-q" placeholder="Cari nama, lokasi, catatan" value="${escapeHtml(
            state.assetFilters.q
          )}"></div>
        </label>
        <label class="field">
          <span>Jenis Barang</span>
          <div class="select-item-wrap">
            <select id="asset-item-filter" class="select-item">
              <option value="">— Semua Barang —</option>
            </select>
            <span class="select-item-icon">${icon('chevronDown')}</span>
          </div>
        </label>
        <label class="field">
          <span>Kategori</span>
          <select id="asset-category-filter">${categoryOptions}</select>
        </label>
        <button class="btn btn-ghost" type="button" data-action="reset-asset-filter">Reset</button>
      </div>
      <div id="asset-summary" class="grid stats stats-5"></div>
      <div id="asset-item-summary-bar"></div>
      <div id="asset-count" class="asset-count-banner"></div>
      <div id="asset-list" class="asset-rows-container"></div>
    </div>

    <div id="asset-tab-loans-content" class="${currentTab === 'loans' ? '' : 'hidden'}">
      <div class="card filters">
        <label class="field grow">
          <span>Cari Riwayat</span>
          <div class="input-icon">${icon('search')}<input id="loan-q" placeholder="Cari nama peminjam, nama barang, keperluan..." value="${escapeHtml(
            state.loanFilters.q || ''
          )}"></div>
        </label>
        <label class="field">
          <span>Status Pinjaman</span>
          <select id="loan-status-filter">
            <option value="all" ${state.loanFilters.status === 'all' ? 'selected' : ''}>Semua Status</option>
            <option value="dipinjam" ${state.loanFilters.status === 'dipinjam' ? 'selected' : ''}>Sedang Dipinjam (Aktif)</option>
            <option value="dikembalikan" ${state.loanFilters.status === 'dikembalikan' ? 'selected' : ''}>Sudah Dikembalikan</option>
          </select>
        </label>
        <button class="btn btn-ghost" type="button" data-action="reset-loan-filter">Reset</button>
      </div>
      <div id="loan-count" class="asset-count-banner"></div>
      <div id="loan-list" class="list card" style="gap: 8px;"></div>
    </div>
  `;

  // Bind inventory inputs
  const catFilter = $('#asset-category-filter');
  if (catFilter) {
    catFilter.value = state.assetFilters.category;
    catFilter.addEventListener('change', (event) => {
      state.assetFilters.category = event.target.value;
      loadAssets(token);
    });
  }

  $('#asset-item-filter')?.addEventListener('change', (event) => {
    state.assetFilters.q = event.target.value;
    const qInput = $('#asset-q');
    if (qInput) qInput.value = event.target.value;
    loadAssets(token);
  });

  let searchTimer;
  $('#asset-q')?.addEventListener('input', (event) => {
    const value = event.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.assetFilters.q = value;
      // sinkronisasi dropdown
      const sel = $('#asset-item-filter');
      if (sel) {
        const match = Array.from(sel.options).find(
          (o) => o.value.toLowerCase() === value.trim().toLowerCase()
        );
        sel.value = match ? match.value : '';
      }
      loadAssets(token);
    }, 250);
  });

  // Bind loan inputs
  $('#loan-status-filter')?.addEventListener('change', (event) => {
    state.loanFilters.status = event.target.value;
    loadLoans(token);
  });

  let loanSearchTimer;
  $('#loan-q')?.addEventListener('input', (event) => {
    const value = event.target.value;
    clearTimeout(loanSearchTimer);
    loanSearchTimer = setTimeout(() => {
      state.loanFilters.q = value;
      loadLoans(token);
    }, 250);
  });

  await Promise.all([loadAssets(token), loadLoans(token)]);
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
          <div class="stat-top"><span class="stat-label">Jenis &amp; Total Unit</span><span class="stat-icon asset">${icon('box')}</span></div>
          <div class="stat-value">${summary.units} <small style="font-size:12px;font-weight:normal;color:var(--muted)">unit</small></div>
          <div class="stat-foot">${summary.items} jenis aset</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Ada di Tempat</span><span class="stat-icon income">${icon('check')}</span></div>
          <div class="stat-value income">${summary.diTempat ?? summary.units}</div>
          <div class="stat-foot">unit siap dipakai</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Sedang Dipinjam</span><span class="stat-icon ${summary.dipinjam > 0 ? 'expense' : ''}">${icon('handshake')}</span></div>
          <div class="stat-value ${summary.dipinjam > 0 ? 'expense' : ''}">${summary.dipinjam || 0}</div>
          <div class="stat-foot">${summary.activeLoansCount || 0} peminjaman aktif</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Kondisi Baik</span><span class="stat-icon income">${icon('check')}</span></div>
          <div class="stat-value income">${summary.baik}</div>
          <div class="stat-foot">unit</div>
        </div>
        <div class="card stat">
          <div class="stat-top"><span class="stat-label">Perlu Perbaikan</span><span class="stat-icon expense">${icon('warning')}</span></div>
          <div class="stat-value expense">${summary.rusakRingan + summary.rusakBerat}</div>
          <div class="stat-foot">${summary.rusakRingan} ringan · ${summary.rusakBerat} berat</div>
        </div>
      `;
    }

    const tabInvCount = $('#tab-inventory-count');
    if (tabInvCount) tabInvCount.textContent = `${data.assets.length}`;

    // Isi dropdown jenis barang
    const itemSelect = $('#asset-item-filter');
    if (itemSelect && summary && summary.byItem) {
      const selectedVal = state.assetFilters.q;
      const opts = summary.byItem.map((item) => {
        const statusTxt = item.dipinjam > 0
          ? ` — ${item.diTempat} di tempat, ${item.dipinjam} dipinjam`
          : ` — ${item.quantity} unit (semua di tempat)`;
        const sel = selectedVal && selectedVal.trim().toLowerCase() === item.name.toLowerCase() ? ' selected' : '';
        return `<option value="${escapeHtml(item.name)}"${sel}>${escapeHtml(item.name)}${statusTxt}</option>`;
      }).join('');
      itemSelect.innerHTML = `<option value=""${!selectedVal ? ' selected' : ''}>— Semua Barang —</option>${opts}`;
    }

    // Info bar: tampilkan card grid jenis barang
    const barEl = $('#asset-item-summary-bar');
    if (barEl && summary && summary.byItem && summary.byItem.length > 0) {
      const selectedName = state.assetFilters.q ? state.assetFilters.q.trim().toLowerCase() : '';

      const cards = summary.byItem.map((item) => {
        const pct = item.quantity > 0 ? Math.round((item.diTempat / item.quantity) * 100) : 0;
        const isActive = selectedName === item.name.toLowerCase();
        const pal = getCategoryPalette(item.category);
        const emoji = getAssetEmoji(item.name, item.icon);
        const hasBorrow = item.dipinjam > 0;
        return `
          <div class="asset-item-card ${isActive ? 'is-active' : ''} ${hasBorrow ? 'has-loan' : ''}"
               data-action="quick-filter-asset"
               data-name="${escapeHtml(item.name)}"
               role="button" tabindex="0"
               title="Filter: ${escapeHtml(item.name)}"
               style="--card-bg:${pal.bg};--card-border:${pal.border};--card-text:${pal.text};--card-icon:${pal.icon}">
            <div class="aic-header">
              <div class="aic-emoji">${emoji}</div>
              <div class="aic-actions">
                ${hasBorrow ? `<span class="aic-loan-badge">${item.dipinjam} dipinjam</span>` : ''}
                ${
                  isWarga()
                    ? ''
                    : `<button type="button" class="aic-icon-edit-btn" data-action="open-edit-icon" data-name="${escapeHtml(item.name)}" data-icon="${escapeHtml(item.icon || emoji)}" title="Ubah ikon ${escapeHtml(item.name)}">
                        ${icon('edit')}
                      </button>`
                }
              </div>
            </div>
            <div class="aic-name">${escapeHtml(item.name)}</div>
            <div class="aic-cat">${escapeHtml(item.category)}</div>
            ${item.locations ? `<div class="aic-loc">📍 ${escapeHtml(item.locations)}</div>` : ''}
            <div class="aic-stats">
              <div class="aic-stat">
                <span class="aic-num">${item.quantity}</span>
                <span class="aic-lbl">Total</span>
              </div>
              <div class="aic-stat-sep"></div>
              <div class="aic-stat">
                <span class="aic-num ok">${item.diTempat}</span>
                <span class="aic-lbl">Di Tempat</span>
              </div>
              <div class="aic-stat-sep"></div>
              <div class="aic-stat">
                <span class="aic-num ${hasBorrow ? 'warn' : ''}">${item.dipinjam}</span>
                <span class="aic-lbl">Dipinjam</span>
              </div>
            </div>
            <div class="aic-progress-wrap">
              <div class="aic-progress">
                <div class="aic-progress-fill" style="width:${pct}%"></div>
              </div>
              <span class="aic-pct">${pct}% di tempat</span>
            </div>
          </div>
        `;
      }).join('');

      barEl.innerHTML = `
        <div class="asset-item-cards-label">
          ${icon('box')} <span>Ringkasan Jenis Barang</span>
          ${selectedName ? `<button class="aic-clear-btn" data-action="quick-filter-asset" data-name="" type="button">✕ Tampilkan Semua</button>` : ''}
        </div>
        <div class="asset-item-cards">${cards}</div>
      `;
    } else if (barEl) {
      barEl.innerHTML = '';
    }

    const countEl = $('#asset-count');
    if (countEl) {
      const totalUnitsInList = data.assets.reduce((sum, a) => sum + (Number(a.quantity) || 0), 0);
      countEl.innerHTML = `
        <div class="acb-content">
          <div class="acb-title">
            <span class="acb-badge-num">${data.assets.length}</span>
            <span class="acb-label">Jenis Aset Ditampilkan</span>
            <span class="acb-sub">(${totalUnitsInList} total unit)</span>
          </div>
          ${
            state.assetFilters.q || state.assetFilters.category
              ? `<div class="acb-filter-tag">
                  <span>Filter: <strong>${escapeHtml(state.assetFilters.q || state.assetFilters.category)}</strong></span>
                  <button type="button" class="acb-reset-btn" data-action="reset-asset-filter">✕ Reset</button>
                </div>`
              : ''
          }
        </div>
      `;
    }

    listEl.innerHTML = data.assets.length
      ? data.assets.map(assetRow).join('')
      : emptyState('assets', 'Belum ada aset', 'Tambahkan aset RT untuk mulai mencatat inventaris.');
  } catch (err) {
    if (token !== renderToken || seq !== assetLoadSeq) return;
    listEl.innerHTML = emptyState('warning', 'Gagal memuat aset', err.message);
  }
}

let loanLoadSeq = 0;
async function loadLoans(token) {
  const listEl = $('#loan-list');
  if (!listEl) return;
  const seq = ++loanLoadSeq;
  listEl.innerHTML = '<div class="loading"><div class="spinner"></div>Memuat riwayat peminjaman…</div>';

  const params = new URLSearchParams();
  if (state.loanFilters.q) params.set('q', state.loanFilters.q);
  if (state.loanFilters.status && state.loanFilters.status !== 'all') {
    params.set('status', state.loanFilters.status);
  }

  try {
    const data = await api(`/asset-loans?${params.toString()}`);
    if (token !== renderToken || seq !== loanLoadSeq) return;
    state.loanItems = data.loans;
    const summary = data.summary;

    const countEl = $('#loan-count');
    if (countEl) {
      const activeCount = data.loans.filter((l) => l.status === 'dipinjam').length;
      countEl.innerHTML = `
        <div class="acb-content">
          <div class="acb-title">
            <span class="acb-badge-num">${data.loans.length}</span>
            <span class="acb-label">Catatan Peminjaman Ditampilkan</span>
            ${activeCount > 0 ? `<span class="badge dipinjam" style="font-size:11px;">${activeCount} Sedang Dipinjam</span>` : ''}
          </div>
          ${
            state.loanFilters.status !== 'all' || state.loanFilters.q
              ? `<div class="acb-filter-tag">
                  <button type="button" class="acb-reset-btn" data-action="reset-loan-filter">✕ Reset Filter</button>
                </div>`
              : ''
          }
        </div>
      `;
    }

    const tabLoansCount = $('#tab-loans-count');
    if (tabLoansCount && summary) {
      if (summary.activeLoansCount > 0) {
        tabLoansCount.textContent = `${summary.activeLoansCount} aktif`;
        tabLoansCount.classList.add('alert');
      } else {
        tabLoansCount.textContent = `${summary.totalLoansCount || 0}`;
        tabLoansCount.classList.remove('alert');
      }
    }

    listEl.innerHTML = data.loans.length
      ? data.loans.map(loanRow).join('')
      : emptyState('handshake', 'Belum ada catatan peminjaman', 'Klik tombol "Catat Peminjaman" untuk mencatat peminjaman barang oleh warga.');
  } catch (err) {
    if (token !== renderToken || seq !== loanLoadSeq) return;
    listEl.innerHTML = emptyState('warning', 'Gagal memuat riwayat peminjaman', err.message);
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
    ${isWarga() ? `<div class="warn-card">${icon('info')}<div><strong>Akun Warga (Hanya Lihat)</strong> — Anda login sebagai warga. Hanya dapat melihat data kas dan inventaris RT, tidak dapat mengubah data.</div></div>` : ''}
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

function renderTxCategoryMenu(query = '') {
  const menu = $('#tx-category-menu');
  const input = $('#tx-category');
  const wrap = $('#tx-category-select');
  if (!menu || !input) return;
  const type = $('#tx-type')?.value || 'income';
  const list = getCategoryListForType(type);
  const keyword = String(query ?? input.value).trim().toLowerCase();
  const filtered = keyword ? list.filter((cat) => cat.toLowerCase().includes(keyword)) : list;
  const current = input.value.trim().toLowerCase();
  menu.innerHTML = filtered.length
    ? filtered
        .map((cat) => {
          const active = cat.toLowerCase() === current;
          return `<button type="button" class="cat-select-option${active ? ' is-active' : ''}" role="option" aria-selected="${active}" data-cat="${escapeHtml(
            cat
          )}">
            <span class="cat-select-option-icon">${icon('tag')}</span>
            <span class="cat-select-option-label">${escapeHtml(cat)}</span>
          </button>`;
        })
        .join('')
    : `<div class="cat-select-empty">Tidak ada pos cocok. Pos baru "${
        input.value.trim() ? escapeHtml(input.value.trim()) : '...'
      }" akan dipakai saat disimpan.</div>`;
  menu.hidden = false;
  wrap?.classList.add('is-open');
  input.setAttribute('aria-expanded', 'true');
}

function openTxCategoryMenu() {
  renderTxCategoryMenu($('#tx-category')?.value || '');
}

function closeTxCategoryMenu() {
  const menu = $('#tx-category-menu');
  const wrap = $('#tx-category-select');
  const input = $('#tx-category');
  if (menu) menu.hidden = true;
  wrap?.classList.remove('is-open');
  input?.setAttribute('aria-expanded', 'false');
}

function chooseTxCategory(category) {
  const input = $('#tx-category');
  if (!input) return;
  input.value = category;
  input.focus();
  closeTxCategoryMenu();
}

function fillCategoryOptions() {
  const menu = $('#tx-category-menu');
  if (menu && !menu.hidden) renderTxCategoryMenu($('#tx-category')?.value || '');
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
  closeTxCategoryMenu();
  fillCategoryOptions();
  $('#tx-dialog').showModal();
  setupDraggableDialogs();
}

function openAssetDialog(asset = null) {
  state.editing.asset = asset;
  $('#asset-dialog-title').textContent = asset ? 'Ubah Aset' : 'Tambah Aset';
  const nameInput = $('#asset-name');
  nameInput.value = asset ? asset.name : '';
  $('#asset-category').value = asset ? asset.category : 'Perabot';
  $('#asset-quantity').value = asset ? asset.quantity : 1;
  $('#asset-condition').value = asset ? asset.condition : 'baik';
  $('#asset-acquired').value = asset ? asset.acquiredDate || '' : '';
  $('#asset-value').value = asset && asset.value ? asset.value : '';
  $('#asset-location').value = asset ? asset.location || '' : '';
  $('#asset-note').value = asset ? asset.note || '' : '';

  const iconInput = $('#asset-icon');
  const iconPreview = $('#asset-icon-preview');
  const presetsEl = $('#asset-form-icon-presets');
  const currentIcon = asset ? (asset.icon || '') : '';
  if (iconInput) iconInput.value = currentIcon;

  const updatePreview = () => {
    const val = iconInput ? iconInput.value.trim() : '';
    const finalEmoji = getAssetEmoji(nameInput.value, val);
    if (iconPreview) {
      iconPreview.textContent = finalEmoji;
      iconPreview.classList.toggle('is-set', Boolean(val));
    }
  };

  if (presetsEl) {
    renderIconPresets(presetsEl, currentIcon, (selectedEmoji) => {
      if (iconInput) iconInput.value = selectedEmoji;
      updatePreview();
    });
  }

  if (iconInput) {
    iconInput.oninput = () => {
      updatePreview();
      if (presetsEl) {
        $$('.icon-preset-btn', presetsEl).forEach((b) =>
          b.classList.toggle('is-active', b.dataset.emoji === iconInput.value.trim())
        );
      }
    };
  }

  nameInput.oninput = () => {
    if (iconInput && !iconInput.value.trim()) {
      updatePreview();
    }
  };

  updatePreview();
  $('#asset-dialog').showModal();
}

function openAssetIconDialog(name, currentIcon) {
  const dialog = $('#asset-icon-dialog');
  if (!dialog) return;
  $('#edit-icon-target-name').value = name;
  $('#icon-picker-target-name').textContent = name;
  const customInput = $('#edit-icon-custom-input');
  const previewEl = $('#icon-picker-preview');
  const initialIcon = currentIcon || getAssetEmoji(name);

  if (customInput) customInput.value = currentIcon || '';
  if (previewEl) previewEl.textContent = initialIcon;

  const presetsEl = $('#quick-icon-presets');
  if (presetsEl) {
    renderIconPresets(presetsEl, currentIcon, (selectedEmoji) => {
      if (customInput) customInput.value = selectedEmoji;
      if (previewEl) previewEl.textContent = selectedEmoji;
    });
  }

  if (customInput) {
    customInput.oninput = () => {
      const val = customInput.value.trim();
      if (previewEl) previewEl.textContent = val || getAssetEmoji(name);
      if (presetsEl) {
        $$('.icon-preset-btn', presetsEl).forEach((b) =>
          b.classList.toggle('is-active', b.dataset.emoji === val)
        );
      }
    };
  }

  dialog.showModal();
}

let loanDraftItems = [];

function renderLoanItemRows() {
  const container = $('#loan-items-list-container');
  if (!container) return;

  const assets = state.assetItems || [];
  const loan = state.editing.loan;

  container.innerHTML = loanDraftItems.map((item, index) => {
    const selectedAsset = assets.find((a) => a.id === item.assetId);

    // Calculate effective available quantity for this asset
    const currentLoanQty = loan && Array.isArray(loan.items)
      ? (loan.items.find((i) => i.assetId === item.assetId)?.quantity || 0)
      : (loan && loan.assetId === item.assetId ? loan.quantity : 0);
    const available = selectedAsset ? Math.max(0, (selectedAsset.availableQty ?? selectedAsset.quantity) + currentLoanQty) : 0;

    const options = assets.map((a) => {
      const isSelected = a.id === item.assetId;
      const aCurrentLoanQty = loan && Array.isArray(loan.items)
        ? (loan.items.find((i) => i.assetId === a.id)?.quantity || 0)
        : (loan && loan.assetId === a.id ? loan.quantity : 0);
      const aAvail = Math.max(0, (a.availableQty ?? a.quantity) + aCurrentLoanQty);
      const stockText = aAvail > 0 ? `(Tersedia: ${aAvail} unit)` : '(Stok di tempat habis)';
      return `<option value="${escapeHtml(a.id)}" data-available="${aAvail}" ${isSelected ? 'selected' : ''} ${aAvail <= 0 && !isSelected ? 'disabled' : ''}>
        ${escapeHtml(a.name)} · ${escapeHtml(a.category)} ${stockText}
      </option>`;
    }).join('');

    const canDelete = loanDraftItems.length > 1;

    return `
      <div class="loan-item-row" data-index="${index}">
        <div class="loan-item-row-fields">
          <label class="field" style="flex: 2.5; min-width: 170px;">
            <span>Barang #${index + 1} <b style="color:var(--danger)">*</b></span>
            <select class="loan-item-asset-select" data-index="${index}" required>
              ${options || '<option value="">Tidak ada aset</option>'}
            </select>
          </label>
          <label class="field" style="flex: 1; min-width: 90px;">
            <span>Jumlah Unit <b style="color:var(--danger)">*</b></span>
            <input type="number" class="loan-item-qty-input" data-index="${index}" min="1" max="${Math.max(1, available)}" step="1" inputmode="numeric" value="${item.quantity}" required>
          </label>
          <div class="loan-item-del-wrap">
            <button type="button" class="loan-item-del-btn" data-index="${index}" title="Hapus barang ini" ${canDelete ? '' : 'disabled'}>
              ✕
            </button>
          </div>
        </div>
        <div class="loan-item-stock-info ${available <= 0 ? 'stock-empty' : ''}">
          ${available > 0
            ? `<span>✓ Ketersediaan di tempat: <strong>${available} unit</strong></span>`
            : `<span>⚠️ Stok barang ini sedang habis atau dipinjam semua</span>`}
        </div>
      </div>
    `;
  }).join('');

  updateLoanSummary();
}

function updateLoanSummary() {
  const summaryEl = $('#loan-items-summary-text');
  if (!summaryEl) return;
  const totalItems = loanDraftItems.length;
  const totalUnits = loanDraftItems.reduce((sum, it) => sum + (Number(it.quantity) || 0), 0);
  summaryEl.textContent = `Total: ${totalItems} jenis barang · ${totalUnits} unit`;
}

async function openLoanDialog(loan = null, presetAssetId = '') {
  state.editing.loan = loan;
  const dialog = $('#asset-loan-dialog');
  if (!dialog) return;

  // Pastikan daftar aset sudah dimuat
  if (!state.assetItems || state.assetItems.length === 0) {
    try {
      const data = await api('/assets');
      state.assetItems = data.assets || [];
    } catch {}
  }

  $('#loan-dialog-title').textContent = loan ? 'Ubah Formulir Peminjaman' : 'FORM PEMINJAMAN ALAT RUANGAN / INVENTARIS';

  const docHint = $('#loan-doc-no-hint');
  if (docHint) {
    const rawId = String(loan ? loan.id : '');
    const cleanId = rawId.includes('-')
      ? rawId.split('-')[0].toUpperCase()
      : (rawId ? rawId.padStart(4, '0') : 'DRAF');
    docHint.textContent = `Nomor Dokumen: PM-${cleanId} / RT07 / ${new Date().getFullYear()}`;
  }

  // Populate draft items
  if (loan && Array.isArray(loan.items) && loan.items.length > 0) {
    loanDraftItems = loan.items.map((it) => ({
      assetId: it.assetId,
      quantity: Number(it.quantity) || 1,
    }));
  } else if (loan && loan.assetId) {
    loanDraftItems = [{
      assetId: loan.assetId,
      quantity: Number(loan.quantity) || 1,
    }];
  } else if (presetAssetId) {
    loanDraftItems = [{
      assetId: presetAssetId,
      quantity: 1,
    }];
  } else {
    const firstAvailable = (state.assetItems || []).find((a) => (a.availableQty ?? a.quantity) > 0) || state.assetItems[0];
    loanDraftItems = [{
      assetId: firstAvailable ? firstAvailable.id : '',
      quantity: 1,
    }];
  }

  renderLoanItemRows();

  $('#loan-borrower-name').value = loan ? loan.borrowerName : '';
  $('#loan-borrower-contact').value = loan ? loan.borrowerContact || '' : '';
  $('#loan-date').value = loan ? loan.loanDate : today();
  $('#loan-expected-return').value = loan ? loan.expectedReturnDate || '' : '';
  $('#loan-purpose').value = loan ? loan.purpose || '' : '';

  dialog.showModal();
}

function openReturnDialog(loan) {
  state.editing.returnLoan = loan;
  const dialog = $('#asset-return-dialog');
  if (!dialog) return;

  const items = Array.isArray(loan.items) && loan.items.length > 0
    ? loan.items
    : (loan.assetName ? [{ assetName: loan.assetName, quantity: loan.quantity }] : []);

  const itemsBadges = items.map((it) => `
    <span class="loan-item-pill" style="margin-right:4px;margin-bottom:4px;">
      <strong>${escapeHtml(it.assetName)}</strong>
      <span class="pill-qty">${it.quantity} unit</span>
    </span>
  `).join('');

  const infoBox = $('#return-info-box');
  if (infoBox) {
    infoBox.innerHTML = `
      <div>Peminjam: <strong>${escapeHtml(loan.borrowerName)}</strong> ${loan.borrowerContact ? `<span class="muted">(${escapeHtml(loan.borrowerContact)})</span>` : ''}</div>
      <div style="margin-top:6px;"><strong>Barang yang Dikembalikan:</strong> <span class="badge dipinjam">${loan.quantity} unit total</span></div>
      <div class="loan-multi-items" style="margin-top:4px;margin-bottom:6px;">${itemsBadges}</div>
      <div>Tanggal Pinjam: <strong>${fmtDate(loan.loanDate)}</strong>${loan.expectedReturnDate ? ` · Batas: ${fmtDate(loan.expectedReturnDate)}` : ''}</div>
      ${loan.purpose ? `<div class="muted" style="margin-top:4px;">Keperluan: "${escapeHtml(loan.purpose)}"</div>` : ''}
    `;
  }

  $('#return-date').value = today();
  $('#return-condition').value = 'baik';
  $('#return-note').value = '';

  dialog.showModal();
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

function generateLoanPdf(loanId) {
  const url = `/api/asset-loans/${encodeURIComponent(loanId)}/pdf`;
  if (window.AndroidApp && typeof window.AndroidApp.openPdf === 'function') {
    window.AndroidApp.openPdf(url);
    return;
  }
  const win = window.open(url, '_blank');
  if (!win) {
    toast('Pop-up diblokir browser. Izinkan pop-up untuk membuka dokumen PDF.', true);
  }
}

async function handleAction(action, element) {
  const id = element.dataset.id;

  if (action === 'logout') return doLogout();

  const WRITE_ACTIONS = new Set([
    'new-tx',
    'new-tx-pos',
    'edit-tx',
    'delete-tx',
    'open-cat-manager',
    'rename-pos',
    'delete-category',
    'new-asset',
    'edit-asset',
    'delete-asset',
    'open-edit-icon',
    'new-loan',
    'edit-loan',
    'return-loan',
    'delete-loan',
    'new-user',
    'edit-user',
    'delete-user',
  ]);
  if (isWarga() && WRITE_ACTIONS.has(action)) {
    toast('Akun warga hanya memiliki akses melihat (read-only).', true);
    return;
  }
  if (action === 'pdf-loan') { generateLoanPdf(id); return; }
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
  if (action === 'switch-asset-tab') {
    state.assetTab = element.dataset.tab || 'inventory';
    const invEl = $('#asset-tab-inventory-content');
    const loansEl = $('#asset-tab-loans-content');
    $$('.asset-tab-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.tab === state.assetTab);
    });
    if (invEl) invEl.classList.toggle('hidden', state.assetTab !== 'inventory');
    if (loansEl) loansEl.classList.toggle('hidden', state.assetTab !== 'loans');
    return;
  }
  if (action === 'view-asset-loans') {
    state.assetTab = 'loans';
    if (location.hash === '#/assets') {
      const invEl = $('#asset-tab-inventory-content');
      const loansEl = $('#asset-tab-loans-content');
      $$('.asset-tab-btn').forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.tab === 'loans');
      });
      if (invEl) invEl.classList.add('hidden');
      if (loansEl) loansEl.classList.remove('hidden');
      loadLoans(renderToken);
    } else {
      location.hash = '#/assets';
    }
    return;
  }
  if (action === 'new-loan') {
    return openLoanDialog(null, element.dataset.assetId || '');
  }
  if (action === 'edit-loan') {
    const loan = state.loanItems.find((l) => l.id === id);
    if (loan) openLoanDialog(loan);
    return;
  }
  if (action === 'return-loan') {
    const loan = state.loanItems.find((l) => l.id === id);
    if (loan) openReturnDialog(loan);
    return;
  }
  if (action === 'delete-loan') {
    if (!confirm('Hapus catatan peminjaman ini?')) return;
    try {
      await api(`/asset-loans/${id}`, { method: 'DELETE' });
      toast('Catatan peminjaman dihapus.');
      renderView(state.view);
    } catch (err) {
      toast(err.message, true);
    }
    return;
  }
  if (action === 'reset-loan-filter') {
    state.loanFilters = { status: 'all', q: '' };
    const statusSelect = $('#loan-status-filter');
    if (statusSelect) statusSelect.value = 'all';
    const qInput = $('#loan-q');
    if (qInput) qInput.value = '';
    return loadLoans(renderToken);
  }
  if (action === 'export-loans') {
    return downloadFile('/api/export/asset-loans.csv');
  }
  if (action === 'filter-asset-by-name') {
    state.assetFilters.q = element.dataset.name || '';
    state.assetFilters.category = '';
    if (location.hash === '#/assets') {
      const qInput = $('#asset-q');
      if (qInput) qInput.value = state.assetFilters.q;
      const catSelect = $('#asset-category-filter');
      if (catSelect) catSelect.value = '';
      loadAssets(renderToken);
    } else {
      location.hash = '#/assets';
    }
    return;
  }
  if (action === 'quick-filter-asset') {
    state.assetFilters.q = element.dataset.name || '';
    const qInput = $('#asset-q');
    if (qInput) qInput.value = state.assetFilters.q;
    const itemSel = $('#asset-item-filter');
    if (itemSel) itemSel.value = state.assetFilters.q;
    loadAssets(renderToken);
    return;
  }
  if (action === 'open-edit-icon') {
    return openAssetIconDialog(element.dataset.name, element.dataset.icon || '');
  }
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
  }  if (action === 'edit-tx') {
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

  $('#tx-type').addEventListener('change', () => {
    fillCategoryOptions();
  });

  const txCategoryInput = $('#tx-category');
  if (txCategoryInput) {
    txCategoryInput.addEventListener('focus', openTxCategoryMenu);
    txCategoryInput.addEventListener('click', openTxCategoryMenu);
    txCategoryInput.addEventListener('input', (event) => renderTxCategoryMenu(event.target.value));
    txCategoryInput.addEventListener('keydown', (event) => {
      const menu = $('#tx-category-menu');
      if (!menu || menu.hidden) {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          openTxCategoryMenu();
        }
        return;
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        closeTxCategoryMenu();
        return;
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const options = $$('.cat-select-option', menu);
        if (!options.length) return;
        const index = options.indexOf(document.activeElement);
        options[(index + 1) % options.length].focus();
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        const options = $$('.cat-select-option', menu);
        if (!options.length) return;
        const index = options.indexOf(document.activeElement);
        options[(index - 1 + options.length) % options.length].focus();
      }
    });
  }

  $('#tx-category-menu')?.addEventListener('click', (event) => {
    const option = event.target.closest('.cat-select-option');
    if (option) chooseTxCategory(option.dataset.cat);
  });

  $('#tx-category-menu')?.addEventListener('keydown', (event) => {
    const menu = $('#tx-category-menu');
    if (!menu) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeTxCategoryMenu();
      txCategoryInput?.focus();
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const options = $$('.cat-select-option', menu);
      if (!options.length) return;
      const step = event.key === 'ArrowDown' ? 1 : -1;
      const index = options.indexOf(document.activeElement);
      options[(index + step + options.length) % options.length].focus();
    }
  });

  $('#tx-category-select')?.addEventListener('click', (event) => {
    if (!event.target.closest('.cat-select-chevron')) return;
    txCategoryInput?.focus();
    openTxCategoryMenu();
  });

  $('#tx-dialog')?.addEventListener('close', closeTxCategoryMenu);

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
      icon: $('#asset-icon')?.value.trim() || '',
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

  $('#asset-icon-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = $('#save-icon-btn');
    const name = $('#edit-icon-target-name').value;
    const iconVal = $('#edit-icon-custom-input').value.trim();
    button.disabled = true;
    button.textContent = 'Menyimpan…';
    try {
      await api('/assets/icon', {
        method: 'POST',
        body: { name, icon: iconVal },
      });
      $('#asset-icon-dialog').close();
      toast(`Ikon untuk "${name}" berhasil diubah menjadi ${iconVal || 'default'}.`);
      renderView(state.view);
    } catch (err) {
      toast(err.message, true);
    } finally {
      button.disabled = false;
      button.textContent = 'Simpan Ikon';
    }
  });

  $('#btn-add-loan-item')?.addEventListener('click', () => {
    const assets = state.assetItems || [];
    const usedIds = new Set(loanDraftItems.map((i) => i.assetId));
    const nextAsset = assets.find((a) => !usedIds.has(a.id) && ((a.availableQty ?? a.quantity) > 0))
      || assets.find((a) => !usedIds.has(a.id))
      || assets[0];

    if (nextAsset) {
      loanDraftItems.push({ assetId: nextAsset.id, quantity: 1 });
      renderLoanItemRows();
    } else {
      toast('Tidak ada aset terdaftar yang dapat ditambahkan.', true);
    }
  });

  const loanItemsContainer = $('#loan-items-list-container');
  loanItemsContainer?.addEventListener('change', (e) => {
    const target = e.target;
    if (target.classList.contains('loan-item-asset-select')) {
      const idx = Number(target.dataset.index);
      if (loanDraftItems[idx]) {
        loanDraftItems[idx].assetId = target.value;
        renderLoanItemRows();
      }
    }
  });

  loanItemsContainer?.addEventListener('input', (e) => {
    const target = e.target;
    if (target.classList.contains('loan-item-qty-input')) {
      const idx = Number(target.dataset.index);
      if (loanDraftItems[idx]) {
        loanDraftItems[idx].quantity = Number(target.value) || 1;
        updateLoanSummary();
      }
    }
  });

  loanItemsContainer?.addEventListener('click', (e) => {
    const btn = e.target.closest('.loan-item-del-btn');
    if (!btn || btn.disabled) return;
    const idx = Number(btn.dataset.index);
    if (loanDraftItems.length > 1) {
      loanDraftItems.splice(idx, 1);
      renderLoanItemRows();
    }
  });

  $('#loan-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = $('#loan-save');
    const loan = state.editing.loan;

    // Collect and validate all items
    const rows = $$('.loan-item-row', $('#loan-items-list-container'));
    const items = [];
    for (const row of rows) {
      const select = row.querySelector('.loan-item-asset-select');
      const qtyInput = row.querySelector('.loan-item-qty-input');
      const assetId = select?.value;
      const quantity = Number(qtyInput?.value);
      if (!assetId) continue;
      if (!quantity || quantity < 1) {
        toast('Jumlah unit untuk setiap barang minimal 1', true);
        return;
      }
      items.push({ assetId, quantity });
    }

    if (!items.length) {
      toast('Pilih minimal 1 barang inventaris yang dipinjam', true);
      return;
    }

    const payload = {
      items,
      borrowerName: $('#loan-borrower-name').value.trim(),
      borrowerContact: $('#loan-borrower-contact').value.trim(),
      loanDate: $('#loan-date').value,
      expectedReturnDate: $('#loan-expected-return').value,
      purpose: $('#loan-purpose').value.trim(),
    };
    button.disabled = true;
    button.textContent = 'Menyimpan…';
    try {
      if (loan) await api(`/asset-loans/${loan.id}`, { method: 'PUT', body: payload });
      else await api('/asset-loans', { method: 'POST', body: payload });
      $('#asset-loan-dialog').close();
      state.editing.loan = null;
      toast(loan ? 'Data peminjaman diperbarui.' : 'Peminjaman berhasil dicatat.');
      renderView(state.view);
    } catch (err) {
      toast(err.message, true);
    } finally {
      button.disabled = false;
      button.textContent = 'Simpan Formulir Peminjaman';
    }
  });

  $('#return-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = $('#return-save');
    const loan = state.editing.returnLoan;
    if (!loan) return;
    const payload = {
      returnDate: $('#return-date').value,
      returnCondition: $('#return-condition').value,
      returnNote: $('#return-note').value.trim(),
    };
    button.disabled = true;
    button.textContent = 'Menyimpan…';
    try {
      await api(`/asset-loans/${loan.id}/return`, { method: 'POST', body: payload });
      $('#asset-return-dialog').close();
      state.editing.returnLoan = null;
      toast(`Barang "${loan.assetName}" (${loan.quantity} unit) berhasil dikembalikan ke tempat.`);
      renderView(state.view);
    } catch (err) {
      toast(err.message, true);
    } finally {
      button.disabled = false;
      button.textContent = 'Konfirmasi Pengembalian';
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
    if (!event.target.closest('#tx-category-select')) closeTxCategoryMenu();
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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const actionElement = event.target.closest('[data-action][tabindex="0"], [data-action][role="button"]');
      if (actionElement) {
        event.preventDefault();
        const action = actionElement.dataset.action;
        if (!action) return;
        Promise.resolve(handleAction(action, actionElement)).catch((err) => {
          toast(err.message, true);
        });
      }
    }
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
