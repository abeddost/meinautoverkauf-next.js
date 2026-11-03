import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import DepreciationCalculator from '@/components/DepreciationCalculator';
import FAQSection from '@/components/FAQSection';
import RouteHero from '@/components/RouteHero';
import { DEPRECIATION_TABLE, calculateResidualRange, formatEuro } from '@/lib/depreciation';
import { buildPageMetadata, SITE_URL } from '@/lib/seo';
import { buildBreadcrumbSchema } from '@/lib/structuredData';

const PATH = '/wertverlust-auto-rechner';
const EXAMPLE_PRICE = 30000;

export const metadata: Metadata = buildPageMetadata({
  title: 'Wertverlust Auto berechnen: Rechner und Tabelle',
  description:
    'Wertverlust beim Auto berechnen: kostenloser Rechner und Tabelle nach Jahren mit Richtwerten aus öffentlichen Quellen. Dazu die wichtigsten Einflussfaktoren.',
  path: PATH,
});

const FACTORS = [
  { title: 'Alter und Laufleistung', text: 'Die ersten Jahre kosten am meisten. Danach flacht der Wertverlust ab, eine hohe Laufleistung drückt den Wert aber weiter.' },
  { title: 'Marke und Modell', text: 'Gefragte Modelle halten ihren Wert besser. Die Unterschiede zwischen einzelnen Fahrzeugen sind groß, wie die Beispiele unten zeigen.' },
  { title: 'Unfall- und Lackschäden', text: 'Unfallschäden, Hagelschäden und Nachlackierungen senken den Preis, auch wenn sie repariert wurden.' },
  { title: 'Wartung und HU', text: 'Ein lückenloses Scheckheft und eine gültige Hauptuntersuchung stützen den Wert.' },
  { title: 'Antrieb', text: 'Benziner, Diesel, Hybride und Elektroautos entwickeln sich unterschiedlich. Bei E-Autos spielt der Batteriezustand eine große Rolle.' },
  { title: 'Vorbesitzer und Farbe', text: 'Wenige Vorbesitzer und gefragte Farben wie Schwarz, Grau oder Silber helfen beim Verkauf.' },
];

const MODEL_EXAMPLES = [
  { model: 'Mercedes G-Klasse', residual: '67,6 %' },
  { model: 'Porsche 911 Carrera', residual: '63,0 %' },
  { model: 'Citroën Berlingo', residual: '62,4 %' },
  { model: 'Dacia Duster', residual: '60,6 %' },
  { model: 'Mini Cooper', residual: '59,1 %' },
  { model: 'Range Rover Sport D300', residual: '57,8 %' },
  { model: 'Mercedes CLE', residual: '55,0 %' },
  { model: 'Mini Aceman', residual: '54,9 %' },
  { model: 'Audi A3 Sportback', residual: '53,7 %' },
  { model: 'Audi A6 Avant e-tron', residual: '51,7 %' },
];

const FAQS = [
  { q: 'Wie hoch ist der Wertverlust im ersten Jahr?', a: 'Als Richtwert gelten etwa 18 bis 25 Prozent. Einzelne Modelle können deutlich davon abweichen.' },
  { q: 'Wie viel ist ein Auto nach 5 Jahren noch wert?', a: 'Öffentliche Richtwerte nennen etwa 40 bis 50 Prozent des Neupreises. Entscheidend sind Modell, Laufleistung und Zustand.' },
  { q: 'Ist der Restwert auch der Preis, den ich beim Verkauf bekomme?', a: 'Nicht unbedingt. Der Restwert ist ein Richtwert für den Markt. Beim Verkauf an einen Händler liegt der Preis darunter, weil Marge, Aufbereitung und Risiko einkalkuliert sind.' },
  { q: 'Warum geben Quellen unterschiedliche Werte an?', a: 'Sie betrachten unterschiedliche Fahrzeuge, Laufleistungen und Zeiträume. Deshalb zeigen wir eine Spanne statt einer scheinbar genauen Zahl.' },
  { q: 'Verlieren Elektroautos schneller an Wert?', a: 'Oft ja, weil Käufer auf den Batteriezustand, den technischen Fortschritt und gesunkene Neupreise achten. Der Markt für gebrauchte E-Autos wächst aber deutlich.' },
];

export default function WertverlustRechnerRoute() {
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Wertverlust-Rechner', path: PATH },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Wertverlust-Rechner', href: PATH },
        ]}
      />
      <RouteHero
        headline="Wertverlust beim Auto berechnen"
        subheadline="Rechner und Tabelle nach Jahren, oder direkt eine Bewertung für Ihr konkretes Auto"
        accent="bewerten"
      />

      <div className="bg-white">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark leading-tight tracking-tight mb-4">
              Wie viel Wert verliert ein Auto pro Jahr?
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Ein Neuwagen verliert in den ersten Jahren am meisten. Als grobe Orientierung gelten etwa 18 bis 25 Prozent im ersten Jahr und rund 50 bis 60 Prozent nach fünf Jahren. Geben Sie unten den Neupreis und das Alter ein, um eine Spanne zu sehen.
            </p>
          </div>

          <DepreciationCalculator />

          <section>
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-2">Wertverlust nach Jahren</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-5">
              Die Beispielrechnung gilt für ein Auto mit einem Neupreis von {formatEuro(EXAMPLE_PRICE)}.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[480px] text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="text-left p-3 font-black">Alter</th>
                    <th className="text-left p-3 font-black">Wertverlust</th>
                    <th className="text-left p-3 font-black">Restwert im Beispiel</th>
                  </tr>
                </thead>
                <tbody>
                  {DEPRECIATION_TABLE.map((step) => {
                    const range = calculateResidualRange(EXAMPLE_PRICE, step);
                    return (
                      <tr key={step.years} className="border-t border-slate-100">
                        <td className="p-3 font-bold text-slate-700">
                          {step.years} {step.years === 1 ? 'Jahr' : 'Jahre'}
                        </td>
                        <td className="p-3 text-slate-600 font-medium">
                          {step.lossLow} bis {step.lossHigh} %
                        </td>
                        <td className="p-3 text-slate-600 font-medium">
                          {formatEuro(range.low)} bis {formatEuro(range.high)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-2">
              Richtwerte auf Basis der unten genannten Quellen. Die Jahre 2 und 4 sind interpoliert, ab Jahr 6 mit etwa 5 Prozentpunkten pro Jahr fortgeschrieben.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Was den Wertverlust beeinflusst</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FACTORS.map((factor) => (
                <article key={factor.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <h3 className="font-black text-brand-dark mb-2">{factor.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{factor.text}</p>
                </article>
              ))}
            </div>
            <p className="text-slate-600 font-medium leading-relaxed mt-5">
              Mehr dazu lesen Sie im Ratgeber{' '}
              <Link href="/ratgeber/kilometerstand-scheckheft-vorbesitzer-preis" className="text-brand-orange font-bold hover:underline">
                Kilometerstand, Scheckheft und Vorbesitzer
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-2">So unterschiedlich halten Modelle ihren Wert</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-5">
              Die Allianz nennt für diese Beispiele den Restwert nach drei Jahren und 60.000 km in Prozent des Neupreises.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="text-left p-3 font-black">Modell</th>
                    <th className="text-right p-3 font-black">Restwert</th>
                  </tr>
                </thead>
                <tbody>
                  {MODEL_EXAMPLES.map((row) => (
                    <tr key={row.model} className="border-t border-slate-100">
                      <td className="p-3 font-bold text-slate-700">{row.model}</td>
                      <td className="p-3 text-right text-slate-600 font-medium">{row.residual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Elektroautos: Ein Sonderfall</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Bei E-Autos spielen der Batteriezustand, der technische Fortschritt und gesunkene Neupreise eine große Rolle. Der Markt wächst aber: Laut DAT lag die Zahl der Besitzumschreibungen gebrauchter E-Autos in den ersten sieben Monaten des Jahres 2026 bei mehr als 200.000, fast 64 Prozent über dem Vorjahreszeitraum. Ein Batteriezertifikat kann beim Verkauf helfen.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">Restwert ist nicht gleich Ankaufspreis</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-5">
              Der Restwert beschreibt, was ein Auto auf dem Markt ungefähr noch wert ist. Ein Händler zahlt weniger, weil er Aufbereitung, Standzeit, Gewährleistung und Marge einrechnet. Wann ein Privatverkauf mehr bringt, zeigt unser{' '}
              <Link href="/ratgeber/auto-privat-oder-haendler-verkaufen" className="text-brand-orange font-bold hover:underline">
                Vergleich Privatverkauf oder Händler
              </Link>
              .
            </p>
            <Link href="/auto-bewerten" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors">
              Mein Auto kostenlos bewerten
            </Link>
          </section>

          <FAQSection title="Häufige Fragen zum Wertverlust" faqs={FAQS} sectionId="faq-wertverlust" className="bg-transparent py-0" />

          <section>
            <h2 className="text-base font-black text-brand-dark mb-2">Quellen</h2>
            <ul className="text-sm text-slate-600 font-medium space-y-1">
              <li>
                <a href="https://www.allianz.de/auto/kfz-versicherung/wertverlust-auto/" rel="noopener noreferrer" target="_blank" className="text-brand-orange hover:underline">
                  Allianz: Wertverlust beim Auto
                </a>
              </li>
              <li>
                <a href="https://www.mobile.de/verkaufen/auto/wertverlust/" rel="noopener noreferrer" target="_blank" className="text-brand-orange hover:underline">
                  mobile.de: Welchen Wertverlust hat mein Auto?
                </a>
              </li>
              <li>
                <a href="https://www.fahrzeugschein.de/blog/artikel/auto-restwert-berechnen" rel="noopener noreferrer" target="_blank" className="text-brand-orange hover:underline">
                  fahrzeugschein.de: Auto-Restwert berechnen (mit Bezug auf den DAT-Report 2026)
                </a>
              </li>
              <li>
                <a href="https://ecomento.de/2026/09/14/gebrauchtwagenmarkt-schwaechelt-gebrauchte-e-autos-legen-aber-kraeftig-zu/" rel="noopener noreferrer" target="_blank" className="text-brand-orange hover:underline">
                  ecomento: Gebrauchtwagenmarkt und gebrauchte E-Autos (DAT, September 2026)
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
