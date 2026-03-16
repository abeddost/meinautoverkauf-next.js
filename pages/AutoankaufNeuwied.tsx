import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { NEUWIED_FAQS } from '../lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufNeuwiedPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-44 -right-36 w-[520px] h-[520px] bg-gradient-to-br from-blue-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[26%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/55 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[8%] w-72 h-72 bg-orange-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Neuwied - <span className="text-brand-orange">regional verkaufen mit klarem Zeitplan</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Der Automarkt in Neuwied funktioniert anders als in einer reinen Grossstadt. Viele Fahrzeuge werden hier als
            Pendlerautos genutzt: morgens über B42 oder B256 Richtung Koblenz, beruflich weiter in den Raum Bonn oder
            überregional auf die Fernachsen. Das erzeugt typische Profile mit solider Wartung, aber oft höherer
            Laufleistung. Genau diese Fahrzeuge werden im privaten Verkauf häufig unter Wert diskutiert, obwohl sie für
            viele Käufer weiterhin interessant sind. Wer gleichzeitig Arbeit, Familie und Schichtzeiten koordinieren
            muss, hat selten Zeit für mehrere Inserate, Testfahrten und spontane Terminabsagen.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Unser Autoankauf in Neuwied ist auf diese Realität ausgelegt. Sie starten mit einer unverbindlichen
            Online-Bewertung, erhalten eine belastbare Preiseinschätzung und entscheiden danach ohne Verkaufsdruck. Bei
            Interesse organisieren wir einen festen Termin, prüfen Unterlagen und Fahrzeugzustand nachvollziehbar und
            schließen den Verkauf transparent ab. Für viele Verkäufer in Heddesdorf, Engers, Niederbieber oder im
            Umland ist vor allem wichtig, dass der Ablauf zuverlässig bleibt und nicht von jeder einzelnen Anfrage
            abhängt.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Zusätzlich berücksichtigen wir regionale Besonderheiten: Firmenfahrzeuge aus dem Umfeld von thyssenkrupp
            Rasselstein, Familienautos mit häufigen Fahrten zwischen Stadtteilen sowie Zweitwagen, die durch veränderte
            Pendelgewohnheiten nicht mehr benötigt werden. Ziel ist ein Verkauf mit klaren Schritten statt offener
            Verhandlungsschleifen.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Neuwied verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Stadtteile mit unterschiedlichen Nutzungsprofilen',
                text: 'In Heddesdorf und Niederbieber sehen wir viele Alltags- und Familienfahrzeuge, in Engers häufiger Pendler- und Zweitwagen. Diese Mischung verlangt eine differenzierte Bewertung statt pauschaler Listenpreise.',
              },
              {
                title: 'Wichtige Verkehrsachsen B42 und B256',
                text: 'Neuwied ist eng an B42 und B256 angebunden. Fahrzeuge aus diesem Korridor haben oft planbare Langstreckenhistorien, was für die Preisermittlung relevanter ist als eine reine Kilometerzahl.',
              },
              {
                title: 'Bahnhof Neuwied als Mobilitätsknoten',
                text: 'Durch den Bahnhof Neuwied kombinieren viele Haushalte Auto und Bahn. Das führt häufig zu gezielten Fahrzeugwechseln, etwa wenn aus zwei Autos ein Fahrzeug wird oder ein Pendlerprofil endet.',
              },
              {
                title: 'Industrienahe Fahrzeugwechsel',
                text: 'Im Umfeld des Standorts thyssenkrupp Rasselstein werden Dienst- und Arbeitsfahrzeuge regelmäßig erneuert. Solche Fahrzeuge haben oft gute Wartungsdokumentation und sind für den Ankauf gut einzuordnen.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Neuwied: 3 Schritte bis zum Verkauf</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Damit der Verkauf in Neuwied planbar bleibt, setzen wir auf einen festen Ablauf. Sie wissen in jedem Schritt,
            welche Informationen benötigt werden und wann eine Entscheidung fällig ist. Das reduziert Rückfragen und
            macht den Prozess auch bei engem Zeitfenster gut steuerbar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online bewerten',
                text: 'Sie geben Daten zu Modell, Erstzulassung, Laufleistung und Zustand ein. Daraus entsteht eine erste, unverbindliche Preisbasis.',
              },
              {
                step: '02',
                title: 'Termin in Neuwied abstimmen',
                text: 'Wir koordinieren einen passenden Termin in Neuwied oder im direkten Umfeld, prüfen das Fahrzeug und gleichen Unterlagen strukturiert ab.',
              },
              {
                step: '03',
                title: 'Vertrag und Auszahlung',
                text: 'Nach der Einigung folgt der Vertrag. Die Auszahlung wird direkt veranlasst, und auf Wunsch unterstützen wir bei der Abmeldung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Neuwied und Umgebung</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            In Neuwied sehen wir keine Einheitsflotte, sondern eine breite Mischung. Pendlerfahrzeuge auf den Achsen
            Richtung Koblenz und Bonn unterscheiden sich deutlich von klassischen Familienautos oder gewerblich
            eingesetzten Transportern. Deshalb orientieren wir uns nicht an Schablonen, sondern an der tatsächlichen
            Nutzungshistorie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Kompakte Pendlerfahrzeuge',
                text: 'Viele Modelle werden täglich für den Weg zur Arbeit genutzt. Entscheidend sind dokumentierte Wartungen, nicht nur der Kilometerstand.',
              },
              {
                title: 'Familienautos aus Stadtteilen wie Engers',
                text: 'Bei Kombis und SUVs aus Familienhaushalten sind Pflegezustand, Innenraum und nachvollziehbare Historie oft kaufentscheidend.',
              },
              {
                title: 'Aeltere Fahrzeuge mit Restwert',
                text: 'Auch ältere Fahrzeuge lassen sich fair verkaufen, wenn Unterlagen vollständig und bekannte Mängel transparent beschrieben sind.',
              },
              {
                title: 'Leichte Nutzfahrzeuge',
                text: 'Im Raum Neuwied fallen regelmäßig gewerblich genutzte Fahrzeuge an, die bei realistischer Bewertung zügig veräußert werden können.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Bahnhof Neuwied, Schloss Engers und Pendelachsen</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Unser Team kennt die lokalen Wege im Alltag: rund um den Bahnhof Neuwied, die Wohnlagen in Heddesdorf,
            Engers und Niederbieber sowie die stark frequentierten Zufahrten in Richtung Koblenz. Wer werktags zwischen
            Terminfenstern plant, braucht eine Übergabe, die nicht den halben Tag blockiert.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Auch lokale Orientierungspunkte wie das Umfeld von Schloss Engers oder die Achsen zur B42 und B256 spielen
            bei der Terminplanung eine Rolle. So bleibt der Verkauf praktisch umsetzbar, ohne dass Sie mehrere
            Ausweichtermine einplanen müssen.
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
                  { label: 'Zeit bis zum Abschluss', mv: 'Häufig 1 bis 2 Tage', privat: 'Mehrere Wochen möglich', handler: 'Abhängig von Ankaufinteresse' },
                  { label: 'Planbarkeit', mv: 'Fester Ablauf mit Termin', privat: 'Absagen und Neuverhandlungen', handler: 'Gebunden an Oeffnungszeiten' },
                  { label: 'Preisermittlung', mv: 'Marktdaten plus Fahrzeugzustand', privat: 'Stark verhandlungsabhängig', handler: 'Interner Ankaufkorridor' },
                  { label: 'Neuwied-spezifischer Aufwand', mv: 'Unterstützung ohne eigenen Weg zur Zulassungsstelle Neuwied', privat: 'Abmeldung und Nachweise selbst organisieren', handler: 'Service nicht immer enthalten' },
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
              { label: 'Zeit bis zum Abschluss', mv: 'Häufig 1 bis 2 Tage', privat: 'Mehrere Wochen möglich', handler: 'Abhängig von Ankaufinteresse' },
              { label: 'Planbarkeit', mv: 'Fester Ablauf mit Termin', privat: 'Absagen und Neuverhandlungen', handler: 'Gebunden an Oeffnungszeiten' },
              { label: 'Preisermittlung', mv: 'Marktdaten plus Fahrzeugzustand', privat: 'Stark verhandlungsabhängig', handler: 'Interner Ankaufkorridor' },
              { label: 'Neuwied-spezifischer Aufwand', mv: 'Unterstützung ohne eigenen Weg zur Zulassungsstelle Neuwied', privat: 'Abmeldung und Nachweise selbst organisieren', handler: 'Service nicht immer enthalten' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Verkauf in Neuwied vorbereiten: so bleibt der Termin effizient</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Ein guter Verkaufstermin beginnt mit sauber vorbereiteten Unterlagen. Gerade in Neuwied, wo viele Halter
            den Verkauf in enge Arbeits- und Pendelzeiten einbauen müssen, spart eine klare Vorbereitung messbar Zeit.
            Wichtig sind nicht nur Fahrzeugschein und Fahrzeugbrief, sondern auch nachvollziehbare Wartungsnachweise,
            Informationen zu vorhandenen Schlüsseln und eine offene Angabe bekannter Mängel. Dadurch lässt sich die
            Bewertung beim Termin direkt auf belastbare Fakten stützen.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Besonders bei Fahrzeugen mit Pendlerhistorie zwischen Neuwied, Koblenz und Bonn ist Dokumentation ein
            Vorteil. Wenn Serviceintervalle und Reparaturen erkennbar sind, reduziert das Nachfragen und erleichtert die
            Einordnung. Wer zusätzlich vorab klärt, ob das Fahrzeug finanziert ist oder ob eine Lösung erforderlich
            wird, verhindert spätere Verzögerungen im Abschlussprozess.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Zulassungsbescheinigung Teil I und II sowie alle Fahrzeugschlüssel bereitlegen',
              'Letzte HU-Unterlagen und Wartungsnachweise für die Einschätzung verfügbar machen',
              'Bekannte Schäden vorab dokumentieren, damit keine späten Missverständnisse entstehen',
              'Bei Finanzierung rechtzeitig Bankkontakt und Restschuldinformationen vorbereiten',
            ].map((item) => (
              <div key={item} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-black text-brand-dark mb-1">Praxispunkt</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-4">Interne Wege für den direkten Start</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Starten Sie sofort mit der{' '}
            <Link to="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlosen Fahrzeugbewertung
            </Link>{' '}
            und prüfen Sie, welcher Preisbereich für Ihr Auto in Neuwied aktuell realistisch ist.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Wenn Sie oft im Raum Mittelrhein unterwegs sind, finden Sie zusätzlich regionale Orientierung auf unserer{' '}
            <Link to="/autoankauf-koblenz" className="text-brand-orange font-bold hover:underline">
              Seite für Autoankauf Koblenz
            </Link>{' '}
            mit passendem Bezug für die angrenzenden Pendlerachsen.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Neuwied"
          faqs={[...NEUWIED_FAQS]}
          sectionId="faq-neuwied"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Neuwied verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten keine wochenlange Vermarktung mit offenem Ausgang? Starten Sie jetzt mit einer transparenten
            Bewertung und verkaufen Sie Ihr Fahrzeug in Neuwied mit planbarer Abwicklung.
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

export default AutoankaufNeuwiedPage;
