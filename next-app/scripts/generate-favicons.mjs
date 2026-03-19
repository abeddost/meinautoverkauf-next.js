import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import pngToIco from "png-to-ico";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const sourcePath = path.join(publicDir, "favicon-without-border.png");

const PNG_OPTIONS = {
  compressionLevel: 9,
  palette: true,
  quality: 85,
  effort: 10,
};

const SMALL_PADDING = 0.02;
const STANDARD_PADDING = 0.06;
const MASKABLE_PADDING = 0.1;

const standardOutputs = [
  { name: "favicon-48x48.png", size: 48, paddingRatio: SMALL_PADDING },
  { name: "favicon-96x96.png", size: 96, paddingRatio: SMALL_PADDING },
  { name: "favicon-192x192.png", size: 192 },
  { name: "favicon-512x512.png", size: 512 },
  { name: "apple-touch-icon.png", size: 180 },
];

const maskableOutputs = [
  { name: "favicon-maskable-192x192.png", size: 192 },
  { name: "favicon-maskable-512x512.png", size: 512 },
];

function toInnerSize(size, paddingRatio) {
  return Math.max(1, Math.round(size * (1 - paddingRatio * 2)));
}

async function readTrimmedSource(inputPath) {
  await fs.access(inputPath);
  return sharp(inputPath)
    .trim()
    .png(PNG_OPTIONS)
    .toBuffer();
}

async function createPngIcon({ sourceBuffer, size, paddingRatio, outputPath }) {
  const innerSize = toInnerSize(size, paddingRatio);
  const logoBuffer = await sharp(sourceBuffer)
    .resize({
      width: innerSize,
      height: innerSize,
      fit: "inside",
      withoutEnlargement: false,
    })
    .png(PNG_OPTIONS)
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: logoBuffer, gravity: "center" }])
    .png(PNG_OPTIONS)
    .toFile(outputPath);
}

async function createIco({ sourceBuffer, outputPath }) {
  const icoSizes = [16, 32, 48];
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "favicon-ico-"));

  try {
    const layerPaths = [];
    for (const size of icoSizes) {
      const layerPath = path.join(tempDir, `favicon-${size}.png`);
      await createPngIcon({
        sourceBuffer,
        size,
        paddingRatio: SMALL_PADDING,
        outputPath: layerPath,
      });
      layerPaths.push(layerPath);
    }

    const icoBuffer = await pngToIco(layerPaths);
    await fs.writeFile(outputPath, icoBuffer);
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

async function createWebp({ sourceBuffer, outputPath }) {
  await sharp(sourceBuffer)
    .resize({
      width: 500,
      height: 500,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      withoutEnlargement: false,
    })
    .webp({ quality: 82, alphaQuality: 90, effort: 6 })
    .toFile(outputPath);
}

async function logFileSize(filePath) {
  const stat = await fs.stat(filePath);
  const relativePath = path.relative(rootDir, filePath);
  console.log(`${relativePath} (${stat.size} bytes)`);
}

async function main() {
  const trimmedSource = await readTrimmedSource(sourcePath);
  console.log(`Source: ${path.relative(rootDir, sourcePath)}`);

  for (const output of standardOutputs) {
    const outputPath = path.join(publicDir, output.name);
    await createPngIcon({
      sourceBuffer: trimmedSource,
      size: output.size,
      paddingRatio: output.paddingRatio ?? STANDARD_PADDING,
      outputPath,
    });
    await logFileSize(outputPath);
  }

  for (const output of maskableOutputs) {
    const outputPath = path.join(publicDir, output.name);
    await createPngIcon({
      sourceBuffer: trimmedSource,
      size: output.size,
      paddingRatio: MASKABLE_PADDING,
      outputPath,
    });
    await logFileSize(outputPath);
  }

  const icoPath = path.join(publicDir, "favicon.ico");
  await createIco({ sourceBuffer: trimmedSource, outputPath: icoPath });
  await logFileSize(icoPath);

  const webpPath = path.join(publicDir, "favicon.webp");
  await createWebp({ sourceBuffer: trimmedSource, outputPath: webpPath });
  await logFileSize(webpPath);
}

main().catch((error) => {
  console.error("Failed to generate favicons:", error);
  process.exitCode = 1;
});
