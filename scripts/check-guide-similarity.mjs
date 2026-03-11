#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";

const THRESHOLD = Number(process.env.GUIDE_SIMILARITY_THRESHOLD ?? 0.72);
const TOP_LIMIT = Number(process.env.GUIDE_SIMILARITY_TOP ?? 10);

const tokenize = (text) =>
  (text.toLowerCase().match(/[\p{L}\p{N}][\p{L}\p{N}-]*/gu) ?? []).filter((word) => word.length >= 3);

const termFrequency = (text) => {
  const tf = new Map();
  for (const token of tokenize(text)) {
    tf.set(token, (tf.get(token) ?? 0) + 1);
  }
  return tf;
};

const cosine = (a, b) => {
  let dot = 0;
  let na = 0;
  let nb = 0;

  for (const value of a.values()) {
    na += value * value;
  }
  for (const value of b.values()) {
    nb += value * value;
  }
  for (const [key, value] of a) {
    if (b.has(key)) {
      dot += value * b.get(key);
    }
  }

  if (!na || !nb) {
    return 0;
  }
  return dot / Math.sqrt(na * nb);
};

const flattenGuide = (guide) =>
  [
    guide.h1,
    guide.intro,
    ...(guide.quickFacts ?? []),
    ...((guide.sections ?? []).flatMap((section) => [
      section.heading,
      ...(section.paragraphs ?? []),
      ...(section.bullets ?? []),
    ])),
    ...((guide.faqs ?? []).flatMap((faq) => [faq.q, faq.a])),
  ].join(" ");

const loadGuideContent = async () => {
  const assetsDir = path.resolve("dist/assets");
  let files = [];
  try {
    files = await fs.readdir(assetsDir);
  } catch {
    throw new Error("dist/assets not found. Run `npm run build` before `npm run check:guide-similarity`.");
  }

  const guideBundle = files.find((file) => file.startsWith("guideContent-") && file.endsWith(".js"));
  if (!guideBundle) {
    throw new Error("guideContent bundle not found in dist/assets. Run a fresh production build.");
  }

  const modulePath = pathToFileURL(path.join(assetsDir, guideBundle)).href;
  const mod = await import(modulePath);
  const guides = mod.G;

  if (!Array.isArray(guides) || guides.length === 0) {
    throw new Error("Could not load guide data from built bundle.");
  }

  return guides;
};

const main = async () => {
  const guides = await loadGuideContent();
  const vectors = guides.map((guide) => ({
    slug: guide.slug,
    vector: termFrequency(flattenGuide(guide)),
  }));

  const pairs = [];
  for (let i = 0; i < vectors.length; i += 1) {
    for (let j = i + 1; j < vectors.length; j += 1) {
      const score = cosine(vectors[i].vector, vectors[j].vector);
      pairs.push({
        a: vectors[i].slug,
        b: vectors[j].slug,
        score,
      });
    }
  }

  pairs.sort((left, right) => right.score - left.score);
  const topPairs = pairs.slice(0, TOP_LIMIT);
  const failing = pairs.filter((pair) => pair.score > THRESHOLD);

  console.log(`Guide similarity threshold: ${THRESHOLD}`);
  console.log(`Compared ${guides.length} guides (${pairs.length} pairs).`);
  console.log(`Top ${topPairs.length} most similar pairs:`);
  for (const pair of topPairs) {
    console.log(`  ${pair.a} <-> ${pair.b}: ${pair.score.toFixed(3)}`);
  }

  if (failing.length > 0) {
    console.error(`\nSimilarity gate failed: ${failing.length} pairs are above ${THRESHOLD}.`);
    process.exit(1);
  }

  console.log("\nSimilarity gate passed.");
};

main().catch((error) => {
  console.error(error.message ?? error);
  process.exit(1);
});
