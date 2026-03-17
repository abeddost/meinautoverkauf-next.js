import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { FRANKENTHAL_FAQS } from '../lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufFrankenthalPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-blue-200/50 to-transparent rounded-full blur-3xl"></div>
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
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-200/50 rounded-full blur-2xl"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            Autoankauf Frankenthal –{' '}
            <span className="text-brand-orange">Schnell verkaufen in der Pfalz</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            Sie möchten Ihr Auto in Frankenthal verkaufen – ohne Inserat, ohne Zeitverlust und zu einem
            fairen Preis? Frankenthal liegt als kreisfreie Stadt im Herzen der Metropolregion Rhein-Neckar,
            direkt an der A61 und nur wenige Minuten von Ludwigshafen und Mannheim entfernt. Viele Pendler,
            BASF-Mitarbeitende und Familien nutzen täglich die gut ausgebauten Verbindungen in die Region –
            was den lokalen Fahrzeugmarkt besonders aktiv und vielseitig macht. Wir kaufen Ihr Fahrzeug
            direkt an: Online bewerten, Termin vereinbaren, Geld erhalten – alles noch am selben Tag.
          </p>

          {/* Advantages box */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-black text-brand-dark mb-5">Ihre Vorteile beim Autoankauf in Frankenthal</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Kostenlose Online-Bewertung in 2 Minuten',
                'Sofortige Auszahlung nach Vertragsunterzeichnung',
                'Kostenlose Abholung in Frankenthal & Rhein-Pfalz-Kreis',
                'Abmeldung bei der Zulassungsstelle Frankenthal inklusive',
                'Ankauf aller Marken & Zustände – auch ohne TÜV',
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

        {/* City context section */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Frankenthal – Industriestadt, Pendlerstandort und Tor zur Pfalz
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Frankenthal (Pfalz) ist weit mehr als eine Durchgangsstation zwischen Mannheim und Worms.
            Die kreisfreie Stadt hat eine eigenständige Industriegeschichte: Unternehmen aus den Bereichen
            Maschinenbau, Chemie und Logistik sind seit Jahrzehnten in Frankenthal ansässig. Gleichzeitig
            ist die Stadt ein bevorzugter Wohnort für Beschäftigte des unmittelbar benachbarten BASF-Werks
            in Ludwigshafen – Europas größtem Chemiewerk. Wer dort arbeitet, lebt häufig im ruhigeren,
            erschwinglicheren Frankenthal und pendelt täglich über die A61 oder mit der S-Bahn RheinNeckar.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Diese Kombination aus eigenem Industriestandort und Pendlercharakter prägt den lokalen
            Fahrzeugmarkt konkret: Es gibt überdurchschnittlich viele Dienstwagen und Firmenfahrzeuge
            mit dokumentierter Scheckheft-Historie, gut gepflegte Kompaktwagen mit mittlerer Laufleistung
            sowie Familien-SUVs aus den ruhigen Wohnlagen rund um Mörsch und Eppstein. Wenn Arbeitsverträge
            enden, Leasinglaufzeiten auslaufen oder Haushalte auf ein Auto reduziert werden, entsteht
            schnell ein Fahrzeug, das unkompliziert verkauft werden soll. Genau das ist unser Spezialgebiet.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Wir bewerten Ihr Fahrzeug auf Basis aktueller Transaktionsdaten – kein Bauchgefühl,
            kein veralteter Listenpreis. Dank der A61 (Anschlussstelle Frankenthal) sind wir schnell
            bei Ihnen, ob in der Kernstadt, in Studernheim oder in Mörsch. Termine auch abends
            oder am Wochenende.
          </p>
        </section>

        {/* Districts */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf in allen Frankenthaler Stadtteilen & Umland
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir holen Ihr Fahrzeug kostenlos ab – egal in welchem Stadtteil oder in welcher Nachbargemeinde
            Sie sich befinden:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Frankenthal Stadtteile</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Kernstadt (Stadtmitte)', 'Mörsch', 'Studernheim', 'Eppstein', 'Flomersheim', 'Lambsheim', 'Laumersheim', 'Obersülzen'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Rhein-Pfalz-Kreis</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Ludwigshafen', 'Schifferstadt', 'Böhl-Iggelheim', 'Mutterstadt', 'Maxdorf', 'Dannstadt', 'Altrip', 'Neuhofen'].map(d => (
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
                {['Mannheim', 'Worms', 'Speyer', 'Heidelberg', 'Neustadt a.d.W.', 'Grünstadt', 'Bad Dürkheim', 'Lambrecht (Pfalz)'].map(d => (
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
            Unser Ablauf in Frankenthal: 3 klare Schritte
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
                desc: 'Wir kommen zu Ihnen nach Frankenthal oder in den Rhein-Pfalz-Kreis. Abholung auch abends oder am Samstag möglich.',
              },
              {
                step: '03',
                title: 'Übergabe & Auszahlung',
                desc: 'Fahrzeugprüfung, Kaufvertrag, Schlüsselübergabe. Das Geld kommt per Überweisung noch am selben Tag. Abmeldung bei der Zulassungsstelle Frankenthal übernehmen wir.',
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
            Fahrzeugtypen in Frankenthal
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir kaufen alle Fahrzeuge – unabhängig von Marke, Alter oder Zustand. Besonders häufig bewerten
            wir in Frankenthal:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendler- und Alltagsfahrzeuge',
                desc: 'Kompaktwagen und Kombis mit mittlerer bis hoher Laufleistung – typisch für den täglichen Weg nach Ludwigshafen oder Mannheim. Wir bewerten transparent nach aktuellem Marktwert.',
              },
              {
                title: 'Familien-SUVs & Kombis',
                desc: 'In den ruhigen Wohnlagen rund um Mörsch und Eppstein sind SUVs und größere Kombis verbreitet. Wir zahlen faire, datenbasierte Preise für gepflegte Familienfahrzeuge.',
              },
              {
                title: 'Ältere Fahrzeuge mit hoher Laufleistung',
                desc: 'Auch Fahrzeuge mit 150.000 km+ haben noch einen soliden Restwert – besonders wenn Export infrage kommt. Wir bewerten ehrlich und ohne Abzüge.',
              },
              {
                title: 'Unfallwagen & Fahrzeuge ohne TÜV',
                desc: 'Wir kaufen auch nicht fahrbereite Fahrzeuge, Unfallwagen oder Autos ohne gültige HU. Vollständige Unterlagen und Eigentumsnachweis vorausgesetzt.',
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

        {/* Dark highlight: Frankenthal industrial identity */}
        <section className="mb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-lg lg:text-xl font-black mb-4">
              Frankenthal: Industriestadt mit aktivem Fahrzeugmarkt
            </h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-4">
              Frankenthal hat eine der dichtesten Industrieflächen unter den kreisfreien Städten in
              Rheinland-Pfalz. Neben ansässigen Maschinenbau- und Logistikunternehmen prägt die unmittelbare
              Nachbarschaft zum BASF-Werk Ludwigshafen den Alltag vieler Einwohner. Typisch für solche
              Standorte: Dienstwagen mit Scheckheft-Historie, Zweitwagen, die nach einem Stellenwechsel
              nicht mehr benötigt werden, und Fahrzeuge, die nach Jahren täglichen Pendlerbetriebs
              effizient und ohne Aufwand verkauft werden sollen. Wir kennen diese Situation und handeln
              entsprechend – schnell, transparent, mit einem Angebot das auf echten Marktdaten basiert.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 font-medium">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>Ankauf von Firmenwagen mit Scheckheft-Historie</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>Abholung entlang A61 und im gesamten Rhein-Pfalz-Kreis</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>Flexible Termine auch abends nach Feierabend</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>Auszahlung am Tag der Übergabe per Überweisung</li>
            </ul>
          </div>
        </section>

        {/* Comparison table */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf Frankenthal im Vergleich: Direktankauf vs. Privatverkauf vs. Händler
          </h2>
          {/* Mobile cards */}
          <div className="grid grid-cols-1 md:hidden gap-4">
            {[
              { label: 'Zeit bis zum Verkauf', ankauf: '1–2 Tage', privat: '3–8 Wochen', handler: 'Schnell, aber Preisabzüge' },
              { label: 'Aufwand', ankauf: 'Minimal – Abholung bei Ihnen', privat: 'Inserate, Besichtigungen, Verhandlungen', handler: 'Fahrt zur Filiale nötig' },
              { label: 'Sicherheit', ankauf: 'Vertraglich gesichert, sofortige Zahlung', privat: 'Betrugsrisiko, Zahlungsausfall möglich', handler: 'Sicher, aber Konditionen unklar' },
              { label: 'Abmeldung', ankauf: 'Wir übernehmen komplett', privat: 'Selbst zuständig', handler: 'Meist selbst zuständig' },
              { label: 'Frankenthal-Vorteil', ankauf: 'Abmeldung FT-Kennzeichen inklusive', privat: 'Amt selbst aufsuchen', handler: 'Kein lokaler Vorteil' },
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
          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-6 py-4 font-black">Kriterium</th>
                  <th className="text-left px-6 py-4 font-black text-brand-orange">Meinautoverkauf.de</th>
                  <th className="text-left px-6 py-4 font-black">Privatverkauf</th>
                  <th className="text-left px-6 py-4 font-black">Händler</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Zeit bis zum Verkauf', ankauf: '1–2 Tage', privat: '3–8 Wochen', handler: 'Schnell, aber Preisabzüge' },
                  { label: 'Aufwand', ankauf: 'Minimal – Abholung bei Ihnen', privat: 'Inserate, Besichtigungen, Verhandlungen', handler: 'Fahrt zur Filiale nötig' },
                  { label: 'Sicherheit', ankauf: 'Vertraglich gesichert, sofortige Zahlung', privat: 'Betrugsrisiko, Zahlungsausfall möglich', handler: 'Sicher, aber Konditionen unklar' },
                  { label: 'Abmeldung', ankauf: 'Wir übernehmen komplett', privat: 'Selbst zuständig', handler: 'Meist selbst zuständig' },
                  { label: 'Frankenthal-Vorteil', ankauf: 'Abmeldung FT-Kennzeichen inklusive', privat: 'Amt selbst aufsuchen', handler: 'Kein lokaler Vorteil' },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-3.5 font-semibold text-slate-700">{row.label}</td>
                    <td className="px-6 py-3.5 font-semibold text-green-700">{row.ankauf}</td>
                    <td className="px-6 py-3.5 font-medium text-slate-500">{row.privat}</td>
                    <td className="px-6 py-3.5 font-medium text-slate-500">{row.handler}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          title="Häufige Fragen zum Autoankauf in Frankenthal"
          faqs={[...FRANKENTHAL_FAQS]}
          sectionId="faq-frankenthal"
        />

        {/* Related pages */}
        <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere Standorte in der Region</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
            Unser Autoankauf-Service steht Ihnen in der gesamten Metropolregion Rhein-Neckar zur Verfügung:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/auto-bewerten', label: '→ Jetzt Auto bewerten' },
              { href: '/autoankauf-mannheim', label: '→ Autoankauf Mannheim' },
              { href: '/autoankauf-ludwigshafen', label: '→ Auch in Ludwigshafen verfügbar' },
              { href: '/autoankauf-worms', label: '→ Autoankauf Worms' },
              { href: '/autoankauf-speyer', label: '→ Autoankauf Speyer' },
              { href: '/autoankauf-heidelberg', label: '→ Autoankauf Heidelberg' },
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
            <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Frankenthal verkaufen</h2>
            <p className="text-slate-300 font-medium mb-8 max-w-xl mx-auto">
              Kostenlose Bewertung in 2 Minuten. Fairer Preis, sofortige Auszahlung. Abholung in der Kernstadt,
              Mörsch, Studernheim und im gesamten Rhein-Pfalz-Kreis.
            </p>
            <button
              onClick={onCtaClick}
              className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
            >
              Kostenlosen Verkaufspreis erhalten
            </button>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Alle Stadtteile', 'Rhein-Pfalz-Kreis', 'Sofort Geld'].map((badge) => (
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

export default AutoankaufFrankenthalPage;
