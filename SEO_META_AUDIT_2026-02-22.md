# SEO Meta Tag Audit - meinautoverkauf.de

Date: February 22, 2026  
Scope: Indexed pages scored in detail; noindex/admin/legal pages checked technically  
Tone for recommendations: Formal German ("Sie")

## 1) Metadata Inventory (Indexed Pages)

| Route | Title Len | Description Len | Canonical | Robots | OG/Twitter | Structured Data |
|---|---:|---:|---|---|---|---|
| `/` | 59 | 139 | Absolute/self | index,follow | Present | Organization, WebSite, WebPage, FAQPage |
| `/auto-bewerten` | 69 | 129 | Absolute/self | index,follow | Present | Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage |
| `/auto-verkaufen` | 64 | 130 | Absolute/self | index,follow | Present | Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage |
| `/vorteile` | 52 | 123 | Absolute/self | index,follow | Present | Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage |
| `/ratgeber` | 50 | 126 | Absolute/self | index,follow | Present | Organization, WebSite, CollectionPage, BreadcrumbList, FAQPage |
| `/autoankauf-frankfurt` | 65 | 146 | Absolute/self | index,follow | Present | Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage |
| `/autoankauf-wiesbaden` | 66 | 144 | Absolute/self | index,follow | Present | Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage |
| `/autoankauf-mainz` | 61 | 141 | Absolute/self | index,follow | Present | Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage |

## 2) Scoring Table (1-10)

Weights: Title 25%, Description 25%, Canonical 10%, Robots 10%, OG 10%, Twitter 10%, Structured Data 10%

| Route | Title | Description | Canonical | Robots | OG | Twitter | Structured Data | Overall |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | 9 | 8 | 10 | 10 | 8 | 8 | 8 | **8.65** |
| `/auto-bewerten` | 6 | 8 | 10 | 10 | 8 | 8 | 9 | **8.00** |
| `/auto-verkaufen` | 7 | 6 | 10 | 10 | 8 | 8 | 9 | **7.75** |
| `/vorteile` | 8 | 6 | 10 | 10 | 8 | 8 | 9 | **8.00** |
| `/ratgeber` | 9 | 7 | 10 | 10 | 8 | 8 | 8 | **8.40** |
| `/autoankauf-frankfurt` | 7 | 8 | 10 | 10 | 8 | 8 | 8 | **8.15** |
| `/autoankauf-wiesbaden` | 7 | 8 | 10 | 10 | 8 | 8 | 8 | **8.15** |
| `/autoankauf-mainz` | 7 | 8 | 10 | 10 | 8 | 8 | 8 | **8.15** |

## 3) Findings (Highest Impact First)

1. **Compliance risk in indexed descriptions**
- `Bestpreis` and `Bestpreis-Garantie` are used on key indexable pages and can raise legal/credibility risk if not strictly substantiated.
- References: `App.tsx:788`, `App.tsx:807`

2. **Overlength titles on multiple money pages**
- Several high-intent pages exceed the 50-60 target range, reducing SERP control and clarity.
- Affected: `/auto-bewerten`, `/auto-verkaufen`, `/autoankauf-frankfurt`, `/autoankauf-wiesbaden`, `/autoankauf-mainz`
- References: `App.tsx:768`, `App.tsx:787`, `App.tsx:844`, `App.tsx:865`, `App.tsx:886`

3. **Descriptions are often short or symbol-heavy on core pages**
- Multiple pages are below the 140-160 target and rely on repeated checkmarks, which weakens readability and trust tone.
- Affected: `/auto-bewerten`, `/auto-verkaufen`, `/vorteile`, `/ratgeber`

4. **Social metadata is complete but not differentiated**
- OG/Twitter mostly mirror page meta and use one shared image/alt message, limiting contextual relevance for social shares.
- Reference: `components/MetaTags.tsx:213`, `components/MetaTags.tsx:217`, `components/MetaTags.tsx:224`, `components/MetaTags.tsx:225`

5. **City-page metadata pattern is too templated**
- City pages are similar enough to risk weaker differentiation for local intent clusters.
- Affected: `/autoankauf-frankfurt`, `/autoankauf-wiesbaden`, `/autoankauf-mainz`

## 4) Competitor Benchmark Matrix (Updated Set)

| Domain | Example URL | Title Pattern | Description Pattern | Notes |
|---|---|---|---|---|
| wirkaufendeinauto.de | https://www.wirkaufendeinauto.de/auto-bewertung/ | Short, direct transactional intent | CTA + speed + "kostenlos" proof points | Strong clarity, less stylistic noise |
| wirkaufendeinauto.de | https://www.wirkaufendeinauto.de/standorte/frankfurt/ | `Autoankauf + Stadt` | Local + social proof volume | Effective local template |
| carwow.de | https://www.carwow.de/auto-verkaufen | Intent first + trust qualifiers | Benefit stack + dealer trust | Very clear process value |
| carwow.de | https://www.carwow.de/auto-verkaufen/autoankauf | `Autoankauf + Nähe` | Abholung + geprüft + compare offers | Good local-intent bridge |
| autolos.de | https://www.autolos.de/ | Keyword heavy, long title | Home pickup + convenience + phone promise | Useful value ideas, noisier format |
| autoankaufsofort.com | https://www.autoankaufsofort.com/ | Regional keyword first | Aggressive symbols + urgency | High CTR style, lower compliance tone |
| mainz-autoankauf.de | https://www.mainz-autoankauf.de/ | Exact local keyword list | Condition coverage + bar payment | Classic exact-match local style |
| autoankaufwiesbaden.com | https://www.autoankaufwiesbaden.com/ | Exact local keyword | Phone-first + urgency + all-caps claims | Aggressive style; avoid for your tone |

### Benchmark takeaways for your strategy
- Keep: clear intent-first titles, local qualifier where relevant, easy process language.
- Avoid: all-caps hype, overuse of symbols, unverifiable superlatives.
- Differentiate: trustworthy, transparent process language with formal "Sie" and fewer promotional tokens.

## 5) Replacement Copy Pack (Ready to Paste)

### `/`
- Recommended title (50): `Auto online verkaufen | Fairer Ankauf mit Abholung`
- Recommended description (161): `Verkaufen Sie Ihr Auto schnell und transparent: online bewerten, unverbindliches Angebot erhalten und auf Wunsch abholen lassen. Sicher, bequem und ohne Inserat.`
- A/B title (52): `Auto verkaufen online | Bewertung, Angebot, Abholung`
- A/B description (157): `Ermitteln Sie in wenigen Minuten den Wert Ihres Fahrzeugs und verkaufen Sie direkt an geprüfte Ankäufer. Mit Abholung, klaren Schritten und direktem Kontakt.`

### `/auto-bewerten`
- Recommended title (48): `Auto bewerten online | Kostenlose Wertermittlung`
- Recommended description (157): `Ermitteln Sie den aktuellen Wert Ihres Fahrzeugs online in wenigen Schritten. Die Bewertung ist kostenlos, unverbindlich und Grundlage für Ihr Ankaufangebot.`
- A/B title (50): `Was ist mein Auto wert? | Online Fahrzeugbewertung`
- A/B description (149): `Sie möchten wissen, was Ihr Auto heute wert ist? Starten Sie die Online-Bewertung kostenlos und erhalten Sie eine nachvollziehbare Preiseinschätzung.`

### `/auto-verkaufen`
- Recommended title (54): `Auto verkaufen online | Sicherer Ankauf mit Auszahlung`
- Recommended description (154): `Verkaufen Sie Ihren Gebrauchtwagen ohne Inserat und ohne Verhandlungsstress. Sie erhalten ein transparentes Angebot, einen Termin und zeitnahe Auszahlung.`
- A/B title (58): `Gebrauchtwagen online verkaufen | Schnell und rechtssicher`
- A/B description (158): `Vom Online-Check bis zur Übergabe: Wir begleiten Sie Schritt für Schritt beim Autoverkauf. Klarer Ablauf, faire Bewertung und Unterstützung bei der Abmeldung.`

### `/vorteile`
- Recommended title (60): `Ihre Vorteile beim Autoankauf | Schnell, transparent, sicher`
- Recommended description (157): `Erfahren Sie, wie Sie beim Verkauf Zeit sparen und Risiken reduzieren: transparenter Ablauf, Vertragsprozesse, optionale Abholung und persönliche Begleitung.`
- A/B title (55): `Warum mit Meinautoverkauf.de verkaufen? | Ihre Vorteile`
- A/B description (154): `Alle Vorteile auf einen Blick: strukturierter Prozess, nachvollziehbare Bewertung und zuverlässige Unterstützung von der Anfrage bis zur Fahrzeugübergabe.`

### `/ratgeber`
- Recommended title (57): `Ratgeber Autoverkauf | Tipps zu Preis, Vertrag und Ablauf`
- Recommended description (158): `Nutzen Sie praxisnahe Tipps für einen sicheren Autoverkauf: Wertermittlung, Unterlagen, Vertragsfragen und der richtige Umgang mit Schäden oder Motordefekten.`
- A/B title (57): `Autoverkauf-Ratgeber | Bewertung, Unterlagen und Übergabe`
- A/B description (153): `Unser Ratgeber zeigt Ihnen, wie Sie Ihr Fahrzeug gut vorbereiten, realistisch bewerten und rechtlich sauber verkaufen. Klar erklärt und direkt anwendbar.`

### `/autoankauf-frankfurt`
- Recommended title (54): `Autoankauf Frankfurt | Online bewerten, fair verkaufen`
- Recommended description (155): `Verkaufen Sie Ihr Auto in Frankfurt schnell und unkompliziert. Nach der Online-Bewertung erhalten Sie ein Angebot sowie auf Wunsch Abholung und Auszahlung.`
- A/B title (49): `Auto in Frankfurt verkaufen | Ankauf mit Abholung`
- A/B description (157): `Autoankauf in Frankfurt für alle gängigen Marken und Zustände. Starten Sie online, erhalten Sie ein nachvollziehbares Angebot und verkaufen Sie ohne Inserat.`

### `/autoankauf-wiesbaden`
- Recommended title (54): `Autoankauf Wiesbaden | Online bewerten, fair verkaufen`
- Recommended description (158): `Verkaufen Sie Ihr Auto in Wiesbaden mit klarem Ablauf: online bewerten, Angebot erhalten und Fahrzeug auf Wunsch abholen lassen. Transparent und ohne Inserat.`
- A/B title (49): `Auto in Wiesbaden verkaufen | Ankauf mit Abholung`
- A/B description (156): `Ihr Autoankauf in Wiesbaden für Gebrauchtwagen, Unfallwagen und Fahrzeuge mit Mängeln. Online starten, transparentes Angebot erhalten und planbar übergeben.`

### `/autoankauf-mainz`
- Recommended title (50): `Autoankauf Mainz | Online bewerten, fair verkaufen`
- Recommended description (153): `Verkaufen Sie Ihr Auto in Mainz schnell und nachvollziehbar. Nach der Online-Bewertung erhalten Sie ein Angebot sowie auf Wunsch Abholung und Auszahlung.`
- A/B title (45): `Auto in Mainz verkaufen | Ankauf mit Abholung`
- A/B description (156): `Autoankauf in Mainz inklusive Kastel und Kostheim. Sie starten online, erhalten ein faires Angebot und verkaufen ohne Inserat oder lange Preisverhandlungen.`

## 6) Technical Check - Noindex Pages

| Route | Noindex in MetaTags | In sitemap.xml | robots.txt disallow | Status |
|---|---|---|---|---|
| `/impressum` | Yes | No | No | OK |
| `/datenschutz` | Yes | No | No | OK |
| `/bewertung-laeuft` | Yes | No | Yes | OK |
| `/bewertung-ergebnis` | Yes | No | Yes | OK |
| `/termin-buchen` | Yes | No | Yes | OK |
| `/vielen-dank` | Yes | No | Yes | OK |
| `/admin` | Yes | No | Yes (`/admin`) | OK |
| `/admin/login` | Yes | No | Yes (covered by `/admin`) | OK |

## 7) Prioritized Action List

### Quick wins (same day)
1. Replace risky terms (`Bestpreis`, `Bestpreis-Garantie`) with compliance-safe wording.
2. Shorten overlong titles on high-intent pages to <=60 chars.
3. Expand short descriptions to 140-160 chars while keeping formal tone.

### Medium effort (1-2 days)
1. Add per-page OG image/alt variants for core vs city pages.
2. Reduce symbol-heavy metadata style and improve readability.
3. Make city descriptions more distinct by local proof/coverage details.

### Strategic (ongoing)
1. Build metadata templates with guardrails (length + compliance checks in CI).
2. Expand local SEO entities (district/service-area signals) where supported by real operations.
3. Track CTR in GSC per page after meta rollout and run A/B rotation quarterly.

## 8) Validation Checklist (Current Status)

1. Unique title+description per indexed page: **Pass**  
2. Title target 50-60 chars: **Partial pass** (5 pages over target)  
3. Description target 140-160 chars: **Partial pass** (4 pages under target)  
4. Canonical absolute/self-referencing: **Pass**  
5. Indexing directives aligned with intent: **Pass**  
6. OG/Twitter tags present: **Pass**  
7. JSON-LD present and mostly aligned: **Pass**

## Sources (Competitor pages used)

- https://www.wirkaufendeinauto.de/auto-bewertung/
- https://www.wirkaufendeinauto.de/standorte/frankfurt/
- https://www.carwow.de/auto-verkaufen
- https://www.carwow.de/auto-verkaufen/autoankauf
- https://www.autolos.de/
- https://www.autoankaufsofort.com/
- https://www.mainz-autoankauf.de/
- https://www.autoankaufwiesbaden.com/

Internal pages checked:
- https://www.meinautoverkauf.de/
- https://www.meinautoverkauf.de/auto-bewerten
- https://www.meinautoverkauf.de/auto-verkaufen
- https://www.meinautoverkauf.de/vorteile
- https://www.meinautoverkauf.de/ratgeber
- https://www.meinautoverkauf.de/autoankauf-frankfurt
- https://www.meinautoverkauf.de/autoankauf-wiesbaden
- https://www.meinautoverkauf.de/autoankauf-mainz
