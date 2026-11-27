'use client';

import CitySeoTemplate, { type CityPageContent } from '@/components/CitySeoTemplate';
import { MOERFELDEN_WALLDORF_FAQS } from '@/lib/faqContent';

const CONTENT: CityPageContent = {
  cityName: 'Mörfelden-Walldorf',
  h1Lead: 'Autoankauf Mörfelden-Walldorf –',
  h1Accent: 'fair verkaufen direkt am Flughafen',
  intro: [
    'Beim **Autoankauf Mörfelden-Walldorf** verkaufen Sie Ihr Auto ohne Inserat und ohne Verhandlungsmarathon: kostenlos online bewerten, Angebot erhalten, Termin vereinbaren. Nach Vertragsabschluss wird die Auszahlung sofort veranlasst, die Abmeldung des GG-Kennzeichens übernehmen wir.',
    'Unsere Filiale in Rüsselsheim liegt im selben Landkreis, nur eine kurze Fahrt entfernt. Auf Wunsch holen wir Ihr Fahrzeug aber auch direkt in Mörfelden oder Walldorf ab.',
  ],
  advantagesHeading: 'Ihre Vorteile beim Autoankauf in Mörfelden-Walldorf',
  advantages: [
    'Kostenlose Online-Bewertung in 2 Minuten',
    'Sofortige Auszahlung nach Vertragsunterzeichnung',
    'Kostenlose Abholung in Mörfelden und Walldorf',
    'Abmeldung des GG-Kennzeichens inklusive',
    'Termine auch abends oder am Wochenende',
    'Filiale in Rüsselsheim im Kreis Groß-Gerau',
  ],
  localSection: {
    heading: 'Mörfelden-Walldorf: Doppelstadt zwischen Wald und Flughafen',
    paragraphs: [
      'Mörfelden-Walldorf besteht aus zwei ehemals eigenständigen Orten: dem alten Bauerndorf Mörfelden und Walldorf, das Ende des 17. Jahrhunderts von Waldensern gegründet wurde. Heute liegt die Stadt direkt südlich des Frankfurter Flughafens, eingerahmt von Wald, mit der A5 und der A67 vor der Haustür und der S-Bahn-Linie S7 nach Frankfurt.',
      'Die Nähe zum Flughafen prägt den Alltag: Viele Menschen arbeiten im Schichtdienst und brauchen ein zuverlässiges Auto zu Zeiten, in denen keine Bahn fährt. Entsprechend hoch ist der Anteil an Pendlerfahrzeugen mit vielen Kurzstrecken und Fahrten zu ungewöhnlichen Uhrzeiten. Wir stimmen unsere Termine deshalb flexibel ab, auch abends oder am Wochenende.',
      'Mörfelden-Walldorf gehört wie Rüsselsheim zum Kreis Groß-Gerau, und in Rüsselsheim betreiben wir eine eigene Filiale. Für Sie heißt das: kurze Wege, wenn Sie Ihr Auto selbst vorbeibringen möchten, und eine Abmeldung des GG-Kennzeichens, um die Sie sich nicht kümmern müssen. Ist das Fahrzeug nicht mehr fahrbereit, holen wir es direkt bei Ihnen ab.',
    ],
  },
  areaSection: {
    heading: 'Autoankauf in Mörfelden, Walldorf und Umgebung',
    intro: 'Wir holen Ihr Fahrzeug in beiden Stadtteilen und im Umland ab:',
    groups: [
      { title: 'Mörfelden-Walldorf', items: ['Mörfelden', 'Walldorf', 'Rund um den Walldorfer Badesee', 'Bahnhöfe Mörfelden und Walldorf'] },
      { title: 'Kreis Groß-Gerau', items: ['Groß-Gerau', 'Rüsselsheim', 'Kelsterbach', 'Büttelborn'] },
      { title: 'Nachbarschaft', items: ['Langen', 'Neu-Isenburg-Zeppelinheim', 'Flughafen-Umgebung', 'Egelsbach'] },
    ],
  },
  processHeading: 'So läuft der Autoankauf in Mörfelden-Walldorf ab',
  steps: [
    {
      title: 'Online bewerten',
      text: 'Fahrzeugdaten eingeben und eine kostenlose, unverbindliche Preiseinschätzung erhalten.',
    },
    {
      title: 'Termin nach Ihrem Plan',
      text: 'Prüfung bei Ihnen oder an unserer Filiale in Rüsselsheim, auch nach der Schicht. Die Besichtigung dauert etwa 15 bis 20 Minuten.',
    },
    {
      title: 'Vertrag und Auszahlung',
      text: 'Kaufvertrag, sofort veranlasste Auszahlung und Abmeldung des GG-Kennzeichens durch uns.',
    },
  ],
  vehiclesHeading: 'Welche Fahrzeuge wir in Mörfelden-Walldorf ankaufen',
  vehiclesIntro: 'Wir kaufen alle Marken und Zustände. Typisch für Mörfelden-Walldorf sind:',
  vehicles: [
    {
      title: 'Pendlerautos für Schichtarbeit',
      text: 'Zuverlässige Alltagsfahrzeuge mit vielen Kurzstrecken, oft mit Verschleiß an Kupplung, Bremsen oder Batterie.',
    },
    {
      title: 'Familien-Kombis und Vans',
      text: 'Fahrzeuge, die nach dem Auszug der Kinder oder einem Umzug nicht mehr gebraucht werden.',
    },
    {
      title: 'Fahrzeuge vor einem Umzug ins Ausland',
      text: 'Sie verlassen Deutschland oder sind lange unterwegs? Wir stimmen die Übergabe auf Ihren Zeitplan ab.',
    },
    {
      title: 'Unfallwagen und Autos ohne TÜV',
      text: 'Auch beschädigte oder nicht fahrbereite Fahrzeuge kaufen wir an. Mehr im Ratgeber [Autoankauf ohne TÜV](/ratgeber/autoankauf-ohne-tuev).',
    },
  ],
  faqTitle: 'Häufige Fragen zum Autoankauf in Mörfelden-Walldorf',
  faqId: 'faq-moerfelden-walldorf',
  faqs: MOERFELDEN_WALLDORF_FAQS,
  relatedHeading: 'Autoankauf im Kreis Groß-Gerau und Rhein-Main',
  relatedIntro: 'Auch in den Nachbarstädten sind wir für Sie da:',
  related: [
    { href: '/autoankauf-ruesselsheim', label: 'Autoankauf Rüsselsheim' },
    { href: '/autoankauf-gross-gerau', label: 'Autoankauf Groß-Gerau' },
    { href: '/autoankauf-langen', label: 'Autoankauf Langen' },
    { href: '/autoankauf-frankfurt', label: 'Autoankauf Frankfurt' },
    { href: '/autoankauf-darmstadt', label: 'Autoankauf Darmstadt' },
  ],
  cta: {
    heading: 'Jetzt Auto in Mörfelden-Walldorf verkaufen',
    text: 'Kostenlose Bewertung, flexible Termine und Auszahlung am selben Tag – in Mörfelden und in Walldorf.',
    badges: ['Mörfelden & Walldorf', 'GG-Abmeldung inklusive', 'Termine auch abends'],
  },
};

export default function AutoankaufMoerfeldenWalldorfPage({ onCtaClick }: { onCtaClick: () => void }) {
  return <CitySeoTemplate content={CONTENT} onCtaClick={onCtaClick} />;
}
