#!/usr/bin/env node
import { rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const targets = [
  '.next/cache',
  '.next/server/chunks',
  '.next/server/vendor-chunks',
  '.next/trace',
  '.next',
];

for (const relativeTarget of targets) {
  const absoluteTarget = path.join(rootDir, relativeTarget);
  await rm(absoluteTarget, { recursive: true, force: true });
  console.log(`[clean:dev] removed ${relativeTarget}`);
}

console.log('[clean:dev] Next.js dev cache cleanup completed.');
