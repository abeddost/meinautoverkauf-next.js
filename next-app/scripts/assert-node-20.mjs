#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const requiredVersionRaw = readFileSync(path.join(projectRoot, '.nvmrc'), 'utf8').trim();
const requiredMajor = Number.parseInt(requiredVersionRaw, 10);
const currentVersion = process.versions.node;
const currentMajor = Number.parseInt(currentVersion.split('.')[0] ?? '', 10);

if (!Number.isInteger(requiredMajor)) {
  console.error(`[node-check] Invalid .nvmrc value: "${requiredVersionRaw}"`);
  process.exit(1);
}

if (currentMajor !== requiredMajor) {
  console.error(`[node-check] Unsupported Node.js ${currentVersion}. Required major: ${requiredMajor}.x`);
  console.error('[node-check] Run `nvm use` (or install Node 20) and retry.');
  process.exit(1);
}

console.log(`[node-check] Node.js ${currentVersion} OK (required ${requiredMajor}.x).`);
