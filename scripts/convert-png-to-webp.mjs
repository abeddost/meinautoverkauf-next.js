#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const DEFAULT_QUALITY = 80;
const DEFAULT_ASSETS_SOURCE_DIR = "assets-source";
const EXCLUDED_DIRS = new Set(["node_modules", "dist", ".git", DEFAULT_ASSETS_SOURCE_DIR]);
const TEXT_FILE_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".html",
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".json",
  ".md",
  ".txt",
  ".xml",
  ".yml",
  ".yaml",
  ".svg",
]);

function parseArgs(argv) {
  const options = {
    quality: DEFAULT_QUALITY,
    dryRun: false,
    assetsSourceDir: DEFAULT_ASSETS_SOURCE_DIR,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }
    if (arg === "--quality") {
      const value = Number(argv[i + 1]);
      if (!Number.isFinite(value) || value < 1 || value > 100) {
        throw new Error("Invalid --quality value. Use an integer between 1 and 100.");
      }
      options.quality = Math.round(value);
      i += 1;
      continue;
    }
    if (arg === "--assets-source-dir") {
      const value = argv[i + 1];
      if (!value) throw new Error("Missing value for --assets-source-dir.");
      options.assetsSourceDir = value;
      i += 1;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function toPosix(relativePath) {
  return relativePath.split(path.sep).join("/");
}

async function collectFiles(rootDir, filterFn, excludedDirs) {
  const results = [];

  async function walk(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (excludedDirs.has(entry.name)) continue;
        await walk(fullPath);
        continue;
      }
      if (entry.isFile() && filterFn(fullPath)) {
        results.push(fullPath);
      }
    }
  }

  await walk(rootDir);
  return results;
}

function buildReplacementPairs(relativePngPath) {
  const replacements = [];
  const relativeWebpPath = relativePngPath.replace(/\.png$/i, ".webp");
  const relPngPosix = toPosix(relativePngPath);
  const relWebpPosix = toPosix(relativeWebpPath);

  replacements.push([relPngPosix, relWebpPosix]);
  replacements.push([encodeURI(relPngPosix), encodeURI(relWebpPosix)]);

  if (relPngPosix.startsWith("public/")) {
    const publicPathPng = relPngPosix.slice("public/".length);
    const publicPathWebp = relWebpPosix.slice("public/".length);
    const urlPng = `/${publicPathPng}`;
    const urlWebp = `/${publicPathWebp}`;
    replacements.push([urlPng, urlWebp]);
    replacements.push([encodeURI(urlPng), encodeURI(urlWebp)]);
    replacements.push(
      [`https://meinautoverkauf.de/${publicPathPng}`, `https://meinautoverkauf.de/${publicPathWebp}`]
    );
    replacements.push([
      `https://meinautoverkauf.de/${encodeURI(publicPathPng)}`,
      `https://meinautoverkauf.de/${encodeURI(publicPathWebp)}`,
    ]);
  }

  return replacements;
}

async function ensureParentDir(filePath, dryRun) {
  const parentDir = path.dirname(filePath);
  if (dryRun) return;
  await fs.mkdir(parentDir, { recursive: true });
}

async function moveFileSafely(sourcePath, targetPath, dryRun) {
  let candidate = targetPath;
  let counter = 1;

  while (true) {
    try {
      await fs.access(candidate);
      const ext = path.extname(targetPath);
      const base = path.basename(targetPath, ext);
      const dir = path.dirname(targetPath);
      candidate = path.join(dir, `${base}__${counter}${ext}`);
      counter += 1;
    } catch {
      break;
    }
  }

  if (dryRun) return candidate;
  await ensureParentDir(candidate, dryRun);
  await fs.rename(sourcePath, candidate);
  return candidate;
}

async function replaceReferencesInFile(filePath, replacements) {
  const original = await fs.readFile(filePath, "utf8");
  let next = original;
  for (const [from, to] of replacements) {
    if (!from || from === to) continue;
    next = next.split(from).join(to);
  }
  if (next !== original) {
    await fs.writeFile(filePath, next, "utf8");
    return true;
  }
  return false;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const rootDir = process.cwd();
  const excludedDirs = new Set([...EXCLUDED_DIRS, options.assetsSourceDir]);

  const pngFiles = await collectFiles(
    rootDir,
    (fullPath) => fullPath.toLowerCase().endsWith(".png"),
    excludedDirs
  );

  if (pngFiles.length === 0) {
    console.log("No PNG files found.");
    return;
  }

  const replacementSet = new Map();
  let convertedCount = 0;
  let movedCount = 0;

  for (const pngPath of pngFiles) {
    const webpPath = pngPath.replace(/\.png$/i, ".webp");
    const relativePngPath = path.relative(rootDir, pngPath);

    if (options.dryRun) {
      console.log(`[dry-run] convert ${relativePngPath} -> ${path.relative(rootDir, webpPath)}`);
    } else {
      await sharp(pngPath).webp({ quality: options.quality }).toFile(webpPath);
      convertedCount += 1;
    }

    const pairs = buildReplacementPairs(relativePngPath);
    for (const [from, to] of pairs) {
      replacementSet.set(from, to);
    }

    const targetPngPath = path.join(rootDir, options.assetsSourceDir, relativePngPath);
    const movedTarget = await moveFileSafely(pngPath, targetPngPath, options.dryRun);
    if (options.dryRun) {
      console.log(`[dry-run] move    ${relativePngPath} -> ${path.relative(rootDir, movedTarget)}`);
    } else {
      movedCount += 1;
    }
  }

  const replacementPairs = [...replacementSet.entries()].sort((a, b) => b[0].length - a[0].length);
  const textFiles = await collectFiles(
    rootDir,
    (fullPath) => TEXT_FILE_EXTENSIONS.has(path.extname(fullPath).toLowerCase()),
    excludedDirs
  );

  let updatedFiles = 0;
  if (!options.dryRun) {
    for (const textFile of textFiles) {
      const changed = await replaceReferencesInFile(textFile, replacementPairs);
      if (changed) updatedFiles += 1;
    }
  }

  const mode = options.dryRun ? "dry-run" : "done";
  console.log(`\n[${mode}] PNG files found: ${pngFiles.length}`);
  if (!options.dryRun) {
    console.log(`[${mode}] Converted to WebP: ${convertedCount}`);
    console.log(`[${mode}] Original PNG moved: ${movedCount}`);
    console.log(`[${mode}] Text files updated: ${updatedFiles}`);
    console.log(`[${mode}] Originals archived in: ${options.assetsSourceDir}/`);
  }
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});

