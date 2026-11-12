import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const sourcePath = 'summary.txt';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destinationPath = join(outputDir, 'entry.txt');

const content = readFileSync(sourcePath, 'utf8');

const characterCount = content.length;
if (characterCount < 1 || characterCount > 2000) {
  console.error(`summary.txt must be 1..2000 characters, but is ${characterCount}`);
  process.exit(1);
}

const byteCount = Buffer.byteLength(content, 'utf8');

if (byteCount > 1800) {
  console.warn(`Warning: summary.txt is ${byteCount} bytes, exceeding 1800 bytes`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, destinationPath);

console.log(`Copied ${byteCount} bytes to ${destinationPath}`);
