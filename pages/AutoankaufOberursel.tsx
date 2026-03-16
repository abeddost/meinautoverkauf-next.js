import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { OBERURSEL_FAQS } from '../lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufOberurselPage: React.FC<Props> = ({ onCtaClick }) => {
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
            Autoankauf Oberursel - <span className="text-brand-orange">schnell verkaufen im Taunus</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Oberursel ist als Wohn- und Pendlerstadt stark mit Frankfurt verbunden. Viele Fahrzeuge werden hier täglich
            für den Arbeitsweg über B455, Richtung A661 oder im Mix aus Auto und Schiene genutzt. Gleichzeitig gibt es
            in Stadtteilen wie Oberstedten, Bommersheim, Weißkirchen und Stierstadt unterschiedliche Fahrzeugprofile:
            vom kompakten Pendlerauto bis zum Familien-SUV. Für Verkäufer bedeutet das: Der passende Preis hängt stark
            von Nutzung und Zustand ab, nicht nur vom Baujahr.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Unser Autoankauf in Oberursel ist auf diese lokalen Rahmenbedingungen ausgelegt. Sie erhalten zunächst eine
            kostenlose Online-Bewertung, anschließend einen klaren Termin und bei Einigung einen transparenten
            Kaufabschluss. Der Vorteil liegt in der Planbarkeit: Sie müssen keine Besichtigungstour organisieren, keine
            offenen Verhandlungen führen und keinen langen Verkaufszeitraum einkalkulieren.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Alltagsfahrzeug aus dem U3-Pendelkorridor, Zweitwagen mit geringer Jahresfahrleistung oder älteres Auto
            mit dokumentierten Wartungen: Wir bewerten marktnah und nachvollziehbar. So entsteht ein Verkaufsergebnis,
            das in Oberursel praktisch umsetzbar ist und nicht von Zufall oder Tagesform einzelner Interessenten abhängt.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Oberursel verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Stadtteile mit klaren Fahrzeugmustern',
                text: 'In Oberstedten und Bommersheim sehen wir häufig Familienfahrzeuge, in Weißkirchen und Stierstadt viele Pendlerautos. Diese Unterschiede beeinflussen Nachfrage und Preisniveau.',
              },
              {
                title: 'B455 und A661-Anbindung für Pendler',
                text: 'Der tägliche Verkehr Richtung Frankfurt führt oft zu höheren Laufleistungen. Bei vollständiger Wartungshistorie sind solche Fahrzeuge trotzdem gut einzuordnen.',
              },
              {
                title: 'Bahnhof Oberursel und U3-Hohemark',
                text: 'Durch S-Bahn und U-Bahn werden in Oberursel regelmäßig Zweitwagen verkauft, wenn Haushalte ihre Mobilität neu organisieren. Das erzeugt einen aktiven lokalen Markt.',
              },
              {
                title: 'Nähe zum Wirtschaftsraum Frankfurt',
                text: 'Viele Dienst- und Leasingfahrzeuge wechseln in planbaren Intervallen den Besitzer. Für Verkäufer ist deshalb ein zeitlich strukturierter Ankaufprozess besonders sinnvoll.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Oberursel: 3 klare Schritte</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Sie brauchen in Oberursel keinen komplizierten Verkaufsprozess. Mit drei klaren Schritten bleibt der Ablauf
            transparent und zeitlich überschaubar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online bewerten',
                text: 'Fahrzeugdaten eingeben und sofort eine erste Einschätzung erhalten. Kostenlos und unverbindlich.',
              },
              {
                step: '02',
                title: 'Termin vor Ort abstimmen',
                text: 'Wir planen einen Termin in Oberursel oder im direkten Umfeld, passend zu Ihrem Tagesablauf.',
              },
              {
                step: '03',
                title: 'Vertrag und Auszahlung',
                text: 'Nach der Prüfung folgt der Kaufvertrag. Die Auszahlung wird unmittelbar veranlasst, auf Wunsch inklusive Unterstützung bei der Abmeldung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Oberursel</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            In Oberursel gibt es einen breiten Mix: klassische Pendlerfahrzeuge, Familienmodelle, ältere Zweitwagen und
            zunehmend elektrifizierte Autos. Die lokale Nachfrage ist deshalb differenziert und belohnt saubere
            Unterlagen sowie nachvollziehbare Fahrzeughistorien.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Kompakte Pendlerfahrzeuge',
                text: 'Modelle für tägliche Strecken Richtung Frankfurt sind häufig. Entscheidend sind Wartung, Zustand und realistische Kilometerbewertung.',
              },
              {
                title: 'Familien-SUVs und Kombis',
                text: 'In den Wohngebieten Oberursels werden viele größere Fahrzeuge genutzt. Bei diesen Modellen sind Ausstattung und Pflegezustand preistreibend.',
              },
              {
                title: 'Ältere Fahrzeuge mit Restwert',
                text: 'Auch ältere Autos können wirtschaftlich verkauft werden, wenn bekannte Mängel klar dokumentiert und Unterlagen vollständig sind.',
              },
              {
                title: 'Elektro- und Hybridmodelle',
                text: 'Bei E-Fahrzeugen sind Ladehistorie, Batteriezustand und Ausstattung zentral. Eine transparente Datengrundlage schafft hier klare Vergleichbarkeit.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: U3-Hohemark, Vortaunusmuseum und Taunus-Korridor</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Oberursel liegt zwischen urbanem Rhein-Main-Alltag und Taunus-Topografie. Bereiche rund um U3-Hohemark,
            die Innenstadt und die Zufahrten Richtung B455 unterscheiden sich stark in Erreichbarkeit und Verkehrsaufkommen.
            Deshalb planen wir Termine praxisnah statt nach starrem Raster.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Lokale Bezugspunkte wie das Vortaunusmuseum oder die Routen in Richtung Feldbergregion zeigen, wie stark
            Oberursel zwischen Stadt- und Freizeitverkehr liegt. Diese Nutzungsmuster berücksichtigen wir bei der
            Einordnung von Laufleistung und Zustand.
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
                  { label: 'Verkaufsdauer', mv: 'Meist 1 bis 2 Tage', privat: 'Oft mehrere Wochen', handler: 'Abhängig von Ankaufkapazität' },
                  { label: 'Ablaufklarheit', mv: 'Verbindlicher Prozess', privat: 'Viele Einzeltermine', handler: 'Öffnungszeitengebunden' },
                  { label: 'Preisermittlung', mv: 'Marktdaten + Fahrzeugprofil', privat: 'Verhandlungslastig', handler: 'Interne Kalkulation' },
                  { label: 'Oberursel-spezifischer Vorteil', mv: 'Keine Zusatzwege zur Zulassungsstelle bei Wunschservice', privat: 'Behördengänge selbst organisieren', handler: 'Leistungsumfang unterschiedlich' },
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
              { label: 'Verkaufsdauer', mv: 'Meist 1 bis 2 Tage', privat: 'Oft mehrere Wochen', handler: 'Abhängig von Ankaufkapazität' },
              { label: 'Ablaufklarheit', mv: 'Verbindlicher Prozess', privat: 'Viele Einzeltermine', handler: 'Öffnungszeitengebunden' },
              { label: 'Preisermittlung', mv: 'Marktdaten + Fahrzeugprofil', privat: 'Verhandlungslastig', handler: 'Interne Kalkulation' },
              { label: 'Oberursel-spezifischer Vorteil', mv: 'Keine Zusatzwege zur Zulassungsstelle bei Wunschservice', privat: 'Behördengänge selbst organisieren', handler: 'Leistungsumfang unterschiedlich' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Praktische Vorbereitung für den Verkauf in Oberursel</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            In Oberursel funktioniert der Verkauf besonders effizient, wenn alle Unterlagen vorab bereitliegen. Dazu
            gehören Zulassungsbescheinigung, Schlüssel, Wartungsunterlagen und eine transparente Angabe bekannter
            Schäden. So entsteht bereits beim Termin eine klare Datengrundlage, die spätere Rückfragen reduziert.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Bei finanzierten Fahrzeugen oder laufenden Leasingverträgen sollte die Ablöse frühzeitig abgestimmt werden.
            Das beschleunigt den Abschluss und verhindert unnötige Zwischenrunden. Wer diesen Schritt sauber vorbereitet,
            spart in der Regel den größten Teil des organisatorischen Aufwands.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Fahrzeugschein, Fahrzeugbrief und alle Schlüssel vorab vollständig prüfen',
              'HU-Berichte, Servicebelege und Rechnungen geordnet bereitlegen',
              'Bekannte Mängel offen dokumentieren, um den Ablauf stabil zu halten',
              'Bei Finanzierung Restschuld und Bankkontakt vor dem Termin klären',
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
            Starten Sie sofort mit der{' '}
            <Link to="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlosen Fahrzeugbewertung
            </Link>{' '}
            und erhalten Sie eine schnelle, unverbindliche Einschätzung.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für den direkten Rhein-Main-Bezug lohnt zusätzlich ein Blick auf unsere{' '}
            <Link to="/autoankauf-frankfurt" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Frankfurt
            </Link>{' '}
            mit ergänzenden Informationen für die angrenzende Pendlerregion.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Oberursel"
          faqs={[...OBERURSEL_FAQS]}
          sectionId="faq-oberursel"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Oberursel verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten den Verkauf ohne langen Inseratsprozess abschließen? Starten Sie jetzt mit der Bewertung und
            verkaufen Sie Ihr Fahrzeug in Oberursel mit klarer Struktur.
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

export default AutoankaufOberurselPage;
