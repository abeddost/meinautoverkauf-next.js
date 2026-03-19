<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# MeinAutoPreis24 (Next.js + Node.js)

## App Layout

The only application is **Next.js** in `next-app/`.
Root npm commands are wrappers to `next-app`:

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run type-check`
- `npm run og:image`
- `npm run icons:favicon`
- `npm run images:webp`
- `npm run images:webp:dry-run`
- `npm run check:pagespeed`
- `npm run check:pagespeed:regression`

## Local Setup

1. Use Node.js `20.x` (see `.nvmrc`), then run `nvm use`.
2. Install dependencies in `next-app`:
   - `cd next-app && npm install`
3. Copy `next-app/.env.example` to `next-app/.env.local` and fill values.
4. Run from repo root:
   - `npm run dev`

If local dev throws missing chunk/module errors, run:
- `npm --prefix next-app run dev:clean`

## Required Environment Variables

Set in `next-app/.env.local` and in Vercel:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `GEMINI_API_KEY`
- `NEXT_PUBLIC_SITE_URL`

See the full variable list in `next-app/.env.example`.

## Vercel Deployment

Use the existing Vercel project with:

- Root Directory: `next-app`
- Framework Preset: `Next.js`
- Node.js Version: `20.x`
- Production branch: `main`

See the full checklist in `next-app/DEPLOYMENT.md`.
