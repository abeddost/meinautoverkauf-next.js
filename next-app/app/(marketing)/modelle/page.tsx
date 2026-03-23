import type { Metadata } from 'next';
import Link from 'next/link';
import { MODEL_OVERVIEW_PATH, MODEL_SEO_PAGES } from '@/lib/modelSeoPages';

const ORDERED_MODEL_LINKS = [...MODEL_SEO_PAGES].sort((a, b) => a.order - b.order);

export const metadata: Metadata = {
  title: 'Modelle verkaufen – Ankaufseiten mit Modell-Fokus',
  description:
    'Alle modellspezifischen Ankaufseiten im Überblick: mit Schwachstellen, Nutzungsprofilen und Verkaufszeitpunkten für Ihren Autoankauf.',
  alternates: { canonical: MODEL_OVERVIEW_PATH },
};

export default function ModelleRoute() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">Modelle</span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark leading-tight tracking-tight mb-6">
            Autoankauf nach Modell
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Hier finden Sie unsere vertieften Modellseiten mit konkreten Schwachstellen, Verkaufszeitpunkten und Preislogik für den Autoankauf.
          </p>
        </div>

        <nav aria-label="Modellseiten" className="max-w-4xl mx-auto mb-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ORDERED_MODEL_LINKS.map((model) => (
              <li key={model.href}>
                <Link
                  href={model.href}
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:border-brand-orange hover:text-brand-orange hover:-translate-y-0.5"
                >
                  {model.label}
                  <span className="text-brand-orange transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-4xl mx-auto rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
          <h2 className="text-xl font-black text-brand-dark mb-3">Sie möchten direkt starten?</h2>
          <p className="text-slate-700 font-medium mb-4">
            Wenn Sie bereits verkaufsbereit sind, können Sie Ihren Wagen sofort unverbindlich bewerten lassen oder den Verkaufsprozess direkt anstoßen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/auto-bewerten"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors"
            >
              Auto jetzt bewerten
            </Link>
            <Link
              href="/auto-verkaufen"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors"
            >
              Auto verkaufen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
