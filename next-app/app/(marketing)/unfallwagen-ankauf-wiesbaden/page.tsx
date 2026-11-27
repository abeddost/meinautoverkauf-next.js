import type { Metadata } from 'next';
import SeoArticlePage from '@/components/SeoArticlePage';
import type { SeoArticleContent } from '@/components/SeoArticle';

const PATH = '/unfallwagen-ankauf-wiesbaden';

export const metadata: Metadata = {
  title: { absolute: 'Unfallwagen verkaufen Wiesbaden | Ankauf mit Abholung' },
  description:
    'Unfallwagen verkaufen in Wiesbaden: Unfallauto Ankauf mit kostenloser Bewertung, Abholung, Abmeldung und Auszahlung am Übergabetag. Filiale vor Ort.',
  alternates: { canonical: PATH },
};

const CONTENT: SeoArticleContent = {
  h1: 'Unfallwagen verkaufen in Wiesbaden: Unfallauto Ankauf vor Ort, fair und schnell',
  intro: [
    'Sie möchten Ihren **Unfallwagen in Wiesbaden verkaufen**? Wir kaufen Unfallautos in allen Wiesbadener Stadtteilen an – egal ob Blechschaden, Totalschaden laut Gutachten oder nicht mehr fahrbereit. Sie bewerten das Fahrzeug kostenlos online, erhalten ein Angebot, und nach Vertragsabschluss wird die Auszahlung sofort veranlasst. Ein nicht fahrbereites Unfallauto holen wir ab, die Abmeldung übernehmen wir.',
    'Fahrbereite Fahrzeuge können Sie auch direkt an unserer Filiale in der Boelckestraße in Wiesbaden abgeben. So sparen Sie sich Werkstatttermine, Inserate und Verhandlungen mit Schnäppchenjägern.',
  ],
  sections: [
    {
      heading: 'Unfallauto Ankauf in Wiesbaden: So läuft es ab',
      steps: [
        {
          title: 'Online bewerten',
          text: 'Fahrzeugdaten und Schadenbild eingeben. Fotos und, falls vorhanden, das Gutachten helfen bei der Einschätzung.',
        },
        {
          title: 'Angebot und Termin',
          text: 'Sie erhalten ein Angebot und wählen: Abholung bei Ihnen, Prüfung vor Ort oder Abgabe an unserer Wiesbadener Filiale. Termine sind auch abends oder am Wochenende möglich.',
        },
        {
          title: 'Vertrag und Auszahlung',
          text: 'Nach der kurzen Prüfung unterschreiben Sie den Kaufvertrag mit den bekannten Schäden, die Auszahlung wird sofort veranlasst. Die Abmeldung des WI-Kennzeichens übernehmen wir.',
        },
      ],
    },
    {
      heading: 'Unfallwagen Ankauf Wiesbaden: Welche Schäden wir ankaufen',
      variant: 'card',
      cards: [
        {
          title: 'Blech- und Parkschäden',
          text: 'Dellen, Kratzer und Rempler aus dem Stadtverkehr. Oft lohnt sich die Reparatur vor dem Verkauf nicht.',
        },
        {
          title: 'Front- und Heckschäden',
          text: 'Auffahrunfälle, etwa im Berufsverkehr auf A66 oder A643, auch mit ausgelösten Airbags.',
        },
        {
          title: 'Wirtschaftlicher Totalschaden',
          text: 'Reparaturkosten über dem Wiederbeschaffungswert? Wir bewerten den Restwert auf Basis von Teilen und Exportmöglichkeiten.',
        },
        {
          title: 'Nicht fahrbereite Unfallautos',
          text: 'Wir holen in ganz Wiesbaden ab, von Biebrich und Schierstein bis Erbenheim und Nordenstadt.',
        },
      ],
    },
    {
      heading: 'Unfallwagen verkaufen in Wiesbaden: reparieren oder so verkaufen?',
      paragraphs: [
        'Nach einem Unfall stellt sich schnell die Frage, ob die Reparatur noch lohnt. Werkstattkosten, Ersatzteilpreise und Wartezeiten machen Reparaturen teuer, und ein reparierter Unfallwagen bleibt beim Wiederverkauf ein Unfallwagen. Ist das Fahrzeug ohnehin älter oder frisst die Reparatur einen großen Teil des Werts auf, ist der Verkauf im aktuellen Zustand oft die bessere Wahl.',
        'Wichtig bei laufender Schadenregulierung: Klären Sie vor dem Verkauf mit Ihrer Versicherung, ob ein Gutachter das Fahrzeug noch besichtigen muss. Was Sie rechtlich beim Verkauf eines Unfallfahrzeugs beachten sollten, erklärt unser Ratgeber [Unfallwagen verkaufen](/ratgeber/unfallwagen-verkaufen).',
      ],
    },
    {
      heading: 'Was ist mein Unfallauto noch wert?',
      paragraphs: ['Der Ankaufpreis hängt vor allem von diesen Punkten ab:'],
      bullets: [
        'Modell, Baujahr, Laufleistung und Ausstattung',
        'Schadenszone und Umfang, Airbags ausgelöst oder nicht',
        'Zustand von Motor, Getriebe und Fahrwerk',
        'vorhandenes Gutachten oder Reparaturkalkulation',
        'Nachfrage nach Teilen und im Export',
      ],
      closing: [
        'Wie Unfallwagen bewertet und verwertet werden, lesen Sie ausführlich im Ratgeber [Unfallwagen Ankauf](/ratgeber/unfallwagen-ankauf).',
      ],
    },
    {
      heading: 'In ganz Wiesbaden und Umgebung',
      variant: 'muted',
      paragraphs: [
        'Wir kaufen Unfallwagen in allen Wiesbadener Stadtteilen: Innenstadt, Biebrich, Schierstein, Dotzheim, Sonnenberg, Bierstadt, Erbenheim, Nordenstadt, Delkenheim, Kastel und Kostheim. Auch im Rheingau-Taunus-Kreis und im Main-Taunus-Kreis holen wir ab.',
        'Mehr über unseren allgemeinen Service in der Stadt lesen Sie auf der Seite [Autoankauf Wiesbaden](/autoankauf-wiesbaden). Für die andere Rheinseite gibt es unsere Seite [Unfallwagen Ankauf Mainz](/unfallwagen-ankauf-mainz).',
      ],
    },
  ],
  cta: {
    heading: 'Unfallwagen in Wiesbaden jetzt bewerten',
    text: 'Kostenlos, unverbindlich und in rund zwei Minuten – auch für Fahrzeuge, die nicht mehr fahren.',
    primaryLabel: 'Unfallwagen bewerten',
    secondaryHref: '/autoankauf-wiesbaden',
    secondaryLabel: 'Autoankauf Wiesbaden',
  },
  faqTitle: 'FAQ: Unfallwagen verkaufen in Wiesbaden',
  faqId: 'faq-unfallwagen-ankauf-wiesbaden',
  faqs: [
    {
      q: 'Holen Sie Unfallwagen in Wiesbaden ab?',
      a: 'Ja. Nicht fahrbereite Unfallwagen holen wir in allen Wiesbadener Stadtteilen und im Umland ab. Fahrbereite Fahrzeuge können Sie auch an unserer Filiale in Wiesbaden abgeben.',
    },
    {
      q: 'Kaufen Sie auch Unfallwagen mit Totalschaden?',
      a: 'Ja. Auch bei wirtschaftlichem Totalschaden laut Gutachten machen wir ein Angebot auf Basis von Restwert und Verwertungsmöglichkeiten.',
    },
    {
      q: 'Brauche ich ein Gutachten für den Verkauf?',
      a: 'Nein. Ein Gutachten hilft bei der Einschätzung, ist aber keine Voraussetzung. Fotos und eine ehrliche Schadenbeschreibung reichen für die erste Bewertung.',
    },
    {
      q: 'Wann bekomme ich mein Geld?',
      a: 'Auch beim Unfallwagen gilt: Direkt nach Vertragsabschluss veranlassen wir die Überweisung, das Geld kommt noch am selben Tag.',
    },
    {
      q: 'Übernehmen Sie die Abmeldung?',
      a: 'Ja. Die Abmeldung übernehmen wir im Rahmen des Ankaufs, damit für Sie keine weiteren Kosten für Steuer und Versicherung anfallen.',
    },
  ],
};

export default function UnfallwagenAnkaufWiesbadenPage() {
  return (
    <SeoArticlePage
      path={PATH}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Standorte', href: '/standorte' },
        { name: 'Wiesbaden', href: '/autoankauf-wiesbaden' },
        { name: 'Unfallwagen Ankauf', href: PATH },
      ]}
      heroHeadline="Unfallwagen Ankauf Wiesbaden – Unfallauto sofort verkaufen"
      heroSubheadline="Abholung in allen Stadtteilen oder Abgabe an unserer Filiale in Wiesbaden"
      content={CONTENT}
    />
  );
}
