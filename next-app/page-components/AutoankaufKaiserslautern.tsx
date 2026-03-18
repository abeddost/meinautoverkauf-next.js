'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { KAISERSLAUTERN_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufKaiserslauternPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-red-200/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[25%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[12%] right-[8%] w-80 h-80 bg-orange-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[12%] w-24 h-24 bg-red-200/40 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full"></div>
        <div className="absolute top-24 left-20 w-4 h-4 bg-orange-300 rounded-full"></div>
        <div className="absolute top-[40%] right-[32%] w-3 h-3 bg-red-200 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-5 h-5 bg-orange-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        {/* H1 */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-red-200/40 rounded-full blur-2xl"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            Autoankauf Kaiserslautern –{' '}
            <span className="text-brand-orange">Schnell & Fair</span>{' '}
            in der Pfalz
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            Sie möchten Ihr Auto in Kaiserslautern verkaufen – schnell, sicher und zum fairen Marktpreis?
            Wir kaufen Ihr Fahrzeug direkt an: Online bewerten, Termin vereinbaren und am selben Tag
            Geld erhalten – ohne Inserat, ohne Verhandlung.
          </p>

          {/* Advantages box */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-black text-brand-dark mb-5">Ihre Vorteile beim Autoankauf in Kaiserslautern</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Kostenlose Online-Bewertung in 2 Minuten',
                'Sofortige Auszahlung per Überweisung am Übergabetag',
                'Kostenlose Abholung im gesamten Stadtgebiet & Umland',
                'Abmeldung bei der Zulassungsstelle Kaiserslautern (KL) inklusive',
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

        {/* City identity section */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Kaiserslautern – Universitätsstadt, US-amerikanische Präsenz und Pfälzer Wirtschaftsstandort
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Kaiserslautern ist die größte Stadt der Pfalz und ein vielseitiger Wirtschafts- und
            Bildungsstandort. Die Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau
            bringt jährlich tausende Studierende und Wissenschaftler in die Stadt – viele davon aus dem
            Ausland. Hinzu kommt die ausgeprägte amerikanische Militärpräsenz im Großraum
            Kaiserslautern-Ramstein: Tausende US-Militärangehörige und ihre Familien leben in der Region
            und verkaufen regelmäßig Fahrzeuge – darunter auch importierte amerikanische Modelle.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Kaiserslautern liegt direkt an der A6 (Saarbrücken – Mannheim) und der A63 (Mainz – Kaiserslautern),
            was die Stadt zu einem echten Verkehrsknotenpunkt der Pfalz macht. Ob Studierende, die nach dem
            Abschluss umziehen, internationale Beschäftigte, die die Region verlassen, oder Pendler, die ihr
            Auto wechseln möchten – der Bedarf an schnellem, zuverlässigem Autoankauf ist in Kaiserslautern
            überdurchschnittlich hoch.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Wir sind auf genau diese Situationen spezialisiert: unkomplizierter Ablauf, transparente
            Preisermittlung, sofortige Auszahlung und vollständige Übernahme der Abmeldung bei der
            Zulassungsstelle Kaiserslautern.
          </p>
        </section>

        {/* Warum Kaiserslautern */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Warum lohnt sich der Autoankauf in Kaiserslautern besonders?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: 'RPTU Kaiserslautern-Landau – hohe Fahrzeugfluktuation',
                desc: 'Abschluss, Umzug, Auslandsaufenthalt: Studierende und Wissenschaftler der RPTU verkaufen häufig und schnell. Wir bieten unkomplizierte Abwicklung – ideal für alle, die wenig Zeit haben.',
              },
              {
                title: 'US-Militär & internationale Beschäftigte aus Ramstein',
                desc: 'Im Großraum Kaiserslautern-Ramstein leben viele US-Militärangehörige. Wir kaufen auch importierte und amerikanische Fahrzeuge an – Voraussetzung ist ein klarer Eigentumsnachweis.',
              },
              {
                title: 'A6/A63-Korridor – Anbindung nach Mannheim & Saarbrücken',
                desc: 'Die A6 verbindet Kaiserslautern direkt mit Mannheim (ca. 60 Min.) und Saarbrücken (ca. 45 Min.). Pendler nutzen diese Route täglich – und möchten ihr Fahrzeug wechseln, ohne wochenlang auf Käufer zu warten.',
              },
              {
                title: 'Zulassungsstelle Kaiserslautern (KL) – wir übernehmen alles',
                desc: 'Die Abmeldung Ihres KL-Kennzeichen-Fahrzeugs bei der Zulassungsstelle der Stadt Kaiserslautern übernehmen wir vollständig – kein Amt, kein Wartezimmer, kein Aufwand für Sie.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-black text-brand-dark mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Districts */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf in allen Stadtteilen Kaiserslauterns & der gesamten Westpfalz
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir holen Ihr Fahrzeug kostenlos ab – in jedem Stadtteil und in der gesamten Region:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Kaiserslautern Stadtteile</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Innenstadt', 'Siegelbach', 'Erfenbach', 'Morlautern', 'Einsiedlerhof', 'Hohenecken', 'Erlenbach', 'Dansenberg'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Landkreis Kaiserslautern</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Enkenbach-Alsenborn', 'Otterbach', 'Landstuhl', 'Ramstein-Miesenbach', 'Weilerbach', 'Hochspeyer', 'Mehlingen', 'Bruchmühlbach-Miesau'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Westpfalz & Region</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Pirmasens', 'Zweibrücken', 'Neustadt a.d.W.', 'Bad Dürkheim', 'Rockenhausen', 'Winnweiler', 'Kusel', 'Lauterecken'].map(d => (
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
            So läuft der Autoankauf in Kaiserslautern ab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Online bewerten lassen',
                desc: 'Fahrzeugdaten eingeben und in 2 Minuten eine KI-gestützte Preiseinschätzung erhalten – kostenlos, unverbindlich und ohne Anmeldung. Ideal für Studierende und internationale Beschäftigte.',
              },
              {
                step: '02',
                title: 'Termin vereinbaren',
                desc: 'Wir kommen zu Ihnen – auf dem Campus, an der Wohnadresse oder an einem anderen Wunschort in Kaiserslautern und Umgebung. Auch kurzfristige Termine möglich.',
              },
              {
                step: '03',
                title: 'Übergabe & Sofortzahlung',
                desc: 'Fahrzeugprüfung, Kaufvertrag, Schlüsselübergabe. Auszahlung per Überweisung noch am selben Tag. Die Abmeldung bei der Zulassungsstelle KL übernehmen wir vollständig.',
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
            Welche Fahrzeuge kaufen wir in Kaiserslautern an?
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir kaufen alle Fahrzeuge – unabhängig von Marke, Alter oder Zustand. Besonders häufig bewerten
            wir in Kaiserslautern und der Westpfalz:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Kompaktwagen & Erstfahrzeuge (Studierende)',
                desc: 'RPTU-Studierende verkaufen häufig kompakte Erstfahrzeuge mit mittlerer Laufleistung. Wir bewerten alle Modelle fair – Polo, Golf, Fiesta oder ältere Kleinwagen sind bei uns gerne gesehen.',
              },
              {
                title: 'Importierte Fahrzeuge & US-Modelle',
                desc: 'Durch die Präsenz des US-Militärs im Raum Ramstein werden regelmäßig amerikanisch zugelassene oder importierte Fahrzeuge angeboten. Wir kaufen mit klarem Eigentumsnachweis an.',
              },
              {
                title: 'Pendlerfahrzeuge mit hoher Laufleistung',
                desc: 'Kaiserslautern liegt verkehrsgünstig an A6 und A63. Viele Pendler nach Mannheim, Saarbrücken oder Mainz haben gutmütige, aber hochgefahrene Fahrzeuge – wir bewerten transparent auf Marktbasis.',
              },
              {
                title: 'Unfallwagen & Fahrzeuge ohne TÜV',
                desc: 'Auch nicht fahrbereite Fahrzeuge, Unfallwagen und Autos ohne gültige Hauptuntersuchung kaufen wir an. Vollständige Fahrzeugpapiere vorausgesetzt.',
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

        {/* A6/A63 highlight */}
        <section className="mb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-lg lg:text-xl font-black mb-4">
              Betzenberg, RPTU & Ramstein: Kaiserslautern ist mehr als Bundesligageschichte
            </h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-5">
              Kaiserslautern ist überregional bekannt durch den 1. FC Kaiserslautern und den legendären
              Betzenberg. Doch die Stadt bietet weit mehr: eine lebendige Universitätslandschaft, eine
              starke amerikanische Gemeinschaft aus dem Großraum Ramstein-Kaiserslautern – und ein
              Fahrzeugangebot, das so vielfältig ist wie seine Einwohner. Wir kaufen genau diese Vielfalt an –
              fair, schnell und ohne bürokratischen Aufwand.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 font-medium">
              <div>
                <div className="font-black text-white mb-1.5">Verkehrsanbindung</div>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>A6 Richtung Mannheim (ca. 60 Min.) & Saarbrücken (ca. 45 Min.)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>A63 Richtung Mainz (ca. 70 Min.)</li>
                </ul>
              </div>
              <div>
                <div className="font-black text-white mb-1.5">Ankauf mit KL-Kennzeichen</div>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Kein Aufpreis für Abholung in Landstuhl oder Ramstein-Miesenbach</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Import- & US-Fahrzeuge willkommen</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf Kaiserslautern vs. Privatverkauf: Was lohnt sich mehr?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
            {[
              { label: 'Zeit bis zum Verkauf', ankauf: '1–2 Tage', privat: '3–8 Wochen' },
              { label: 'Aufwand', ankauf: 'Minimal – wir kommen zu Ihnen', privat: 'Inserate, Besichtigungen, Verhandlungen' },
              { label: 'Sicherheit', ankauf: 'Vertraglich gesichert, sofortige Zahlung', privat: 'Betrugsrisiko, Zahlungsausfall möglich' },
              { label: 'Haftung nach Verkauf', ankauf: 'Keine Gewährleistung', privat: 'Mängelhaftung trotz Ausschluss möglich' },
              { label: 'Abmeldung (KL)', ankauf: 'Wir übernehmen bei Zulassungsstelle KL', privat: 'Selbst zuständig, Wartezeit möglich' },
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
                  <th className="text-left px-6 py-4 font-black text-brand-orange">Autoankauf Kaiserslautern</th>
                  <th className="text-left px-6 py-4 font-black">Privatverkauf</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Zeit bis zum Verkauf', ankauf: '1–2 Tage', privat: '3–8 Wochen' },
                  { label: 'Aufwand', ankauf: 'Minimal – wir kommen zu Ihnen', privat: 'Inserate, Besichtigungen, Verhandlungen' },
                  { label: 'Sicherheit', ankauf: 'Vertraglich gesichert, sofortige Zahlung', privat: 'Betrugsrisiko, Zahlungsausfall möglich' },
                  { label: 'Haftung', ankauf: 'Keine Gewährleistung', privat: 'Mängelhaftung möglich' },
                  { label: 'Abmeldung (KL)', ankauf: 'Wir übernehmen bei Zulassungsstelle KL', privat: 'Selbst zuständig' },
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
          title="Häufige Fragen zum Autoankauf in Kaiserslautern"
          faqs={[...KAISERSLAUTERN_FAQS]}
          sectionId="faq-kaiserslautern"
        />

        {/* Related pages */}
        <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere Standorte in der Region</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
            Unser Autoankauf-Service steht Ihnen in der gesamten Pfalz und Rhein-Neckar-Region zur Verfügung:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/auto-bewerten', label: '→ Jetzt kostenlos bewerten' },
              { href: '/autoankauf-mannheim', label: '→ Autoankauf Mannheim' },
              { href: '/autoankauf-worms', label: '→ Autoankauf Worms' },
              { href: '/autoankauf-heidelberg', label: '→ Autoankauf Heidelberg' },
              { href: '/autoankauf-mainz', label: '→ Autoankauf Mainz' },
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
            <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Kaiserslautern verkaufen</h2>
            <p className="text-slate-300 font-medium mb-8 max-w-xl mx-auto">
              Kostenlose Bewertung in 2 Minuten. Sofortige Auszahlung. Abholung direkt bei Ihnen –
              egal ob Innenstadt, Siegelbach oder Landkreis Kaiserslautern.
            </p>
            <button
              onClick={onCtaClick}
              className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
            >
              Kostenlosen Verkaufspreis erhalten
            </button>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Alle Stadtteile', 'Westpfalz', 'Sofort Geld'].map((badge) => (
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

export default AutoankaufKaiserslauternPage;
