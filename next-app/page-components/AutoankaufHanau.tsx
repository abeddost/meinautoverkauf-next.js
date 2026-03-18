'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { HANAU_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufHanauPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-48 right-[-140px] w-[560px] h-[560px] bg-gradient-to-br from-amber-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[22%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-sky-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[8%] right-[10%] w-72 h-72 bg-orange-300/25 rounded-full blur-2xl" />
        <div className="absolute top-24 left-16 w-4 h-4 bg-brand-orange/60 rounded-full" />
        <div className="absolute bottom-20 left-[22%] w-5 h-5 bg-sky-200/70 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Hanau – <span className="text-brand-orange">Planbar verkaufen statt lange suchen</span>{' '}
            im Main-Kinzig-Raum
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            In Hanau verkaufen viele Eigentümer ihr Fahrzeug nicht "irgendwann", sondern dann, wenn beruflich oder
            privat ein Wechsel ansteht: neuer Arbeitsweg, Umzug, Leasingende oder Zweitwagen-Abbau. Genau in solchen
            Situationen ist Zeit oft der knappste Faktor. Zwischen Pendelverkehr Richtung Frankfurt, Familienalltag in
            Kesselstadt oder Steinheim und Arbeit im Industrieumfeld rund um Wolfgang braucht es eine Lösung, die
            verlässlich funktioniert und keine wochenlange Inserate-Phase erfordert.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Unser Autoankauf Hanau ist auf diese Realität ausgelegt. Sie erhalten zuerst eine kostenlose Online-
            Bewertung, dann einen klaren Termin zur Vor-Ort-Prüfung und anschließend – bei Einigung – einen direkten
            Vertragsabschluss. Der entscheidende Punkt: Sie wissen jederzeit, wo im Prozess Sie stehen, welche Unterlagen
            fehlen und wann Ihr Fahrzeug verbindlich übergeben werden kann. Genau das unterscheidet einen strukturierten
            Ankauf von einem offenen Privatverkauf mit unklarer Abschlussquote.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Für Hanau ist diese Planbarkeit besonders relevant, weil die Stadt als Knoten zwischen Frankfurt, Offenbach,
            Aschaffenburg und dem Main-Kinzig-Kreis funktioniert. Wir berücksichtigen deshalb lokale Nutzungsmuster
            (Pendlerkilometer, Firmenwagenprofile, Stadt-Umland-Fahrten) in der Bewertung und arbeiten nicht mit einem
            pauschalen Schema, das regionale Unterschiede ignoriert.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Warum Hanau ein eigener Fahrzeugmarkt ist</h2>
          <ul className="space-y-4">
            {[
              {
                title: 'Heraeus- und Wolfgang-Umfeld',
                text: 'Im Bereich Hanau-Wolfgang wechseln regelmäßig Dienst- und Projektfahrzeuge den Besitzer. Diese Fahrzeuge sind häufig solide gewartet, was sich direkt auf die Bewertbarkeit auswirkt.',
              },
              {
                title: 'Verkehrsdruck am Hanauer Kreuz (A66/A45)',
                text: 'Der tägliche Verkehr im Korridor Richtung Frankfurt führt oft zu höheren Laufleistungen. In Hanau ist das normal und muss differenziert statt pauschal bewertet werden.',
              },
              {
                title: 'Hanau Hbf als Pendlerdrehscheibe',
                text: 'Viele Verkäufer kombinieren Auto- und Bahnpendeln. Dadurch entstehen häufig Zweitwagen-Verkäufe oder Fahrzeugwechsel mit engem Zeitplan rund um Arbeits- und Reisezeiten.',
              },
              {
                title: 'Stadtteile mit unterschiedlichem Bedarf',
                text: 'Kesselstadt und Steinheim zeigen andere Fahrzeugprofile als Großauheim oder Mittelbuchen. Familiennutzung, Berufsnutzung und Stadt-Umland-Fahrten beeinflussen die Nachfrage jeweils anders.',
              },
            ].map((item) => (
              <li key={item.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-black text-brand-dark mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Schnellcheck vor dem Verkauf in Hanau</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Damit Ihr Termin in Hanau effizient abläuft, lohnt sich ein kurzer Vorab-Check. Diese Punkte verhindern
            Rückfragen und verkürzen die Entscheidungszeit spürbar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Fahrzeugbrief, Fahrzeugschein und alle Schlüssel bereitlegen',
              'Wartungsnachweise oder HU-Berichte griffbereit halten',
              'Bei Finanzierung: Bankkontakt und Restschuldinformationen notieren',
              'Alle bekannten Mängel vorab offen angeben, damit die Bewertung sauber bleibt',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl p-4">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center font-black text-xs">✓</span>
                <p className="text-sm text-slate-700 font-semibold leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Meinautoverkauf.de vs. Privatverkauf vs. klassischer Händler</h2>
          <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-100 shadow-sm mb-5">
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
                  { label: 'Abschlussgeschwindigkeit', ankauf: 'Oft innerhalb von 1–2 Tagen', privat: 'Mehrere Wochen möglich', handler: 'Abhängig von Ankaufinteresse' },
                  { label: 'Terminplanbarkeit', ankauf: 'Fester Prozess mit abgestimmtem Slot', privat: 'Viele Rückfragen und Absagen', handler: 'An Öffnungszeiten gebunden' },
                  { label: 'Preisfindung', ankauf: 'Marktdaten + Zustand + Region', privat: 'Stark verhandlungsgetrieben', handler: 'Häufig feste Ankaufkorridore' },
                  { label: 'Hanau/MKK-Behördenaufwand', ankauf: 'Abmeldung auf Wunsch organisiert', privat: 'Zulassungsstelle selbst einplanen', handler: 'Service je Betrieb unterschiedlich' },
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
          <p className="text-slate-600 font-medium leading-relaxed">
            Für viele Verkäufer in Hanau ist nicht nur der Preis ausschlaggebend, sondern die Verlässlichkeit im Ablauf.
            Ein leicht höheres, aber unsicheres Privatangebot bringt wenig, wenn der Verkauf mehrfach platzt. Deshalb ist
            die Kombination aus realistischer Bewertung und planbarer Abwicklung oft der wirtschaftlichere Weg.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Fahrzeugprofile, die wir in Hanau häufig ankaufen</h2>
          <div className="space-y-5">
            <article className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
              <h3 className="font-black text-brand-dark mb-2">Pendlerfahrzeuge Richtung Frankfurt</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Typisch sind kompakte Diesel- und Benzinmodelle mit regelmäßiger Langstrecke. Bei diesen Fahrzeugen zählt
                die dokumentierte Wartung häufig stärker als kosmetische Details.
              </p>
            </article>
            <article className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
              <h3 className="font-black text-brand-dark mb-2">Dienstwagen aus Industrie- und Technikumfeld</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Rund um Hanau-Wolfgang und das Heraeus-Umfeld sehen wir häufig Fahrzeuge mit guter Servicehistorie und
                planmäßiger Pflege. Das schafft eine solide Grundlage für transparente Preise.
              </p>
            </article>
            <article className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
              <h3 className="font-black text-brand-dark mb-2">Familien- und Zweitwagen aus Kesselstadt/Steinheim</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                In vielen Haushalten werden Fahrzeuge verkauft, weil sich Nutzungsprofile ändern: weniger Pendeln,
                Umstieg auf Bahn oder E-Mobilität, oder Reduktion von zwei auf ein Auto.
              </p>
            </article>
          </div>
        </section>

        <section className="mb-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white border border-slate-700/50">
          <h2 className="text-lg lg:text-xl font-black mb-5">Ablauf-Timeline: So läuft ein Verkaufstermin in Hanau realistisch ab</h2>
          <ol className="space-y-4">
            {[
              {
                title: 'Vorab-Bewertung online',
                text: 'Sie geben die Kerndaten ein und erhalten eine erste Einschätzung als Entscheidungsbasis.',
              },
              {
                title: 'Terminfenster abstimmen',
                text: 'Wir legen gemeinsam ein Zeitfenster fest, das zu Ihrem Arbeits- und Pendelrhythmus passt.',
              },
              {
                title: 'Vor-Ort-Prüfung im Stadtgebiet',
                text: 'Bei der Prüfung werden Zustand, Ausstattung und Unterlagen abgeglichen, damit das Angebot belastbar bleibt.',
              },
              {
                title: 'Vertrag, Zahlung, optional Abmeldung',
                text: 'Nach Einigung folgt der Abschluss. Wenn gewünscht, unterstützen wir beim Abmeldeprozess im Main-Kinzig-Kreis.',
              },
            ].map((item, idx) => (
              <li key={item.title} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-black flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-black text-white text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-300 font-medium leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Lokale Orientierung in Hanau: Stadtteile, Bahnhof, Übergabepunkte</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Für viele Verkäufer ist entscheidend, dass der Termin logistisch passt. Zwischen Hanau Hauptbahnhof,
            den Wohnlagen in Kesselstadt und Steinheim sowie den Arbeitsstandorten in Wolfgang unterscheiden sich
            Anfahrt, Verfügbarkeit und Zeitfenster deutlich. Deshalb planen wir Übergaben praxisnah statt starr.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Wenn Sie häufig zwischen Hanau und Frankfurt pendeln, kann auch ein Termin am Rand Ihres Arbeitswegs
            sinnvoll sein. Ziel ist immer derselbe: möglichst wenig Reibung im Ablauf und ein sauberer Abschluss ohne
            zusätzliche Rundfahrten.
          </p>
        </section>

        <section className="mb-14 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-4">Interne Wege für Ihren nächsten Schritt</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Starten Sie direkt mit der{' '}
            <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
              kostenlosen Online-Bewertung
            </Link>{' '}
            und prüfen Sie, welcher Preisbereich aktuell realistisch ist.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Wenn Sie häufig im Rhein-Main-Korridor unterwegs sind, lohnt zusätzlich der Blick auf unseren{' '}
            <Link href="/autoankauf-frankfurt" className="text-brand-orange font-bold hover:underline">
              Autoankauf Frankfurt
            </Link>{' '}
            für die regionale Einordnung.
          </p>
        </section>

        <section className="mt-14 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere Standorte in der Region</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
            Unser Autoankauf-Service ist im Rhein-Main-Raum und in Mittelhessen verfügbar:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/auto-bewerten', label: '→ Jetzt Auto kostenlos bewerten' },
              { href: '/autoankauf-frankfurt', label: '→ Autoankauf Frankfurt' },
              { href: '/autoankauf-giessen', label: '→ Auch in Gießen verfügbar' },
              { href: '/autoankauf-aschaffenburg', label: '→ Auch in Aschaffenburg verfügbar' },
              { href: '/autoankauf-maintal', label: '→ Auch in Maintal verfügbar' },
              { href: '/autoankauf-darmstadt', label: '→ Autoankauf Darmstadt' },
              { href: '/autoankauf-wiesbaden', label: '→ Autoankauf Wiesbaden' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Hanau"
          faqs={[...HANAU_FAQS]}
          sectionId="faq-hanau"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Hanau verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Sie möchten keinen Verkauf mit offenem Ausgang, sondern einen klaren Prozess? Dann starten Sie jetzt und
            erhalten Sie eine belastbare Bewertung für Ihr Fahrzeug in Hanau am Main.
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

export default AutoankaufHanauPage;
