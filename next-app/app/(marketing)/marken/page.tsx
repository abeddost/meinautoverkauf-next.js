import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { BRAND_LINKS, MARKEN_OVERVIEW_PATH } from '@/lib/brandLinks';

const ORDERED_BRAND_LINKS = [...BRAND_LINKS].sort((a, b) => a.order - b.order);

/** Kraftfahrt-Bundesamt, Pkw-Bestand am 1. Januar 2026. */
const STOCK_BY_BRAND = [
  { brand: 'VW', href: '/vw-verkaufen', cars: '10.315.640' },
  { brand: 'Mercedes', href: '/mercedes-verkaufen', cars: '4.735.891' },
  { brand: 'Opel', href: '/opel-verkaufen', cars: '3.809.136' },
  { brand: 'BMW', href: '/bmw-verkaufen', cars: '3.485.375' },
  { brand: 'Audi', href: '/audi-verkaufen', cars: '3.295.351' },
  { brand: 'Ford', href: '/ford-verkaufen', cars: '3.245.223' },
  { brand: 'Skoda', href: '/skoda-verkaufen', cars: '2.874.753' },
  { brand: 'SEAT', href: '/seat-verkaufen', cars: '1.711.609' },
  { brand: 'Renault', href: '/renault-verkaufen', cars: '1.587.622' },
  { brand: 'Hyundai', href: '/hyundai-verkaufen', cars: '1.576.506' },
  { brand: 'Toyota', href: '/toyota-verkaufen', cars: '1.314.239' },
  { brand: 'Mazda', href: '/mazda-verkaufen', cars: '832.166' },
  { brand: 'Porsche', href: '/porsche-verkaufen', cars: '410.445' },
];

const BRAND_GROUPS = [
  {
    title: 'Volumenmarken',
    text: 'VW, Opel, Ford, Skoda, SEAT, Renault und Hyundai sind weit verbreitet. Käufer vergleichen hier streng, deshalb zählen Wartung, Zustand und Laufleistung besonders. Gängige Modelle lassen sich dafür meist gut vermarkten.',
  },
  {
    title: 'Premiummarken',
    text: 'Bei Mercedes, BMW, Audi und Porsche sind die Ausgangspreise hoch, aber auch die Reparaturkosten. Steht eine größere Reparatur an, kann ein Verkauf davor wirtschaftlich sinnvoll sein.',
  },
  {
    title: 'Japanische Marken',
    text: 'Toyota und Mazda haben einen Ruf für Zuverlässigkeit. Das hilft beim Verkauf, ersetzt aber keine belegte Wartung. Bei Hybriden interessiert Käufer zusätzlich der Zustand der Batterie.',
  },
  {
    title: 'Oldtimer',
    text: 'Bei Klassikern entscheiden Originalität, Zustand und Dokumentation mehr als Alter und Laufleistung. Pauschale Online-Werte helfen hier nur begrenzt.',
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: 'Autoankauf nach Marke',
  description:
    'Autoankauf nach Marke: Welche Schwachstellen den Preis beeinflussen und wie sich VW, BMW, Mercedes, Renault, Hyundai und weitere Marken verkaufen lassen.',
  path: MARKEN_OVERVIEW_PATH,
});

export default function MarkenRoute() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">Marken</span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark leading-tight tracking-tight mb-6">
            Autoankauf nach Marke
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Hier finden Sie unsere Seiten zu den wichtigsten Automarken, mit typischen Schwachstellen, Preisfaktoren und dem Ablauf beim Verkauf.
          </p>
        </div>

        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Was die Marke für den Ankaufspreis bedeutet</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Beim Ankauf zählen vor allem Modell, Baujahr, Laufleistung, Zustand und Historie. Die Marke wirkt indirekt: über die Nachfrage, die Ersatzteilkosten, typische Schwachstellen und die Frage, ob sich ein Auto eher im Inland oder für den Export vermarkten lässt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BRAND_GROUPS.map((group) => (
              <article key={group.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="font-black text-brand-dark mb-2">{group.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{group.text}</p>
              </article>
            ))}
          </div>
        </section>

        <nav aria-label="Markenseiten" className="max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Alle Markenseiten</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ORDERED_BRAND_LINKS.map((brand) => (
              <li key={brand.href}>
                <Link
                  href={brand.href}
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:border-brand-orange hover:text-brand-orange hover:-translate-y-0.5"
                >
                  {brand.label}
                  <span className="text-brand-orange transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-2">So viele Autos fahren in Deutschland</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Der Bestand zeigt, wie groß der Markt für eine Marke ist. Zum 1. Januar 2026 waren laut Kraftfahrt-Bundesamt rund 49,5 Millionen Pkw zugelassen.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="text-left p-3 font-black">Marke</th>
                  <th className="text-right p-3 font-black">Pkw-Bestand</th>
                </tr>
              </thead>
              <tbody>
                {STOCK_BY_BRAND.map((row) => (
                  <tr key={row.brand} className="border-t border-slate-100">
                    <td className="p-3">
                      <Link href={row.href} className="font-bold text-slate-700 hover:text-brand-orange">
                        {row.brand}
                      </Link>
                    </td>
                    <td className="p-3 text-right text-slate-600 font-medium">{row.cars}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-2">Quelle: Kraftfahrt-Bundesamt, Bestand am 1. Januar 2026.</p>
        </section>

        <div className="max-w-4xl mx-auto mt-10 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
          <h2 className="text-xl font-black text-brand-dark mb-3">Sie suchen eine modellgenaue Seite?</h2>
          <p className="text-slate-700 font-medium mb-4">
            Neben Markenseiten finden Sie auch spezifische Ankaufseiten für stark nachgefragte Modelle mit Hinweisen zu Schwachstellen und zum Verkaufszeitpunkt.
          </p>
          <Link
            href="/modelle"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors"
          >
            Zu den Modellseiten
          </Link>
        </div>
      </div>
    </div>
  );
}
