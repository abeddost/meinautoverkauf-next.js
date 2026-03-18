# Deployment Checklist - Next.js Migration

## Environment Variables (set in Vercel dashboard)

### Required

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `GEMINI_API_KEY` | Google Gemini API key (server-only, never public) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, e.g. `https://www.meinautoverkauf.de` |

### Recommended

| Variable | Description |
|---|---|
| `GA4_API_SECRET` | GA4 Measurement Protocol API secret for server-side valuation events |

### Optional

| Variable | Description |
|---|---|
| `GA4_MEASUREMENT_ID` | Server-side GA4 Measurement ID override (fallback exists in code) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Only needed if you intentionally re-enable direct browser GA script loading |
| `API_KEY` | Fallback alias for `GEMINI_API_KEY` |

## Analytics Strategy (Parity with Vite)

- Browser tracking remains **GTM-driven** (same flow as Vite).
- Google Ads conversions stay configured in GTM (for example `AW-17751494498` + conversion label).
- Do not mix GTM tracking with direct browser `gtag` script loading unless intentionally testing a hybrid setup.

## Pre-launch Steps

### 1. Supabase - Allowed Origins
In Supabase dashboard -> **Authentication -> URL Configuration**, add:
- `https://your-vercel-preview-url.vercel.app` (preview)
- `https://www.meinautoverkauf.de` (production)

### 2. Supabase - Storage CORS
In **Storage -> Settings -> CORS**, add the same preview and production origins.

### 3. URL Checklist

Verify each URL returns `200` (or expected redirect):

- `/`
- `/auto-bewerten`
- `/auto-verkaufen`
- `/vorteile`
- `/standorte`
- `/ratgeber`
- `/ratgeber/[slug]`
- `/autoankauf-frankfurt` (rewrite -> `/autoankauf/frankfurt`)
- `/bewertung-laeuft`
- `/bewertung-ergebnis`
- `/termin-buchen`
- `/vielen-dank`
- `/impressum`
- `/datenschutz`
- `/admin`
- `/admin/login`
- `/sitemap.xml`
- `/robots.txt`
- `/api/evaluate`

### 4. Functional Tests
- [ ] Valuation form submits -> `/bewertung-laeuft`
- [ ] AI valuation completes -> `/bewertung-ergebnis`
- [ ] "Termin buchen" -> `/termin-buchen`
- [ ] Booking complete -> `/vielen-dank`
- [ ] Admin login works
- [ ] Admin dashboard loads estimations
- [ ] PDF download works
- [ ] Cookie consent banner appears on first visit
- [ ] Cookie settings modal opens
- [ ] GTM events fire only after consent acceptance (Tag Assistant / GTM Preview)

### 5. DNS / Domain Cutover
1. Deploy `next-app` in Vercel as a separate project
2. Verify all checks above on preview
3. Assign custom domain `www.meinautoverkauf.de`
4. Keep apex redirect `meinautoverkauf.de -> https://www.meinautoverkauf.de`
5. Monitor logs and Search Console for 24h

## Runtime + Performance Notes
- All city and ratgeber pages are statically generated (SSG) at build time.
- `/api/evaluate` runs on **Node.js runtime**.
- `jspdf` is dynamically imported for admin PDF generation.
- GTM script loads only when analytics consent is granted.
