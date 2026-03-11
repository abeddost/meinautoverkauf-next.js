import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { HEIDELBERG_FAQS } from '../lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufHeidelbergPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-amber-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[25%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[12%] right-[8%] w-80 h-80 bg-orange-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[12%] w-24 h-24 bg-amber-200/40 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full"></div>
        <div className="absolute top-24 left-20 w-4 h-4 bg-orange-300 rounded-full"></div>
        <div className="absolute top-[40%] right-[32%] w-3 h-3 bg-amber-200 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-5 h-5 bg-orange-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        {/* H1 */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-amber-200/40 rounded-full blur-2xl"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            Autoankauf Heidelberg –{' '}
            <span className="text-brand-orange">Ihr zuverlässiger Partner</span>{' '}
            in der Universitätsstadt
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            Sie möchten Ihr Auto in Heidelberg verkaufen – schnell, sicher und ohne langen Aufwand? Wir
            kaufen Ihr Fahrzeug direkt an: Online bewerten, Angebot erhalten, Übergabe vereinbaren.
            Die Auszahlung erfolgt noch am selben Tag – transparent und ohne Inserat.
          </p>

          {/* Advantages box */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-black text-brand-dark mb-5">Ihre Vorteile beim Autoankauf in Heidelberg</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Kostenlose Online-Bewertung in 2 Minuten',
                'Express-Auszahlung per Banküberweisung am Übergabetag',
                'Kostenlose Abholung in ganz Heidelberg & Rhein-Neckar-Kreis',
                'Abmeldung beim Straßenverkehrsamt Heidelberg inklusive',
                'Ankauf aller Marken, Baujahre und Zustände',
                'Flexible Abend- und Wochenendtermine verfügbar',
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

        {/* Universitätsstadt section */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Heidelberg – Universitätsstadt mit einem besonderen Fahrzeugmarkt
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Heidelberg zählt zu den bekanntesten Universitätsstädten Deutschlands. Die Ruprecht-Karls-Universität,
            die Pädagogische Hochschule, das Deutsche Krebsforschungszentrum (DKFZ) und das European Molecular
            Biology Laboratory (EMBL) ziehen Jahr für Jahr Tausende von Studierenden und Forschenden aus aller
            Welt an. Diese hohe Fluktuation prägt den lokalen Fahrzeugmarkt nachhaltig.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Wer nach dem Studienabschluss weiterzieht, ein Forschungsaufenthalt endet oder eine Stelle in
            einer anderen Stadt antritt, braucht oft einen schnellen, unkomplizierten Weg, das eigene Fahrzeug
            zu verkaufen. Genau hier setzen wir an: Kein Inserat, kein Warten auf Käufer, keine Verhandlungen.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Zusätzlich liegt Heidelberg mit direkter A656-Anbindung zwischen Mannheim und dem SAP-Campus in
            Walldorf – ein Korridor mit überdurchschnittlich vielen gut gepflegten Firmenfahrzeugen und
            Leasingrückläufern. Wir kennen diesen Markt und bewerten Ihr Fahrzeug auf Basis aktueller
            Transaktionsdaten – fair, schnell und ohne Umwege.
          </p>
        </section>

        {/* Districts */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf in allen Heidelberger Stadtteilen & Rhein-Neckar-Kreis
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir holen Ihr Fahrzeug kostenlos ab – egal in welchem Stadtteil oder in welcher Nachbargemeinde
            Sie sich befinden:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Heidelberg Stadtteile</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Altstadt', 'Neuenheim', 'Handschuhsheim', 'Rohrbach', 'Kirchheim', 'Bahnstadt', 'Bergheim', 'Ziegelhausen'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Rhein-Neckar-Kreis</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Leimen', 'Sandhausen', 'Schwetzingen', 'Dossenheim', 'Schriesheim', 'Eppelheim', 'Neckargemünd', 'Bammental'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Technologiekorridor</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Walldorf (SAP)', 'Wiesloch', 'Mannheim', 'Hockenheim', 'Sinsheim', 'Bruchsal', 'Kraichtal', 'Bad Schönborn'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3-step process */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-8">
            So einfach läuft der Autoverkauf in Heidelberg ab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Online bewerten',
                desc: 'Fahrzeugdaten eingeben, in 2 Minuten ein KI-gestütztes Angebot erhalten – vollständig kostenlos und ohne Verpflichtung.',
              },
              {
                step: '02',
                title: 'Termin vereinbaren',
                desc: 'Wir kommen zu Ihnen nach Heidelberg oder in den Rhein-Neckar-Kreis. Auch Abendtermine und Samstage sind möglich.',
              },
              {
                step: '03',
                title: 'Übergabe & sofortige Zahlung',
                desc: 'Fahrzeugprüfung, Kaufvertrag, Übergabe. Das Geld ist noch am selben Tag auf Ihrem Konto. Abmeldung beim Straßenverkehrsamt Heidelberg übernehmen wir.',
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

        {/* Vehicle categories */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Welche Fahrzeuge kaufen wir in Heidelberg an?
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir kaufen alle Fahrzeuge – unabhängig von Marke, Baujahr oder Zustand. In Heidelberg bewerten
            wir besonders häufig:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Studierenden-Fahrzeuge & Erstfahrzeuge',
                desc: 'Kleinwagen, ältere Modelle, hohe Laufleistung – kein Problem. Schneller Verkauf beim Studienabschluss oder Umzug, ohne Inserat und ohne Wartezeit.',
              },
              {
                title: 'Firmenwagen & SAP-Leasingrückläufer',
                desc: 'Gut gepflegte Dienstwagen aus dem Technologiekorridor Heidelberg–Walldorf erzielen sehr gute Preise. Wir kaufen mit oder ohne Scheckheft.',
              },
              {
                title: 'Fahrzeuge internationaler Halter',
                desc: 'DKFZ-, EMBL- oder US-Army-Mitarbeitende: Wir kaufen auch Fahrzeuge mit kurzer deutscher Zulassungsgeschichte oder ausländischem Vorbesitz.',
              },
              {
                title: 'Defekte Fahrzeuge & ohne HU',
                desc: 'Nicht fahrbereite Autos, Unfallwagen und Fahrzeuge ohne gültige Hauptuntersuchung kaufen wir an. Vollständige Unterlagen vorausgesetzt.',
              },
            ].map((cat) => (
              <div key={cat.title} className="flex gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-black text-brand-dark mb-1 text-sm">{cat.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Students & international staff highlight */}
        <section className="mb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-lg lg:text-xl font-black mb-4">
              Für Studierende, Forschende & internationale Fachkräfte in Heidelberg
            </h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-5">
              Ob Studienabschluss an der Ruprecht-Karls-Universität, Projektende am DKFZ oder Versetzung
              nach einem EMBL-Forschungsaufenthalt – wir kaufen Ihr Fahrzeug schnell und unkompliziert an.
              Kein Aufwand mit Inseraten, kein Risiko durch Privatverkauf.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 font-medium">
              <div>
                <div className="font-black text-white mb-1.5">Studierende & Absolventen</div>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Schneller Verkauf vor Umzug oder Auslandspraktikum</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Faire Preise auch für ältere Erstfahrzeuge</li>
                </ul>
              </div>
              <div>
                <div className="font-black text-white mb-1.5">Internationale Fachkräfte</div>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Ankauf auch mit ausländischer Zulassung</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Klarer, rechtssicherer Kaufvertrag auf Deutsch</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf Heidelberg vs. Privatverkauf im Vergleich
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
            {[
              { label: 'Zeit bis zum Verkauf', ankauf: '1–2 Tage', privat: '3–8 Wochen' },
              { label: 'Aufwand', ankauf: 'Minimal – wir kommen zu Ihnen', privat: 'Inserate, Besichtigungen, Verhandlungen' },
              { label: 'Sicherheit', ankauf: 'Vertraglich gesichert, sofortige Zahlung', privat: 'Betrugsrisiko, Zahlungsausfall möglich' },
              { label: 'Haftung nach Verkauf', ankauf: 'Keine Gewährleistung', privat: 'Mängelhaftung trotz Ausschluss möglich' },
              { label: 'Abmeldung', ankauf: 'Wir übernehmen komplett', privat: 'Selbst zuständig' },
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
                  { label: 'Zeit bis zum Verkauf', ankauf: '1–2 Tage', privat: '3–8 Wochen' },
                  { label: 'Aufwand', ankauf: 'Minimal – wir kommen zu Ihnen', privat: 'Inserate, Besichtigungen, Verhandlungen' },
                  { label: 'Sicherheit', ankauf: 'Vertraglich gesichert, sofortige Zahlung', privat: 'Betrugsrisiko, Zahlungsausfall möglich' },
                  { label: 'Haftung', ankauf: 'Keine Gewährleistung', privat: 'Mängelhaftung möglich' },
                  { label: 'Abmeldung', ankauf: 'Wir übernehmen komplett', privat: 'Selbst zuständig' },
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

        {/* FAQ */}
        <FAQSection
          title="Häufige Fragen zum Autoankauf in Heidelberg"
          faqs={[...HEIDELBERG_FAQS]}
          sectionId="faq-heidelberg"
        />

        {/* Related pages */}
        <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere Standorte in der Region</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
            Unser Autoankauf-Service ist in der gesamten Metropolregion Rhein-Neckar verfügbar:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/autoankauf-mannheim', label: '→ Autoankauf Mannheim' },
              { href: '/autoankauf-frankfurt', label: '→ Autoankauf Frankfurt' },
              { href: '/autoankauf-darmstadt', label: '→ Autoankauf Darmstadt' },
              { href: '/autoankauf-wiesbaden', label: '→ Autoankauf Wiesbaden' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden border border-slate-700/60 shadow-2xl">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Heidelberg verkaufen</h2>
            <p className="text-slate-300 font-medium mb-8 max-w-xl mx-auto">
              Kostenlose Bewertung in 2 Minuten. Fairer Preis, sofortige Auszahlung. Abholung direkt bei
              Ihnen – egal ob Altstadt, Rohrbach oder Rhein-Neckar-Kreis.
            </p>
            <button
              onClick={onCtaClick}
              className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
            >
              Kostenlosen Verkaufspreis erhalten
            </button>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Alle Stadtteile', 'Rhein-Neckar-Kreis', 'Express-Auszahlung'].map((badge) => (
                <span key={badge} className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoankaufHeidelbergPage;
