import type { Metadata } from 'next';
import SeoArticlePage from '@/components/SeoArticlePage';
import type { SeoArticleContent } from '@/components/SeoArticle';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const MODEL = MODEL_SEO_PAGE_BY_SLUG['audi-a6-verkaufen'];

export const metadata: Metadata = {
  title: { absolute: MODEL.seoTitle },
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

const CONTENT: SeoArticleContent = {
  h1: 'Audi A6 verkaufen: Ankauf für Limousine, Avant und allroad – auch mit hoher Laufleistung',
  intro: [
    'Sie möchten Ihren **Audi A6 verkaufen**? Der A6 ist das klassische Langstrecken- und Dienstfahrzeug: viel Komfort, kräftige Motoren, oft hohe Laufleistung. Wir kaufen den A6 aller Generationen an, als Limousine, Avant oder allroad quattro. Nach der kostenlosen Online-Bewertung erhalten Sie ein Angebot, und nach Vertragsabschluss wird die Auszahlung sofort veranlasst.',
    'Gerade bei Fahrzeugen aus Firmenflotten oder nach dem Ende eines Dienstwagenvertrags ist ein schneller, sauber dokumentierter Verkauf wichtig. Abholung und Abmeldung übernehmen wir auf Wunsch.',
  ],
  sections: [
    {
      heading: 'A6-Generationen im Ankauf',
      cards: [
        {
          title: 'A6 C5 (1997–2004)',
          text: 'Ältere Fahrzeuge mit hoher Laufleistung, interessant für den Export und für Liebhaber gepflegter Exemplare.',
        },
        {
          title: 'A6 C6 (2004–2011)',
          text: 'Häufig mit 2.0 TDI oder V6-TDI. Getriebe und Kettentrieb sind wichtige Prüfpunkte.',
        },
        {
          title: 'A6 C7 (2011–2018)',
          text: 'Sehr verbreitet als Avant und Dienstwagen, oft mit 3.0 TDI und quattro.',
        },
        {
          title: 'A6 C8 und neuere Modelle',
          text: 'Mild-Hybrid- und Plug-in-Varianten bis zum vollelektrischen A6 e-tron bewerten wir nach Ausstattung und Restgarantie.',
        },
      ],
    },
    {
      heading: 'Was bestimmt den Preis Ihres A6?',
      paragraphs: ['Beim A6 wiegen Ausstattung und Wartung besonders schwer, weil die Fahrzeuge oft viele Kilometer gesammelt haben:'],
      bullets: [
        'Motorisierung, quattro und Getriebe',
        'Karosserie: Limousine, Avant oder allroad',
        'Ausstattung wie S line, Matrix-LED, Luftfederung oder Head-up-Display',
        'Laufleistung und Wartung, besonders Getriebeölwechsel',
        'Zustand von Fahrwerk und Bremsen bei hoher Laufleistung',
        'Unfallfreiheit und HU-Status',
      ],
    },
    {
      heading: 'Typische A6-Themen, die Käufer prüfen',
      variant: 'card',
      subsections: [
        {
          title: 'V6-TDI (2.7 und 3.0 TDI)',
          text: 'Der Kettentrieb sitzt auf der Getriebeseite. Ungewöhnliche Geräusche beim Kaltstart sollten ernst genommen werden, weil eine Reparatur aufwendig ist.',
        },
        {
          title: 'multitronic und S tronic',
          text: 'Frontgetriebene A6 der Generationen C6 und C7 nutzten teils das stufenlose multitronic-Getriebe, das bei hoher Laufleistung anfällig sein kann. Beim S tronic deuten Ruckeln oder Schaltverzögerungen auf Kupplung oder Mechatronik hin.',
        },
        {
          title: 'Luftfederung',
          text: 'Beim allroad und bei Fahrzeugen mit Luftfahrwerk sind undichte Federbälge oder ein müder Kompressor bei älteren Modellen typische Kostenpunkte.',
        },
      ],
      closing: [
        'Weitere Audi-Schwachstellen beschreibt unser [Audi-Ratgeber](/ratgeber/audi-probleme-verkauf); bei Motorschaden hilft die Seite [Audi mit Motorschaden verkaufen](/audi-motorschaden-verkaufen).',
      ],
    },
    {
      heading: 'A6 als Dienstwagen oder Firmenfahrzeug verkaufen',
      paragraphs: [
        'Viele A6 stammen aus Firmenflotten. Verkauft ein Unternehmen, kommen Vollmachten, Rechnungsstellung und gegebenenfalls Leasing- oder Finanzierungsablösen hinzu. Wie der Ankauf von Firmenfahrzeugen abläuft, beschreibt unser Ratgeber [Autoankauf für Firmenwagen und Gewerbe](/ratgeber/autoankauf-firmenwagen-gewerbe).',
        'Haben Sie Ihren Dienstwagen nach Vertragsende privat übernommen, können Sie ihn anschließend wie jedes andere Fahrzeug verkaufen. Die kleinere Limousine der Marke beschreibt unsere Seite [Audi A4 verkaufen](/audi-a4-verkaufen).',
      ],
    },
    {
      heading: 'A6 Avant und allroad: Was Käufer besonders schätzen',
      paragraphs: [
        'Der A6 Avant ist bei Familien und Vielfahrern besonders gefragt, der allroad quattro spricht Käufer an, die mehr Bodenfreiheit und Allrad suchen. Für beide Varianten zählen ein gepflegter Innenraum, funktionierende Komfortelektronik und lückenlose Wartung. Beschreiben Sie Gebrauchsspuren und bekannte Defekte offen, dann bleibt das Angebot nach der Besichtigung stabil.',
      ],
    },
    {
      heading: 'So läuft der A6 Ankauf ab',
      steps: [
        {
          title: 'Online bewerten',
          text: 'Generation, Motor, Kilometerstand und Ausstattung eingeben. Kostenlos und unverbindlich.',
        },
        {
          title: 'Angebot und Termin',
          text: 'Sie erhalten ein Angebot und vereinbaren einen Termin bei Ihnen oder an einer Filiale.',
        },
        {
          title: 'Übergabe und Auszahlung',
          text: 'Kurze Prüfung, Kaufvertrag, sofort veranlasste Auszahlung. Die Abmeldung übernehmen wir.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Audi A6 jetzt bewerten',
    text: 'Kostenlos, unverbindlich und in rund zwei Minuten.',
    primaryLabel: 'A6 bewerten',
    secondaryHref: '/audi-verkaufen',
    secondaryLabel: 'Zum Audi Ankauf',
  },
  faqTitle: 'FAQ: Audi A6 verkaufen',
  faqId: 'faq-audi-a6-verkaufen',
  faqs: [
    {
      q: 'Kaufen Sie auch einen A6 mit über 250.000 Kilometern?',
      a: 'Ja. Hohe Laufleistungen sind beim A6 nicht ungewöhnlich. Wartungsnachweise und der Zustand von Motor und Getriebe bestimmen den Preis.',
    },
    {
      q: 'Was ist, wenn das multitronic- oder S tronic-Getriebe defekt ist?',
      a: 'Auch mit Getriebeschaden kaufen wir den A6 an. Der Schaden wird transparent im Angebot berücksichtigt.',
    },
    {
      q: 'Kaufen Sie den A6 allroad quattro an?',
      a: 'Ja. Wir bewerten den allroad nach Ausstattung, Zustand der Luftfederung und Laufleistung.',
    },
    {
      q: 'Kann eine Firma ihren A6 an Sie verkaufen?',
      a: 'Ja. Auch gewerbliche Fahrzeuge kaufen wir an. Je nach Fall werden Vollmacht und Rechnungsdaten benötigt.',
    },
    {
      q: 'Wie schnell erhalte ich die Auszahlung?',
      a: 'Die Auszahlung wird direkt nach Vertragsabschluss per Überweisung veranlasst und kommt noch am selben Tag.',
    },
  ],
};

export default function AudiA6VerkaufenPage() {
  return (
    <SeoArticlePage
      path={MODEL.canonicalPath}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Marken', href: '/marken' },
        { name: 'Audi', href: MODEL.brandHref },
        { name: MODEL.label, href: MODEL.canonicalPath },
      ]}
      heroHeadline="Audi A6 verkaufen – Business-Klasse fair bewertet"
      heroSubheadline="A6 Ankauf für Limousine, Avant und allroad quattro aller Generationen"
      content={CONTENT}
    />
  );
}
