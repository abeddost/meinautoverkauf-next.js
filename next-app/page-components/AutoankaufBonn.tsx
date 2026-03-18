'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { BONN_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufBonnPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-44 -right-32 w-[560px] h-[560px] bg-gradient-to-br from-sky-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[24%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] w-72 h-72 bg-blue-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Bonn - <span className="text-brand-orange">schnell verkaufen in der Bundesstadt</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Bonn ist ein Fahrzeugmarkt mit sehr eigenem Rhythmus: Bundesstadt, UN-Standort, großer Dienstleistungs- und
            Wissenschaftsraum und gleichzeitig ein klassischer Pendlerkorridor zwischen Rhein-Sieg, Köln und dem
            linksrheinischen Umland. In Stadtteilen wie Beuel, Bad Godesberg oder Duisdorf unterscheiden sich die
            Fahrprofile deutlich. Manche Fahrzeuge laufen täglich über A565, A59 oder A555, andere sind eher für
            urbane Wege, Familienalltag oder den kombinierten Weg zwischen Bahnhof und Arbeitsplatz im Einsatz. Diese
            Mischung aus Langstrecke, Kurzstrecke und wechselnder Nutzung sorgt dafür, dass pauschale Online-Preise den
            tatsächlichen Marktwert oft nicht präzise abbilden.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Genau deshalb ist ein transparenter Prozess beim Autoankauf in Bonn entscheidend. Unser Ablauf startet mit
            einer kostenlosen Online-Bewertung und einer nachvollziehbaren Ersteinschätzung. Im Anschluss wählen Sie
            in Ruhe, ob ein Verkauf für Sie aktuell sinnvoll ist. Bei Interesse koordinieren wir einen festen Termin, prüfen Fahrzeugzustand
            und Unterlagen strukturiert und schließen den Verkauf rechtssicher ab. Für viele Halter ist diese
            Planbarkeit der größte Vorteil, weil sie den Verkauf ohne lange Inseratsphase in den laufenden Alltag
            integrieren können.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Pendlerfahrzeug, Familienwagen oder älteres Zweitauto: In Bonn bewerten wir anhand von Zustand,
            Servicehistorie, Ausstattung und lokaler Nachfrage im Raum Köln/Bonn. So entsteht eine realistische
            Entscheidungsbasis statt einer unverbindlichen Schätzung ohne Bezug zur tatsächlichen Nutzung.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Bonn verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Stadtteile mit unterschiedlichen Mobilitätsprofilen',
                text: 'In Beuel sind häufig Pendler- und Rheinquerungsprofile typisch, in Bad Godesberg sehen wir viele Familienfahrzeuge, während in Duisdorf oft gemischte Stadt-Umland-Nutzung dominiert.',
              },
              {
                title: 'A565, A59 und A555 als Kernachsen',
                text: 'Die Autobahnverbindungen Richtung Köln, Troisdorf und Rhein-Sieg prägen die Laufleistung vieler Fahrzeuge. Bei sauberer Wartung bleiben diese Profile gut bewertbar.',
              },
              {
                title: 'Bonn Hbf als multimodaler Knoten',
                text: 'Viele Haushalte kombinieren Auto und Bahn. Das führt regelmäßig zu Zweitwagenverkäufen oder zu gezielten Umstellungen auf andere Fahrzeugtypen.',
              },
              {
                title: 'UN-Campus und Telekom-Umfeld',
                text: 'Internationale Beschäftigte, Dienstwagennutzung und häufige Wohnortwechsel erhöhen die Fahrzeugrotation in Bonn spürbar. Ein klarer Ankaufprozess spart dabei Zeit.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Bonn in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Der Autoankauf in Bonn ist bewusst schlank organisiert. Drei klare Schritte reichen aus, damit Sie vom
            ersten Datenabgleich bis zur Auszahlung ohne Umwege durch den Prozess gehen können.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online-Bewertung ausfüllen',
                text: 'Sie übermitteln die wichtigsten Fahrzeugdaten und erhalten eine erste, unverbindliche Preisorientierung auf Marktbasis.',
              },
              {
                step: '02',
                title: 'Termin in Bonn abstimmen',
                text: 'Wir definieren ein passendes Zeitfenster, prüfen Unterlagen und Fahrzeug transparent und klären Rückfragen direkt.',
              },
              {
                step: '03',
                title: 'Vertrag und Auszahlung',
                text: 'Nach Einigung wird der Kaufvertrag erstellt. Die Auszahlung wird zügig veranlasst, auf Wunsch mit Unterstützung bei der Abmeldung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Bonn</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            In Bonn treffen urbane Mobilität, Pendelverkehr und dienstliche Nutzung aufeinander. Das führt zu einem
            vielseitigen Fahrzeugmix aus kompakten Pendlerautos, Familien-SUVs und Kombis, älteren Zweitwagen sowie
            elektrifizierten Modellen. Eine verlässliche Bewertung berücksichtigt daher immer den realen Einsatz und
            den Wartungszustand statt nur pauschaler Durchschnittswerte.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerfahrzeuge Richtung Köln und Rhein-Sieg',
                text: 'Regelmäßige Fahrten über A565 und A59 sind in Bonn üblich. Servicequalität und technischer Zustand sind hier wichtige Wertfaktoren.',
              },
              {
                title: 'Familien-SUVs und Kombis',
                text: 'In vielen Wohnlagen werden Fahrzeuge mit Platz und Flexibilität benötigt. Ausstattung, Pflege und nachvollziehbare Historie beeinflussen die Nachfrage stark.',
              },
              {
                title: 'Ältere Alltags- und Zweitwagen',
                text: 'Gerade bei geänderten Arbeitswegen werden ältere Fahrzeuge verkauft. Auch hier kann ein fairer Preis erzielt werden, wenn Unterlagen vollständig vorliegen.',
              },
              {
                title: 'Elektro- und Hybridfahrzeuge',
                text: 'Bei elektrifizierten Modellen spielen Ladehistorie, Batteriezustand und Softwarestand eine zentrale Rolle für eine belastbare Preisfindung.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: UN-Campus, Rheinufer und Bonn Hbf</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Bonn ist durch den UN-Campus, das Regierungsviertel und das dichte Pendlernetz stark geprägt. Rund um Bonn
            Hbf, die Rheinuferachsen und die Zufahrten zu A565 und A555 entstehen je nach Tageszeit deutliche
            Verkehrsfenster. Deshalb planen wir Termine so, dass sie mit Ihrem Alltag zusammenpassen und zusätzliche
            Wege möglichst vermeiden.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Diese lokale Dynamik fließt in die Bewertung ein: Fahrzeuge mit regelmäßigem Pendelprofil werden anders
            eingeordnet als reine Kurzstreckenautos. So bleibt der Preis realistisch und nachvollziehbar.
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
                  { label: 'Abschlussdauer', mv: 'Meist 1 bis 2 Tage', privat: 'Oft mehrere Wochen', handler: 'Abhängig von Kapazität' },
                  { label: 'Ablaufklarheit', mv: 'Strukturierter Terminprozess', privat: 'Viele Einzeltermine', handler: 'Öffnungszeitengebunden' },
                  { label: 'Preisermittlung', mv: 'Datenbasiert und transparent', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
                  { label: 'Bonn-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördentermin in Bonn', privat: 'Abmeldung und Nachweise selbst', handler: 'Serviceumfang unterschiedlich' },
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
              { label: 'Abschlussdauer', mv: 'Meist 1 bis 2 Tage', privat: 'Oft mehrere Wochen', handler: 'Abhängig von Kapazität' },
              { label: 'Ablaufklarheit', mv: 'Strukturierter Terminprozess', privat: 'Viele Einzeltermine', handler: 'Öffnungszeitengebunden' },
              { label: 'Preisermittlung', mv: 'Datenbasiert und transparent', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
              { label: 'Bonn-spezifischer Vorteil', mv: 'Auf Wunsch kein eigener Behördentermin in Bonn', privat: 'Abmeldung und Nachweise selbst', handler: 'Serviceumfang unterschiedlich' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Praktische Vorbereitung für den Verkauf in Bonn</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Für einen schnellen Abschluss lohnt sich eine saubere Vorbereitung: Zulassungsbescheinigung Teil I und II,
            alle Schlüssel, HU-Berichte und Wartungsunterlagen sollten vollständig vorliegen. Ergänzend hilft eine
            transparente Aufstellung bekannter Mängel, damit Rückfragen am Termin vermieden werden und die Bewertung
            direkt belastbar ist.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Wenn Ihr Fahrzeug noch finanziert ist, empfehlen wir eine frühzeitige Abstimmung von Restschuld und
            Ablöse mit der Bank. Im dichten
            Pendleralltag der Region Köln/Bonn reduziert das den Abstimmungsaufwand und verhindert zusätzliche
            Terminrunden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Fahrzeugpapiere und Schlüssel vorab vollständig prüfen',
              'HU-Berichte, Rechnungen und Wartungsheft geordnet bereitlegen',
              'Bekannte Schäden offen dokumentieren, um Nachverhandlungen zu minimieren',
              'Bei Finanzierung Ablöse und Bankfreigabe frühzeitig klären',
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
            und erhalten Sie schnell eine erste Preisorientierung.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für den regionalen Vergleich im Rheinland lohnt zusätzlich der Blick auf unsere{' '}
            <Link href="/autoankauf-koeln" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Köln
            </Link>{' '}
            mit ergänzenden Markthinweisen.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Bonn"
          faqs={[...BONN_FAQS]}
          sectionId="faq-bonn"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Bonn verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten Ihr Fahrzeug ohne lange Inseratsphase verkaufen? Starten Sie jetzt und nutzen Sie einen
            transparenten Ablauf für Bonn und die gesamte Region.
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

export default AutoankaufBonnPage;
