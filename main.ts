// news-summary-01 entry: copies the summary the repository holds to /output/entry.txt.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
try { mkdirSync(dir, { recursive: true }); } catch {}
copyFileSync(new URL('./summary.txt', import.meta.url), join(dir, 'entry.txt'));
