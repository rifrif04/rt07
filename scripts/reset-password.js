import { loadDb, saveDb } from '../src/store.js';
import { hashPassword } from '../src/auth.js';

const [, , username, password] = process.argv;

if (!username || !password) {
  console.log('Cara pakai: npm run reset-password -- <username> <password-baru>');
  console.log('Contoh:     npm run reset-password -- admin rahasia123');
  process.exit(1);
}

if (password.length < 6) {
  console.error('Password baru minimal 6 karakter.');
  process.exit(1);
}

const db = loadDb();
const user = db.users.find((item) => item.username.toLowerCase() === username.toLowerCase());

if (!user) {
  console.error(`Pengguna "${username}" tidak ditemukan.`);
  const list = db.users.map((item) => item.username).join(', ');
  if (list) console.error(`Username tersedia: ${list}`);
  process.exit(1);
}

const { salt, hash } = hashPassword(password);
user.salt = salt;
user.hash = hash;
user.mustChangePassword = true;
user.tokenVersion = (user.tokenVersion || 0) + 1;
saveDb(db);

console.log(`Password untuk "${user.username}" berhasil direset.`);
console.log('Semua sesi lama pengguna tersebut otomatis tidak berlaku.');
console.log('Hentikan server sebelum menjalankan skrip ini, lalu jalankan ulang server.');
