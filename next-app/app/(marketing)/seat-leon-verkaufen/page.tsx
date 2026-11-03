import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import Link from 'next/link';
import RouteHero from '@/components/RouteHero';
import FAQSection from '@/components/FAQSection';
import Breadcrumb from '@/components/Breadcrumb';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const MODEL = MODEL_SEO_PAGE_BY_SLUG['seat-leon-verkaufen'];

const FAQS = [
  {
    q: 'Wie schnell kann ich meinen SEAT Leon verkaufen?',
    a: 'Mit vollständigen Fahrzeugdaten ist ein Abschluss oft innerhalb weniger Tage machbar. Bei DSG- oder Turbothemen kann die technische Einordnung etwas mehr Zeit benötigen.',
  },
  {
    q: 'Kaufen Sie auch SEAT Leon mit DSG Problemen?',
    a: 'Ja. Wir kaufen Leon mit DSG-Auffälligkeiten an. Entscheidend sind Symptomatik, Laufleistung und der dokumentierte Zustand.',
  },
  {
    q: 'Ist SEAT Leon mit Motorschaden verkaufen möglich?',
    a: 'Ja. Ein Motorschaden schließt den Ankauf nicht aus. Gerade bei sportlich genutzten Fahrzeugen ist der Direktverkauf oft die wirtschaftlichere Option.',
  },
  {
    q: 'Nehmen Sie Leon Unfallwagen oder Fahrzeuge ohne TÜV?',
    a: 'Ja. Auch Unfallwagen und Leon ohne gültige HU/AU sind ankauffähig, wenn Zustand und Historie transparent sind.',
  },
  {
    q: 'Wie stark drückt hoher Kilometerstand den Leon Preis?',
    a: 'Das hängt stark vom Wartungsbild ab. Hohe Laufleistung ist beim Leon häufig, wird aber bei klarer Historie deutlich fairer bewertet.',
  },
  {
    q: 'Ist SEAT Leon Export Ankauf ebenfalls möglich?',
    a: 'Bei passenden Fahrzeugprofilen ja. Vor allem ältere oder technisch belastete Fahrzeuge können für Exportmärkte relevant sein.',
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: MODEL.seoTitle,
  description: MODEL.seoDescription,
  path: MODEL.canonicalPath,
});

export default function SeatLeonVerkaufenPage() {
  const faqSchema = buildFaqPageSchema(SITE_URL, MODEL.canonicalPath, FAQS);
  const brandContent = BRAND_SEO_CONTENT[MODEL.brandSlug];
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: brandContent.displayName, path: MODEL.brandHref },
    { name: MODEL.label, path: MODEL.canonicalPath },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Marken', href: '/marken' },
          { name: brandContent.displayName, href: MODEL.brandHref },
          { name: MODEL.label, href: MODEL.canonicalPath },
        ]}
      />

      <RouteHero
        headline="SEAT Leon verkaufen: dynamisch gefahren, realistisch bewertet"
        subheadline="Sportliches Nutzungsprofil verstehen und den idealen Verkaufszeitpunkt vor teuren Folgekosten setzen"
        accent="verkaufen"
      />

      <div className="bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
          <article className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              SEAT Leon verkaufen: Wenn sportlicher Fahrstil schneller in Verschleiß und Timingfragen führt
            </h2>

            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Der Leon wird oft bewusst gekauft: markantes Design, straffes Fahrgefühl, dynamischer Charakter. Diese Stärken sorgen dafür, dass viele Fahrer
              das Potenzial des Fahrzeugs aktiv nutzen. Genau hier liegt die Besonderheit beim <strong>SEAT Leon verkaufen</strong>: Der Markt schaut nicht nur auf
              Kilometer, sondern stark auf das Nutzungsprofil. Ein sportlich bewegter Leon braucht eine andere Preislogik als ein rein defensiv genutztes Fahrzeug.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Im <strong>SEAT Leon Ankauf</strong> spielen daher technische Details eine zentrale Rolle: DSG-Verhalten, Turbo-/TSI-Bild, Fahrwerkszustand, Bremsen,
              Elektrik und Servicehistorie. Viele Halter unterschätzen, wie schnell mehrere mittlere Themen gemeinsam den Restwert drücken können.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
              Diese Seite liefert keine allgemeinen Verkaufsfloskeln, sondern eine konkrete Entscheidungshilfe: Welche Leon-Schwachstellen sind wirklich relevant,
              wann lohnt Reparatur, wann ist <strong>SEAT Leon schnell verkaufen</strong> die bessere Option?
            </p>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Die drei typischen Stresszonen beim Leon</h2>
              <h3 className="text-lg font-black text-brand-dark mb-2">1) DSG und Lastwechsel</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Ruckeln, späte Schaltvorgänge oder unruhiges Anfahren werden von Kaufinteressenten sofort kritisch bewertet. Gerade beim Leon wird ein sauberes
                Schaltbild erwartet. Unsicherheiten führen zu direktem Preisdruck.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">2) TSI/Turbo-Themen unter dynamischer Nutzung</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Nicht jede Auffälligkeit ist gravierend, aber thermische Belastung, Ölthemen oder Leistungsverlust wirken im Verkauf stark. Sobald größere
                Motorfragen im Raum stehen, wird <strong>SEAT Leon mit Motorschaden verkaufen</strong> für viele zur rationalen Alternative.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">3) Fahrwerk und Bremsen bei urban-sportlichem Profil</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Häufiges Beschleunigen/Bremsen, Stadtverkehr und schlechte Straßen bringen ein anderes Verschleißbild mit sich. Einzelkosten sind oft moderat,
                die Kombination wird jedoch schnell teuer.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum Leon-Besitzer verkaufen: Dynamik, Alltag, Lebensphase</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Viele Leon-Fahrer sind in einer Phase mit hohem Nutzungsdruck: täglicher Pendelverkehr, Wochenendfahrten, urbane Nutzung. Dazu kommen häufig
                jüngere Fahrerprofile, die das Fahrzeug sportlicher bewegen. Die Folge ist oft kein Totalschaden, sondern ein schleichender Kostenanstieg.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Weitere Verkaufsgründe: Umstieg auf größeres Fahrzeug, Wechsel in Richtung Hybrid/Elektro, Firmenwagen oder private Prioritäten. In all diesen
                Situationen ist ein klarer und schneller Abschluss wichtiger als ein langes Inserat mit unsicherer Verhandlungsdynamik.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Deshalb entscheiden sich viele für <strong>SEAT Leon Autoankauf</strong>, sobald der Kostenverlauf nicht mehr stabil planbar wirkt.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Leon-Generationen und Nutzungsbilder sind im Markt besonders sensibel?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim Leon reicht die Spannbreite von vernünftigem Daily Driver bis sportlich bewegtem Kompaktmodell. Genau deswegen schaut der Markt stark auf
                Kombinationen aus Baujahr, Motor/Getriebe und Vorbesitzerprofil.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li><strong>Leon 1P/5F:</strong> hoher Vergleichsdruck, daher starke Preissensitivität bei Technikthemen.</li>
                <li><strong>Neuere Generationen:</strong> besseres Preisniveau, aber strengere Erwartung an Historie und Elektronikzustand.</li>
                <li><strong>Stadt-/Kurzstreckenprofil:</strong> höhere Wahrscheinlichkeit für kumulierten Brems- und Kupplungsverschleiß.</li>
                <li><strong>Sportliche Nutzung:</strong> stärkerer Fokus auf Fahrwerk, Turbo und Getriebeverhalten.</li>
              </ul>
            </section>

            <section className="mb-12 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wann sollten Sie einen SEAT Leon verkaufen?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der beste Zeitpunkt liegt meist vor einer Paketreparatur. Sobald DSG-Themen, Bremsen, Fahrwerk und HU-Positionen zeitlich zusammenlaufen,
                sinkt der Restwert deutlich schneller als erwartet.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Wenn Sie bereits nach <strong>SEAT Leon hoher Kilometerstand verkaufen</strong> oder <strong>SEAT Leon Probleme verkaufen</strong> suchen,
                ist die Entscheidung oft eigentlich schon gefallen: Nicht weiter aufschieben, sondern strukturiert verkaufen, solange die Geschichte des Fahrzeugs
                noch plausibel und verhandelbar ist.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Besonders bei dynamisch genutzten Fahrzeugen gilt: früher Verkauf ist häufig wirtschaftlicher als späte Reparatur unter Zeitdruck.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche SEAT Leon kaufen wir an?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4"><strong>SEAT Leon Unfallwagen verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Ankauf auch bei dokumentierten Unfallschäden.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>SEAT Leon mit Motorschaden verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch bei nicht fahrbereitem Zustand möglich.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Leon mit DSG/Getriebeschaden</strong><p className="text-sm text-slate-700 font-medium mt-2">DSG-Auffälligkeiten werden differenziert eingepreist.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>SEAT Leon gebraucht verkaufen bei hoher Laufleistung</strong><p className="text-sm text-slate-700 font-medium mt-2">Hohe Kilometer werden mit Historie und Nutzungskontext bewertet.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Leon ohne TÜV</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch ohne aktuelle HU/AU ankauffähig.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>SEAT Leon Export Ankauf</strong><p className="text-sm text-slate-700 font-medium mt-2">Bei geeigneten Profilen prüfen wir den Exportweg.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Verkaufsprozess: von der Anfrage zum Abschluss ohne Reibungsverlust</h2>
              <ol className="space-y-4 text-slate-700 font-medium leading-relaxed">
                <li><strong>1. Leon-Daten senden:</strong> Baujahr, Kilometerstand, Motor/Getriebe, bekannte Auffälligkeiten, Unterlagen.</li>
                <li><strong>2. Transparentes Angebot:</strong> Bewertung nach Nachfrage, Defektrisiko und technischer Plausibilität.</li>
                <li><strong>3. Sichere Übergabe:</strong> Vertrag, Termin in der Filiale und Zahlung.</li>
              </ol>
              <p className="text-slate-700 font-medium leading-relaxed mt-4">
                Damit entfallen typische Privatmarktprobleme: Besichtigungen ohne Abschluss, aggressive Nachverhandlung, unsichere Zahlungsabwicklung.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum unser SEAT Leon Ankauf für viele die klare Lösung ist</h2>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li>VW-Group-Erfahrung mit realistischem Blick auf TSI/DSG-Risiken.</li>
                <li>Ankauf auch bei Defekten, Unfall, hoher Laufleistung oder ohne TÜV.</li>
                <li>Nachvollziehbare Preisargumentation statt pauschaler Abschläge.</li>
                <li>Schneller, rechtssicherer Ablauf mit dokumentierter Auszahlung.</li>
              </ul>
            </section>

            <section className="mb-14 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-orange-50 to-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">SEAT Leon jetzt bewerten und Verkaufszeitpunkt aktiv setzen</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-5">
                Wenn Sie Ihren Leon verkaufen wollen, bevor die nächste Kostenrunde startet, beginnen Sie mit einer unverbindlichen Bewertung.
                Weitere Infos finden Sie auf <Link href="/seat-verkaufen" className="text-brand-orange font-black hover:underline">SEAT verkaufen</Link>
                und im <Link href="/modelle" className="text-brand-orange font-black hover:underline">Modelle-Hub</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/auto-bewerten" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors">
                  Leon jetzt bewerten
                </Link>
                <Link href="/auto-verkaufen" className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors">
                  Leon Verkauf starten
                </Link>
              </div>
            </section>
          </article>

          <FAQSection
            title="FAQ: SEAT Leon verkaufen"
            faqs={FAQS}
            sectionId="faq-seat-leon-verkaufen"
            className="max-w-4xl mx-auto bg-transparent py-0"
          />
        </div>
      </div>
    </>
  );
}
