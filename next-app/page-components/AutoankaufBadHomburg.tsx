'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { BAD_HOMBURG_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufBadHomburgPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-44 -right-36 w-[560px] h-[560px] bg-gradient-to-br from-blue-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[24%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] w-72 h-72 bg-orange-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Bad Homburg vor der Höhe - <span className="text-brand-orange">schnell verkaufen im Hochtaunuskreis</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Der Gebrauchtwagenmarkt in Bad Homburg vor der Höhe ist deutlich von Pendelverkehr und gehobenen
            Fahrzeugprofilen geprägt. Viele Eigentümer nutzen ihr Auto täglich auf den Routen Richtung Frankfurt,
            Eschborn oder über das Bad Homburger Kreuz. Gleichzeitig sind in Stadtteilen wie Dornholzhausen,
            Kirdorf oder Ober-Erlenbach Familienfahrzeuge und Zweitwagen verbreitet, die regelmäßig ausgetauscht
            werden. Wer in diesem Umfeld verkauft, erwartet nicht nur einen soliden Preis, sondern vor allem einen
            klar planbaren Ablauf ohne ständige Terminverschiebungen.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Genau dafür ist unser Autoankauf in Bad Homburg aufgebaut. Sie starten mit einer kostenlosen
            Online-Bewertung, erhalten ein nachvollziehbares Angebot und entscheiden anschließend ohne Zeitdruck.
            Bei Verkauf organisieren wir einen verbindlichen Termin, prüfen Fahrzeug und Unterlagen transparent und
            schließen den Ankauf rechtssicher ab. Für viele Verkäufer ist wichtig, dass der Prozess auch dann
            funktioniert, wenn Arbeitsalltag, Schulzeiten oder Geschäftsreisen wenig Flexibilität lassen.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob gut ausgestattete Limousine aus Gonzenheim, Pendlerfahrzeug mit höherer Laufleistung oder SUV aus dem
            Umland: Wir bewerten nicht pauschal, sondern anhand von Zustand, Wartungshistorie und regionaler Nachfrage
            im Rhein-Main- und Taunus-Raum. Dadurch bleibt die Preisfindung realistisch und der Abschluss verlässlich.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Bad Homburg vor der Höhe verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Stadtteile mit unterschiedlichen Nutzungsmustern',
                text: 'In Kirdorf und Gonzenheim sehen wir häufig urbane Alltagsautos, in Ober-Erlenbach und Dornholzhausen eher Familienfahrzeuge mit längeren Streckenprofilen. Das wirkt sich direkt auf die Marktansprache aus.',
              },
              {
                title: 'Bad Homburger Kreuz als Verkehrsdrehscheibe',
                text: 'Durch die Nähe zu A5 und A661 entstehen viele Pendlerfahrzeuge mit klarer Langstreckenhistorie. Entscheidend ist hier die Dokumentation der Wartung, nicht nur der Kilometerstand.',
              },
              {
                title: 'Bahnhof Bad Homburg und S-Bahn-Pendelkorridor',
                text: 'Viele Haushalte kombinieren Auto und ÖPNV. Das führt regelmäßig zu Zweitwagen-Verkäufen oder zu Fahrzeugwechseln, wenn sich Arbeitswege Richtung Frankfurt verändern.',
              },
              {
                title: 'Wirtschaftsstandort mit Firmen- und Dienstwagen',
                text: 'Mit großen Arbeitgebern wie Fresenius im Umfeld entstehen planbare Fahrzeugwechsel. Gut gepflegte Dienstwagen lassen sich dadurch häufig strukturiert und ohne lange Vermarktungsphase verkaufen.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Bad Homburg in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Der Ablauf ist bewusst schlank: erst online bewerten, dann Termin sichern, danach verbindlich abschließen.
            So bleibt der Verkauf in Bad Homburg übersichtlich und Sie wissen jederzeit, welcher Schritt als nächstes
            ansteht.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online-Bewertung starten',
                text: 'Sie geben die wichtigsten Fahrzeugdaten ein und erhalten eine erste Orientierung zum aktuellen Marktwert.',
              },
              {
                step: '02',
                title: 'Termin in Bad Homburg vereinbaren',
                text: 'Wir stimmen ein passendes Zeitfenster ab und prüfen Fahrzeugzustand sowie Unterlagen transparent vor Ort.',
              },
              {
                step: '03',
                title: 'Verkauf abschließen',
                text: 'Nach Einigung folgt der Kaufvertrag und die Auszahlung wird direkt veranlasst, auf Wunsch mit Abmeldeunterstützung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Bad Homburg vor der Höhe</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            In Bad Homburg treffen mehrere Fahrzeugsegmente aufeinander: klassische Pendlerautos, Familien-SUVs,
            hochwertige Dienstwagen und zunehmend elektrifizierte Modelle. Eine faire Bewertung muss daher stärker auf
            Nutzung, Pflegezustand und Ausstattung schauen als auf pauschale Durchschnittswerte.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerfahrzeuge Richtung Frankfurt',
                text: 'Modelle mit täglicher Nutzung über A661 oder A5 sind häufig. Dokumentierte Wartung erhöht hier die Bewertungsstabilität deutlich.',
              },
              {
                title: 'Familien-SUVs und Kombis',
                text: 'In den Wohnlagen des Hochtaunuskreises sind größere Fahrzeuge mit hoher Alltagstauglichkeit verbreitet. Zustand und Historie beeinflussen den Verkaufspreis stark.',
              },
              {
                title: 'Premium- und Dienstwagen',
                text: 'Bad Homburg zeigt überdurchschnittlich viele gut ausgestattete Fahrzeuge aus beruflichem Umfeld. Bei vollständigen Unterlagen gelingt die Vermarktung meist planbar.',
              },
              {
                title: 'Ältere und elektrische Fahrzeuge',
                text: 'Auch ältere Fahrzeuge oder E-Modelle können sinnvoll verkauft werden, wenn Batteriestatus, Wartung und bekannte Mängel transparent dargestellt sind.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Schloss Bad Homburg, Kurpark und Bad Homburger Kreuz</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Für die Terminplanung zählen in Bad Homburg oft kurze Wege und verlässliche Zeitfenster. Zwischen Innenstadt,
            Kurpark, Schloss Bad Homburg und den Wohnlagen Richtung Ober-Erlenbach unterscheiden sich Verkehrsfluss und
            Erreichbarkeit spürbar. Deshalb planen wir Übergaben nicht starr, sondern orientiert an Ihrem Tagesablauf.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Besonders auf den Zufahrten zum Bad Homburger Kreuz ist der Verkehr zu Spitzenzeiten stark. Wenn Ihr Fahrzeug
            häufig in diesem Korridor eingesetzt wurde, ordnen wir Laufleistung und Nutzung entsprechend ein und bleiben
            bei der Bewertung nachvollziehbar.
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
                  { label: 'Geschwindigkeit', mv: 'Oft in 1 bis 2 Tagen', privat: 'Häufig mehrere Wochen', handler: 'Abhängig vom Ankaufinteresse' },
                  { label: 'Planbarkeit', mv: 'Fester Ablauf mit Terminfenster', privat: 'Absagen und Nachverhandlungen', handler: 'Gebunden an Öffnungszeiten' },
                  { label: 'Preisfindung', mv: 'Marktdaten + Zustand + Region', privat: 'Stark verhandlungsabhängig', handler: 'Interne Ankaufkalkulation' },
                  { label: 'Bad-Homburg-spezifischer Aufwand', mv: 'Kein Extra-Termin bei der Zulassungsstelle im Hochtaunuskreis bei Wunschservice', privat: 'Abmeldung und Nachweise selbst organisieren', handler: 'Service je Betrieb unterschiedlich' },
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
              { label: 'Geschwindigkeit', mv: 'Oft in 1 bis 2 Tagen', privat: 'Häufig mehrere Wochen', handler: 'Abhängig vom Ankaufinteresse' },
              { label: 'Planbarkeit', mv: 'Fester Ablauf mit Terminfenster', privat: 'Absagen und Nachverhandlungen', handler: 'Gebunden an Öffnungszeiten' },
              { label: 'Preisfindung', mv: 'Marktdaten + Zustand + Region', privat: 'Stark verhandlungsabhängig', handler: 'Interne Ankaufkalkulation' },
              { label: 'Bad-Homburg-spezifischer Aufwand', mv: 'Kein Extra-Termin bei der Zulassungsstelle im Hochtaunuskreis bei Wunschservice', privat: 'Abmeldung und Nachweise selbst organisieren', handler: 'Service je Betrieb unterschiedlich' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Vorbereitung für einen schnellen Verkauf in Bad Homburg</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Je besser die Unterlagen vorbereitet sind, desto kürzer dauert der Termin. Gerade in einem Umfeld mit vielen
            Berufspendlern hilft ein strukturierter Ablauf: Fahrzeugbrief, Fahrzeugschein, Schlüssel, Wartungsnachweise
            und bekannte Mängel sollten vorab vollständig vorliegen. Das reduziert Rückfragen und schafft eine belastbare
            Grundlage für die finale Bewertung.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Bei finanzierten Fahrzeugen lohnt es sich, die Ablöse frühzeitig mit der Bank zu klären. Das vermeidet
            Verzögerungen am Übergabetag und sorgt dafür, dass Auszahlung und Vertragsabschluss ohne zusätzliche
            Schleifen erfolgen. So bleibt der Verkauf auch bei engem Zeitfenster gut planbar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Zulassungsbescheinigung Teil I und II sowie alle Fahrzeugschlüssel bereitlegen',
              'HU-Berichte, Serviceheft und Wartungsrechnungen vor dem Termin sortieren',
              'Bekannte Schäden offen angeben, um spätere Nachverhandlungen zu vermeiden',
              'Bei Finanzierung den Bankkontakt und die Restschuld vorab prüfen',
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
            Starten Sie direkt mit der{' '}
            <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlosen Online-Bewertung
            </Link>{' '}
            und erhalten Sie in wenigen Minuten eine erste Preiseinschätzung für Ihr Fahrzeug.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Wenn Sie regelmäßig in Richtung Innenstadt pendeln, finden Sie auf unserer{' '}
            <Link href="/autoankauf-frankfurt" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Frankfurt
            </Link>{' '}
            zusätzliche regionale Orientierung für den nächsten Verkaufsschritt.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Bad Homburg vor der Höhe"
          faqs={[...BAD_HOMBURG_FAQS]}
          sectionId="faq-bad-homburg"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Bad Homburg vor der Höhe verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten ohne langes Inserieren verkaufen? Starten Sie jetzt mit der Bewertung und schließen Sie den
            Autoankauf in Bad Homburg mit klarem Prozess und schneller Auszahlung ab.
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

export default AutoankaufBadHomburgPage;
