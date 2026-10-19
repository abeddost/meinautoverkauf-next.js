// One-off: move car-photos from "<estimationId>/<file>" at the bucket root into
// "<YYYY>/<MM-month>/<estimationId>/<file>" and update estimation_photos.storage_path.
//
// Usage (dry run by default):
//   SUPABASE_URL=https://<ref>.supabase.co SUPABASE_SERVICE_ROLE_KEY=... node --experimental-strip-types supabase/scripts/move-photos-to-month-folders.mjs [--apply] [--delete-orphans]
//
// Folders whose estimation no longer exists (and that no estimation_photos row references) are
// left in place, or permanently deleted with --delete-orphans.
// Safe to re-run: folders already under a year folder and the pending/ folder are skipped.
import { photoStoragePath } from "../functions/_shared/photoPath.ts";

const BUCKET = "car-photos";
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const apply = process.argv.includes("--apply");
const deleteOrphans = process.argv.includes("--delete-orphans");
if (!url || !key) throw new Error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY");

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

const rootFolders = (await list(""))
  .filter((e) => e.id === null && e.name !== "pending" && !/^\d{4}$/.test(e.name))
  .map((e) => e.name);
console.log(`${rootFolders.length} root folders to process${apply ? "" : " (dry run)"}`);

const createdAt = new Map();
const uuids = rootFolders.filter((n) => /^[0-9a-f-]{36}$/i.test(n));
for (let i = 0; i < uuids.length; i += 100) {
  const rows = await api(`/rest/v1/estimations?select=id,created_at&id=in.(${uuids.slice(i, i + 100).join(",")})`);
  for (const r of rows) createdAt.set(r.id, r.created_at);
}

let moved = 0, failed = 0, orphanFiles = 0, deleted = 0;
for (const folder of rootFolders) {
  const leadDate = createdAt.get(folder);
  const files = await list(folder);
  if (!leadDate) {
    const refs = await api(`/rest/v1/estimation_photos?select=id&storage_path=like.${encodeURIComponent(folder + "/*")}`);
    if (refs.length > 0) {
      console.warn(`  skip ${folder}: no estimation row but ${refs.length} estimation_photos rows reference it`);
      continue;
    }
    const paths = files.filter((f) => f.id !== null).map((f) => `${folder}/${f.name}`);
    orphanFiles += paths.length;
    console.log(`orphan ${folder} (${paths.length} files)${deleteOrphans ? " -> delete" : " -> leave"}`);
    if (apply && deleteOrphans && paths.length > 0) {
      try {
        await api(`/storage/v1/object/${BUCKET}`, { method: "DELETE", body: JSON.stringify({ prefixes: paths }) });
        deleted += paths.length;
      } catch (err) {
        failed++;
        console.error(`  FAILED: ${err.message}`);
      }
    }
    continue;
  }
  for (const file of files) {
    if (file.id === null) {
      console.warn(`  skip nested folder ${folder}/${file.name}`);
      continue;
    }
    const from = `${folder}/${file.name}`;
    const to = photoStoragePath(folder, file.name, leadDate);
    console.log(`${from} -> ${to}`);
    if (!apply) continue;
    try {
      await api(`/storage/v1/object/move`, {
        method: "POST",
        body: JSON.stringify({ bucketId: BUCKET, sourceKey: from, destinationKey: to }),
      });
      await api(`/rest/v1/estimation_photos?storage_path=eq.${encodeURIComponent(from)}`, {
        method: "PATCH",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({ storage_path: to }),
      });
      moved++;
    } catch (err) {
      failed++;
      console.error(`  FAILED: ${err.message}`);
    }
  }
}
console.log(`\nDone. moved=${moved} deleted=${deleted} failed=${failed} orphanFiles=${orphanFiles}`);
