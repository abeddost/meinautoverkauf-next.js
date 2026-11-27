import type { GuidePageContent } from '../guideContent';

// TODO(legal-review): Aussagen zu Eigentum, Ablöse, Leasingübernahme und Restwertverträgen vor Livegang fachlich prüfen lassen.
export const leasingautoVerkaufen: GuidePageContent = {
  slug: 'leasingauto-verkaufen',
  title: 'Leasingauto verkaufen: Ablöse, Übernahme & Ankauf',
  titleAbsolute: true,
  hideGeneratedBlocks: true,
  description:
    'Leasing-Auto verkaufen: Wem das Fahrzeug gehört, wie Ablöse, Leasingübernahme und anschließender Verkauf funktionieren und was Sie beachten sollten.',
  h1: 'Leasing-Auto verkaufen: Wie Sie aus dem Leasingvertrag kommen und was Ihr Auto bringt',
  intro:
    'Ein Leasing-Auto können Sie nicht einfach verkaufen, denn es gehört der Leasinggesellschaft – Sie sind nur Nutzer. Es gibt aber drei Wege: Sie lösen das Fahrzeug bei der Leasinggesellschaft ab und verkaufen es danach, Sie übertragen den Vertrag per Leasingübernahme auf eine andere Person, oder Sie geben das Auto zum Vertragsende regulär zurück. Welcher Weg sich lohnt, hängt von Vertragsart, Restlaufzeit, Ablösesumme und dem Marktwert des Fahrzeugs ab. Ohne Zustimmung der Leasinggesellschaft geht keiner der Wege.',
  quickFacts: [
    'Das Leasingauto gehört der Leasinggesellschaft.',
    'Verkauf nur nach Ablöse oder mit Zustimmung.',
    'Eine Leasingübernahme überträgt den Vertrag auf eine andere Person.',
    'Vorzeitige Auflösung kostet meist eine Ablösesumme.',
    'Liegt der Marktwert über der Ablöse, kann sich ein Verkauf lohnen.',
    'Die Vertragsart entscheidet über Ihre Möglichkeiten.',
  ],
  sections: [
    {
      heading: 'Darf ich ein Leasing-Auto verkaufen?',
      paragraphs: [
        'Nicht ohne Weiteres. Beim Leasing bleibt die Leasinggesellschaft Eigentümerin des Fahrzeugs, die Zulassungsbescheinigung Teil II liegt in der Regel bei ihr. Sie als Leasingnehmer haben ein Nutzungsrecht, aber kein Recht, das Auto an Dritte zu verkaufen. Wer ein Leasingfahrzeug ohne Zustimmung verkauft, kann dem Käufer kein Eigentum verschaffen und riskiert rechtliche Konsequenzen.',
        'Möglich ist ein Verkauf deshalb nur, wenn Sie das Fahrzeug zuvor von der Leasinggesellschaft erwerben oder diese dem Verkauf zustimmt. In beiden Fällen ist der erste Schritt ein Gespräch mit Ihrem Leasinggeber.',
      ],
    },
    {
      heading: 'Weg 1: Leasingauto ablösen und anschließend verkaufen',
      paragraphs: [
        'Viele Leasinggesellschaften ermöglichen eine vorzeitige Ablöse. Sie erhalten ein Angebot mit der Ablösesumme, zahlen diese und werden Eigentümer. Danach können Sie das Auto wie jedes andere Fahrzeug verkaufen. Ob sich das lohnt, zeigt ein einfacher Vergleich: Liegt der Marktwert über der Ablösesumme, bleibt Ihnen nach dem Verkauf ein Überschuss. Liegt er darunter, zahlen Sie drauf.',
        'Fragen Sie bei Ihrem Leasinggeber ein schriftliches Ablöseangebot an und ermitteln Sie parallel den Marktwert, etwa mit einer [kostenlosen Online-Bewertung](/auto-bewerten). Ob die Ablöse direkt aus dem Verkaufserlös bezahlt werden kann, hängt von der Leasinggesellschaft ab; klären Sie das vorab. Ein ähnliches Vorgehen beschreibt unser Ratgeber [Autoankauf trotz Finanzierung](/ratgeber/autoankauf-trotz-finanzierung).',
      ],
    },
    {
      heading: 'Weg 2: Leasingübernahme',
      paragraphs: [
        'Bei einer Leasingübernahme tritt eine andere Person mit allen Rechten und Pflichten in Ihren Vertrag ein und zahlt die restlichen Raten. Die Leasinggesellschaft muss zustimmen und prüft in der Regel die Bonität des Nachfolgers. Für die Vermittlung gibt es spezialisierte Onlinebörsen; manche Leasinggesellschaften verlangen für die Übertragung eine Gebühr.',
        'Eine Leasingübernahme lohnt sich vor allem, wenn die Raten im Verhältnis zum Fahrzeug attraktiv sind und noch eine längere Restlaufzeit besteht. Prüfen Sie im Vertrag, ob Sie nach der Übernahme vollständig aus der Haftung entlassen werden. Klären Sie außerdem, ob eine zu Vertragsbeginn geleistete Sonderzahlung bei der Übernahme berücksichtigt wird.',
      ],
    },
    {
      heading: 'Weg 3: Rückgabe zum Vertragsende',
      paragraphs: [
        'Ist das Vertragsende absehbar, ist die reguläre Rückgabe oft der einfachste Weg. Bei Kilometerverträgen werden dann Mehr- oder Minderkilometer abgerechnet, außerdem Schäden, die über die normale Abnutzung hinausgehen. Bei Restwertverträgen ist vertraglich geregelt, wer das Restwertrisiko trägt; liegt der tatsächliche Verwertungserlös unter dem kalkulierten Restwert, kann eine Nachzahlung fällig werden.',
        'Manche Verträge bieten am Ende eine Kaufoption. Liegt der Kaufpreis unter dem Marktwert, kann es sich lohnen, das Fahrzeug zu übernehmen und anschließend zu verkaufen.',
      ],
    },
    {
      heading: 'Vor der Rückgabe: Zustand dokumentieren',
      paragraphs: [
        'Wer sein Leasingfahrzeug zum Vertragsende zurückgibt, sollte den Zustand vorher selbst dokumentieren: Fotos von Karosserie, Felgen, Innenraum und Kilometerstand, am besten bei Tageslicht und mit Datum. Kleinere Gebrauchsspuren gelten meist als normale Abnutzung, Beulen, tiefe Kratzer oder Schäden im Innenraum werden dagegen häufig berechnet.',
        'Lassen Sie sich das Rückgabeprotokoll aushändigen und prüfen Sie die Schadensaufstellung genau. Fallen die erwarteten Nachzahlungen hoch aus, kann eine Ablöse mit anschließendem Verkauf die günstigere Alternative sein.',
      ],
    },
    {
      heading: 'Kilometervertrag oder Restwertvertrag: Was gilt für Sie?',
      paragraphs: [
        'Welche Möglichkeiten Sie haben, hängt stark von der Vertragsart ab. Schauen Sie in Ihre Vertragsunterlagen oder fragen Sie bei der Leasinggesellschaft nach:',
      ],
      bullets: [
        'Kilometervertrag: Abrechnung nach gefahrenen Kilometern und Zustand bei Rückgabe',
        'Restwertvertrag: Abrechnung gegen einen vorab kalkulierten Restwert',
        'Kaufoption: manche Verträge erlauben die Übernahme zum Vertragsende',
        'Ablöse: vorzeitige Beendigung meist nur gegen eine Ablösesumme',
      ],
    },
    {
      heading: 'Firmenwagen und Dienstwagen im Leasing',
      paragraphs: [
        'Bei geleasten Firmenwagen ist das Unternehmen Leasingnehmer, nicht der Fahrer. Möchten Sie einen Dienstwagen nach Vertragsende privat übernehmen und später verkaufen, muss das mit Arbeitgeber und Leasinggesellschaft abgestimmt werden. Wie der Verkauf von Firmenfahrzeugen abläuft, erklärt unser Ratgeber [Autoankauf für Firmenwagen und Gewerbe](/ratgeber/autoankauf-firmenwagen-gewerbe).',
      ],
    },
    {
      heading: 'Was ist mein Leasingauto wert?',
      paragraphs: [
        'Für die Entscheidung brauchen Sie den aktuellen Marktwert. Junge Leasingfahrzeuge haben oft eine gepflegte Historie mit Herstellerwartung und sind entsprechend gefragt. Gleichzeitig ist der Wertverlust in den ersten Jahren am höchsten. Eine Online-Bewertung zeigt Ihnen, wo Ihr Auto steht; vergleichen Sie diesen Wert mit Ablöse, Restraten oder vertraglichem Restwert.',
        'Wie junge Fahrzeuge bewertet werden, lesen Sie auf unserer Seite [Neuwagen und Jahreswagen verkaufen](/jahreswagen-neuwagen-verkaufen). Wann sich ein Verkauf generell lohnt, zeigt der Ratgeber [Wann Auto verkaufen?](/ratgeber/wann-auto-verkaufen)',
      ],
    },
    {
      heading: 'Typische Fehler beim Verkauf eines Leasingautos',
      paragraphs: ['Diese Fehler sollten Sie vermeiden:'],
      bullets: [
        'das Auto ohne Zustimmung der Leasinggesellschaft anbieten',
        'Ablösesumme und Marktwert nicht vergleichen',
        'Gebühren für Übernahme oder vorzeitige Auflösung übersehen',
        'Schäden vor der Rückgabe nicht dokumentieren',
        'Fristen für eine vertragliche Kaufoption verpassen',
      ],
    },
    {
      heading: 'Leasingauto nach der Ablöse an uns verkaufen',
      paragraphs: [
        'Haben Sie Ihr Leasingfahrzeug abgelöst oder hat die Leasinggesellschaft dem Verkauf zugestimmt, kaufen wir es wie jedes andere Auto an: kostenlose Online-Bewertung, Angebot, kurze Prüfung, Kaufvertrag und Auszahlung direkt nach Vertragsabschluss. Die Abmeldung übernehmen wir.',
        'Sprechen Sie uns gern schon vor der Ablöse an, damit Sie Marktwert und Ablösesumme in Ruhe vergleichen können. Die Bewertung ist unverbindlich und verpflichtet Sie zu nichts.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Kann ich mein Leasingauto einfach verkaufen?',
      a: 'Nein. Das Fahrzeug gehört der Leasinggesellschaft. Ein Verkauf ist nur nach Ablöse oder mit Zustimmung des Leasinggebers möglich.',
    },
    {
      q: 'Was ist eine Leasingübernahme?',
      a: 'Eine andere Person übernimmt Ihren Leasingvertrag mit allen Rechten und Pflichten. Die Leasinggesellschaft muss zustimmen und prüft meist die Bonität.',
    },
    {
      q: 'Lohnt es sich, ein Leasingauto abzulösen und zu verkaufen?',
      a: 'Wenn der Marktwert über der Ablösesumme liegt, ja. Vergleichen Sie ein schriftliches Ablöseangebot mit einer aktuellen Bewertung.',
    },
    {
      q: 'Was kostet es, einen Leasingvertrag vorzeitig zu beenden?',
      a: 'Das hängt vom Vertrag ab. In der Regel verlangt die Leasinggesellschaft eine Ablösesumme, die sich unter anderem nach Restlaufzeit und Restwert richtet.',
    },
    {
      q: 'Kaufen Sie Leasingfahrzeuge an?',
      a: 'Ja, sobald das Fahrzeug abgelöst ist oder die Leasinggesellschaft dem Verkauf zugestimmt hat. Dann läuft der Ankauf wie bei jedem anderen Auto.',
    },
    {
      q: 'Was passiert bei einem Restwertvertrag am Ende?',
      a: 'Das Fahrzeug wird mit dem vorab kalkulierten Restwert abgerechnet. Liegt der Erlös darunter, kann eine Nachzahlung fällig werden; die Einzelheiten regelt Ihr Vertrag.',
    },
  ],
  relatedSlugs: [
    'autoankauf-trotz-finanzierung',
    'autoankauf-firmenwagen-gewerbe',
    'wann-auto-verkaufen',
    'kilometerstand-scheckheft-vorbesitzer-preis',
  ],
  coreLink: '/auto-bewerten',
  ctaBridge: {
    heading: 'Junges Auto nach der Ablöse verkaufen?',
    text: 'Wie wir junge Fahrzeuge mit Restgarantie bewerten, lesen Sie auf unserer Seite für Neuwagen und Jahreswagen.',
    href: '/jahreswagen-neuwagen-verkaufen',
    label: 'Neuwagen & Jahreswagen verkaufen',
  },
};
