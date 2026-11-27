import type { Metadata } from 'next';
import SeoArticlePage from '@/components/SeoArticlePage';
import type { SeoArticleContent } from '@/components/SeoArticle';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const MODEL = MODEL_SEO_PAGE_BY_SLUG['mercedes-g-klasse-verkaufen'];

export const metadata: Metadata = {
  title: { absolute: MODEL.seoTitle },
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

const CONTENT: SeoArticleContent = {
  h1: 'G-Klasse Ankauf: Mercedes G-Klasse sicher und zum Marktwert verkaufen',
  intro: [
    'Beim **G-Klasse Ankauf** geht es um ein Fahrzeug, das seit Ende der 1970er-Jahre gebaut wird und als ausgesprochen wertstabil gilt. Ob früher W460, robuster W461, W463 mit V8 oder aktueller G 63 AMG: Wir kaufen die Mercedes G-Klasse aller Baujahre an. Sie bewerten Ihr Fahrzeug kostenlos online, erhalten ein Angebot, und nach Vertragsabschluss wird die Auszahlung sofort veranlasst.',
    'Gerade bei hochpreisigen Fahrzeugen ist ein sicherer Ablauf entscheidend. Statt fremde Interessenten zu Probefahrten einzuladen und über Zahlungswege zu verhandeln, erhalten Sie bei uns einen schriftlichen Kaufvertrag und eine dokumentierte Zahlung.',
  ],
  sections: [
    {
      heading: 'G-Klasse-Baureihen im Ankauf',
      cards: [
        {
          title: 'W460 (1979–1991)',
          text: 'Die erste zivile G-Klasse ist heute ein gesuchter Klassiker. Originalzustand und Rostfreiheit bestimmen den Wert.',
        },
        {
          title: 'W461',
          text: 'Die robuste, nutzwertorientierte Variante, lange für Behörden, Militär und Gewerbe gebaut.',
        },
        {
          title: 'W463 (1990–2018)',
          text: 'Die komfortorientierte Baureihe mit Varianten vom G 300 CDI bis zu G 55 und G 63 AMG.',
        },
        {
          title: 'Aktuelle G-Klasse (seit 2018)',
          text: 'Die neu entwickelte Generation, auch als G 63 AMG und als vollelektrischer G 580. Junge Fahrzeuge bewerten wir nach Ausstattung und Restgarantie.',
        },
      ],
    },
    {
      heading: 'Was bestimmt den Preis einer G-Klasse?',
      paragraphs: ['Die G-Klasse wird sehr unterschiedlich genutzt, deshalb bewerten wir jedes Fahrzeug einzeln. Diese Punkte zählen am meisten:'],
      bullets: [
        'Baureihe, Motorisierung und AMG-Variante',
        'Ausstattung, etwa designo, Night-Paket oder Sonderlackierung',
        'Rostfreiheit an Rahmen, Türen und Scheibenrahmen bei älteren Modellen',
        'Funktion von Allradantrieb und Differenzialsperren',
        'lückenlose Wartung bei Mercedes-Benz oder einer Fachwerkstatt',
        'Unfallfreiheit, Laufleistung und Zahl der Vorbesitzer',
      ],
    },
    {
      heading: 'Worauf es beim G-Klasse-Verkauf ankommt',
      variant: 'card',
      paragraphs: [
        'Die G-Klasse wird oft lange gefahren und unterschiedlich eingesetzt: als Alltagsauto, als Zugfahrzeug oder als Liebhaberstück. Entsprechend genau schauen Käufer hin. Bei älteren Fahrzeugen sind Rost an Rahmen und Karosserienähten sowie der Zustand der Achsen die wichtigsten Prüfpunkte; bei neueren Modellen zählen vor allem Wartungshistorie, Unfallfreiheit und Ausstattung.',
        'Dokumentieren Sie Wartungen, Reparaturen und Umbauten möglichst vollständig. Nicht eingetragene Umbauten, etwa an Fahrwerk oder Rädern, sollten Sie offen ansprechen. Allgemeine Mercedes-Themen beschreibt unser [Mercedes-Ratgeber](/ratgeber/mercedes-probleme-verkauf).',
      ],
    },
    {
      heading: 'G-Klasse privat verkaufen oder an einen Ankäufer?',
      paragraphs: [
        'Für eine gesuchte G-Klasse finden sich auch privat Käufer. Bei hohen Kaufpreisen steigen aber die Risiken: unseriöse Anfragen, Probefahrten mit Unbekannten und Zahlungsbetrug. Unser Ratgeber [Betrug beim Autoverkauf erkennen](/ratgeber/autoverkauf-betrug-kleinanzeigen-erkennen) zeigt die typischen Maschen.',
        'Beim Ankauf erhalten Sie ein verbindliches Angebot, einen schriftlichen Vertrag und eine dokumentierte Auszahlung. Ältere G-Modelle mit hoher Laufleistung sind zudem international gefragt; wie der Exportweg funktioniert, beschreibt unser Ratgeber [Autoexport Ankauf](/ratgeber/autoexport-ankauf).',
      ],
    },
    {
      heading: 'Unterlagen, die bei der G-Klasse den Preis stützen',
      variant: 'muted',
      paragraphs: [
        'Bei einer G-Klasse fragen Käufer besonders genau nach. Vollständige Unterlagen verkürzen die Prüfung und stärken Ihre Position:',
      ],
      bullets: [
        'Serviceheft oder digitale Wartungshistorie',
        'Rechnungen über Rostbehandlung oder Rahmenarbeiten bei älteren Modellen',
        'Nachweise über eingetragene Umbauten',
        'Ausstattungsliste oder Datenkarte',
        'alle Schlüssel und das Bordbuch',
      ],
    },
    {
      heading: 'So läuft der G-Klasse Ankauf ab',
      steps: [
        {
          title: 'Online bewerten',
          text: 'Baureihe, Motor, Kilometerstand und Ausstattung eingeben. Fotos helfen bei der Einschätzung.',
        },
        {
          title: 'Angebot und Termin',
          text: 'Sie erhalten ein Angebot und vereinbaren einen Termin bei Ihnen oder an einer unserer Filialen.',
        },
        {
          title: 'Vertrag und Auszahlung',
          text: 'Kurze Prüfung, schriftlicher Kaufvertrag, sofort veranlasste Auszahlung per Überweisung. Die Abmeldung übernehmen wir.',
        },
      ],
    },
  ],
  cta: {
    heading: 'G-Klasse jetzt bewerten',
    text: 'Unverbindlich und kostenlos. Weitere Mercedes-Baureihen finden Sie auf unseren Seiten [Mercedes C-Klasse verkaufen](/mercedes-c-klasse-verkaufen) und [Mercedes Oldtimer verkaufen](/mercedes-oldtimer-verkaufen).',
    primaryLabel: 'G-Klasse bewerten',
    secondaryHref: '/mercedes-verkaufen',
    secondaryLabel: 'Zum Mercedes Ankauf',
  },
  faqTitle: 'FAQ: Mercedes G-Klasse verkaufen',
  faqId: 'faq-mercedes-g-klasse-verkaufen',
  faqs: [
    {
      q: 'Kaufen Sie auch ältere G-Klassen wie den W460 an?',
      a: 'Ja. Frühe G-Modelle bewerten wir als Klassiker nach Originalität, Rostfreiheit und Dokumentation.',
    },
    {
      q: 'Kaufen Sie auch eine G 63 AMG an?',
      a: 'Ja. AMG-Modelle bewerten wir individuell nach Ausstattung, Laufleistung und Zustand.',
    },
    {
      q: 'Wie wird die Auszahlung bei hohen Beträgen abgewickelt?',
      a: 'Per Überweisung, direkt nach Vertragsabschluss veranlasst und schriftlich dokumentiert.',
    },
    {
      q: 'Beeinflussen Umbauten den Preis?',
      a: 'Ja. Eingetragene, hochwertige Umbauten können gefragt sein, nicht eingetragene Änderungen senken den Preis meist. Geben Sie Umbauten deshalb offen an.',
    },
    {
      q: 'Kaufen Sie eine G-Klasse mit Unfall- oder Motorschaden an?',
      a: 'Ja. Auch beschädigte G-Klassen sind ankauffähig. Der Schaden fließt transparent in die Bewertung ein.',
    },
  ],
};

export default function MercedesGKlasseVerkaufenPage() {
  return (
    <SeoArticlePage
      path={MODEL.canonicalPath}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Marken', href: '/marken' },
        { name: 'Mercedes', href: MODEL.brandHref },
        { name: 'G-Klasse', href: MODEL.canonicalPath },
      ]}
      heroHeadline="Mercedes G-Klasse verkaufen – Ikone fair bewertet"
      heroSubheadline="G-Klasse Ankauf vom W460-Klassiker bis zum aktuellen G 63"
      content={CONTENT}
    />
  );
}
