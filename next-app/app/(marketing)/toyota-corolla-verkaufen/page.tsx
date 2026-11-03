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
const MODEL = MODEL_SEO_PAGE_BY_SLUG['toyota-corolla-verkaufen'];

const FAQS = [
  {
    q: 'Warum verkaufen viele ihren Toyota Corolla trotz hoher Zuverlässigkeit?',
    a: 'Viele Verkäufe sind keine Defektfälle, sondern Timingentscheidungen: hoher Kilometerstand, Modellwechsel, Hybrid-Upgrade oder geänderte Lebenssituation.',
  },
  {
    q: 'Kann ich einen Toyota Corolla Hybrid verkaufen, wenn die Batterie altert?',
    a: 'Ja. Auch bei nachlassender Batterieleistung ist ein Ankauf möglich. Der Zustand wird transparent in die Bewertung einbezogen.',
  },
  {
    q: 'Ist Toyota Corolla mit Motorschaden verkaufen möglich?',
    a: 'Ja. Ein Motorschaden schließt den Ankauf nicht aus. Besonders bei älteren Fahrzeugen ist der Direktverkauf oft wirtschaftlicher als hohe Reparaturinvestitionen.',
  },
  {
    q: 'Kaufen Sie auch Corolla Unfallwagen oder Corolla ohne TÜV?',
    a: 'Ja. Unfallfahrzeuge und Corolla ohne gültige HU/AU können ebenfalls angekauft werden, wenn der Zustand offen dokumentiert ist.',
  },
  {
    q: 'Wie wirkt sich hoher Kilometerstand beim Corolla auf den Preis aus?',
    a: 'Hohe Laufleistung ist beim Corolla nicht ungewöhnlich. Preisrelevant sind vor allem Historie, Pflegezustand, technische Plausibilität und anstehende Kosten.',
  },
  {
    q: 'Ist Toyota Corolla Export Ankauf möglich?',
    a: 'Bei geeigneten Fahrzeugen ja. Gerade ältere Corolla oder Defektfahrzeuge sind teilweise für Exportmärkte interessant.',
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: MODEL.seoTitle,
  description: MODEL.seoDescription,
  path: MODEL.canonicalPath,
});

export default function ToyotaCorollaVerkaufenPage() {
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
        headline="Toyota Corolla verkaufen: zuverlässig fahren, klug timen"
        subheadline="Warum gerade robuste Fahrzeuge einen strategischen Verkaufszeitpunkt brauchen"
        accent="verkaufen"
      />

      <div className="bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
          <article className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              Toyota Corolla verkaufen: Das Reliability-Paradox zwischen langer Haltbarkeit und optimalem Verkaufsfenster
            </h2>

            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Der Corolla ist ein Sonderfall im Gebrauchtwagenmarkt. Viele Halter verbinden ihn mit niedriger Ausfallquote, planbaren Kosten und langer
              Lebensdauer. Genau diese Stärken führen dazu, dass die Verkaufsentscheidung oft zu spät getroffen wird. Wer
              <strong> Toyota Corolla verkaufen</strong> möchte, wartet häufig bis in eine Phase, in der mehrere wertrelevante Faktoren gleichzeitig auftreten.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Im <strong>Toyota Corolla Ankauf</strong> heißt "zuverlässig" nicht automatisch "immer höchster Preis". Entscheidend ist das Timing:
              Zustand heute, nächste erwartbare Investitionen, Nachfrage nach Ihrer Generation und bei Hybridmodellen der Batteriestatus.
              Wer diese Punkte früh einordnet, verkauft oft ruhiger und wirtschaftlich besser.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
              Diese Seite hilft Ihnen genau dabei: Sie zeigt, warum Corolla-Besitzer trotz hoher Zuverlässigkeit verkaufen, welche Probleme realistisch auftreten,
              wann der beste Zeitpunkt ist und wie Sie den Prozess sicher zum Abschluss bringen.
            </p>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wie zuverlässig ist der Corolla wirklich und was bedeutet das für den Verkauf?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Sehr zuverlässig, aber nicht kostenfrei. Ein robustes Fahrzeug verschiebt Probleme oft nach hinten, statt sie komplett zu vermeiden. Das ist positiv,
                kann jedoch zu einem Denkfehler führen: "Er läuft noch, also lohnt Verkauf später." Wirtschaftlich ist später nicht immer besser.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Gerade beim Corolla ist ein frühes, datenbasiertes Timing sinnvoll: Solange Historie, Technikzustand und Marktnachfrage stimmig sind,
                bleibt der Verkauf planbar und verhandlungsstark.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum Corolla-Besitzer verkaufen, obwohl das Auto oft problemlos läuft</h2>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed mb-4">
                <li><strong>Lebensphase ändert sich:</strong> neuer Platzbedarf, Umzug, weniger Fahrleistung, anderer Mobilitätsmix.</li>
                <li><strong>Modellwechsel:</strong> Umstieg auf neuere Hybridgeneration oder anderes Segment.</li>
                <li><strong>Laufleistungsstrategie:</strong> aktiver Verkauf vor nächster großen Wartungsrunde.</li>
                <li><strong>Wertoptimierung:</strong> Verkauf auf Nachfragehoch statt späterem Preisverfall.</li>
              </ul>
              <p className="text-slate-700 font-medium leading-relaxed">
                Diese Gründe sind typisch für den <strong>Toyota Corolla Autoankauf</strong>: weniger Notverkauf, mehr strategische Entscheidung.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Welche Corolla-Themen sind aus Verkaufssicht wirklich relevant?</h2>

              <h3 className="text-lg font-black text-brand-dark mb-2">Hybridbatterie und Systemzustand</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Bei Hybridfahrzeugen steht nicht nur der Ist-Zustand im Fokus, sondern auch die Restperspektive. Schwankende Kapazität, Warnhinweise oder
                unklare Historie beeinflussen die Preislogik deutlich. Trotzdem gilt: <strong>Toyota Corolla Hybrid verkaufen</strong> ist auch in dieser Phase möglich,
                wenn der Zustand transparent beschrieben ist.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Bremsen und Fahrwerk bei hoher Laufleistung</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Trotz robuster Grundauslegung entstehen mit den Jahren Kosten an Fahrwerk, Bremskomponenten und Achsteilen. Bei viel Stadtverkehr summieren sich
                diese Positionen oft schneller als erwartet.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Motorseitige Einzelfälle</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Selten, aber relevant: Ölthemen, thermische Auffälligkeiten oder Verschleißbilder bei sehr hoher Laufleistung. In solchen Fällen suchen Halter
                gezielt nach <strong>Toyota Corolla mit Motorschaden verkaufen</strong>, um weitere Investitionen zu vermeiden.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Elektronik und Komfortmodule</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Kleine Elektrikpunkte sind beim Corolla meist kein Totalausfallrisiko, wirken aber im Preis als Unsicherheitsfaktor, wenn mehrere Themen gleichzeitig auftreten.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Corolla-Generationen: Warum Baujahr und Einsatzprofil den Unterschied machen</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der Corolla-Markt ist generationenabhängig. Wer den Wert realistisch einschätzen will, sollte nicht nur auf Marke und Laufleistung schauen.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li><strong>Ältere Generationen:</strong> robust, aber stark auf Substanz und Wartungsbelege fokussiert.</li>
                <li><strong>Übergangsjahre:</strong> hohe Vergleichbarkeit im Markt, daher preissensibel bei Mängeln.</li>
                <li><strong>Neuere Hybrid-Generationen:</strong> gute Nachfrage, aber klare Erwartungen an Batteriestatus und Service.</li>
              </ul>
            </section>

            <section className="mb-12 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wann sollten Sie einen Toyota Corolla verkaufen?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der beste Zeitpunkt liegt meist vor großen Kombinationskosten: Hybridcheck plus Fahrwerk plus HU-nahe Arbeiten oder erste Motor-/Elektrikfragen.
                Wer zu lange wartet, verliert den Vorteil des "zuverlässigen Gesamtbilds" im Markt.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Suchbegriffe wie <strong>Toyota Corolla hoher Kilometerstand verkaufen</strong> oder <strong>Toyota Corolla Probleme verkaufen</strong>
                sind häufig ein frühes Warnsignal für den richtigen Verkaufszeitpunkt. Dann sollte die Entscheidung aktiv und nicht reaktiv getroffen werden.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Wer früh verkauft, sichert oft mehr Nettoerlös als jemand, der bis zur nächsten größeren Rechnung wartet.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Toyota Corolla kaufen wir an?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Toyota Corolla Unfallwagen verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Ankauf auch bei dokumentierten Unfallschäden.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Toyota Corolla mit Motorschaden verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch bei Motorproblemen oder Ausfall möglich.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Corolla mit Getriebeschaden</strong><p className="text-sm text-slate-700 font-medium mt-2">Getriebeauffälligkeiten werden transparent bewertet.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Toyota Corolla gebraucht verkaufen bei hoher Laufleistung</strong><p className="text-sm text-slate-700 font-medium mt-2">Hohe Kilometer sind beim Corolla häufig und bewertbar.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Corolla ohne TÜV</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch ohne aktuelle HU/AU erhalten Sie ein Angebot.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Toyota Corolla Export Ankauf</strong><p className="text-sm text-slate-700 font-medium mt-2">Bei passenden Profilen wird der Exportweg geprüft.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Ablauf: in drei Schritten vom Corolla zur sicheren Auszahlung</h2>
              <ol className="space-y-4 text-slate-700 font-medium leading-relaxed">
                <li><strong>1. Daten übermitteln:</strong> Modelljahr, Kilometerstand, Hybrid/Benziner, Zustand, Unterlagen.</li>
                <li><strong>2. Bewertung erhalten:</strong> Marktgerecht mit Blick auf Technikprofil und Restwertrisiko.</li>
                <li><strong>3. Übergabe abschließen:</strong> Vertrag, Termin und dokumentierte Zahlung.</li>
              </ol>
              <p className="text-slate-700 font-medium leading-relaxed mt-4">
                So vermeiden Sie langen Inseratstress und verhandeln nicht unter Zeitdruck.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum unser Toyota Corolla Ankauf für viele die bessere Route ist</h2>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li>Hybrid- und Laufleistungsthemen werden differenziert statt pauschal bewertet.</li>
                <li>Ankauf auch bei Defekten, Unfall, hoher Laufleistung und ohne TÜV.</li>
                <li>Transparenter Prozess mit klaren Dokumenten und sicherer Auszahlung.</li>
                <li>Übergabe in unserer Filiale in Bodenheim oder Rüsselsheim.</li>
              </ul>
            </section>

            <section className="mb-14 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-orange-50 to-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">Toyota Corolla jetzt bewerten und Wertfenster nutzen</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-5">
                Wenn Sie den Corolla nicht erst im Reparaturmodus verkaufen wollen, starten Sie jetzt mit einer unverbindlichen Bewertung.
                Weiterführend finden Sie <Link href="/toyota-verkaufen" className="text-brand-orange font-black hover:underline">Toyota verkaufen</Link>
                und weitere Modellseiten im <Link href="/modelle" className="text-brand-orange font-black hover:underline">Modelle-Hub</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/auto-bewerten" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors">
                  Corolla jetzt bewerten
                </Link>
                <Link href="/auto-verkaufen" className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors">
                  Corolla Verkauf starten
                </Link>
              </div>
            </section>
          </article>

          <FAQSection
            title="FAQ: Toyota Corolla verkaufen"
            faqs={FAQS}
            sectionId="faq-toyota-corolla-verkaufen"
            className="max-w-4xl mx-auto bg-transparent py-0"
          />
        </div>
      </div>
    </>
  );
}
