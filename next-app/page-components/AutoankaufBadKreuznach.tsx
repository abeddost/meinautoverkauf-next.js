'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { BAD_KREUZNACH_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufBadKreuznachPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-44 -right-36 w-[560px] h-[560px] bg-gradient-to-br from-blue-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[26%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] w-72 h-72 bg-orange-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Bad Kreuznach - <span className="text-brand-orange">schnell verkaufen im Naheland</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Der Fahrzeugmarkt in Bad Kreuznach ist stark von Pendelstrecken, regionalem Gewerbe und den typischen
            Stadt-Umland-Bewegungen im Naheland geprägt. Viele Halter nutzen ihr Fahrzeug täglich auf der B41, in
            Richtung A61 oder für Wege zwischen Stadtteilen wie Winzenheim, Planig und Bad Münster am Stein-Ebernburg.
            Dadurch entstehen nicht nur klassische Kurzstreckenprofile, sondern auch Autos mit kontinuierlicher
            Laufleistung, die im privaten Verkauf oft falsch eingeschätzt werden. Wer in Bad Kreuznach verkauft,
            erwartet deshalb nicht nur einen guten Preis, sondern vor allem einen Ablauf, der in den Alltag passt.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Genau hier setzt unser Autoankauf in Bad Kreuznach an. Sie starten mit einer kostenlosen
            Online-Bewertung, erhalten eine nachvollziehbare Preiseinschätzung und entscheiden dann ohne Druck, ob Sie
            verkaufen möchten. Bei Interesse stimmen wir einen klaren Termin ab, prüfen Fahrzeug und Unterlagen
            transparent und schließen den Ankauf rechtssicher ab. Für Berufspendler, Familien und Selbstständige ist
            diese Planbarkeit oft wichtiger als ein theoretischer Höchstpreis mit unsicherer Abschlusswahrscheinlichkeit.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Pendlerfahrzeug, Zweitwagen oder älteres Auto mit dokumentierten Wartungen: Wir bewerten nicht pauschal,
            sondern anhand von Zustand, Servicehistorie, Ausstattung und aktueller regionaler Nachfrage. So bleibt der
            Verkauf in Bad Kreuznach realistisch, verständlich und zeitlich gut steuerbar.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Auto in Bad Kreuznach verkaufen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Stadtteile mit unterschiedlichen Fahrzeugprofilen',
                text: 'In Winzenheim und Planig sehen wir häufig Familienfahrzeuge und Kombis, in Bad Münster am Stein-Ebernburg eher gemischte Pendler- und Alltagsprofile. Diese Unterschiede beeinflussen die Nachfrage deutlich.',
              },
              {
                title: 'B41 und A61 als zentrale Pendelachsen',
                text: 'Die Verkehrsachsen Richtung Rhein-Main und Rheinhessen führen zu regelmäßigen Langstreckenprofilen. Solche Fahrzeuge lassen sich fair bewerten, wenn Wartung und Zustand sauber dokumentiert sind.',
              },
              {
                title: 'Bahnhof Bad Kreuznach als Mobilitätsknoten',
                text: 'Viele Haushalte kombinieren Auto und Bahn. Das führt häufig zu Zweitwagen-Verkäufen oder gezielten Fahrzeugwechseln, wenn sich Arbeitswege verändern.',
              },
              {
                title: 'Nahe-Region mit gemischter Wirtschaftsstruktur',
                text: 'Zwischen Gesundheitswirtschaft, Handel, Handwerk und Logistik entstehen regelmäßig Fahrzeugwechsel in privaten und gewerblichen Flotten. Ein strukturierter Ankauf spart hier spürbar Zeit.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Bad Kreuznach in 3 Schritten</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Sie brauchen keine komplizierte Verkaufsstrecke. In Bad Kreuznach läuft der Ankauf in drei klaren
            Schritten: online bewerten, Termin abstimmen, verbindlich abschließen. So wissen Sie jederzeit, was als
            Nächstes passiert.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online-Bewertung starten',
                text: 'Sie geben Fahrzeugdaten ein und erhalten eine erste, unverbindliche Einschätzung auf Basis aktueller Marktdaten.',
              },
              {
                step: '02',
                title: 'Termin in Bad Kreuznach abstimmen',
                text: 'Wir koordinieren ein passendes Zeitfenster, prüfen Fahrzeugzustand und Unterlagen nachvollziehbar vor Ort.',
              },
              {
                step: '03',
                title: 'Verkauf abschließen und Auszahlung erhalten',
                text: 'Nach Einigung wird der Kaufvertrag erstellt. Die Auszahlung wird direkt veranlasst, bei Bedarf mit Unterstützung bei der Abmeldung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugtypen in Bad Kreuznach</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            In Bad Kreuznach ist der Fahrzeugbestand breit aufgestellt. Neben klassischen Pendlerautos sehen wir viele
            Familien-SUVs, ältere Alltagsfahrzeuge und zunehmend elektrifizierte Modelle. Eine faire Bewertung muss
            daher Nutzung, Wartungsstand und regionale Nachfrage gemeinsam betrachten.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Pendlerfahrzeuge auf B41 und A61',
                text: 'Modelle mit regelmäßigen Fahrten in Richtung Rhein-Main oder Hunsrück sind typisch. Die Servicehistorie spielt hier eine zentrale Rolle für die Preisstabilität.',
              },
              {
                title: 'Familien-SUVs und Kombis',
                text: 'In Wohnlagen rund um Planig oder Winzenheim sind größere Fahrzeuge mit hoher Alltagstauglichkeit verbreitet. Ausstattung und Pflegezustand beeinflussen den Marktwert stark.',
              },
              {
                title: 'Ältere Fahrzeuge mit nachvollziehbarer Historie',
                text: 'Auch ältere Autos haben oft noch einen guten Restwert, wenn bekannte Mängel offen dokumentiert und Unterlagen vollständig vorliegen.',
              },
              {
                title: 'Elektro- und Hybridfahrzeuge',
                text: 'Bei elektrifizierten Modellen sind Ladeverhalten, Batteriezustand und Nachweise besonders wichtig. Transparenz schafft hier belastbare Vergleichbarkeit.',
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
          <h2 className="text-lg lg:text-xl font-black mb-4">Lokaler Bezug: Nahe, Brückenhäuser und Bahnhof Bad Kreuznach</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Bad Kreuznach hat mit Naheufer, Brückenhäusern und Kurgebiet einen klaren lokalen Charakter. Gleichzeitig
            ist die Stadt ein Verkehrsknoten für Pendler in unterschiedliche Richtungen. Deshalb achten wir bei
            Terminen darauf, dass Übergaben praktikabel bleiben und nicht unnötig in Stoßzeiten fallen.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Rund um den Bahnhof Bad Kreuznach und die Zufahrten zur B41 kann sich die Verkehrslage stark ändern. Ein
            planbarer Terminprozess reduziert hier Aufwand und macht den Verkauf auch bei engem Zeitbudget möglich.
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
                  { label: 'Verkaufsdauer', mv: 'Meist 1 bis 2 Tage', privat: 'Oft mehrere Wochen', handler: 'Abhängig von Ankaufbedarf' },
                  { label: 'Planbarkeit', mv: 'Verbindlicher Ablauf mit Termin', privat: 'Viele Einzelanfragen und Absagen', handler: 'Öffnungszeitengebunden' },
                  { label: 'Preisermittlung', mv: 'Datenbasiert + fahrzeugspezifisch', privat: 'Stark verhandlungsgetrieben', handler: 'Interne Ankaufkalkulation' },
                  { label: 'Bad-Kreuznach-spezifischer Aufwand', mv: 'Kein eigener Behördentermin im Kreis Bad Kreuznach bei Wunschservice', privat: 'Abmeldung und Nachweise selbst erledigen', handler: 'Service nicht immer vollständig' },
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
              { label: 'Verkaufsdauer', mv: 'Meist 1 bis 2 Tage', privat: 'Oft mehrere Wochen', handler: 'Abhängig von Ankaufbedarf' },
              { label: 'Planbarkeit', mv: 'Verbindlicher Ablauf mit Termin', privat: 'Viele Einzelanfragen und Absagen', handler: 'Öffnungszeitengebunden' },
              { label: 'Preisermittlung', mv: 'Datenbasiert + fahrzeugspezifisch', privat: 'Stark verhandlungsgetrieben', handler: 'Interne Ankaufkalkulation' },
              { label: 'Bad-Kreuznach-spezifischer Aufwand', mv: 'Kein eigener Behördentermin im Kreis Bad Kreuznach bei Wunschservice', privat: 'Abmeldung und Nachweise selbst erledigen', handler: 'Service nicht immer vollständig' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Praktische Vorbereitung für den Verkauf in Bad Kreuznach</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Ein schneller Abschluss gelingt, wenn Unterlagen und Zustandsangaben vor dem Termin vollständig sind. Dazu
            gehören Zulassungsbescheinigung Teil I und II, alle Schlüssel, Wartungsnachweise und eine transparente
            Angabe bekannter Schäden. Diese Vorbereitung spart Zeit und verringert Rückfragen.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Bei noch laufender Finanzierung sollte die Ablöse frühzeitig geklärt werden. Damit lassen sich Verzögerungen
            am Übergabetag vermeiden und der Ankauf bleibt planbar. Gerade bei Fahrzeugen mit täglichem Einsatz ist
            diese Struktur wichtig, damit der Verkauf nicht in den Arbeitsalltag hineinwächst.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Zulassungsbescheinigung, Fahrzeugbrief und alle Schlüssel vollständig bereitlegen',
              'HU-Berichte, Wartungsrechnungen und Serviceeinträge geordnet vorbereiten',
              'Bekannte Schäden offen dokumentieren, um Nachverhandlungen zu vermeiden',
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
          <h2 className="text-xl font-black text-brand-dark mb-4">Interne Links für den nächsten Schritt</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Starten Sie direkt mit der{' '}
            <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlosen Online-Bewertung
            </Link>{' '}
            und erhalten Sie schnell eine belastbare Preiseinschätzung.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für den regionalen Vergleich im Rhein-Nahe-Korridor finden Sie auf unserer{' '}
            <Link href="/autoankauf-mainz" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Mainz
            </Link>{' '}
            weitere Orientierung für den Verkauf in angrenzenden Pendlerregionen.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Bad Kreuznach"
          faqs={[...BAD_KREUZNACH_FAQS]}
          sectionId="faq-bad-kreuznach"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Bad Kreuznach verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten den Verkauf ohne langen Inseratsprozess abschließen? Starten Sie jetzt mit der Bewertung und
            verkaufen Sie Ihr Fahrzeug in Bad Kreuznach mit klarem Ablauf.
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

export default AutoankaufBadKreuznachPage;
