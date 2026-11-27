'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { CITY_PAGES } from '@/lib/cityPages';
import { CITY_SERVICE_PAGES } from '@/lib/cityServicePages';

const StandortePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">Standorte</span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark leading-tight tracking-tight mb-6">
            Autoankauf in ganz Deutschland
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Wir kaufen Ihr Auto in vielen Regionen an – von Rhein-Main über Rhein-Neckar bis Hamburg und Köln. Wählen Sie Ihren Standort für lokale Infos und gleiche Abläufe: Bewertung, Angebot, Termin.
          </p>
        </div>
        <nav aria-label="Alle Standorte">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {CITY_PAGES.map((city) => (
              <li key={city.path}>
                <Link
                  href={city.path}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-brand-orange transition-all hover:translate-x-0.5 py-2"
                >
                  <span className="text-brand-orange">→</span>
                  {city.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mt-14 max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">Unfallwagen-Ankauf vor Ort</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Unfallauto verkaufen mit Abholung und Abmeldung: Unsere Seiten für den Unfallwagen-Ankauf in Ihrer Stadt.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CITY_SERVICE_PAGES.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-brand-orange transition-all hover:translate-x-0.5 py-2"
                >
                  <span className="text-brand-orange">→</span>
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StandortePage;
