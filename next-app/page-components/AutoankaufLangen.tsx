'use client';

import CitySeoTemplate, { type CityPageContent } from '@/components/CitySeoTemplate';
import { LANGEN_FAQS } from '@/lib/faqContent';

const CONTENT: CityPageContent = {
  cityName: 'Langen',
  h1Lead: 'Autoankauf Langen –',
  h1Accent: 'Auto verkaufen im Kreis Offenbach',
  intro: [
    'Beim **Autoankauf Langen** verkaufen Sie Ihr Auto ohne Inserat: kostenlos online bewerten, Angebot erhalten, Termin vereinbaren. Wir kommen zu Ihnen nach Langen und Egelsbach, oder Sie geben Ihr Fahrzeug an unserer Filiale in Rüsselsheim ab. Nach Vertragsabschluss wird die Auszahlung sofort veranlasst, die Abmeldung des OF-Kennzeichens übernehmen wir.',
    'Wir kaufen alle Marken und Zustände an – vom gepflegten Dienstwagen bis zum Zweitwagen mit Mängeln. Auch bei laufender Finanzierung ist ein Verkauf möglich, die Restschuld kann im Ankauf berücksichtigt werden.',
  ],
  advantagesHeading: 'Ihre Vorteile beim Autoankauf in Langen',
  advantages: [
    'Kostenlose Online-Bewertung in 2 Minuten',
    'Sofortige Auszahlung nach Vertragsunterzeichnung',
    'Kostenlose Abholung in Langen und Egelsbach',
    'Abmeldung des OF-Kennzeichens inklusive',
    'Termine auch abends oder am Wochenende',
    'Ankauf aller Marken und Zustände',
  ],
  localSection: {
    heading: 'Langen (Hessen): Standort für Flugsicherung und Forschung',
    paragraphs: [
      'Langen liegt zwischen Frankfurt und Darmstadt und ist weit über die Region hinaus bekannt: Hier haben die Deutsche Flugsicherung und das Paul-Ehrlich-Institut ihren Sitz, dazu kommen zahlreiche mittelständische Unternehmen. Viele Langener arbeiten vor Ort, viele pendeln mit der S-Bahn oder über die A5 und die A661 nach Frankfurt und Darmstadt.',
      'Im Sommer zieht der Langener Waldsee Besucher aus dem ganzen Rhein-Main-Gebiet an, im Alltag prägen Pendlerfahrzeuge, Familienautos und Firmenwagen das Straßenbild. Wir bewerten jedes Fahrzeug einzeln nach Zustand, Ausstattung und Historie statt nach Pauschalwerten.',
      'Wer bei einer Behörde oder einem größeren Arbeitgeber in Langen beschäftigt ist, fährt nicht selten einen Dienstwagen. Kommt ein neuer Dienstwagen, soll das bisherige Privatauto oft schnell verkauft werden. Dafür bieten wir einen klaren Ablauf: Online-Bewertung, Termin in Langen oder an unserer Filiale in Rüsselsheim, Auszahlung direkt nach Vertragsabschluss. Auch Autos, die täglich als Zubringer zur S-Bahn dienen und viele Kurzstrecken auf dem Tacho haben, bewerten wir fair und nachvollziehbar.',
    ],
  },
  areaSection: {
    heading: 'Autoankauf in ganz Langen und Umgebung',
    intro: 'Wir holen Ihr Fahrzeug im gesamten Stadtgebiet und in den Nachbarorten ab:',
    groups: [
      { title: 'Langen', items: ['Innenstadt', 'Oberlinden', 'Rund um den Bahnhof', 'Am Langener Waldsee'] },
      { title: 'Nachbarorte', items: ['Egelsbach', 'Dreieich', 'Erzhausen', 'Mörfelden-Walldorf'] },
      { title: 'Region', items: ['Neu-Isenburg', 'Frankfurt-Süd', 'Darmstadt', 'Offenbach'] },
    ],
  },
  processHeading: 'So läuft der Autoankauf in Langen ab',
  steps: [
    {
      title: 'Online bewerten',
      text: 'In rund zwei Minuten zur kostenlosen, KI-gestützten Preiseinschätzung.',
    },
    {
      title: 'Termin wählen',
      text: 'Prüfung bei Ihnen in Langen oder Abgabe an unserer Filiale in Rüsselsheim, auch abends oder am Wochenende.',
    },
    {
      title: 'Vertrag und Auszahlung',
      text: 'Kaufvertrag, sofort veranlasste Auszahlung und Abmeldung des OF-Kennzeichens durch uns.',
    },
  ],
  vehiclesHeading: 'Welche Fahrzeuge wir in Langen ankaufen',
  vehiclesIntro: 'Wir kaufen alle Fahrzeuge. In Langen sehen wir besonders häufig:',
  vehicles: [
    {
      title: 'Dienst- und Firmenwagen',
      text: 'Gepflegte Fahrzeuge aus Unternehmen und Behörden, nach Vertragsende oder aus dem Fuhrpark. Mehr im Ratgeber [Autoankauf für Firmenwagen](/ratgeber/autoankauf-firmenwagen-gewerbe).',
    },
    {
      title: 'Pendlerautos',
      text: 'Kombis und Kompaktwagen mit hoher Laufleistung aus täglichen Fahrten im Rhein-Main-Gebiet.',
    },
    {
      title: 'Zweitwagen',
      text: 'Autos, die nach dem Umstieg auf S-Bahn oder Fahrrad kaum noch bewegt werden.',
    },
    {
      title: 'Fahrzeuge mit Mängeln',
      text: 'Unfallwagen, Motorschaden oder abgelaufener TÜV – wir kaufen auch nicht fahrbereite Autos an.',
    },
  ],
  faqTitle: 'Häufige Fragen zum Autoankauf in Langen',
  faqId: 'faq-langen',
  faqs: LANGEN_FAQS,
  relatedHeading: 'Autoankauf in der Nachbarschaft',
  relatedIntro: 'Auch in den umliegenden Städten sind wir für Sie da:',
  related: [
    { href: '/autoankauf-dreieich', label: 'Autoankauf Dreieich' },
    { href: '/autoankauf-neu-isenburg', label: 'Autoankauf Neu-Isenburg' },
    { href: '/autoankauf-darmstadt', label: 'Autoankauf Darmstadt' },
    { href: '/autoankauf-frankfurt', label: 'Autoankauf Frankfurt' },
  ],
  cta: {
    heading: 'Jetzt Auto in Langen verkaufen',
    text: 'Kostenlose Bewertung, Abholung in Langen und Egelsbach und Auszahlung am selben Tag.',
    badges: ['Langen & Egelsbach', 'OF-Abmeldung inklusive', 'Sofort Geld'],
  },
};

export default function AutoankaufLangenPage({ onCtaClick }: { onCtaClick: () => void }) {
  return <CitySeoTemplate content={CONTENT} onCtaClick={onCtaClick} />;
}
