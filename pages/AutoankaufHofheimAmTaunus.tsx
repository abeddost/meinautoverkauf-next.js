import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { HOFHEIM_AM_TAUNUS_FAQS } from '../lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufHofheimAmTaunusPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-44 -right-32 w-[560px] h-[560px] bg-gradient-to-br from-cyan-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[25%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] w-72 h-72 bg-sky-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Hofheim am Taunus - <span className="text-brand-orange">schnell verkaufen im Main-Taunus-Kreis</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Hofheim am Taunus ist ein klassischer Pendlerstandort zwischen Wiesbaden und Frankfurt. In Stadtteilen wie
            Marxheim, Diedenbergen, Wallau oder Lorsbach werden Fahrzeuge oft für gemischte Profile genutzt: morgens
            auf die A66 oder Richtung A3, tagsüber kurze Wege im Stadtgebiet und am Wochenende Familien- oder
            Freizeitfahrten in den Taunus. Genau diese Mischung prägt den Fahrzeugmarkt vor Ort. Viele Autos haben
            keine rein städtische Nutzung, sondern eine Kombination aus Kurzstrecke und regelmäßigem Autobahnanteil,
            was beim privaten Verkauf häufig falsch bewertet wird.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Wer in Hofheim verkaufen will, erwartet deshalb nicht nur einen fairen Preis, sondern vor allem einen
            strukturierten Ablauf. Unser Autoankauf in Hofheim am Taunus setzt auf Transparenz von Anfang an: Sie
            starten mit einer kostenlosen Online-Bewertung, erhalten eine nachvollziehbare Einschätzung und entscheiden
            danach ohne Zeitdruck. Bei Interesse koordinieren wir einen Termin, prüfen Fahrzeug und Unterlagen
            nachvollziehbar und schließen den Ankauf rechtssicher ab. Gerade im eng getakteten Pendleralltag ist diese
            Planbarkeit entscheidend.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob gepflegter Pendlerwagen, Familien-SUV oder älteres Zweitfahrzeug: Wir bewerten in Hofheim am Taunus
            nicht pauschal, sondern anhand von Zustand, Servicehistorie, Ausstattung und regionaler Nachfrage im
            Main-Taunus-Korridor. Das macht den Verkaufsprozess klarer und vermeidet die typischen Unsicherheiten aus
            langwierigen Inseratsphasen.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Hofheim am Taunus verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Stadtteile mit unterschiedlichen Fahrprofilen',
                text: 'In Marxheim und Diedenbergen dominieren oft tägliche Pendelwege, während in Wallau und Lorsbach häufiger Familien- und Freizeitnutzung hinzukommt. Diese Unterschiede beeinflussen Nachfrage und Preisbildung.',
              },
              {
                title: 'A66 und A3 als zentrale Verkehrsachsen',
                text: 'Über den Korridor am Wiesbadener Kreuz und die Wallauer Spange entstehen regelmäßige Langstreckenanteile. Bei sauberer Wartung lassen sich solche Fahrzeuge stabil bewerten.',
              },
              {
                title: 'Bahnhof Hofheim und S-Bahn-Anbindung',
                text: 'Viele Haushalte kombinieren Auto und Bahn Richtung Frankfurt. Das führt oft zu Zweitwagen-Verkäufen oder zu gezielten Fahrzeugwechseln nach Arbeitsplatzänderungen.',
              },
              {
                title: 'Main-Taunus als wirtschaftsstarker Pendelraum',
                text: 'Zwischen Dienstleistung, Handel und regionalem Gewerbe ist die Fahrzeugrotation hoch. Ein klar strukturierter Ankauf spart hier viel organisatorischen Aufwand.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Hofheim am Taunus in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Für den Autoankauf in Hofheim am Taunus brauchen Sie keinen komplexen Verkaufsprozess. Drei transparente
            Schritte reichen aus, damit Sie vom ersten Kontakt bis zur Auszahlung jederzeit wissen, was als Nächstes
            passiert.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online-Bewertung ausfüllen',
                text: 'Sie übermitteln die wichtigsten Daten und erhalten eine unverbindliche Preisorientierung auf Basis aktueller Marktdaten.',
              },
              {
                step: '02',
                title: 'Termin in Hofheim abstimmen',
                text: 'Wir legen ein passendes Zeitfenster fest, prüfen das Fahrzeug transparent und gehen die Unterlagen gemeinsam durch.',
              },
              {
                step: '03',
                title: 'Verkauf abschließen',
                text: 'Nach Einigung wird der Kaufvertrag erstellt, die Auszahlung veranlasst und auf Wunsch die Abmeldung unterstützt.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Hofheim am Taunus</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Der Fahrzeugbestand in Hofheim ist breit gefächert, weil der Ort zwischen S-Bahn-Pendeln, Autobahnverkehr
            und familienorientierten Wohnlagen liegt. Häufig sehen wir kompakte Pendlerfahrzeuge, Kombis und SUVs für
            Familienalltag, ältere Zweitwagen sowie moderne Hybrid- und Elektrofahrzeuge. Eine belastbare Bewertung
            muss daher das konkrete Nutzungsprofil berücksichtigen, nicht nur Standardwerte aus Tabellen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerfahrzeuge Richtung Frankfurt und Wiesbaden',
                text: 'Modelle mit täglicher Nutzung auf A66 und A3 sind typisch. Wartungsstand und nachvollziehbare Servicehistorie wirken hier direkt auf den erzielbaren Preis.',
              },
              {
                title: 'Familien-SUVs und Kombis aus Wohnlagen',
                text: 'In Stadtteilen wie Diedenbergen oder Marxheim sind größere Fahrzeuge mit hoher Alltagstauglichkeit verbreitet. Ausstattung und Pflegezustand sind zentrale Faktoren.',
              },
              {
                title: 'Ältere Zweitfahrzeuge',
                text: 'Viele Haushalte reduzieren auf ein Fahrzeug, wenn sich Arbeitswege ändern oder Bahnoptionen attraktiver werden. Auch ältere Modelle lassen sich dann sinnvoll vermarkten.',
              },
              {
                title: 'Elektro- und Hybridfahrzeuge',
                text: 'Bei elektrifizierten Modellen zählen Batteriezustand, Ladehistorie und Dokumentation besonders stark. Transparente Unterlagen verbessern die Vergleichbarkeit.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Altstadt, Bahnhof Hofheim und Wallauer Spange</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Hofheim am Taunus verbindet eine kompakte Innenstadt mit sehr guter regionaler Anbindung. Rund um den
            Bahnhof Hofheim, die Wallauer Spange und die Zufahrten zur A66 kann sich die Verkehrslage je nach Tageszeit
            deutlich verändern. Deshalb planen wir Übergabetermine so, dass sie mit Ihrem Alltag zusammenpassen und
            nicht in unnötige Stoßzeiten fallen.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Diese regionale Dynamik zwischen Main-Taunus und Rhein-Main berücksichtigen wir auch in der Bewertung: Ein
            Fahrzeugprofil mit regelmäßigem Pendelverkehr wird anders eingeordnet als ein reines Kurzstreckenauto.
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
                  { label: 'Verkaufsdauer', mv: 'Oft in 1 bis 2 Tagen', privat: 'Häufig mehrere Wochen', handler: 'Abhängig vom Ankaufbedarf' },
                  { label: 'Ablauf', mv: 'Verbindlicher Terminprozess', privat: 'Viele Rückfragen und Ausfälle', handler: 'Öffnungszeitengebunden' },
                  { label: 'Preisermittlung', mv: 'Datenbasiert und transparent', privat: 'Stark verhandlungsgetrieben', handler: 'Interne Kalkulation' },
                  { label: 'Hofheim-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördentermin im Main-Taunus-Kreis', privat: 'Abmeldung und Nachweise selbst erledigen', handler: 'Serviceumfang unterschiedlich' },
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
              { label: 'Verkaufsdauer', mv: 'Oft in 1 bis 2 Tagen', privat: 'Häufig mehrere Wochen', handler: 'Abhängig vom Ankaufbedarf' },
              { label: 'Ablauf', mv: 'Verbindlicher Terminprozess', privat: 'Viele Rückfragen und Ausfälle', handler: 'Öffnungszeitengebunden' },
              { label: 'Preisermittlung', mv: 'Datenbasiert und transparent', privat: 'Stark verhandlungsgetrieben', handler: 'Interne Kalkulation' },
              { label: 'Hofheim-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördentermin im Main-Taunus-Kreis', privat: 'Abmeldung und Nachweise selbst erledigen', handler: 'Serviceumfang unterschiedlich' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Praktische Vorbereitung für den Verkauf in Hofheim</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Ein zügiger Abschluss funktioniert am besten, wenn alle Unterlagen direkt vorliegen. Dazu zählen
            Zulassungsbescheinigung Teil I und II, alle Schlüssel, Service- und HU-Nachweise sowie transparente Angaben
            zu bekannten Mängeln. Diese Vorbereitung reduziert Rückfragen und hilft, den Ankaufstermin ohne Verzögerung
            abzuschließen.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Bei laufender Finanzierung sollten Restschuld und Ablöse vorab geklärt sein. Gerade im Main-Taunus-Kreis
            mit dichtem Pendelalltag verhindert das zusätzliche Termine und sorgt für einen planbaren Ablauf vom ersten
            Kontakt bis zur Auszahlung.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Zulassungsunterlagen und alle Schlüssel vor dem Termin vollständig prüfen',
              'Wartungsheft, Rechnungen und HU-Berichte geordnet bereithalten',
              'Bekannte Schäden offen angeben, damit die Bewertung nachvollziehbar bleibt',
              'Bei Finanzierung Restschuld und Bankfreigabe rechtzeitig abstimmen',
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
            und erhalten Sie schnell eine belastbare Preisorientierung für Ihr Fahrzeug.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für den regionalen Vergleich im westlichen Rhein-Main-Raum finden Sie auf unserer{' '}
            <Link to="/autoankauf-wiesbaden" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Wiesbaden
            </Link>{' '}
            weitere Hinweise zum Ablauf.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Hofheim am Taunus"
          faqs={[...HOFHEIM_AM_TAUNUS_FAQS]}
          sectionId="faq-hofheim-am-taunus"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Hofheim am Taunus verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten Ihr Fahrzeug ohne langen Inseratsprozess verkaufen? Starten Sie jetzt mit der Bewertung und
            sichern Sie sich einen klaren Ablauf im Main-Taunus-Kreis.
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

export default AutoankaufHofheimAmTaunusPage;
