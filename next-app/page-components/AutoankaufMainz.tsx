'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { MAINZ_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const DISTRICT_GROUPS = [
  {
    "title": "Zentrum",
    "places": "Altstadt, Neustadt, Oberstadt, Hartenberg-Münchfeld"
  },
  {
    "title": "Westen",
    "places": "Gonsenheim, Finthen, Bretzenheim, Drais, Lerchenberg, Mombach"
  },
  {
    "title": "Süden",
    "places": "Weisenau, Hechtsheim, Laubenheim, Ebersheim"
  },
  {
    "title": "Umland und rechte Rheinseite",
    "places": "Budenheim, Ingelheim, Bingen, Nieder-Olm, Oppenheim, Alzey, Kastel, Kostheim, Biebrich, Erbenheim"
  }
];

const VEHICLE_GROUPS = [
  {
    "title": "Kleinwagen und Einsteiger",
    "items": [
      "VW Polo, Opel Corsa, Ford Fiesta, Renault Clio",
      "Ältere Modelle mit hoher Laufleistung",
      "Fahrzeuge mit kleinen Mängeln oder abgelaufener HU"
    ]
  },
  {
    "title": "Familie und Alltag",
    "items": [
      "VW Passat, Skoda Octavia, Ford Mondeo",
      "SUVs wie VW Tiguan, Audi Q3, BMW X1",
      "7-Sitzer wie VW Touran, Seat Alhambra, Opel Zafira"
    ]
  },
  {
    "title": "Dienst- und Firmenwagen",
    "items": [
      "Mercedes, BMW, Audi aus Firmen- oder Privatbesitz",
      "Gut ausgestattete Rückläufer",
      "Transporter von Handwerk und Weinbau"
    ]
  },
  {
    "title": "Auch mit Problemen",
    "items": [
      "Motor- oder Getriebeschaden",
      "Unfallwagen, repariert oder unrepariert",
      "Rost oder Elektronikdefekte"
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
    "href": "/autoankauf-bodenheim",
    "label": "Filiale Bodenheim"
  },
  {
    "href": "/autoankauf-wiesbaden",
    "label": "Autoankauf Wiesbaden"
  },
  {
    "href": "/autoankauf-bad-kreuznach",
    "label": "Autoankauf Bad Kreuznach"
  },
  {
    "href": "/autoankauf-worms",
    "label": "Autoankauf Worms"
  },
  {
    "href": "/ratgeber/unterlagen-autoverkauf-checkliste",
    "label": "Unterlagen-Checkliste"
  },
  {
    "href": "/ratgeber/autoabmeldung-nach-verkauf",
    "label": "Abmeldung nach dem Verkauf"
  },
  {
    "href": "/defektes-auto-verkaufen",
    "label": "Defektes Auto verkaufen"
  }
];

const AutoankaufMainzPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] bg-gradient-to-br from-orange-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] -left-32 w-[420px] h-[420px] bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
          Autoankauf Mainz: Verkauf in unserer Filiale direkt vor der Stadt
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-4">
          Unser Firmensitz liegt in Bodenheim, rund 14 km oder ohne Stau etwa 17 Minuten von der Mainzer Innenstadt entfernt. Damit ist Mainz die nächstgelegene Großstadt zu unserer Filiale. Sie bewerten Ihr Auto online, buchen einen Termin und übergeben das Fahrzeug bei uns in Bodenheim.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-4">
          Von Weisenau und Laubenheim ist es besonders nah. Auch aus Gonsenheim, Finthen, Bretzenheim oder von der anderen Rheinseite aus Kastel und Kostheim ist die Anfahrt kurz.
        </p>
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8 my-10">
          <h3 className="text-lg font-black text-brand-dark mb-4">Das erwartet Sie beim Verkauf</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-medium">
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Kostenlose, unverbindliche Online-Bewertung in etwa 2 Minuten</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Filiale in Bodenheim, Am Kuemmerling 41a</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Termine online buchbar, Uhrzeiten zwischen 10 und 18 Uhr</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Fahrzeugprüfung vor Ort, danach unser verbindliches Angebot</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Auszahlung per Banküberweisung bei der Übergabe</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-orange font-black">→</span><span>Abmeldung bei der Zulassungsstelle übernehmen wir kostenfrei</span></li>
          </ul>
        </section>

        <div id="mainz-content" className="space-y-6 text-slate-700">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Warum Mainzer ihr Auto verkaufen</h2>
          <p className="font-medium leading-relaxed">
            Mainz ist mit rund 220.000 Einwohnern Landeshauptstadt, Universitätsstadt und Medienstandort mit dem ZDF auf dem Lerchenberg. Entsprechend unterschiedlich sind die Anlässe: Studierende verkaufen nach dem Abschluss ihren Kleinwagen, Familien aus Gonsenheim oder Finthen wechseln das Fahrzeug, Pendler nach Frankfurt geben einen Wagen mit hoher Laufleistung ab.
          </p>
          <p className="font-medium leading-relaxed">
            Viele Stadtteile in der Altstadt und Neustadt haben wenig Parkraum. Wer dort auf Bus, Bahn und Rad umsteigt, spart Stellplatz, Versicherung und Steuer. Dann lohnt es sich, den Verkauf nicht lange aufzuschieben, denn auch ein ungenutztes Auto verliert weiter an Wert.
          </p>
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Mainz-Kastel und Mainz-Kostheim</h2>
          <p className="font-medium leading-relaxed">
            Amöneburg, Kastel und Kostheim liegen auf der rechten Rheinseite und gehören seit Langem zu Wiesbaden, sind aber eng mit Mainz verbunden. Für den Verkauf spielt das keine Rolle: Fahrzeuge von beiden Rheinseiten kaufen wir ganz normal an. Für Kastel und Kostheim ist auch unsere <Link href="/autoankauf-ruesselsheim" className="text-brand-orange font-bold hover:underline">Filiale in Rüsselsheim</Link> gut erreichbar.
          </p>
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">So verkaufen Sie Ihr Auto aus Mainz</h2>
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
                <h3 className="font-black text-brand-dark mb-1">Termin in Bodenheim buchen</h3>
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

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Welche Autos wir aus Mainz ankaufen</h2>
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
          <p className="font-medium leading-relaxed">Wir kaufen Fahrzeuge aus allen Mainzer Stadtteilen und aus Rheinhessen an. Die Übergabe findet in unserer Filiale statt.</p>
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
          title="Häufige Fragen zum Autoankauf in Mainz"
          faqs={[...MAINZ_FAQS]}
          sectionId="faq-mainz"
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
          <h2 className="text-xl lg:text-2xl font-black mb-4">Auto aus Mainz jetzt bewerten</h2>
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

export default AutoankaufMainzPage;
