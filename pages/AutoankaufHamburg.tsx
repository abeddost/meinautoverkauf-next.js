import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { HAMBURG_FAQS } from '../lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufHamburgPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-cyan-200/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[24%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[12%] right-[8%] w-80 h-80 bg-blue-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[12%] w-24 h-24 bg-cyan-200/40 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full"></div>
        <img
          src="/elements/hamburg-hafen.webp"
          alt=""
          width={384}
          height={384}
          className="absolute top-16 right-0 w-80 h-80 lg:w-96 lg:h-96 opacity-[0.07] pointer-events-none"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-cyan-200/40 rounded-full blur-2xl"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            Autoankauf Hamburg – <span className="text-brand-orange">schnell verkaufen in der Hansestadt</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            Sie möchten Ihr Auto in Hamburg verkaufen, ohne wochenlange Inserate und Terminchaos? Wir bieten einen
            strukturierten Direktankauf mit kostenloser Abholung, klarer Vertragsabwicklung und schneller Auszahlung.
          </p>

          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-black text-brand-dark mb-5">Ihre Vorteile beim Autoankauf in Hamburg</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Unverbindliche Online-Bewertung in wenigen Minuten',
                'Auszahlung per Überweisung am Übergabetag',
                'Kostenlose Abholung in ganz Hamburg',
                'Abmeldung über den LBV Hamburg inklusive',
                'Ankauf auch bei hoher Laufleistung oder Schäden',
                'Flexible Termine für Pendler und Schichtarbeit',
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 font-medium">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Hamburg: Hafenwirtschaft, Pendlerachsen und internationaler Fahrzeugmarkt
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Hamburgs Fahrzeugmarkt ist geprägt durch die Kombination aus Hafenlogistik, urbanem Stadtverkehr und
            überregionalen Pendlerströmen. Dadurch treffen hier viele Fahrzeugtypen aufeinander: vom Stadt-Kleinwagen
            bis zum langstreckentauglichen Diesel.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Gleichzeitig ist der Zeitdruck oft hoch. Berufliche Mobilität, Schichtmodelle und Umzüge sorgen dafür,
            dass Verkäufer eine schnelle, planbare Lösung benötigen statt langer Inseratslaufzeiten.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Mit einem strukturierten Ankaufprozess lassen sich Bewertung, Übergabe und Auszahlung in klaren Schritten
            koordinieren - ohne unsichere Privatverhandlungen.
          </p>
        </section>

        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf in allen Hamburger Bezirken und im Umland
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Hamburg Bezirke</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {[
                  'Hamburg-Mitte',
                  'Altona',
                  'Eimsbüttel',
                  'Hamburg-Nord',
                  'Wandsbek',
                  'Bergedorf',
                  'Harburg',
                  'St. Pauli',
                  'Winterhude',
                  'Blankenese',
                ].map((district) => (
                  <li key={district} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {district}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Metropolregion Hamburg</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {[
                  'Norderstedt',
                  'Ahrensburg',
                  'Pinneberg',
                  'Wedel',
                  'Reinbek',
                  'Geesthacht',
                  'Buxtehude',
                  'Seevetal',
                  'Lüneburg',
                  'Stade',
                ].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-8">So funktioniert der Verkauf in Hamburg</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Online einschätzen',
                desc: 'Fahrzeugdaten erfassen und eine erste Preisindikation erhalten.',
              },
              {
                step: '02',
                title: 'Termin abstimmen',
                desc: 'Übergabe in Hamburg oder Umgebung flexibel planen.',
              },
              {
                step: '03',
                title: 'Abschluss sichern',
                desc: 'Vertrag, Auszahlung und Abmeldung transparent abwickeln.',
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-7 border border-slate-100 shadow-sm">
                <div className="text-5xl font-black text-brand-orange/20 mb-3">{item.step}</div>
                <h3 className="font-black text-brand-dark mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-lg lg:text-xl font-black mb-4">LBV Hamburg: Abmeldung ohne Zusatzaufwand</h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-4">
              Für Hamburger Kennzeichen übernehmen wir die Abmeldung über den zuständigen Landesbetrieb Verkehr
              (LBV). Dadurch entfallen zusätzliche Behördentermine und Sie erhalten einen nachvollziehbaren Nachweis.
            </p>
            <p className="text-slate-300 font-medium leading-relaxed">
              Bei Fahrzeugen aus der Metropolregion klären wir die zuständige Stelle vorab, damit der Ablauf auch
              über Bundeslandgrenzen hinweg sauber bleibt.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto">
          <FAQSection
            title="Häufige Fragen zum Autoankauf in Hamburg"
            faqs={[...HAMBURG_FAQS]}
            sectionId="faq-hamburg"
          />

          <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
            <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere relevante Seiten</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/autoankauf-frankfurt" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Autoankauf Frankfurt
              </Link>
              <Link to="/autoankauf-offenbach" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Autoankauf Offenbach
              </Link>
              <Link to="/ratgeber/autoabmeldung-nach-verkauf" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Ratgeber Autoabmeldung
              </Link>
              <Link to="/auto-bewerten" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Auto bewerten
              </Link>
            </div>
          </section>

          <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden border border-slate-700/60 shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Hamburg verkaufen</h2>
              <p className="text-slate-300 font-medium mb-8 max-w-xl mx-auto">
                Bewertung in wenigen Minuten, klare Prozesse und schnelle Auszahlung.
              </p>
              <button
                onClick={onCtaClick}
                className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
              >
                Kostenlosen Verkaufspreis erhalten
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoankaufHamburgPage;
