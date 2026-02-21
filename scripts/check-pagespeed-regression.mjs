#!/usr/bin/env node
import fs from "fs/promises";
import os from "os";
import path from "path";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

const DEFAULT_URL = "https://www.meinautoverkauf.de/";
const TOLERANCE = Number(process.env.PAGESPEED_TOLERANCE ?? 1);

const BASELINE = {
  mobile: {
    performance: 91,
    accessibility: 100,
    "best-practices": 100,
    seo: 100,
  },
  desktop: {
    performance: 98,
    accessibility: 100,
    "best-practices": 100,
    seo: 100,
  },
};

const RUNS = [
  {
    name: "mobile",
    extraArgs: ["--emulated-form-factor=mobile"],
  },
  {
    name: "desktop",
    extraArgs: ["--preset=desktop"],
  },
];

const runLighthouse = async (url, runName, extraArgs) => {
  const outputPath = path.join(os.tmpdir(), `lighthouse-regression-${runName}-${Date.now()}.json`);
  const args = [
    url,
    "--only-categories=performance,accessibility,best-practices,seo",
    "--output=json",
    `--output-path=${outputPath}`,
    "--quiet",
    "--chrome-flags=--headless=new --no-sandbox",
    ...extraArgs,
  ];

  try {
    await execFileAsync("lighthouse", args);
  } catch (error) {
    const isMissingBinary = error && typeof error === "object" && error.code === "ENOENT";
    if (!isMissingBinary) {
      throw error;
    }

    await execFileAsync("npx", ["--yes", "lighthouse", ...args]);
  }

  const raw = await fs.readFile(outputPath, "utf8");
  const report = JSON.parse(raw);
  const categories = report.categories ?? {};

  return {
    performance: Math.round((categories.performance?.score ?? 0) * 100),
    accessibility: Math.round((categories.accessibility?.score ?? 0) * 100),
    "best-practices": Math.round((categories["best-practices"]?.score ?? 0) * 100),
    seo: Math.round((categories.seo?.score ?? 0) * 100),
  };
};

const main = async () => {
  const targetUrl = process.argv[2] ?? DEFAULT_URL;
  let hasFailure = false;

  console.log(`PageSpeed regression URL: ${targetUrl}`);
  console.log(`Tolerance: ${TOLERANCE}`);
  console.log(`Baseline: ${JSON.stringify(BASELINE)}`);

  for (const run of RUNS) {
    const scores = await runLighthouse(targetUrl, run.name, run.extraArgs);
    const baseline = BASELINE[run.name];
    console.log(`${run.name} scores: ${JSON.stringify(scores)}`);

    for (const [category, baselineScore] of Object.entries(baseline)) {
      const minAllowed = baselineScore - TOLERANCE;
      const current = scores[category];

      if (current < minAllowed) {
        hasFailure = true;
        console.error(
          `${run.name} failed ${category}: score ${current} is below allowed ${minAllowed} (baseline ${baselineScore}, tolerance ${TOLERANCE})`
        );
      }
    }
  }

  if (hasFailure) {
    process.exit(1);
  }

  console.log("PageSpeed regression gate passed.");
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
