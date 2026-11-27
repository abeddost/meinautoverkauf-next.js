import type { Metadata } from 'next';
import SeoArticlePage from '@/components/SeoArticlePage';
import type { SeoArticleContent } from '@/components/SeoArticle';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const MODEL = MODEL_SEO_PAGE_BY_SLUG['skoda-superb-verkaufen'];

export const metadata: Metadata = {
  title: { absolute: MODEL.seoTitle },
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

const CONTENT: SeoArticleContent = {
  h1: 'Skoda Superb Ankauf: Limousine und Combi zum fairen Preis verkaufen',
  intro: [
    'Beim **Skoda Superb Ankauf** zählt vor allem, wie das Fahrzeug genutzt wurde. Der Superb ist für viele das vernünftigste große Auto am Markt: viel Platz, solide Technik und günstiger als vergleichbare Premiummodelle. Entsprechend häufig fährt er als Familienkombi, Dienstwagen oder Vielfahrer-Limousine, und entsprechend unterschiedlich sind Laufleistung und Zustand.',
    'Wir kaufen den Superb aller Generationen an: kostenlose Online-Bewertung, Angebot auf Basis von Ausstattung, Motor und Historie, sofort veranlasste Auszahlung nach Vertragsabschluss. Auf Wunsch holen wir den Superb ab und kümmern uns um die Abmeldung.',
  ],
  sections: [
    {
      heading: 'Superb-Generationen im Ankauf',
      cards: [
        {
          title: 'Superb I (2001–2008)',
          text: 'Die erste Generation auf Basis des VW Passat mit verlängertem Radstand. Heute meist mit hoher Laufleistung und vor allem für den Export interessant.',
        },
        {
          title: 'Superb II (2008–2015)',
          text: 'Bekannt für die Twindoor-Heckklappe, ab 2009 auch als Combi. Gefragt mit 2.0 TDI und gepflegter Historie.',
        },
        {
          title: 'Superb III (2015–2023)',
          text: 'Sehr viel Platz und moderne Assistenzsysteme, später auch als Plug-in-Hybrid iV. Viele Exemplare stammen aus Firmenflotten.',
        },
        {
          title: 'Superb IV (seit 2024)',
          text: 'Die aktuelle Generation, gemeinsam mit dem VW Passat gebaut. Bei jungen Fahrzeugen zählen vor allem Ausstattung und Restgarantie.',
        },
      ],
    },
    {
      heading: 'Was beeinflusst den Preis beim Superb?',
      paragraphs: ['Beim Superb entscheiden Nutzung und Ausstattung stärker über den Preis als das Baujahr allein:'],
      bullets: [
        'Laufleistung im Verhältnis zum Alter, typisch für Vielfahrer und Flotten',
        'Motor und Getriebe: TDI, TSI oder iV, Schaltgetriebe oder DSG',
        'Ausstattungslinie wie Ambition, Style, Sportline oder Laurin & Klement',
        'Allradantrieb 4x4 und Anhängerkupplung',
        'Scheckheft, insbesondere DSG-Ölwechsel und Allrad-Service beim 4x4',
        'Unfallfreiheit und HU-Status',
      ],
    },
    {
      heading: 'Typische Superb-Themen, die Käufer prüfen',
      variant: 'card',
      subsections: [
        {
          title: 'DSG-Getriebe',
          text: 'Ruckeln beim Anfahren oder Schaltverzögerungen deuten auf Kupplung oder Mechatronik hin. Ein belegter Getriebeölwechsel schafft bei Käufern Vertrauen.',
        },
        {
          title: 'TSI-Benziner',
          text: 'Bei älteren 1.8 und 2.0 TSI können Steuerkette und Ölverbrauch ein Thema sein. Wartungsnachweise sind hier besonders wichtig.',
        },
        {
          title: 'TDI-Diesel',
          text: 'Partikelfilter, AGR und Injektoren sind bei hoher Laufleistung und viel Kurzstrecke typische Kostenpunkte. Bei älteren 2.0 TDI vom Typ EA189 sollten Sie belegen können, dass das Software-Update aus dem Rückruf durchgeführt wurde.',
        },
        {
          title: 'Plug-in-Hybrid iV',
          text: 'Bei den iV-Modellen zählen Wartung und Zustand des Hybridsystems sowie vorhandene Ladekabel.',
        },
      ],
    },
    {
      heading: 'Superb verkaufen: Ankauf oder privat?',
      paragraphs: [
        'Der Superb ist auf den Fahrzeugbörsen stark vertreten, gerade als Combi. Privat konkurrieren Sie deshalb mit vielen ähnlichen Angeboten, und Käufer nutzen jede Auffälligkeit zum Verhandeln. Bei hoher Laufleistung melden sich zudem vor allem Händler und Exporteure.',
        'Beim Ankauf erhalten Sie ein verbindliches Angebot ohne Inserat. Weitere Skoda-Themen behandelt unser [Skoda-Ratgeber](/ratgeber/skoda-probleme-verkauf), den kleineren Bruder unsere Seite [Skoda Octavia verkaufen](/skoda-octavia-verkaufen).',
      ],
    },
    {
      heading: 'Superb Combi: Platz als Verkaufsargument',
      paragraphs: [
        'Der Superb Combi gehört zu den geräumigsten Kombis seiner Klasse und ist bei Familien und Vielfahrern entsprechend gefragt. Für Käufer zählen dabei Anhängerkupplung, Allradantrieb und ein gepflegter Innenraum, denn Kombis werden oft intensiv genutzt. Halten Sie Rechnungen über Wartung und Reifen bereit und beschreiben Sie Gebrauchsspuren im Laderaum offen – das verhindert Diskussionen bei der Besichtigung und hält das Angebot stabil.',
      ],
    },
    {
      heading: 'So läuft der Superb Ankauf ab',
      steps: [
        {
          title: 'Online bewerten',
          text: 'Generation, Motor, Kilometerstand und Ausstattungslinie angeben – kostenlos und unverbindlich.',
        },
        {
          title: 'Angebot und Termin',
          text: 'Sie erhalten ein Angebot und vereinbaren einen Termin bei Ihnen oder an einer Filiale, auch abends oder am Wochenende.',
        },
        {
          title: 'Übergabe und Auszahlung',
          text: 'Nach der kurzen Prüfung unterschreiben Sie den Vertrag, die Auszahlung wird sofort veranlasst, und die Abmeldung erledigen wir.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Skoda Superb jetzt bewerten',
    text: 'In rund zwei Minuten wissen Sie, was Ihr Superb aktuell bringt – kostenlos und unverbindlich.',
    primaryLabel: 'Superb bewerten',
    secondaryHref: '/skoda-verkaufen',
    secondaryLabel: 'Zum Skoda Ankauf',
  },
  faqTitle: 'FAQ: Skoda Superb verkaufen',
  faqId: 'faq-skoda-superb-verkaufen',
  faqs: [
    {
      q: 'Kaufen Sie auch einen Superb mit sehr hoher Laufleistung?',
      a: 'Ja. Hohe Laufleistungen sind beim Superb typisch und kein Ausschlussgrund. Wartungsnachweise stabilisieren den Preis.',
    },
    {
      q: 'Kaufen Sie Superb aus Firmenflotten an?',
      a: 'Ja. Firmenfahrzeuge kaufen wir regelmäßig an. Bei einem geleasten Superb muss vorher der Leasinggeber zustimmen.',
    },
    {
      q: 'Was ist, wenn das DSG Probleme macht?',
      a: 'Nein, ein DSG-Problem ist kein Ausschlussgrund. Wir berücksichtigen es transparent im Angebot.',
    },
    {
      q: 'Nehmen Sie auch den Superb iV mit Plug-in-Hybrid an?',
      a: 'Ja. Wir bewerten den iV nach Zustand, Ausstattung und Laufleistung; Ladekabel und Wartungsnachweise sollten vorhanden sein.',
    },
    {
      q: 'Wie schnell bekomme ich mein Geld?',
      a: 'Die Auszahlung per Überweisung wird mit Vertragsabschluss veranlasst und erreicht Sie noch am selben Tag.',
    },
  ],
};

export default function SkodaSuperbVerkaufenPage() {
  return (
    <SeoArticlePage
      path={MODEL.canonicalPath}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Marken', href: '/marken' },
        { name: 'Skoda', href: MODEL.brandHref },
        { name: MODEL.label, href: MODEL.canonicalPath },
      ]}
      heroHeadline="Skoda Superb verkaufen – viel Auto, fair bewertet"
      heroSubheadline="Superb Ankauf für Limousine, Combi und iV, auch mit hoher Laufleistung"
      content={CONTENT}
    />
  );
}
