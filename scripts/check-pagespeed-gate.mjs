#!/usr/bin/env node
import fs from "fs/promises";
import os from "os";
import path from "path";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

const DEFAULT_URL = "https://www.meinautoverkauf.de/";
const CATEGORY_THRESHOLDS = {
  performance: 96,
  accessibility: 100,
  "best-practices": 100,
  seo: 100,
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
  const outputPath = path.join(os.tmpdir(), `lighthouse-${runName}-${Date.now()}.json`);
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

  console.log(`PageSpeed gate URL: ${targetUrl}`);
  console.log(`Thresholds: ${JSON.stringify(CATEGORY_THRESHOLDS)}`);

  for (const run of RUNS) {
    const scores = await runLighthouse(targetUrl, run.name, run.extraArgs);
    console.log(`${run.name} scores: ${JSON.stringify(scores)}`);

    for (const [category, threshold] of Object.entries(CATEGORY_THRESHOLDS)) {
      if (scores[category] < threshold) {
        hasFailure = true;
        console.error(
          `${run.name} failed ${category}: score ${scores[category]} is below required ${threshold}`
        );
      }
    }
  }

  if (hasFailure) {
    process.exit(1);
  }

  console.log("PageSpeed gate passed.");
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
