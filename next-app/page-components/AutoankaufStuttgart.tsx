'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { STUTTGART_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufStuttgartPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-44 -right-32 w-[560px] h-[560px] bg-gradient-to-br from-lime-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[24%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[9%] right-[9%] w-72 h-72 bg-emerald-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Stuttgart - <span className="text-brand-orange">schnell verkaufen im Großraum Stuttgart</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Stuttgart ist ein besonders dynamischer Fahrzeugmarkt, weil hier Pendlerverkehr, Industrieumfeld und
            anspruchsvolle urbane Mobilität eng zusammenkommen. Stadtteile wie Bad Cannstatt, Vaihingen oder
            Zuffenhausen zeigen unterschiedliche Fahrprofile: tägliche Arbeitswege über B10, B27, A8 und A81,
            familienorientierte Stadt-Umland-Fahrten und Fahrzeuge mit hoher Laufleistung aus dem Berufsverkehr. Wer in
            Stuttgart sein Auto verkaufen möchte, hat deshalb meist ein klares Ziel: einen verlässlichen Ablauf mit
            transparenter Bewertung, statt langwieriger Inserate und unberechenbarer Verhandlungsschleifen.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Genau dafür ist unser Autoankauf in Stuttgart aufgebaut. Sie starten mit einer kostenlosen Online-Bewertung
            und erhalten eine nachvollziehbare erste Preisorientierung. Danach entscheiden Sie ohne Druck, ob Sie
            verkaufen möchten. Bei Interesse koordinieren wir einen Termin, prüfen Fahrzeugzustand und Unterlagen
            sauber strukturiert und schließen den Verkauf rechtssicher ab. Die Auszahlung wird zügig veranlasst, damit
            der Prozess auch im engen Arbeitsalltag zuverlässig planbar bleibt.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Pendlerfahrzeug, Familien-SUV, Leasingrückläufer oder älteres Alltagsauto: In Stuttgart bewerten wir
            nicht pauschal, sondern anhand von Zustand, Historie, Ausstattung und aktueller Marktnachfrage im
            Großraum. Das reduziert Unsicherheit und führt zu einer realistischen, belastbaren Verkaufslösung.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Stuttgart verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Stadtteile mit unterschiedlichen Mobilitätsmustern',
                text: 'In Bad Cannstatt und Vaihingen sind häufig Pendlerfahrzeuge vertreten, in Zuffenhausen und Degerloch sehen wir zudem viele Familien- und Dienstwagenprofile.',
              },
              {
                title: 'A8, A81 sowie B10/B27 als Schlüsselachsen',
                text: 'Der tägliche Verkehr über die Hauptachsen erzeugt klare Laufleistungsprofile. Bei transparenter Wartung bleiben solche Fahrzeuge gut bewertbar.',
              },
              {
                title: 'Stuttgart Hbf als zentraler Pendlerknoten',
                text: 'Viele Haushalte kombinieren Auto und Bahn. Das führt regelmäßig zu Fahrzeugwechseln, Zweitwagenverkäufen oder Umstellungen auf andere Modelle.',
              },
              {
                title: 'Automobilstandort mit hoher Fahrzeugrotation',
                text: 'Durch das Umfeld von Mercedes-Benz, Porsche und Zulieferern ist der Fahrzeugwechsel in der Region besonders dynamisch. Ein strukturierter Ankauf spart Zeit.',
              },
            ].map((item) => (
              <article key={item.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-black text-brand-dark mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Stuttgart in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            In Stuttgart halten wir den Verkaufsprozess bewusst kompakt, damit Sie schnell von der ersten Einschätzung
            zum Abschluss kommen. Drei klare Schritte sorgen für Transparenz und Planbarkeit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online-Bewertung starten',
                text: 'Sie übermitteln die wichtigsten Fahrzeugdaten und erhalten eine erste, unverbindliche Preisorientierung.',
              },
              {
                step: '02',
                title: 'Termin in Stuttgart vereinbaren',
                text: 'Wir stimmen ein passendes Zeitfenster ab und prüfen Fahrzeug sowie Unterlagen transparent vor Ort.',
              },
              {
                step: '03',
                title: 'Verkauf abschließen',
                text: 'Nach Einigung folgt der Kaufvertrag, die Auszahlung wird zügig angestoßen und die Abmeldung auf Wunsch begleitet.',
              },
            ].map((item) => (
              <article key={item.step} className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <p className="text-4xl font-black text-brand-orange/25 mb-2">{item.step}</p>
                <h3 className="font-black text-brand-dark text-base mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Stuttgart</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Stuttgart vereint Stadtverkehr, Autobahnkorridore und ein starkes Automobilumfeld. Entsprechend breit ist
            der Fahrzeugmix: kompakte Pendlerfahrzeuge, Familien-SUVs, ältere Stadtfahrzeuge, Firmenwagen sowie immer
            mehr Elektro- und Hybridmodelle. Eine seriöse Bewertung muss deshalb mehr berücksichtigen als nur Baujahr
            und Laufleistung, nämlich vor allem Nutzungsprofil, Wartungsqualität und regionale Nachfrage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerfahrzeuge im A8/A81-Korridor',
                text: 'Regelmäßige Fahrten zwischen Stuttgart und Umland erzeugen hohe Laufleistungen. Servicehistorie und technischer Zustand sind hier entscheidend für den Marktwert.',
              },
              {
                title: 'Familien-SUVs und Kombis',
                text: 'In vielen Wohnlagen sind größere Fahrzeuge mit hoher Alltagstauglichkeit verbreitet. Ausstattung, Pflege und nachvollziehbare Historie wirken sich stark auf die Nachfrage aus.',
              },
              {
                title: 'Ältere Stadt- und Zweitwagen',
                text: 'Auch ältere Fahrzeuge bleiben im Markt interessant, wenn Unterlagen vollständig sind und bekannte Mängel offen dokumentiert werden.',
              },
              {
                title: 'Elektro- und Hybridmodelle',
                text: 'Bei elektrifizierten Fahrzeugen zählen Batteriezustand, Ladeverhalten und Serviceunterlagen besonders stark für eine belastbare Preisermittlung.',
              },
            ].map((item) => (
              <article key={item.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-black text-brand-dark text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white border border-slate-700/50">
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Stuttgart Hbf, Neckartal und Zuffenhausen</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Stuttgart ist durch Topografie, dichten Berufsverkehr und starke Industriebezüge geprägt. Rund um
            Stuttgart Hbf, Bad Cannstatt und die Zubringer zu A8 und A81 variieren Verkehrszeiten deutlich. Deshalb
            planen wir Termine so, dass Übergaben im Alltag praktikabel bleiben und keine unnötigen Zusatzwege
            entstehen.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Mit Standorten wie Zuffenhausen und Untertürkheim ist die Region automobil stark geprägt. Diese lokale
            Marktdynamik fließt in unsere Bewertung ein, damit Preis und Ablauf realistisch zu Ihrem Fahrzeug passen.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Meinautoverkauf.de vs. Privatverkauf vs. Händler</h2>
          <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-6 py-4 font-black">Kriterium</th>
                  <th className="text-left px-6 py-4 font-black text-brand-orange">Meinautoverkauf.de</th>
                  <th className="text-left px-6 py-4 font-black">Privatverkauf</th>
                  <th className="text-left px-6 py-4 font-black">Lokaler Händler</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Verkaufsdauer', mv: 'Oft 24 bis 48 Stunden', privat: 'Häufig mehrere Wochen', handler: 'Abhängig von Ankaufbedarf' },
                  { label: 'Ablaufklarheit', mv: 'Klare Schritte mit Termin', privat: 'Viele Einzelkontakte und Ausfälle', handler: 'Öffnungszeitengebunden' },
                  { label: 'Preisermittlung', mv: 'Transparent und datenbasiert', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
                  { label: 'Stuttgart-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördentermin bei der Zulassungsstelle Stuttgart', privat: 'Abmeldung selbst organisieren', handler: 'Service nicht immer vollständig' },
                ].map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-3.5 font-semibold text-slate-700">{row.label}</td>
                    <td className="px-6 py-3.5 font-semibold text-green-700">{row.mv}</td>
                    <td className="px-6 py-3.5 font-medium text-slate-600">{row.privat}</td>
                    <td className="px-6 py-3.5 font-medium text-slate-600">{row.handler}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-4 md:hidden">
            {[
              { label: 'Verkaufsdauer', mv: 'Oft 24 bis 48 Stunden', privat: 'Häufig mehrere Wochen', handler: 'Abhängig von Ankaufbedarf' },
              { label: 'Ablaufklarheit', mv: 'Klare Schritte mit Termin', privat: 'Viele Einzelkontakte und Ausfälle', handler: 'Öffnungszeitengebunden' },
              { label: 'Preisermittlung', mv: 'Transparent und datenbasiert', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
              { label: 'Stuttgart-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördentermin bei der Zulassungsstelle Stuttgart', privat: 'Abmeldung selbst organisieren', handler: 'Service nicht immer vollständig' },
            ].map((row) => (
              <article key={row.label} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">{row.label}</h3>
                <p className="text-sm text-green-700 font-semibold mb-1">Meinautoverkauf.de: {row.mv}</p>
                <p className="text-sm text-slate-600 font-medium mb-1">Privatverkauf: {row.privat}</p>
                <p className="text-sm text-slate-500 font-medium">Händler: {row.handler}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Praktische Vorbereitung für den Verkauf in Stuttgart</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Für einen schnellen Terminablauf sollten alle Unterlagen im Vorfeld bereitliegen. Dazu gehören
            Zulassungsbescheinigung Teil I und II, alle Schlüssel, Wartungsnachweise, HU-Berichte und eine transparente
            Angabe bekannter Mängel. Diese Vorbereitung schafft Klarheit und reduziert Rückfragen während der
            Übergabe.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Wenn Ihr Fahrzeug noch finanziert ist, empfiehlt sich die frühzeitige Abstimmung von Restschuld und Ablöse
            mit der Bank. Gerade in Stuttgart mit engem Zeitbudget und dichter Verkehrsplanung hilft das, zusätzliche
            Termine zu vermeiden und den Ablauf vom Erstkontakt bis zur Auszahlung sauber zu steuern.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Zulassungsunterlagen und alle Schlüssel vorab vollständig prüfen',
              'Serviceheft, HU-Berichte und Rechnungen geordnet bereithalten',
              'Bekannte Mängel offen dokumentieren, um Nachverhandlungen zu minimieren',
              'Bei Finanzierung Ablöseprozess mit der Bank vor dem Termin abstimmen',
            ].map((item) => (
              <div key={item} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-black text-brand-dark mb-1">Praxispunkt</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-4">Interne Links für den nächsten Schritt</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Starten Sie mit der{' '}
            <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlosen Online-Bewertung
            </Link>{' '}
            und erhalten Sie schnell eine belastbare Preisorientierung.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für den regionalen Vergleich im Südwesten finden Sie auf unserer{' '}
            <Link href="/autoankauf-heidelberg" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Heidelberg
            </Link>{' '}
            weitere Informationen zum Verkaufsablauf.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Stuttgart"
          faqs={[...STUTTGART_FAQS]}
          sectionId="faq-stuttgart"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Stuttgart verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten Ihr Auto ohne langes Inserat verkaufen? Starten Sie jetzt mit der Bewertung und nutzen Sie
            einen transparenten Ablauf für Stuttgart und den Großraum.
          </p>
          <button
            onClick={onCtaClick}
            className="bg-brand-orange text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-orange-600 transition-colors"
          >
            Kostenlosen Verkaufspreis erhalten
          </button>
        </section>
      </div>
    </div>
  );
};

export default AutoankaufStuttgartPage;
