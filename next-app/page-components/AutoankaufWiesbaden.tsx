'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { WIESBADEN_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const DISTRICT_GROUPS = [
  {
    "title": "Mitte und Westen",
    "places": "Mitte, Rheingauviertel, Dotzheim, Schierstein"
  },
  {
    "title": "Rhein und rechte Rheinseite",
    "places": "Biebrich, Amöneburg, Kastel, Kostheim"
  },
  {
    "title": "Osten und Norden",
    "places": "Erbenheim, Nordenstadt, Sonnenberg, Rambach"
  },
  {
    "title": "Umland",
    "places": "Taunusstein, Bad Schwalbach, Hochheim am Main, Eltville, Geisenheim, Rüdesheim, Idstein, Niedernhausen"
  }
];

const VEHICLE_GROUPS = [
  {
    "title": "Premium und Dienstwagen",
    "items": [
      "Mercedes, BMW, Audi und Porsche",
      "Gut ausgestattete Limousinen und SUVs",
      "Cabrios und Liebhaberfahrzeuge"
    ]
  },
  {
    "title": "Alltag und Familie",
    "items": [
      "VW, Opel, Ford, Renault, Skoda",
      "Toyota, Honda, Mazda, Peugeot, Citroën",
      "Kombis, Kompakt-SUVs und Kleinwagen"
    ]
  },
  {
    "title": "Elektro und Hybrid",
    "items": [
      "Elektroautos wie Tesla, BMW i oder VW ID",
      "Plug-in- und Vollhybride",
      "Sprechen Sie uns wegen der Batteriedokumentation vorab an"
    ]
  },
  {
    "title": "Auch mit Problemen",
    "items": [
      "Motor- oder Getriebeschaden",
      "Unfallwagen, repariert oder unrepariert",
      "Ohne gültige HU oder mit hoher Laufleistung"
    ]
  }
];

const COMPARISON = [
  {
    "label": "Dauer",
    "ours": "Bewertung online, ein Termin in der Filiale",
    "privat": "Oft mehrere Wochen bis zum Abschluss"
  },
  {
    "label": "Ihr Aufwand",
    "ours": "Formular ausfüllen und zum Termin kommen",
    "privat": "Fotos, Inserat, Anfragen, Besichtigungen, Verhandlung"
  },
  {
    "label": "Preis",
    "ours": "Unter dem privat erzielbaren Preis, weil Marge und Risiko einkalkuliert sind",
    "privat": "Meist höher, aber nicht garantiert"
  },
  {
    "label": "Haftung",
    "ours": "Sachmängelhaftung wird im Vertrag ausgeschlossen, bekannte Mängel geben Sie an",
    "privat": "Ausschluss möglich, setzt einen sauberen Vertrag voraus"
  },
  {
    "label": "Abmeldung",
    "ours": "Übernehmen wir kostenfrei",
    "privat": "Selbst organisieren oder vertraglich regeln"
  }
];

const NEARBY = [
  {
    "href": "/autoankauf-mainz",
    "label": "Autoankauf Mainz"
  },
  {
    "href": "/autoankauf-hofheim-am-taunus",
    "label": "Autoankauf Hofheim am Taunus"
  },
  {
    "href": "/autoankauf-ruesselsheim",
    "label": "Filiale Rüsselsheim"
  },
  {
    "href": "/autoankauf-frankfurt",
    "label": "Autoankauf Frankfurt"
  },
  {
    "href": "/ratgeber/unterlagen-autoverkauf-checkliste",
    "label": "Unterlagen-Checkliste"
  },
  {
    "href": "/ratgeber/rechtssicherer-kaufvertrag-auto",
    "label": "Kaufvertrag richtig gestalten"
  },
  {
    "href": "/defektes-auto-verkaufen",
    "label": "Defektes Auto verkaufen"
  }
];

const AutoankaufWiesbadenPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] bg-gradient-to-br from-orange-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] -left-32 w-[420px] h-[420px] bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
          Autoankauf Wiesbaden: Online bewerten, in Rüsselsheim übergeben
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-4">
          Von Wiesbaden erreichen Sie unsere Filiale in Rüsselsheim in rund 19 km oder ohne Stau etwa 18 Minuten. Sie bewerten Ihr Auto online, buchen einen festen Termin und übergeben das Fahrzeug bei uns. Inserate, Anrufe von Interessenten und Probefahrten entfallen.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-4">
          Für Biebrich und Schierstein ist je nach Wohnort auch unsere Filiale in Bodenheim eine Option. Bei der Terminbuchung wählen Sie den passenden Standort selbst.
        </p>
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8 my-10">
          <h3 className="text-lg font-black text-brand-dark mb-4">Das erwartet Sie beim Verkauf</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-medium">
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Kostenlose, unverbindliche Online-Bewertung in etwa 2 Minuten</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>KI-gestützte Preisschätzung anhand Ihrer Fahrzeugdaten</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Termine online buchbar, Uhrzeiten zwischen 10 und 18 Uhr</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Fahrzeugprüfung vor Ort, danach unser verbindliches Angebot</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Auszahlung per Banküberweisung bei der Übergabe</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Abmeldung bei der Zulassungsstelle übernehmen wir kostenfrei</span></li>
          </ul>
        </section>

        <div id="wiesbaden-content" className="space-y-6 text-slate-700">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Der Automarkt in Wiesbaden</h2>
          <p className="font-medium leading-relaxed">
            Wiesbaden ist mit rund 280.000 Einwohnern hessische Landeshauptstadt, Kurstadt und Standort für Versicherungen, Verwaltung und Medien. Viele Einwohner pendeln nach Frankfurt oder Mainz. Das zeigt sich auch bei den Fahrzeugen, die zum Verkauf stehen: Dienstwagen und gut ausgestattete Limousinen ebenso wie Kombis und Kleinwagen für den Familienalltag.
          </p>
          <p className="font-medium leading-relaxed">
            Premiumfahrzeuge sind teuer in der Unterhaltung, und eine anstehende Großreparatur kann den Verkauf schnell wirtschaftlich sinnvoll machen. Unsere Ratgeber zu <Link href="/ratgeber/mercedes-probleme-verkauf" className="text-brand-orange font-bold hover:underline">Mercedes</Link> und <Link href="/ratgeber/bmw-probleme-verkauf" className="text-brand-orange font-bold hover:underline">BMW</Link> helfen bei dieser Abwägung.
          </p>
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Kastel, Kostheim und das Umland</h2>
          <p className="font-medium leading-relaxed">
            Die rechtsrheinischen Stadtteile Amöneburg, Kastel und Kostheim gehören zu Wiesbaden und haben über die Theodor-Heuss-Brücke eine direkte Verbindung nach Mainz. Auch aus Taunusstein, Hochheim, Eltville oder Bad Schwalbach kaufen wir Fahrzeuge an. Die Übergabe findet in jedem Fall in einer unserer beiden Filialen statt.
          </p>
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">So verkaufen Sie Ihr Auto aus Wiesbaden</h2>
          <ol className="space-y-5">
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center font-black">1</span>
              <div>
                <h3 className="font-black text-brand-dark mb-1">Online bewerten</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Sie geben Marke, Modell, Baujahr, Kilometerstand und Zustand ein. Unsere KI schätzt daraus und aus aktuellen Online-Angeboten einen Ankaufspreis. Das ist kostenlos und unverbindlich.</p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center font-black">2</span>
              <div>
                <h3 className="font-black text-brand-dark mb-1">Termin buchen</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Sie wählen online Filiale, Datum und Uhrzeit. Bringen Sie Fahrzeugschein, Fahrzeugbrief, Ausweis, alle Schlüssel und vorhandene Servicebelege mit.</p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center font-black">3</span>
              <div>
                <h3 className="font-black text-brand-dark mb-1">Prüfung, Vertrag, Auszahlung</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Wir prüfen das Fahrzeug und nennen unser verbindliches Angebot. Sind Sie einverstanden, unterschreiben wir den Kaufvertrag. Sie erhalten das Geld per Banküberweisung, und wir kümmern uns um die Abmeldung.</p>
              </div>
            </li>
          </ol>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Welche Autos wir aus Wiesbaden ankaufen</h2>
          <p className="font-medium leading-relaxed">Wir kaufen Fahrzeuge aller gängigen Marken, auch mit Mängeln. Ein paar typische Beispiele:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VEHICLE_GROUPS.map((group) => (
              <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-black text-brand-dark mb-3">{group.title}</h3>
                <ul className="space-y-2 text-sm text-slate-600 font-medium">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Aus diesen Stadtteilen und Nachbarorten</h2>
          <p className="font-medium leading-relaxed">Wir kaufen Fahrzeuge aus allen Wiesbadener Ortsbezirken und dem Umland an. Die Übergabe findet in unserer Filiale statt.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DISTRICT_GROUPS.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="font-bold text-brand-orange mb-2">{group.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{group.places}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Verkauf an uns oder privat?</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-black text-brand-dark">Kriterium</th>
                  <th className="text-left p-4 font-black text-brand-orange">Verkauf an uns</th>
                  <th className="text-left p-4 font-black text-slate-500">Privatverkauf</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label} className="border-t border-slate-100 align-top">
                    <td className="p-4 font-bold text-slate-700">{row.label}</td>
                    <td className="p-4 text-slate-600">{row.ours}</td>
                    <td className="p-4 text-slate-600">{row.privat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-medium leading-relaxed">
            Ein Privatverkauf bringt oft den höheren Preis. Wann sich der Aufwand lohnt, erklären wir im{' '}
            <Link href="/ratgeber/auto-privat-oder-haendler-verkaufen" className="text-brand-orange font-bold hover:underline">
              Vergleich Privatverkauf oder Händler
            </Link>
            .
          </p>
        </div>

        <FAQSection
          title="Häufige Fragen zum Autoankauf in Wiesbaden"
          faqs={[...WIESBADEN_FAQS]}
          sectionId="faq-wiesbaden"
        />

        <section className="mt-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8">
          <h2 className="text-xl font-black text-brand-dark mb-5">Auch in der Region und im Ratgeber</h2>
          <div className="flex flex-wrap gap-3">
            {NEARBY.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-gradient-to-br from-[#0f172a] via-slate-800 to-[#0f172a] rounded-[2.5rem] p-10 lg:p-14 text-center text-white">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Auto aus Wiesbaden jetzt bewerten</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto font-semibold">Kostenlos und unverbindlich. Sie entscheiden erst nach der Bewertung, ob Sie einen Termin buchen.</p>
          <button
            onClick={onCtaClick}
            className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-2xl"
          >
            Jetzt kostenlos Auto bewerten
          </button>
        </section>
      </div>
    </div>
  );
};

export default AutoankaufWiesbadenPage;
