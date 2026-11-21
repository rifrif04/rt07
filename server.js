import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { PUBLIC_DIR, PORT, HOST, RT_NAME, APP_NAME } from './src/config.js';
import { loadDb, saveDb } from './src/store.js';
import { ensureDefaultAdmin, getSessionUser } from './src/auth.js';
import { handleApi } from './src/api.js';

const db = loadDb();
ensureDefaultAdmin(db);
saveDb(db);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
};

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Content-Security-Policy':
    "default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; connect-src 'self'; manifest-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; object-src 'none'",
};

function isSecure(req) {
  if (req.socket.encrypted) return true;
  const proto = String(req.headers['x-forwarded-proto'] || '').split(',')[0].trim();
  return proto === 'https';
}

function sendText(res, status, message) {
  const body = `${message}\n`;
  res.writeHead(status, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    ...SECURITY_HEADERS,
  });
  res.end(body);
}

function serveStatic(req, res, url) {
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    return sendText(res, 400, 'Permintaan tidak valid');
  }

  if (pathname.endsWith('/')) pathname += 'index.html';
  const relative = pathname.replace(/^\/+/, '');
  const filePath = path.resolve(PUBLIC_DIR, relative);

  if (filePath !== PUBLIC_DIR && !filePath.startsWith(`${PUBLIC_DIR}${path.sep}`)) {
    return sendText(res, 403, 'Akses ditolak');
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) return sendText(res, 404, 'Halaman tidak ditemukan');
    const ext = path.extname(filePath).toLowerCase();
    const headers = {
      'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
      'Content-Length': stat.size,
      'Cache-Control': 'no-cache',
      ...SECURITY_HEADERS,
    };
    res.writeHead(200, headers);
    if (req.method === 'HEAD') return res.end();
    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      res.destroy();
    });
    stream.pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  const started = Date.now();
  let url = null;
  try {
    const host = req.headers.host || `localhost:${PORT}`;
    url = new URL(req.url, `http://${host}`);

    if (url.pathname.startsWith('/api/')) {
      for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
        res.setHeader(key, value);
      }
      const ip = req.socket.remoteAddress || 'unknown';
      const user = getSessionUser(req, db);
      await handleApi({
        req,
        res,
        url,
        db,
        user,
        save: () => saveDb(db),
        ip,
        secure: isSecure(req),
        rtName: RT_NAME,
        appName: APP_NAME,
      });
    } else if (req.method === 'GET' || req.method === 'HEAD') {
      serveStatic(req, res, url);
    } else {
      sendText(res, 405, 'Metode tidak diizinkan');
    }
  } catch (err) {
    console.error(err);
    if (!res.headersSent) sendText(res, 500, 'Terjadi kesalahan pada server');
    else res.destroy();
  } finally {
    if (process.env.LOG_REQUESTS && url && url.pathname.startsWith('/api/')) {
      console.log(`${req.method} ${url.pathname} ${res.statusCode} ${Date.now() - started}ms`);
    }
  }
});

server.on('clientError', (err, socket) => {
  if (socket.writable) socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(PORT, HOST, () => {
  console.log(`\n  ${APP_NAME}`);
  console.log(`  Server berjalan di http://localhost:${PORT}`);
  for (const entries of Object.values(os.networkInterfaces())) {
    for (const entry of entries || []) {
      if (entry.family === 'IPv4' && !entry.internal) {
        console.log(`  Jaringan lokal: http://${entry.address}:${PORT}`);
      }
    }
  }
  console.log('  Login awal: admin / admin123 (segera ganti password)\n');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} sudah digunakan. Jalankan dengan PORT lain, misalnya: PORT=3001 npm start`);
  } else {
    console.error(err);
  }
  process.exit(1);
});
