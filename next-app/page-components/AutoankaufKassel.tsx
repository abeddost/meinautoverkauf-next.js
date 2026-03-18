'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { KASSEL_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufKasselPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-44 -right-32 w-[560px] h-[560px] bg-gradient-to-br from-indigo-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[24%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] w-72 h-72 bg-brand-orange/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Kassel - <span className="text-brand-orange">schnell verkaufen in Nordhessen</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Der Fahrzeugmarkt in Kassel ist deutlich von Pendelwegen, regionaler Industrie und der Rolle als
            Verkehrsknoten in Nordhessen geprägt. Viele Halter fahren täglich über das Kasseler Kreuz zwischen A7 und
            A44, nutzen die A49 Richtung Süden oder kombinieren den Arbeitsweg mit Umstieg am Bahnhof
            Kassel-Wilhelmshöhe. Dadurch entstehen unterschiedliche Fahrprofile: klassische Pendlerfahrzeuge mit
            Autobahnanteil, Familienautos mit gemischter Nutzung in den Stadtteilen sowie ältere Zweitwagen für den
            lokalen Alltag. Wer in Kassel verkaufen möchte, braucht deshalb einen Ablauf, der nicht nur schnell ist,
            sondern auch nachvollziehbar und planbar bleibt.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Unser Autoankauf in Kassel setzt genau dort an. Sie starten mit einer kostenlosen Online-Bewertung und
            erhalten eine transparente erste Einschätzung auf Basis aktueller Marktdaten. Danach entscheiden Sie in
            Ruhe, ob Sie den nächsten Schritt gehen möchten. Bei Interesse koordinieren wir einen Termin, prüfen
            Fahrzeugzustand und Unterlagen klar strukturiert und schließen den Ankauf rechtssicher ab. Diese
            Terminlogik spart besonders in einem vollen Arbeitsalltag spürbar Zeit gegenüber einem offenen
            Privatverkauf.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Alltagsauto aus dem Vorderen Westen, Familienfahrzeug aus Bad Wilhelmshöhe oder Pendlerwagen mit hoher
            Laufleistung: Wir bewerten jedes Fahrzeug in Kassel anhand von Zustand, Historie, Ausstattung und lokaler
            Nachfrage statt nach starren Standardtabellen. So bleibt Ihr Verkauf wirtschaftlich realistisch und
            organisatorisch überschaubar.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Kassel verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Unterschiedliche Fahrzeugnutzung je Stadtteil',
                text: 'Im Vorderen Westen und in Bad Wilhelmshöhe sind häufig Pendler- und Familienprofile vertreten, in Niederzwehren zudem viele Alltags- und Zweitfahrzeuge mit gemischter Nutzung.',
              },
              {
                title: 'A7, A44 und A49 als tägliche Verkehrsachsen',
                text: 'Kassel ist ein wichtiger Autobahnknoten. Fahrzeuge mit regelmäßigen Langstreckenprofilen sind typisch und lassen sich bei guter Wartungsdokumentation fair einordnen.',
              },
              {
                title: 'Bahnhof Kassel-Wilhelmshöhe als Umstiegspunkt',
                text: 'Viele Haushalte kombinieren Auto und Bahn im Berufsalltag. Das führt häufig zu Fahrzeugwechseln oder Verkäufen von Zweitwagen.',
              },
              {
                title: 'Wirtschaftsstandort Nordhessen',
                text: 'Mit Universität Kassel und dem Industrieumfeld rund um Baunatal ist die Mobilitätsdynamik hoch. Ein strukturierter Ankaufprozess reduziert hier den Zeitaufwand deutlich.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Kassel in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            In Kassel setzen wir auf einen klaren, dreistufigen Ablauf. Das sorgt dafür, dass Sie keine unnötigen
            Zwischenschritte haben und den Verkaufsprozess vollständig planen können.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online-Bewertung starten',
                text: 'Sie geben Fahrzeugdaten ein und erhalten eine erste unverbindliche Preisorientierung auf Basis aktueller Marktdaten.',
              },
              {
                step: '02',
                title: 'Termin in Kassel abstimmen',
                text: 'Wir koordinieren ein passendes Zeitfenster, prüfen Fahrzeug und Unterlagen transparent und beantworten offene Fragen direkt.',
              },
              {
                step: '03',
                title: 'Verkauf abschließen und Auszahlung',
                text: 'Nach Einigung erfolgt der Kaufvertrag. Die Auszahlung wird zügig veranlasst, auf Wunsch inklusive Unterstützung bei der Abmeldung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Kassel</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            In Kassel zeigt sich ein breiter Fahrzeugmix aus Pendlerautos, familienorientierten Modellen,
            hochkilometrigen Alltagsfahrzeugen und zunehmend elektrifizierten Fahrzeugen. Diese Mischung kommt aus der
            Kombination von Stadtverkehr, Autobahnachsen und Umlandbezug. Eine faire Bewertung muss deshalb immer das
            tatsächliche Nutzungsprofil einbeziehen und nicht nur den reinen Kilometerstand betrachten.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerfahrzeuge zwischen A7 und A44',
                text: 'Fahrzeuge mit regelmäßigen Langstrecken sind in Kassel üblich. Entscheidend sind dabei Wartung, technischer Zustand und nachvollziehbare Historie.',
              },
              {
                title: 'Familien-SUVs und Kombis',
                text: 'In wohngeprägten Stadtteilen dominieren Modelle mit Platz und Alltagstauglichkeit. Ausstattung und Pflege wirken sich deutlich auf den Marktwert aus.',
              },
              {
                title: 'Ältere Alltags- und Zweitwagen',
                text: 'Auch ältere Fahrzeuge können noch einen soliden Restwert haben, wenn Unterlagen vollständig sind und bekannte Mängel transparent dokumentiert werden.',
              },
              {
                title: 'Elektro- und Hybridfahrzeuge',
                text: 'Bei elektrifizierten Fahrzeugen zählen Batteriezustand, Ladehistorie und Serviceunterlagen besonders stark für eine belastbare Preisermittlung.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Bergpark Wilhelmshöhe, Kasseler Kreuz und Bahnhof Wilhelmshöhe</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Kassel ist mit dem Bergpark Wilhelmshöhe nicht nur kulturell bekannt, sondern zugleich ein zentraler
            Mobilitätsstandort in Nordhessen. Rund um das Kasseler Kreuz sowie den Bahnhof Kassel-Wilhelmshöhe ändern
            sich Verkehrsfenster je nach Tageszeit deutlich. Deshalb stimmen wir Termine so ab, dass Übergaben in Ihren
            Alltag passen und keine zusätzlichen Wege verursachen.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Diese regionale Besonderheit zwischen Stadtverkehr und Autobahnkorridor fließt auch in die Bewertung ein,
            damit Preis und Ablauf realistisch bleiben und Sie schnell zu einem verlässlichen Ergebnis kommen.
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
                  { label: 'Zeit bis zum Abschluss', mv: 'Oft 1 bis 2 Tage', privat: 'Häufig mehrere Wochen', handler: 'Abhängig von Ankaufbestand' },
                  { label: 'Planbarkeit', mv: 'Fester Ablauf mit Termin', privat: 'Viele Anfragen und Ausfälle', handler: 'Öffnungszeitengebunden' },
                  { label: 'Preisermittlung', mv: 'Datenbasiert und nachvollziehbar', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
                  { label: 'Kassel-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördentermin bei der Zulassungsstelle Kassel', privat: 'Abmeldung und Nachweise selbst erledigen', handler: 'Service je nach Betrieb unterschiedlich' },
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
              { label: 'Zeit bis zum Abschluss', mv: 'Oft 1 bis 2 Tage', privat: 'Häufig mehrere Wochen', handler: 'Abhängig von Ankaufbestand' },
              { label: 'Planbarkeit', mv: 'Fester Ablauf mit Termin', privat: 'Viele Anfragen und Ausfälle', handler: 'Öffnungszeitengebunden' },
              { label: 'Preisermittlung', mv: 'Datenbasiert und nachvollziehbar', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
              { label: 'Kassel-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördentermin bei der Zulassungsstelle Kassel', privat: 'Abmeldung und Nachweise selbst erledigen', handler: 'Service je nach Betrieb unterschiedlich' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Praktische Vorbereitung für den Verkauf in Kassel</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Damit der Ankaufstermin ohne Verzögerung funktioniert, sollten alle Unterlagen vorab vollständig sein.
            Dazu zählen Zulassungsbescheinigung Teil I und II, alle Schlüssel, HU-Berichte, Wartungsnachweise sowie
            eine transparente Angabe bekannter Mängel. Diese Vorbereitung sorgt für eine klare Bewertung und reduziert
            Rückfragen während der Übergabe.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Bei finanzierten Fahrzeugen ist die frühzeitige Klärung der Restschuld sinnvoll. Gerade bei enger
            Terminplanung zwischen Arbeit und Pendelstrecke verhindert das zusätzliche Schleifen und hält den gesamten
            Prozess vom Erstkontakt bis zur Auszahlung verlässlich planbar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Zulassungsunterlagen und alle Schlüssel vor dem Termin vollständig bereitlegen',
              'Wartungsheft, Rechnungen und HU-Berichte geordnet vorbereiten',
              'Bekannte Schäden offen dokumentieren, damit die Bewertung nachvollziehbar bleibt',
              'Bei Finanzierung Ablöse und Bankfreigabe vorab abstimmen',
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
            Starten Sie jetzt mit der{' '}
            <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlosen Online-Bewertung
            </Link>{' '}
            und erhalten Sie schnell eine belastbare Preisorientierung.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für die regionale Einordnung in Hessen finden Sie auf unserer{' '}
            <Link href="/autoankauf-giessen" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Gießen
            </Link>{' '}
            weitere Informationen zum Ablauf.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Kassel"
          faqs={[...KASSEL_FAQS]}
          sectionId="faq-kassel"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Kassel verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten Ihr Fahrzeug ohne lange Inseratsphase verkaufen? Dann starten Sie jetzt mit der Bewertung und
            nutzen Sie einen transparenten Ablauf für Kassel und Nordhessen.
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

export default AutoankaufKasselPage;
