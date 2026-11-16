import { copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(output, 'entry.jpg');

// Copy the fixed artwork unchanged into the judge's output directory.
await copyFile('./entry.jpg', destination);
