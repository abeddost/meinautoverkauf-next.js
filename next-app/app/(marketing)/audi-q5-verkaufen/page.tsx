import type { Metadata } from 'next';
import SeoArticlePage from '@/components/SeoArticlePage';
import type { SeoArticleContent } from '@/components/SeoArticle';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const MODEL = MODEL_SEO_PAGE_BY_SLUG['audi-q5-verkaufen'];

export const metadata: Metadata = {
  title: { absolute: MODEL.seoTitle },
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

const CONTENT: SeoArticleContent = {
  h1: 'Audi Q5 verkaufen: Ankauf vom ersten Q5 bis zum aktuellen Sportback',
  intro: [
    'Sie möchten Ihren **Audi Q5 verkaufen**? Wir kaufen den Q5 aller Generationen an, ob als TDI, TFSI, Plug-in-Hybrid oder SQ5. Nach der kostenlosen Online-Bewertung erhalten Sie ein Angebot auf Basis von Motor, Ausstattung und Historie; nach Vertragsabschluss wird die Auszahlung sofort veranlasst.',
    'Der Q5 ist als Dienstwagen, Familien-SUV und Zugfahrzeug gleichermaßen beliebt. Entsprechend unterschiedlich sind Laufleistung, Ausstattung und Nutzung, und genau das bewerten wir individuell statt nach Pauschalwerten.',
  ],
  sections: [
    {
      heading: 'Q5-Generationen im Ankauf',
      cards: [
        {
          title: 'Q5 8R (2008–2017)',
          text: 'Die erste Generation, oft mit 2.0 TDI oder 3.0 TDI und hoher Laufleistung. Wartungshistorie und Getriebezustand sind hier besonders wichtig.',
        },
        {
          title: 'Q5 FY (2017–2024)',
          text: 'Die zweite Generation mit modernerem Antrieb, auch als Plug-in-Hybrid und ab 2021 als Sportback.',
        },
        {
          title: 'SQ5',
          text: 'Die sportliche Variante mit V6-Motor bewerten wir nach Ausstattung, Laufleistung und Zustand.',
        },
        {
          title: 'Aktueller Q5 (seit 2024)',
          text: 'Junge Fahrzeuge der neuen Generation bewerten wir nach Ausstattung und Restgarantie.',
        },
      ],
    },
    {
      heading: 'Was bestimmt den Preis Ihres Q5?',
      paragraphs: ['Beim Q5 entscheiden Motor, Ausstattung und Nachweise über den Preis:'],
      bullets: [
        'Motorisierung: TDI, TFSI, Plug-in-Hybrid oder SQ5',
        'quattro-Antrieb und Getriebe',
        'Ausstattung wie S line, Matrix-LED, Panoramadach oder Luftfederung',
        'Anhängerkupplung, die viele Käufer gezielt suchen',
        'Wartungshistorie inklusive Getriebeölwechsel',
        'Laufleistung, Unfallfreiheit und HU-Status',
      ],
    },
    {
      heading: 'Typische Q5-Themen, die Käufer prüfen',
      variant: 'card',
      subsections: [
        {
          title: '2.0 TFSI im frühen Q5',
          text: 'Bei Fahrzeugen der ersten Generation sind erhöhter Ölverbrauch und Steuerkettenthemen bekannt. Belege über durchgeführte Reparaturen stützen den Preis.',
        },
        {
          title: '3.0 TDI',
          text: 'Der Kettentrieb des V6-Diesels sitzt auf der Getriebeseite; Probleme sind entsprechend aufwendig zu beheben.',
        },
        {
          title: 'S tronic',
          text: 'Ruckeln oder Schaltverzögerungen beim Doppelkupplungsgetriebe deuten auf Kupplung oder Mechatronik hin. Ein dokumentierter Ölwechsel schafft Vertrauen.',
        },
        {
          title: 'Plug-in-Hybrid',
          text: 'Bei den Plug-in-Hybriden zählen Wartung und Zustand des Hybridsystems sowie vorhandene Ladekabel.',
        },
      ],
      closing: [
        'Weitere Audi-Schwachstellen beschreibt unser [Audi-Ratgeber](/ratgeber/audi-probleme-verkauf). Ist der Motor bereits defekt, hilft unsere Seite [Audi mit Motorschaden verkaufen](/audi-motorschaden-verkaufen).',
      ],
    },
    {
      heading: 'Q5 verkaufen: Ankauf oder privat?',
      paragraphs: [
        'Ein gepflegter Q5 findet auch privat Käufer. Bei höheren Preisen steigen aber die Anforderungen an Besichtigung, Probefahrt und Bezahlung. Viele Interessenten verlangen Prüfberichte oder handeln wegen kleiner Auffälligkeiten deutlich nach.',
        'Beim Ankauf erhalten Sie ein verbindliches Angebot und eine dokumentierte Auszahlung, ohne Inserat und ohne fremde Probefahrer. Die Mittelklasse-Limousine der Marke beschreibt unsere Seite [Audi A4 verkaufen](/audi-a4-verkaufen).',
      ],
    },
    {
      heading: 'Zugfahrzeug und Ausstattung richtig angeben',
      paragraphs: [
        'Viele Q5 werden als Zugfahrzeug für Wohnwagen, Pferdeanhänger oder Boote genutzt. Das macht die Anhängerkupplung zu einem gefragten Ausstattungsmerkmal, kann aber Spuren an Kupplung, Getriebe und Fahrwerk hinterlassen. Geben Sie die Nutzung offen an und legen Sie Wartungsnachweise bei. Ausstattungspakete wie S line, Matrix-LED oder Assistenzsysteme sollten Sie in der Bewertung vollständig angeben, denn sie machen bei einem Premium-SUV einen spürbaren Unterschied. Fehlt ein Eintrag im Serviceheft, fragen Sie bei Ihrer Werkstatt nach; viele Betriebe können durchgeführte Arbeiten nachträglich bestätigen.',
      ],
    },
    {
      heading: 'So läuft der Q5 Ankauf ab',
      steps: [
        {
          title: 'Online bewerten',
          text: 'Modelljahr, Motorisierung, Laufleistung und Ausstattungspakete eingeben; die Bewertung ist kostenlos.',
        },
        {
          title: 'Angebot und Termin',
          text: 'Mit dem Angebot vereinbaren Sie einen Termin, bei Ihnen zu Hause oder an einer unserer Filialen.',
        },
        {
          title: 'Übergabe und Auszahlung',
          text: 'Prüfung vor Ort, Kaufvertrag und sofort veranlasste Überweisung. Um die Abmeldung kümmern wir uns.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Audi Q5 jetzt bewerten',
    text: 'Die Online-Bewertung Ihres Q5 dauert rund zwei Minuten und ist unverbindlich.',
    primaryLabel: 'Q5 bewerten',
    secondaryHref: '/audi-verkaufen',
    secondaryLabel: 'Zum Audi Ankauf',
  },
  faqTitle: 'FAQ: Audi Q5 verkaufen',
  faqId: 'faq-audi-q5-verkaufen',
  faqs: [
    {
      q: 'Kaufen Sie auch einen Q5 mit hoher Laufleistung?',
      a: 'Ja. Gerade TDI-Modelle erreichen oft hohe Laufleistungen. Wartungsnachweise stabilisieren den Preis.',
    },
    {
      q: 'Was ist, wenn das S tronic Probleme macht?',
      a: 'Getriebeprobleme schließen den Ankauf nicht aus. Sie werden transparent im Angebot berücksichtigt.',
    },
    {
      q: 'Kaufen Sie auch den SQ5 oder den Q5 Plug-in-Hybrid?',
      a: 'Ja. Wir bewerten alle Varianten nach Ausstattung, Laufleistung und Zustand.',
    },
    {
      q: 'Kann ich einen geleasten Q5 an Sie verkaufen?',
      a: 'Nur mit Zustimmung der Leasinggesellschaft, der das Fahrzeug gehört. Sprechen Sie vorab mit Ihrem Leasinggeber über eine Ablöse.',
    },
    {
      q: 'Wie läuft die Auszahlung ab?',
      a: 'Noch am Tag der Übergabe: Die Überweisung wird direkt nach Vertragsabschluss veranlasst.',
    },
  ],
};

export default function AudiQ5VerkaufenPage() {
  return (
    <SeoArticlePage
      path={MODEL.canonicalPath}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Marken', href: '/marken' },
        { name: 'Audi', href: MODEL.brandHref },
        { name: MODEL.label, href: MODEL.canonicalPath },
      ]}
      heroHeadline="Audi Q5 verkaufen – Premium-SUV fair bewertet"
      heroSubheadline="Q5 Ankauf für alle Generationen, vom 8R bis zum Sportback"
      content={CONTENT}
    />
  );
}
