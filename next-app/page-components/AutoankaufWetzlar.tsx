'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { WETZLAR_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufWetzlarPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-48 -right-32 w-[560px] h-[560px] bg-gradient-to-br from-amber-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[24%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-sky-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[9%] w-72 h-72 bg-orange-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Wetzlar - <span className="text-brand-orange">schneller Verkauf im Lahn-Dill-Korridor</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            In Wetzlar ist der Fahrzeugmarkt stark von Pendel- und Berufsverkehr geprägt. Viele Halter nutzen ihr Auto
            täglich auf den Achsen Richtung Giessen, Frankfurt und innerhalb des Lahn-Dill-Kreises. Gleichzeitig ist
            die Stadt durch Industrie, Dienstleistung und den Optikstandort rund um Leica gezeichnet: Dienstwagen,
            technisch gut gewartete Pendlerfahrzeuge und Familienautos mit stabiler Nutzung sind besonders häufig.
            Genau diese Mischung macht den Verkauf über Kleinanzeigen oft zögerlich, weil Interessenten sehr
            unterschiedliche Erwartungen an Preis, Zustand und Ausstattung haben.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Unser Autoankauf Wetzlar setzt auf eine klare Struktur statt Verhandlungsmarathon. Sie starten online mit
            einer kostenlosen Bewertung, erhalten eine nachvollziehbare Einschätzung und entscheiden dann in Ruhe. Wenn
            Sie verkaufen möchten, vereinbaren wir einen verbindlichen Termin in Wetzlar oder im nahen Umland, prüfen
            Fahrzeug und Unterlagen transparent und schließen den Kauf rechtssicher ab. Gerade für Berufstätige in
            Dalheim, Nauborn oder Hermannstein ist das entscheidend, weil der Verkauf nicht zum Zusatzprojekt werden
            darf.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Dabei werden lokale Faktoren bewusst mitbewertet: Laufleistung im Pendelbetrieb, Wartungshistorie,
            saisonale Nachfrage im regionalen Markt und der konkrete Fahrzeugtyp. So entsteht ein Preis, der zur realen
            Situation in Wetzlar passt und nicht nur auf pauschalen Annahmen beruht.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Wetzlar verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Wetzlarer Kreuz als Mobilitätsfaktor',
                text: 'Die Nähe zum Wetzlarer Kreuz mit A45 und A480 sorgt für hohe Alltagsmobilität. Fahrzeuge aus diesem Umfeld werden regelmäßig genutzt und brauchen eine realistische Bewertung nach Historie.',
              },
              {
                title: 'Bahnhof Wetzlar im Lahn- und Dill-Korridor',
                text: 'Viele Haushalte kombinieren Bahn und Auto. Daraus entstehen häufig Fahrzeugwechsel, etwa wenn ein Zweitwagen entfällt oder Pendelrouten angepasst werden.',
              },
              {
                title: 'Unterschiedliche Profile in den Stadtteilen',
                text: 'In Dalheim und Nauborn sind häufig Familienfahrzeuge vertreten, in Hermannstein und den angrenzenden Gewerbelagen eher Pendler- und Dienstwagen. Das beeinflusst Angebot und Nachfrage.',
              },
              {
                title: 'Wirtschaftsstruktur mit Optik- und Industriefokus',
                text: 'Der Standort Wetzlar mit Unternehmen wie Leica fördert regelmäßige Fahrzeugwechsel. Gepflegte Dienst- und Firmenwagen lassen sich dadurch oft planbar verkaufen.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Wetzlar in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Unser Prozess ist darauf ausgelegt, dass Sie in Wetzlar ohne lange Unterbrechung verkaufen können. Jeder
            Schritt hat einen klaren Zweck, und Sie erhalten vor dem Termin alle Informationen, die für eine schnelle
            Entscheidung wichtig sind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online bewerten',
                text: 'Sie tragen die wichtigsten Fahrzeugdaten ein und bekommen eine erste Orientierung zum möglichen Ankaufspreis.',
              },
              {
                step: '02',
                title: 'Termin in Wetzlar planen',
                text: 'Wir stimmen ein Terminfenster ab, das zu Ihrem Tagesablauf passt, und prüfen das Fahrzeug vor Ort mit nachvollziehbarer Dokumentation.',
              },
              {
                step: '03',
                title: 'Vertrag und Auszahlung',
                text: 'Nach Einigung erfolgt der Vertragsabschluss. Die Auszahlung wird umgehend veranlasst, optional inklusive Unterstützung bei der Abmeldung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Wetzlar: was lokal häufig verkauft wird</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            In Wetzlar treffen mehrere Fahrprofile zusammen: täglicher Pendelverkehr, Familienmobilität und
            dienstliche Nutzung. Dadurch ist der Markt breiter als in Städten mit nur einem dominanten Nutzungsmuster.
            Eine faire Bewertung muss diese Unterschiede sichtbar machen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerfahrzeuge nach Giessen und Frankfurt',
                text: 'Kompakte Benziner und Diesel mit regelmäßigen Langstrecken sind typisch. Wichtig sind Serviceintervalle und nachvollziehbare Verschleißhistorie.',
              },
              {
                title: 'Familien-SUVs und Kombis',
                text: 'In Wohnlagen wie Nauborn oder Dalheim sehen wir viele größere Fahrzeuge mit hohem Alltagsnutzen. Zustand und Ausstattung wirken direkt auf den Marktwert.',
              },
              {
                title: 'Dienst- und Firmenwagen',
                text: 'Durch den lokalen Wirtschaftsstandort werden Firmenfahrzeuge häufig in festen Zyklen ersetzt. Gute Dokumentation schafft hier klare Preisgrundlagen.',
              },
              {
                title: 'Aeltere Fahrzeuge mit Restwertpotenzial',
                text: 'Auch bei älteren Modellen ist ein seriöser Ankauf möglich, sofern Unterlagen vollständig und bekannte Mängel offen kommuniziert sind.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Leica-Standort, Dom Wetzlar und A45-Korridor</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Wetzlar verbindet historische Innenstadt mit modernem Wirtschaftsprofil. Rund um den Leica-Standort, den
            Bahnhof Wetzlar und die Achsen zur A45 entstehen unterschiedliche Mobilitätsmuster, die wir bei der
            Terminplanung berücksichtigen. Wer zwischen Arbeit und Familie verkauft, braucht keine pauschale Lösung,
            sondern einen Ablauf mit realistischen Zeitfenstern.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Auch lokale Orientierungspunkte wie der Bereich um den Dom Wetzlar oder die Zufahrten Richtung A480 helfen,
            Termine praktisch einzuordnen. Damit wird der Verkauf nicht nur rechnerisch fair, sondern auch organisatorisch
            gut machbar.
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
                  { label: 'Geschwindigkeit', mv: 'Häufig 24 bis 48 Stunden', privat: 'Oft mehrere Wochen', handler: 'Je nach Ankaufbedarf' },
                  { label: 'Planungssicherheit', mv: 'Verbindlicher Terminprozess', privat: 'Anfragen mit hoher Ausfallquote', handler: 'Oeffnungszeitengebunden' },
                  { label: 'Preisfindung', mv: 'Regional und datenbasiert', privat: 'Stark von Verhandlung abhängig', handler: 'Interne Kalkulation mit Sicherheitsabschlag' },
                  { label: 'Wetzlar-spezifischer Verwaltungsaufwand', mv: 'Unterstützung ohne Zusatztermine bei der Zulassungsstelle', privat: 'Abmeldung und Nachweise komplett selbst', handler: 'Service je Betrieb unterschiedlich' },
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
              { label: 'Geschwindigkeit', mv: 'Häufig 24 bis 48 Stunden', privat: 'Oft mehrere Wochen', handler: 'Je nach Ankaufbedarf' },
              { label: 'Planungssicherheit', mv: 'Verbindlicher Terminprozess', privat: 'Anfragen mit hoher Ausfallquote', handler: 'Oeffnungszeitengebunden' },
              { label: 'Preisfindung', mv: 'Regional und datenbasiert', privat: 'Stark von Verhandlung abhängig', handler: 'Interne Kalkulation mit Sicherheitsabschlag' },
              { label: 'Wetzlar-spezifischer Verwaltungsaufwand', mv: 'Unterstützung ohne Zusatztermine bei der Zulassungsstelle', privat: 'Abmeldung und Nachweise komplett selbst', handler: 'Service je Betrieb unterschiedlich' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Praktische Vorbereitung für den Verkauf in Wetzlar</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            In Wetzlar gelingt ein schneller Abschluss vor allem dann, wenn die Übergabe strukturiert vorbereitet ist.
            Viele Verkäufer planen den Termin zwischen Arbeitsweg, Familienalltag und Pendelzeiten. Deshalb lohnt es
            sich, alle relevanten Dokumente vorab bereitzulegen und bekannte Punkte am Fahrzeug transparent zu benennen.
            Das verkürzt den Termin und schafft für beide Seiten eine klare Entscheidungsbasis.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Bei Fahrzeugen aus dem täglichen Verkehr über A45 und A480 sind Wartungsbelege besonders hilfreich. Sie
            zeigen, wie das Fahrzeug technisch betreut wurde und reduzieren Unsicherheit in der Bewertung. Auch bei
            Firmenwagen oder ehemals geleasten Fahrzeugen ist ein geordneter Unterlagenstand entscheidend, damit der
            Verkauf in Wetzlar ohne zusätzliche Schleifen abgeschlossen werden kann.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Alle Schlüssel, Fahrzeugschein und Fahrzeugbrief vor dem Termin komplett prüfen',
              'Wartungsnachweise, HU-Berichte und Reparaturbelege griffbereit sortieren',
              'Bekannte Mängel offen nennen, damit die Bewertung realistisch und belastbar bleibt',
              'Bei laufender Finanzierung den Kontakt zur Bank frühzeitig klären',
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
            und prüfen Sie sofort, wo Ihr Fahrzeug preislich im Markt steht.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Wenn Sie regelmäßig zwischen Wetzlar und Rhein-Main pendeln, erhalten Sie auf unserer{' '}
            <Link href="/autoankauf-frankfurt" className="text-brand-orange font-bold hover:underline">
              Autoankauf-Frankfurt Seite
            </Link>{' '}
            zusätzliche regionale Einordnung für den nächsten Verkaufsschritt.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Wetzlar"
          faqs={[...WETZLAR_FAQS]}
          sectionId="faq-wetzlar"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Wetzlar verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten einen schnellen, nachvollziehbaren Verkauf ohne lange Verhandlungsrunden? Starten Sie mit der
            Bewertung und verkaufen Sie Ihr Auto in Wetzlar mit festem Ablauf.
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

export default AutoankaufWetzlarPage;
