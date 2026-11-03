'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { FRANKFURT_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const DISTRICT_GROUPS = [
  {
    "title": "Mitte und Zentrum",
    "places": "Innenstadt, Bahnhofsviertel, Gallus, Westend, Gutleutviertel, Europaviertel"
  },
  {
    "title": "Norden und Osten",
    "places": "Nordend, Bornheim, Ostend, Preungesheim, Bonames, Eckenheim, Dornbusch, Fechenheim, Riederwald, Bergen-Enkheim, Seckbach"
  },
  {
    "title": "Süden",
    "places": "Sachsenhausen, Niederrad, Oberrad, Flughafen, Schwanheim, Goldstein"
  },
  {
    "title": "Westen und Umland",
    "places": "Bockenheim, Rödelheim, Höchst, Griesheim sowie Eschborn, Neu-Isenburg, Kelsterbach, Mühlheim am Main, Bad Vilbel und Friedberg"
  }
];

const VEHICLE_GROUPS = [
  {
    "title": "Dienst- und Firmenwagen",
    "items": [
      "Mittel- und Oberklasse wie Mercedes E-Klasse, BMW 5er oder Audi A6",
      "Fahrzeuge aus Firmenbesitz mit Rechnung",
      "Sportliche Modelle wie Porsche 911 oder BMW M"
    ]
  },
  {
    "title": "Alltag und Familie",
    "items": [
      "VW Golf und Passat, Opel Astra, Ford Focus",
      "Kombis, Vans und 7-Sitzer",
      "Kompakt-SUVs wie VW Tiguan, Audi Q3 oder BMW X1"
    ]
  },
  {
    "title": "Elektro und Hybrid",
    "items": [
      "Elektroautos wie Tesla Model 3 oder BMW i4",
      "Plug-in- und Vollhybride",
      "Sprechen Sie uns wegen der Batteriedokumentation vorab an"
    ]
  },
  {
    "title": "Auch mit Problemen",
    "items": [
      "Motor- oder Getriebeschaden",
      "Unfallwagen, repariert oder unrepariert",
      "Abgelaufene HU oder keine grüne Plakette"
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
    "href": "/autoankauf-offenbach",
    "label": "Autoankauf Offenbach"
  },
  {
    "href": "/autoankauf-bad-homburg-vor-der-hoehe",
    "label": "Autoankauf Bad Homburg"
  },
  {
    "href": "/autoankauf-oberursel",
    "label": "Autoankauf Oberursel"
  },
  {
    "href": "/autoankauf-hanau",
    "label": "Autoankauf Hanau"
  },
  {
    "href": "/autoankauf-maintal",
    "label": "Autoankauf Maintal"
  },
  {
    "href": "/autoankauf-ruesselsheim",
    "label": "Filiale Rüsselsheim"
  },
  {
    "href": "/ratgeber/unterlagen-autoverkauf-checkliste",
    "label": "Unterlagen-Checkliste"
  },
  {
    "href": "/defektes-auto-verkaufen",
    "label": "Defektes Auto verkaufen"
  }
];

const AutoankaufFrankfurtPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] bg-gradient-to-br from-orange-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] -left-32 w-[420px] h-[420px] bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
          Autoankauf Frankfurt: Ihr Auto ohne Inserat fair verkaufen
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-4">
          Wer in Frankfurt arbeitet oder pendelt, hat selten Zeit für wochenlange Inserate, Probefahrten und Preisverhandlungen. Bei uns bewerten Sie Ihr Auto online und buchen einen festen Termin. Die Übergabe findet in unserer Filiale in Rüsselsheim statt, rund 31 km oder ohne Stau etwa 25 Minuten vom Frankfurter Zentrum entfernt.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-4">
          Der Vorteil gegenüber einem Händlerbesuch in der Stadt: Sie sparen sich die Parkplatzsuche im Westend oder in Sachsenhausen und fahren über die A3 oder A5 aus der Stadt heraus zu uns.
        </p>
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8 my-10">
          <h3 className="text-lg font-black text-brand-dark mb-4">Das erwartet Sie beim Verkauf</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-medium">
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Kostenlose, unverbindliche Online-Bewertung in etwa 2 Minuten</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Termine online buchbar, Uhrzeiten zwischen 10 und 18 Uhr</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Fahrzeugprüfung vor Ort, danach unser verbindliches Angebot</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Auszahlung per Banküberweisung bei der Übergabe</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Abmeldung bei der Zulassungsstelle übernehmen wir kostenfrei</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Auch Diesel, Fahrzeuge ohne grüne Plakette und Autos mit Schäden</span></li>
          </ul>
        </section>

        <div id="frankfurt-content" className="space-y-6 text-slate-700">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Warum viele Frankfurter ohne Inserat verkaufen</h2>
          <p className="font-medium leading-relaxed">
            Frankfurt ist mit über 750.000 Einwohnern, EZB, Deutscher Börse und dem größten deutschen Flughafen ein Markt mit vielen Pendlern und internationalen Fachkräften. Häufige Verkaufsanlässe sind ein Jobwechsel, ein auslaufender Dienstwagen oder ein Umzug ins Ausland. Dann zählt oft ein fester Termin mehr als der letzte Euro aus einem Privatverkauf.
          </p>
          <p className="font-medium leading-relaxed">
            Falls Sie Deutschland verlassen, planen Sie den Verkauf rechtzeitig vor dem Umzug. Halten Sie dafür Fahrzeugschein, Fahrzeugbrief und alle Schlüssel bereit. Ist das Auto noch finanziert, klären Sie die Ablösung früh mit Ihrer Bank. Der <Link href="/ratgeber/autoankauf-trotz-finanzierung" className="text-brand-orange font-bold hover:underline">Ratgeber zum Verkauf trotz Finanzierung</Link> erklärt die Schritte.
          </p>
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Diesel und Umweltzone: Was bedeutet das für den Verkauf?</h2>
          <p className="font-medium leading-relaxed">
            Das Stadtgebiet von Frankfurt liegt in einer Umweltzone, in die nur Fahrzeuge mit grüner Plakette einfahren dürfen. Für den Verkauf heißt das nicht, dass Ihr Auto wertlos ist. Ältere Fahrzeuge ohne grüne Plakette sind im Inland schwerer zu vermarkten, können aber über den Export oder als Teileträger noch einen Restwert haben. Wie hoch er ist, hängt von Modell, Zustand und Laufleistung ab.
          </p>
          <p className="font-medium leading-relaxed">
            Mehr dazu lesen Sie im <Link href="/ratgeber/autoexport-ankauf" className="text-brand-orange font-bold hover:underline">Ratgeber Autoexport</Link>.
          </p>
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">So verkaufen Sie Ihr Auto aus Frankfurt</h2>
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
                <h3 className="font-black text-brand-dark mb-1">Termin in Rüsselsheim buchen</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Sie wählen online Datum und Uhrzeit. Bringen Sie Fahrzeugschein, Fahrzeugbrief, Ausweis, alle Schlüssel und vorhandene Servicebelege mit.</p>
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

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Welche Autos wir aus Frankfurt ankaufen</h2>
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

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Aus diesen Frankfurter Stadtteilen und Nachbarorten</h2>
          <p className="font-medium leading-relaxed">Wir kaufen Fahrzeuge aus allen 46 Frankfurter Stadtteilen und dem Umland an. Die Übergabe findet immer in unserer Filiale statt.</p>
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
          title="Häufige Fragen zum Autoankauf in Frankfurt"
          faqs={[...FRANKFURT_FAQS]}
          sectionId="faq-frankfurt"
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
          <h2 className="text-xl lg:text-2xl font-black mb-4">Auto aus Frankfurt jetzt bewerten</h2>
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

export default AutoankaufFrankfurtPage;
