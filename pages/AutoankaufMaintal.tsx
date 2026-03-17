import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { MAINTAL_FAQS } from '../lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufMaintalPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-48 -right-36 w-[560px] h-[560px] bg-gradient-to-br from-sky-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[24%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-blue-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Maintal - <span className="text-brand-orange">schnell verkaufen zwischen Frankfurt und Hanau</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Maintal ist einer der typischen Mobilitätsstandorte im östlichen Rhein-Main-Gebiet. In Dörnigheim,
            Bischofsheim, Hochstadt und Wachenbuchen werden Fahrzeuge täglich für Pendelwege nach Frankfurt, Offenbach
            und Hanau eingesetzt. Gleichzeitig nutzen viele Haushalte die Bahnverbindungen über Maintal Ost und
            Maintal West. Diese Kombination aus Auto- und Bahnalltag sorgt dafür, dass Fahrzeugwechsel in Maintal oft
            aus praktischen Gründen erfolgen: Jobwechsel, geänderte Familienwege oder der Wunsch nach einem
            sparsameren Modell.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Genau deshalb ist ein geordneter Verkaufsprozess wichtig. Unser Autoankauf in Maintal startet mit einer
            kostenlosen Online-Bewertung und setzt auf klare Schritte statt langem Inseratsstress: realistische
            Preiseinschätzung, Terminabstimmung, transparente Prüfung und rechtssicherer Abschluss. So behalten Sie die
            Kontrolle über Zeitplan und Ablauf, auch wenn Ihr Alltag bereits eng getaktet ist.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Pendlerfahrzeug über A66 und B8, Familienauto aus Hochstadt oder Zweitwagen aus Dörnigheim: Wir
            betrachten Zustand, Historie, Ausstattung und regionale Nachfrage im Main-Kinzig-Korridor gemeinsam. Das
            macht die Bewertung in Maintal belastbar und den Verkauf deutlich effizienter.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Maintal verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Vier Stadtteile mit eigener Mobilitätslogik',
                text: 'Dörnigheim und Bischofsheim sind stark auf den Rhein-Main-Pendelverkehr ausgerichtet, während in Hochstadt und Wachenbuchen häufiger familienorientierte Fahrprofile dominieren.',
              },
              {
                title: 'A66 und B8 als tägliche Pendelachsen',
                text: 'Regelmäßige Fahrten Richtung Frankfurt und Hanau erhöhen die Laufleistung vieler Fahrzeuge. Mit vollständiger Wartungshistorie bleiben diese Profile gut einschätzbar.',
              },
              {
                title: 'Maintal Ost und Maintal West als Bahnanbindung',
                text: 'Viele Haushalte kombinieren Pkw und Bahn. Dadurch entstehen regelmäßig Verkäufe von Zweitwagen oder Umstellungen auf andere Fahrzeugklassen.',
              },
              {
                title: 'Main-Kinzig-Region mit dynamischem Fahrzeugwechsel',
                text: 'Zwischen Arbeitswegen, Familienanforderungen und Gewerbeeinsatz wechseln Fahrzeuge häufiger den Besitzer. Ein strukturierter Ankauf spart Zeit und Abstimmung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Maintal in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Für Maintal setzen wir auf einen klaren 3-Schritte-Prozess, damit Sie ohne lange Wartezeiten vom ersten
            Kontakt bis zur Auszahlung kommen. Jeder Schritt ist transparent und nachvollziehbar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online-Bewertung ausfüllen',
                text: 'Sie übermitteln Fahrzeugdaten und erhalten eine erste Preisorientierung, die auf aktuelle Marktlage und Fahrzeugtyp abgestimmt ist.',
              },
              {
                step: '02',
                title: 'Termin in Maintal abstimmen',
                text: 'Wir koordinieren ein passendes Zeitfenster, prüfen das Fahrzeug transparent und gehen die Unterlagen gemeinsam durch.',
              },
              {
                step: '03',
                title: 'Verkauf abschließen',
                text: 'Nach Einigung erfolgt der Kaufvertrag. Die Auszahlung wird schnell veranlasst und auf Wunsch unterstützen wir die Abmeldung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Maintal</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Der Fahrzeugbestand in Maintal ist durch Pendelstrecken, Familienalltag und regionale Dienstleistungswege
            geprägt. Deshalb sind kompakte Pendlerfahrzeuge, Kombis, SUVs, ältere Alltagswagen und Elektrofahrzeuge
            gleichermaßen relevant. Eine faire Preisermittlung muss das konkrete Nutzungsprofil berücksichtigen,
            statt nur allgemeine Durchschnittswerte anzusetzen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerfahrzeuge Richtung Frankfurt/Hanau',
                text: 'Diese Fahrzeuge laufen oft konstant über A66 und B8. Technischer Zustand, Inspektionshistorie und nachvollziehbare Pflege sind wichtige Werttreiber.',
              },
              {
                title: 'Familienfahrzeuge in Hochstadt und Wachenbuchen',
                text: 'SUVs und Kombis mit hoher Alltagstauglichkeit sind häufig vertreten. Ausstattung, Platzkonzept und Wartungsstand beeinflussen die Nachfrage spürbar.',
              },
              {
                title: 'Ältere Zweitwagen aus Dörnigheim und Bischofsheim',
                text: 'Viele Haushalte reduzieren auf ein Fahrzeug, wenn Bahn und Homeoffice stärker genutzt werden. Auch ältere Modelle können dann sinnvoll verkauft werden.',
              },
              {
                title: 'Elektro- und Hybridmodelle',
                text: 'Bei elektrifizierten Fahrzeugen sind Batteriezustand, Ladeverhalten und Serviceunterlagen besonders wichtig für eine belastbare Bewertung.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Mainufer Dörnigheim, Maintal Ost/West und A66-Korridor</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Maintal verbindet ruhige Wohnlagen mit direkter Nähe zu den großen Arbeitsachsen im Rhein-Main-Gebiet.
            Rund um das Mainufer in Dörnigheim, die Bahnhöfe Maintal Ost und Maintal West sowie die A66 entstehen
            je nach Tageszeit sehr unterschiedliche Verkehrsfenster. Deshalb stimmen wir Übergabetermine so ab, dass
            sie in den Alltag passen und keine zusätzlichen Pendelprobleme verursachen.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Die Nähe zu Hanau und Frankfurt macht Maintal zu einem Standort mit hoher Fahrzeugrotation. Diese lokale
            Dynamik berücksichtigen wir bei der Bewertung, damit Preis und Ablauf realistisch bleiben.
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
                  { label: 'Verkaufsdauer', mv: 'Oft 24 bis 48 Stunden', privat: 'Mehrere Wochen möglich', handler: 'Abhängig von Kapazität' },
                  { label: 'Ablauf', mv: 'Transparenter Terminprozess', privat: 'Viele Nachrichten und Absagen', handler: 'Öffnungszeiten und Ankauffokus' },
                  { label: 'Preisfindung', mv: 'Marktdaten + Fahrzeugprofil', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation mit Abschlägen' },
                  { label: 'Maintal-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördengang im Main-Kinzig-Kreis', privat: 'Abmeldung und Nachweise selbst erledigen', handler: 'Service je nach Betrieb unterschiedlich' },
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
              { label: 'Verkaufsdauer', mv: 'Oft 24 bis 48 Stunden', privat: 'Mehrere Wochen möglich', handler: 'Abhängig von Kapazität' },
              { label: 'Ablauf', mv: 'Transparenter Terminprozess', privat: 'Viele Nachrichten und Absagen', handler: 'Öffnungszeiten und Ankauffokus' },
              { label: 'Preisfindung', mv: 'Marktdaten + Fahrzeugprofil', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation mit Abschlägen' },
              { label: 'Maintal-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördengang im Main-Kinzig-Kreis', privat: 'Abmeldung und Nachweise selbst erledigen', handler: 'Service je nach Betrieb unterschiedlich' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">So bereiten Sie den Verkauf in Maintal sinnvoll vor</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Je vollständiger Ihre Unterlagen, desto schneller lässt sich der Ankauftermin umsetzen. Sinnvoll sind
            Zulassungsbescheinigung Teil I und II, alle Schlüssel, HU-Berichte, Wartungsnachweise und eine klare
            Dokumentation bekannter Mängel. Damit werden Rückfragen reduziert und der Preis kann belastbar eingeordnet
            werden.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Falls das Fahrzeug noch finanziert ist, sollten Restschuld und Ablöse frühzeitig mit der Bank geklärt
            werden. Im stark getakteten Pendleralltag von Maintal verhindert diese Vorbereitung zusätzliche Termine und
            hält den gesamten Verkaufsprozess planbar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Fahrzeugschein, Fahrzeugbrief und alle Schlüssel vollständig bereitlegen',
              'Wartungsheft, Rechnungen und HU-Berichte geordnet vorbereiten',
              'Bekannte Mängel offen notieren, damit die Bewertung transparent bleibt',
              'Bei laufender Finanzierung Restschuld und Ablöse rechtzeitig abstimmen',
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
            Nutzen Sie direkt die{' '}
            <Link to="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlose Online-Bewertung
            </Link>{' '}
            und erhalten Sie eine erste Preisorientierung für Ihr Fahrzeug in Maintal.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für den regionalen Vergleich im östlichen Rhein-Main-Korridor finden Sie auf unserer{' '}
            <Link to="/autoankauf-hanau" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Hanau
            </Link>{' '}
            zusätzliche Informationen zu Ablauf und Marktumfeld.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Maintal"
          faqs={[...MAINTAL_FAQS]}
          sectionId="faq-maintal"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Maintal verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie wollen Ihr Auto ohne lange Vermarktungsschleifen verkaufen? Starten Sie jetzt mit der Bewertung und
            sichern Sie sich einen klar strukturierten Ablauf in Maintal.
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

export default AutoankaufMaintalPage;
