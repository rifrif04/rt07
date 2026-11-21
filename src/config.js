import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const DATA_DIR = path.join(ROOT, 'data');
export const PUBLIC_DIR = path.join(ROOT, 'public');
export const DB_FILE = path.join(DATA_DIR, 'db.json');
export const SECRET_FILE = path.join(DATA_DIR, 'secret.key');

export const RT_NAME = process.env.RT_NAME || 'RT 07';
export const APP_NAME = process.env.APP_NAME || 'RT 07 Aplikasi Gank';
export const PORT = Number(process.env.PORT) || 3000;
export const HOST = process.env.HOST || '0.0.0.0';
export const SESSION_MAX_AGE = 7 * 24 * 60 * 60;
