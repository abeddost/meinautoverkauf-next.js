import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { DREIEICH_FAQS } from '../lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufDreieichPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-48 -right-32 w-[560px] h-[560px] bg-gradient-to-br from-amber-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[23%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-sky-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-orange-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Dreieich - <span className="text-brand-orange">schnell verkaufen im Kreis Offenbach</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Dreieich ist ein klassischer Pendlerstandort zwischen Frankfurt, Offenbach und dem südlichen Rhein-Main-
            Gebiet. In Stadtteilen wie Sprendlingen, Dreieichenhain, Götzenhain, Buchschlag und Offenthal werden
            Fahrzeuge intensiv im Alltag genutzt: für Arbeitswege, Familienfahrten und regionale Termine. Diese
            Nutzungsmuster führen häufig zu Fahrzeugwechseln, bei denen Zeit und Planbarkeit wichtiger sind als
            langwierige Preisverhandlungen auf Plattformen.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Unser Autoankauf in Dreieich ist auf genau diese Situation ausgerichtet. Sie starten mit einer kostenlosen
            Online-Bewertung, erhalten eine realistische Preiseinschätzung und entscheiden anschließend in Ruhe. Bei
            Verkauf koordinieren wir einen festen Termin, prüfen Fahrzeugzustand und Unterlagen transparent und sorgen
            für einen rechtssicheren Abschluss. So vermeiden Sie die typische Unsicherheit eines offenen
            Privatverkaufs mit unklarer Dauer.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Pendlerfahrzeug mit höherer Laufleistung, Familien-SUV oder älteres Zweitauto: Wir bewerten nicht nach
            Schablone, sondern auf Basis des konkreten Fahrzeugprofils und der regionalen Nachfrage im Kreis Offenbach.
            Das macht den Verkauf in Dreieich nachvollziehbar und wirtschaftlich belastbar.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Dreieich verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Fünf Stadtteile mit unterschiedlichen Fahrzeugmustern',
                text: 'Sprendlingen und Buchschlag zeigen häufig Pendlerfahrzeuge, in Dreieichenhain und Götzenhain eher Familien- und Freizeitprofile. Diese Unterschiede prägen die lokale Nachfrage stark.',
              },
              {
                title: 'A661 und B486 als zentrale Verbindungsachsen',
                text: 'Der tägliche Verkehr Richtung Frankfurt und Offenbach führt zu regelmäßigen Langstreckenprofilen. Bei dokumentierter Wartung sind solche Fahrzeuge weiterhin gut vermarktbar.',
              },
              {
                title: 'Dreieich-Buchschlag als Bahn- und S-Bahn-Knoten',
                text: 'Viele Haushalte kombinieren Auto mit S-Bahn oder Dreieichbahn. Das führt oft zu Zweitwagen-Verkäufen oder gezielten Fahrzeugwechseln nach Job- oder Wohnortänderung.',
              },
              {
                title: 'Wirtschaftsraum Rhein-Main in direkter Nähe',
                text: 'Die Nähe zu Frankfurt, Airport-Umfeld und Gewerbestandorten im Kreis Offenbach erzeugt planbare Flotten- und Privatwechsel, bei denen ein klarer Ankaufprozess entscheidend ist.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Dreieich in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Der Verkaufsprozess in Dreieich ist bewusst einfach aufgebaut. Drei klare Schritte reichen aus, um von der
            ersten Einschätzung bis zur Auszahlung ohne Umwege zu kommen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online bewerten',
                text: 'Fahrzeugdaten eintragen und eine erste, unverbindliche Preisorientierung erhalten.',
              },
              {
                step: '02',
                title: 'Termin in Dreieich abstimmen',
                text: 'Wir vereinbaren ein passendes Zeitfenster und prüfen Fahrzeug sowie Unterlagen nachvollziehbar vor Ort.',
              },
              {
                step: '03',
                title: 'Vertrag und Auszahlung',
                text: 'Nach Einigung erfolgt der Kaufvertrag, die Auszahlung wird direkt veranlasst und auf Wunsch die Abmeldung unterstützt.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Dreieich</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Dreieich vereint Pendlerverkehr, Familienhaushalte und regionales Gewerbe. Dadurch ist der Fahrzeugmarkt
            vielfältig: vom kompakten Arbeitsweg-Auto über Kombis bis zu elektrifizierten Modellen. Eine belastbare
            Bewertung berücksichtigt daher mehr als nur Baujahr und Laufleistung.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerautos Richtung Frankfurt und Offenbach',
                text: 'Diese Fahrzeuge haben oft stabile Wartungsverläufe bei höherer Laufleistung. Entscheidend sind Servicequalität und technischer Zustand.',
              },
              {
                title: 'Familien-SUVs und Kombis',
                text: 'In Dreieichenhain, Götzenhain und Offenthal sind größere Fahrzeuge mit hoher Alltagstauglichkeit häufig. Ausstattung und Pflege wirken direkt auf den Marktwert.',
              },
              {
                title: 'Ältere Zweitwagen',
                text: 'Viele Haushalte in Dreieich reduzieren von zwei auf ein Fahrzeug. Ältere Modelle können dabei sinnvoll verkauft werden, wenn Unterlagen vollständig sind.',
              },
              {
                title: 'Elektro- und Hybridfahrzeuge',
                text: 'Bei elektrifizierten Fahrzeugen zählen Batteriezustand, Ladehistorie und Ausstattung. Eine transparente Datengrundlage ist hier besonders wichtig.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Burg Hayn, Dreieich-Buchschlag und B486-Korridor</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Dreieich verbindet historische Stadtkerne wie Dreieichenhain mit modernen Pendelrouten und Bahnanbindungen.
            Rund um Dreieich-Buchschlag und die B486 variiert die Verkehrslage je nach Tageszeit deutlich. Deshalb
            planen wir Termine so, dass Übergaben praktikabel bleiben und nicht unnötig Zeit kosten.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Auch lokale Orientierungspunkte wie die Burg Hayn zeigen, wie stark Dreieich zwischen Wohnqualität und
            Rhein-Main-Dynamik liegt. Diese Mischung aus Freizeit- und Arbeitsverkehr berücksichtigen wir bei der
            Bewertung von Nutzung und Laufleistung.
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
                  { label: 'Verkaufsdauer', mv: 'Oft 24 bis 48 Stunden', privat: 'Mehrere Wochen möglich', handler: 'Abhängig von Ankaufkapazität' },
                  { label: 'Ablaufklarheit', mv: 'Fester Prozess mit Termin', privat: 'Hohe Ausfallquote bei Anfragen', handler: 'Öffnungszeitengebunden' },
                  { label: 'Preisermittlung', mv: 'Datenbasiert und regional', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation mit Abschlägen' },
                  { label: 'Dreieich-spezifischer Vorteil', mv: 'Kein eigener Weg zur Zulassungsstelle im Kreis Offenbach bei Wunschservice', privat: 'Abmeldung und Formalitäten selbst', handler: 'Serviceumfang unterschiedlich' },
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
              { label: 'Verkaufsdauer', mv: 'Oft 24 bis 48 Stunden', privat: 'Mehrere Wochen möglich', handler: 'Abhängig von Ankaufkapazität' },
              { label: 'Ablaufklarheit', mv: 'Fester Prozess mit Termin', privat: 'Hohe Ausfallquote bei Anfragen', handler: 'Öffnungszeitengebunden' },
              { label: 'Preisermittlung', mv: 'Datenbasiert und regional', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation mit Abschlägen' },
              { label: 'Dreieich-spezifischer Vorteil', mv: 'Kein eigener Weg zur Zulassungsstelle im Kreis Offenbach bei Wunschservice', privat: 'Abmeldung und Formalitäten selbst', handler: 'Serviceumfang unterschiedlich' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Vorbereitung für einen schnellen Verkauf in Dreieich</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Ein reibungsloser Ankauf beginnt mit sauberen Unterlagen. Wenn Zulassungsbescheinigung, Schlüssel,
            Wartungsnachweise und Angaben zu bekannten Mängeln vollständig vorliegen, lässt sich der Termin deutlich
            schneller und verlässlicher durchführen.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Gerade in Dreieich mit engem Pendelalltag hilft diese Vorbereitung, damit der Verkauf nicht mehrere
            Ersatztermine benötigt. Bei finanzierten Fahrzeugen sollten Bankdaten und Restschuld frühzeitig geklärt
            werden, damit Abschluss und Auszahlung ohne Verzögerung erfolgen können.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Fahrzeugschein, Fahrzeugbrief und alle Schlüssel vor dem Termin vollständig prüfen',
              'Serviceunterlagen, HU-Berichte und Rechnungen geordnet bereitlegen',
              'Bekannte Mängel transparent dokumentieren, um Nachverhandlungen zu vermeiden',
              'Bei Finanzierung Restschuld und Ablöse frühzeitig mit der Bank abstimmen',
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
            <Link to="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlosen Online-Bewertung
            </Link>{' '}
            und erhalten Sie schnell eine erste Preisorientierung für Ihr Fahrzeug.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für den direkten Vergleich im Rhein-Main-Korridor finden Sie auf unserer{' '}
            <Link to="/autoankauf-offenbach" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Offenbach
            </Link>{' '}
            zusätzliche regionale Einordnung.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Dreieich"
          faqs={[...DREIEICH_FAQS]}
          sectionId="faq-dreieich"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Dreieich verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten ohne langen Inseratsprozess verkaufen? Starten Sie jetzt mit der Bewertung und schließen Sie
            den Verkauf in Dreieich mit klarem Ablauf ab.
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

export default AutoankaufDreieichPage;
