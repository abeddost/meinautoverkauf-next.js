import type { Metadata } from 'next';
import SeoArticlePage from '@/components/SeoArticlePage';
import type { SeoArticleContent } from '@/components/SeoArticle';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const MODEL = MODEL_SEO_PAGE_BY_SLUG['bmw-totalschaden-verkaufen'];

export const metadata: Metadata = {
  title: { absolute: MODEL.seoTitle },
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

const CONTENT: SeoArticleContent = {
  h1: 'BMW Totalschaden verkaufen: So holen Sie den besten Restwert aus Ihrem Fahrzeug',
  intro: [
    'Einen **BMW mit Totalschaden verkaufen** Sie am einfachsten direkt an einen Ankäufer, der beschädigte Fahrzeuge bewertet, abholt und verwertet. Bei uns erhalten Sie nach der kostenlosen Online-Bewertung ein Angebot, das sich am Wert der intakten Teile und an den Verwertungsmöglichkeiten orientiert. Nach Vertragsabschluss wird die Auszahlung sofort veranlasst; das Fahrzeug holen wir ab und übernehmen die Abmeldung.',
    'Ein Totalschaden bedeutet nicht, dass Ihr BMW wertlos ist. Motor, Getriebe, Scheinwerfer, Elektronik und Innenausstattung sind gefragt, und viele Fahrzeuge werden im Ausland wieder aufgebaut. Gerade bei jüngeren oder gut ausgestatteten Modellen liegt der Restwert oft deutlich über dem Schrottwert.',
  ],
  sections: [
    {
      heading: 'Wirtschaftlicher oder technischer Totalschaden: Was bedeutet das?',
      variant: 'card',
      paragraphs: [
        'Von einem **wirtschaftlichen Totalschaden** spricht man, wenn die Reparaturkosten den Wiederbeschaffungswert übersteigen – also den Betrag, den ein vergleichbarer BMW vor dem Schaden gekostet hätte. Technisch ließe sich das Auto reparieren, wirtschaftlich lohnt es sich nicht.',
        'Ein **technischer Totalschaden** liegt vor, wenn eine fachgerechte Reparatur nicht mehr möglich ist, etwa nach schweren Rahmen- oder Brandschäden. Auch dann haben einzelne Baugruppen noch einen Wert.',
        'Neben Unfällen führen auch Motorschäden, Hagel oder Wasserschäden zum Totalschaden. Gerade bei älteren BMW mit hoher Laufleistung übersteigt eine Motorinstandsetzung schnell den Fahrzeugwert.',
      ],
    },
    {
      heading: 'Gutachten, Restwert und Versicherung',
      variant: 'highlight',
      paragraphs: [
        'Nach einem Unfall ermittelt ein Gutachter Reparaturkosten, Wiederbeschaffungswert und Restwert. Der Restwert ist der Betrag, den das beschädigte Fahrzeug noch bringt. Bei einem Totalschaden zahlt die Versicherung in der Regel die Differenz zwischen Wiederbeschaffungswert und Restwert; das beschädigte Auto bleibt Ihr Eigentum, und Sie können es verkaufen.',
        'Läuft die Schadenregulierung noch, stimmen Sie den Verkauf vorab mit Ihrer Versicherung oder Ihrem Anwalt ab. Versicherer legen manchmal eigene Restwertangebote vor, die Sie kennen sollten, bevor Sie verkaufen. Unser Angebot können Sie unverbindlich danebenlegen. Wie Unfallfahrzeuge bewertet werden, erklärt der Ratgeber [Unfallwagen Ankauf](/ratgeber/unfallwagen-ankauf).',
      ],
    },
    {
      heading: 'Was ist ein BMW mit Totalschaden noch wert?',
      paragraphs: ['Den Restwert bestimmen vor allem diese Faktoren:'],
      bullets: [
        'Modell und Baujahr, etwa 3er, 5er, X1, X3 oder X5',
        'Motorisierung und Antrieb, zum Beispiel xDrive',
        'Ausstattung wie M Sportpaket, Navigation Professional oder LED-Scheinwerfer',
        'Schadenszone: Front, Heck oder Seite, Airbags ausgelöst oder nicht',
        'Zustand von Motor und Getriebe',
        'Laufleistung und Wartungshistorie',
      ],
      closing: [
        'Ein Heckschaden an einem jungen 3er mit intaktem Antrieb ist anders zu bewerten als ein Frontschaden mit ausgelösten Airbags an einem älteren 1er. Deshalb bewerten wir jeden BMW einzeln statt nach Pauschalwerten.',
      ],
    },
    {
      heading: 'Totalschaden nach Motorschaden: typische BMW-Fälle',
      variant: 'muted',
      paragraphs: [
        'Nicht jeder Totalschaden kommt vom Unfall. Bei älteren BMW führt oft ein Motorschaden dazu, dass sich die Reparatur nicht mehr lohnt. Bekannt sind etwa Steuerkettenprobleme beim Vierzylinder-Diesel N47 in vielen etwa zwischen 2007 und 2011 gebauten 1er, 3er und 5er. Weil die Kette auf der Getriebeseite sitzt, ist die Reparatur aufwendig.',
        'Auch hier gilt: Getriebe, Karosserie und Ausstattung behalten ihren Wert. Weitere typische Schwachstellen der Marke beschreibt unser [BMW-Ratgeber](/ratgeber/bmw-probleme-verkauf).',
      ],
    },
    {
      heading: 'So läuft der Ankauf Ihres BMW mit Totalschaden ab',
      steps: [
        {
          title: 'Daten und Fotos',
          text: 'Geben Sie Modell, Baujahr, Kilometerstand und Schadenbild an. Fotos und ein vorhandenes Gutachten helfen bei der Einschätzung.',
        },
        {
          title: 'Angebot',
          text: 'Sie erhalten ein Angebot auf Basis von Restwert und Verwertbarkeit – kostenlos und unverbindlich.',
        },
        {
          title: 'Abholung und Auszahlung',
          text: 'Wir holen den BMW ab, Sie unterschreiben den Kaufvertrag, und die Auszahlung wird sofort veranlasst. Die Abmeldung übernehmen wir.',
        },
      ],
    },
    {
      heading: 'Welche BMW kaufen wir mit Totalschaden an?',
      cards: [
        {
          title: '1er und 2er',
          text: 'Kompakte Modelle mit Unfall- oder Motorschaden, auch mit hoher Laufleistung.',
        },
        {
          title: '3er und 4er',
          text: 'Limousine, Touring, Coupé und Gran Coupé. Mehr zum Modell auf unserer Seite [BMW 3er verkaufen](/bmw-3er-verkaufen).',
        },
        {
          title: '5er und 7er',
          text: 'Gut ausgestattete Business-Fahrzeuge, deren Teile auch nach schweren Schäden gefragt sind.',
        },
        {
          title: 'X1, X3 und X5',
          text: 'SUV mit xDrive, häufig auch für den Export interessant.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Restwert Ihres BMW jetzt prüfen',
    text: 'Die Bewertung dauert rund zwei Minuten, ist kostenlos und verpflichtet Sie zu nichts.',
    primaryLabel: 'BMW jetzt bewerten',
    secondaryHref: '/bmw-verkaufen',
    secondaryLabel: 'Zum BMW Ankauf',
  },
  faqTitle: 'FAQ: BMW Totalschaden verkaufen',
  faqId: 'faq-bmw-totalschaden-verkaufen',
  faqs: [
    {
      q: 'Darf ich meinen BMW mit Totalschaden selbst verkaufen?',
      a: 'Ja. Nach der Totalschadenabrechnung bleibt das Fahrzeug in der Regel Ihr Eigentum. Läuft die Regulierung noch, sollten Sie den Verkauf mit Ihrer Versicherung abstimmen.',
    },
    {
      q: 'Holen Sie einen BMW mit Totalschaden ab?',
      a: 'Ja. Nicht fahrbereite Fahrzeuge holen wir am Standort ab. Halten Sie Fahrzeugpapiere und Schlüssel bereit.',
    },
    {
      q: 'Was bringt mein BMW mit Totalschaden noch?',
      a: 'Das hängt von Modell, Ausstattung, Schadenszone und dem Zustand von Motor und Getriebe ab. Eine kostenlose Online-Bewertung gibt Ihnen in wenigen Minuten eine erste Einschätzung.',
    },
    {
      q: 'Kaufen Sie auch einen BMW mit Totalschaden ohne Gutachten?',
      a: 'Ja. Ein Gutachten ist hilfreich, aber keine Voraussetzung. Fotos und eine ehrliche Beschreibung des Schadens reichen für eine erste Bewertung.',
    },
    {
      q: 'Muss ich den BMW vor dem Verkauf abmelden?',
      a: 'Nein. Die Abmeldung übernehmen wir im Rahmen des Ankaufs für Sie.',
    },
  ],
};

export default function BmwTotalschadenVerkaufenPage() {
  return (
    <SeoArticlePage
      path={MODEL.canonicalPath}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Marken', href: '/marken' },
        { name: 'BMW', href: MODEL.brandHref },
        { name: 'BMW mit Totalschaden', href: MODEL.canonicalPath },
      ]}
      heroHeadline="BMW Totalschaden verkaufen – Restwert sichern statt verschrotten"
      heroSubheadline="Ankauf nach Unfall, Motorschaden oder Gutachten mit Totalschaden"
      content={CONTENT}
    />
  );
}
