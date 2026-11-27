import type { Metadata } from 'next';
import SeoArticlePage from '@/components/SeoArticlePage';
import type { SeoArticleContent } from '@/components/SeoArticle';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const MODEL = MODEL_SEO_PAGE_BY_SLUG['mercedes-oldtimer-verkaufen'];

export const metadata: Metadata = {
  title: { absolute: MODEL.seoTitle },
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

const CONTENT: SeoArticleContent = {
  h1: 'Antiken Mercedes verkaufen: Mercedes-Oldtimer fair bewertet und sicher verkauft',
  intro: [
    'Sie möchten einen **antiken Mercedes verkaufen** – etwa einen W123 aus Familienbesitz, eine Pagode aus der Sammlung oder einen W124, der gerade das Oldtimeralter erreicht hat? Wir kaufen Mercedes-Oldtimer aller Baureihen an. Sie bewerten das Fahrzeug kostenlos online, erhalten ein Angebot auf Basis von Zustand, Originalität und Unterlagen, und nach Vertragsabschluss wird die Auszahlung sofort veranlasst. Auf Wunsch holen wir den Wagen ab.',
    'Klassische Mercedes-Modelle haben eine große, internationale Fangemeinde. Gleichzeitig unterscheiden sich die Preise je nach Baureihe, Motor und Zustand enorm. Ein fairer Ankauf setzt deshalb Wissen über die einzelnen Modelle voraus.',
  ],
  sections: [
    {
      heading: 'Welche Mercedes-Oldtimer wir ankaufen',
      cards: [
        {
          title: 'W123 (1976–1985)',
          text: 'Der Inbegriff des robusten Mercedes, ob 200 D, 230 E oder 280 CE. Gefragt bei Liebhabern und im Export, besonders im guten Originalzustand.',
        },
        {
          title: 'W124 (1984–1997)',
          text: 'Die meisten Exemplare haben inzwischen das Oldtimeralter erreicht. Coupés, Cabrios und T-Modelle sind besonders begehrt.',
        },
        {
          title: 'SL Pagode W113 und SL R107',
          text: 'Die offenen Klassiker gehören zu den gesuchtesten Mercedes-Oldtimern. Originalität und Dokumentation entscheiden hier besonders über den Preis.',
        },
        {
          title: 'S-Klasse W116 und W126',
          text: 'Großzügige Limousinen und Coupés, deren Wert stark von Rostfreiheit, Ausstattung und Wartungshistorie abhängt.',
        },
        {
          title: 'Heckflosse, Strich-Acht und Ponton',
          text: 'Ältere Baureihen der 1950er- bis 1970er-Jahre bewerten wir individuell nach Substanz und Restaurationsstand.',
        },
        {
          title: '190er W201',
          text: 'Die kompakte Baureihe wird zunehmend zum Klassiker; die Sportversionen 190 E 2.3-16 und 2.5-16 sind besonders gefragt.',
        },
      ],
    },
    {
      heading: 'Antiken Mercedes verkaufen: Was bestimmt den Preis?',
      paragraphs: ['Bei klassischen Mercedes-Modellen entscheiden andere Faktoren als beim normalen Gebrauchtwagen:'],
      bullets: [
        'Rostfreiheit an Radläufen, Schwellern, Wagenheberaufnahmen und Rahmenbereichen',
        'Originalität von Motor, Farbe und Ausstattung',
        'Dokumentation wie Serviceheft, Rechnungen und Datenkarte',
        'Motorisierung und Karosserieform, etwa Coupé oder Cabrio',
        'Qualität einer Restaurierung und verwendete Teile',
        'H-Kennzeichen und gültige Hauptuntersuchung',
      ],
      closing: [
        'Allgemeine Wertfaktoren für Klassiker beschreibt unser [Oldtimer Guide zu Wert und Verkauf](/ratgeber/oldtimer-wert-verkauf).',
      ],
    },
    {
      heading: 'Typische Schwachstellen klassischer Mercedes-Modelle',
      variant: 'card',
      paragraphs: [
        'Rost ist bei fast allen älteren Baureihen das wichtigste Thema, besonders an Radläufen, Kotflügeln, Schwellern und den Wagenheberaufnahmen. Bei Modellen aus der ersten Hälfte der 1990er-Jahre kann zudem der Motorkabelbaum spröde werden, weil damals eine biologisch abbaubare Isolierung verwendet wurde.',
        'Solche Schwachstellen sind kein Ausschlussgrund. Sie fließen aber in die Bewertung ein, und eine ehrliche Beschreibung verhindert Überraschungen bei der Besichtigung.',
      ],
    },
    {
      heading: 'Privat verkaufen oder an einen Ankäufer?',
      paragraphs: [
        'Mercedes-Oldtimer finden auch privat Käufer, vor allem über Markenclubs, Fachportale und Oldtimermessen. Der Privatverkauf kann bei gesuchten Modellen den höchsten Preis bringen, kostet aber Zeit und verlangt Sorgfalt bei Besichtigung, Vertrag und Bezahlung.',
        'Ein Ankauf ist schneller und planbarer, besonders bei Fahrzeugen mit Restaurationsbedarf, aus Nachlässen oder ohne vollständige Papiere. Welcher Weg zu Ihrem Fahrzeug passt, vergleicht unser Ratgeber [Oldtimer privat, an Händler oder per Auktion verkaufen](/ratgeber/oldtimer-verkaufen-privat-haendler-auktion).',
      ],
    },
    {
      heading: 'So läuft der Ankauf ab',
      steps: [
        {
          title: 'Fahrzeug beschreiben',
          text: 'Baureihe, Modell, Baujahr, Kilometerstand, Zustand und vorhandene Unterlagen angeben; Fotos helfen besonders.',
        },
        {
          title: 'Bewertung und Angebot',
          text: 'Wir bewerten Ihren Mercedes nach Zustand, Originalität und Nachfrage und machen Ihnen ein Angebot.',
        },
        {
          title: 'Übergabe und Auszahlung',
          text: 'Übergabe bei Ihnen oder an einer Filiale, Kaufvertrag und sofort veranlasste Auszahlung. Auf Wunsch holen wir das Fahrzeug ab.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Mercedes-Oldtimer jetzt bewerten',
    text: 'Kostenlos und unverbindlich. Allgemeine Informationen zum Klassiker-Ankauf finden Sie auf unserer Seite [Oldtimer verkaufen](/oldtimer-verkaufen).',
    primaryLabel: 'Mercedes bewerten',
    secondaryHref: '/mercedes-verkaufen',
    secondaryLabel: 'Zum Mercedes Ankauf',
  },
  faqTitle: 'FAQ: Mercedes Oldtimer verkaufen',
  faqId: 'faq-mercedes-oldtimer-verkaufen',
  faqs: [
    {
      q: 'Kaufen Sie auch Mercedes-Oldtimer mit Rost oder Restaurationsbedarf?',
      a: 'Ja. Rost und Restaurationsbedarf werden ehrlich eingepreist. Auch Projektfahrzeuge und Scheunenfunde sind ankauffähig.',
    },
    {
      q: 'Ab wann ist ein Mercedes ein Oldtimer?',
      a: 'In der Regel ab 30 Jahren. Mit einem entsprechenden Gutachten kann das Fahrzeug dann ein H-Kennzeichen erhalten.',
    },
    {
      q: 'Welche Unterlagen erhöhen den Wert meines Mercedes-Oldtimers?',
      a: 'Serviceheft, Rechnungen, alte Fahrzeugbriefe, Restaurationsdokumentation und eine Datenkarte mit der Werksausstattung.',
    },
    {
      q: 'Holen Sie einen nicht fahrbereiten Mercedes-Oldtimer ab?',
      a: 'Ja. Nicht fahrbereite Fahrzeuge holen wir am Standort ab, wenn eine Zufahrt möglich ist.',
    },
    {
      q: 'Ist ein Mercedes W123 schon ein Oldtimer?',
      a: 'Ja. Alle W123 sind älter als 30 Jahre und können bei passendem Zustand ein H-Kennzeichen erhalten.',
    },
  ],
};

export default function MercedesOldtimerVerkaufenPage() {
  return (
    <SeoArticlePage
      path={MODEL.canonicalPath}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Marken', href: '/marken' },
        { name: 'Mercedes', href: MODEL.brandHref },
        { name: 'Mercedes Oldtimer', href: MODEL.canonicalPath },
      ]}
      heroHeadline="Mercedes Oldtimer verkaufen – vom W123 bis zur Pagode"
      heroSubheadline="Fachkundige Bewertung klassischer Mercedes-Modelle mit Abholung"
      content={CONTENT}
    />
  );
}
