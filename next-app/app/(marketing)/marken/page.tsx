import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND_LINKS, MARKEN_OVERVIEW_PATH } from '@/lib/brandLinks';

const ORDERED_BRAND_LINKS = [...BRAND_LINKS].sort((a, b) => a.order - b.order);

export const metadata: Metadata = {
  title: 'Marken im Autoankauf – Alle Ankaufseiten im Überblick',
  description:
    'Alle markenspezifischen Autoankauf-Seiten im Überblick. Finden Sie die passende Ankaufseite für Ihre Marke.',
  alternates: { canonical: MARKEN_OVERVIEW_PATH },
};

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
            Nutzen Sie unsere markenspezifischen Ankaufseiten für eine schnelle und passende Verkaufsorientierung.
          </p>
        </div>

        <nav aria-label="Markenseiten" className="max-w-4xl mx-auto">
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
      </div>
    </div>
  );
}
