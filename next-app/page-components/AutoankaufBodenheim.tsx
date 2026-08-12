'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { BODENHEIM_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const GOOGLE_PROFILE_URL = 'https://share.google/qn8pSz064K7Cy6c6S';

const AutoankaufBodenheimPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-44 -right-32 w-[560px] h-[560px] bg-gradient-to-br from-orange-200/45 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[24%] -left-44 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] w-72 h-72 bg-orange-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-7 leading-tight tracking-tight">
            Autoankauf Bodenheim – <span className="text-brand-orange">direkt an unserem Firmensitz</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Bodenheim ist kein weiterer Punkt auf einer Ankaufkarte, sondern der Ort, an dem Meinautoverkauf.de
            tatsächlich beheimatet und angemeldet ist. Die kleine Weinbaugemeinde im Landkreis Mainz-Bingen liegt
            direkt am Rhein, wenige Kilometer südlich von Mainz, mitten in der Region Rheinhessen. Wer sein Fahrzeug
            hier verkauft, verkauft es nicht an eine anonyme Online-Adresse, sondern an ein Unternehmen mit
            nachprüfbarem Sitz vor Ort.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-5">
            Der Ablauf unterscheidet sich dabei nicht von unseren anderen Standorten: Sie starten mit einer
            kostenlosen Online-Bewertung, erhalten ein nachvollziehbares Angebot und lassen Ihr Fahrzeug bei
            Bedarf kostenlos abholen. Der Unterschied liegt in der Nähe – Termine in Bodenheim und den direkt
            angrenzenden Gemeinden lassen sich ohne lange Anfahrtswege koordinieren, weil unser Team von hier
            aus arbeitet.
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob Alltagsfahrzeug aus dem Ort selbst, Pendlerauto Richtung Mainz oder Zweitwagen aus einer der
            Winzerfamilien der Umgebung: Wir bewerten jedes Fahrzeug anhand seines tatsächlichen Zustands,
            nicht anhand pauschaler Listenpreise.
          </p>
        </div>

        <section className="mb-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white border border-slate-700/50">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Warum der Firmensitz für Sie ein Vorteil ist</h2>
          <p className="text-slate-300 font-medium leading-relaxed mb-4">
            Viele Online-Ankäufer sind ausschließlich digital erreichbar, ohne nachprüfbaren Standort. Bei
            Meinautoverkauf.de ist das anders: Unsere Geschäftsadresse in Bodenheim ist im Impressum ausgewiesen
            und lässt sich unabhängig von unserer Website überprüfen.
          </p>
          <p className="text-slate-300 font-medium leading-relaxed">
            Sie finden unser Unternehmen mit dieser Adresse auch direkt bei{' '}
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange font-bold hover:underline"
            >
              Google
            </a>{' '}
            – ein zusätzlicher, unabhängiger Beleg dafür, dass hinter dem Ankauf ein real ansässiges Unternehmen
            steht und kein reines Online-Konstrukt.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Unser Ablauf in Bodenheim in 3 Schritten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Online-Bewertung ausfüllen',
                text: 'Sie übermitteln die wichtigsten Fahrzeugdaten und erhalten eine erste, unverbindliche Preiseinschätzung.',
              },
              {
                step: '02',
                title: 'Termin in Bodenheim abstimmen',
                text: 'Wir vereinbaren einen Termin vor Ort, prüfen Fahrzeug und Unterlagen transparent und beantworten offene Fragen direkt.',
              },
              {
                step: '03',
                title: 'Vertrag und Auszahlung',
                text: 'Nach Einigung erstellen wir den Kaufvertrag. Die Auszahlung erfolgt zeitnah, auf Wunsch inklusive Unterstützung bei der Abmeldung.',
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Bodenheim und der Landkreis Mainz-Bingen</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Bodenheim liegt an der Bahnstrecke zwischen Mainz und Ludwigshafen, direkt am Rhein und umgeben von
            Weinbergen – typisch für die Rheinhessen-Region. Die Nähe zu Mainz sorgt für eine Mischung aus
            ländlichem Alltag und städtischem Pendlerverkehr, was sich auch in den Fahrzeugen widerspiegelt, die
            wir hier ankaufen: vom Winzer-Transporter über das klassische Familienauto bis zum Pendlerfahrzeug
            Richtung Mainz.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Von unserem Standort aus decken wir neben Bodenheim selbst auch die direkt angrenzenden Gemeinden ab,
            darunter Nackenheim, Gau-Bischofsheim und Mainz. Für Fahrzeuge aus diesem unmittelbaren Umland
            lassen sich Bewertungs- und Übergabetermine besonders kurzfristig abstimmen, da keine längere Anfahrt
            unseres Teams nötig ist.
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
                  { label: 'Nachprüfbarer Standort', mv: 'Firmensitz in Bodenheim, bei Google gelistet', privat: 'Kein fester Standort', handler: 'Autohaus vor Ort' },
                  { label: 'Abschlussdauer', mv: 'Meist 1 bis 2 Tage', privat: 'Oft mehrere Wochen', handler: 'Abhängig von Kapazität' },
                  { label: 'Preisermittlung', mv: 'Datenbasiert und transparent', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
                  { label: 'Anfahrtswege im Umland', mv: 'Kurze Wege durch lokalen Sitz', privat: 'Selbst organisiert', handler: 'Öffnungszeitengebunden' },
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
              { label: 'Nachprüfbarer Standort', mv: 'Firmensitz in Bodenheim, bei Google gelistet', privat: 'Kein fester Standort', handler: 'Autohaus vor Ort' },
              { label: 'Abschlussdauer', mv: 'Meist 1 bis 2 Tage', privat: 'Oft mehrere Wochen', handler: 'Abhängig von Kapazität' },
              { label: 'Preisermittlung', mv: 'Datenbasiert und transparent', privat: 'Stark verhandlungsabhängig', handler: 'Interne Kalkulation' },
              { label: 'Anfahrtswege im Umland', mv: 'Kurze Wege durch lokalen Sitz', privat: 'Selbst organisiert', handler: 'Öffnungszeitengebunden' },
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
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Praktische Vorbereitung für den Verkauf in Bodenheim</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Für einen zügigen Abschluss lohnt sich eine vollständige Vorbereitung: Zulassungsbescheinigung Teil I
            und II, alle Fahrzeugschlüssel, HU-Berichte und Wartungsnachweise sollten am Termin vorliegen. Eine
            offene Auflistung bekannter Mängel beschleunigt die Bewertung zusätzlich.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Fahrzeugpapiere und alle Schlüssel vorab vollständig prüfen',
              'HU-Berichte und Wartungsnachweise geordnet bereitlegen',
              'Bekannte Mängel offen dokumentieren',
              'Bei laufender Finanzierung Restschuld frühzeitig mit der Bank klären',
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
            und erhalten Sie eine erste Preisorientierung.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Für Fahrzeuge aus dem nahen Mainz lohnt sich zusätzlich der Blick auf unsere{' '}
            <Link href="/autoankauf-mainz" className="text-brand-orange font-bold hover:underline">
              Seite Autoankauf Mainz
            </Link>{' '}
            mit ergänzenden Hinweisen zur Region.
          </p>
        </section>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Bodenheim"
          faqs={[...BODENHEIM_FAQS]}
          sectionId="faq-bodenheim"
        />

        <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white border border-slate-700/60 shadow-2xl">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Bodenheim verkaufen</h2>
          <p className="text-slate-300 font-medium max-w-2xl mx-auto mb-7 leading-relaxed">
            Verkaufen Sie Ihr Fahrzeug direkt an unserem Firmensitz – ohne lange Inseratsphase und mit einem
            nachprüfbaren, real ansässigen Unternehmen an Ihrer Seite.
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

export default AutoankaufBodenheimPage;
