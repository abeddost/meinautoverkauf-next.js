import type { FAQItem } from './faqContent';

export interface BrandKeywordMap {
  primary: string[];
  secondary: string[];
  semantic: string[];
  longTail: string[];
}

export interface BrandLandingCta {
  heading: string;
  text: string;
  label: string;
  href: string;
}

export interface BrandLandingStep {
  title: string;
  text: string;
}

export interface BrandVehicleTypeBlock {
  title: string;
  text: string;
}

export interface BrandComparisonRow {
  criterion: string;
  us: string;
  privateSale: string;
  traditionalDealer: string;
}

export interface BrandInternalLink {
  href: string;
  label: string;
  context: string;
}

export interface BrandLandingContent {
  slugPath: `/${string}`;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: `/${string}`;
  heroHeadline: string;
  heroSubheadline: string;
  h1: string;
  intro: string[];
  benefitHeading: string;
  benefits: string[];
  processHeading: string;
  processSteps: BrandLandingStep[];
  buyTypesHeading: string;
  buyTypes: BrandVehicleTypeBlock[];
  comparisonHeading: string;
  comparisonRows: BrandComparisonRow[];
  trustHeading: string;
  trustPoints: string[];
  ctas: BrandLandingCta[];
  faqHeading: string;
  faqs: FAQItem[];
  internalLinksHeading: string;
  internalLinks: BrandInternalLink[];
}

export interface BrandGuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BrandGuideContent {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  quickFacts: string[];
  sections: BrandGuideSection[];
  faqs: FAQItem[];
  relatedSlugs: string[];
  coreLink: '/auto-bewerten' | '/auto-verkaufen';
  ctaBridge: {
    heading: string;
    text: string;
    href: string;
    label: string;
  };
}

export interface BrandUniquenessRules {
  introAngle: string;
  requiredInsights: string[];
  bannedPatterns: string[];
  minimumSemanticKeywords: number;
}

export interface BrandSeoContent {
  slug: string;
  displayName: string;
  keywordMap: BrandKeywordMap;
  uniquenessRules: BrandUniquenessRules;
  landing: BrandLandingContent;
  guide: BrandGuideContent;
}

export const BRAND_SEO_CONTENT: Record<string, BrandSeoContent> = {
  bmw: {
    slug: 'bmw',
    displayName: 'BMW',
    keywordMap: {
      primary: ['BMW verkaufen', 'BMW Autoankauf', 'BMW Ankauf'],
      secondary: [
        'BMW schnell verkaufen',
        'BMW Ankauf Deutschland',
        'Autoankauf BMW Unfallwagen',
        'BMW Motorschaden verkaufen',
        'BMW gebraucht verkaufen',
        'BMW Export Ankauf',
      ],
      semantic: [
        'BMW Restwert',
        'BMW Ankaufpreis',
        'BMW Fahrzeugbewertung',
        'BMW Direktankauf',
        'BMW Verkauf ohne TÜV',
        'BMW Getriebeschaden',
        'BMW Leasingrückläufer verkaufen',
      ],
      longTail: [
        'BMW mit hoher Laufleistung verkaufen',
        'BMW mit Motorschaden schnell verkaufen',
        'BMW Unfallwagen in Deutschland verkaufen',
        'Wann BMW verkaufen vor teurer Reparatur',
        'BMW Reparatur oder Verkauf Entscheidung',
      ],
    },
    uniquenessRules: {
      introAngle:
        'Der BMW-Fokus startet nicht mit Allgemeinplätzen, sondern mit den realen Kostenrisiken typischer BMW Reparaturen und dem richtigen Verkaufszeitpunkt davor.',
      requiredInsights: [
        'typische BMW Motorfamilien-Risiken abhängig von Baujahr und Wartung',
        'Abwägung Reparaturkosten gegen Restwert in konkreten Euro-Spannen',
        'Unterschied zwischen Daily-Driver BMW und Liebhaberfahrzeug im Ankauf',
      ],
      bannedPatterns: [
        'Copy-Paste Stadtseiten-Einleitungen ohne Markenbezug',
        'leere Superlative ohne belastbaren Nutzwert',
        'identische FAQ-Fragen zwischen Landing und Guide',
      ],
      minimumSemanticKeywords: 14,
    },
    landing: {
      slugPath: '/bmw-verkaufen',
      seoTitle: 'BMW verkaufen | BMW Autoankauf Deutschland',
      seoDescription:
        'BMW verkaufen ohne Stress: faire Bewertung, schnelle Auszahlung, kostenlose Abholung in Deutschland. Auch Unfallwagen und Motorschaden.',
      canonicalPath: '/bmw-verkaufen',
      heroHeadline: 'BMW verkaufen – schnell, fair und sicher',
      heroSubheadline:
        'Direktankauf in ganz Deutschland mit transparenter Bewertung und schneller Auszahlung',
      h1: 'BMW Autoankauf: Ihren BMW schnell und sicher verkaufen',
      intro: [
        'Einen BMW zu verkaufen fühlt sich für viele Halter komplexer an als bei anderen Marken. Der Grund ist einfach: BMW Fahrzeuge sind technisch oft sehr unterschiedlich, die Marktpreise schwanken je nach Motorisierung stark und größere Reparaturen können den Restwert innerhalb weniger Monate deutlich verändern. Genau an diesem Punkt setzen wir an.',
        'Wenn Sie Ihren BMW verkaufen möchten, erhalten Sie bei uns eine klare, nachvollziehbare Bewertung statt pauschaler Lockangebote. Ob gepflegter 3er, 5er mit hoher Laufleistung, X5 mit Getriebeschaden oder 1er ohne TÜV: Wir kaufen Fahrzeuge in fast jedem Zustand und strukturieren den Ablauf so, dass Sie schnell zu einer sicheren Entscheidung kommen.',
        'Unser BMW Ankauf Deutschland richtet sich an Verkäufer, die keine Zeit für endlose Inserate, unzuverlässige Interessenten und riskante Preisverhandlungen haben. Sie bekommen einen planbaren Prozess, einen realistischen Ankaufpreis und eine dokumentierte Auszahlung.',
      ],
      benefitHeading: 'Warum viele Halter ihren BMW an uns verkaufen',
      benefits: [
        'Marktorientierte BMW Bewertung statt Standardpreis: Wir bewerten Motor, Laufleistung, Wartungshistorie und Reparaturrisiko differenziert.',
        'Schnelle Abwicklung: Von der Erstbewertung bis zur Übergabe vergehen häufig nur 24 bis 48 Stunden.',
        'Ankauf auch bei Problemen: Wir kaufen BMW Unfallwagen, BMW mit Motorschaden, Getriebeschaden und Fahrzeuge ohne TÜV.',
        'Deutschlandweiter Service: BMW Ankauf in Ballungsräumen und ländlichen Regionen mit optionaler Abholung.',
        'Rechtssichere Übergabe: Vertrag, Fahrzeugunterlagen, Schlüsselanzahl und Zahlung werden sauber dokumentiert.',
        'Planbarer Abschluss ohne Inseratstress: Keine Besichtigungsmarathons, keine Scheininteressenten, kein Nachverhandlungschaos.',
      ],
      processHeading: 'BMW schnell verkaufen in 3 klaren Schritten',
      processSteps: [
        {
          title: '1. Fahrzeugdaten übermitteln',
          text: 'Sie senden uns die wichtigsten BMW Daten: Modell, Baujahr, Laufleistung, Zustand und bekannte Mängel. Für eine präzisere Einschätzung helfen Servicehistorie und Reparaturnachweise.',
        },
        {
          title: '2. Transparente Bewertung und Angebot',
          text: 'Wir erstellen ein realistisches Angebot auf Basis aktueller Marktnachfrage und technischer Risikofaktoren. So wissen Sie früh, ob sich ein Verkauf jetzt lohnt oder ob ein anderer Zeitpunkt sinnvoller ist.',
        },
        {
          title: '3. Übergabe und Auszahlung',
          text: 'Nach Terminabstimmung erfolgt die Fahrzeugübergabe inklusive Vertragsdokumentation. Die Auszahlung wird nachvollziehbar und zügig abgewickelt, auf Wunsch mit Abholung.',
        },
      ],
      buyTypesHeading: 'Welche BMW wir ankaufen',
      buyTypes: [
        {
          title: 'BMW Unfallwagen verkaufen',
          text: 'Auch bei dokumentierten Unfallschäden prüfen wir Restwert und Verwertbarkeit fair. Entscheidend sind Schadenbild, Reparaturstand und Gesamtzustand.',
        },
        {
          title: 'BMW Motorschaden verkaufen',
          text: 'Wenn hohe Instandsetzungskosten drohen, ist der Direktverkauf oft wirtschaftlicher als eine unklare Reparaturkette.',
        },
        {
          title: 'BMW mit Getriebeschaden',
          text: 'Automatikprobleme, Schaltverzögerungen oder Notlauf sind bei einigen Baureihen ein klarer Verkaufsanlass. Wir kaufen auch solche Fahrzeuge.',
        },
        {
          title: 'BMW mit hoher Laufleistung',
          text: 'Laufleistung allein ist kein Ausschlusskriterium. Wartungszustand, Motorvariante und Karosseriezustand sind für den Ankaufpreis entscheidend.',
        },
        {
          title: 'BMW ohne TÜV',
          text: 'Abgelaufene HU/AU ist häufig mit Folgekosten verbunden. Wir bewerten den Zustand transparent und kaufen auch ohne neuen TÜV.',
        },
        {
          title: 'Firmenwagen und Leasingrückläufer',
          text: 'Wir unterstützen gewerbliche Verkäufer mit klaren Prozessen bei Flottenfahrzeugen, Einzelwagen und Leasingrückläufern.',
        },
      ],
      comparisonHeading: 'Warum unser BMW Ankauf oft die bessere Option ist',
      comparisonRows: [
        {
          criterion: 'Preisfindung',
          us: 'Marktdaten + BMW-spezifische Risikoanalyse',
          privateSale: 'Oft emotionale Verhandlung und hoher Zeitaufwand',
          traditionalDealer: 'Häufig pauschale Abschläge mit geringer Transparenz',
        },
        {
          criterion: 'Zeit bis Abschluss',
          us: 'Meist 24 bis 48 Stunden nach Klärung der Daten',
          privateSale: 'Tage bis Wochen mit unklarer Abschlusswahrscheinlichkeit',
          traditionalDealer: 'Terminabhängig, teilweise längere Entscheidungswege',
        },
        {
          criterion: 'Fahrzeuge mit Defekten',
          us: 'Ankauf auch bei Motorschaden, Unfall und ohne TÜV',
          privateSale: 'Schwieriger Verkauf, starke Nachverhandlung',
          traditionalDealer: 'Oft restriktiv oder sehr niedrige Angebote',
        },
        {
          criterion: 'Abwicklungssicherheit',
          us: 'Klare Vertrags- und Zahlungsdokumentation',
          privateSale: 'Höheres Risiko bei Zahlung und Gewährleistungsstreit',
          traditionalDealer: 'Sicher, aber nicht immer flexibel bei Sonderfällen',
        },
      ],
      trustHeading: 'Vertrauen durch klare Zusagen',
      trustPoints: [
        'Schnelle Auszahlung mit nachvollziehbarer Zahlungsdokumentation',
        'Kostenlose Abholung in vielen Regionen Deutschlands',
        'Faire Bewertung mit nachvollziehbaren Preisfaktoren',
        'Ankauf in nahezu jedem Zustand ohne versteckte Zusatzkosten',
        'Erreichbarer Support für Rückfragen vor und nach dem Termin',
      ],
      ctas: [
        {
          heading: 'BMW jetzt kostenlos bewerten',
          text: 'Starten Sie mit einer unverbindlichen Einschätzung und sehen Sie sofort, ob ein Verkauf aktuell sinnvoll ist.',
          label: 'Jetzt BMW bewerten',
          href: '/auto-bewerten',
        },
        {
          heading: 'Direkt den Verkaufsprozess starten',
          text: 'Wenn Sie bereits verkaufen möchten, führen wir Sie strukturiert durch Termin, Übergabe und Auszahlung.',
          label: 'BMW Verkauf starten',
          href: '/auto-verkaufen',
        },
        {
          heading: 'BMW Probleme zuerst prüfen',
          text: 'Wenn Sie zwischen Reparatur und Verkauf abwägen, hilft unser BMW Guide mit konkreten Entscheidungskriterien.',
          label: 'Zum BMW Guide',
          href: '/ratgeber/bmw-probleme-verkauf',
        },
      ],
      faqHeading: 'FAQ: BMW verkaufen, Ankauf und Abwicklung',
      faqs: [
        {
          q: 'Wie schnell kann ich meinen BMW verkaufen?',
          a: 'Nach vollständigen Fahrzeugdaten ist ein Abschluss oft innerhalb von 24 bis 48 Stunden möglich. Der genaue Zeitraum hängt von Zustand, Dokumentenlage und Terminverfügbarkeit ab.',
        },
        {
          q: 'Kaufen Sie auch BMW mit Motorschaden oder Getriebeschaden?',
          a: 'Ja. Wir kaufen auch Fahrzeuge mit größeren technischen Defekten. Entscheidend ist eine transparente Zustandsbeschreibung, damit das Angebot realistisch und belastbar bleibt.',
        },
        {
          q: 'Ist der BMW Ankauf auch ohne TÜV möglich?',
          a: 'Ja. Ein fehlender TÜV schließt den Verkauf nicht aus. Wir berücksichtigen den technischen Zustand und die voraussichtlichen Folgekosten in der Bewertung.',
        },
        {
          q: 'Welche BMW Modelle kaufen Sie an?',
          a: 'Wir kaufen nahezu alle Baureihen: 1er, 2er, 3er, 4er, 5er, 6er, 7er, 8er, X-Modelle, Z-Modelle sowie M-Varianten. Auch ältere und beschädigte Fahrzeuge sind möglich.',
        },
        {
          q: 'Wie läuft die Auszahlung beim BMW Verkauf?',
          a: 'Die Auszahlung erfolgt dokumentiert und nachvollziehbar, üblicherweise per Banküberweisung. Zeitpunkt und Ablauf werden vor der Übergabe klar abgestimmt.',
        },
        {
          q: 'Muss ich meinen BMW selbst bringen?',
          a: 'Nicht zwingend. In vielen Regionen bieten wir eine Abholung an. Details klären wir im Rahmen der Terminplanung.',
        },
        {
          q: 'Ist das Angebot verbindlich und kostenlos?',
          a: 'Die Erstbewertung ist kostenlos und unverbindlich. Ein konkretes Angebot basiert auf den übermittelten Fahrzeugdaten und gilt innerhalb des vereinbarten Zeitfensters.',
        },
        {
          q: 'Kann ich auch einen BMW Firmenwagen oder Leasingrückläufer verkaufen?',
          a: 'Ja. Wir begleiten auch gewerbliche Verkäufe und Leasingrückläufer mit klaren Anforderungen an Unterlagen, Eigentumsnachweise und Terminabwicklung.',
        },
      ],
      internalLinksHeading: 'Weiterführende Seiten',
      internalLinks: [
        {
          href: '/auto-bewerten',
          label: 'BMW kostenlos bewerten',
          context: 'Für eine schnelle Preisorientierung vor dem Verkauf.',
        },
        {
          href: '/auto-verkaufen',
          label: 'Verkaufsprozess im Detail',
          context: 'Wenn Sie sofort in die Abwicklung starten möchten.',
        },
        {
          href: '/ratgeber/bmw-probleme-verkauf',
          label: 'BMW Guide: Probleme und Verkaufstiming',
          context: 'Für die Entscheidung Reparatur vs. Verkauf.',
        },
      ],
    },
    guide: {
      slug: 'bmw-probleme-verkauf',
      seoTitle: 'BMW Probleme und Verkauf: Der Praxis-Guide 2026',
      seoDescription:
        'BMW Probleme verstehen, Reparaturkosten einschätzen und den besten Verkaufszeitpunkt finden. Mit Modellbeispielen und klarer Verkaufsempfehlung.',
      h1: 'BMW Guide: Probleme erkennen und zum richtigen Zeitpunkt verkaufen',
      intro:
        'BMW steht für Fahrdynamik, Premiumanspruch und starke Motoren. Gleichzeitig fragen sich viele Halter nach einigen Jahren: Reparieren, weiterfahren oder jetzt verkaufen? Dieser Leitfaden verbindet technische Schwachstellen, Kostenrisiken und Marktlogik, damit Sie Ihren BMW nicht erst nach der teuersten Reparatur verkaufen.',
      quickFacts: [
        'Viele BMW Verkaufentscheidungen entstehen vor großen Reparaturen, nicht erst nach dem Defekt.',
        'Motor-, Getriebe- und Elektronikthemen hängen stark von Baureihe, Pflege und Fahrprofil ab.',
        'Der beste Verkaufszeitpunkt liegt oft vor hohen Folgekosten ab 120.000 bis 180.000 km.',
        'Ein gut dokumentierter Wartungszustand stabilisiert den Verkaufspreis deutlich.',
        'Bei größeren Schäden ist der Direktankauf häufig wirtschaftlicher als unsichere Reparaturen.',
        'Wer früh entscheidet, verkauft in der Regel mit weniger Preisdruck und mehr Verhandlungsspielraum.',
      ],
      sections: [
        {
          heading: 'Warum verkaufen viele BMW Halter ihr Fahrzeug früher als geplant?',
          paragraphs: [
            'Der Auslöser ist selten nur das Alter. In der Praxis kommen mehrere Faktoren zusammen: steigende Werkstattkosten, unsichere Restwertentwicklung und die Sorge, dass ein bekannter Schwachpunkt kurz vor dem nächsten Wartungsintervall teuer wird. Besonders bei Fahrzeugen außerhalb der Garantiephase steigt die Sensibilität für größere Positionen wie Steuerkette, Turbolader, Injektoren oder Automatikgetriebe-Reparaturen.',
            'Hinzu kommt der Nutzungswechsel. Wer täglich pendelt, benötigt oft maximale Verfügbarkeit und kalkulierbare Kosten. Ein BMW, der technisch anspruchsvoller wird, passt dann nicht mehr zur Alltagssituation. Genau in diesem Moment ist der Verkauf häufig sinnvoller als ein weiteres Jahr mit unkalkulierbaren Reparaturrisiken.',
            'Auch wirtschaftlich ist Timing entscheidend: Ein technisch noch fahrbereites Fahrzeug mit transparent dokumentierter Historie erzielt meist ein stabileres Angebot als ein Fahrzeug, das bereits mit Folgeschäden in den Markt geht.',
          ],
          bullets: [
            'Haupttreiber: Kostenunsicherheit statt bloßes Fahrzeugalter',
            'Entscheidungsfenster oft vor dem nächsten großen Serviceblock',
            'Früher Verkauf reduziert Preisdruck durch akute Defekte',
          ],
        },
        {
          heading: 'Welche BMW Probleme treten häufig auf?',
          paragraphs: [
            'BMW häufige Fehler unterscheiden sich je nach Motorfamilie und Baujahr. Bei verschiedenen Benzin- und Dieselreihen treten wiederkehrend Themen rund um Steuertrieb, Ölverbrauch, Kühlkreislauf und thermische Belastung auf. Nicht jeder Hinweis bedeutet automatisch einen Totalschaden, aber die Kosten steigen schnell, wenn frühe Symptome ignoriert werden.',
            'Bei manchen Fahrzeugen zeigen sich zuerst kleine Warnzeichen: unruhiger Leerlauf, erhöhter Ölverbrauch, sporadische Motorkontrollleuchten oder Leistungsverlust unter Last. Solche Signale werden oft aufgeschoben, bis zusätzliche Bauteile betroffen sind. Dadurch wird eine ursprünglich überschaubare Maßnahme zu einer größeren Reparaturkette.',
            'Für die Verkaufsentscheidung ist weniger wichtig, ob ein einzelner Fehler auftritt, sondern wie wahrscheinlich teure Folgereparaturen im nächsten Nutzungsjahr sind. Genau diese Perspektive ist für BMW Zuverlässigkeit im Alltag relevanter als reine Werksangaben.',
          ],
        },
        {
          heading: 'Motorprobleme bei BMW: Steuerkette, Ölverbrauch und Nebenaggregate',
          paragraphs: [
            'Bei bestimmten BMW Baureihen und Motorvarianten wird häufig über Steuerketten-Themen berichtet. Entscheidend sind Laufleistung, Wartungsintervalle, Ölqualität und die Frage, ob bereits Vorarbeiten dokumentiert wurden. Eine präventive Instandsetzung kann sinnvoll sein, ist aber kostenintensiv und wirtschaftlich nicht in jedem Fall attraktiv.',
            'Ölverbrauch ist ein weiteres zentrales Thema. Wenn der Verbrauch spürbar steigt und zugleich Undichtigkeiten, Ablagerungen oder Abgasauffälligkeiten auftreten, sollten Halter die Reparaturkosten realistisch gegen den aktuellen Marktwert rechnen. Wer in dieser Phase verkauft, vermeidet häufig den Übergang von einem kalkulierbaren zu einem unkalkulierbaren Kostenbild.',
            'Zusätzlich belasten defekte Wasserpumpen, Thermostate oder Turbolader den Gesamtaufwand. Einzelne Reparaturen sind machbar, doch die Kombination mehrerer Baustellen innerhalb kurzer Zeit spricht häufig für einen Verkauf statt für weitere Investitionen.',
          ],
          bullets: [
            'Frühe Symptome ernst nehmen: Leerlauf, Öl, Temperatur, Leistung',
            'Nicht nur Einzelkosten betrachten, sondern Folgereparatur-Risiko',
            'Dokumentierte Wartung verbessert Verkaufschancen deutlich',
          ],
        },
        {
          heading: 'Getriebe- und Elektronikprobleme: Warum sie den Verkauf oft beschleunigen',
          paragraphs: [
            'Automatikgetriebe-Probleme zeigen sich häufig durch Schaltverzögerungen, Ruckeln oder Notlauf. Viele Halter unterschätzen, wie schnell aus anfänglichen Auffälligkeiten ein größerer Eingriff entsteht. Spätestens wenn zusätzliche Fehler aus Steuergeräten hinzukommen, steigen Kosten und Standzeiten deutlich.',
            'Elektronikthemen betreffen bei BMW oft Komfort- und Assistenzsysteme, Sensorik oder sporadische Kommunikationsfehler im Bordnetz. Einzelne Fehler sind nicht zwingend kritisch, die Summe mehrerer kleiner Defekte erhöht jedoch den Wartungsdruck und senkt das Vertrauen in die Alltagstauglichkeit.',
            'Für die Entscheidung Reparatur oder Verkauf ist wichtig, ob ein klarer, einmaliger Defekt vorliegt oder ein Muster aus wiederkehrenden Problemen erkennbar wird. Bei wiederkehrenden Fehlerbildern ist der Direktverkauf häufig die risikoärmere Option.',
          ],
        },
        {
          heading: 'Welche BMW Modelle gelten als anfälliger?',
          paragraphs: [
            'Die Frage "Welche BMW Modelle sind anfällig?" lässt sich nur differenziert beantworten. In der Praxis werden bestimmte Generationen des 1er, 3er, 5er und ausgewählte SUV-Modelle häufiger mit Motor- oder Elektronikthemen genannt, während andere Konfigurationen bei guter Wartung sehr stabil laufen. Entscheidend ist daher nicht nur das Modell, sondern die konkrete Kombination aus Baujahr, Motorcode, Laufleistung und Servicehistorie.',
            'Beispiele aus dem Markt zeigen: Ein gut gepflegter BMW mit lückenloser Historie kann selbst bei höherer Laufleistung attraktiver sein als ein vermeintlich unkritisches Modell mit Wartungslücken. Umgekehrt kann ein populäres Modell bei dokumentierten Problemserien im Ankauf schneller Preisabschläge erhalten.',
            'Wer seinen BMW verkaufen will, sollte deshalb nicht auf pauschale Forenurteile setzen, sondern den individuellen Fahrzeugzustand und den aktuellen Nachfragemarkt betrachten.',
          ],
          bullets: [
            'Nicht Modellname allein, sondern Baujahr + Motor + Historie entscheiden',
            'Wartungslücken wirken sich stärker aus als oft angenommen',
            'Zustandsbasierte Bewertung ist genauer als pauschale Listen',
          ],
        },
        {
          heading: 'Wann ist der beste Zeitpunkt, einen BMW zu verkaufen?',
          paragraphs: [
            'Ein sinnvoller Verkaufszeitpunkt liegt häufig vor bekannten Kostensprüngen. In vielen Fällen ist das der Bereich vor großen Reparaturblöcken, vor dem Ende wichtiger Verschleißzyklen oder vor absehbaren TÜV-bedingten Investitionen. Auch Laufleistungsschwellen können relevant sein, wenn ab einer bestimmten Marke der Käuferkreis kleiner wird oder stärkere Preisabschläge einsetzt.',
            'Typisch sind Entscheidungsfenster zwischen 120.000 und 180.000 km, abhängig von Modell und Nutzung. Wer bis nach einer schweren Reparatur wartet, investiert oft Geld, das sich im Verkaufspreis nicht vollständig zurückholt. Deshalb lohnt sich eine nüchterne Rechnung, bevor die erste große Rechnung auf dem Werkstatttisch liegt.',
            'Wenn der BMW noch fahrbereit ist, Unterlagen vollständig sind und die Historie nachvollziehbar bleibt, ist die Verhandlungsposition in der Regel deutlich besser als bei akutem Defektverkauf unter Zeitdruck.',
          ],
        },
        {
          heading: 'BMW Motorschaden Kosten und typische Reparaturbereiche',
          paragraphs: [
            'BMW Motorschaden Kosten können je nach Schadensbild von mittleren vierstelligen Beträgen bis in deutlich höhere Bereiche reichen. Bereits Teilreparaturen an Steuertrieb, Turbolader oder Einspritzsystem können erheblich sein. Kommen weitere Positionen hinzu, wird die wirtschaftliche Grenze vieler Halter schnell erreicht.',
            'Auch bei Getriebe- und Elektronikthemen sind die Kosten stark streuend. Entscheidend ist daher eine belastbare Priorisierung: Welche Reparatur ist sicher nötig, welche ist wahrscheinlich in den nächsten Monaten und wie stark beeinflusst jede Maßnahme den realen Wiederverkaufswert?',
            'Genau an dieser Stelle trennt sich die strategische von der emotionalen Entscheidung. Wer Kosten, Restwert und Risiko systematisch gegenüberstellt, kann klar erkennen, ob weitere Investitionen sinnvoll sind oder ob ein Verkauf die bessere Bilanz liefert.',
          ],
          bullets: [
            'Kosten nicht isoliert, sondern als Gesamtpaket mit Folgerisiken bewerten',
            'Restwert nach Reparatur realistisch statt optimistisch ansetzen',
            'Bei mehreren offenen Baustellen frühzeitig Verkauf prüfen',
          ],
        },
        {
          heading: 'Reparieren oder verkaufen: Welche Entscheidung ist wirtschaftlich sinnvoll?',
          paragraphs: [
            'Eine praxistaugliche Entscheidung nutzt drei Fragen: Erstens, wie hoch ist die sichere Mindestinvestition? Zweitens, wie hoch ist das Risiko weiterer Defekte innerhalb der nächsten 12 Monate? Drittens, wie stark steigt der erzielbare Verkaufspreis wirklich nach der Reparatur? Wenn der erwartete Mehrerlös die Investition nicht klar übersteigt, ist Verkauf meist die stabilere Option.',
            'Zusätzlich sollten Halter die indirekten Kosten berücksichtigen: Standzeiten, Ersatzmobilität, Terminaufwand und Planungsunsicherheit. Gerade bei beruflich genutzten Fahrzeugen ist diese Komponente oft teurer als die sichtbare Werkstattrechnung.',
            'Wer diese Faktoren nüchtern zusammenführt, trifft in der Regel bessere Entscheidungen als mit dem reinen Bauchgefühl. Genau deshalb lohnt sich ein früher Marktcheck für den eigenen BMW.',
          ],
        },
        {
          heading: 'Wie maximieren Sie den Verkaufspreis Ihres BMW trotz Risiko?',
          paragraphs: [
            'Der wichtigste Hebel ist Transparenz. Vollständige Unterlagen, ehrliche Mängelangaben und nachvollziehbare Wartung reduzieren Unsicherheit auf Käuferseite und stabilisieren den Preis. Kurzfristige Kosmetik ohne technische Klarheit bringt deutlich weniger als eine saubere Dokumentation.',
            'Praktisch bewährt haben sich fünf Schritte: Fahrzeugdaten exakt vorbereiten, bekannte Probleme offen benennen, Wartungsnachweise sortieren, realistische Preisziele setzen und ein Angebot mit sauberem Ablauf wählen. Damit vermeiden Sie aggressive Nachverhandlungen und beschleunigen den Abschluss.',
            'Wenn Sie parallel mehrere Optionen prüfen möchten, starten Sie mit einer unverbindlichen Bewertung und entscheiden danach in Ruhe zwischen Reparatur, Direktankauf oder alternativer Vermarktung.',
          ],
          bullets: [
            'Unterlagen vollständig: Serviceheft, Rechnungen, HU-Berichte, Schlüssel',
            'Mängel offen kommunizieren statt späteren Preissturz riskieren',
            'Marktdatenbasiert verkaufen, nicht mit Wunschpreis starten',
          ],
        },
        {
          heading: 'Warum der BMW Direktankauf oft besser als der Privatverkauf ist',
          paragraphs: [
            'Der Privatverkauf kann im Idealfall etwas mehr Erlös bringen, aber gerade bei BMW mit technischem Klärungsbedarf steigt das Risiko deutlich: zeitraubende Besichtigungen, schwierige Preisgespräche und Unsicherheit bei Zahlungsabwicklung und Gewährleistungsthemen. Der tatsächliche Netto-Vorteil schrumpft oft schneller als erwartet.',
            'Ein strukturierter Autoankauf bietet dagegen Geschwindigkeit, klare Dokumentation und planbare Auszahlung. Besonders bei Fahrzeugen mit Motorschaden, Getriebethemen, hoher Laufleistung oder ohne TÜV ist dieser Weg für viele Halter die wirtschaftlich ruhigere Lösung.',
            'Wenn Sie aktuell zwischen Reparatur und Verkauf stehen, ist ein realistischer Ankaufvergleich oft der schnellste Weg zu einer belastbaren Entscheidung.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Welche BMW Probleme sind beim Verkauf besonders relevant?',
          a: 'Vor allem wiederkehrende Motor-, Getriebe- und Elektronikthemen sind entscheidend, weil sie Folgekosten und Preisrisiko beeinflussen. Transparente Angaben dazu verbessern die Verkaufsplanung.',
        },
        {
          q: 'Ab welcher Laufleistung sollte ich einen BMW Verkauf stärker prüfen?',
          a: 'Häufig wird zwischen 120.000 und 180.000 km neu bewertet, abhängig von Modell, Wartung und anstehenden Reparaturen. Eine feste Grenze gibt es nicht, aber in diesem Bereich steigt oft der Kosten- und Abschlagsdruck.',
        },
        {
          q: 'Lohnt sich Reparatur bei einem BMW Motorschaden noch?',
          a: 'Das hängt von Schadensumfang, Folgerisiko und dem erzielbaren Mehrerlös nach Reparatur ab. Wenn Investition und Risiko den realen Mehrerlös nicht klar übersteigen, ist Verkauf häufig sinnvoller.',
        },
        {
          q: 'Kann ich einen BMW mit Defekten trotzdem fair verkaufen?',
          a: 'Ja. Mit sauberer Zustandsbeschreibung, vollständigen Unterlagen und realistischer Preislogik lassen sich auch Fahrzeuge mit Defekten strukturiert verkaufen.',
        },
        {
          q: 'Warum wechseln viele BMW Halter vom Privatverkauf zum Direktankauf?',
          a: 'Weil der Direktankauf bei komplexen Fahrzeugzuständen oft schneller, planbarer und rechtssicherer ist. Der vermeintliche Preisvorteil im Privatverkauf wird häufig durch Aufwand und Risiko relativiert.',
        },
      ],
      relatedSlugs: [
        'autoankauf-mit-motorschaden',
        'kilometerstand-scheckheft-vorbesitzer-preis',
        'auto-online-verkaufen-sofort-auszahlung',
        'online-autoankauf-ablauf-7-schritte',
      ],
      coreLink: '/auto-verkaufen',
      ctaBridge: {
        heading: 'BMW verkaufen statt weiter warten?',
        text: 'Wenn Sie eine klare Entscheidung wollen, prüfen Sie jetzt Ihren BMW Ankaufpreis und starten Sie bei Bedarf direkt den Verkaufsprozess.',
        href: '/bmw-verkaufen',
        label: 'BMW Ankaufseite öffnen',
      },
    },
  },
};

export const BRAND_SEO_SLUGS = Object.keys(BRAND_SEO_CONTENT);

export const getBrandSeoContent = (brandSlug: string): BrandSeoContent | null => {
  return BRAND_SEO_CONTENT[brandSlug] ?? null;
};

export const isBrandSeoSlug = (brandSlug: string): boolean => {
  return Boolean(BRAND_SEO_CONTENT[brandSlug]);
};
