import type { Metadata } from 'next';
import SeoArticlePage from '@/components/SeoArticlePage';
import type { SeoArticleContent } from '@/components/SeoArticle';

const PATH = '/unfallwagen-ankauf-mainz';

export const metadata: Metadata = {
  title: { absolute: 'Unfallwagen Ankauf Mainz | Unfallauto sofort verkaufen' },
  description:
    'Unfallwagen Ankauf in Mainz: Unfallauto verkaufen mit kostenloser Bewertung, Abholung, Abmeldung und Auszahlung am Übergabetag – Sitz in Bodenheim.',
  alternates: { canonical: PATH },
};

const CONTENT: SeoArticleContent = {
  h1: 'Unfallwagen Ankauf Mainz: Ihr Unfallauto direkt verkaufen – auch nicht fahrbereit',
  intro: [
    'Beim **Unfallwagen Ankauf in Mainz** sind Sie bei uns an der richtigen Adresse: Unser Sitz liegt in Bodenheim, nur wenige Kilometer südlich der Mainzer Stadtgrenze. Wir kaufen Unfallautos jeder Marke an, vom Parkrempler bis zum wirtschaftlichen Totalschaden. Nach der kostenlosen Online-Bewertung erhalten Sie ein Angebot, und nach Vertragsabschluss wird die Auszahlung sofort veranlasst.',
    'Ist der Wagen nicht mehr fahrbereit, holen wir ihn in Mainz und im Landkreis Mainz-Bingen ab. Die Abmeldung des MZ-Kennzeichens übernehmen wir, sodass Sie sich um nichts weiter kümmern müssen.',
  ],
  sections: [
    {
      heading: 'Unfallauto Ankauf Mainz: Für welche Fälle wir da sind',
      variant: 'card',
      cards: [
        {
          title: 'Unfall im Stadtverkehr',
          text: 'Ob Auffahrunfall auf dem Mainzer Ring, Vorfahrtsfehler in der Neustadt oder Parkschaden in der Oberstadt: Blechschäden kaufen wir ebenso an wie strukturelle Schäden.',
        },
        {
          title: 'Totalschaden laut Gutachten',
          text: 'Rechnet die Versicherung auf Totalschaden ab, bleibt das Fahrzeug meist Ihr Eigentum. Wir machen ein Angebot für den Restwert.',
        },
        {
          title: 'Unfall mit Folgeschaden',
          text: 'Kühler, Achse oder Elektronik beschädigt, das Auto springt nicht mehr an: kein Problem für den Ankauf.',
        },
        {
          title: 'Ältere Unfallfahrzeuge',
          text: 'Bei älteren Autos übersteigt die Reparatur schnell den Wert. Dann ist der Verkauf im aktuellen Zustand oft die wirtschaftlichste Lösung.',
        },
      ],
    },
    {
      heading: 'Unfallauto verkaufen in Mainz: Ankauf oder Privatverkauf?',
      paragraphs: [
        'Ein Unfallauto privat zu verkaufen, ist mühsam. Viele Interessenten melden sich nur, um den Preis zu drücken, und der Kaufvertrag verlangt Sorgfalt: Bekannte Schäden müssen Sie vollständig angeben, sonst drohen später Ansprüche des Käufers.',
        'Beim Ankauf entfällt das. Wir nehmen das Fahrzeug so, wie es ist, und halten die bekannten Schäden im Vertrag fest. Was rechtlich beim Verkauf eines Unfallwagens gilt, fasst unser Ratgeber [Unfallwagen verkaufen](/ratgeber/unfallwagen-verkaufen) zusammen.',
        'Hinzu kommt der Zeitfaktor: Während ein Unfallauto im Privatmarkt oft wochenlang steht und Stellplatz kostet, ist der Ankauf mit einem einzigen Termin erledigt.',
      ],
    },
    {
      heading: 'Versicherung, Gutachten und Restwert',
      variant: 'highlight',
      paragraphs: [
        'Wird Ihr Unfall über eine Versicherung reguliert, ermittelt meist ein Gutachter Reparaturkosten, Wiederbeschaffungswert und Restwert. Verkaufen Sie erst, wenn die Besichtigung durch den Gutachter abgeschlossen ist, und stimmen Sie den Verkauf bei laufender Regulierung mit Ihrer Versicherung ab.',
        'Liegt bereits ein Restwertangebot vor, können Sie unser Angebot unverbindlich danebenlegen. Wie der Restwert eines Unfallfahrzeugs zustande kommt, erklärt der Ratgeber [Unfallwagen Ankauf](/ratgeber/unfallwagen-ankauf).',
      ],
    },
    {
      heading: 'So läuft der Unfallwagen Ankauf in Mainz ab',
      steps: [
        {
          title: 'Bewertung',
          text: 'Fahrzeugdaten und Schäden online eingeben, gern mit Fotos. Kostenlos und unverbindlich.',
        },
        {
          title: 'Termin',
          text: 'Abholung in Mainz und Umgebung oder Abgabe an unserem Sitz in Bodenheim, auch abends oder am Wochenende.',
        },
        {
          title: 'Abschluss',
          text: 'Kurze Prüfung, Kaufvertrag, sofort veranlasste Auszahlung und Abmeldung durch uns.',
        },
      ],
    },
    {
      heading: 'Abholung in allen Mainzer Stadtteilen',
      variant: 'muted',
      paragraphs: [
        'Wir holen Unfallwagen in der gesamten Stadt ab: Altstadt, Neustadt, Oberstadt, Gonsenheim, Finthen, Bretzenheim, Mombach, Hechtsheim, Weisenau, Laubenheim, Ebersheim und Lerchenberg. Auch Fahrzeuge aus Rheinhessen, etwa aus Nieder-Olm, Nackenheim oder Ingelheim, sind willkommen.',
        'Mehr zum allgemeinen Ankauf lesen Sie auf den Seiten [Autoankauf Mainz](/autoankauf-mainz) und [Autoankauf Bodenheim](/autoankauf-bodenheim). Auf der anderen Rheinseite hilft unsere Seite [Unfallwagen verkaufen in Wiesbaden](/unfallwagen-ankauf-wiesbaden).',
      ],
    },
  ],
  cta: {
    heading: 'Unfallauto in Mainz jetzt bewerten',
    text: 'In rund zwei Minuten zur unverbindlichen Einschätzung – auch für Fahrzeuge, die nicht mehr fahren.',
    primaryLabel: 'Unfallwagen bewerten',
    secondaryHref: '/autoankauf-mainz',
    secondaryLabel: 'Autoankauf Mainz',
  },
  faqTitle: 'FAQ: Unfallwagen Ankauf in Mainz',
  faqId: 'faq-unfallwagen-ankauf-mainz',
  faqs: [
    {
      q: 'Wie schnell kann ich meinen Unfallwagen in Mainz verkaufen?',
      a: 'Nach der Online-Bewertung ist ein Termin oft innerhalb von ein bis zwei Tagen möglich. Die Auszahlung wird direkt nach Vertragsabschluss veranlasst.',
    },
    {
      q: 'Holen Sie nicht fahrbereite Unfallautos in Mainz ab?',
      a: 'Ja. Wir holen in allen Mainzer Stadtteilen und im Umland ab. Halten Sie Fahrzeugpapiere und Schlüssel bereit.',
    },
    {
      q: 'Muss ich den Unfallschaden im Vertrag angeben?',
      a: 'Ja. Bekannte Schäden gehören in den Kaufvertrag. Das schafft Klarheit für beide Seiten und schützt Sie vor späteren Forderungen.',
    },
    {
      q: 'Kann ich mein Unfallauto auch selbst vorbeibringen?',
      a: 'Ja. Fahrbereite Fahrzeuge können Sie nach Terminbuchung an unserem Sitz in Bodenheim abgeben.',
    },
    {
      q: 'Kaufen Sie auch Unfallwagen ohne TÜV?',
      a: 'Ja. Ein abgelaufener TÜV ist beim Unfallwagen Ankauf kein Hindernis.',
    },
  ],
};

export default function UnfallwagenAnkaufMainzPage() {
  return (
    <SeoArticlePage
      path={PATH}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Standorte', href: '/standorte' },
        { name: 'Mainz', href: '/autoankauf-mainz' },
        { name: 'Unfallwagen Ankauf', href: PATH },
      ]}
      heroHeadline="Unfallwagen Ankauf Mainz – Unfallauto fair verkaufen"
      heroSubheadline="Sitz in Bodenheim, Abholung in Mainz und ganz Rheinhessen"
      content={CONTENT}
    />
  );
}
