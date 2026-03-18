'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { WORMS_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufWormsPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-amber-200/50 to-transparent rounded-full blur-3xl"></div>
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
            Autoankauf Worms –{' '}
            <span className="text-brand-orange">Fairer Preis & Sofortige Auszahlung</span>{' '}
            in der Nibelungenstadt
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            Sie möchten Ihr Auto in Worms verkaufen – schnell, unkompliziert und zu einem fairen Preis? Wir
            kaufen Ihr Fahrzeug direkt an: Online bewerten, Termin vereinbaren, Geld erhalten – alles ohne
            Inserat und ohne Verhandlungsstress.
          </p>

          {/* Advantages box */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-black text-brand-dark mb-5">Ihre Vorteile beim Autoankauf in Worms</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Kostenlose Online-Bewertung in 2 Minuten',
                'Sofortige Auszahlung per Überweisung am Übergabetag',
                'Kostenlose Abholung in ganz Worms & Umkreis',
                'Abmeldung bei der Zulassungsstelle Worms (WO) inklusive',
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
            Worms – Rheinstadt, Weinregion und Knotenpunkt zwischen Mannheim und Mainz
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Worms ist eine der ältesten Städte Deutschlands und weit über die Region hinaus bekannt – als
            Schauplatz der Nibelungensage, als Stadt des berühmten Wormser Doms (St. Peter) und als Herz
            der rheinhessischen Weinregion. Doch Worms ist auch ein lebendiger Wirtschaftsstandort: Der
            Industriepark Worms beherbergt chemische und pharmazeutische Unternehmen, und die direkte
            Rheinquerung macht die Stadt zu einem wichtigen Verkehrsknoten zwischen Hessen und
            Rheinland-Pfalz.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Über die A61 ist Mannheim in ca. 30 Minuten erreichbar, Mainz in etwa 40 Minuten. Diese
            strategische Lage bedeutet: Viele Pendler aus Worms nutzen ihr Fahrzeug täglich intensiv –
            und möchten es irgendwann schnell und unkompliziert verkaufen. Genau das ist unsere Stärke.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Ob gepflegter Pendler-Kombi, älteres Weinbau-Nutzfahrzeug oder gut erhaltener Mittelklassewagen
            aus dem Industriepark-Umfeld: Wir bewerten alle Fahrzeuge transparent, auf Basis aktueller
            Marktdaten – und zahlen sofort am Übergabetag.
          </p>
        </section>

        {/* Warum Worms */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Warum lohnt sich der Autoankauf in Worms besonders?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: 'Zentrale Lage an A61 & A63',
                desc: 'Worms liegt zwischen Mannheim (A61, ca. 30 Min.) und Mainz (A61, ca. 40 Min.). Pendler und Berufspendler schätzen die schnelle Erreichbarkeit – und wir nutzen diese Lage für eine kostenlose Abholung ohne Aufwand.',
              },
              {
                title: 'Weinregion mit vielfältigem Fahrzeugangebot',
                desc: 'Weinbaubetriebe und Landwirtschaft rund um Pfeddersheim, Herrnsheim und Abenheim haben einen hohen Bedarf an robusten Fahrzeugen – und verkaufen diese nach Jahren zuverlässigen Einsatzes. Wir bewerten alle Typen fair.',
              },
              {
                title: 'Industriepark Worms & Chemiebranche',
                desc: 'Beschäftigte im Industriepark Worms – darunter Unternehmen aus der Chemie- und Pharmaindustrie – verkaufen häufig gut gepflegte Firmenwagen oder Dienstfahrzeuge. Wir kaufen mit vollständiger Historie.',
              },
              {
                title: 'Zulassungsstelle Worms (WO) – wir übernehmen alles',
                desc: 'Die Abmeldung Ihres Fahrzeugs bei der Zulassungsstelle der Stadt Worms übernehmen wir vollständig. Kein Behördengang, keine Wartezeit – Sie erhalten alle Unterlagen fertig erledigt zurück.',
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
            Autoankauf in allen Wormser Stadtteilen & dem Landkreis Alzey-Worms
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir holen Ihr Fahrzeug kostenlos ab – egal in welchem Stadtteil oder welcher Gemeinde im Umland:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Worms Stadtteile</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Innenstadt', 'Hochheim', 'Pfeddersheim', 'Herrnsheim', 'Abenheim', 'Horchheim', 'Rheindürkheim', 'Heppenheim'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Landkreis Alzey-Worms</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Alzey', 'Osthofen', 'Westhofen', 'Bechtheim', 'Monsheim', 'Flonheim', 'Gau-Odernheim', 'Eckelsheim'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Region & Nachbarstädte</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Frankenthal', 'Ludwigshafen', 'Mannheim', 'Mainz', 'Oppenheim', 'Speyer', 'Lampertheim', 'Bürstadt'].map(d => (
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
            So läuft der Autoankauf in Worms ab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Online bewerten lassen',
                desc: 'Fahrzeugdaten in 2 Minuten eingeben und eine KI-gestützte Preiseinschätzung erhalten – kostenlos, unverbindlich und direkt auf Ihr Smartphone oder den PC.',
              },
              {
                step: '02',
                title: 'Termin vereinbaren',
                desc: 'Wir kommen zu Ihnen – nach Hause, an Ihren Arbeitsplatz im Industriepark oder an einen anderen Wunschort in Worms oder dem Umland. Auch abends und samstags.',
              },
              {
                step: '03',
                title: 'Übergabe & Sofortzahlung',
                desc: 'Kurze Fahrzeugprüfung, Kaufvertrag, Schlüsselübergabe. Auszahlung per Überweisung noch am selben Tag. Die Abmeldung bei der Zulassungsstelle Worms (WO) übernehmen wir.',
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
            Welche Fahrzeuge kaufen wir in Worms an?
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir kaufen alle Fahrzeuge – unabhängig von Marke, Alter oder Zustand. Besonders häufig bewerten
            wir in Worms und der Rheinregion:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerfahrzeuge & Mittelklasse-Kombis',
                desc: 'Die A61-Achse zwischen Mannheim und Mainz macht Worms zur Pendlerstadt. Gut erhaltene Kombis und Limousinen mit 100.000–180.000 km Laufleistung haben oft noch einen soliden Marktwert.',
              },
              {
                title: 'Nutzfahrzeuge & Transporter aus der Weinregion',
                desc: 'Betriebe rund um Pfeddersheim, Herrnsheim und Abenheim setzen Kleintransporter, Sprinter und Pickup-Trucks ein. Wir bewerten alle gewerblich genutzten Fahrzeuge – transparent und ohne Abzüge.',
              },
              {
                title: 'Firmenwagen aus dem Industriepark Worms',
                desc: 'Gut gepflegte Dienstwagen aus chemischen oder pharmazeutischen Unternehmen des Industrieparks haben häufig eine lückenlose Wartungshistorie und erzielen entsprechend faire Preise.',
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

        {/* Rhein & A61 highlight */}
        <section className="mb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-lg lg:text-xl font-black mb-4">
              Worms: Rheinquerung und A61-Korridor – perfekt für schnellen Autoverkauf
            </h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-5">
              Worms liegt direkt am Rhein und verbindet Hessen mit Rheinland-Pfalz. Die Nibelungenbrücke ist
              eine der wenigen Rheinquerungen in der Region – ein geografischer Vorteil, der Worms zur
              wichtigen Drehscheibe zwischen den Metropolregionen Frankfurt/Rhein-Main und Rhein-Neckar macht.
              Wir nutzen diese Anbindung: Fahrzeugabholung in Worms, Ludwigshafen oder Frankenthal – ohne
              Aufpreis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 font-medium">
              <div>
                <div className="font-black text-white mb-1.5">Verkehrsanbindung</div>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>A61 Richtung Mannheim (ca. 30 Min.) und Mainz (ca. 40 Min.)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Nibelungenbrücke – direkte Rheinquerung nach Hessen</li>
                </ul>
              </div>
              <div>
                <div className="font-black text-white mb-1.5">Ankauf auch mit Wormser Kennzeichen (WO)</div>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Kein Aufpreis für Abholung in Osthofen oder Alzey</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Grenzübergreifender Ankauf mit MZ-, LU- oder GER-Kennzeichen möglich</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf Worms vs. Privatverkauf: Was lohnt sich mehr?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
            {[
              { label: 'Zeit bis zum Verkauf', ankauf: '1–2 Tage', privat: '3–8 Wochen' },
              { label: 'Aufwand', ankauf: 'Minimal – wir kommen zu Ihnen', privat: 'Inserate, Besichtigungen, Verhandlungen' },
              { label: 'Sicherheit', ankauf: 'Vertraglich gesichert, sofortige Zahlung', privat: 'Betrugsrisiko, Zahlungsausfall möglich' },
              { label: 'Haftung nach Verkauf', ankauf: 'Keine Gewährleistung', privat: 'Mängelhaftung trotz Ausschluss möglich' },
              { label: 'Abmeldung (WO)', ankauf: 'Wir übernehmen bei Zulassungsstelle Worms', privat: 'Selbst zuständig, Wartezeit möglich' },
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
                  <th className="text-left px-6 py-4 font-black text-brand-orange">Autoankauf Worms</th>
                  <th className="text-left px-6 py-4 font-black">Privatverkauf</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Zeit bis zum Verkauf', ankauf: '1–2 Tage', privat: '3–8 Wochen' },
                  { label: 'Aufwand', ankauf: 'Minimal – wir kommen zu Ihnen', privat: 'Inserate, Besichtigungen, Verhandlungen' },
                  { label: 'Sicherheit', ankauf: 'Vertraglich gesichert, sofortige Zahlung', privat: 'Betrugsrisiko, Zahlungsausfall möglich' },
                  { label: 'Haftung', ankauf: 'Keine Gewährleistung', privat: 'Mängelhaftung möglich' },
                  { label: 'Abmeldung (WO)', ankauf: 'Wir übernehmen bei Zulassungsstelle Worms', privat: 'Selbst zuständig' },
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
          title="Häufige Fragen zum Autoankauf in Worms"
          faqs={[...WORMS_FAQS]}
          sectionId="faq-worms"
        />

        {/* Related pages */}
        <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere Standorte in der Region</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
            Unser Autoankauf-Service steht Ihnen in der gesamten Rhein-Neckar-Region und Rhein-Main zur Verfügung:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/auto-bewerten', label: '→ Jetzt kostenlos bewerten' },
              { href: '/autoankauf-mannheim', label: '→ Autoankauf Mannheim' },
              { href: '/autoankauf-frankfurt', label: '→ Autoankauf Frankfurt' },
              { href: '/autoankauf-mainz', label: '→ Autoankauf Mainz' },
              { href: '/autoankauf-darmstadt', label: '→ Autoankauf Darmstadt' },
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
            <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Worms verkaufen</h2>
            <p className="text-slate-300 font-medium mb-8 max-w-xl mx-auto">
              Kostenlose Bewertung in 2 Minuten. Sofortige Auszahlung. Abholung direkt bei Ihnen – egal ob
              Innenstadt, Hochheim oder Landkreis Alzey-Worms.
            </p>
            <button
              onClick={onCtaClick}
              className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
            >
              Kostenlosen Verkaufspreis erhalten
            </button>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Alle Stadtteile', 'Nibelungenstadt', 'Sofort Geld'].map((badge) => (
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

export default AutoankaufWormsPage;
