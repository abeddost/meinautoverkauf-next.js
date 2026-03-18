'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { BENSHEIM_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufBensheimPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-44 -right-32 w-[540px] h-[540px] bg-gradient-to-br from-emerald-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[24%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] w-72 h-72 bg-brand-orange/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Bensheim - <span className="text-brand-orange">schnell verkaufen an der Bergstraße</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Bensheim liegt in einem Fahrzeugmarkt, der von kurzen Wegen innerhalb der Stadt und gleichzeitig von
            intensiven Pendelbewegungen nach Darmstadt, Mannheim und in den Rhein-Neckar-Raum lebt. Viele Halter
            fahren werktags über die A5 oder A67, nutzen die B3 für regionale Wege und kombinieren das Auto mit dem
            Bahnhof Bensheim. Genau dadurch entstehen in Bensheim sehr unterschiedliche Fahrzeugprofile: kompakte
            Pendlerfahrzeuge mit hoher Jahreslaufleistung, Familienautos mit Mischbetrieb und ältere Zweitwagen für
            lokale Alltagsfahrten.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Wer in dieser Lage sein Auto verkauft, möchte in der Regel einen klaren, verlässlichen Prozess statt
            mehrwöchiger Inseratsphasen mit ungewissem Ausgang. Unser Autoankauf in Bensheim beginnt deshalb mit einer
            kostenlosen Online-Bewertung und führt in festen Schritten zum Abschluss: transparente Einschätzung,
            abgestimmter Termin, rechtssicherer Kaufvertrag und zügige Auszahlung. Das passt vor allem dann, wenn der
            Verkauf parallel zu Beruf, Familie und Pendelalltag organisiert werden muss.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Fahrzeug aus Auerbach, Fehlheim oder Schwanheim: Wir bewerten nicht pauschal, sondern anhand von
            Zustand, Ausstattung, Servicehistorie und aktueller Nachfrage im Bergstraßen-Korridor. So bleibt der
            Verkauf in Bensheim nachvollziehbar, planbar und ohne unnötige Umwege.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Bensheim verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Stadtteile mit klaren Nutzungsmustern',
                text: 'In Auerbach sehen wir häufig Pendlerfahrzeuge mit Autobahnprofil, in Fehlheim und Schwanheim oft Familienfahrzeuge mit gemischten Fahrten zwischen Schule, Einkauf und Arbeitsweg.',
              },
              {
                title: 'A5, A67 und B3 prägen die Laufleistung',
                text: 'Durch die Nähe zu zwei Autobahnen entstehen viele Fahrzeuge mit regelmäßigen Fern- und Pendelstrecken. Bei sauberer Wartung sind diese Fahrzeuge regional weiterhin gut vermarktbar.',
              },
              {
                title: 'Bahnhof Bensheim als Umstiegspunkt',
                text: 'Viele Haushalte kombinieren Pkw und Bahn. Das führt regelmäßig zu Zweitwagen-Verkäufen oder zu einem Wechsel auf ein anderes Fahrzeugkonzept.',
              },
              {
                title: 'Wirtschaftsachse Bergstraße bis Rhein-Neckar',
                text: 'Zwischen Mittelstand, Dienstleistung und Industrie entstehen fortlaufend Fahrzeugwechsel. Ein klarer Ankaufprozess spart hier spürbar Zeit und Abstimmungsaufwand.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Bensheim in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Der Ankauf in Bensheim folgt einer einfachen Reihenfolge, damit Sie nicht zwischen verschiedenen
            Ansprechpartnern wechseln müssen. Sie erhalten früh Transparenz und entscheiden selbst, ob Sie den Verkauf
            direkt abschließen möchten.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online-Bewertung starten',
                text: 'Sie geben die wichtigsten Fahrzeugdaten ein und erhalten eine erste, unverbindliche Preisorientierung auf Basis aktueller Marktdaten.',
              },
              {
                step: '02',
                title: 'Termin in Bensheim abstimmen',
                text: 'Wir koordinieren ein passendes Zeitfenster, prüfen Fahrzeugzustand und Unterlagen transparent und klären offene Punkte direkt.',
              },
              {
                step: '03',
                title: 'Vertrag und Auszahlung',
                text: 'Nach Einigung folgt der Kaufvertrag, die Auszahlung wird zügig veranlasst und auf Wunsch unterstützen wir den Abmeldeprozess.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Bensheim</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            In Bensheim treffen Pendlerverkehr, Familienalltag und regionale Gewerbenutzung aufeinander. Dadurch ist
            der Fahrzeugmix breit: kompakte Arbeitsweg-Autos, Kombis und SUVs für Familie und Freizeit, ältere
            Zweitwagen sowie zunehmend elektrifizierte Modelle. Eine faire Bewertung muss diesen Kontext mit
            einbeziehen, statt nur Kilometerstand und Erstzulassung zu vergleichen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerautos entlang A5 und A67',
                text: 'Diese Fahrzeuge haben oft regelmäßige Laufleistung auf stabilen Streckenprofilen. Wartungsdokumentation und technischer Zustand sind entscheidend für den erzielbaren Preis.',
              },
              {
                title: 'Familien-SUVs und Kombis',
                text: 'In Wohnlagen wie Auerbach oder Fehlheim sind größere Fahrzeuge mit guter Variabilität verbreitet. Ausstattung und Pflegezustand wirken sich deutlich auf die Nachfrage aus.',
              },
              {
                title: 'Ältere Alltags- und Zweitwagen',
                text: 'Auch ältere Modelle können in der Region einen soliden Restwert haben, wenn bekannte Mängel transparent sind und Unterlagen vollständig vorliegen.',
              },
              {
                title: 'Elektro- und Hybridfahrzeuge',
                text: 'Bei elektrifizierten Fahrzeugen zählen Batteriezustand, Ladehistorie und Softwarestand. Transparente Nachweise erhöhen die Vergleichbarkeit bei der Preisfindung.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Bahnhof Bensheim, Auerbacher Schloss und Bergstraßenachsen</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Bensheim verbindet urbanen Alltag mit Weinlagen an der Bergstraße und kurzen Wegen in den Rhein-Neckar-
            Raum. Rund um den Bahnhof Bensheim sowie die Auffahrten zur A5 und A67 variiert die Verkehrslage je nach
            Tageszeit stark. Deshalb planen wir Termine so, dass Übergaben im Alltag realistisch bleiben und nicht
            unnötig in Stoßzeiten fallen.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Orientierungspunkte wie das Auerbacher Schloss oder die B3 zeigen, wie stark Bensheim zwischen regionaler
            Identität und Pendlerdynamik liegt. Genau diese Mischung berücksichtigen wir bei der Bewertung von
            Laufleistung, Nutzung und Ausstattung.
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
                  { label: 'Verkaufsdauer', mv: 'Meist 1 bis 2 Tage', privat: 'Häufig mehrere Wochen', handler: 'Abhängig von Ankaufbestand' },
                  { label: 'Ablaufklarheit', mv: 'Fester Prozess mit Termin', privat: 'Viele Einzelanfragen und Absagen', handler: 'Öffnungszeitengebunden' },
                  { label: 'Preisermittlung', mv: 'Datenbasiert und fahrzeugspezifisch', privat: 'Stark verhandlungsgetrieben', handler: 'Interne Kalkulation' },
                  { label: 'Bensheim-spezifischer Aufwand', mv: 'Auf Wunsch kein eigener Behördentermin im Kreis Bergstraße', privat: 'Abmeldung und Nachweise selbst organisieren', handler: 'Serviceumfang unterschiedlich' },
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
              { label: 'Verkaufsdauer', mv: 'Meist 1 bis 2 Tage', privat: 'Häufig mehrere Wochen', handler: 'Abhängig von Ankaufbestand' },
              { label: 'Ablaufklarheit', mv: 'Fester Prozess mit Termin', privat: 'Viele Einzelanfragen und Absagen', handler: 'Öffnungszeitengebunden' },
              { label: 'Preisermittlung', mv: 'Datenbasiert und fahrzeugspezifisch', privat: 'Stark verhandlungsgetrieben', handler: 'Interne Kalkulation' },
              { label: 'Bensheim-spezifischer Aufwand', mv: 'Auf Wunsch kein eigener Behördentermin im Kreis Bergstraße', privat: 'Abmeldung und Nachweise selbst organisieren', handler: 'Serviceumfang unterschiedlich' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Praktische Vorbereitung für den Verkauf in Bensheim</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Ein schneller Abschluss gelingt, wenn Unterlagen und Angaben vor dem Termin vollständig vorliegen. Dazu
            zählen Zulassungsbescheinigung Teil I und II, alle Schlüssel, HU-Berichte, Wartungsnachweise und eine
            transparente Angabe zu bekannten Mängeln. Diese Vorbereitung spart Rückfragen und sorgt dafür, dass die
            Preisentscheidung auf einer klaren Datengrundlage basiert.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Bei finanzierten Fahrzeugen empfiehlt sich die frühzeitige Klärung von Restschuld und Ablöse mit der Bank.
            Gerade im Pendleralltag zwischen Bergstraße und Rhein-Neckar ist das wichtig, damit der Verkauf nicht über
            mehrere Termine gestreckt wird. Mit guter Vorbereitung lässt sich der gesamte Ablauf in Bensheim deutlich
            schlanker organisieren.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Fahrzeugschein, Fahrzeugbrief und alle Schlüssel vorab vollständig prüfen',
              'HU-Berichte, Wartungsheft und Rechnungen geordnet bereitlegen',
              'Bekannte Schäden offen dokumentieren, um Nachverhandlungen zu reduzieren',
              'Bei Finanzierung Restschuld und Bankkontakt vor dem Termin abstimmen',
            ].map((item) => (
              <div key={item} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-black text-brand-dark mb-1">Praxispunkt</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-4">Interne Links für Ihren nächsten Schritt</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Starten Sie jetzt mit der{' '}
            <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlosen Online-Bewertung
            </Link>{' '}
            und erhalten Sie in wenigen Minuten eine erste Preisorientierung.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für den direkten Vergleich im Umfeld Südhessen finden Sie auf unserer{' '}
            <Link href="/autoankauf-darmstadt" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Darmstadt
            </Link>{' '}
            weitere regionale Informationen zum Ablauf.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Bensheim"
          faqs={[...BENSHEIM_FAQS]}
          sectionId="faq-bensheim"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Bensheim verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten Ihr Auto ohne langen Inseratsprozess verkaufen? Dann starten Sie jetzt mit der Bewertung und
            sichern Sie sich einen strukturierten Ablauf in Bensheim.
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

export default AutoankaufBensheimPage;
