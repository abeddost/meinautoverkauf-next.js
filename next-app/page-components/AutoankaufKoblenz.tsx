'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { KOBLENZ_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufKoblenzPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-blue-200/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[24%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[12%] right-[8%] w-80 h-80 bg-orange-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[12%] w-24 h-24 bg-blue-200/40 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full"></div>
        <div className="absolute top-24 left-20 w-4 h-4 bg-orange-300 rounded-full"></div>
        <div className="absolute top-[40%] right-[32%] w-3 h-3 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-5 h-5 bg-orange-200 rounded-full"></div>
        <img
          src="/elements/deutsches-eck-koblenz.webp"
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
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-200/40 rounded-full blur-2xl"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            Autoankauf Koblenz –{' '}
            <span className="text-brand-orange">Fair verkaufen zwischen Rhein und Mosel</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            Sie möchten Ihr Auto in Koblenz verkaufen, ohne wochenlang zu inserieren? Wir bieten Ihnen
            einen schnellen, transparenten Ankauf mit kostenloser Abholung, rechtssicherem Vertrag und
            Auszahlung am Übergabetag. Online bewerten, Termin buchen, Fahrzeug direkt verkaufen.
          </p>

          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-black text-brand-dark mb-5">Ihre Vorteile beim Autoankauf in Koblenz</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Kostenlose Online-Bewertung in 2 Minuten',
                'Sofortige Auszahlung nach Vertragsabschluss',
                'Kostenlose Abholung in ganz Koblenz & Umland',
                'Abmeldung bei der Zulassungsbehörde der Stadt Koblenz inklusive',
                'Ankauf aller Marken, auch ältere Diesel und Exportfahrzeuge',
                'Flexible Termine für Berufspendler und Dienstwagen',
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
            Koblenz als Rhein-Mosel-Drehkreuz: starker Markt für Gebrauchtwagen
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Koblenz verbindet gleich mehrere Regionen: Mittelrhein, Mosel und Westerwald. Rund um das
            Deutsche Eck treffen nicht nur zwei Flüsse aufeinander, sondern auch viele Pendlerströme aus
            Lahnstein, Neuwied, Andernach und Bendorf. Genau das prägt den regionalen Fahrzeugmarkt.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Als Behörden- und Bundeswehrstandort gibt es in Koblenz regelmäßig Dienst- und Fuhrparkfahrzeuge,
            die zügig veräußert werden. Gleichzeitig sehen wir viele klassische Pendlerfahrzeuge mit höherer
            Laufleistung, die dennoch einen stabilen Restwert haben.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Unser Service ist auf diesen Markt zugeschnitten: datenbasierte Preisermittlung, kurze Reaktionszeit
            und zuverlässige Abholung vor Ort. So verkaufen Sie Ihr Fahrzeug planbar und ohne Preisverhandlungen
            mit unbekannten Privatinteressenten.
          </p>
        </section>

        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf in allen Koblenzer Stadtteilen und im Umland
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir holen Ihr Fahrzeug kostenlos bei Ihnen ab, auch in Stadtteilen mit schwieriger Parkplatzlage
            oder Hanglagen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Koblenz Stadtteile</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Altstadt', 'Ehrenbreitstein', 'Metternich', 'Karthause', 'Güls', 'Moselweiß', 'Lützel', 'Neuendorf', 'Horchheim', 'Asterstein'].map((district) => (
                  <li key={district} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {district}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Umland & Rhein-Mosel</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Lahnstein', 'Neuwied', 'Andernach', 'Bendorf', 'Mülheim-Kärlich', 'Vallendar', 'Urmitz', 'Kettig'].map((area) => (
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
            So läuft der Autoankauf in Koblenz ab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Online bewerten',
                desc: 'Fahrzeugdaten eingeben und in wenigen Minuten eine erste Preiseinschätzung erhalten.',
              },
              {
                step: '02',
                title: 'Termin abstimmen',
                desc: 'Wir vereinbaren kurzfristig einen Vor-Ort-Termin in Koblenz oder im Umland.',
              },
              {
                step: '03',
                title: 'Verkaufen & Auszahlung',
                desc: 'Besichtigung, Kaufvertrag und Auszahlung am selben Tag. Die Abmeldung übernehmen wir.',
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
              Zulassungsstelle Koblenz: klare Abwicklung ohne Extra-Termin
            </h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-4">
              Für Fahrzeuge mit Koblenzer Kennzeichen übernehmen wir die Abmeldung bei der zuständigen
              Zulassungsbehörde der Stadt Koblenz. Damit sparen Sie Wartezeit und zusätzliche Wege.
            </p>
            <p className="text-slate-300 font-medium leading-relaxed">
              Wenn Ihr Fahrzeug aus dem Umland stammt, klären wir die Zuständigkeit vorab transparent.
              Sie erhalten alle notwendigen Nachweise zur sicheren Dokumentation.
            </p>
          </div>
        </section>

        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf Koblenz vs. Privatverkauf
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
            {[
              { label: 'Verkaufsdauer', ankauf: '1-2 Tage', privat: 'Mehrere Wochen' },
              { label: 'Aufwand', ankauf: 'Niedrig', privat: 'Hoch' },
              { label: 'Sicherheit', ankauf: 'Vertraglich abgesichert', privat: 'Betrugsrisiko' },
              { label: 'Abmeldung', ankauf: 'Übernehmen wir', privat: 'Selbst erledigen' },
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
                  { label: 'Aufwand', ankauf: 'Niedrig', privat: 'Anzeigen, Termine, Verhandlungen' },
                  { label: 'Sicherheit', ankauf: 'Rechtssicherer Kaufvertrag', privat: 'Betrugs- und Ausfallrisiko' },
                  { label: 'Abmeldung', ankauf: 'Durch uns', privat: 'Eigene Behördengänge' },
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

        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Dienstwagen, Behördenfahrzeuge und Exportprofile in Koblenz
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            In Koblenz sehen wir regelmäßig Fahrzeuge aus behördlichem Umfeld, Dienstwagen mit klaren
            Wartungsintervallen und Pendlerfahrzeuge mit höherer Laufleistung. Diese Konstellation ist
            für den Ankauf gut planbar, wenn Unterlagen und Halterdaten vollständig vorliegen.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Zusätzlich treten in der Region häufiger Exportprofile auf, etwa ältere Diesel oder Fahrzeuge
            mit geringerer Inlandsnachfrage. Entscheidend ist dann eine transparente Bewertung nach
            Verwertbarkeit statt pauschaler Listenwerte. So bleibt der Verkauf auch bei Sonderfällen
            wirtschaftlich nachvollziehbar und rechtssicher.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Wartungs- und Nutzungshistorie vor Termin strukturiert vorbereiten',
              'Schlüsselanzahl, Zulassungsbescheinigung und Halterdaten vollständig prüfen',
              'Bekannte Mängel vorab dokumentieren, um Nachverhandlungen zu vermeiden',
              'Abmeldung und Zahlungsnachweis im Übergabeprotokoll klar festhalten',
            ].map((point) => (
              <div key={point} className="text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                {point}
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-4xl mx-auto">
          <FAQSection
            title="Häufige Fragen zum Autoankauf in Koblenz"
            faqs={[...KOBLENZ_FAQS]}
            sectionId="faq-koblenz"
          />

          <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
            <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere Standorte in Ihrer Region</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
              Unser Service ist auch in angrenzenden Städten verfügbar:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/autoankauf-neuwied" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Auch in Neuwied verfügbar
              </Link>
              <Link href="/autoankauf-mainz" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Autoankauf Mainz
              </Link>
              <Link href="/autoankauf-wiesbaden" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Autoankauf Wiesbaden
              </Link>
              <Link href="/autoankauf-koeln" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Autoankauf Köln
              </Link>
              <Link href="/auto-verkaufen" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                → Auto verkaufen
              </Link>
            </div>
          </section>

          <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden border border-slate-700/60 shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Koblenz verkaufen</h2>
              <p className="text-slate-300 font-medium mb-8 max-w-xl mx-auto">
                Kostenlose Bewertung, schnelle Abholung und Auszahlung am Übergabetag.
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

export default AutoankaufKoblenzPage;
