'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { LUDWIGSHAFEN_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufLudwigshafenPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[460px] h-[460px] bg-gradient-to-br from-blue-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[26%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/55 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[7%] w-72 h-72 bg-orange-300/25 rounded-full blur-2xl" />
        <div className="absolute top-24 left-16 w-4 h-4 bg-brand-orange/60 rounded-full" />
        <div className="absolute bottom-20 left-24 w-5 h-5 bg-blue-200/60 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Ludwigshafen – <span className="text-brand-orange">Schnelle Auszahlung & klare Abwicklung</span>{' '}
            in der BASF-Stadt
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Ludwigshafen hat einen Fahrzeugmarkt, der sich deutlich von vielen anderen Städten unterscheidet. Als großer
            Industriestandort mit BASF, Pendlerverkehr in Richtung Mannheim und vielen berufsbedingten Fahrzeugwechseln
            werden hier besonders häufig Dienstwagen, Kombis und hochkilometrige Alltagsautos verkauft. Wer in
            Friesenheim, Oggersheim, Mundenheim oder Oppau wohnt, kennt das: Der private Verkauf kostet oft Wochen,
            weil Besichtigungen koordiniert, Preisverhandlungen geführt und Unterlagen vorbereitet werden müssen.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Genau dafür ist unser Autoankauf Ludwigshafen ausgelegt. Sie starten mit einer kostenlosen Online-Bewertung,
            erhalten ein nachvollziehbares Angebot und entscheiden in Ruhe. Wenn Sie verkaufen möchten, organisieren wir
            einen Termin bei Ihnen vor Ort, prüfen das Fahrzeug transparent und zahlen nach Vertragsabschluss per
            Überweisung aus. Auf Wunsch übernehmen wir zusätzlich die Abmeldung bei der zuständigen Zulassungsstelle der
            Stadt Ludwigshafen, damit Sie keinen Behördentermin einplanen müssen.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Pendlerfahrzeug von der A650, Zweitwagen aus der Gartenstadt oder Firmenwagen aus dem Umfeld des
            Chemie- und Logistiksektors: Wir bewerten nicht pauschal, sondern anhand aktueller Marktdaten,
            Zustand, Wartungshistorie und regionaler Nachfrage im Rhein-Neckar-Raum.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum ist der Fahrzeugverkauf in Ludwigshafen besonders?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'BASF als Taktgeber des lokalen Marktes',
                text: 'Rund um das BASF-Stammwerk in Ludwigshafen wechseln viele Schicht- und Dienstfahrzeuge in festen Zyklen den Besitzer. Dadurch sind gepflegte Kombis und Langstreckenmodelle besonders präsent.',
              },
              {
                title: 'Starker Pendlerkorridor über A650 und B9',
                text: 'Die Achsen A650 (Richtung Mannheim) und B9 erzeugen hohe Laufleistungen bei Pendlerautos. Fahrzeuge mit sauberer Servicehistorie bleiben in dieser Konstellation trotzdem gut vermarktbar.',
              },
              {
                title: 'Stadtteile mit unterschiedlichem Fahrzeugprofil',
                text: 'In Oggersheim und Ruchheim sehen wir häufiger Familienfahrzeuge und Vans, in Mundenheim und Friesenheim eher kompakte Alltagsautos. Das beeinflusst die regionale Nachfrage und damit den Ankaufspreis.',
              },
              {
                title: 'Rhein-Neckar-Verzahnung mit Mannheim',
                text: 'Durch die direkte Nähe zu Mannheim, dem Industriehafen und den Arbeitgebern in beiden Städten sind Fahrzeugwechsel oft zeitkritisch. Deshalb ist ein schneller, planbarer Verkaufsprozess entscheidend.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-black text-brand-dark mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">So verkaufen Sie Ihr Auto in Ludwigshafen in 3 klaren Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Der Ablauf ist bewusst auf den Alltag in Ludwigshafen zugeschnitten: wenig Leerlauf, feste Termine und
            transparente Entscheidungen. Gerade wenn Sie zwischen Arbeitsweg, Familie und Schichtplan wenig Zeit haben,
            profitieren Sie von einem strukturierten Prozess ohne unnötige Zwischenschritte.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online-Bewertung starten',
                desc: 'Sie geben die wichtigsten Fahrzeugdaten ein und erhalten eine erste Einschätzung. Der Schritt ist kostenlos und unverbindlich.',
              },
              {
                step: '02',
                title: 'Termin in Ludwigshafen vereinbaren',
                desc: 'Wir stimmen einen Termin in Ludwigshafen oder direkter Umgebung mit Ihnen ab, prüfen das Fahrzeug vor Ort und beantworten offene Fragen unmittelbar.',
              },
              {
                step: '03',
                title: 'Vertrag, Auszahlung, Abmeldung',
                desc: 'Nach Einigung wird der Vertrag geschlossen, die Zahlung veranlasst und die Abmeldung auf Wunsch übernommen. Damit ist Ihr Verkauf in Ludwigshafen sauber abgeschlossen.',
              },
            ].map((item) => (
              <article key={item.step} className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <p className="text-4xl font-black text-brand-orange/25 mb-2">{item.step}</p>
                <h3 className="font-black text-brand-dark text-base mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Welche Fahrzeugkategorien sind in Ludwigshafen besonders relevant?</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Ludwigshafen ist keine reine Innenstadtlage mit nur einem Fahrzeugtyp. Die Kombination aus Industrie,
            Pendlerbewegungen und Familienhaushalten sorgt für ein breites Spektrum. Entsprechend differenziert fällt
            unsere Bewertung aus: Ein kompakter Stadtwagen wird anders eingeordnet als ein Langstrecken-Diesel mit
            belastbarer Wartungshistorie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Kombis und Flottenfahrzeuge',
                desc: 'Viele Fahrzeuge aus dem industriellen Umfeld sind solide gewartet und dokumentiert. Das ist ein klarer Vorteil bei der Preisfindung.',
              },
              {
                title: 'Pendlerautos mit hoher Laufleistung',
                desc: 'Bei der täglichen Strecke zwischen Ludwigshafen, Mannheim und dem Umland sind hohe Kilometerstände normal. Entscheidend sind Wartung und technischer Zustand.',
              },
              {
                title: 'Familienfahrzeuge aus Wohnlagen',
                desc: 'In Stadtteilen wie Oggersheim oder Gartenstadt sehen wir häufig Vans und Kompakt-SUVs. Hier zählen vor allem Alltagstauglichkeit und Pflegezustand.',
              },
              {
                title: 'Fahrzeuge mit Reparaturbedarf',
                desc: 'Auch Autos mit Unfallschaden oder ohne aktuelle HU können angekauft werden, wenn die Unterlagen vollständig und die Eigentumsverhältnisse eindeutig sind.',
              },
            ].map((cat) => (
              <div key={cat.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-black text-brand-dark text-sm mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white border border-slate-700/50">
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: BASF-Umfeld, Hemshof, A650 und Rheinbrücken</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Unser Team kennt die lokalen Gegebenheiten in Ludwigshafen: vom BASF-Umfeld über Wohnlagen wie Hemshof,
            Friesenheim und Mundenheim bis hin zu den verkehrsreichen Abschnitten Richtung Mannheim. Für viele
            Verkäuferinnen und Verkäufer ist nicht nur der Preis wichtig, sondern auch ein Termin, der zum Alltag passt
            und ohne zusätzliche Wege funktioniert.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Wenn Ihr Fahrzeug täglich über die A650, B9 oder die Rheinquerungen genutzt wurde, ordnen wir Laufleistung
            und Zustand entsprechend ein. Damit vermeiden Sie unrealistische Pauschalpreise und erhalten eine
            Bewertung, die den tatsächlichen Einsatz im Raum Ludwigshafen widerspiegelt.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Meinautoverkauf.de vs. Privatkauf vs. Händler vor Ort</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:hidden">
            {[
              { label: 'Zeit bis zum Abschluss', ankauf: 'Oft 24–48 Stunden', privat: 'Häufig mehrere Wochen', handler: 'Je nach Ankaufquote' },
              { label: 'Planbarkeit', ankauf: 'Fester Prozess mit Termin', privat: 'Absagen und Verhandlungen', handler: 'Hängt von Öffnungszeiten ab' },
              { label: 'Preisfindung', ankauf: 'Datenbasiert und transparent', privat: 'Schwankend je Interessent', handler: 'Häufig mit Risikoabschlag' },
              { label: 'Behördenthema in Ludwigshafen', ankauf: 'Abmeldung auf Wunsch inklusive', privat: 'Selbst zur Zulassungsstelle', handler: 'Nicht immer enthalten' },
            ].map((row) => (
              <div key={row.label} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">{row.label}</h3>
                <p className="text-sm text-green-700 font-semibold mb-1">Meinautoverkauf.de: {row.ankauf}</p>
                <p className="text-sm text-slate-600 font-medium mb-1">Privatkauf: {row.privat}</p>
                <p className="text-sm text-slate-500 font-medium">Händler: {row.handler}</p>
              </div>
            ))}
          </div>

          <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-6 py-4 font-black">Kriterium</th>
                  <th className="text-left px-6 py-4 font-black text-brand-orange">Meinautoverkauf.de</th>
                  <th className="text-left px-6 py-4 font-black">Privatkauf</th>
                  <th className="text-left px-6 py-4 font-black">Klassischer Händler</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Zeit bis zum Abschluss', ankauf: 'Oft 24–48 Stunden', privat: 'Häufig mehrere Wochen', handler: 'Abhängig von Ankaufinteresse' },
                  { label: 'Planbarkeit', ankauf: 'Klarer Ablauf mit Terminfenster', privat: 'Unklare Besichtigungslage', handler: 'Öffnungszeitengebunden' },
                  { label: 'Preisfindung', ankauf: 'Datenbasiert, nachvollziehbar', privat: 'Stark verhandlungsabhängig', handler: 'Risiko- und Marge-orientiert' },
                  { label: 'Ludwigshafen-spezifischer Aufwand', ankauf: 'Keine Zusatzwege zur Zulassungsstelle bei Wunschservice', privat: 'Eigenständige Abmeldung und Nachweise', handler: 'Service nicht immer inklusive' },
                ].map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-3.5 font-semibold text-slate-700">{row.label}</td>
                    <td className="px-6 py-3.5 font-semibold text-green-700">{row.ankauf}</td>
                    <td className="px-6 py-3.5 font-medium text-slate-600">{row.privat}</td>
                    <td className="px-6 py-3.5 font-medium text-slate-600">{row.handler}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-4">Autoankauf Ludwigshafen mit kurzen Wegen</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Wenn Sie den Verkaufsprozess sofort starten möchten, können Sie direkt mit der{' '}
            <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlosen Fahrzeugbewertung
            </Link>{' '}
            beginnen. Für Eigentümer im Rhein-Neckar-Raum ist außerdem unser{' '}
            <Link href="/autoankauf-mannheim" className="text-brand-orange font-bold hover:underline">
              Autoankauf Mannheim
            </Link>{' '}
            relevant, wenn Sie häufig zwischen beiden Städten pendeln.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Sie erhalten damit einen durchgängigen Ablauf ohne Plattform-Chaos: ein Ansprechpartner, ein klarer Termin,
            ein sauberer Vertrag. Gerade in Ludwigshafen, wo viele Fahrzeuge beruflich genutzt werden, ist diese
            Verlässlichkeit oft wichtiger als ein theoretischer Höchstpreis ohne Abschlusswahrscheinlichkeit.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Ludwigshafen"
          faqs={[...LUDWIGSHAFEN_FAQS]}
          sectionId="faq-ludwigshafen"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Ludwigshafen verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Ohne Inserat, ohne Besichtigungstour, ohne Unsicherheit bei der Abwicklung. Starten Sie jetzt und sichern
            Sie sich eine faire Bewertung für Ihr Fahrzeug in Ludwigshafen am Rhein.
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

export default AutoankaufLudwigshafenPage;
