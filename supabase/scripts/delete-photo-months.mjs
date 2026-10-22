// One-off: permanently delete car-photos in the given month folders (e.g. "2026/04-april") together
// with their estimation_photos rows, to free storage. The estimations themselves are kept.
//
// Usage (dry run by default):
//   SUPABASE_URL=https://<ref>.supabase.co SUPABASE_SERVICE_ROLE_KEY=... node supabase/scripts/delete-photo-months.mjs 2026/04-april 2026/05-may [--apply]
const BUCKET = "car-photos";
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const apply = process.argv.includes("--apply");
const months = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!url || !key) throw new Error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY");
if (months.length === 0 || months.some((m) => !/^\d{4}\/\d{2}-[a-z]+$/.test(m))) {
  throw new Error('Pass month folders like "2026/04-april"');
}

const headers = { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" };

async function api(path, init = {}) {
  const res = await fetch(`${url}${path}`, { ...init, headers: { ...headers, ...init.headers } });
  const text = await res.text();
  if (!res.ok) throw new Error(`${init.method ?? "GET"} ${path} -> ${res.status} ${text}`);
  return text ? JSON.parse(text) : null;
}

async function list(prefix) {
  const out = [];
  for (let offset = 0; ; offset += 1000) {
    const page = await api(`/storage/v1/object/list/${BUCKET}`, {
      method: "POST",
      body: JSON.stringify({ prefix, limit: 1000, offset, sortBy: { column: "name", order: "asc" } }),
    });
    out.push(...page);
    if (page.length < 1000) return out;
  }
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
let totalFiles = 0, totalBytes = 0, deletedFiles = 0, deletedRows = 0, failed = 0;

async function processFolder(folder) {
  const files = (await list(folder)).filter((f) => f.id !== null);
  const bytes = files.reduce((sum, f) => sum + (f.metadata?.size ?? 0), 0);
  totalFiles += files.length;
  totalBytes += bytes;
  if (!apply) return;
  try {
    const paths = files.map((f) => `${folder}/${f.name}`);
    for (let i = 0; i < paths.length; i += 1000) {
      const removed = await api(`/storage/v1/object/${BUCKET}`, {
        method: "DELETE",
        body: JSON.stringify({ prefixes: paths.slice(i, i + 1000) }),
      });
      deletedFiles += removed.length;
    }
    const rows = await api(`/rest/v1/estimation_photos?storage_path=like.${encodeURIComponent(folder + "/*")}`, {
      method: "DELETE",
      headers: { Prefer: "return=representation" },
    });
    deletedRows += rows.length;
  } catch (err) {
    failed++;
    console.error(`  FAILED ${folder}: ${err.message}`);
  }
}

for (const month of months) {
  const before = { files: totalFiles, bytes: totalBytes };
  const folders = (await list(month)).filter((e) => e.id === null).map((e) => `${month}/${e.name}`);
  const queue = [...folders];
  await Promise.all(Array.from({ length: 10 }, async () => {
    while (queue.length) await processFolder(queue.shift());
  }));
  console.log(`${month}: ${folders.length} leads, ${totalFiles - before.files} files, ${mb(totalBytes - before.bytes)}`);
}

console.log(`\nTotal: ${totalFiles} files, ${mb(totalBytes)}${apply ? "" : " (dry run, nothing deleted)"}`);
if (apply) console.log(`Deleted files=${deletedFiles} rows=${deletedRows} failed=${failed}`);
