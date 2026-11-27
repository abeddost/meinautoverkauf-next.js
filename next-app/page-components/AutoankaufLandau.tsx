'use client';

import CitySeoTemplate, { type CityPageContent } from '@/components/CitySeoTemplate';
import { LANDAU_FAQS } from '@/lib/faqContent';

const CONTENT: CityPageContent = {
  cityName: 'Landau in der Pfalz',
  h1Lead: 'Autoankauf Landau –',
  h1Accent: 'Auto verkaufen an der Südlichen Weinstraße',
  intro: [
    'Beim **Autoankauf Landau** verkaufen Sie Ihr Auto ohne Inserat: kostenlos online bewerten, Angebot erhalten, Termin vereinbaren. Nach Vertragsabschluss wird die Auszahlung sofort veranlasst, die Abmeldung des LD-Kennzeichens übernehmen wir.',
    'Wir kaufen alle Marken und Zustände an, vom Studentenauto bis zum Familien-SUV, auch mit Mängeln oder ohne TÜV.',
  ],
  advantagesHeading: 'Ihre Vorteile beim Autoankauf in Landau',
  advantages: [
    'Kostenlose Online-Bewertung in 2 Minuten',
    'Sofortige Auszahlung nach Vertragsunterzeichnung',
    'Abholung in Landau und Umgebung nach Absprache',
    'Abmeldung des LD-Kennzeichens inklusive',
    'Ankauf aller Marken und Zustände',
    'Termine auch abends oder am Wochenende',
  ],
  localSection: {
    heading: 'Landau in der Pfalz: Universitätsstadt im Herzen der Südpfalz',
    paragraphs: [
      'Landau ist eine kreisfreie Stadt in der Südpfalz, umgeben vom Landkreis Südliche Weinstraße. Die Stadt ist Universitätsstandort, Einkaufsstadt für die Region und über die A65 gut an Karlsruhe, Neustadt und Ludwigshafen angebunden. 2015 war Landau Gastgeber der Landesgartenschau Rheinland-Pfalz.',
      'Zu Landau gehören neben der Kernstadt zahlreiche Weindörfer wie Arzheim, Godramstein, Nußdorf oder Wollmesheim. Wer hier wohnt, ist im Alltag meist auf das Auto angewiesen. Gleichzeitig wechseln Studierende häufig den Wohnort und verkaufen ihr Fahrzeug zum Ende des Studiums.',
      'Diese Mischung zeigt sich im Ankauf: Kleinwagen und günstige Gebrauchte aus studentischer Hand, Familienkombis aus den Stadtteilen und Pendlerfahrzeuge mit hoher Laufleistung aus Fahrten nach Karlsruhe oder in die Rhein-Neckar-Region. Gerade zum Semesterende stimmen wir Termine kurzfristig ab, damit der Verkauf vor dem Umzug erledigt ist.',
    ],
  },
  areaSection: {
    heading: 'Autoankauf in allen Landauer Stadtteilen',
    intro: 'Wir kaufen Fahrzeuge in der Kernstadt, in allen Stadtteilen und im Umland an:',
    groups: [
      { title: 'Landau', items: ['Kernstadt', 'Queichheim', 'Mörlheim', 'Dammheim', 'Godramstein'] },
      { title: 'Weindörfer', items: ['Arzheim', 'Mörzheim', 'Nußdorf', 'Wollmesheim'] },
      { title: 'Region', items: ['Südliche Weinstraße', 'Neustadt an der Weinstraße', 'Germersheim', 'Karlsruhe'] },
    ],
  },
  processHeading: 'So läuft der Autoankauf in Landau ab',
  steps: [
    {
      title: 'Online bewerten',
      text: 'Fahrzeugdaten eingeben und in rund zwei Minuten eine kostenlose, KI-gestützte Preiseinschätzung erhalten.',
    },
    {
      title: 'Termin vereinbaren',
      text: 'Wir stimmen einen Termin zur Prüfung und Übergabe ab, auch abends oder am Wochenende. Die Besichtigung dauert etwa 15 bis 20 Minuten.',
    },
    {
      title: 'Vertrag und Auszahlung',
      text: 'Kaufvertrag unterschreiben, die Auszahlung wird sofort veranlasst. Die Abmeldung des LD-Kennzeichens übernehmen wir.',
    },
  ],
  vehiclesHeading: 'Welche Fahrzeuge wir in Landau ankaufen',
  vehiclesIntro: 'Wir kaufen alle Fahrzeuge an. In Landau und der Südpfalz bewerten wir besonders oft:',
  vehicles: [
    {
      title: 'Studentenautos',
      text: 'Kleinwagen und Kompakte, die zum Ende des Studiums oder bei einem Umzug verkauft werden.',
    },
    {
      title: 'Pendlerfahrzeuge',
      text: 'Autos mit hoher Laufleistung aus Fahrten über die A65 nach Karlsruhe, Neustadt oder Ludwigshafen.',
    },
    {
      title: 'Familien- und Freizeitfahrzeuge',
      text: 'Kombis, Vans und SUV aus den Stadtteilen und Weindörfern.',
    },
    {
      title: 'Fahrzeuge mit Mängeln',
      text: 'Unfallwagen, Motorschaden oder abgelaufener TÜV, auch nicht fahrbereit. Mehr im Ratgeber [Autoankauf ohne TÜV](/ratgeber/autoankauf-ohne-tuev).',
    },
  ],
  faqTitle: 'Häufige Fragen zum Autoankauf in Landau',
  faqId: 'faq-landau',
  faqs: LANDAU_FAQS,
  relatedHeading: 'Autoankauf in der Pfalz und am Oberrhein',
  relatedIntro: 'Auch in den Nachbarstädten sind wir für Sie da:',
  related: [
    { href: '/autoankauf-neustadt-weinstrasse', label: 'Autoankauf Neustadt an der Weinstraße' },
    { href: '/autoankauf-speyer', label: 'Autoankauf Speyer' },
    { href: '/autoankauf-karlsruhe', label: 'Autoankauf Karlsruhe' },
    { href: '/autoankauf-hassloch', label: 'Autoankauf Haßloch' },
  ],
  cta: {
    heading: 'Jetzt Auto in Landau verkaufen',
    text: 'Kostenlose Bewertung in 2 Minuten und Auszahlung am selben Tag – in Landau und an der Südlichen Weinstraße.',
    badges: ['Alle Stadtteile', 'LD-Abmeldung inklusive', 'Sofort Geld'],
  },
};

export default function AutoankaufLandauPage({ onCtaClick }: { onCtaClick: () => void }) {
  return <CitySeoTemplate content={CONTENT} onCtaClick={onCtaClick} />;
}
