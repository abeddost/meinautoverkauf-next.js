'use client';

import CitySeoTemplate, { type CityPageContent } from '@/components/CitySeoTemplate';
import { GROSS_GERAU_FAQS } from '@/lib/faqContent';

const CONTENT: CityPageContent = {
  cityName: 'Groß-Gerau',
  h1Lead: 'Autoankauf Groß-Gerau –',
  h1Accent: 'schnell verkaufen in der Kreisstadt',
  intro: [
    'Sie möchten Ihr Auto in Groß-Gerau verkaufen? Beim **Autoankauf Groß-Gerau** bewerten Sie Ihr Fahrzeug kostenlos online und erhalten ein Angebot. Wir holen das Auto in der Kernstadt und in allen Stadtteilen ab, oder Sie geben es an unserer nahegelegenen Filiale in Rüsselsheim ab. Nach Vertragsabschluss wird die Auszahlung sofort veranlasst.',
    'Wir kaufen alle Marken, ob gepflegter Alltagswagen, Arbeitsfahrzeug aus dem Ried oder Auto mit Motorschaden.',
  ],
  advantagesHeading: 'Ihre Vorteile beim Autoankauf in Groß-Gerau',
  advantages: [
    'Kostenlose Online-Bewertung in 2 Minuten',
    'Sofortige Auszahlung nach Vertragsunterzeichnung',
    'Kostenlose Abholung in Groß-Gerau und allen Stadtteilen',
    'Abmeldung des GG-Kennzeichens inklusive',
    'Filiale im benachbarten Rüsselsheim',
    'Termine auch abends oder am Wochenende',
  ],
  localSection: {
    heading: 'Groß-Gerau: Kreisstadt im Hessischen Ried',
    paragraphs: [
      'Groß-Gerau ist die Kreisstadt des gleichnamigen Landkreises und liegt im Hessischen Ried zwischen Rhein und Main. Die Landschaft ist flach und landwirtschaftlich geprägt, die Wege nach Rüsselsheim, Darmstadt, Mainz und Frankfurt sind kurz. Über die A67 und die Bahnstrecken in Richtung Mainz, Darmstadt und Frankfurt sind viele Groß-Gerauer täglich als Pendler unterwegs.',
      'Diese Mischung spiegelt sich im Fahrzeugbestand wider: Pendlerautos mit hoher Laufleistung, Familienkombis, aber auch Transporter und Pick-ups aus Landwirtschaft und Handwerk. Als Kreisstadt ist Groß-Gerau Sitz der Kreisverwaltung; die Abmeldung des GG-Kennzeichens nach dem Verkauf übernehmen wir für Sie.',
      'Häufig sind auch ältere Fahrzeuge, die lange im Familienbesitz waren und nach einem Generationswechsel verkauft werden sollen. Ob Erbstück oder Zweitwagen nach dem Auszug der Kinder: Wir bewerten Zustand und Historie fair und holen das Fahrzeug auf Wunsch direkt vom Hof oder aus der Garage ab.',
    ],
  },
  areaSection: {
    heading: 'Autoankauf in allen Groß-Gerauer Stadtteilen',
    intro: 'Wir kommen zu Ihnen, in der Kernstadt ebenso wie in den Stadtteilen und Nachbargemeinden:',
    groups: [
      { title: 'Groß-Gerau', items: ['Kernstadt', 'Dornheim', 'Wallerstädten', 'Berkach', 'Auf Esch'] },
      { title: 'Nachbargemeinden', items: ['Büttelborn', 'Nauheim', 'Trebur', 'Riedstadt'] },
      { title: 'Region', items: ['Rüsselsheim', 'Mörfelden-Walldorf', 'Darmstadt', 'Mainz'] },
    ],
  },
  processHeading: 'So läuft der Autoankauf in Groß-Gerau ab',
  steps: [
    {
      title: 'Bewerten',
      text: 'Fahrzeugdaten online eingeben und in rund zwei Minuten eine kostenlose Preiseinschätzung erhalten.',
    },
    {
      title: 'Abholen oder abgeben',
      text: 'Wir kommen zu Ihnen nach Groß-Gerau, oder Sie bringen das Auto nach Terminbuchung zu unserer Filiale in Rüsselsheim.',
    },
    {
      title: 'Auszahlung',
      text: 'Nach kurzer Prüfung und Vertragsabschluss wird die Auszahlung sofort veranlasst. Die Abmeldung übernehmen wir.',
    },
  ],
  vehiclesHeading: 'Welche Fahrzeuge wir in Groß-Gerau ankaufen',
  vehiclesIntro: 'Wir kaufen alle Fahrzeuge, unabhängig von Marke und Zustand. In Groß-Gerau sehen wir besonders oft:',
  vehicles: [
    {
      title: 'Pendlerfahrzeuge',
      text: 'Autos mit vielen Kilometern aus täglichen Fahrten nach Frankfurt, Darmstadt oder Mainz.',
    },
    {
      title: 'Transporter und Arbeitsfahrzeuge',
      text: 'Fahrzeuge aus Landwirtschaft, Handwerk und Gewerbe im Ried, auch mit hoher Laufleistung.',
    },
    {
      title: 'Opel und andere Stellantis-Modelle',
      text: 'Die Nähe zu Rüsselsheim zeigt sich im Straßenbild: Corsa, Astra und Insignia sind besonders verbreitet. Mehr auf unserer Seite [Opel Astra verkaufen](/opel-astra-verkaufen).',
    },
    {
      title: 'Ältere Autos und Unfallwagen',
      text: 'Auch Fahrzeuge ohne TÜV, mit Rost oder nicht fahrbereit. Mehr dazu unter [Altes Auto verkaufen](/altes-auto-verkaufen).',
    },
  ],
  faqTitle: 'Häufige Fragen zum Autoankauf in Groß-Gerau',
  faqId: 'faq-gross-gerau',
  faqs: GROSS_GERAU_FAQS,
  relatedHeading: 'Autoankauf in der Region',
  relatedIntro: 'Auch in den Nachbarstädten im Rhein-Main-Gebiet sind wir für Sie da:',
  related: [
    { href: '/autoankauf-ruesselsheim', label: 'Autoankauf Rüsselsheim' },
    { href: '/autoankauf-moerfelden-walldorf', label: 'Autoankauf Mörfelden-Walldorf' },
    { href: '/autoankauf-darmstadt', label: 'Autoankauf Darmstadt' },
    { href: '/autoankauf-mainz', label: 'Autoankauf Mainz' },
  ],
  cta: {
    heading: 'Jetzt Auto in Groß-Gerau verkaufen',
    text: 'Kostenlose Bewertung, Abholung im ganzen Stadtgebiet und Auszahlung am selben Tag.',
    badges: ['Alle Stadtteile', 'Filiale Rüsselsheim', 'Sofort Geld'],
  },
};

export default function AutoankaufGrossGerauPage({ onCtaClick }: { onCtaClick: () => void }) {
  return <CitySeoTemplate content={CONTENT} onCtaClick={onCtaClick} />;
}
