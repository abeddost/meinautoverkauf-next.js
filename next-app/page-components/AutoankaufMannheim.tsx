'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { MANNHEIM_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufMannheimPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-blue-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[25%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[12%] right-[8%] w-80 h-80 bg-orange-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[12%] w-24 h-24 bg-blue-200/40 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full"></div>
        <div className="absolute top-24 left-20 w-4 h-4 bg-orange-300 rounded-full"></div>
        <div className="absolute top-[40%] right-[32%] w-3 h-3 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-5 h-5 bg-orange-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        {/* H1 */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-200/40 rounded-full blur-2xl"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            Autoankauf Mannheim –{' '}
            <span className="text-brand-orange">Schnell, fair & direkt</span>{' '}
            im Rhein-Neckar-Raum
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            Sie möchten Ihr Auto in Mannheim verkaufen – ohne Inserat, ohne Zeitverlust und zu einem fairen
            Preis? Wir kaufen Ihr Fahrzeug direkt an: Online bewerten, Termin vereinbaren, Geld erhalten –
            alles noch am selben Tag.
          </p>

          {/* Advantages box */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-black text-brand-dark mb-5">Ihre Vorteile beim Autoankauf in Mannheim</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Kostenlose Online-Bewertung in 2 Minuten',
                'Sofortige Auszahlung per Überweisung am Übergabetag',
                'Kostenlose Abholung in ganz Mannheim & Rhein-Neckar-Kreis',
                'Abmeldung beim Straßenverkehrsamt Mannheim inklusive',
                'Ankauf aller Marken, Modelle und Zustände',
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

        {/* Quadratestadt section */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Mannheim – Pendlerknoten und Wirtschaftsstandort im Herzen der Metropolregion
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Mannheim, die Quadratestadt am Zusammenfluss von Rhein und Neckar, zählt zu den wichtigsten
            Wirtschafts- und Verkehrszentren Süddeutschlands. Mit starken Industrieunternehmen wie BASF,
            John Deere und Roche sowie einem bedeutenden Hafen ist Mannheim ein Knotenpunkt für Berufspendler
            aus dem gesamten Rhein-Neckar-Raum.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Diese Wirtschaftsstruktur spiegelt sich im Fahrzeugmarkt wider: In Mannheim gibt es eine
            überdurchschnittlich hohe Anzahl an gut gepflegten Firmen- und Dienstwagen, zuverlässigen
            Pendlerfahrzeugen sowie Fahrzeugen aus dem Flottenbestand großer Unternehmen. Genau diese
            Fahrzeuge bewerten wir täglich – auf Basis aktueller Marktdaten, transparent und fair.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Dazu kommt die einzigartige geografische Lage: Mannheim liegt direkt an der Grenze zu
            Rheinland-Pfalz. Über die A5, A6 und A656 ist die gesamte Metropolregion in kurzer Zeit
            erreichbar. Wir holen Fahrzeuge im gesamten Raum ab – ohne Aufpreis.
          </p>
        </section>

        {/* Districts */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf in allen Mannheimer Stadtteilen & der gesamten Metropolregion
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir holen Ihr Fahrzeug kostenlos ab – egal wo in Mannheim oder der Region Sie sich befinden:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Mannheim Stadtteile</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Innenstadt (Quadrate)', 'Neckarstadt-Ost', 'Neckarstadt-West', 'Lindenhof', 'Rheinau', 'Sandhofen', 'Käfertal', 'Vogelstang'].map(d => (
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
                {['Schwetzingen', 'Hockenheim', 'Weinheim', 'Viernheim', 'Ladenburg', 'Eppelheim', 'Wiesloch', 'Sinsheim'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Metropolregion Umland</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Ludwigshafen', 'Heidelberg', 'Neustadt a.d.W.', 'Frankenthal', 'Speyer', 'Worms', 'Bensheim', 'Darmstadt'].map(d => (
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
            So läuft der Autoankauf in Mannheim ab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Online bewerten',
                desc: 'Fahrzeugdaten eingeben und in 2 Minuten eine KI-gestützte Preiseinschätzung erhalten – kostenlos und unverbindlich.',
              },
              {
                step: '02',
                title: 'Termin vereinbaren',
                desc: 'Wir vereinbaren einen Vor-Ort-Termin bei Ihnen – auch abends oder am Wochenende. Die Besichtigung dauert ca. 15–20 Minuten.',
              },
              {
                step: '03',
                title: 'Übergabe & Auszahlung',
                desc: 'Fahrzeugprüfung, Kaufvertrag, Schlüsselübergabe. Das Geld kommt per Überweisung noch am selben Tag. Abmeldung beim Straßenverkehrsamt Mannheim übernehmen wir.',
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
            Welche Fahrzeuge kaufen wir in Mannheim an?
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir kaufen alle Fahrzeuge – unabhängig von Marke, Alter oder Zustand. Besonders häufig bewerten
            wir in Mannheim:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Firmenwagen & Flottenkraftfahrzeuge',
                desc: 'Gut gepflegte Dienstwagen aus dem BASF-, John-Deere- oder Roche-Umfeld erzielen oft sehr gute Preise. Wir kaufen mit vollständiger Flottenhistorie.',
              },
              {
                title: 'Pendlerfahrzeuge mit hoher Laufleistung',
                desc: 'Mannheim ist Pendlerstadt. Zuverlässige Pendlerautos mit 120.000 km+ haben oft noch einen soliden Restwert – besonders bei lückenloser Wartung.',
              },
              {
                title: 'Fahrzeuge aus Rheinland-Pfalz',
                desc: 'Wir kaufen auch Fahrzeuge mit LU-, NW-, GER- oder NW-Kennzeichen an. Wohnort und Eigentumsnachweis entscheiden – nicht das Nummernschild.',
              },
              {
                title: 'Unfallwagen & Fahrzeuge ohne TÜV',
                desc: 'Auch nicht fahrbereite Fahrzeuge, Unfallwagen und Autos ohne gültige HU kaufen wir an. Vollständige Unterlagen vorausgesetzt.',
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

        {/* Rhein-Neckar highlight */}
        <section className="mb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-lg lg:text-xl font-black mb-4">
              Bestens vernetzt: Autoankauf im gesamten Rhein-Neckar-Raum
            </h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-5">
              Mannheim ist das Zentrum einer der größten Metropolregionen Deutschlands. Dank der A5, A6 und
              A656 sowie dem dichten Straßennetz rund um Rhein und Neckar erreichen wir jeden Standort in
              der Region schnell und ohne Umwege.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 font-medium">
              <div>
                <div className="font-black text-white mb-1.5">Verkehrsanbindung</div>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>A5 (Frankfurt–Karlsruhe), A6 (Saarbrücken–Nürnberg)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>A656 direkt nach Heidelberg (ca. 20 Min.)</li>
                </ul>
              </div>
              <div>
                <div className="font-black text-white mb-1.5">Grenzlage Rheinland-Pfalz</div>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Ankauf auch mit LU- und NW-Kennzeichen</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Kein Aufpreis für Abholung in Ludwigshafen</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf Mannheim vs. Privatverkauf: Was lohnt sich mehr?
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
          title="Häufige Fragen zum Autoankauf in Mannheim"
          faqs={[...MANNHEIM_FAQS]}
          sectionId="faq-mannheim"
        />

        {/* Related pages */}
        <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere Standorte in der Region</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
            Unser Autoankauf-Service steht Ihnen in der gesamten Metropolregion und Rhein-Main zur Verfügung:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/autoankauf-heidelberg', label: '→ Autoankauf Heidelberg' },
              { href: '/autoankauf-ludwigshafen', label: '→ Auch in Ludwigshafen verfügbar' },
              { href: '/autoankauf-frankfurt', label: '→ Autoankauf Frankfurt' },
              { href: '/autoankauf-darmstadt', label: '→ Autoankauf Darmstadt' },
              { href: '/autoankauf-wiesbaden', label: '→ Autoankauf Wiesbaden' },
              { href: '/autoankauf-weinheim', label: '→ Auch in Weinheim verfügbar' },
              { href: '/autoankauf-worms', label: '→ Auch in Worms verfügbar' },
              { href: '/autoankauf-kaiserslautern', label: '→ Auch in Kaiserslautern verfügbar' },
              { href: '/autoankauf-speyer', label: '→ Auch in Speyer verfügbar' },
              { href: '/autoankauf-neustadt-weinstrasse', label: '→ Auch in Neustadt an der Weinstraße verfügbar' },
              { href: '/autoankauf-frankenthal', label: '→ Auch in Frankenthal verfügbar' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
            <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Mannheim verkaufen</h2>
            <p className="text-slate-300 font-medium mb-8 max-w-xl mx-auto">
              Kostenlose Bewertung in 2 Minuten. Sofortige Auszahlung. Abholung direkt bei Ihnen – egal ob
              Innenstadt, Neckarstadt oder Rhein-Neckar-Kreis.
            </p>
            <button
              onClick={onCtaClick}
              className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
            >
              Kostenlosen Verkaufspreis erhalten
            </button>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Alle Stadtteile', 'Rhein-Neckar-Raum', 'Sofort Geld'].map((badge) => (
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

export default AutoankaufMannheimPage;
