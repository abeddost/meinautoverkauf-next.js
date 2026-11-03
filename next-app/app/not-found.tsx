import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  description: 'Diese Seite gibt es nicht mehr. Hier finden Sie Bewertung, Verkauf, Ratgeber und unsere Standorte.',
  robots: { index: false, follow: true },
};

const NEXT_STEPS = [
  { href: '/auto-bewerten', label: 'Auto kostenlos bewerten', hint: 'Unverbindliche Einschätzung in etwa 2 Minuten' },
  { href: '/auto-verkaufen', label: 'Auto verkaufen', hint: 'Alle Wege und der Ablauf im Überblick' },
  { href: '/ratgeber', label: 'Ratgeber', hint: 'Unterlagen, Kaufvertrag, Schäden und Preis' },
  { href: '/standorte', label: 'Standorte', hint: 'Unsere Filialen in Bodenheim und Rüsselsheim' },
];

export default function NotFound() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-20 max-w-3xl">
          <p className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4">Fehler 404</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark leading-tight tracking-tight mb-4">
            Diese Seite haben wir nicht gefunden
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
            Die Adresse ist falsch oder die Seite wurde verschoben. Von hier aus geht es direkt weiter:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NEXT_STEPS.map((step) => (
              <li key={step.href}>
                <Link
                  href={step.href}
                  className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-brand-orange hover:-translate-y-0.5"
                >
                  <span className="block font-black text-brand-dark mb-1">{step.label}</span>
                  <span className="block text-sm text-slate-600 font-medium">{step.hint}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer showBrandLinks />
    </div>
  );
}
