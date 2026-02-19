#!/usr/bin/env node
/**
 * Generate responsive WebP variants for PageSpeed. Run from project root.
 * Usage: node scripts/generate-responsive-images.mjs [--dry-run]
 */
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const QUALITY = 80;

/** @type {{ relPath: string; widths: number[] }[]} */
const CONFIG = [
  // elements: max-w 460px / 651px → 480w, 920w
  { relPath: "elements/autoankauf-neu-gedacht.webp", widths: [480, 920] },
  { relPath: "elements/auto-verkaufen-online-vorteile-auf-einen-blick.webp", widths: [480, 920] },
  { relPath: "elements/auto-verkaufen-mit-motorschaden.webp", widths: [480, 920] },
  { relPath: "elements/car-valuation.webp", widths: [480, 920] },
  // 3-steps: displayed ~504×336
  { relPath: "3-steps/fahrzeugdaten-online-eingeben.webp", widths: [512, 1024] },
  { relPath: "3-steps/preis-erhalten.webp", widths: [512, 1024] },
  { relPath: "3-steps/abgabe-termin-buchen-geld-erhalten.webp", widths: [512, 1024] },
  // form-elements: 70×70 displayed → 140w for 2x
  { relPath: "form-elements/details.webp", widths: [140] },
  { relPath: "form-elements/zustand.webp", widths: [140] },
  { relPath: "form-elements/technik.webp", widths: [140] },
  { relPath: "form-elements/fahrzeug.webp", widths: [140] },
  // logo: ~430×140
  { relPath: "logo.webp", widths: [430, 860] },
  // bmw: 640w for mobile (480w already exists as bmw-mobile.webp)
  { relPath: "bmw.webp", widths: [640] },
];

async function generateVariants() {
  const dryRun = process.argv.includes("--dry-run");
  if (dryRun) console.log("[dry-run] Generating responsive image variants...\n");

  for (const { relPath, widths } of CONFIG) {
    const srcPath = path.join(PUBLIC_DIR, relPath);
    try {
      await fs.access(srcPath);
    } catch {
      console.warn(`Skip (missing): ${relPath}`);
      continue;
    }

    const dir = path.dirname(relPath);
    const ext = path.extname(relPath);
    const base = path.basename(relPath, ext);

    for (const w of widths) {
      const outName = `${base}-${w}w${ext}`;
      const outPath = path.join(PUBLIC_DIR, dir, outName);
      const relOut = path.join(dir, outName).split(path.sep).join("/");

      if (dryRun) {
        console.log(`  ${relPath} → ${relOut} (${w}w)`);
        continue;
      }

      await sharp(srcPath)
        .resize(w, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath);
      console.log(`  ${relPath} → ${relOut}`);
    }
  }

  if (!dryRun) console.log("\nDone.");
}

generateVariants().catch((err) => {
  console.error(err);
  process.exit(1);
});
