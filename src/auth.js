import crypto from 'node:crypto';
import fs from 'node:fs';
import { DATA_DIR, SECRET_FILE, SESSION_MAX_AGE } from './config.js';

const COOKIE_NAME = 'kasrt_session';
const SCRYPT_KEYLEN = 64;
const MAX_ATTEMPTS = 10;
const WINDOW_MS = 15 * 60 * 1000;

let cachedSecret = null;

function getSecret() {
  if (cachedSecret) return cachedSecret;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (fs.existsSync(SECRET_FILE)) {
    cachedSecret = fs.readFileSync(SECRET_FILE);
  } else {
    cachedSecret = crypto.randomBytes(32);
    fs.writeFileSync(SECRET_FILE, cachedSecret, { mode: 0o600 });
  }
  return cachedSecret;
}

export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, SCRYPT_KEYLEN).toString('hex');
  return { salt, hash };
}

export function verifyPassword(password, salt, hash) {
  if (typeof password !== 'string' || typeof salt !== 'string' || typeof hash !== 'string') {
    return false;
  }
  try {
    const candidate = crypto.scryptSync(password, salt, SCRYPT_KEYLEN);
    const expected = Buffer.from(hash, 'hex');
    return candidate.length === expected.length && crypto.timingSafeEqual(candidate, expected);
  } catch {
    return false;
  }
}

export function ensureDefaultAdmin(db) {
  if (db.users.length > 0) return;
  const { salt, hash } = hashPassword('admin123');
  db.users.push({
    id: crypto.randomUUID(),
    username: 'admin',
    name: 'Administrator',
    role: 'admin',
    salt,
    hash,
    tokenVersion: 0,
    mustChangePassword: true,
    createdAt: new Date().toISOString(),
  });
}

export function ensureDefaultWarga(db) {
  if (db.users.some((u) => u.username === 'warga' || u.role === 'warga')) return;
  const { salt, hash } = hashPassword('warga123');
  db.users.push({
    id: crypto.randomUUID(),
    username: 'warga',
    name: 'Warga RT 07',
    role: 'warga',
    salt,
    hash,
    tokenVersion: 0,
    mustChangePassword: false,
    createdAt: new Date().toISOString(),
  });
}

function signSession(userId, tokenVersion) {
  const payload = Buffer.from(
    JSON.stringify({ uid: userId, tv: tokenVersion || 0, exp: Date.now() + SESSION_MAX_AGE * 1000 })
  ).toString('base64url');
  const sig = crypto.createHmac('sha256', getSecret()).update(payload).digest('base64url');
  return `${payload}.${sig}`;
}

function verifySession(token) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [payload, sig] = parts;
  const expected = crypto.createHmac('sha256', getSecret()).update(payload).digest('base64url');
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (!data.uid || !data.exp || data.exp < Date.now()) return null;
    return data;
  } catch {
    return null;
  }
}

export function parseCookies(header) {
  const cookies = {};
  if (!header) return cookies;
  for (const part of header.split(';')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (!key) continue;
    try {
      cookies[key] = decodeURIComponent(value);
    } catch {
      cookies[key] = value;
    }
  }
  return cookies;
}

export function getSessionUser(req, db) {
  const cookies = parseCookies(req.headers.cookie);
  const session = verifySession(cookies[COOKIE_NAME]);
  if (!session) return null;
  const user = db.users.find((u) => u.id === session.uid);
  if (!user) return null;
  if ((user.tokenVersion || 0) !== (session.tv || 0)) return null;
  return user;
}

export function createSessionCookie(user, secure) {
  const token = signSession(user.id, user.tokenVersion || 0);
  const flags = [
    `${COOKIE_NAME}=${token}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${SESSION_MAX_AGE}`,
  ];
  if (secure) flags.push('Secure');
  return flags.join('; ');
}

export function clearSessionCookie(secure) {
  const flags = [`${COOKIE_NAME}=`, 'Path=/', 'HttpOnly', 'SameSite=Lax', 'Max-Age=0'];
  if (secure) flags.push('Secure');
  return flags.join('; ');
}

const attempts = new Map();

export function checkRateLimit(ip) {
  const record = attempts.get(ip);
  if (!record) return true;
  if (record.resetAt <= Date.now()) {
    attempts.delete(ip);
    return true;
  }
  return record.count < MAX_ATTEMPTS;
}

export function recordFailure(ip) {
  const now = Date.now();
  const record = attempts.get(ip);
  if (!record || record.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else {
    record.count += 1;
  }
}

export function clearFailures(ip) {
  attempts.delete(ip);
}

export function publicUser(user) {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    role: user.role,
    mustChangePassword: Boolean(user.mustChangePassword),
    createdAt: user.createdAt,
  };
}
