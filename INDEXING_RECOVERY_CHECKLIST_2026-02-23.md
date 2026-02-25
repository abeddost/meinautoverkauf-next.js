# Google Indexing Recovery Checklist

Canonical property and source of truth:
- Domain: `https://www.meinautoverkauf.de`
- Sitemap: `https://www.meinautoverkauf.de/sitemap.xml`
- Date opened: February 23, 2026

## 1) Search Console actions (same day)

1. Confirm both properties exist:
- `sc-domain:meinautoverkauf.de` (Domain Property)
- `https://www.meinautoverkauf.de/` (URL-prefix)

2. Re-submit sitemap in Search Console:
- `https://www.meinautoverkauf.de/sitemap.xml`

3. URL Inspection -> Live Test -> Request indexing for:
- `https://www.meinautoverkauf.de/`
- `https://www.meinautoverkauf.de/auto-bewerten`
- `https://www.meinautoverkauf.de/auto-verkaufen`
- `https://www.meinautoverkauf.de/vorteile`
- `https://www.meinautoverkauf.de/ratgeber`
- `https://www.meinautoverkauf.de/autoankauf-frankfurt`
- `https://www.meinautoverkauf.de/autoankauf-wiesbaden`
- `https://www.meinautoverkauf.de/autoankauf-mainz`

4. In "Blocked by robots.txt" issue:
- Open issue
- Click "Validate fix"

## 2) Technical checks after deploy

1. Canonical host redirects:
- `http://meinautoverkauf.de/` -> `https://www.meinautoverkauf.de/`
- `https://meinautoverkauf.de/` -> `https://www.meinautoverkauf.de/`

2. Robots and sitemap:
- `https://www.meinautoverkauf.de/robots.txt` is reachable and references sitemap.
- `https://www.meinautoverkauf.de/sitemap.xml` is reachable.

3. Indexability:
- Indexable pages use `meta robots=index,follow`.
- Utility/admin/flow pages remain non-indexable by design.

## 3) Monitoring windows and targets

### Day 7 check
- Track these buckets:
  - Blocked by robots.txt
  - Discovered - currently not indexed
  - Crawled - currently not indexed
- Target: "Discovered" starts declining for core pages.

### Day 14 check
- Confirm indexing status of all 8 core URLs.
- Target: at least 4 indexed URLs.

### Day 28 check
- Re-check trend and sample URLs in each bucket.
- Target: 4-6+ indexed core URLs and no persistent robots issue on canonical pages.

## 4) Notes

- Legal pages (`/impressum`, `/datenschutz`) intentionally remain non-indexed.
- Temporary flow pages remain excluded:
  - `/bewertung-laeuft`
  - `/bewertung-ergebnis`
  - `/termin-buchen`
  - `/vielen-dank`
  - `/admin/*`
