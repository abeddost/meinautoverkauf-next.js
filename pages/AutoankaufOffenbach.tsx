import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { OFFENBACH_FAQS } from '../lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufOffenbachPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-orange-200/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[24%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[12%] right-[8%] w-80 h-80 bg-blue-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[12%] w-24 h-24 bg-orange-200/40 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full"></div>
        <div className="absolute top-24 left-20 w-4 h-4 bg-orange-300 rounded-full"></div>
        <div className="absolute top-[40%] right-[32%] w-3 h-3 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-5 h-5 bg-orange-200 rounded-full"></div>
        <img
          src="/elements/offenbach-mainufer.webp"
          alt=""
          width={384}
          height={384}
          className="absolute top-16 right-0 w-80 h-80 lg:w-96 lg:h-96 opacity-[0.07] pointer-events-none"
          loading="lazy"
          decoding="async"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-orange-200/40 rounded-full blur-2xl"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            Autoankauf Offenbach –{' '}
            <span className="text-brand-orange">Schnell verkaufen in der Stadt am Main</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            Sie möchten Ihr Auto in Offenbach verkaufen und nicht wochenlang auf Anfragen warten?
            Wir bieten Ihnen einen direkten Ankauf mit transparenter Bewertung, kostenloser Abholung
            und schneller Auszahlung. Ohne Inserat, ohne Preisdrückerei, ohne unnötigen Aufwand.
          </p>

          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-black text-brand-dark mb-5">Ihre Vorteile beim Autoankauf in Offenbach</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Online-Bewertung in 2 Minuten',
                'Express-Auszahlung am Übergabetag',
                'Kostenlose Abholung in ganz Offenbach und Umgebung',
                'Abmeldung bei der Zulassungsstelle Stadt Offenbach inklusive',
                'Ankauf auch von Pendlerfahrzeugen mit hoher Laufleistung',
                'Flexible Termine auch außerhalb klassischer Bürozeiten',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
            Offenbach: Pendlerstadt neben Frankfurt mit eigenem Fahrzeugprofil
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Offenbach liegt direkt an Frankfurt, hat aber einen eigenständigen Fahrzeugmarkt. Viele
            Fahrzeuge werden als Pendlerautos genutzt: hohe Laufleistung, verlässliche Wartung,
            regelmäßige Modellwechsel. Dazu kommen Firmenfahrzeuge aus dem Umfeld von Kaiserlei,
            Hafen Offenbach und den Gewerbeachsen Richtung Mühlheim und Hanau.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Genau für diesen Markt ist unser Ankauf gemacht. Wir bewerten Fahrzeuge anhand aktueller
            Marktdaten und berücksichtigen Laufleistung, Zustand, Historie und regionale Nachfrage.
            Besonders bei gepflegten Alltagsautos und Leasingrückläufern sind schnelle, faire Abschlüsse möglich.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Offenbach ist außerdem stark international geprägt. Wir begleiten auch komplexere Fälle,
            etwa bei Fahrzeugen mit kurzem Zulassungszeitraum oder grenzüberschreitendem Umzug.
          </p>
        </section>

        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf in allen Offenbacher Stadtteilen & im direkten Umland
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Offenbach Stadtteile</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Innenstadt', 'Nordend', 'Kaiserlei', 'Mathildenviertel', 'Lauterborn', 'Tempelsee', 'Rosenhöhe', 'Bieber', 'Bürgel', 'Rumpenheim'].map((district) => (
                  <li key={district} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {district}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Umland Offenbach</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Neu-Isenburg', 'Heusenstamm', 'Dietzenbach', 'Mühlheim am Main', 'Obertshausen', 'Hanau', 'Maintal', 'Rodgau'].map((area) => (
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-8">
            So funktioniert der Autoankauf in Offenbach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Online bewerten',
                desc: 'Eckdaten eingeben und in wenigen Minuten eine realistische Ersteinschätzung erhalten.',
              },
              {
                step: '02',
                title: 'Termin wählen',
                desc: 'Wir kommen zu Ihnen nach Offenbach oder ins direkte Umland, auch kurzfristig.',
              },
              {
                step: '03',
                title: 'Abschluss & Auszahlung',
                desc: 'Fahrzeug prüfen, Vertrag unterschreiben, Auszahlung erhalten. Abmeldung inklusive.',
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
            <h2 className="text-lg lg:text-xl font-black mb-4">
              Zulassungsstelle Offenbach: Stadt und Kreis klar unterscheiden
            </h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-4">
              In der Region gibt es häufig Verwechslungen zwischen der Zulassungsstelle der Stadt Offenbach
              und der Zulassungsbehörde des Kreises Offenbach. Wir prüfen die Zuständigkeit vorab und
              übernehmen die richtige Abmeldung für Ihr Fahrzeug.
            </p>
            <p className="text-slate-300 font-medium leading-relaxed">
              Das spart Zeit und verhindert unnötige Rückfragen bei der Übergabe. Sie erhalten die Abmeldung
              sauber dokumentiert.
            </p>
          </div>
        </section>

        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf Offenbach vs. Privatverkauf
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
            {[
              { label: 'Verkaufsdauer', ankauf: '1-2 Tage', privat: 'Mehrere Wochen' },
              { label: 'Preisfindung', ankauf: 'Transparent & datenbasiert', privat: 'Starke Verhandlungsschwankung' },
              { label: 'Sicherheit', ankauf: 'Rechtssicherer Ablauf', privat: 'Betrugsrisiko' },
              { label: 'Abmeldung', ankauf: 'Übernehmen wir', privat: 'Selbst organisieren' },
            ].map((row) => (
              <div key={row.label} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">{row.label}</div>
                <div className="flex gap-3">
                  <div className="flex-1 bg-green-50 border border-green-100 rounded-lg p-2.5">
                    <div className="text-xs text-green-700 font-black mb-0.5">Ankauf</div>
                    <div className="text-xs text-green-800 font-semibold">{row.ankauf}</div>
                  </div>
                  <div className="flex-1 bg-red-50 border border-red-100 rounded-lg p-2.5">
                    <div className="text-xs text-red-700 font-black mb-0.5">Privat</div>
                    <div className="text-xs text-red-800 font-semibold">{row.privat}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-6 py-4 font-black">Kriterium</th>
                  <th className="text-left px-6 py-4 font-black text-brand-orange">Autoankauf</th>
                  <th className="text-left px-6 py-4 font-black">Privatverkauf</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Verkaufsdauer', ankauf: '1-2 Tage', privat: 'Mehrere Wochen' },
                  { label: 'Preisfindung', ankauf: 'Transparent und datenbasiert', privat: 'Unsichere Verhandlungsergebnisse' },
                  { label: 'Sicherheit', ankauf: 'Rechtssicherer Kaufvertrag', privat: 'Betrugs- und Ausfallrisiken' },
                  { label: 'Abmeldung', ankauf: 'Komplett durch uns', privat: 'Eigene Behördentermine' },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-3.5 font-semibold text-slate-700">{row.label}</td>
                    <td className="px-6 py-3.5 font-semibold text-green-700">{row.ankauf}</td>
                    <td className="px-6 py-3.5 font-medium text-slate-500">{row.privat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="max-w-4xl mx-auto">
          <FAQSection
            title="Häufige Fragen zum Autoankauf in Offenbach"
            faqs={[...OFFENBACH_FAQS]}
            sectionId="faq-offenbach"
          />

          <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
            <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere Standorte im Rhein-Main-Gebiet</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
              Entdecken Sie auch unsere Nachbarstandorte:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/autoankauf-frankfurt" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Autoankauf Frankfurt
              </Link>
              <Link to="/autoankauf-darmstadt" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Autoankauf Darmstadt
              </Link>
              <Link to="/autoankauf-ruesselsheim" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Autoankauf Rüsselsheim
              </Link>
            </div>
          </section>

          <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden border border-slate-700/60 shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Offenbach verkaufen</h2>
              <p className="text-slate-300 font-medium mb-8 max-w-xl mx-auto">
                Bewertung in 2 Minuten, transparente Abwicklung und Auszahlung am Tag der Übergabe.
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

export default AutoankaufOffenbachPage;
