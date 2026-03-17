import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { WEINHEIM_FAQS } from '../lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufWeinheimPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-46 -right-32 w-[560px] h-[560px] bg-gradient-to-br from-emerald-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[24%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[9%] right-[9%] w-72 h-72 bg-teal-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Weinheim - <span className="text-brand-orange">schnell verkaufen im Rhein-Neckar-Raum</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Weinheim liegt an einer der dynamischsten Mobilitätsachsen zwischen Bergstraße, Mannheim und Heidelberg.
            In Stadtteilen wie Sulzbach, Lützelsachsen oder Oberflockenbach werden Fahrzeuge sehr unterschiedlich
            genutzt: tägliche Pendelwege über A5 oder A659, regionale Fahrten über die B3 und familienbezogene
            Kurzstrecken im Stadtgebiet. Gleichzeitig spielt der Bahnhof Weinheim mit dem RNV- und Bahnanschluss eine
            große Rolle für den Arbeitsweg. Diese Mischung führt dazu, dass viele Halter ihre Fahrzeuge nicht aus einem
            einzigen Grund verkaufen, sondern weil sich Alltag und Mobilität deutlich verändert haben.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Für den Verkauf in Weinheim ist daher ein klarer Ablauf entscheidend. Unser Autoankauf startet mit einer
            kostenlosen Online-Bewertung, liefert eine transparente Preisorientierung und ermöglicht anschließend einen
            planbaren Termin. So vermeiden Sie lange Inseratsphasen mit unklaren Verhandlungen und behalten den Prozess
            unter Kontrolle. Nach Prüfung von Fahrzeug und Unterlagen erfolgt der rechtssichere Abschluss mit zügiger
            Auszahlung.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Pendlerfahrzeug mit hoher Laufleistung, Familienkombi oder älteres Alltagsauto: Wir bewerten in
            Weinheim nicht nach Schablone, sondern anhand von Zustand, Historie, Ausstattung und aktueller Nachfrage im
            Rhein-Neckar-Markt. Dadurch bleibt der Verkauf nachvollziehbar und wirtschaftlich belastbar.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Weinheim verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Stadtteile mit verschiedenen Nutzungsschwerpunkten',
                text: 'In Sulzbach und Lützelsachsen dominieren oft Pendler- und Familienprofile, während in Oberflockenbach häufiger gemischte Regional- und Freizeitfahrten vorkommen.',
              },
              {
                title: 'A5, A659 und B3 als zentrale Verkehrsrouten',
                text: 'Der tägliche Verkehr Richtung Mannheim, Heidelberg und Darmstadt erzeugt klare Laufleistungsmuster. Bei dokumentierter Wartung sind diese Fahrzeuge gut einzuordnen.',
              },
              {
                title: 'Bahnhof Weinheim und RNV-Korridor',
                text: 'Viele Haushalte kombinieren Auto und Bahn. Das führt regelmäßig zu Zweitwagen-Verkäufen oder Anpassungen der Fahrzeuggröße.',
              },
              {
                title: 'Rhein-Neckar als starker Wirtschaftsraum',
                text: 'Pendlerbezug und Arbeitgeber wie Freudenberg sorgen für kontinuierliche Fahrzeugwechsel. Ein strukturierter Ankauf spart hier Zeit und Abstimmung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Weinheim in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            In Weinheim halten wir den Ankauf bewusst einfach: digitale Bewertung, abgestimmter Termin, rechtssicherer
            Abschluss. So lässt sich der Verkauf auch in einem vollen Arbeitsalltag zuverlässig organisieren.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online bewerten',
                text: 'Sie geben Ihre Fahrzeugdaten ein und erhalten eine erste, unverbindliche Einschätzung basierend auf aktuellen Marktdaten.',
              },
              {
                step: '02',
                title: 'Termin in Weinheim festlegen',
                text: 'Wir stimmen ein passendes Zeitfenster ab, prüfen das Fahrzeug transparent und klären offene Fragen direkt.',
              },
              {
                step: '03',
                title: 'Verkauf abschließen',
                text: 'Nach Einigung folgt der Kaufvertrag, die Auszahlung wird zügig veranlasst und auf Wunsch die Abmeldung begleitet.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Weinheim</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            In Weinheim ist der Fahrzeugmix typisch für die Rhein-Neckar-Region: Pendlerfahrzeuge mit regelmäßiger
            Autobahnnutzung, familienorientierte SUVs und Kombis, ältere Zweitfahrzeuge sowie zunehmend Elektro- und
            Hybridmodelle. Eine faire Bewertung muss daher immer das tatsächliche Einsatzprofil berücksichtigen, statt
            nur pauschale Durchschnittswerte anzusetzen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerfahrzeuge im A5-Korridor',
                text: 'Viele Fahrzeuge sind auf den Strecken Richtung Mannheim, Heidelberg oder Darmstadt unterwegs. Laufleistung allein ist weniger aussagekräftig als der dokumentierte Wartungszustand.',
              },
              {
                title: 'Familienfahrzeuge in den Wohnlagen',
                text: 'In Lützelsachsen und Sulzbach sind Kombis und SUVs mit hoher Alltagstauglichkeit verbreitet. Ausstattung, Pflege und Nachweise beeinflussen die Nachfrage deutlich.',
              },
              {
                title: 'Ältere Alltags- und Zweitwagen',
                text: 'Wenn Haushalte ihr Mobilitätskonzept ändern, werden ältere Fahrzeuge häufiger verkauft. Mit transparenter Mängelangabe bleiben diese Fahrzeuge gut einordbar.',
              },
              {
                title: 'Elektro- und Hybridmodelle',
                text: 'Bei elektrifizierten Modellen sind Batteriezustand, Ladehistorie und Serviceunterlagen zentrale Bewertungsfaktoren für eine realistische Preisfindung.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Schlosspark, Bahnhof Weinheim und A659-Anschluss</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Weinheim verbindet historische Innenstadt, Schlosspark und moderne Pendlerachsen. Rund um den Bahnhof
            Weinheim, die B3 sowie die Auffahrten zur A5 und A659 ändern sich Verkehrsfenster im Tagesverlauf spürbar.
            Deshalb stimmen wir Termine praxisnah ab, damit Übergaben zuverlässig in Ihren Alltag passen.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Die Nähe zu Mannheim und Heidelberg macht Weinheim zu einem Standort mit hoher Fahrzeugdynamik. Genau diese
            regionale Nachfrage berücksichtigen wir bei der Bewertung, damit Preis und Ablauf realistisch bleiben.
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
                  { label: 'Verkaufsdauer', mv: 'Meist 24 bis 48 Stunden', privat: 'Oft mehrere Wochen', handler: 'Abhängig von Nachfrage' },
                  { label: 'Ablaufklarheit', mv: 'Fester, transparenter Prozess', privat: 'Viele Einzeltermine und Ausfälle', handler: 'Öffnungszeitengebunden' },
                  { label: 'Preisermittlung', mv: 'Datenbasiert mit regionalem Bezug', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
                  { label: 'Weinheim-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördengang im Rhein-Neckar-Kreis', privat: 'Abmeldung und Formalitäten selbst', handler: 'Service je nach Betrieb verschieden' },
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
              { label: 'Verkaufsdauer', mv: 'Meist 24 bis 48 Stunden', privat: 'Oft mehrere Wochen', handler: 'Abhängig von Nachfrage' },
              { label: 'Ablaufklarheit', mv: 'Fester, transparenter Prozess', privat: 'Viele Einzeltermine und Ausfälle', handler: 'Öffnungszeitengebunden' },
              { label: 'Preisermittlung', mv: 'Datenbasiert mit regionalem Bezug', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
              { label: 'Weinheim-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördengang im Rhein-Neckar-Kreis', privat: 'Abmeldung und Formalitäten selbst', handler: 'Service je nach Betrieb verschieden' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Praktische Vorbereitung für den Verkauf in Weinheim</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Je besser die Unterlagen vorbereitet sind, desto schneller läuft der gesamte Ankauf. Wichtig sind
            Zulassungsbescheinigung Teil I und II, alle Schlüssel, Wartungsnachweise, HU-Berichte und transparente
            Angaben zu bekannten Mängeln. Diese Basis reduziert Nachfragen und erleichtert eine faire, nachvollziehbare
            Preisentscheidung.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Bei finanzierten Fahrzeugen sollten Restschuld und Ablöse vor dem Termin geklärt sein. Gerade im
            pendlerstarken Rhein-Neckar-Raum verhindert das Verzögerungen und hält den Prozess von der Bewertung bis zur
            Auszahlung zeitlich planbar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Fahrzeugschein, Fahrzeugbrief und alle Schlüssel vollständig bereitlegen',
              'Wartungsheft, HU-Berichte und Rechnungen geordnet vorbereiten',
              'Bekannte Schäden offen dokumentieren, um Nachverhandlungen zu vermeiden',
              'Bei Finanzierung Restschuld und Bankablöse frühzeitig abstimmen',
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
            Nutzen Sie die{' '}
            <Link to="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlose Online-Bewertung
            </Link>{' '}
            und erhalten Sie schnell eine erste Preisorientierung für Ihr Fahrzeug.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für die direkte regionale Einordnung finden Sie auf unserer{' '}
            <Link to="/autoankauf-mannheim" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Mannheim
            </Link>{' '}
            zusätzliche Informationen zu Ablauf und Marktumfeld.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Weinheim"
          faqs={[...WEINHEIM_FAQS]}
          sectionId="faq-weinheim"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Weinheim verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten Ihr Auto ohne lange Verkaufsphase veräußern? Starten Sie jetzt mit der Bewertung und nutzen Sie
            einen transparenten Ablauf für Weinheim und den Rhein-Neckar-Raum.
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

export default AutoankaufWeinheimPage;
