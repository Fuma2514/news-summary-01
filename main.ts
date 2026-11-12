/**
 * Entry point: copies summary.txt (next to this file) into
 * MAKEFUN_OUTPUT_DIR (default `/output`) as entry.txt, creating the
 * directory if needed, and logs the number of bytes copied.
 */
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(dir, 'entry.txt');
const src = new URL('./summary.txt', import.meta.url);

try {
  mkdirSync(dir, { recursive: true });
} catch {
  // Directory already exists.
}

copyFileSync(src, dest);
console.log(`Copied ${Buffer.byteLength(readFileSync(dest, 'utf8'))} bytes to ${dest}`);
