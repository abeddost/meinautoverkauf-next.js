import { spawn } from 'node:child_process';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const PORT = Number(process.env.LH_PORT || 4173);
const BASE_URL = process.env.LH_BASE_URL || `http://localhost:${PORT}`;
const OUTPUT_DIR = path.resolve(process.cwd(), '.lighthouse');
const CATEGORIES = ['performance', 'accessibility', 'best-practices', 'seo'];
const PATHS = ['/', '/auto-bewerten'];
const MODES = [
  { id: 'mobile', args: ['--form-factor=mobile', '--throttling-method=simulate'] },
  { id: 'desktop', args: ['--preset=desktop', '--throttling-method=simulate'] },
];

const THRESHOLDS = {
  mobile: {
    performance: 95,
    accessibility: 98,
    'best-practices': 98,
    seo: 98,
  },
  desktop: {
    performance: 99,
    accessibility: 98,
    'best-practices': 98,
    seo: 98,
  },
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const runCommand = (command, args, options = {}) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: options.silent ? 'pipe' : 'inherit',
      shell: false,
      ...options,
    });

    let stderr = '';
    if (options.silent && child.stderr) {
      child.stderr.on('data', (chunk) => {
        stderr += chunk.toString();
      });
    }

    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`${command} ${args.join(' ')} failed with code ${code}\n${stderr}`));
    });
  });

async function waitForServer(url, timeoutMs = 60_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url, { method: 'GET' });
      if (response.ok) return;
    } catch {}
    await wait(1_000);
  }
  throw new Error(`Server did not become ready within ${timeoutMs / 1000}s at ${url}`);
}

const formatScore = (value) => `${Math.round((value ?? 0) * 100)}`;

async function run() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const server = spawn('npm', ['run', 'start'], {
    env: { ...process.env, PORT: String(PORT) },
    stdio: 'inherit',
    shell: false,
  });

  const stopServer = () => {
    if (!server.killed) {
      server.kill('SIGTERM');
    }
  };

  process.on('SIGINT', () => {
    stopServer();
    process.exit(130);
  });
  process.on('SIGTERM', () => {
    stopServer();
    process.exit(143);
  });

  try {
    await waitForServer(BASE_URL);
    const rows = [];

    for (const mode of MODES) {
      for (const pagePath of PATHS) {
        const slug = pagePath === '/' ? 'home' : pagePath.replace(/[\/]/g, '-').replace(/^-+/, '');
        const reportPath = path.join(OUTPUT_DIR, `${mode.id}-${slug}.json`);
        const targetUrl = `${BASE_URL}${pagePath}`;

        await runCommand(
          'npx',
          [
            '-y',
            'lighthouse',
            targetUrl,
            '--quiet',
            '--output=json',
            `--output-path=${reportPath}`,
            `--only-categories=${CATEGORIES.join(',')}`,
            '--chrome-flags=--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage',
            ...mode.args,
          ],
          { silent: true },
        );

        const reportJson = JSON.parse(await readFile(reportPath, 'utf8'));
        const categoryScores = Object.fromEntries(
          CATEGORIES.map((category) => [category, Math.round((reportJson.categories?.[category]?.score ?? 0) * 100)]),
        );

        rows.push({
          mode: mode.id,
          path: pagePath,
          ...categoryScores,
        });
      }
    }

    console.log('\nLighthouse summary (scores):');
    console.table(rows);

    const failures = [];
    for (const row of rows) {
      const threshold = THRESHOLDS[row.mode];
      for (const category of CATEGORIES) {
        if (row[category] < threshold[category]) {
          failures.push(
            `${row.mode} ${row.path} ${category}: ${row[category]} < ${threshold[category]}`,
          );
        }
      }
    }

    if (failures.length > 0) {
      console.error('\nThreshold failures:');
      failures.forEach((failure) => console.error(`- ${failure}`));
      process.exitCode = 1;
      return;
    }

    console.log('\nAll Lighthouse thresholds passed.');
  } finally {
    stopServer();
  }
}

run().catch((error) => {
  console.error('\nLighthouse audit failed:', error.message);
  process.exit(1);
});
