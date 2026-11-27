import type { Metadata } from 'next';
import SeoArticlePage from '@/components/SeoArticlePage';
import type { SeoArticleContent } from '@/components/SeoArticle';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const MODEL = MODEL_SEO_PAGE_BY_SLUG['opel-astra-verkaufen'];

export const metadata: Metadata = {
  title: { absolute: MODEL.seoTitle },
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

const CONTENT: SeoArticleContent = {
  h1: 'Opel Astra verkaufen: Ankauf aller Generationen, auch direkt in Rüsselsheim',
  intro: [
    'Sie möchten Ihren **Opel Astra verkaufen**? Wir kaufen den Astra aller Generationen an – vom älteren Astra H mit hoher Laufleistung bis zum aktuellen Astra L, der im Opel-Stammwerk Rüsselsheim gebaut wird. Die Bewertung ist kostenlos und dauert rund zwei Minuten, die Auszahlung wird direkt nach Vertragsabschluss veranlasst.',
    'Fahrbereite Fahrzeuge können Sie auch direkt an unserer Filiale in Rüsselsheim abgeben. Einen nicht fahrbereiten Astra holen wir ab, die Abmeldung übernehmen wir.',
  ],
  sections: [
    {
      heading: 'Astra-Generationen im Ankauf',
      cards: [
        {
          title: 'Astra H (2004–2010)',
          text: 'Häufig mit hoher Laufleistung, als Fünftürer, Caravan, GTC oder TwinTop. Vor allem für den Export interessant.',
        },
        {
          title: 'Astra J (2009–2015)',
          text: 'Fünftürer, Sports Tourer und GTC. Preisentscheidend sind Wartungsnachweise und der Zustand von Motor und Kupplung.',
        },
        {
          title: 'Astra K (2015–2021)',
          text: 'Leichter und effizienter, oft als Sports Tourer und aus Firmenflotten. Gefragt mit gepflegter Historie.',
        },
        {
          title: 'Astra L (seit 2021)',
          text: 'Die aktuelle Generation aus Rüsselsheim, auch als Plug-in-Hybrid und als Astra Electric.',
        },
      ],
    },
    {
      heading: 'Was bestimmt den Preis Ihres Astra?',
      paragraphs: ['Der Astra ist ein Volumenmodell mit vielen Vergleichsangeboten. Deshalb machen Details den Unterschied:'],
      bullets: [
        'Generation, Karosserieform und Motorisierung',
        'Laufleistung und Wartungshistorie',
        'Ausstattungslinie wie Edition, Elegance oder GS Line',
        'Zustand von Kupplung, Fahrwerk und Bremsen',
        'Rost an Schwellern und Radläufen bei älteren Modellen',
        'HU-Status und Unfallfreiheit',
      ],
    },
    {
      heading: 'Typische Astra-Themen, die Käufer prüfen',
      variant: 'card',
      paragraphs: [
        'Beim Astra sind es selten spektakuläre Defekte, sondern Verschleiß und kleinere Undichtigkeiten, die den Preis drücken. Bei älteren Benzinern fallen häufig Kühlsystem und Ölverlust auf, bei den CDTI-Dieseln AGR-Ventil, Partikelfilter und Turbolader. Kupplung, Zweimassenschwungrad und Fahrwerk sind bei hoher Laufleistung typische Kostenpunkte.',
        'Solche Themen schließen den Ankauf nicht aus. Wer sie offen angibt, erhält ein belastbares Angebot ohne Überraschungen bei der Besichtigung. Weitere Opel-typische Schwachstellen beschreibt unser [Opel-Ratgeber](/ratgeber/opel-probleme-verkauf).',
      ],
    },
    {
      heading: 'Astra verkaufen in Rüsselsheim und Umgebung',
      variant: 'muted',
      paragraphs: [
        'Rüsselsheim ist die Heimat von Opel und des Astra, entsprechend viele Fahrzeuge fahren in der Region, oft mit Werks- oder Flottenhistorie. Wir kaufen den Astra in Rüsselsheim, im Kreis Groß-Gerau und im gesamten Rhein-Main-Gebiet an. Lokale Details finden Sie auf unserer Seite [Autoankauf Rüsselsheim](/autoankauf-ruesselsheim).',
        'Fahren Sie einen jungen Astra aus einem Mitarbeiterprogramm, lohnt ein Blick auf unsere Seite [Neuwagen und Jahreswagen verkaufen](/jahreswagen-neuwagen-verkaufen). Den kleineren Bruder beschreibt die Seite [Opel Corsa verkaufen](/opel-corsa-verkaufen).',
      ],
    },
    {
      heading: 'Astra mit Mängeln, Motorschaden oder ohne TÜV',
      paragraphs: [
        'Bei älteren Astra fällt die Entscheidung oft vor der nächsten Hauptuntersuchung: Lohnt sich die Reparatur noch, oder ist jetzt der richtige Zeitpunkt zum Verkauf? Wir kaufen den Astra auch mit Mängelbericht, Motor- oder Getriebeschaden und ohne gültigen TÜV. Auch hohe Laufleistung, Rost an den Schwellern oder ein fälliger Zahnriemenwechsel sind kein Grund, das Auto stehen zu lassen. Ein nicht fahrbereites Fahrzeug holen wir ab. Wann sich die HU vor dem Verkauf noch lohnt, beschreibt unser Ratgeber [Autoankauf ohne TÜV](/ratgeber/autoankauf-ohne-tuev).',
      ],
    },
    {
      heading: 'So läuft der Astra Ankauf ab',
      steps: [
        {
          title: 'Online bewerten',
          text: 'Generation, Motor, Kilometerstand und Zustand eingeben. Kostenlos und unverbindlich.',
        },
        {
          title: 'Angebot und Termin',
          text: 'Abholung bei Ihnen oder Abgabe an einer Filiale, auch abends oder am Wochenende.',
        },
        {
          title: 'Übergabe und Auszahlung',
          text: 'Nach einer kurzen Prüfung folgen Kaufvertrag und sofortige Auszahlung; die Abmeldung erledigen wir.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Opel Astra jetzt bewerten',
    text: 'Kostenlos und unverbindlich in rund zwei Minuten.',
    primaryLabel: 'Astra bewerten',
    secondaryHref: '/opel-verkaufen',
    secondaryLabel: 'Zum Opel Ankauf',
  },
  faqTitle: 'FAQ: Opel Astra verkaufen',
  faqId: 'faq-opel-astra-verkaufen',
  faqs: [
    {
      q: 'Kaufen Sie auch einen alten Astra mit hoher Laufleistung?',
      a: 'Ja. Gerade ältere Astra H und J mit hoher Laufleistung sind oft noch exportfähig.',
    },
    {
      q: 'Kann ich meinen Astra in Rüsselsheim abgeben?',
      a: 'Ja. Fahrbereite Fahrzeuge können Sie nach Terminbuchung an unserer Filiale in Rüsselsheim abgeben.',
    },
    {
      q: 'Kaufen Sie einen Astra ohne TÜV?',
      a: 'Ja. Ein abgelaufener TÜV ist kein Hindernis; der HU-Status fließt in die Bewertung ein.',
    },
    {
      q: 'Nehmen Sie auch den Astra Plug-in-Hybrid oder Astra Electric an?',
      a: 'Ja. Wir bewerten auch elektrifizierte Astra nach Zustand, Laufleistung und Ausstattung.',
    },
    {
      q: 'Wie schnell bekomme ich mein Geld?',
      a: 'Sofort nach Vertragsabschluss veranlassen wir die Überweisung, egal ob Sie den Astra in Rüsselsheim abgeben oder wir ihn abholen. Das Geld kommt noch am selben Tag.',
    },
  ],
};

export default function OpelAstraVerkaufenPage() {
  return (
    <SeoArticlePage
      path={MODEL.canonicalPath}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Marken', href: '/marken' },
        { name: 'Opel', href: MODEL.brandHref },
        { name: MODEL.label, href: MODEL.canonicalPath },
      ]}
      heroHeadline="Opel Astra verkaufen – vom Astra H bis zum aktuellen Astra L"
      heroSubheadline="Astra Ankauf mit Filiale in Rüsselsheim, der Heimat von Opel"
      content={CONTENT}
    />
  );
}
