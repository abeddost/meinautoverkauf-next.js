'use client';

import CitySeoTemplate, { type CityPageContent } from '@/components/CitySeoTemplate';
import { HASSLOCH_FAQS } from '@/lib/faqContent';

const CONTENT: CityPageContent = {
  cityName: 'Haßloch',
  h1Lead: 'Autoankauf Haßloch –',
  h1Accent: 'Auto verkaufen in der Pfalz',
  intro: [
    'Sie möchten Ihr Auto in Haßloch verkaufen? Beim **Autoankauf Haßloch** bewerten Sie Ihr Fahrzeug kostenlos online, erhalten ein Angebot und vereinbaren einen Termin zur Übergabe. Nach Vertragsabschluss wird die Auszahlung sofort veranlasst, die Abmeldung des DÜW-Kennzeichens übernehmen wir.',
    'Diese Seite gilt für Haßloch in der Pfalz im Landkreis Bad Dürkheim. Wohnen Sie im gleichnamigen Rüsselsheimer Stadtteil, finden Sie alle Informationen auf unserer Seite [Autoankauf Rüsselsheim](/autoankauf-ruesselsheim).',
  ],
  advantagesHeading: 'Ihre Vorteile beim Autoankauf in Haßloch',
  advantages: [
    'Kostenlose Online-Bewertung in 2 Minuten',
    'Sofortige Auszahlung nach Vertragsunterzeichnung',
    'Abholung in Haßloch und Umgebung nach Absprache',
    'Abmeldung des DÜW-Kennzeichens inklusive',
    'Ankauf aller Marken und Zustände',
    'Termine auch abends oder am Wochenende',
  ],
  localSection: {
    heading: 'Haßloch: großes Dorf zwischen Neustadt und Speyer',
    paragraphs: [
      'Haßloch gilt mit rund 20.000 Einwohnern als eines der größten Dörfer Deutschlands – ein Ort mit der Größe einer Kleinstadt, der sich bewusst seinen dörflichen Charakter bewahrt hat. Bekannt ist die Gemeinde für den Holiday Park und als Testmarkt, in dem neue Produkte vor der bundesweiten Einführung erprobt werden.',
      'Haßloch liegt zwischen Neustadt an der Weinstraße und Speyer, Ludwigshafen und Mannheim sind gut erreichbar. Viele Haßlocher pendeln in die umliegenden Städte und in die Rhein-Neckar-Region, entsprechend verbreitet sind Pendler- und Familienfahrzeuge mit hoher Laufleistung. Wir bewerten jedes Fahrzeug einzeln nach Zustand, Ausstattung und Historie.',
      'Durch die Lage zwischen Weinstraße und Rhein-Neckar-Raum kaufen wir hier ebenso Fahrzeuge aus Pendlerhaushalten wie Zweitwagen von Familien, die ihren Fuhrpark verkleinern, oder ältere Autos, für die sich eine anstehende Hauptuntersuchung nicht mehr lohnt.',
    ],
  },
  areaSection: {
    heading: 'Autoankauf in Haßloch und der Vorderpfalz',
    intro: 'Wir kaufen Fahrzeuge im ganzen Ort und in den Nachbargemeinden an:',
    groups: [
      { title: 'Haßloch', items: ['Ortskern', 'Rund um den Holiday Park', 'Gewerbegebiet', 'Bahnhof Haßloch'] },
      { title: 'Nachbargemeinden', items: ['Böhl-Iggelheim', 'Meckenheim', 'Schifferstadt', 'Hochdorf-Assenheim'] },
      { title: 'Region', items: ['Neustadt an der Weinstraße', 'Speyer', 'Ludwigshafen', 'Bad Dürkheim'] },
    ],
  },
  processHeading: 'So läuft der Autoankauf in Haßloch ab',
  steps: [
    {
      title: 'Online bewerten',
      text: 'Fahrzeugdaten eingeben und in rund zwei Minuten eine kostenlose Preiseinschätzung erhalten.',
    },
    {
      title: 'Termin vereinbaren',
      text: 'Wir stimmen einen Termin zur Prüfung und Übergabe ab, auch abends oder am Wochenende. Die Besichtigung dauert etwa 15 bis 20 Minuten.',
    },
    {
      title: 'Vertrag und Auszahlung',
      text: 'Kaufvertrag unterschreiben, die Auszahlung wird sofort veranlasst. Die Abmeldung des DÜW-Kennzeichens übernehmen wir.',
    },
  ],
  vehiclesHeading: 'Welche Fahrzeuge wir in Haßloch ankaufen',
  vehiclesIntro: 'Wir kaufen alle Fahrzeuge an. In Haßloch und Umgebung bewerten wir häufig:',
  vehicles: [
    {
      title: 'Pendlerfahrzeuge',
      text: 'Autos mit hoher Laufleistung aus Fahrten nach Neustadt, Speyer, Ludwigshafen oder Mannheim.',
    },
    {
      title: 'Familienautos',
      text: 'Kombis, Vans und SUV, die nach einem Wechsel nicht mehr gebraucht werden.',
    },
    {
      title: 'Fahrzeuge aus Landwirtschaft und Gewerbe',
      text: 'Die Vorderpfalz ist landwirtschaftlich geprägt; Transporter und Arbeitsfahrzeuge kaufen wir ebenfalls an.',
    },
    {
      title: 'Autos mit Mängeln',
      text: 'Unfallwagen, Fahrzeuge mit Motorschaden oder ohne TÜV. Mehr im Ratgeber [Autoankauf mit Motorschaden](/ratgeber/autoankauf-mit-motorschaden).',
    },
  ],
  faqTitle: 'Häufige Fragen zum Autoankauf in Haßloch',
  faqId: 'faq-hassloch',
  faqs: HASSLOCH_FAQS,
  relatedHeading: 'Autoankauf in der Pfalz und Rhein-Neckar',
  relatedIntro: 'Auch in den Nachbarstädten sind wir für Sie da:',
  related: [
    { href: '/autoankauf-neustadt-weinstrasse', label: 'Autoankauf Neustadt an der Weinstraße' },
    { href: '/autoankauf-speyer', label: 'Autoankauf Speyer' },
    { href: '/autoankauf-ludwigshafen', label: 'Autoankauf Ludwigshafen' },
    { href: '/autoankauf-landau', label: 'Autoankauf Landau in der Pfalz' },
  ],
  cta: {
    heading: 'Jetzt Auto in Haßloch verkaufen',
    text: 'Kostenlose Bewertung in 2 Minuten und Auszahlung am selben Tag – im ganzen Ort und in der Vorderpfalz.',
    badges: ['Haßloch (Pfalz)', 'DÜW-Abmeldung inklusive', 'Sofort Geld'],
  },
};

export default function AutoankaufHasslochPage({ onCtaClick }: { onCtaClick: () => void }) {
  return <CitySeoTemplate content={CONTENT} onCtaClick={onCtaClick} />;
}
