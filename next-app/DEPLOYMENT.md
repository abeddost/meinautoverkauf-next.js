# Deployment Checklist – Next.js Migration

## Environment Variables (set in Vercel dashboard)

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `GEMINI_API_KEY` | Google Gemini API key (server-only, never public) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `GA4_API_SECRET` | GA4 Measurement Protocol API secret (server-only) |
| `NEXT_PUBLIC_SITE_URL` | Full site URL e.g. `https://www.meinautoverkauf.de` |

## Pre-launch Steps

### 1. Supabase – Allowed Origins
In the Supabase dashboard → **Authentication → URL Configuration**, add:
- `https://your-vercel-preview-url.vercel.app` (for staging)
- `https://www.meinautoverkauf.de` (for production)

### 2. Supabase – Storage CORS
In **Storage → Settings → CORS**, add the new Next.js domain to the allowed origins list.

### 3. URL Checklist

Verify each URL returns 200 or the correct redirect:

| Old URL | New URL | Type |
|---|---|---|
| `/` | `/` | Static |
| `/auto-bewerten` | `/auto-bewerten` | Static |
| `/auto-verkaufen` | `/auto-verkaufen` | Static |
| `/vorteile` | `/vorteile` | Static |
| `/standorte` | `/standorte` | Static |
| `/ratgeber` | `/ratgeber` | Static |
| `/ratgeber/[slug]` | `/ratgeber/[slug]` | SSG |
| `/autoankauf-frankfurt` | `/autoankauf-frankfurt` (rewrite→`/autoankauf/frankfurt`) | SSG |
| `/autoankauf-wiesbaden` | `/autoankauf-wiesbaden` | SSG |
| `/autoankauf-mainz` | `/autoankauf-mainz` | SSG |
| `/bewertung-laeuft` | `/bewertung-laeuft` | Static + Client |
| `/bewertung-ergebnis` | `/bewertung-ergebnis` | Static + Client |
| `/termin-buchen` | `/termin-buchen` | Static + Client |
| `/vielen-dank` | `/vielen-dank` | Static + Client |
| `/impressum` | `/impressum` | Static |
| `/datenschutz` | `/datenschutz` | Static |
| `/admin` | `/admin` | Static + Client |
| `/admin/login` | `/admin/login` | Static + Client |
| `/sitemap.xml` | `/sitemap.xml` | Generated |
| `/robots.txt` | `/robots.txt` | Generated |
| `/api/evaluate` | `/api/evaluate` | Edge function |

### 4. Functional Tests
- [ ] Valuation form submits → navigates to `/bewertung-laeuft`
- [ ] AI valuation completes → navigates to `/bewertung-ergebnis`
- [ ] "Termin buchen" button → navigates to `/termin-buchen`
- [ ] Booking completes → navigates to `/vielen-dank`
- [ ] Admin login works
- [ ] Admin dashboard loads estimations
- [ ] PDF download works
- [ ] Cookie consent banner appears on first visit
- [ ] Cookie settings modal opens
- [ ] GA4 fires after consent acceptance (check Network tab)

### 5. DNS Cutover
1. Deploy the `next-app` project to Vercel as a separate project (staging)
2. Verify all checks above pass on the staging URL
3. In Vercel, assign the custom domain `www.meinautoverkauf.de`
4. Update DNS to point to Vercel (add CNAME/A records per Vercel docs)
5. Monitor for 24h, check Search Console for crawl errors

## Performance Notes
- All 35 city pages and 17 ratgeber pages are **statically generated** (SSG) at build time
- The `/api/evaluate` route runs on the **Edge runtime** for minimal latency
- `jspdf` is **dynamically imported** in the PDF generator — only loaded when admin requests a PDF download
- GA4 script is loaded `afterInteractive` — does not block page rendering
