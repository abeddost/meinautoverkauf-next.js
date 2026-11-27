import type { Metadata } from 'next';
import SeoArticlePage from '@/components/SeoArticlePage';
import type { SeoArticleContent } from '@/components/SeoArticle';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const MODEL = MODEL_SEO_PAGE_BY_SLUG['audi-motorschaden-verkaufen'];

export const metadata: Metadata = {
  title: { absolute: MODEL.seoTitle },
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

const CONTENT: SeoArticleContent = {
  h1: 'Audi mit Motorschaden verkaufen: Ankauf auch bei defektem oder nicht fahrbereitem Motor',
  intro: [
    'Ja, Sie können Ihren **Audi mit Motorschaden verkaufen** – auch wenn er nicht mehr fährt. Wir kaufen Audi mit Motorschaden direkt an: Sie bewerten das Fahrzeug kostenlos online, erhalten ein Angebot auf Basis von Modell, Ausstattung und Schadenbild, und nach Vertragsabschluss wird die Auszahlung sofort veranlasst. Einen nicht fahrbereiten Audi holen wir bei Ihnen ab, die Abmeldung übernehmen wir.',
    'Gerade bei Audi bringt der Verkauf mit Defekt oft mehr als erwartet: Karosserie, quattro-Antrieb, Getriebe, LED-Scheinwerfer und hochwertige Innenausstattung behalten ihren Wert, auch wenn der Motor ausgefallen ist. Entscheidend ist, dass das Schadenbild ehrlich beschrieben und nachvollziehbar eingepreist wird.',
  ],
  sections: [
    {
      heading: 'Audi Motorschaden verkaufen: Welche Motoren sind häufig betroffen?',
      variant: 'card',
      paragraphs: [
        'Ein Motorschaden kann jeden Audi treffen. Einige Motorfamilien tauchen im Ankauf aber besonders häufig auf. Nicht jedes Fahrzeug dieser Baureihen ist betroffen – Wartung, Ölwechselintervalle und Fahrprofil spielen eine große Rolle.',
      ],
      subsections: [
        {
          title: '1.8 und 2.0 TFSI (frühe EA888-Generationen)',
          text: 'Bei Fahrzeugen etwa der Baujahre 2008 bis 2012, unter anderem im A3, A4, A5 und Q5, sind erhöhter Ölverbrauch und gelängte Steuerketten bekannte Themen. Springt die Kette über, entsteht oft ein kapitaler Motorschaden.',
        },
        {
          title: '2.7 und 3.0 TDI V6',
          text: 'Bei älteren V6-Dieseln sitzt der Kettentrieb auf der Getriebeseite. Ein Kettenproblem ist hier besonders aufwendig, weil für die Reparatur meist Motor oder Getriebe ausgebaut werden müssen.',
        },
        {
          title: '2.0 TDI',
          text: 'Die Schadenbilder reichen von Injektor- und Turboladerdefekten bis zu Folgeschäden an Kolben oder Lagern, häufig nach hoher Laufleistung oder bei viel Kurzstrecke.',
        },
        {
          title: '4.2 FSI V8',
          text: 'In S- und RS-Modellen sowie im A8 sind Kettentrieb und verkokte Einlassventile kostspielige Themen. Die Reparatur übersteigt bei älteren Fahrzeugen schnell den Restwert.',
        },
      ],
    },
    {
      heading: 'Audi mit Motorschaden verkaufen oder reparieren?',
      variant: 'highlight',
      paragraphs: [
        'Ob sich eine Reparatur lohnt, hängt vom Verhältnis zwischen Reparaturkosten und dem Wert des Audi im reparierten Zustand ab. Ein Austauschmotor oder eine Motorinstandsetzung erreicht bei älteren Fahrzeugen schnell einen großen Teil des Fahrzeugwerts. Dazu kommt das Risiko weiterer Schäden, die erst nach dem Zerlegen sichtbar werden.',
        'Liegen die Reparaturkosten nahe am späteren Verkaufswert oder sind auch Getriebe, Fahrwerk und Bremsen verschlissen, ist der Verkauf mit Motorschaden meist die wirtschaftlichere Entscheidung. Eine ausführliche Entscheidungshilfe finden Sie im Ratgeber [Auto mit Motorschaden verkaufen](/ratgeber/auto-mit-motorschaden-verkaufen).',
      ],
    },
    {
      heading: 'Was ist ein Audi mit Motorschaden noch wert?',
      paragraphs: [
        'Der Ankaufpreis setzt sich aus dem Wert der intakten Baugruppen und den Verwertungsmöglichkeiten zusammen. Diese Punkte beeinflussen das Angebot am stärksten:',
      ],
      bullets: [
        'Modell, Generation und Motorisierung',
        'Ausstattung wie quattro, S line, Matrix-LED oder MMI Navigation',
        'Zustand von Karosserie, Getriebe und Innenraum',
        'Art des Schadens und vorhandene Werkstattdiagnose',
        'Laufleistung, Wartungsnachweise und HU-Status',
        'Nachfrage im In- und Ausland',
      ],
      closing: [
        'Eine Werkstattdiagnose ist keine Voraussetzung, macht das Angebot aber genauer. Ohne Diagnose kalkuliert jeder Käufer das Risiko eines größeren Schadens automatisch mit ein.',
      ],
    },
    {
      heading: 'Audi Motorschaden Ankauf: So läuft es ab',
      steps: [
        {
          title: 'Online bewerten',
          text: 'Modell, Baujahr, Kilometerstand und den bekannten Schaden eingeben. Die Bewertung ist kostenlos und unverbindlich.',
        },
        {
          title: 'Angebot und Termin',
          text: 'Sie erhalten ein Angebot und vereinbaren einen Termin, auch abends oder am Wochenende. Fahrbereite Fahrzeuge können Sie auch an einer unserer Filialen in Bodenheim, Rüsselsheim oder Wiesbaden abgeben.',
        },
        {
          title: 'Vertrag, Abholung, Auszahlung',
          text: 'Nach der kurzen Prüfung unterschreiben Sie den Kaufvertrag, die Auszahlung wird sofort veranlasst. Einen nicht fahrbereiten Audi holen wir ab, die Abmeldung übernehmen wir.',
        },
      ],
    },
    {
      heading: 'Welche Audi kaufen wir mit Motorschaden an?',
      cards: [
        {
          title: 'Audi A1 und A3',
          text: 'Kompakte Modelle mit TFSI- oder TDI-Motor, auch mit hoher Laufleistung oder ohne gültige HU.',
        },
        {
          title: 'Audi A4, A5 und A6',
          text: 'Limousine, Avant und Coupé – vom Pendlerauto bis zum gut ausgestatteten Dienstwagen. Mehr dazu auf unserer Seite [Audi A4 verkaufen](/audi-a4-verkaufen).',
        },
        {
          title: 'Audi Q3, Q5 und Q7',
          text: 'SUV mit Motorschaden sind wegen Allradantrieb und Ausstattung oft noch gefragt, auch für den Export.',
        },
        {
          title: 'S- und RS-Modelle',
          text: 'Leistungsstarke Varianten mit V6- oder V8-Motor bewerten wir individuell nach Ausstattung und Schadenbild.',
        },
      ],
      closing: [
        'Auch ein Audi mit Getriebeschaden, Unfallschaden oder mehreren Defekten gleichzeitig ist ankauffähig. Typische Schwachstellen der Marke beschreibt unser [Audi-Ratgeber](/ratgeber/audi-probleme-verkauf).',
      ],
    },
  ],
  cta: {
    heading: 'Audi mit Motorschaden jetzt bewerten',
    text: 'Starten Sie mit der kostenlosen Online-Bewertung. Wie die Übergabe bei nicht fahrbereiten Fahrzeugen abläuft, lesen Sie im Ratgeber zum [Autoankauf mit Motorschaden](/ratgeber/autoankauf-mit-motorschaden).',
    primaryLabel: 'Audi jetzt bewerten',
    secondaryHref: '/audi-verkaufen',
    secondaryLabel: 'Zum Audi Ankauf',
  },
  faqTitle: 'FAQ: Audi mit Motorschaden verkaufen',
  faqId: 'faq-audi-motorschaden-verkaufen',
  faqs: [
    {
      q: 'Kaufen Sie auch einen Audi an, der nicht mehr fährt?',
      a: 'Ja. Einen nicht fahrbereiten Audi holen wir am Standort ab. Wichtig sind eine freie Zufahrt, die Fahrzeugpapiere und alle vorhandenen Schlüssel.',
    },
    {
      q: 'Brauche ich eine Werkstattdiagnose für den Verkauf?',
      a: 'Nein, sie ist aber hilfreich. Mit Diagnose lässt sich der Schaden genauer einordnen, und das Angebot fällt meist präziser aus.',
    },
    {
      q: 'Lohnt sich ein Austauschmotor bei meinem Audi noch?',
      a: 'Das hängt vom Wert des Fahrzeugs nach der Reparatur ab. Bei älteren Modellen oder hoher Laufleistung übersteigen die Kosten oft den Mehrerlös. Eine kostenlose Bewertung zeigt Ihnen den Vergleichswert im aktuellen Zustand.',
    },
    {
      q: 'Muss ich den Motorschaden im Kaufvertrag angeben?',
      a: 'Ja. Bekannte Schäden gehören in den Kaufvertrag. Das schützt Sie vor späteren Streitigkeiten und sorgt für einen sauberen Abschluss.',
    },
    {
      q: 'Kaufen Sie auch Audi mit Motorschaden ohne TÜV?',
      a: 'Ja. Auch ohne gültige Hauptuntersuchung ist der Ankauf möglich. Der HU-Status fließt in die Bewertung ein.',
    },
  ],
};

export default function AudiMotorschadenVerkaufenPage() {
  return (
    <SeoArticlePage
      path={MODEL.canonicalPath}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Marken', href: '/marken' },
        { name: 'Audi', href: MODEL.brandHref },
        { name: 'Audi mit Motorschaden', href: MODEL.canonicalPath },
      ]}
      heroHeadline="Audi mit Motorschaden verkaufen – fair bewertet, sicher abgewickelt"
      heroSubheadline="Ankauf auch bei defektem Motor, ohne TÜV oder nicht fahrbereit"
      content={CONTENT}
    />
  );
}
