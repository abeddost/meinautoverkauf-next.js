'use client';

import CitySeoTemplate, { type CityPageContent } from '@/components/CitySeoTemplate';
import { NEU_ISENBURG_FAQS } from '@/lib/faqContent';

const CONTENT: CityPageContent = {
  cityName: 'Neu-Isenburg',
  h1Lead: 'Autoankauf Neu-Isenburg –',
  h1Accent: 'zwischen Frankfurt und Flughafen fair verkaufen',
  intro: [
    'Sie möchten Ihr Auto in Neu-Isenburg verkaufen? Beim **Autoankauf Neu-Isenburg** bewerten Sie Ihr Fahrzeug kostenlos online, erhalten ein Angebot und vereinbaren einen Termin – in der Kernstadt, in Gravenbruch, in Zeppelinheim oder an unserer Filiale in Rüsselsheim. Nach Vertragsabschluss wird die Auszahlung sofort veranlasst, die Abmeldung übernehmen wir.',
    'Ob Pendlerfahrzeug, Firmenwagen oder Zweitwagen, der nach einem Umzug nicht mehr gebraucht wird: Wir kaufen alle Marken und Zustände, auch mit Mängeln, Unfallschaden oder ohne TÜV.',
  ],
  advantagesHeading: 'Ihre Vorteile beim Autoankauf in Neu-Isenburg',
  advantages: [
    'Kostenlose Online-Bewertung in 2 Minuten',
    'Sofortige Auszahlung nach Vertragsunterzeichnung',
    'Kostenlose Abholung in Neu-Isenburg und Umgebung',
    'Abmeldung des OF-Kennzeichens inklusive',
    'Termine auch abends oder am Wochenende',
    'Ankauf aller Marken und Zustände',
  ],
  localSection: {
    heading: 'Neu-Isenburg: Hugenottenstadt mit kurzen Wegen',
    paragraphs: [
      'Neu-Isenburg wurde 1699 von Hugenotten gegründet und liegt heute mitten im Rhein-Main-Gebiet: Frankfurt grenzt direkt im Norden an, der Flughafen ist nur wenige Kilometer entfernt, und über die A3 und die A661 sind Sie schnell im gesamten Umland. Viele Menschen in Neu-Isenburg pendeln täglich nach Frankfurt oder arbeiten am Flughafen, entsprechend viele Fahrzeuge haben hohe Laufleistungen aus Pendel- und Dienstfahrten.',
      'Zugleich haben zahlreiche Unternehmen ihren Sitz in den Neu-Isenburger Gewerbegebieten. Dienstwagen und Leasingrückläufer mit gepflegter Historie sind deshalb häufig. Wir bewerten jedes Fahrzeug einzeln nach Zustand, Ausstattung und Nachweisen statt nach Pauschalwerten.',
      'Wer sein Auto nach einem Umzug oder dem Umstieg auf Bahn und Rad nicht mehr braucht, profitiert von einem schnellen Verkauf ohne Inserat und ohne Besichtigungstermine mit Fremden.',
    ],
  },
  areaSection: {
    heading: 'Autoankauf in allen Neu-Isenburger Stadtteilen und Nachbarorten',
    intro: 'Wir kommen zu Ihnen – egal ob Kernstadt, Ortsteil oder Nachbarort:',
    groups: [
      { title: 'Neu-Isenburg', items: ['Kernstadt', 'Gravenbruch', 'Zeppelinheim', 'Rund um das Isenburg-Zentrum'] },
      { title: 'Kreis Offenbach', items: ['Dreieich', 'Langen', 'Egelsbach', 'Heusenstamm'] },
      { title: 'Rhein-Main', items: ['Frankfurt-Sachsenhausen', 'Frankfurt-Niederrad', 'Offenbach', 'Flughafen-Umgebung'] },
    ],
  },
  processHeading: 'So läuft der Autoankauf in Neu-Isenburg ab',
  steps: [
    {
      title: 'Online bewerten',
      text: 'Fahrzeugdaten eingeben und in rund zwei Minuten eine KI-gestützte Preiseinschätzung erhalten – kostenlos und unverbindlich.',
    },
    {
      title: 'Termin wählen',
      text: 'Prüfung bei Ihnen in Neu-Isenburg oder Abgabe an unserer Filiale in Rüsselsheim. Die Besichtigung dauert etwa 15 bis 20 Minuten.',
    },
    {
      title: 'Vertrag und Auszahlung',
      text: 'Kaufvertrag unterschreiben, die Auszahlung wird sofort veranlasst. Die Abmeldung des OF-Kennzeichens übernehmen wir.',
    },
  ],
  vehiclesHeading: 'Welche Fahrzeuge wir in Neu-Isenburg ankaufen',
  vehiclesIntro: 'Wir kaufen alle Marken und Zustände. Besonders häufig bewerten wir in Neu-Isenburg:',
  vehicles: [
    {
      title: 'Pendler- und Vielfahrerautos',
      text: 'Kombis und Limousinen mit hoher Laufleistung aus täglichen Fahrten nach Frankfurt – mit Wartungsnachweisen gut zu bewerten.',
    },
    {
      title: 'Dienstwagen und Leasingrückläufer',
      text: 'Fahrzeuge aus Firmenflotten, nach Vertragsende privat übernommen oder direkt vom Unternehmen verkauft. Mehr im Ratgeber [Autoankauf für Firmenwagen](/ratgeber/autoankauf-firmenwagen-gewerbe).',
    },
    {
      title: 'Zweitwagen und Stadtautos',
      text: 'Kleinwagen, die nach einem Umzug oder dem Umstieg auf den öffentlichen Nahverkehr kaum noch bewegt werden.',
    },
    {
      title: 'Autos mit Mängeln',
      text: 'Unfallwagen, Fahrzeuge mit Motorschaden oder ohne gültige HU – auch nicht fahrbereit.',
    },
  ],
  faqTitle: 'Häufige Fragen zum Autoankauf in Neu-Isenburg',
  faqId: 'faq-neu-isenburg',
  faqs: NEU_ISENBURG_FAQS,
  relatedHeading: 'Autoankauf in der Nachbarschaft',
  relatedIntro: 'Unser Service ist im gesamten Rhein-Main-Gebiet verfügbar:',
  related: [
    { href: '/autoankauf-frankfurt', label: 'Autoankauf Frankfurt' },
    { href: '/autoankauf-dreieich', label: 'Autoankauf Dreieich' },
    { href: '/autoankauf-offenbach', label: 'Autoankauf Offenbach' },
    { href: '/autoankauf-langen', label: 'Autoankauf Langen' },
  ],
  cta: {
    heading: 'Jetzt Auto in Neu-Isenburg verkaufen',
    text: 'Kostenlose Bewertung in 2 Minuten, Auszahlung am selben Tag und Abholung direkt bei Ihnen.',
    badges: ['Kernstadt, Gravenbruch, Zeppelinheim', 'OF-Abmeldung inklusive', 'Sofort Geld'],
  },
};

export default function AutoankaufNeuIsenburgPage({ onCtaClick }: { onCtaClick: () => void }) {
  return <CitySeoTemplate content={CONTENT} onCtaClick={onCtaClick} />;
}
