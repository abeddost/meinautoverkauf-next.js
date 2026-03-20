# Brand SEO Prompt Pack (Autoankauf Germany)

This pack generates two unique pages per brand:
- Transactional landing page (brand autoankauf)
- Informational guide page (problems + best sell timing)

Use this as the daily workflow for new brands (Audi, Mercedes, VW, ...).

## Variables
- `{{BRAND}}`: e.g. BMW
- `{{BRAND_LOWER}}`: e.g. bmw
- `{{LANDING_SLUG}}`: e.g. `/bmw-verkaufen`
- `{{GUIDE_SLUG}}`: e.g. `/ratgeber/bmw-probleme-verkauf`
- `{{PRIMARY_KEYWORDS}}`: brand transactional keyword set
- `{{SECONDARY_KEYWORDS}}`: supporting transactional keywords
- `{{LSI_KEYWORDS}}`: semantic/related terms
- `{{LONGTAIL_KEYWORDS}}`: intent-heavy long-tail terms
- `{{ISSUE_CLUSTERS}}`: brand-specific common defects by generation/motor family
- `{{ANFAELLIGE_MODELLE}}`: model/year-specific risk examples
- `{{REPAIR_COST_FRAMING}}`: realistic cost ranges and uncertainty notes
- `{{USP_MAP}}`: brand-specific service strengths
- `{{REGIONAL_ANGLE}}`: Germany market context (timing, compliance, demand)
- `{{INTERNAL_LINKS}}`: conversion + supporting links

## Prompt A: Transactional Landing Page
```text
Act as a senior German SEO strategist and conversion copywriter for Autoankauf.

Create a 100% original, native-German landing page for {{BRAND}} selling intent.

Output requirements:
- Primary intent: transaction (sell now)
- Length: 1200-1800 words
- Tone: trustworthy, clear, conversion-oriented
- Include and naturally distribute: {{PRIMARY_KEYWORDS}}, {{SECONDARY_KEYWORDS}}, {{LSI_KEYWORDS}}, {{LONGTAIL_KEYWORDS}}
- No keyword stuffing. No generic filler.

Structure:
1) SEO title (<=60 chars)
2) Meta description (<=160 chars)
3) H1 with clear keyword intent
4) Problem-aware intro with {{BRAND}}-specific pain points
5) USPs using {{USP_MAP}}
6) 3-step process (fast, transparent, legally clean)
7) Vehicle condition segments:
   - Unfallwagen
   - Motorschaden
   - Getriebeschaden
   - Hohe Laufleistung
   - Ohne TÜV
   - Firmenwagen / Leasingrückläufer
8) Why us vs private sale vs dealer
9) Trust section (payout, pickup, fair valuation, documentation)
10) Multiple CTA blocks (top/mid/bottom)
11) FAQ section (rich-snippet style, question-led H3)
12) Internal linking placeholders: {{INTERNAL_LINKS}}

Hard constraints:
- Keep claims realistic and defensible for Germany.
- Mention both speed and legal/process reliability.
- Ensure text is brand-specific to {{BRAND}}, not reusable as-is for another brand.
```

## Prompt B: Informational Guide Page
```text
Act as an expert automotive content strategist for Germany.

Write a high-value, native-German guide page for {{BRAND}} that captures informational intent and bridges into conversion.

Output requirements:
- Length: 1500-2500 words
- Tone: expert, helpful, practical, lightly conversational
- Core keywords: {{BRAND}} Probleme, {{BRAND}} häufige Fehler, Wann {{BRAND}} verkaufen, Welche {{BRAND}} Modelle sind anfällig, {{BRAND}} Motorschaden Kosten, {{BRAND}} Zuverlässigkeit
- Include long-tail naturally; avoid stuffing.

Required sections:
1) SEO title + meta description
2) H1
3) Intro hook with credibility and decision framing
4) Why owners sell {{BRAND}}
5) Common problems (engine, transmission, electronics, maintenance)
   Use {{ISSUE_CLUSTERS}} with model/year context
6) Most problematic models
   Use {{ANFAELLIGE_MODELLE}} with caveats and maintenance dependency
7) Best time to sell
   - mileage thresholds
   - before major repairs
8) Repair cost overview
   Use {{REPAIR_COST_FRAMING}} with uncertainty disclosure
9) Repair vs sell decision framework
10) Price-maximization checklist before selling
11) Soft CTA bridge to {{LANDING_SLUG}}
12) Related internal links: {{INTERNAL_LINKS}}

Hard constraints:
- No absolute statements like “all model X fail”.
- Use nuanced, evidence-aware wording.
- Focus on actionable decisions for real owners in Germany.
```

## Uniqueness Guardrails
- Do not reuse intro paragraphs across brands.
- Do not reuse the same FAQ set between landing and guide.
- Every brand must include at least 3 brand-specific technical insights.
- Every brand guide must include at least 2 model-generation references.
- Maintain semantic diversity: minimum 12 distinct semantic terms per page.
- Avoid repeated paragraph templates (same sentence rhythm/structure).

## Internal Link Strategy (per brand)
- Landing page links:
  - `/auto-bewerten`
  - `/auto-verkaufen`
  - `{{GUIDE_SLUG}}`
- Guide page links:
  - `{{LANDING_SLUG}}`
  - `/ratgeber`
  - 2-4 related evergreen guides

## Daily Rollout Workflow
1. Add new brand entry in `lib/brandSeoContent.ts`.
2. Generate landing + guide drafts using Prompt A/B.
3. Inject final copy into brand dataset fields (landing + guide blocks).
4. Create new landing route in `app/(marketing)/{{BRAND_LOWER}}-verkaufen/page.tsx`.
5. Ensure guide appears via `lib/guideContent.ts` brand mapping.
6. Confirm sitemap contains both URLs.
7. Run QA:
   - `npm --prefix next-app run type-check`
   - `npm --prefix next-app run build`
8. SEO QA before deploy:
   - title/meta lengths
   - single H1
   - heading hierarchy
   - FAQ schema validity
   - keyword stuffing check
   - uniqueness check versus existing brand pages
