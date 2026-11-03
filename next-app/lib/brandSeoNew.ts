import type { BrandSeoContent } from './brandSeoContent';

const HANDOVER = 'Online-Bewertung von überall, Übergabe in unserer Filiale in Bodenheim oder Rüsselsheim.';
const NOT_DRIVABLE =
  'Die Übergabe findet in unserer Filiale in Bodenheim oder Rüsselsheim statt. Ist das Fahrzeug nicht fahrbereit, rufen Sie uns vorher an, dann besprechen wir die Übergabe.';

const buildComparison = (brand: string) => [
  { criterion: 'Aufwand', us: 'Online bewerten und ein Termin in der Filiale', privateSale: 'Fotos, Inserat, Anfragen, Besichtigungen', traditionalDealer: 'Mehrere Händler anfahren und vergleichen' },
  { criterion: 'Preis', us: `Händlerpreis, unter dem privat erzielbaren Preis`, privateSale: 'Meist höher, aber nicht garantiert', traditionalDealer: 'Je nach Bedarf des Händlers sehr unterschiedlich' },
  { criterion: `${brand} mit Schäden`, us: 'Ankauf möglich, Zustand fließt in den Preis ein', privateSale: 'Schwierig, viele Rückfragen und Nachverhandlung', traditionalDealer: 'Oft nur begrenztes Interesse' },
  { criterion: 'Abmeldung', us: 'Übernehmen wir kostenfrei', privateSale: 'Selbst organisieren oder vertraglich regeln', traditionalDealer: 'Häufig enthalten, vorher klären' },
];

const buildProcess = (brand: string) => [
  { title: '1. Online bewerten', text: `Sie geben Modell, Baujahr, Kilometerstand und Zustand Ihres ${brand} ein und erhalten eine kostenlose Preiseinschätzung.` },
  { title: '2. Termin buchen', text: 'Sie wählen Filiale, Datum und Uhrzeit. Bringen Sie Fahrzeugschein, Fahrzeugbrief, Ausweis und alle Schlüssel mit.' },
  { title: '3. Prüfung und Auszahlung', text: 'Wir prüfen das Fahrzeug und nennen unser verbindliches Angebot. Nach dem Kaufvertrag veranlassen wir die Überweisung und übernehmen die Abmeldung.' },
];

const buildTrust = () => [
  'Kostenlose und unverbindliche Bewertung',
  'Übergabe in unserer Filiale in Bodenheim oder Rüsselsheim',
  'Schriftlicher Kaufvertrag mit Kopie für Ihre Unterlagen',
  'Auszahlung per Banküberweisung',
  'Abmeldung kostenfrei inklusive',
];

export const RENAULT_SEO_CONTENT: BrandSeoContent = {
  slug: 'renault',
  displayName: 'Renault',
  keywordMap: {
    primary: ['Renault verkaufen', 'Renault Ankauf', 'Renault Autoankauf'],
    secondary: ['Renault Clio verkaufen', 'Renault Captur verkaufen', 'Renault Megane verkaufen', 'Renault mit Motorschaden verkaufen'],
    semantic: ['1.2 TCe Ölverbrauch', 'EDC Getriebe', 'Renault Zoe Batteriemiete', 'Renault Restwert'],
    longTail: ['Renault mit hohem Ölverbrauch verkaufen', 'Renault Zoe mit Mietbatterie verkaufen'],
  },
  uniquenessRules: {
    introAngle: 'Ölverbrauch beim 1.2 TCe, EDC-Getriebe und die Batteriemiete bei der Zoe sind die Themen, die Renault-Halter beim Verkauf wirklich beschäftigen.',
    requiredInsights: ['1.2 TCe Ölverbrauch und Rückrufaktion', 'EDC-Doppelkupplung', 'Batteriemiete bei älteren Zoe'],
    bannedPatterns: ['Pauschale Aussagen zur Zuverlässigkeit der Marke'],
    minimumSemanticKeywords: 4,
  },
  landing: {
    slugPath: '/renault-verkaufen',
    seoTitle: 'Renault verkaufen | Renault Ankauf fair und planbar',
    seoDescription:
      'Renault verkaufen: kostenlose Bewertung, Übergabe in Bodenheim oder Rüsselsheim und Auszahlung bei Übergabe. Auch Clio, Captur, Megane und mit Schäden.',
    canonicalPath: '/renault-verkaufen',
    heroHeadline: 'Renault verkaufen: fair bewertet, ohne Inserat',
    heroSubheadline: 'Clio, Captur, Megane oder Zoe online bewerten und in unserer Filiale übergeben',
    h1: 'Renault Ankauf: Ihren Renault planbar verkaufen',
    intro: [
      'Renault gehört mit rund 1,6 Millionen zugelassenen Pkw zu den häufigsten Marken in Deutschland. Entsprechend groß ist der Gebrauchtmarkt, und Käufer vergleichen genau. Ein Clio oder Captur mit lückenloser Wartung verkauft sich deutlich leichter als ein Auto mit offenen Fragen.',
      'Steht eine größere Reparatur an oder verbraucht das Auto Öl, möchten viele Halter nicht erst inserieren, sondern wissen, was das Fahrzeug heute noch bringt. Unsere kostenlose Bewertung gibt Ihnen dafür einen ersten Anhaltspunkt.',
    ],
    benefitHeading: 'Warum Renault-Halter an uns verkaufen',
    benefits: [
      'Keine Inserate, Anrufe von Interessenten oder Probefahrten mit Fremden.',
      'Auch Fahrzeuge mit erhöhtem Ölverbrauch, Getriebeproblemen oder abgelaufener HU kommen infrage.',
      'Klarer Ablauf: online bewerten, Termin buchen, Fahrzeugprüfung, Vertrag und Auszahlung.',
      HANDOVER,
    ],
    processHeading: 'Renault verkaufen in 3 Schritten',
    processSteps: buildProcess('Renault'),
    buyTypesHeading: 'Welche Renault wir ankaufen',
    buyTypes: [
      { title: 'Clio und Twingo', text: 'Kleinwagen aus dem Stadtverkehr, auch mit hoher Laufleistung oder Gebrauchsspuren.' },
      { title: 'Captur und Kadjar', text: 'Kompakte SUVs. Bei Modellen mit 1.2 TCe sollten Sie den Ölverbrauch und die Wartung offen angeben.' },
      { title: 'Megane und Scenic', text: 'Kompaktwagen und Vans für Familie und Pendelstrecke.' },
      { title: 'Zoe und andere E-Modelle', text: 'Sprechen Sie uns vorab an, besonders wenn die Batterie gemietet ist.' },
      { title: 'Kangoo und Transporter', text: 'Hochdachkombis und Nutzfahrzeuge aus privater oder gewerblicher Nutzung.' },
      { title: 'Mit Motor- oder Getriebeschaden', text: 'Geben Sie den Schaden im Formular an. Er fließt in die Bewertung ein.' },
    ],
    comparisonHeading: 'Wege, einen Renault zu verkaufen',
    comparisonRows: buildComparison('Renault'),
    trustHeading: 'Was Sie von uns erwarten können',
    trustPoints: buildTrust(),
    ctas: [
      { heading: 'Was ist Ihr Renault wert?', text: 'Die Bewertung ist kostenlos und unverbindlich und dauert etwa 2 Minuten.', label: 'Renault bewerten', href: '/auto-bewerten' },
      { heading: 'Lieber erst vergleichen?', text: 'Unser Vergleich zeigt, wann sich ein Privatverkauf mehr lohnt als der Verkauf an einen Händler.', label: 'Privat oder Händler?', href: '/ratgeber/auto-privat-oder-haendler-verkaufen' },
      { heading: 'Typische Renault-Probleme', text: 'Unser Ratgeber erklärt Ölverbrauch, EDC-Getriebe und Batteriemiete und was das für den Verkauf bedeutet.', label: 'Zum Renault-Ratgeber', href: '/ratgeber/renault-probleme-verkauf' },
    ],
    faqHeading: 'Häufige Fragen zum Renault-Verkauf',
    faqs: [
      { q: 'Kaufen Sie auch einen Renault mit hohem Ölverbrauch an?', a: 'Ja. Geben Sie den Ölverbrauch im Bewertungsformular an. Er fließt in den Preis ein, schließt den Ankauf aber nicht grundsätzlich aus.' },
      { q: 'Kann ich eine Renault Zoe mit Mietbatterie verkaufen?', a: 'Sprechen Sie uns vorab an. Bei einer Mietbatterie gehört die Batterie nicht zum Fahrzeug, und der Mietvertrag muss beim Verkauf geklärt werden.' },
      { q: 'Muss ich meinen Renault selbst zur Filiale bringen?', a: NOT_DRIVABLE },
      { q: 'Wie schnell bekomme ich mein Geld?', a: 'Wir veranlassen die Überweisung am Tag der Übergabe, sobald der Kaufvertrag unterschrieben ist.' },
      { q: 'Welche Unterlagen brauche ich?', a: 'Fahrzeugschein, Fahrzeugbrief, Ihren Ausweis und alle Schlüssel. Scheckheft und Rechnungen sind hilfreich, besonders bei Fragen zum Ölverbrauch.' },
    ],
    internalLinksHeading: 'Passende Seiten',
    internalLinks: [
      { href: '/ratgeber/renault-probleme-verkauf', label: 'Renault: Probleme und Verkauf', context: 'Typische Schwachstellen und der richtige Zeitpunkt.' },
      { href: '/defektes-auto-verkaufen', label: 'Defektes Auto verkaufen', context: 'Vorgehen je nach Schaden.' },
      { href: '/standorte', label: 'Unsere Standorte', context: 'Filialen in Bodenheim und Rüsselsheim.' },
    ],
  },
  guide: {
    slug: 'renault-probleme-verkauf',
    seoTitle: 'Renault Probleme und Verkauf: Der Praxis-Guide',
    seoDescription:
      'Renault Probleme verstehen: Ölverbrauch beim 1.2 TCe, EDC-Getriebe und Zoe-Batteriemiete. So entscheiden Sie zwischen Reparatur und Verkauf.',
    h1: 'Renault Guide: Typische Probleme und der richtige Verkaufszeitpunkt',
    intro:
      'Viele Renault laufen unauffällig. Einige Themen tauchen in Erfahrungsberichten und Kaufberatungen aber immer wieder auf, vor allem beim 1.2 TCe und beim EDC-Doppelkupplungsgetriebe. Wer sie kennt, kann besser einschätzen, ob sich eine Reparatur noch lohnt oder ob jetzt ein guter Zeitpunkt zum Verkaufen ist.',
    quickFacts: [
      'Beim 1.2 TCe ist erhöhter Ölverbrauch das meistgenannte Thema.',
      'Renault hat für ältere 1.2-TCe-Motoren eine Rückrufaktion durchgeführt.',
      'Das EDC-Getriebe sollte bei der Probefahrt genau geprüft werden.',
      'Bei älteren Zoe kann die Batterie gemietet sein.',
      'Belegte Wartung stützt den Preis besonders stark.',
    ],
    sections: [
      {
        heading: 'Ölverbrauch beim 1.2 TCe',
        paragraphs: [
          'Der 1.2 TCe (Motorcode H5F) steckte unter anderem in Clio IV, Captur, Kangoo II, Mégane III und Scénic III. Kaufberatungen und Halterberichte nennen vor allem erhöhten Ölverbrauch. Für Motoren, die vor Ende Juli 2015 gebaut wurden, gab es eine Rückrufaktion wegen übermäßigen Ölverbrauchs.',
          'Prüfen Sie den Ölstand regelmäßig und fragen Sie bei einem Renault-Händler, ob Ihr Fahrzeug von der Aktion betroffen war und ob sie durchgeführt wurde. Eine belegte Maßnahme ist beim Verkauf ein gutes Argument.',
        ],
        bullets: ['Ölstand regelmäßig prüfen', 'Rückrufstatus beim Händler erfragen', 'Nachweise zu Maßnahmen aufheben', 'Motorgeräusche nach dem Kaltstart beachten'],
      },
      {
        heading: 'Steuerkette bei kleinen TCe-Motoren',
        paragraphs: [
          'Bei den kleinen TCe-Motoren wird in Fachberichten auch eine gelängte Steuerkette genannt. Typisch sind ungewöhnliche Geräusche beim Kaltstart oder Fehlermeldungen zur Motorsteuerung.',
          'Eine Reparatur kann schnell teuer werden, besonders wenn der Motor bereits Folgeschäden hat. Lassen Sie sich die Kosten nennen, bevor Sie entscheiden.',
        ],
      },
      {
        heading: 'EDC-Doppelkupplungsgetriebe',
        paragraphs: [
          'Das EDC-Getriebe wird in Kaufberatungen regelmäßig erwähnt, etwa wegen Geräuschen, Ruckeln und Arbeiten an Getriebelagern oder am Getriebeöl. Nicht jedes Auto ist betroffen, die Probefahrt ist aber wichtig.',
          'Mehr zum Vorgehen bei einem Schaden lesen Sie im Ratgeber zum Getriebeschaden.',
        ],
      },
      {
        heading: 'Renault Zoe: Batteriemiete und Batteriezustand',
        paragraphs: [
          'Ältere Zoe wurden häufig mit Mietbatterie angeboten. Dann gehört die Batterie nicht zum Fahrzeug, und ein Mietvertrag muss beim Verkauf geklärt werden. Halten Sie den Vertrag bereit und klären Sie frühzeitig, was der Käufer übernimmt.',
          'Für den Preis zählt außerdem der Batteriezustand. Ein Batteriezertifikat mit dem State of Health kann beim Verkauf helfen.',
        ],
      },
      {
        heading: 'Reparieren oder verkaufen?',
        paragraphs: [
          'Vergleichen Sie die Reparaturkosten mit dem Wert, den das Auto danach noch hätte, und mit dem Angebot für den aktuellen Zustand. Bei älteren Kleinwagen übersteigt eine größere Motor- oder Getriebereparatur schnell den Fahrzeugwert.',
          'Stehen mehrere Arbeiten gleichzeitig an, etwa HU, Bremsen und Motorthemen, kann der Verkauf vor der Reparatur die wirtschaftlichere Wahl sein.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie finde ich heraus, ob mein 1.2 TCe von der Rückrufaktion betroffen ist?', a: 'Fragen Sie einen Renault-Händler mit Ihrer Fahrzeug-Identnummer nach dem Status.' },
      { q: 'Lohnt sich eine Motorreparatur bei einem alten Clio?', a: 'Oft nicht, wenn die Kosten nah an den Fahrzeugwert herankommen. Lassen Sie sich einen Kostenvoranschlag geben und vergleichen Sie ihn mit dem aktuellen Wert.' },
      { q: 'Muss ich den Ölverbrauch beim Verkauf angeben?', a: 'Ja. Bekannte Mängel müssen Sie angeben, auch wenn das Auto noch fährt.' },
      { q: 'Kann ich einen Renault mit EDC-Problem verkaufen?', a: 'Ja. Beschreiben Sie das Problem im Bewertungsformular. Der Zustand fließt in den Preis ein.' },
      { q: 'Was gilt für eine Zoe mit Mietbatterie?', a: 'Klären Sie den Mietvertrag frühzeitig. Der Käufer muss wissen, dass die Batterie nicht zum Fahrzeug gehört, und sie vertraglich übernehmen oder ablösen.' },
    ],
    relatedSlugs: ['auto-mit-getriebeschaden-verkaufen', 'auto-mit-motorschaden-verkaufen', 'kilometerstand-scheckheft-vorbesitzer-preis', 'unterlagen-autoverkauf-checkliste'],
    coreLink: '/auto-bewerten',
    ctaBridge: {
      heading: 'Renault jetzt verkaufen?',
      text: 'Auf unserer Renault-Seite finden Sie den Ablauf und die häufigsten Fragen zum Verkauf.',
      href: '/renault-verkaufen',
      label: 'Zur Renault-Ankaufseite',
    },
  },
};

export const HYUNDAI_SEO_CONTENT: BrandSeoContent = {
  slug: 'hyundai',
  displayName: 'Hyundai',
  keywordMap: {
    primary: ['Hyundai verkaufen', 'Hyundai Ankauf', 'Hyundai Autoankauf'],
    secondary: ['Hyundai i30 verkaufen', 'Hyundai Tucson verkaufen', 'Hyundai i20 verkaufen', 'Hyundai Kona verkaufen'],
    semantic: ['7-Gang-DCT', '1.6 T-GDI', 'Hyundai Garantie', 'Hyundai Restwert'],
    longTail: ['Hyundai mit DCT Problemen verkaufen', 'Hyundai Tucson mit hoher Laufleistung verkaufen'],
  },
  uniquenessRules: {
    introAngle: 'Bei Hyundai sind Doppelkupplungsgetriebe, frühe T-GDI-Motoren und die verbleibende Herstellergarantie die verkaufsrelevanten Themen.',
    requiredInsights: ['7-Gang-DCT', 'Ölverbrauch früher T-GDI', 'Restgarantie als Verkaufsargument'],
    bannedPatterns: ['Pauschale Aussagen zur Zuverlässigkeit der Marke'],
    minimumSemanticKeywords: 4,
  },
  landing: {
    slugPath: '/hyundai-verkaufen',
    seoTitle: 'Hyundai verkaufen | Hyundai Ankauf fair und planbar',
    seoDescription:
      'Hyundai verkaufen: kostenlose Bewertung, Übergabe in Bodenheim oder Rüsselsheim und Auszahlung bei Übergabe. Auch i20, i30, Tucson, Kona und mit Schäden.',
    canonicalPath: '/hyundai-verkaufen',
    heroHeadline: 'Hyundai verkaufen: fair bewertet, ohne Inserat',
    heroSubheadline: 'i20, i30, Tucson oder Kona online bewerten und in unserer Filiale übergeben',
    h1: 'Hyundai Ankauf: Ihren Hyundai planbar verkaufen',
    intro: [
      'Hyundai gehört mit rund 1,6 Millionen zugelassenen Pkw zu den häufigsten Marken in Deutschland. Modelle wie i30 und Tucson sind im Gebrauchtmarkt gefragt, und eine noch laufende Herstellergarantie kann ein gutes Verkaufsargument sein.',
      'Wenn das Doppelkupplungsgetriebe Probleme macht oder eine größere Reparatur ansteht, möchten viele Halter nicht erst inserieren. Unsere kostenlose Bewertung zeigt Ihnen, was Ihr Hyundai heute noch bringen kann.',
    ],
    benefitHeading: 'Warum Hyundai-Halter an uns verkaufen',
    benefits: [
      'Keine Inserate, Anrufe von Interessenten oder Probefahrten mit Fremden.',
      'Auch Fahrzeuge mit Getriebeproblemen, hoher Laufleistung oder abgelaufener HU kommen infrage.',
      'Klarer Ablauf: online bewerten, Termin buchen, Fahrzeugprüfung, Vertrag und Auszahlung.',
      HANDOVER,
    ],
    processHeading: 'Hyundai verkaufen in 3 Schritten',
    processSteps: buildProcess('Hyundai'),
    buyTypesHeading: 'Welche Hyundai wir ankaufen',
    buyTypes: [
      { title: 'i10 und i20', text: 'Kleinwagen aus dem Stadtverkehr, auch mit hoher Laufleistung.' },
      { title: 'i30', text: 'Kompaktwagen für Alltag und Pendelstrecke, als Benziner, Diesel oder Kombi.' },
      { title: 'Tucson und ix35', text: 'SUVs mit Benzin-, Diesel- oder Hybridantrieb.' },
      { title: 'Kona', text: 'Kompakt-SUV als Verbrenner oder Elektroauto. Beim Elektromodell sprechen Sie uns wegen der Batterie vorab an.' },
      { title: 'Ioniq und andere E-Modelle', text: 'Halten Sie Unterlagen zur Batterie und zur Garantie bereit.' },
      { title: 'Mit Motor- oder Getriebeschaden', text: 'Geben Sie den Schaden im Formular an. Er fließt in die Bewertung ein.' },
    ],
    comparisonHeading: 'Wege, einen Hyundai zu verkaufen',
    comparisonRows: buildComparison('Hyundai'),
    trustHeading: 'Was Sie von uns erwarten können',
    trustPoints: buildTrust(),
    ctas: [
      { heading: 'Was ist Ihr Hyundai wert?', text: 'Die Bewertung ist kostenlos und unverbindlich und dauert etwa 2 Minuten.', label: 'Hyundai bewerten', href: '/auto-bewerten' },
      { heading: 'Lieber erst vergleichen?', text: 'Unser Vergleich zeigt, wann sich ein Privatverkauf mehr lohnt als der Verkauf an einen Händler.', label: 'Privat oder Händler?', href: '/ratgeber/auto-privat-oder-haendler-verkaufen' },
      { heading: 'Typische Hyundai-Probleme', text: 'Unser Ratgeber erklärt Doppelkupplungsgetriebe, T-GDI-Motoren und die Garantie und was das für den Verkauf bedeutet.', label: 'Zum Hyundai-Ratgeber', href: '/ratgeber/hyundai-probleme-verkauf' },
    ],
    faqHeading: 'Häufige Fragen zum Hyundai-Verkauf',
    faqs: [
      { q: 'Kaufen Sie auch einen Hyundai mit DCT-Problemen an?', a: 'Ja. Beschreiben Sie das Problem im Bewertungsformular. Es fließt in den Preis ein, schließt den Ankauf aber nicht grundsätzlich aus.' },
      { q: 'Bringt eine laufende Garantie einen höheren Preis?', a: 'Eine noch laufende Herstellergarantie kann den Wert stützen. Halten Sie das Serviceheft bereit, damit sich die Wartung belegen lässt.' },
      { q: 'Muss ich meinen Hyundai selbst zur Filiale bringen?', a: NOT_DRIVABLE },
      { q: 'Wie schnell bekomme ich mein Geld?', a: 'Wir veranlassen die Überweisung am Tag der Übergabe, sobald der Kaufvertrag unterschrieben ist.' },
      { q: 'Welche Unterlagen brauche ich?', a: 'Fahrzeugschein, Fahrzeugbrief, Ihren Ausweis und alle Schlüssel. Serviceheft und Rechnungen sind hilfreich.' },
    ],
    internalLinksHeading: 'Passende Seiten',
    internalLinks: [
      { href: '/ratgeber/hyundai-probleme-verkauf', label: 'Hyundai: Probleme und Verkauf', context: 'Typische Schwachstellen und der richtige Zeitpunkt.' },
      { href: '/defektes-auto-verkaufen', label: 'Defektes Auto verkaufen', context: 'Vorgehen je nach Schaden.' },
      { href: '/standorte', label: 'Unsere Standorte', context: 'Filialen in Bodenheim und Rüsselsheim.' },
    ],
  },
  guide: {
    slug: 'hyundai-probleme-verkauf',
    seoTitle: 'Hyundai Probleme und Verkauf: Der Praxis-Guide',
    seoDescription:
      'Hyundai Probleme verstehen: 7-Gang-DCT, frühe T-GDI-Motoren und Diesel-Themen. So entscheiden Sie zwischen Reparatur und Verkauf und nutzen die Restgarantie.',
    h1: 'Hyundai Guide: Typische Probleme und der richtige Verkaufszeitpunkt',
    intro:
      'Hyundai schneidet in Pannenstatistiken und Prüfberichten oft ordentlich ab. Einige Themen tauchen in Kaufberatungen aber immer wieder auf, besonders das 7-Gang-Doppelkupplungsgetriebe. Wer sie kennt, kann besser einschätzen, ob sich eine Reparatur lohnt oder ob der Verkauf die bessere Wahl ist.',
    quickFacts: [
      'Das 7-Gang-DCT wird am häufigsten genannt.',
      'Frühe 1.6 T-GDI können mehr Öl verbrauchen.',
      'Diesel haben die üblichen AGR- und Partikelfilter-Themen.',
      'Eine noch laufende Garantie kann den Wert stützen.',
      'Vor einer Reparatur nach Garantie und Kulanz fragen.',
    ],
    sections: [
      {
        heading: '7-Gang-DCT: Das meistgenannte Thema',
        paragraphs: [
          'Beim trockenen 7-Gang-Doppelkupplungsgetriebe in Modellen wie i30, Kona und Tucson mit T-GDI-Motor berichten Kaufberatungen und Halter über Ruckeln beim Anfahren und Kupplungsverschleiß. Häufiges Stop-and-go gilt dabei als besonders belastend.',
          'Nicht jedes Auto ist betroffen. Lassen Sie bei Auffälligkeiten den Fehlerspeicher auslesen und fragen Sie bei jüngeren Fahrzeugen zuerst nach Garantie oder Kulanz.',
        ],
        bullets: ['Ruckeln beim Anfahren beachten', 'Warnmeldungen ernst nehmen', 'Fehlerspeicher auslesen lassen', 'Garantie und Kulanz vorab klären'],
      },
      {
        heading: 'T-GDI-Motoren und Ölverbrauch',
        paragraphs: [
          'Beim 1.6 T-GDI werden für frühe Baujahre höherer Ölverbrauch genannt. Prüfen Sie den Ölstand regelmäßig und halten Sie Wartungsnachweise bereit.',
          'Spätere Motoren gelten beim Ölverbrauch als besser, haben aber einen Benzinpartikelfilter. Häufige Kurzstrecken können hier zu Problemen führen.',
        ],
      },
      {
        heading: 'Diesel: AGR und Partikelfilter',
        paragraphs: [
          'Beim 1.6 CRDi sind Abgasrückführung und Dieselpartikelfilter die üblichen Themen, wie bei vielen modernen Dieseln. Fahrzeuge mit viel Kurzstrecke sind eher betroffen.',
          'Belegte Wartung und Rechnungen zu früheren Arbeiten helfen beim Verkauf.',
        ],
      },
      {
        heading: 'Garantie als Verkaufsargument',
        paragraphs: [
          'Hyundai wirbt bei Neuwagen mit einer fünfjährigen Garantie. Läuft sie bei Ihrem Fahrzeug noch, ist das ein gutes Argument beim Verkauf. Prüfen Sie im Serviceheft das Ablaufdatum und die Bedingungen.',
          'Lückenhafte Wartung kann Garantieansprüche gefährden. Halten Sie Nachweise bereit und klären Sie bei Schäden zuerst, ob die Garantie greift.',
        ],
      },
      {
        heading: 'Reparieren oder verkaufen?',
        paragraphs: [
          'Vergleichen Sie die Reparaturkosten mit dem Wert, den das Auto danach noch hätte, und mit dem Angebot für den aktuellen Zustand. Greift keine Garantie mehr, kann eine Getriebereparatur bei älteren Fahrzeugen schnell den Wert übersteigen.',
          'Mehr zum Vorgehen bei einem Schaden lesen Sie im Ratgeber zum Getriebeschaden.',
        ],
      },
    ],
    faqs: [
      { q: 'Ist jedes 7-Gang-DCT von Hyundai problematisch?', a: 'Nein. Nicht jedes Auto ist betroffen. Bei Ruckeln oder Warnmeldungen sollten Sie es aber prüfen lassen.' },
      { q: 'Lohnt sich eine DCT-Reparatur?', a: 'Das hängt vom Fahrzeugwert und von der Garantie ab. Fragen Sie zuerst nach Garantie und Kulanz und lassen Sie sich danach einen Kostenvoranschlag geben.' },
      { q: 'Muss ich Getriebeprobleme beim Verkauf angeben?', a: 'Ja. Bekannte Mängel müssen Sie angeben, auch wenn das Auto noch fährt.' },
      { q: 'Geht die Garantie auf den Käufer über?', a: 'Das hängt von den Garantiebedingungen ab. Prüfen Sie sie im Serviceheft oder fragen Sie einen Hyundai-Händler.' },
      { q: 'Kaufen Sie auch Hyundai mit Schäden an?', a: 'Ja. Geben Sie den Schaden im Bewertungsformular an. Ist das Auto nicht fahrbereit, rufen Sie uns vor dem Termin an.' },
    ],
    relatedSlugs: ['auto-mit-getriebeschaden-verkaufen', 'auto-mit-motorschaden-verkaufen', 'kilometerstand-scheckheft-vorbesitzer-preis', 'unterlagen-autoverkauf-checkliste'],
    coreLink: '/auto-bewerten',
    ctaBridge: {
      heading: 'Hyundai jetzt verkaufen?',
      text: 'Auf unserer Hyundai-Seite finden Sie den Ablauf und die häufigsten Fragen zum Verkauf.',
      href: '/hyundai-verkaufen',
      label: 'Zur Hyundai-Ankaufseite',
    },
  },
};
