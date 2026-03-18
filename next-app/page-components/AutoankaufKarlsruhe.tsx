'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { KARLSRUHE_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufKarlsruhePage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-44 -right-32 w-[560px] h-[560px] bg-gradient-to-br from-emerald-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[24%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[9%] right-[9%] w-72 h-72 bg-green-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Karlsruhe - <span className="text-brand-orange">schnell verkaufen in der Technologieregion</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Karlsruhe ist als Technologie- und Hochschulstandort ein sehr dynamischer Fahrzeugmarkt. Zwischen KIT,
            Innenstadt, Gewerbegebieten und den Wohnlagen in Durlach, Mühlburg oder Knielingen entstehen stark
            unterschiedliche Mobilitätsmuster. Viele Fahrzeuge pendeln täglich über A5, B10 oder den Korridor zum
            Karlsruher Dreieck, andere sind als Familienfahrzeuge im Stadt-Umland-Verkehr unterwegs. Diese Mischung aus
            Pendel- und Alltagsnutzung führt dazu, dass standardisierte Online-Schätzungen oft zu kurz greifen, wenn
            Wartung, Ausstattung und reale Nutzung nicht sauber berücksichtigt werden.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Unser Autoankauf in Karlsruhe ist genau auf diese Situation abgestimmt. Sie beginnen mit einer kostenlosen
            Online-Bewertung, erhalten eine transparente Preisorientierung und entscheiden anschließend ohne Druck über
            den nächsten Schritt. Wenn Sie verkaufen möchten, koordinieren wir einen passenden Termin, prüfen Fahrzeug
            und Unterlagen strukturiert und schließen den Ankauf rechtssicher ab. Die Auszahlung erfolgt zügig, damit
            der Prozess auch bei engem Zeitplan verlässlich bleibt.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Pendlerfahrzeug aus dem Oberrheinkorridor, Familienkombi oder älteres Zweitauto: Wir bewerten in
            Karlsruhe fahrzeugbezogen und marktgerecht, nicht pauschal. So erhalten Sie eine belastbare Entscheidung
            ohne langen Inseratsstress.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Karlsruhe verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Unterschiedliche Nutzung in den Stadtteilen',
                text: 'In Durlach sehen wir häufig gemischte Pendel- und Familienprofile, in Mühlburg viele urbane Alltagsfahrten, in Knielingen zusätzlich starke Umlandbezüge.',
              },
              {
                title: 'A5, A8 und Karlsruher Dreieck als Verkehrsachsen',
                text: 'Die Region ist eng mit dem Fernverkehr verbunden. Fahrzeuge mit regelmäßigen Langstreckenprofilen sind typisch und bei dokumentierter Wartung gut bewertbar.',
              },
              {
                title: 'Karlsruhe Hbf als Mobilitätsknoten',
                text: 'Viele Haushalte kombinieren Auto und Bahn. Das führt regelmäßig zu Zweitwagenverkäufen oder gezielten Fahrzeugwechseln je nach Arbeitsweg.',
              },
              {
                title: 'KIT- und Technologieumfeld',
                text: 'Durch Forschungs- und Unternehmensstandorte ist die Fahrzeugrotation hoch. Ein strukturierter Ankaufprozess reduziert organisatorischen Aufwand deutlich.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Karlsruhe in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            In Karlsruhe folgt der Ankauf einem klaren Dreischritt. Dadurch vermeiden Sie unnötige Schleifen und wissen
            von Beginn an, wie der Ablauf zeitlich und inhaltlich aufgebaut ist.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online-Bewertung starten',
                text: 'Sie geben die relevanten Fahrzeugdaten ein und erhalten eine erste unverbindliche Einschätzung.',
              },
              {
                step: '02',
                title: 'Termin in Karlsruhe festlegen',
                text: 'Wir stimmen ein passendes Zeitfenster ab und prüfen Fahrzeug sowie Unterlagen transparent vor Ort.',
              },
              {
                step: '03',
                title: 'Verkauf abschließen',
                text: 'Nach Einigung erfolgt der Kaufvertrag. Die Auszahlung wird schnell veranlasst, auf Wunsch mit Unterstützung bei der Abmeldung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Karlsruhe</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Der Fahrzeugbestand in Karlsruhe ist breit gefächert: Pendlerautos für den Oberrhein-Korridor,
            familienorientierte SUVs und Kombis, ältere Stadtfahrzeuge sowie zunehmend elektrifizierte Modelle. Eine
            seriöse Preisermittlung berücksichtigt daher nicht nur Laufleistung und Baujahr, sondern auch
            Nutzungsmuster, Wartungshistorie und regionale Nachfrage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerfahrzeuge über A5 und A8',
                text: 'Regelmäßige Fahrten Richtung Rhein-Neckar, Pforzheim oder Freiburg sind in Karlsruhe üblich. Wartungsstand und technischer Zustand sind hier zentrale Faktoren.',
              },
              {
                title: 'Familien-SUVs und Kombis',
                text: 'In vielen Wohnlagen werden flexible Fahrzeuge mit guter Alltagstauglichkeit benötigt. Ausstattung und Pflegezustand wirken direkt auf den Marktwert.',
              },
              {
                title: 'Ältere Alltagsfahrzeuge',
                text: 'Auch ältere Fahrzeuge können einen soliden Restwert behalten, wenn Unterlagen komplett sind und bekannte Mängel transparent dokumentiert werden.',
              },
              {
                title: 'Elektro- und Hybridmodelle',
                text: 'Bei elektrifizierten Fahrzeugen zählen Ladehistorie, Batteriezustand und Serviceunterlagen besonders stark für die Bewertung.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Schloss Karlsruhe, KIT und Karlsruher Dreieck</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Karlsruhe kombiniert als Fächerstadt kurze urbane Wege mit starker regionaler Verkehrsanbindung. Rund um
            Karlsruhe Hbf, Durlacher Allee und die Zubringer zum Karlsruher Dreieck variieren Verkehrszeiten deutlich.
            Daher stimmen wir Termine so ab, dass Übergaben in Ihren Tagesablauf passen und zusätzliche Wege minimiert
            werden.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Das Umfeld von KIT und Technologieunternehmen sorgt für regelmäßige Fahrzeugwechsel. Diese lokale Dynamik
            berücksichtigen wir in der Bewertung, damit Preis und Ablauf realistisch bleiben.
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
                  { label: 'Zeit bis zum Verkauf', mv: 'Oft 1 bis 2 Tage', privat: 'Häufig mehrere Wochen', handler: 'Abhängig vom Bestand' },
                  { label: 'Ablauf', mv: 'Transparenter Terminprozess', privat: 'Viele Einzeltermine', handler: 'Öffnungszeitengebunden' },
                  { label: 'Preisfindung', mv: 'Datenbasiert und nachvollziehbar', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
                  { label: 'Karlsruhe-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördentermin in Karlsruhe', privat: 'Abmeldung selbst durchführen', handler: 'Service je nach Betrieb verschieden' },
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
              { label: 'Zeit bis zum Verkauf', mv: 'Oft 1 bis 2 Tage', privat: 'Häufig mehrere Wochen', handler: 'Abhängig vom Bestand' },
              { label: 'Ablauf', mv: 'Transparenter Terminprozess', privat: 'Viele Einzeltermine', handler: 'Öffnungszeitengebunden' },
              { label: 'Preisfindung', mv: 'Datenbasiert und nachvollziehbar', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
              { label: 'Karlsruhe-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördentermin in Karlsruhe', privat: 'Abmeldung selbst durchführen', handler: 'Service je nach Betrieb verschieden' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Praktische Vorbereitung für den Verkauf in Karlsruhe</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Eine gute Vorbereitung beschleunigt den gesamten Ankauf. Sinnvoll sind vollständige Fahrzeugunterlagen,
            alle Schlüssel, aktuelle HU-Berichte, Wartungsnachweise und eine offene Dokumentation bekannter Mängel.
            Damit bleibt die Bewertung belastbar und der Termin effizient.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Bei laufender Finanzierung sollten Restschuld und Ablöse vorab mit der Bank geklärt werden. Das verhindert
            Verzögerungen und erleichtert einen planbaren Abschluss im dichten Pendleralltag rund um Karlsruhe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Fahrzeugpapiere und Schlüssel vollständig vor dem Termin bereitlegen',
              'Wartungsheft, HU-Berichte und Rechnungen geordnet vorbereiten',
              'Bekannte Mängel transparent erfassen, um Nachverhandlungen zu minimieren',
              'Bei Finanzierung Restschuld und Ablöse rechtzeitig abstimmen',
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
            Starten Sie direkt mit der{' '}
            <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlosen Online-Bewertung
            </Link>{' '}
            und erhalten Sie in wenigen Minuten eine erste Preisorientierung.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für die regionale Einordnung im Rhein-Neckar-Raum können Sie zusätzlich unsere{' '}
            <Link href="/autoankauf-heidelberg" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Heidelberg
            </Link>{' '}
            nutzen.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Karlsruhe"
          faqs={[...KARLSRUHE_FAQS]}
          sectionId="faq-karlsruhe"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Karlsruhe verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten Ihr Auto ohne lange Inseratsphase verkaufen? Starten Sie jetzt und nutzen Sie einen
            transparenten Prozess für Karlsruhe und die Region.
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

export default AutoankaufKarlsruhePage;
