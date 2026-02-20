#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;
const OUTPUT_RELATIVE_PATH = "public/og-image.webp";
const CAR_RELATIVE_PATH = "public/bmw.webp";
const LOGO_RELATIVE_PATH = "public/logo.webp";

const buildBackgroundSvg = () => `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f5f9ff"/>
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ffe8d5"/>
    </linearGradient>
    <radialGradient id="glowOrange" cx="0.85" cy="0.2" r="0.65">
      <stop offset="0%" stop-color="#ffb483" stop-opacity="0.60"/>
      <stop offset="100%" stop-color="#ffb483" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowBlue" cx="0.15" cy="0.85" r="0.60">
      <stop offset="0%" stop-color="#b6d3ff" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#b6d3ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#glowOrange)"/>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#glowBlue)"/>
  <circle cx="1080" cy="110" r="130" fill="#ffd8bd" opacity="0.35"/>
  <circle cx="120" cy="520" r="180" fill="#d9e9ff" opacity="0.35"/>
  <rect x="70" y="390" width="540" height="180" rx="28" fill="#ffffff" fill-opacity="0.78"/>
</svg>
`;

const buildTextSvg = () => `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .headline { font: 800 56px "Arial", "Helvetica", sans-serif; fill: #0f172a; }
    .subline { font: 600 33px "Arial", "Helvetica", sans-serif; fill: #334155; }
    .brand { font: 700 22px "Arial", "Helvetica", sans-serif; fill: #c2410c; letter-spacing: 0.08em; text-transform: uppercase; }
  </style>
  <text class="headline" x="92" y="250">Auto verkaufen?</text>
  <text class="headline" x="92" y="320">Schnell &amp; unkompliziert.</text>
  <text class="subline" x="92" y="446">Kostenlose Online-Bewertung &amp;</text>
  <text class="subline" x="92" y="492">Verkaufspreis online erhalten</text>
  <text class="brand" x="92" y="552">MEINAUTOVERKAUF.DE</text>
</svg>
`;

async function main() {
  const root = process.cwd();
  const outputPath = path.join(root, OUTPUT_RELATIVE_PATH);
  const carPath = path.join(root, CAR_RELATIVE_PATH);
  const logoPath = path.join(root, LOGO_RELATIVE_PATH);

  const [carBuffer, logoBuffer] = await Promise.all([
    sharp(carPath)
      .resize({ width: 650, fit: "contain", withoutEnlargement: true })
      .webp({ quality: 92 })
      .toBuffer(),
    sharp(logoPath)
      .resize({ width: 260, fit: "contain", withoutEnlargement: true })
      .png()
      .toBuffer(),
  ]);

  const image = await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: "#ffffff",
    },
  })
    .composite([
      { input: Buffer.from(buildBackgroundSvg()) },
      { input: carBuffer, left: 520, top: 210 },
      { input: logoBuffer, left: 90, top: 70 },
      { input: Buffer.from(buildTextSvg()) },
    ])
    .webp({ quality: 82, effort: 6 })
    .toBuffer();

  await fs.writeFile(outputPath, image);

  const metadata = await sharp(image).metadata();
  const sizeKb = (image.length / 1024).toFixed(1);
  console.log(`Generated ${OUTPUT_RELATIVE_PATH} (${metadata.width}x${metadata.height}, ${sizeKb} KB)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
