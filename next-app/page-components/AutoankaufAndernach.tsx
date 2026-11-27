'use client';

import CitySeoTemplate, { type CityPageContent } from '@/components/CitySeoTemplate';
import { ANDERNACH_FAQS } from '@/lib/faqContent';

const CONTENT: CityPageContent = {
  cityName: 'Andernach',
  h1Lead: 'Autoankauf Andernach –',
  h1Accent: 'Auto verkaufen am Rhein',
  intro: [
    'Sie möchten Ihr Auto in Andernach verkaufen? Beim **Autoankauf Andernach** bewerten Sie Ihr Fahrzeug kostenlos online, erhalten ein Angebot und vereinbaren einen Termin zur Übergabe. Nach Vertragsabschluss wird die Auszahlung sofort veranlasst, die Abmeldung des MYK-Kennzeichens übernehmen wir.',
    'Wir kaufen alle Marken und Zustände an: Pendlerautos, Familienfahrzeuge, ältere Autos ohne TÜV und Unfallwagen, auch wenn sie nicht mehr fahrbereit sind.',
  ],
  advantagesHeading: 'Ihre Vorteile beim Autoankauf in Andernach',
  advantages: [
    'Kostenlose Online-Bewertung in 2 Minuten',
    'Sofortige Auszahlung nach Vertragsunterzeichnung',
    'Abholung in Andernach und Umgebung nach Absprache',
    'Abmeldung des MYK-Kennzeichens inklusive',
    'Ankauf aller Marken und Zustände',
    'Termine auch abends oder am Wochenende',
  ],
  localSection: {
    heading: 'Andernach: alte Römerstadt zwischen Koblenz und Bonn',
    paragraphs: [
      'Andernach zählt zu den ältesten Städten Deutschlands und liegt am Rhein im Landkreis Mayen-Koblenz, zwischen Koblenz und Bonn. Bekannt ist die Stadt für den Geysir Andernach, den höchsten Kaltwassergeysir der Welt, und als „essbare Stadt“, in der auf öffentlichen Grünflächen Obst und Gemüse wachsen.',
      'Über die B9 und die nahe A61 sind Koblenz, Mayen und das Rheinland schnell erreichbar, Neuwied liegt auf der anderen Rheinseite in unmittelbarer Nähe. Viele Andernacher pendeln in die umliegenden Städte oder arbeiten in den Industriebetrieben am Rhein. Entsprechend häufig bewerten wir Pendlerfahrzeuge mit hoher Laufleistung und Familienautos.',
      'In den Stadtteilen Namedy, Eich, Kell und Miesenheim sind viele Haushalte auf ein oder zwei Autos angewiesen. Wird ein Fahrzeug überflüssig oder steht eine teure Reparatur an, ist ein schneller Verkauf ohne Inserat oft die einfachste Lösung. Statt das Auto wochenlang in einer Börse anzubieten, erhalten Sie bei uns ein konkretes Angebot und erledigen den Verkauf mit einem einzigen Termin.',
    ],
  },
  areaSection: {
    heading: 'Autoankauf in Andernach und Umgebung',
    intro: 'Wir kaufen Fahrzeuge in allen Stadtteilen und in den Nachbarorten an:',
    groups: [
      { title: 'Andernach', items: ['Innenstadt', 'Namedy', 'Eich', 'Kell', 'Miesenheim'] },
      { title: 'Nachbarorte', items: ['Weißenthurm', 'Plaidt', 'Kruft', 'Bad Breisig'] },
      { title: 'Region', items: ['Neuwied', 'Koblenz', 'Mayen', 'Bonn'] },
    ],
  },
  processHeading: 'So läuft der Autoankauf in Andernach ab',
  steps: [
    {
      title: 'Online bewerten',
      text: 'Fahrzeugdaten eingeben und in rund zwei Minuten eine kostenlose Preiseinschätzung erhalten.',
    },
    {
      title: 'Termin abstimmen',
      text: 'Wir vereinbaren einen Termin zur Prüfung und Übergabe in Andernach, auch abends oder am Wochenende. Die Besichtigung dauert etwa 15 bis 20 Minuten.',
    },
    {
      title: 'Vertrag und Auszahlung',
      text: 'Kaufvertrag, sofort veranlasste Auszahlung und Abmeldung des MYK-Kennzeichens durch uns.',
    },
  ],
  vehiclesHeading: 'Welche Fahrzeuge wir in Andernach ankaufen',
  vehiclesIntro: 'Wir kaufen alle Fahrzeuge an. In Andernach und Umgebung bewerten wir besonders oft:',
  vehicles: [
    {
      title: 'Pendlerfahrzeuge',
      text: 'Autos mit hoher Laufleistung aus täglichen Fahrten nach Koblenz, Neuwied, Mayen oder Bonn.',
    },
    {
      title: 'Familienautos und Kombis',
      text: 'Fahrzeuge, die nach einem Umzug oder dem Auszug der Kinder nicht mehr gebraucht werden.',
    },
    {
      title: 'Ältere Autos ohne TÜV',
      text: 'Fahrzeuge, bei denen sich eine teure Hauptuntersuchung nicht mehr lohnt. Mehr unter [Altes Auto verkaufen](/altes-auto-verkaufen).',
    },
    {
      title: 'Unfallwagen und Motorschaden',
      text: 'Auch beschädigte oder nicht fahrbereite Fahrzeuge kaufen wir an. Mehr im Ratgeber [Unfallwagen Ankauf](/ratgeber/unfallwagen-ankauf).',
    },
  ],
  faqTitle: 'Häufige Fragen zum Autoankauf in Andernach',
  faqId: 'faq-andernach',
  faqs: ANDERNACH_FAQS,
  relatedHeading: 'Autoankauf am Mittelrhein',
  relatedIntro: 'Auch in den Nachbarstädten sind wir für Sie da:',
  related: [
    { href: '/autoankauf-neuwied', label: 'Autoankauf Neuwied' },
    { href: '/autoankauf-koblenz', label: 'Autoankauf Koblenz' },
    { href: '/autoankauf-bonn', label: 'Autoankauf Bonn' },
  ],
  cta: {
    heading: 'Jetzt Auto in Andernach verkaufen',
    text: 'Kostenlose Bewertung in 2 Minuten und Auszahlung am selben Tag – in Andernach und Umgebung.',
    badges: ['Alle Stadtteile', 'MYK-Abmeldung inklusive', 'Sofort Geld'],
  },
};

export default function AutoankaufAndernachPage({ onCtaClick }: { onCtaClick: () => void }) {
  return <CitySeoTemplate content={CONTENT} onCtaClick={onCtaClick} />;
}
