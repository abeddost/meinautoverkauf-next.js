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
  mercedes: {
    slug: 'mercedes',
    displayName: 'Mercedes-Benz',
    keywordMap: {
      primary: ['Mercedes verkaufen', 'Mercedes Ankauf', 'Mercedes Autoankauf'],
      secondary: [
        'Mercedes schnell verkaufen',
        'Mercedes Ankauf Deutschland',
        'Autoankauf Mercedes Unfallwagen',
        'Mercedes Motorschaden verkaufen',
        'Mercedes gebraucht verkaufen',
        'Mercedes Export Ankauf',
      ],
      semantic: [
        'Mercedes-Benz Ankauf',
        'Mercedes Restwert',
        'Mercedes Fahrzeugbewertung',
        'Mercedes Premium Ankauf',
        'Mercedes AMG verkaufen',
        'Mercedes E-Klasse verkaufen',
        'Mercedes S-Klasse verkaufen',
        'Mercedes ohne TUV verkaufen',
      ],
      longTail: [
        'Mercedes mit hoher Laufleistung verkaufen',
        'Mercedes 7G-Tronic Probleme verkaufen',
        'Mercedes AIRMATIC Defekt verkaufen',
        'Wann Mercedes vor teurer Reparatur verkaufen',
        'Mercedes Reparatur oder Verkauf Entscheidung',
      ],
    },
    uniquenessRules: {
      introAngle:
        'Der Mercedes-Fokus startet mit Werterhalt im Premiumsegment: nicht nur Defekte, sondern Timing vor hoher Abschreibung und teuren Komfortsystem-Reparaturen.',
      requiredInsights: [
        'AIRMATIC- und Elektronikrisiken bei alternden Premiummodellen',
        '7G-Tronic und Motornebenkosten im Kontext von Restwert und Haltedauer',
        'Preislogik fur AMG-, E-Klasse- und S-Klasse-Fahrzeuge im Direktankauf',
      ],
      bannedPatterns: [
        'identische Einleitung wie BMW oder Stadtseiten',
        'pauschale Aussagen zur Zuverlassigkeit ohne Modellkontext',
        'gleiche FAQ-Fragen zwischen Mercedes Landing und Mercedes Guide',
      ],
      minimumSemanticKeywords: 14,
    },
    landing: {
      slugPath: '/mercedes-verkaufen',
      seoTitle: 'Mercedes verkaufen | Mercedes Ankauf Deutschland',
      seoDescription:
        'Mercedes verkaufen mit Premium-Abwicklung: faire Bewertung, schnelle Auszahlung, kostenlose Abholung in Deutschland. Auch AMG, Unfallwagen und Motorschaden.',
      canonicalPath: '/mercedes-verkaufen',
      heroHeadline: 'Mercedes verkaufen mit Premium-Service und klarer Bewertung',
      heroSubheadline:
        'Mercedes Ankauf Deutschland fur gepflegte Modelle, AMG, Firmenwagen und Fahrzeuge mit Defekten',
      h1: 'Mercedes Autoankauf: Ihren Mercedes schnell, sicher und professionell verkaufen',
      intro: [
        'Ein Mercedes-Benz ist fur viele Halter mehr als ein Alltagsfahrzeug. Gerade deshalb ist der Verkauf oft anspruchsvoller: Der Markt erwartet bei Premiumfahrzeugen eine saubere Historie, technische Transparenz und eine realistische Preislogik. Gleichzeitig steigen bei alternden Modellen die Risiken durch teure Komfort- und Antriebstechnik. Wer zu spat entscheidet, verliert nicht nur Zeit, sondern haufig auch spurbare Werte.',
        'Wenn Sie Ihren Mercedes verkaufen mochten, zahlen zwei Faktoren besonders: ein fairer Ankaufpreis und ein professioneller Ablauf ohne Unsicherheit. Genau hier setzen wir an. Unser Mercedes Ankauf bewertet nicht pauschal nach Listenwert, sondern differenziert nach Modellreihe, Ausstattung, Wartung, Laufleistung und technischem Zustand. So erhalten Sie ein Angebot, das zur realen Marktsituation passt.',
        'Ob C-Klasse mit hoher Laufleistung, E-Klasse als Firmenfahrzeug, S-Klasse mit bevorstehenden Reparaturen oder AMG mit besonderer Ausstattung: Wir kaufen Mercedes in nahezu jedem Zustand. Unser Ziel ist ein Abschluss, der wirtschaftlich sinnvoll, rechtssicher und planbar ist.',
        'Viele Privatverkaufer unterschatzen den Aufwand im Premiumsegment. Mehrere Besichtigungen, aggressive Nachverhandlungen und Zweifel an Zahlungsseriositat kosten Nerven und Zeit. Mit unserem Mercedes Autoankauf umgehen Sie diese Reibung und erhalten eine klare Struktur vom Erstkontakt bis zur Auszahlung.',
      ],
      benefitHeading: 'Warum Mercedes-Halter unseren Ankauf wahlen',
      benefits: [
        'Premiumgerechte Bewertung: Wir berucksichtigen Baureihe, Ausstattungslinie, Antrieb, Wartungshistorie und bekannte Kostenrisiken statt pauschaler Abschlage.',
        'Spezialisierung auf hochwertige Fahrzeuge: Auch Mercedes AMG sowie E-Klasse und S-Klasse werden differenziert bewertet.',
        'Ankauf bei Defekten: Wir kaufen auch Mercedes Unfallwagen, Fahrzeuge mit Motorschaden, Getriebeschaden oder ohne TUV.',
        'Schneller Prozess: Nach vollstandigen Daten ist ein strukturierter Abschluss oft in 24 bis 48 Stunden moglich.',
        'Bundesweiter Service: Mercedes Ankauf Deutschland mit optionaler Abholung und klarer Terminabstimmung.',
        'Rechtssichere Abwicklung: Vertrag, Fahrzeugstatus, Schlusselanzahl und Auszahlung werden transparent dokumentiert.',
      ],
      processHeading: 'Mercedes schnell verkaufen in 3 klaren Schritten',
      processSteps: [
        {
          title: '1. Mercedes-Daten strukturiert ubermitteln',
          text: 'Sie senden Modell, Baujahr, Laufleistung, Motorisierung, Ausstattungsumfang und bekannte Mangel. Bei Premiumfahrzeugen helfen Servicebelege und Rechnungen besonders fur eine belastbare Bewertung.',
        },
        {
          title: '2. Realistische Bewertung und Angebot erhalten',
          text: 'Wir bewerten Ihren Mercedes auf Basis aktueller Nachfrage, technischer Risiken und Restwertlogik im Premiumsegment. Sie erhalten ein nachvollziehbares Angebot statt eines Lockpreises mit spateren Abschlagen.',
        },
        {
          title: '3. Ubergabe, Vertrag und Auszahlung',
          text: 'Nach Terminabstimmung erfolgt die Ubergabe mit sauberer Dokumentation. Die Auszahlung wird sicher und nachvollziehbar abgewickelt, auf Wunsch inklusive Abholung.',
        },
      ],
      buyTypesHeading: 'Welche Mercedes wir ankaufen',
      buyTypes: [
        {
          title: 'Mercedes Unfallwagen verkaufen',
          text: 'Auch bei dokumentierten Unfallschaden prufen wir den Restwert fair und transparent - entscheidend sind Schadenbild, Reparaturstand und Gesamtzustand.',
        },
        {
          title: 'Mercedes Motorschaden verkaufen',
          text: 'Wenn teure Motorinstandsetzungen drohen, ist der Direktverkauf oft wirtschaftlicher als unklare Reparaturketten.',
        },
        {
          title: 'Mercedes mit Getriebeschaden',
          text: 'Probleme mit Schaltqualitat, Notlauf oder Verzogerungen - auch Fahrzeuge mit 7G-Tronic-Themen konnen wir ankaufen.',
        },
        {
          title: 'Mercedes mit hoher Laufleistung',
          text: 'Hohe Kilometer sind kein Ausschluss. Entscheidend sind Pflegezustand, Historie, Modellreihe und technisches Risiko im nachsten Nutzungsjahr.',
        },
        {
          title: 'Mercedes ohne TUV',
          text: 'Abgelaufene HU/AU fuhrt oft zu zusatzlichen Kosten. Wir bewerten den Zustand transparent und kaufen auch ohne neuen TUV.',
        },
        {
          title: 'Leasingrucklaufer und Firmenwagen',
          text: 'Wir begleiten gewerbliche Mercedes-Verkaufe mit klaren Prozessen fur Unterlagen, Termine und Zahlungsdokumentation.',
        },
      ],
      comparisonHeading: 'Warum unser Mercedes Ankauf oft die bessere Wahl ist',
      comparisonRows: [
        {
          criterion: 'Bewertung hochwertiger Fahrzeuge',
          us: 'Premium-orientierte Bewertung mit Modell- und Ausstattungsbezug',
          privateSale: 'Haufig Diskussionen uber Zustand und Ausstattung',
          traditionalDealer: 'Oft pauschale Inzahlungnahme mit konservativen Abschlagen',
        },
        {
          criterion: 'Zeit bis zum Abschluss',
          us: 'Meist 24 bis 48 Stunden nach Datenklarung',
          privateSale: 'Tage bis Wochen mit unsicherem Ergebnis',
          traditionalDealer: 'Abhangig von Terminlage und interner Freigabe',
        },
        {
          criterion: 'Defekte Premiumtechnik',
          us: 'Ankauf auch bei AIRMATIC-, Motor- oder Getriebeproblemen',
          privateSale: 'Hohe Skepsis und starke Nachverhandlungen',
          traditionalDealer: 'Haufig restriktiv bei Risiko-Fahrzeugen',
        },
        {
          criterion: 'Abwicklungssicherheit',
          us: 'Klare Vertrags- und Zahlungsdokumentation',
          privateSale: 'Erhohtes Risiko bei Zahlung und Haftungsfragen',
          traditionalDealer: 'Formal sicher, aber weniger flexibel in Sonderfallen',
        },
      ],
      trustHeading: 'Vertrauen durch professionelle Premium-Abwicklung',
      trustPoints: [
        'Sichere Auszahlung mit nachvollziehbarem Zahlungsnachweis',
        'Kostenlose Abholung in vielen Regionen Deutschlands',
        'Faire Preisfindung ohne versteckte Zusatzkosten',
        'Transparente Kommunikation zu Zustand, Angebot und Ablauf',
        'Erreichbarer Support fur Ruckfragen vor und nach dem Termin',
      ],
      ctas: [
        {
          heading: 'Mercedes jetzt kostenlos bewerten',
          text: 'Starten Sie mit einer unverbindlichen Ersteinschatzung und prufen Sie Ihren aktuellen Mercedes Restwert.',
          label: 'Jetzt Mercedes bewerten',
          href: '/auto-bewerten',
        },
        {
          heading: 'Verkauf direkt professionell starten',
          text: 'Wenn Sie bereits bereit sind, begleiten wir Sie strukturiert durch Termin, Ubergabe und Auszahlung.',
          label: 'Mercedes Verkauf starten',
          href: '/auto-verkaufen',
        },
        {
          heading: 'Erst Reparatur oder Verkauf klaren',
          text: 'Unser Mercedes Guide hilft bei der Entscheidung vor hohen Reparaturkosten.',
          label: 'Zum Mercedes Guide',
          href: '/ratgeber/mercedes-probleme-verkauf',
        },
      ],
      faqHeading: 'FAQ: Mercedes verkaufen, Ankauf und Premium-Abwicklung',
      faqs: [
        {
          q: 'Wie schnell kann ich meinen Mercedes verkaufen?',
          a: 'Nach vollstandigen Fahrzeugdaten ist ein Abschluss oft innerhalb von 24 bis 48 Stunden moglich. Die genaue Dauer hangt von Zustand, Unterlagen und Terminverfugbarkeit ab.',
        },
        {
          q: 'Kaufen Sie auch Mercedes AMG Modelle an?',
          a: 'Ja. AMG-Modelle werden differenziert nach Zustand, Ausstattung, Historie und Marktnachfrage bewertet.',
        },
        {
          q: 'Ist Mercedes Ankauf auch bei Motorschaden oder Getriebeschaden moglich?',
          a: 'Ja. Wir kaufen auch Fahrzeuge mit groesseren technischen Defekten, wenn der Zustand transparent dokumentiert ist.',
        },
        {
          q: 'Kann ich eine E-Klasse oder S-Klasse mit hoher Laufleistung verkaufen?',
          a: 'Ja. Entscheidend sind Wartung, technischer Zustand und die wirtschaftliche Gesamtbetrachtung, nicht nur der Kilometerstand.',
        },
        {
          q: 'Ist der Verkauf ohne TUV moglich?',
          a: 'Ja. Ein fehlender TUV schliesst den Verkauf nicht aus. Wir kalkulieren den Zustand und voraussichtliche Folgekosten nachvollziehbar ein.',
        },
        {
          q: 'Wie lauft die Auszahlung beim Mercedes Verkauf?',
          a: 'Die Auszahlung erfolgt sicher und dokumentiert, in der Regel per Bankuberweisung. Ablauf und Zeitpunkt werden vor Ubergabe klar abgestimmt.',
        },
        {
          q: 'Bieten Sie eine Abholung fur meinen Mercedes an?',
          a: 'Ja, in vielen Regionen Deutschlands ist eine Abholung moglich. Die Details werden in der Terminplanung festgelegt.',
        },
        {
          q: 'Ist die Ersteinschatzung kostenlos und unverbindlich?',
          a: 'Ja. Die erste Bewertung ist kostenlos und unverbindlich. Ein konkretes Angebot basiert auf den ubermittelten Fahrzeugdaten.',
        },
      ],
      internalLinksHeading: 'Weiterfuhrende Seiten rund um Ihren Mercedes-Verkauf',
      internalLinks: [
        {
          href: '/auto-bewerten',
          label: 'Mercedes kostenlos bewerten',
          context: 'Fur eine schnelle Preisorientierung vor dem Verkauf.',
        },
        {
          href: '/auto-verkaufen',
          label: 'Ablauf beim Autoverkauf',
          context: 'Wenn Sie den Verkauf direkt strukturiert starten mochten.',
        },
        {
          href: '/ratgeber/mercedes-probleme-verkauf',
          label: 'Mercedes Guide: Probleme und Verkaufszeitpunkt',
          context: 'Fur die Entscheidung zwischen Reparatur und Verkauf.',
        },
      ],
    },
    guide: {
      slug: 'mercedes-probleme-verkauf',
      seoTitle: 'Mercedes Probleme & Verkauf: Praxis-Guide 2026',
      seoDescription:
        'Mercedes Probleme verstehen, Reparaturkosten einordnen und den besten Verkaufszeitpunkt finden - mit AIRMATIC, 7G-Tronic und Modellbeispielen.',
      h1: 'Mercedes Guide: Haufige Probleme erkennen und zum richtigen Zeitpunkt verkaufen',
      intro:
        'Mercedes-Benz steht fur Komfort, Praezision und Premium-Anspruch. Gleichzeitig fragen sich viele Halter nach einigen Jahren: Weiterfahren, teuer reparieren oder jetzt verkaufen? Dieser Guide verbindet technische Schwachstellen, Kostenrealitat und Markttiming, damit Sie eine wirtschaftlich klare Entscheidung treffen konnen.',
      quickFacts: [
        'Viele Mercedes-Verkaufe passieren nicht wegen eines einzelnen Defekts, sondern wegen steigender Gesamtkosten.',
        'AIRMATIC-, Elektronik- und Getriebethemen beeinflussen Restwert und Alltagstauglichkeit stark.',
        'Der beste Verkaufszeitpunkt liegt oft vor grossen Reparaturblöcken und vor spurbarem Abschreibungsdruck.',
        'Bei E-Klasse, S-Klasse und AMG zahlt eine saubere Historie besonders stark auf den Verkaufspreis ein.',
        'Wer vor Ablauf wichtiger Garantie- oder Kulanzfenster entscheidet, verkauft oft mit weniger Preisdruck.',
        'Ein strukturierter Direktankauf ist bei komplexem Zustand haufig planbarer als der Privatmarkt.',
      ],
      sections: [
        {
          heading: 'Warum entscheiden sich viele Mercedes-Halter fur den Verkauf?',
          paragraphs: [
            'Im Premiumsegment ist die Entscheidung selten rein emotional. Viele Halter verkaufen, sobald die Kostenkurve steiler wird als der erwartete Nutzwert. Bei alteren Mercedes trifft das besonders zu, wenn mehrere Systeme gleichzeitig Aufmerksamkeit brauchen: Fahrwerk, Elektronik, Antrieb und Komfortfunktionen.',
            'Hinzu kommt die Nutzungsperspektive. Wer auf hohe Verfugbarkeit angewiesen ist, kann ungeplante Standzeiten schlechter akzeptieren als fruher. Wenn Werkstatttermine haufiger werden und die Kosten pro Jahr steigen, wird der Verkauf zur wirtschaftlichen Option statt zur Notlosung.',
            'Gerade bei hochwertigen Fahrzeugen ist Timing entscheidend: Ein technisch fahrbereiter Mercedes mit sauberer Dokumentation erzielt meist ein stabileres Angebot als ein Fahrzeug, das bereits mit akuten Folgeproblemen in den Markt geht.',
          ],
          bullets: [
            'Entscheidend ist die Gesamtkostenentwicklung, nicht nur das Fahrzeugalter',
            'Premiumfahrzeuge verlieren bei akuten Defekten oft schneller an Marktattraktivitat',
            'Fruhe Entscheidungen verbessern meist die Verhandlungsposition',
          ],
        },
        {
          heading: 'Welche Mercedes Probleme treten haufig auf?',
          paragraphs: [
            'Die Frage nach Mercedes haufige Fehler lasst sich nur modell- und baujahrspezifisch beantworten. Wiederkehrende Themen finden sich bei Komfortfahrwerken, Elektronikmodulen, bestimmten Motorvarianten und Getrieben. Nicht jeder Hinweis bedeutet sofort einen schweren Schaden, aber die Folgekosten konnen bei verspateter Reaktion deutlich steigen.',
            'Typisch sind schleichende Warnzeichen: sporadische Fehlermeldungen, unruhiges Schaltverhalten, Leistungsverlust, Olspuren oder veranderter Federungskomfort. Solche Signale wirken einzeln oft harmlos, summieren sich jedoch schnell zu hoheren Gesamtaufwanden.',
            'Fur die Praxis zahlt daher weniger die Frage, ob ein einzelnes Bauteil ausfallt, sondern wie hoch das Risiko weiterer Kosten in den nachsten 12 Monaten ist.',
          ],
        },
        {
          heading: 'AIRMATIC-Probleme: Warum Luftfederung teuer werden kann',
          paragraphs: [
            'AIRMATIC ist ein Komfortmerkmal, das den Mercedes-Charakter pragt - gleichzeitig ist es bei steigender Laufleistung ein potenzieller Kostentreiber. Kompressor, Federbalge, Ventilblock und Sensorik mussen zusammenspielen; fallt ein Teil aus, leiden oft weitere Komponenten.',
            'In der Praxis bemerken Halter AIRMATIC-Themen uber ungleiches Fahrzeugniveau, Warnhinweise oder Komfortverlust. Wird das Thema zu lange aufgeschoben, konnen sich Reparaturen verteuern und die Alltagstauglichkeit sinken.',
            'Beim Verkauf ist Transparenz entscheidend: Dokumentierte Diagnose und nachvollziehbare Historie helfen, den Ankaufpreis stabiler zu halten als eine unklare Zustandsbeschreibung.',
          ],
          bullets: [
            'Fruhe Diagnose reduziert Folgeschadenrisiko',
            'Kombinationsfehler bei Kompressor und Federbalgen sind kostenrelevant',
            'Dokumentation wirkt preisstabilisierend im Ankauf',
          ],
        },
        {
          heading: 'Elektronik und Steuergerate: kleine Fehler, grosse Wirkung',
          paragraphs: [
            'Elektronische Systeme in Mercedes-Modellen sind umfangreich: Assistenzfunktionen, Komfortmodule, Infotainment, Sensorik und Steuergeratenetzwerke. Mit zunehmendem Fahrzeugalter steigen bei manchen Baureihen die Risiken fur sporadische Ausfalle oder Kommunikationsprobleme.',
            'Einzelne Elektronikfehler sind nicht zwangslaufig kritisch. Problematisch wird es, wenn mehrere kleine Storungen zeitgleich auftreten und Diagnoseaufwand plus Teilekosten steigen. Genau das fuhrt in der Praxis oft zu Verkaufsentscheidungen.',
            'Wer Elektronikthemen fruh strukturiert bewertet, kann besser entscheiden, ob eine Reparatur wirtschaftlich Sinn ergibt oder ob ein geordneter Verkauf der risikoarmere Weg ist.',
          ],
        },
        {
          heading: 'Motorprobleme bei Mercedes: Steuerkette, Olverlust und Nebenaggregate',
          paragraphs: [
            'Mercedes Motorschaden Ursachen sind vielfaltig und hangen stark von Motorcode, Wartung und Fahrprofil ab. Themen rund um Steuertrieb, Dichtungen, thermische Belastung und Olverlust treten je nach Generation unterschiedlich haufig auf.',
            'Olspuren, steigender Olverbrauch oder unruhiger Lauf sollten nicht ignoriert werden. Selbst wenn zunaachst nur einzelne Bauteile betroffen scheinen, konnen Folgearbeiten die Rechnung deutlich vergrossern.',
            'Fur die Entscheidung Reparatur oder Verkauf ist die zentrale Frage: Welche Kosten sind sicher, welche wahrscheinlich, und wie stark verbessert eine Instandsetzung den real erzielbaren Verkaufspreis?',
          ],
          bullets: [
            'Motorprobleme immer im Systemkontext bewerten',
            'Einzelreparatur kann Vorbote weiterer Positionen sein',
            'Restwert nach Reparatur realistisch statt optimistisch kalkulieren',
          ],
        },
        {
          heading: '7G-Tronic und Getriebethemen: Wann wird es wirtschaftlich kritisch?',
          paragraphs: [
            'Die 7G-Tronic gilt in vielen Anwendungen als komfortorientiert, kann aber bei hoher Laufleistung oder Wartungsruckstandern Auffalligkeiten zeigen. Ruckeln, verzogerte Gangwechsel oder Notlauf sind fur Halter klare Warnsignale.',
            'Nicht jede Auffalligkeit fuhrt sofort zur Grunduberholung, aber Diagnose, Teilreparaturen und Standzeit kosten spurbare Betrage. In Kombination mit weiteren Baustellen wird der Weiterbetrieb schnell unplanbar.',
            'In dieser Phase lohnt ein fruher Marktvergleich: Wenn der erwartete Mehrerlös nach Reparatur gering ausfallt, ist der Verkauf oft die vernunftigere Option.',
          ],
        },
        {
          heading: 'Diesel-spezifische Probleme bei Mercedes',
          paragraphs: [
            'Bei einigen Dieselmodellen spielen Themen wie Abgasnachbehandlung, Injektoren, Turbolader oder AGR-Systeme eine Rolle. Je nach Einsatzprofil - Kurzstrecke vs. Langstrecke - konnen Belastung und Wartungsbedarf deutlich variieren.',
            'Werden mehrere emissionsnahe Komponenten nacheinander auffallig, steigt das Kostenrisiko schnell. Gleichzeitig sinkt haufig die Bereitschaft privater Kaufer, ein Fahrzeug mit komplexer Diesel-Historie zu ubernehmen.',
            'Ein strukturierter Ankauf kann hier planbarer sein als ein langwieriger Privatverkauf mit intensiven Preisverhandlungen.',
          ],
        },
        {
          heading: 'Welche Mercedes Modelle sind robust - und welche gelten als anfalliger?',
          paragraphs: [
            'Die Frage "Welche Mercedes Modelle sind zuverlassig?" braucht immer Kontext. Pauschale Listen helfen wenig, weil Baujahr, Motorisierung, Wartungsqualitat und Nutzung entscheidend sind.',
            'In der Praxis werden bei alteren Generationen der C-Klasse und E-Klasse je nach Konfiguration haufiger Elektronik- oder Antriebsthemen diskutiert. Bei einigen komfortorientierten Oberklassemodellen kommen zusatzlich AIRMATIC- und Komfortsystemkosten hinzu.',
            'Das heiBt nicht, dass einzelne Baureihen grundsatzlich problematisch sind. Ein gepflegtes Fahrzeug mit nachvollziehbarer Historie kann trotz hoher Laufleistung stabiler wirken als ein nominell "unauffalliges" Modell mit Wartungslucken.',
          ],
          bullets: [
            'Modellname allein reicht nicht - Baujahr und Motor sind entscheidend',
            'Wartungslucken wirken im Premiumsegment besonders preissensitiv',
            'Zustandsbezogene Bewertung ist belastbarer als Forenpauschalen',
          ],
        },
        {
          heading: 'Wann Mercedes verkaufen? Die wirtschaftlich besten Zeitfenster',
          paragraphs: [
            'Der beste Verkaufszeitpunkt liegt oft vor den grossen Kostenspitzen: vor umfangreichen Fahrwerksarbeiten, vor teuren Getriebe- oder Motorpaketen und vor absehbaren TUV-bedingten Investitionen. Wer erst nach mehreren Rechnungen verkauft, holt die Kosten selten vollstandig uber den Preis zuruck.',
            'Auch Laufleistungsgrenzen spielen eine Rolle. Je nach Modell sinkt ab bestimmten Marken die Nachfrage bestimmter Kaufergruppen, was zu starkeren Abschlagen fuhren kann.',
            'Ein weiterer Hebel ist das Garantie- und Kulanzfenster. Vor dessen Ende ist die Verhandlungsposition in vielen Fallen besser als in der Phase danach.',
          ],
          bullets: [
            'Vor grossen Reparaturblocken aktiv entscheiden',
            'Laufleistungsschwellen im jeweiligen Modellsegment beachten',
            'Garantie- oder Kulanzende als Trigger fur Neubewertung nutzen',
          ],
        },
        {
          heading: 'Mercedes Reparaturkosten im Uberblick: Warum Premiumtechnik teuer ist',
          paragraphs: [
            'Mercedes Reparaturkosten sind oft hoher als bei Volumenmarken, weil Technikdichte, Teilepreise und Diagnoseaufwand im Premiumsegment steigen. Dazu kommen hohere Anforderungen an Instandsetzung und Fehlersuche bei vernetzten Systemen.',
            'Wirtschaftlich relevant ist nicht nur die einzelne Rechnung, sondern die Kombination mehrerer Positionen innerhalb kurzer Zeit. Aus einer isolierten Reparatur wird so schnell ein kumuliertes Kostenpaket.',
            'Deshalb sollte die Rechnung immer lauten: erwartete Gesamtkosten plus Risiko im nachsten Nutzungsjahr gegen realistischen Verkaufserlos heute.',
          ],
        },
        {
          heading: 'Reparieren oder verkaufen? Ein klarer Entscheidungsrahmen',
          paragraphs: [
            'Eine belastbare Entscheidung basiert auf drei Fragen: Wie hoch ist die sichere Mindestinvestition? Wie hoch ist die Wahrscheinlichkeit weiterer Defekte? Wie stark steigt der erzielbare Preis nach Reparatur wirklich?',
            'Wenn der erwartete Mehrerlos die Investition nicht klar ubersteigt, ist Verkauf meist die stabilere Option. Das gilt besonders bei Kombinationen aus Fahrwerks-, Getriebe- und Elektronikthemen.',
            'Berucksichtigen Sie zusatzlich indirekte Kosten wie Standzeit, Ersatzmobilitat und Zeitaufwand. In Summe kann ein fruher Verkauf deutlich wirtschaftlicher sein als ein weiterer Reparaturzyklus.',
          ],
        },
        {
          heading: 'Wie erzielen Sie den besten Preis beim Mercedes-Verkauf?',
          paragraphs: [
            'Der wichtigste Hebel ist Transparenz. Vollstandige Unterlagen, dokumentierte Wartung und ehrliche Mangelangaben reduzieren Unsicherheit und verbessern die Angebotsqualitat.',
            'Praktisch hilfreich sind ein strukturierter Unterlagencheck, realistische Preisvorstellung, saubere Fahrzeugdaten und ein klarer Verkaufsweg. Gerade bei Premiumfahrzeugen zahlt Seriositat im Prozess stark auf den Endpreis ein.',
            'Wenn Sie zwischen mehreren Optionen vergleichen wollen, starten Sie mit einer unverbindlichen Bewertung und entscheiden danach anhand von Zahlen statt Bauchgefuhl.',
          ],
          bullets: [
            'Servicehistorie, Rechnungen und HU-Berichte gebundelt vorbereiten',
            'Bekannte Defekte offen kommunizieren statt spaterer Abschlage',
            'Preis- und Ablaufvergleich vor finaler Entscheidung durchfuhren',
          ],
        },
        {
          heading: 'Warum Autoankauf fur Mercedes-Halter oft die bessere Losung ist',
          paragraphs: [
            'Beim Privatverkauf hochwertiger Fahrzeuge sind Verhandlungen, Terminabbruche und Zahlungsrisiken besonders belastend. Hinzu kommt, dass Defekt- oder Hochlaufleistungsfahrzeuge auf dem Privatmarkt haufig nur mit grossem Aufwand platzierbar sind.',
            'Ein strukturierter Mercedes Ankauf bietet dagegen planbare Geschwindigkeit, klare Vertragslogik und nachvollziehbare Auszahlung. Fur Fahrzeuge mit Defekten oder hoher Laufleistung ist das in vielen Fallen die sicherere und wirtschaftlich ruhigere Route.',
            'Wenn Sie heute Klarheit wollen, ist ein direkter Ankaufvergleich oft der schnellste Weg zu einer tragfahigen Entscheidung.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Welche Mercedes Probleme sind beim Verkauf besonders preisrelevant?',
          a: 'Vor allem AIRMATIC-, Getriebe-, Motor- und Elektronikthemen wirken sich deutlich auf Risiko und Ankaufpreis aus. Eine klare Dokumentation verbessert die Bewertung.',
        },
        {
          q: 'Wann sollte ich meinen Mercedes eher verkaufen als weiter reparieren?',
          a: 'Wenn absehbare Reparaturkosten plus Folgerisiko den realistischen Mehrerlös nach Instandsetzung nicht klar ubersteigen, ist Verkauf haufig wirtschaftlicher.',
        },
        {
          q: 'Sind altere C-Klasse oder E-Klasse Modelle automatisch problematisch?',
          a: 'Nein. Entscheidend sind Baujahr, Motorisierung, Wartung und aktueller Zustand. Pauschale Aussagen sind im Premiumsegment selten belastbar.',
        },
        {
          q: 'Kann ich einen Mercedes mit hoher Laufleistung noch fair verkaufen?',
          a: 'Ja. Mit sauberer Historie, transparenter Mangelangabe und realistischer Preislogik lassen sich auch hoch gelaufene Fahrzeuge strukturiert verkaufen.',
        },
        {
          q: 'Warum wahlen viele Mercedes-Halter den Direktankauf statt Privatverkauf?',
          a: 'Weil der Direktankauf bei komplexem Zustand meist schneller, planbarer und sicherer ist - insbesondere bei Defekten, hoher Laufleistung oder engem Zeitfenster.',
        },
      ],
      relatedSlugs: [
        'autoankauf-mit-motorschaden',
        'autoankauf-firmenwagen-gewerbe',
        'kilometerstand-scheckheft-vorbesitzer-preis',
        'autoankauf-ohne-tuev',
      ],
      coreLink: '/auto-verkaufen',
      ctaBridge: {
        heading: 'Mercedes jetzt verkaufen statt Kostenrisiko erhohen?',
        text: 'Prufen Sie Ihren Mercedes Ankaufpreis und entscheiden Sie auf Basis klarer Zahlen, ob Verkauf oder Reparatur fur Sie sinnvoller ist.',
        href: '/mercedes-verkaufen',
        label: 'Zur Mercedes Ankaufseite',
      },
    },
  },
  audi: {
    slug: 'audi',
    displayName: 'Audi',
    keywordMap: {
      primary: ['Audi verkaufen', 'Audi Ankauf', 'Audi Autoankauf'],
      secondary: [
        'Audi schnell verkaufen',
        'Audi Ankauf Deutschland',
        'Audi Motorschaden verkaufen',
        'Audi Unfallwagen verkaufen',
        'Audi gebraucht verkaufen',
        'Audi Export Ankauf',
      ],
      semantic: [
        'Audi Probleme',
        'Audi häufige Fehler',
        'Audi Zuverlässigkeit',
        'Audi Reparaturkosten',
        'Audi TFSI Ölverbrauch',
        'Audi S tronic Probleme',
        'Audi quattro verkaufen',
        'Audi S RS verkaufen',
      ],
      longTail: [
        'Wann Audi verkaufen vor teurer Reparatur',
        'Audi mit hoher Laufleistung verkaufen',
        'Audi ohne TÜV sicher verkaufen',
        'Audi Reparatur oder Verkauf Entscheidung',
        'Audi Motorschaden Ursachen und Verkauf',
      ],
    },
    uniquenessRules: {
      introAngle:
        'Der Audi-Fokus kombiniert Premium-Technik mit nüchterner Wirtschaftlichkeit: moderne Systeme wie quattro, TFSI und S tronic schaffen Fahrwert, können aber bei Alterung hohe Folgekosten erzeugen.',
      requiredInsights: [
        'Unterschiedliche Risiko- und Wertlogik bei TFSI, TDI und Performance-Modellen',
        'Einfluss von quattro und S/RS Spezifikationen auf Ankaufpreis und Käuferkreis',
        'Entscheidung Verkauf versus Reparatur auf Basis realistischer Kostenfenster',
      ],
      bannedPatterns: [
        'austauschbare Premium-Texte ohne Audi-Technikbezug',
        'pauschale Aussagen ohne Baujahr-, Motor- oder Laufleistungsbezug',
        'identische FAQ-Struktur aus anderen Marken ohne Audi-Anpassung',
      ],
      minimumSemanticKeywords: 14,
    },
    landing: {
      slugPath: '/audi-verkaufen',
      seoTitle: 'Audi verkaufen | Audi Ankauf Deutschland',
      seoDescription:
        'Audi verkaufen mit fairer Bewertung, schneller Auszahlung und kostenloser Abholung in Deutschland. Auch bei Motorschaden, Unfallwagen und ohne TÜV.',
      canonicalPath: '/audi-verkaufen',
      heroHeadline: 'Audi verkaufen - schnell, fair und technisch fundiert',
      heroSubheadline:
        'Audi Autoankauf in ganz Deutschland mit transparenter Bewertung und schneller Auszahlung',
      h1: 'Audi Autoankauf: Ihren Audi sicher und zum fairen Preis verkaufen',
      intro: [
        'Einen Audi zu verkaufen ist selten eine Standardentscheidung. Viele Halter wissen, dass ein gepflegter Audi wegen Qualität, Ausstattung und Markenwahrnehmung einen stabilen Markt hat. Gleichzeitig können komplexe Technik, hohe Ersatzteilpreise und teure Werkstattpositionen den idealen Verkaufszeitpunkt stark beeinflussen.',
        'Genau hier setzt unser Audi Ankauf an. Statt pauschaler Lockpreise erhalten Sie eine nachvollziehbare Bewertung, die Motorisierung, Laufleistung, Servicehistorie, Ausstattungsniveau und bekannten Reparaturbedarf realistisch einordnet. Das gilt für den Audi A3 im Alltag genauso wie für einen Audi A6, einen Q5 mit hoher Laufleistung oder einen Audi S/RS mit besonderem Leistungsprofil.',
        'Wenn Sie Ihren Audi schnell verkaufen möchten, brauchen Sie vor allem Klarheit: Was ist das Fahrzeug heute wert, welche Risiken sind in den nächsten Monaten wahrscheinlich und wie sicher ist der Abschluss? Unser Audi Autoankauf Deutschland liefert genau diese Klarheit - strukturiert, transparent und ohne Inseratsstress.',
        'Ob Audi Unfallwagen verkaufen, Audi Motorschaden verkaufen oder Audi gebraucht verkaufen im guten Zustand: Sie bekommen einen planbaren Prozess mit verbindlicher Kommunikation, optionaler Abholung und dokumentierter Auszahlung.',
        'Viele Verkäufer vergleichen zunächst Privatverkauf, Händlerangebot und Direktankauf. Genau in diesem Vergleich zeigt sich oft der Vorteil eines spezialisierten Audi Autoankaufs: Sie sparen Wochen an Abstimmung, vermeiden Preisdebatten ohne Abschlussabsicht und erhalten eine deutlich höhere Planungssicherheit für den nächsten Schritt - sei es ein Fahrzeugwechsel, ein Umstieg auf Elektromobilität oder die Reduktion laufender Kosten. Besonders bei Fahrzeugen mit anstehenden Werkstattarbeiten, auslaufender Garantie oder steigender Laufleistung ist Zeit ein zentraler Faktor. Je früher Sie den realistischen Marktwert kennen, desto besser können Sie entscheiden.',
        'Unser Anspruch ist nicht nur ein schneller Kauf, sondern ein sauberer Prozess von der ersten Anfrage bis zur finalen Auszahlung. Dazu gehören klare Kommunikation, technische Einordnung Ihres Fahrzeugs, nachvollziehbare Preisargumentation und ein Übergabetermin, der in Ihren Alltag passt. Gerade bei hochwertigen Modellen wie Audi quattro, S oder RS erwarten Verkäufer zu Recht ein professionelles Niveau beim Ankauf. Genau dafür ist unser Audi Ankauf Deutschland ausgelegt - fachlich präzise, effizient in der Abwicklung und konsequent auf Sicherheit für den Verkäufer ausgerichtet.',
        'Hinzu kommt ein weiterer Vorteil: Sie erhalten nicht nur einen Verkaufspreis, sondern eine echte Entscheidungsgrundlage. Wir zeigen transparent, welche Faktoren den Audi Ankaufpreis treiben, wo mögliche Reparatur- und Folgekosten liegen und warum ein Verkauf jetzt oder später sinnvoller sein kann. Diese Klarheit ist gerade bei technisch anspruchsvollen Audi-Modellen entscheidend, weil sie Fehlentscheidungen vermeidet und den Verkaufsprozess deutlich souveräner macht.',
      ],
      benefitHeading: 'Warum Audi-Verkäufer unseren Ankauf wählen',
      benefits: [
        'Technisch fundierte Bewertung statt Standardraster: Wir unterscheiden zwischen TFSI-, TDI- und Performance-Profilen.',
        'quattro und Ausstattung werden differenziert betrachtet, nicht pauschal abgewertet.',
        'Audi Ankauf auch bei Defekten: Motorschaden, Getriebeschaden, Elektronikprobleme und ohne TÜV möglich.',
        'Schneller Abschluss: In vielen Fällen sind Bewertung, Termin und Verkauf innerhalb von 24 bis 72 Stunden umsetzbar.',
        'Audi Ankauf Deutschland mit optionaler Abholung - auch bei nicht fahrbereiten Fahrzeugen.',
        'Sichere, nachvollziehbare Auszahlung und klare Vertragsdokumentation ohne versteckte Gebühren.',
        'Kein Besichtigungsmarathon, keine unseriösen Nachverhandlungen, kein Risiko durch unklare Interessenten.',
      ],
      processHeading: 'Audi verkaufen in 3 klaren Schritten',
      processSteps: [
        {
          title: '1. Fahrzeugdaten und Zustand übermitteln',
          text: 'Sie senden uns die wichtigsten Daten zu Ihrem Audi: Modell, Baujahr, Laufleistung, Motorisierung, Ausstattungsdetails und bekannte Mängel. Servicebelege und Reparaturrechnungen verbessern die Präzision.',
        },
        {
          title: '2. Transparente Bewertung und Angebot',
          text: 'Wir erstellen ein belastbares Angebot auf Basis aktueller Marktdaten, technischer Risikofaktoren und regionaler Nachfrage. So sehen Sie früh, ob ein Verkauf jetzt wirtschaftlich sinnvoll ist.',
        },
        {
          title: '3. Übergabe, Abholung und Auszahlung',
          text: 'Nach Terminabstimmung erfolgt die Übergabe strukturiert mit Vertrags- und Zahlungsdokumentation. Auf Wunsch holen wir den Audi ab und schließen den Verkauf ohne Umwege ab.',
        },
      ],
      buyTypesHeading: 'Welche Audi wir ankaufen',
      buyTypes: [
        {
          title: 'Audi Unfallwagen verkaufen',
          text: 'Auch bei Karosserie- oder Strukturschäden kaufen wir Audi Fahrzeuge an, sofern Schadenbild und Reparaturstand transparent dokumentiert sind.',
        },
        {
          title: 'Audi Motorschaden verkaufen',
          text: 'Bei kapitalen oder drohenden Motorschäden ist der Direktverkauf oft wirtschaftlicher als eine teure Reparaturkette mit unsicherem Ergebnis.',
        },
        {
          title: 'Audi mit Getriebeschaden',
          text: 'S tronic/DSG Auffälligkeiten, Schaltprobleme oder Notlauf schließen den Ankauf nicht aus. Wir bewerten den Zustand realistisch und ohne Lockpreislogik.',
        },
        {
          title: 'Audi mit hoher Laufleistung',
          text: 'Hohe Kilometer bedeuten nicht automatisch niedrigen Restwert. Entscheidend sind Wartung, Gesamtzustand, Motorvariante und nachvollziehbare Historie.',
        },
        {
          title: 'Audi ohne TÜV',
          text: 'Auch ohne gültige HU/AU ist ein strukturierter Verkauf möglich. Technischer Zustand und erwartbare Folgekosten werden transparent berücksichtigt.',
        },
        {
          title: 'Leasingrückläufer und Firmenwagen',
          text: 'Wir unterstützen auch gewerbliche Verkäufer mit klaren Anforderungen zu Unterlagen, Eigentumsnachweis und sauberem Übergabeprozess.',
        },
        {
          title: 'Audi quattro Modelle',
          text: 'quattro Fahrzeuge bewerten wir differenziert nach Laufleistung, Wartungszustand und Einsatzprofil statt mit pauschalen Abschlägen.',
        },
        {
          title: 'Audi S und RS Modelle',
          text: 'Performance-Modelle benötigen Spezialbewertung nach Zustand, Historie und Modellspezifik. Wir behandeln S/RS nicht wie normale Volumenfahrzeuge.',
        },
        {
          title: 'Audi TDI und TFSI Varianten',
          text: 'Diesel- und TFSI-Modelle werden anhand typischer Schwachstellen, Laufleistung und Marktnachfrage getrennt bewertet.',
        },
      ],
      comparisonHeading: 'Warum unser Audi Ankauf oft die bessere Option ist',
      comparisonRows: [
        {
          criterion: 'Preisfindung',
          us: 'Marktdaten plus Audi-spezifische Technikbewertung',
          privateSale: 'Häufig emotionale Verhandlung und starke Preissprünge',
          traditionalDealer: 'Oft pauschale Abschläge ohne Modelltiefe',
        },
        {
          criterion: 'Zeit bis Verkauf',
          us: 'Meist wenige Tage bei vollständigen Daten',
          privateSale: 'Oft Wochen mit unsicherem Abschluss',
          traditionalDealer: 'Termin- und Kapazitätsabhängig',
        },
        {
          criterion: 'Defektfahrzeuge',
          us: 'Ankauf auch bei Motorschaden, Getriebeproblemen und ohne TÜV',
          privateSale: 'Schwieriger Verkauf und aggressive Nachverhandlung',
          traditionalDealer: 'Häufig restriktive Annahme oder niedrige Angebote',
        },
        {
          criterion: 'Sicherheit',
          us: 'Klare Vertrags- und Zahlungsdokumentation',
          privateSale: 'Erhöhtes Risiko bei Zahlung und Gewährleistung',
          traditionalDealer: 'Sicher, aber nicht immer flexibel bei Sonderfällen',
        },
      ],
      trustHeading: 'Vertrauen durch klare Zusagen im Audi Ankauf',
      trustPoints: [
        'Schnelle Auszahlung mit nachvollziehbarem Zahlungsnachweis',
        'Kostenlose Abholung in vielen Regionen Deutschlands',
        'Keine versteckten Kosten oder nachträgliche Gebühren',
        'Transparente Bewertung mit belastbarer Preislogik',
        'Ankauf in nahezu jedem Zustand, auch bei technischen Problemen',
        'Verbindliche Kommunikation und strukturierter Abschlussprozess',
      ],
      ctas: [
        {
          heading: 'Audi jetzt kostenlos bewerten',
          text: 'Starten Sie mit einer unverbindlichen Bewertung und sehen Sie sofort, ob der Verkauf aktuell wirtschaftlich sinnvoll ist.',
          label: 'Jetzt Audi bewerten',
          href: '/auto-bewerten',
        },
        {
          heading: 'Direkt Audi Verkaufsprozess starten',
          text: 'Wenn Sie bereits verkaufen möchten, führen wir Sie klar durch Termin, Übergabe und Auszahlung.',
          label: 'Audi Verkauf starten',
          href: '/auto-verkaufen',
        },
        {
          heading: 'Audi Probleme zuerst einordnen',
          text: 'Wenn Sie zwischen Reparatur und Verkauf entscheiden, hilft unser Audi Guide mit konkreten Kosten- und Timing-Faktoren.',
          label: 'Zum Audi Guide',
          href: '/ratgeber/audi-probleme-verkauf',
        },
      ],
      faqHeading: 'FAQ: Audi verkaufen, Ankauf und Abwicklung',
      faqs: [
        {
          q: 'Wie schnell kann ich meinen Audi verkaufen?',
          a: 'Nach vollständigen Fahrzeugdaten ist ein Abschluss häufig innerhalb weniger Tage möglich. Die genaue Dauer hängt von Zustand, Dokumentenlage und Terminverfügbarkeit ab.',
        },
        {
          q: 'Kaufen Sie auch Audi mit Motorschaden oder Getriebeschaden?',
          a: 'Ja. Wir kaufen auch Audi mit größeren technischen Defekten. Wichtig ist eine transparente Zustandsbeschreibung, damit das Angebot realistisch bleibt.',
        },
        {
          q: 'Ist ein Audi Ankauf auch ohne TÜV möglich?',
          a: 'Ja. Ein fehlender TÜV schließt den Verkauf nicht aus. Wir berücksichtigen technische Risiken und Folgekosten in der Bewertung.',
        },
        {
          q: 'Spielt quattro beim Ankaufpreis eine Rolle?',
          a: 'Ja. quattro kann je nach Modell, Zustand und Nachfrage den Marktwert beeinflussen. Entscheidend ist die Gesamtbewertung inklusive Historie und Laufleistung.',
        },
        {
          q: 'Kaufen Sie auch Audi S und RS Modelle?',
          a: 'Ja. S- und RS-Modelle werden bei uns differenziert bewertet, da Ausstattung, Wartung und Leistungsprofil hier besonders preisrelevant sind.',
        },
        {
          q: 'Ist die Bewertung kostenlos und unverbindlich?',
          a: 'Ja. Die Erstbewertung ist kostenfrei und unverbindlich. Ein konkretes Angebot basiert auf den übermittelten Fahrzeugdaten.',
        },
        {
          q: 'Kann mein Audi abgeholt werden?',
          a: 'In vielen Regionen ja. Die Details zur Abholung stimmen wir im Rahmen der Terminplanung transparent mit Ihnen ab.',
        },
        {
          q: 'Wie erfolgt die Auszahlung?',
          a: 'Die Auszahlung erfolgt dokumentiert und nachvollziehbar, üblicherweise per Banküberweisung. Zeitpunkt und Ablauf werden vor Übergabe klar abgestimmt.',
        },
      ],
      internalLinksHeading: 'Weiterführende Seiten',
      internalLinks: [
        {
          href: '/auto-bewerten',
          label: 'Audi kostenlos bewerten',
          context: 'Für eine schnelle Preisorientierung vor dem Verkauf.',
        },
        {
          href: '/auto-verkaufen',
          label: 'Verkaufsprozess im Detail',
          context: 'Wenn Sie direkt in die Abwicklung starten möchten.',
        },
        {
          href: '/ratgeber/audi-probleme-verkauf',
          label: 'Audi Guide: Probleme und Verkaufstiming',
          context: 'Für die Entscheidung Reparatur versus Verkauf.',
        },
      ],
    },
    guide: {
      slug: 'audi-probleme-verkauf',
      seoTitle: 'Audi Probleme und Verkauf: Praxis-Guide 2026',
      seoDescription:
        'Audi Probleme verstehen, Reparaturkosten einschätzen und den besten Verkaufszeitpunkt finden. Praxisnaher Guide für TFSI, TDI, quattro und S tronic.',
      h1: 'Audi Guide: Häufige Probleme erkennen und zum richtigen Zeitpunkt verkaufen',
      intro:
        'Audi steht für präzise Verarbeitung, modernes Design und Technik wie quattro, TFSI und S tronic. Gerade diese technische Komplexität macht die Verkaufsentscheidung jedoch anspruchsvoll. Dieser Guide zeigt, welche Audi Probleme besonders kostenrelevant sind, wann ein Verkauf wirtschaftlich sinnvoll wird und wie Sie den bestmöglichen Verkaufspreis sichern.',
      quickFacts: [
        'Viele Audi Verkaufentscheidungen fallen vor großen Reparaturblöcken, nicht erst nach dem Totalausfall.',
        'Audi häufige Fehler unterscheiden sich stark nach Motorisierung, Getriebe und Baujahr.',
        'Bei TFSI- und S tronic-Themen kann frühes Handeln hohe Folgekosten vermeiden.',
        'quattro und S/RS Modelle brauchen eine differenzierte Markt- und Zustandsbewertung.',
        'Der beste Verkaufszeitpunkt liegt oft vor Garantieende, vor TÜV-Investitionen oder absehbaren Reparaturen.',
        'Ein strukturierter Autoankauf ist bei defekten oder hochgelaufenen Audi oft risikoärmer als Privatverkauf.',
      ],
      sections: [
        {
          heading: 'Warum entscheiden sich viele Audi-Besitzer für den Verkauf?',
          paragraphs: [
            'Die Frage ist selten emotional allein, sondern meist wirtschaftlich: Steigende Wartungskosten, komplexe Technik im Alter und zunehmender Wertverlust setzen den Rahmen. Besonders bei Fahrzeugen außerhalb von Garantie und Kulanz wächst das Risiko unerwarteter Werkstattrechnungen.',
            'Viele Halter nutzen ihren Audi täglich und brauchen planbare Mobilität. Sobald Ausfallrisiken steigen, wird der Verkauf oft zur strategischen Entscheidung statt zur spontanen Reaktion.',
            'Wer frühzeitig entscheidet, verkauft meist aus einer stärkeren Position - mit mehr Zeit, besserer Preislogik und weniger Druck durch akute Defekte.',
          ],
          bullets: [
            'Kostensicherheit wird wichtiger als Markenbindung',
            'Technikrisiko steigt mit Laufleistung und Fahrzeugalter',
            'Frühe Entscheidung reduziert Notverkaufsdruck',
          ],
        },
        {
          heading: 'Wartungskosten bei Audi: Premiumtechnik hat ihren Preis',
          paragraphs: [
            'Audi Modelle überzeugen oft durch hochwertige Technik, verlangen aber auch ein passendes Wartungsbudget. Neben regulären Services können bei höherer Laufleistung zusätzliche Positionen wie Fahrwerk, Steuertrieb, Abgasnachbehandlung oder Elektroniksysteme relevant werden.',
            'Gerade bei gut ausgestatteten Fahrzeugen steigt die Komplexität im Reparaturfall. Einzelkosten sind häufig beherrschbar, die Kombination mehrerer Baustellen innerhalb eines Jahres verändert jedoch die Wirtschaftlichkeit deutlich.',
            'Für die Verkaufsentscheidung ist deshalb nicht nur die nächste Rechnung wichtig, sondern das Gesamtbild der nächsten 12 bis 24 Monate.',
          ],
        },
        {
          heading: 'Technologiealterung bei Audi: Wenn Innovation zum Kostenfaktor wird',
          paragraphs: [
            'Audi Zuverlässigkeit im Alltag hängt stark vom Zusammenspiel aus Software, Sensorik, Getriebelogik und Motorsteuerung ab. Mit zunehmendem Alter steigt die Wahrscheinlichkeit, dass kleinere elektronische Auffälligkeiten zu größeren Diagnose- und Reparaturketten führen.',
            'Fahrzeuge mit vielen Assistenzsystemen bieten Komfort, erfordern aber im Fehlerfall oft spezialisiertes Know-how. Das kann Standzeiten verlängern und Kosten erhöhen.',
            'Je älter das Fahrzeug, desto wichtiger wird eine nüchterne Abwägung: Reparatur investieren oder in einem stabilen Zustand verkaufen.',
          ],
        },
        {
          heading: 'Wertverlust: Wann Audi Modelle besonders stark nachgeben',
          paragraphs: [
            'Der Wertverlust verläuft nicht linear. Häufige Bruchstellen sind Garantieende, hohe Laufleistungsmarken und Zeitfenster vor teuren Instandsetzungen. In diesen Phasen reagieren Käufer sensibel auf bekannte Schwachstellen.',
            'Auch Markttrends spielen mit: Motorisierung, Emissionsklasse, Karosserieform und Ausstattung beeinflussen die Nachfrage teils stärker als erwartet.',
            'Wer den Verkauf bis nach größeren Reparaturen aufschiebt, holt den Investitionsbetrag oft nicht vollständig über den späteren Verkaufspreis zurück.',
          ],
          bullets: [
            'Wertfenster vor größeren Werkstattblöcken nutzen',
            'Marktnachfrage je Motor und Modellgeneration prüfen',
            'Nicht nur Wunschpreis, sondern Nettoergebnis betrachten',
          ],
        },
        {
          heading: 'Audi häufige Fehler: TFSI Ölverbrauch und Motorthemen',
          paragraphs: [
            'Bei einigen TFSI-Generationen wird erhöhtes Ölverbrauchsverhalten berichtet. Relevanz und Kosten hängen von Baujahr, Wartung, Laufleistung und tatsächlichem Schadbild ab.',
            'Audi Motorschaden Ursachen sind selten monokausal. Oft entwickeln sich Probleme über längere Zeit: Ölthemen, thermische Belastung, Steuertrieb und Nebenaggregate können sich gegenseitig verstärken.',
            'Für Verkäufer entscheidend: Frühzeitige Diagnose und transparente Dokumentation stabilisieren die Verhandlungsposition deutlich.',
          ],
          bullets: [
            'Ölverbrauch und Warnsignale früh dokumentieren',
            'Werkstattdiagnosen für belastbare Bewertung nutzen',
            'Verkauf vor Folgeschäden kann wirtschaftlicher sein',
          ],
        },
        {
          heading: 'Steuerkette und Steuertrieb: Risiko je Baujahr richtig einordnen',
          paragraphs: [
            'Steuerketten- und Steuertriebthemen gehören in bestimmten Audi-Motorfamilien zu den preisrelevanten Punkten. Nicht jedes Geräusch bedeutet einen kapitalen Defekt, aber aufgeschobene Klärung erhöht das Folgerisiko.',
            'Besonders bei unklarer Historie sind Käufer vorsichtig. Nachweise zu Wartung, bereits durchgeführten Maßnahmen und aktuellem Diagnosezustand wirken stark auf den erzielbaren Preis.',
            'Wer diese Themen nicht mehr tragen möchte, sollte vor der nächsten großen Investition den Verkaufszeitpunkt prüfen.',
          ],
        },
        {
          heading: 'DSG/S tronic Probleme: Schaltqualität, Ruckeln, Notlauf',
          paragraphs: [
            'Audi häufige Fehler betreffen je nach Modell auch das Doppelkupplungsgetriebe. Typische Symptome sind Ruckeln, verzögerte Gangwechsel oder Notlaufzustände.',
            'Die Kosten können stark streuen - von überschaubaren Maßnahmen bis zu größeren Eingriffen. Entscheidend ist, ob ein klarer Einzelfehler vorliegt oder ein wiederkehrendes Muster.',
            'Wenn Ausfallrisiko und Reparaturunsicherheit steigen, ist der strukturierte Verkauf oft die risikoärmere Option.',
          ],
          bullets: [
            'Symptome nicht ignorieren, sondern diagnostisch absichern',
            'Einzelfehler von Systemproblemen unterscheiden',
            'Bei hohem Risiko frühzeitig Verkauf prüfen',
          ],
        },
        {
          heading: 'Elektrik und Elektronik bei Audi: Kleine Fehler, großer Aufwand',
          paragraphs: [
            'Elektronikthemen beginnen häufig unscheinbar: sporadische Warnmeldungen, Sensorfehler oder Kommunikationsprobleme im Bordnetz. In der Summe können diese Punkte jedoch teuer und zeitintensiv werden.',
            'Bei Premiumfahrzeugen sind Komfort- und Assistenzsysteme eng vernetzt. Das erhöht die Diagnosekomplexität und kann die Werkstattdauer verlängern.',
            'Für den Verkauf gilt: Transparente Fehlerbeschreibung ist besser als Verbergen. Käufer honorieren nachvollziehbare Angaben stärker als unklare Zustände.',
          ],
        },
        {
          heading: 'Diesel-Probleme: EGR, DPF und thermische Belastung',
          paragraphs: [
            'Bei Audi Dieselmodellen sind EGR- und DPF-Themen in bestimmten Nutzungsprofilen ein wiederkehrender Kostenfaktor. Kurzstreckenbetrieb und ungünstige Fahrprofile können die Belastung erhöhen.',
            'Zusätzlich können Abgas- und Regenerationsthemen die Fahrbarkeit beeinträchtigen und Folgekosten auslösen.',
            'Wenn mehrere dieseltypische Baustellen gleichzeitig auftreten, ist der Verkauf häufig wirtschaftlicher als eine Serie ungewisser Einzelreparaturen.',
          ],
        },
        {
          heading: 'Welche Audi Modelle gelten als besonders auffällig?',
          paragraphs: [
            'Die Frage nach problematischen Audi-Modellen lässt sich nur differenziert beantworten. Häufig genannt werden je nach Motorisierung und Baujahr beispielsweise Audi A4 B8/B9 und Audi A6 C7/C8 in bestimmten Konfigurationen.',
            'Entscheidend ist nicht das Modell allein, sondern die Kombination aus Baujahr, Motorcode, Getriebe, Laufleistung und Wartungsqualität. Ein gut dokumentierter A6 kann stabiler sein als ein vermeintlich unkritischer A4 mit Wartungslücken.',
            'Pauschalurteile helfen beim Verkauf wenig. Relevant ist die konkrete technische und dokumentarische Qualität Ihres Fahrzeugs.',
          ],
          bullets: [
            'A4/A6 nur mit Baujahr- und Motorbezug bewerten',
            'Servicehistorie wirkt stärker als reine Modellbezeichnung',
            'Zustandsdaten schlagen Forenpauschalen',
          ],
        },
        {
          heading: 'Wann Audi verkaufen? Die besten Zeitfenster',
          paragraphs: [
            'Wann Audi verkaufen sinnvoll ist, hängt oft von drei Zeitpunkten ab: vor teuren Reparaturen, vor Ablauf wichtiger Garantien und vor hohen Laufleistungsschwellen mit steigenden Abschlägen.',
            'Zusätzlich sind TÜV-nahe Investitionen ein klassisches Entscheidungsfenster. Wer früh kalkuliert, kann den Verkauf planbar und ohne Notdruck umsetzen.',
            'In der Praxis erzielen Halter häufig bessere Ergebnisse, wenn sie im fahrbereiten Zustand mit vollständigen Unterlagen verkaufen.',
          ],
          bullets: [
            'Vor großen Reparaturblöcken neu rechnen',
            'Garantie- und Kulanzfenster aktiv nutzen',
            'Nicht erst nach Ausfall verkaufen',
          ],
        },
        {
          heading: 'Audi Reparaturkosten: Übersicht und wirtschaftliche Einordnung',
          paragraphs: [
            'Audi Reparaturkosten variieren stark je nach Schadbild, Modell und Werkstattweg. Einzelmaßnahmen können noch sinnvoll sein, mehrere parallele Risiken verändern jedoch schnell die Gesamtrechnung.',
            'Für eine belastbare Entscheidung sollten Sie sichere Mindestkosten, wahrscheinliche Folgekosten und den realistischen Mehrerlös nach Reparatur gegenüberstellen.',
            'Wenn der erwartete Mehrwert die Investition nicht klar übersteigt, ist Verkauf oft die ökonomisch stabilere Lösung.',
          ],
          bullets: [
            'Mindestkosten plus Risikoaufschlag berechnen',
            'Mehrerlös nach Reparatur konservativ schätzen',
            'Nettoeffekt statt Einzelrechnung beurteilen',
          ],
        },
        {
          heading: 'Reparieren oder verkaufen? Praktischer Entscheidungsleitfaden',
          paragraphs: [
            'Nutzen Sie drei Fragen: Erstens, wie hoch ist die sichere Investition? Zweitens, wie hoch ist das Risiko weiterer Defekte im nächsten Jahr? Drittens, wie realistisch steigt der Verkaufspreis nach Instandsetzung?',
            'Ergänzen Sie indirekte Kosten wie Standzeit, Ersatzmobilität und Organisationsaufwand. Gerade bei beruflicher Nutzung sind diese Faktoren oft unterschätzt.',
            'Wenn Risiko und Aufwand den potenziellen Mehrerlös relativieren, ist ein geordneter Verkauf die klarere Entscheidung.',
          ],
        },
        {
          heading: 'Wie maximieren Sie den Verkaufspreis Ihres Audi?',
          paragraphs: [
            'Der stärkste Hebel ist Vorbereitung: vollständige Unterlagen, saubere Zustandsbeschreibung, nachvollziehbare Wartung und klare Mängelangaben.',
            'Bei Audi Fahrzeugen honorieren Käufer technische Transparenz besonders stark. Verdeckte Probleme führen dagegen fast immer zu harten Preisabschlägen im späteren Prozess.',
            'Praktisch bewährt: Fahrzeugdaten präzise aufbereiten, Servicehistorie sortieren, realistischen Zielkorridor setzen und einen sicheren Verkaufskanal wählen.',
          ],
          bullets: [
            'Servicebelege, HU-Berichte und Schlüssel vollständig halten',
            'Bekannte Mängel offen kommunizieren',
            'Preisstrategie datenbasiert statt emotional wählen',
          ],
        },
        {
          heading: 'Praxisbeispiele: Reparaturkosten versus Restwert bei Audi A4 und A6',
          paragraphs: [
            'In der Praxis zeigt sich häufig ein ähnliches Muster: Ein Audi A4 mit hoher Laufleistung hat einzelne, zunächst überschaubare Themen - etwa Ölverbrauch, Fahrwerkskomponenten und Elektronikmeldungen. Jede Position für sich wirkt beherrschbar, in der Summe entsteht jedoch ein Reparaturpaket, das den erwartbaren Mehrerlös nach Instandsetzung deutlich reduziert.',
            'Beim Audi A6 sehen wir oft den gleichen Effekt auf höherem Kostenniveau: Werden Getriebeauffälligkeiten, Abgasnachbehandlung und weitere Verschleißpositionen parallel relevant, verschiebt sich die Wirtschaftlichkeit schnell. Viele Halter rechnen nur die erste Werkstattrechnung, nicht aber Folgeaufwand, Standzeit und Preisrisiko in den nächsten Monaten.',
            'Der entscheidende Punkt ist deshalb nicht, ob eine Reparatur technisch möglich ist, sondern ob sie wirtschaftlich sinnvoll bleibt. Wenn das Kosten-Risiko-Profil den stabilen Marktwert deutlich belastet, ist ein früher, sauber geplanter Verkauf häufig die bessere Bilanzentscheidung.',
          ],
          bullets: [
            'Einzelreparaturen immer als Gesamtkette bewerten',
            'Standzeit- und Folgekosten in die Rechnung aufnehmen',
            'Verkauf vor Kosteneskalation sichert oft den besseren Nettoeffekt',
          ],
        },
        {
          heading: 'Warum Autoankauf für Audi oft die beste Lösung ist',
          paragraphs: [
            'Der Privatverkauf kann theoretisch mehr Erlös bringen, ist bei technischen Fragen jedoch oft langsam und unsicher. Gerade bei Motorschaden, S tronic-Themen oder hoher Laufleistung steigt das Risiko geplatzter Abschlüsse.',
            'Ein strukturierter Audi Ankauf bietet planbaren Ablauf, klare Vertragsbasis und schnelle Auszahlung - insbesondere dann, wenn Zeit, Sicherheit und Verlässlichkeit wichtig sind.',
            'Wenn Sie Ihr Kostenrisiko begrenzen und Ihren Audi ohne langen Vermarktungsprozess verkaufen möchten, ist der professionelle Autoankauf häufig der effizientere Weg.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Welche Audi Probleme sind beim Verkauf besonders relevant?',
          a: 'Vor allem Motorthemen (z. B. TFSI Ölverbrauch), Getriebeauffälligkeiten bei S tronic, Elektronikprobleme sowie dieseltypische EGR/DPF-Themen beeinflussen Preis und Risiko deutlich.',
        },
        {
          q: 'Wann sollte ich meinen Audi verkaufen?',
          a: 'Häufig vor größeren Reparaturblöcken, vor Garantieende oder vor steigenden Abschlägen bei hoher Laufleistung. Ein früher Verkauf reduziert Entscheidungsdruck.',
        },
        {
          q: 'Kann ich einen Audi mit Defekten trotzdem fair verkaufen?',
          a: 'Ja. Mit transparenter Zustandsbeschreibung, vollständigen Unterlagen und realistischer Preislogik sind auch Defektfahrzeuge strukturiert verkäuflich.',
        },
        {
          q: 'Lohnt sich Reparatur bei Audi Motorschaden?',
          a: 'Das hängt von Schadensumfang, Folgerisiko und realistischem Mehrerlös ab. Wenn Kosten und Risiko den Mehrwert übersteigen, ist Verkauf meist sinnvoller.',
        },
        {
          q: 'Sind Audi A4 und A6 automatisch problematisch?',
          a: 'Nein. Entscheidend sind Baujahr, Motorisierung, Getriebe, Wartungsstand und dokumentierter Zustand - nicht nur die Modellbezeichnung.',
        },
      ],
      relatedSlugs: [
        'autoankauf-mit-motorschaden',
        'autoankauf-ohne-tuev',
        'kilometerstand-scheckheft-vorbesitzer-preis',
        'online-autoankauf-ablauf-7-schritte',
      ],
      coreLink: '/auto-verkaufen',
      ctaBridge: {
        heading: 'Audi jetzt verkaufen statt weiter ins Risiko fahren?',
        text: 'Prüfen Sie Ihren Audi Ankaufpreis und starten Sie den Verkauf mit einem klaren, sicheren Ablauf.',
        href: '/audi-verkaufen',
        label: 'Zur Audi Ankaufseite',
      },
    },
  },
  oldtimer: {
    slug: 'oldtimer',
    displayName: 'Oldtimer',
    keywordMap: {
      primary: ['Oldtimer verkaufen', 'Oldtimer Ankauf', 'Autoankauf Oldtimer'],
      secondary: [
        'klassische Autos verkaufen',
        'Oldtimer Bewertung',
        'Oldtimer Ankauf Deutschland',
        'Oldtimer mit Motorschaden verkaufen',
        'restaurationsbedürftiger Oldtimer verkaufen',
        'Oldtimer Export Ankauf',
        'Sammlerauto verkaufen',
        'Youngtimer verkaufen',
      ],
      semantic: [
        'Oldtimer Wertgutachten',
        'Sammlerfahrzeug Verkauf',
        'historisches Fahrzeug verkaufen',
        'Oldtimer Zustand 1 bis 5',
        'Matching Numbers',
        'Scheunenfund verkaufen',
        'Oldtimer ohne Papiere',
        'Youngtimer Ankauf',
      ],
      longTail: [
        'Oldtimer Wert bestimmen vor dem Verkauf',
        'Wann Oldtimer verkaufen vor Restaurationskosten',
        'Oldtimer restaurieren oder verkaufen Entscheidung',
        'Nicht fahrbereiten Oldtimer verkaufen in Deutschland',
        'Seltenen Oldtimer sicher und professionell verkaufen',
      ],
    },
    uniquenessRules: {
      introAngle:
        'Der Fokus liegt auf emotionalem Besitzwert plus wirtschaftlicher Realität: Sammlerbindung respektieren, aber Verkauf über belastbare Markt- und Zustandslogik steuern.',
      requiredInsights: [
        'Wertfaktoren bei Originalität, Historie und Zustandsnoten 1 bis 5',
        'Abwägung zwischen Restaurationsbudget und realem Marktwert',
        'Unterschied zwischen Sammlerfahrzeug, Projektfahrzeug und Youngtimer im Ankauf',
      ],
      bannedPatterns: [
        'generische Gebrauchtwagenformulierungen ohne Sammlerbezug',
        'Wertsteigerung als pauschales Versprechen ohne Marktkontext',
        'identische FAQ-Fragen zwischen Oldtimer Landing und Guide',
      ],
      minimumSemanticKeywords: 14,
    },
    landing: {
      slugPath: '/oldtimer-verkaufen',
      seoTitle: 'Oldtimer verkaufen: Ankauf vom Experten',
      seoDescription:
        'Oldtimer verkaufen mit Expertenbewertung: fairer Preis, sichere Auszahlung, deutschlandweite Abholung. Auch Scheunenfund, Unfall und Motorschaden.',
      canonicalPath: '/oldtimer-verkaufen',
      heroHeadline: 'Oldtimer verkaufen mit Respekt für Geschichte und Wert',
      heroSubheadline:
        'Professioneller Oldtimer Ankauf Deutschland für Sammlerfahrzeuge, Projektfahrzeuge und Youngtimer',
      h1: 'Oldtimer Ankauf: Ihren Klassiker sicher, fair und professionell verkaufen',
      intro: [
        'Ein Oldtimer ist selten nur ein Fahrzeug. Für viele Besitzer ist er ein Teil der eigenen Geschichte: restaurierte Wochenenden, lange Suche nach Originalteilen, Erinnerungen an Ausfahrten und Treffen. Genau deshalb fühlt sich der Schritt "Oldtimer verkaufen" oft schwerer an als ein normaler Fahrzeugverkauf.',
        'Gleichzeitig braucht ein wertiger Klassiker einen Verkaufsprozess, der nicht auf schnelle Standardpreise setzt, sondern auf Substanz: Originalität, Zustand, Historie, Dokumente und Marktnachfrage. Unser Oldtimer Ankauf verbindet genau diese Perspektive - emotional respektvoll und wirtschaftlich klar.',
        'Ob Sie ein Sammlerauto verkaufen möchten, einen restaurationsbedürftigen Oldtimer verkaufen müssen oder einen nicht fahrbereiten Scheunenfund abgeben wollen: Wir bieten eine strukturierte und transparente Lösung. Sie erhalten eine nachvollziehbare Bewertung, einen professionellen Ablauf und eine sichere Auszahlung.',
        'Viele Privatverkäufe scheitern bei Oldtimern an unsicheren Interessenten, unrealistischen Preisdebatten und fehlender Verbindlichkeit. Mit unserem Autoankauf Oldtimer umgehen Sie diese Risiken und behalten jederzeit die Kontrolle über den Prozess.',
      ],
      benefitHeading: 'Warum Oldtimer-Besitzer uns vertrauen',
      benefits: [
        'Erfahrung mit klassischen Fahrzeugen: Wir unterscheiden zwischen Sammlerqualität, solider Fahrerqualität und Projektfahrzeugen.',
        'Faire Oldtimer Bewertung statt Pauschalpreis: Seltenheit, Zustand 1 bis 5, Historie, Originalität und Dokumentation fließen nachvollziehbar ein.',
        'Ankauf auch in schwierigen Fällen: Oldtimer mit Motorschaden, Unfallschaden oder Restaurationsstau sind möglich.',
        'Spezialisierung auf Scheunenfunde und Fahrzeuge ohne vollständige Papiere inklusive sauberer Vorprüfung.',
        'Youngtimer verkaufen mit klarer Marktlogik: Auch Fahrzeuge knapp unter 30 Jahren können strukturiert angekauft werden.',
        'Deutschlandweite Abholung und optionaler Oldtimer Export Ankauf für passende Fahrzeugprofile.',
      ],
      processHeading: 'Oldtimer verkaufen in 3 klaren Schritten',
      processSteps: [
        {
          title: '1. Fahrzeugprofil und Historie übermitteln',
          text: 'Sie senden Basisdaten, Fotos, bekannte Mängel und - wenn vorhanden - wichtige Nachweise wie Rechnungen, Gutachten, Datenkarte, Besitzhistorie oder Restaurationsdokumentation.',
        },
        {
          title: '2. Bewertungslogik transparent nachvollziehen',
          text: 'Wir bewerten Ihren Klassiker auf Basis von Seltenheit, Zustand (1 bis 5), Originalitätsgrad, Dokumentationslage und aktueller Nachfrage im Sammler- bzw. Enthusiastenmarkt.',
        },
        {
          title: '3. Übergabe, Abholung und sichere Auszahlung',
          text: 'Nach Angebot und Termin folgt die geordnete Übergabe inklusive Vertragsdokumentation. Auf Wunsch organisieren wir die Abholung deutschlandweit, bei geeigneten Fahrzeugen auch für Exportmärkte.',
        },
      ],
      buyTypesHeading: 'Welche Oldtimer und Youngtimer wir ankaufen',
      buyTypes: [
        {
          title: 'Restaurationsbedürftiger Oldtimer',
          text: 'Auch Projektfahrzeuge mit Investitionsbedarf können sinnvoll verkauft werden, wenn Zustand und Teilelage sauber dokumentiert sind.',
        },
        {
          title: 'Oldtimer Unfallfahrzeuge',
          text: 'Unfallschäden schließen den Verkauf nicht aus. Entscheidend sind Schadenbild, Reparaturstand und Verfügbarkeit passender Komponenten.',
        },
        {
          title: 'Nicht fahrbereiter Oldtimer',
          text: 'Defekte Motoren, Brems- oder Elektrikprobleme sind kein Ausschluss. Wir kaufen auch nicht fahrbereite Fahrzeuge mit realistischer Bewertung.',
        },
        {
          title: 'Scheunenfund verkaufen',
          text: 'Scheunenfunde bewerten wir nach Substanz, Originalteilen, Karosseriezustand und Restaurationspotenzial.',
        },
        {
          title: 'Oldtimer ohne Papiere',
          text: 'Auch bei unvollständiger Dokumentation prüfen wir die Ankaufmöglichkeit strukturiert und transparent.',
        },
        {
          title: 'Sammlerauto und seltene Modelle',
          text: 'Wertige Sammlerfahrzeuge mit besonderer Historie oder seltener Spezifikation werden differenziert und nicht wie Massenfahrzeuge behandelt.',
        },
        {
          title: 'Youngtimer verkaufen',
          text: 'Wir kaufen auch gefragte Youngtimer, wenn Zustand, Historie und Marktnachfrage ein stimmiges Profil ergeben.',
        },
      ],
      comparisonHeading: 'Warum professioneller Oldtimer Ankauf oft die bessere Option ist',
      comparisonRows: [
        {
          criterion: 'Preisfindung',
          us: 'Bewertung nach Zustand, Originalität, Historie und Marktfenster',
          privateSale: 'Häufig lange Diskussionen ohne belastbare Vergleichsbasis',
          traditionalDealer: 'Oft unzureichende Spezialisierung auf Klassiker',
        },
        {
          criterion: 'Seriosität der Käufer',
          us: 'Verbindlicher Prozess mit klarer Dokumentation',
          privateSale: 'Viele Besichtigungen ohne Abschlusswahrscheinlichkeit',
          traditionalDealer: 'Formal sicher, aber nicht immer oldtimeraffin',
        },
        {
          criterion: 'Schwierige Fahrzeugzustände',
          us: 'Ankauf bei Motorschaden, Scheunenfund, Restaurationsbedarf',
          privateSale: 'Starke Nachverhandlungen, häufige Terminabbrüche',
          traditionalDealer: 'Häufig restriktiv bei Spezialfällen',
        },
        {
          criterion: 'Abwicklungsgeschwindigkeit',
          us: 'Planbarer Ablauf mit optionaler Abholung',
          privateSale: 'Unkalkulierbar, oft mehrere Wochen',
          traditionalDealer: 'Abhängig von interner Bewertung und Einkaufspolitik',
        },
      ],
      trustHeading: 'Sicherheit und Vertrauen beim Verkauf Ihres Klassikers',
      trustPoints: [
        'Nachvollziehbare Bewertungsfaktoren statt intransparenter Lockpreise',
        'Sichere Auszahlung und klare Zahlungsdokumentation',
        'Vertraglich saubere Übergabe mit vollständigem Protokoll',
        'Deutschlandweite Abholung und professionelle Logistik',
        'Erfahrung mit Sammlerfahrzeugen, Projektfahrzeugen und Youngtimern',
      ],
      ctas: [
        {
          heading: 'Oldtimer jetzt unverbindlich bewerten',
          text: 'Lassen Sie Ihren Klassiker professionell einschätzen und erhalten Sie eine belastbare Preisorientierung.',
          label: 'Oldtimer bewerten',
          href: '/auto-bewerten',
        },
        {
          heading: 'Verkauf sicher starten',
          text: 'Wenn Sie bereits verkaufen möchten, führen wir Sie strukturiert durch Angebot, Termin, Abholung und Auszahlung.',
          label: 'Oldtimer Verkauf starten',
          href: '/auto-verkaufen',
        },
        {
          heading: 'Erst Wert und Strategie klären',
          text: 'Unser Oldtimer Guide zeigt, wie Sie Wert, Markttrend und Restaurationsentscheidung sauber einordnen.',
          label: 'Zum Oldtimer Guide',
          href: '/ratgeber/oldtimer-wert-verkauf',
        },
      ],
      faqHeading: 'FAQ: Oldtimer verkaufen, Bewertung und Ankauf',
      faqs: [
        {
          q: 'Wie läuft eine Oldtimer Bewertung bei Ihnen ab?',
          a: 'Wir bewerten nach Seltenheit, Zustand 1 bis 5, Originalität, Historie und Dokumentation. So entsteht ein nachvollziehbares und marktgerechtes Angebot.',
        },
        {
          q: 'Kaufen Sie auch restaurationsbedürftige Oldtimer an?',
          a: 'Ja. Auch restaurationsbedürftige Fahrzeuge können angekauft werden, wenn Substanz und Zustand transparent dargestellt sind.',
        },
        {
          q: 'Kann ich einen Oldtimer mit Motorschaden verkaufen?',
          a: 'Ja. Ein Motorschaden schließt den Ankauf nicht aus. Entscheidend ist eine ehrliche Zustandsbeschreibung und die technische Gesamtsituation.',
        },
        {
          q: 'Ist der Ankauf auch bei Scheunenfunden möglich?',
          a: 'Ja. Scheunenfunde sind grundsätzlich möglich. Wir prüfen Karosserie, Originalteile, Dokumente und Restaurationspotenzial.',
        },
        {
          q: 'Was ist, wenn Unterlagen oder Papiere fehlen?',
          a: 'Auch Fahrzeuge ohne vollständige Unterlagen können geprüft werden. Wir klären transparent, welche Nachweise für einen sauberen Verkauf nötig sind.',
        },
        {
          q: 'Bieten Sie Oldtimer Ankauf Deutschlandweit an?',
          a: 'Ja. Wir organisieren den Ankauf in ganz Deutschland und bieten in vielen Fällen eine Abholung an.',
        },
        {
          q: 'Ist auch ein Oldtimer Export Ankauf möglich?',
          a: 'Bei geeigneten Fahrzeugprofilen ja. Abhängig von Modell, Zustand und Dokumentenlage prüfen wir Exportoptionen im Ankaufprozess.',
        },
        {
          q: 'Kaufen Sie auch Youngtimer?',
          a: 'Ja. Wenn Nachfrage, Historie und Zustand stimmen, kann auch ein Youngtimer strukturiert angekauft werden.',
        },
      ],
      internalLinksHeading: 'Weiterführende Seiten für Ihren Klassiker-Verkauf',
      internalLinks: [
        {
          href: '/auto-bewerten',
          label: 'Oldtimer kostenlos bewerten',
          context: 'Für eine erste, unverbindliche Wertermittlung vor dem Verkauf.',
        },
        {
          href: '/auto-verkaufen',
          label: 'Verkaufsablauf im Detail',
          context: 'Wenn Sie sofort in die strukturierte Abwicklung einsteigen möchten.',
        },
        {
          href: '/ratgeber/oldtimer-wert-verkauf',
          label: 'Oldtimer Guide: Wert und Verkaufszeitpunkt',
          context: 'Für die Entscheidung zwischen Restaurieren und Verkaufen.',
        },
      ],
    },
    guide: {
      slug: 'oldtimer-wert-verkauf',
      seoTitle: 'Oldtimer Wert & Verkauf: Der Praxis-Guide 2026',
      seoDescription:
        'Oldtimer Wert bestimmen, Markttrend einordnen und den besten Verkaufszeitpunkt finden. Mit Zustand 1-5, Restaurierungscheck und Sammler-Praxis.',
      h1: 'Oldtimer Guide: Wert bestimmen, Markt verstehen und besser verkaufen',
      intro:
        'Ein Klassiker wird selten nur mit dem Kopf verkauft. Zwischen Herz, Historie und Marktpreis entsteht oft Unsicherheit: Ist jetzt der richtige Zeitpunkt? Lohnt Restaurieren noch? Welche Unterlagen erhöhen den Wert wirklich? Dieser Guide liefert eine klare Entscheidungsgrundlage für Oldtimer- und Youngtimer-Besitzer in Deutschland.',
      quickFacts: [
        'Oldtimer gelten in der Regel ab 30 Jahren, doch der Wert hängt stark von Zustand, Originalität und Historie ab.',
        'Zustandsnoten 1 bis 5 sind ein zentraler Preishebel - inklusive nachvollziehbarer Dokumentation.',
        'Oldtimer Preise Entwicklung verläuft nicht linear; Modell- und Segmenttrends unterscheiden sich deutlich.',
        'Der beste Verkaufszeitpunkt liegt oft vor großen Restaurations- oder Instandsetzungskosten.',
        'Youngtimer können bei starker Nachfrage ebenfalls attraktive Verkaufserlöse erzielen.',
        'Professioneller Ankauf reduziert Käufer-Risiko, Zeitaufwand und Verhandlungsstress.',
      ],
      sections: [
        {
          heading: 'Was macht ein Fahrzeug zum Oldtimer?',
          paragraphs: [
            'Formal wird ein Fahrzeug in Deutschland meist ab einem Alter von 30 Jahren als Oldtimer eingeordnet. Für den Marktwert reicht das Alter allein jedoch nicht aus: Historische Relevanz, Originalsubstanz und der Erhaltungszustand bestimmen, ob aus einem alten Auto ein begehrtes Sammlerfahrzeug wird.',
            'Viele Besitzer unterschätzen diesen Unterschied. Ein 30+ Fahrzeug kann emotional und historisch interessant sein, erreicht aber ohne entsprechende Substanz oder Nachfrage nicht automatisch Spitzenpreise.',
            'Für die Verkaufsstrategie ist daher wichtig, Oldtimer und Youngtimer klar zu trennen und beide Segmente mit eigener Marktlogik zu betrachten.',
          ],
          bullets: [
            'Oldtimer: typischerweise 30 Jahre und älter',
            'Youngtimer: oft jünger, aber bereits sammlerrelevant',
            'Werttreiber: Zustand, Originalität, Historie, Nachfrage',
          ],
        },
        {
          heading: 'Wie können Sie den Oldtimer Wert bestimmen?',
          paragraphs: [
            'Oldtimer Wert bestimmen heißt, mehrere Faktoren sauber zusammenzuführen: technischer und optischer Zustand, Originalteile, Historie, Restaurierungsqualität, Dokumente und Marktumfeld. Einzelne Highlights genügen selten, wenn die übrige Fahrzeugsubstanz unklar bleibt.',
            'In der Praxis hat sich die Einordnung über Zustandsnoten 1 bis 5 etabliert. Sie hilft, den Wert realistisch einzuordnen - vorausgesetzt, die Bewertung wird nachvollziehbar dokumentiert und nicht nur aus dem Bauch heraus vergeben.',
            'Zusätzlich spielt die Nachweisqualität eine große Rolle: Rechnungen, Gutachten, alte Briefe, Datenkarten, Fotos und Besitzhistorie reduzieren Unsicherheit und stützen den Preis.',
          ],
          bullets: [
            'Zustand 1 bis 5 als strukturierter Bewertungsrahmen',
            'Originalität und Matching-Details als Sammlerhebel',
            'Dokumentationslage wirkt direkt auf die Preisstabilität',
          ],
        },
        {
          heading: 'Welche Rolle spielen Originalität, Seltenheit und Historie?',
          paragraphs: [
            'Originalität ist im Sammlermarkt oft der entscheidende Unterschied zwischen "interessant" und "gesucht". Fahrzeuge mit stimmiger Auslieferungskonfiguration, originaler Farbkombination und plausibler Historie sind für ernsthafte Käufer meist attraktiver als stark umgebaute Exemplare.',
            'Seltenheit kann den Wert erhöhen, aber nur in Verbindung mit Nachfrage und Zustand. Ein seltenes Modell in schwacher Substanz ist nicht automatisch höher bewertet als ein häufigeres Modell in belegter Top-Historie.',
            'Historie schafft Vertrauen: nachvollziehbare Besitzerfolge, bekannte Herkunft, dokumentierte Wartung und belegte Restaurierung sind gerade bei hochpreisigen Transaktionen zentrale Kaufargumente.',
          ],
        },
        {
          heading: 'Oldtimer Preise Entwicklung: Steigen Klassiker immer weiter?',
          paragraphs: [
            'Die Oldtimer Preise Entwicklung verläuft zyklisch und segmentabhängig. Manche Modelle profitieren von stabiler Sammlernachfrage, andere verlieren an Dynamik, wenn das Käuferinteresse abnimmt oder das Angebot steigt.',
            'Pauschale Aussagen wie "Oldtimer steigen immer im Wert" sind zu kurz gegriffen. Entscheidender sind Einstiegspreis, Qualität der Substanz, laufende Kosten, Markttrend des Modells und die Liquidität im Käufersegment.',
            'Für Verkäufer ist daher sinnvoll, den individuellen Marktzeitpunkt zu prüfen: In einem starken Fenster kann ein Verkauf wirtschaftlich klüger sein als ein weiteres Haltejahr mit steigenden Kosten.',
          ],
        },
        {
          heading: 'Wann Oldtimer verkaufen? Die besten Zeitfenster',
          paragraphs: [
            'Wann Oldtimer verkaufen sinnvoll ist, hängt von drei Achsen ab: Marktfenster, technischer Zustand und Kostenperspektive. Häufig ist der beste Zeitpunkt vor einer größeren Restaurierungs- oder Reparaturphase, nicht danach.',
            'Sobald mehrere kostenintensive Themen gleichzeitig anstehen - Karosserie, Technik, Interieur, Lack - sollte der Verkauf aktiv geprüft werden. Denn nicht jede Investition lässt sich im Verkaufspreis vollständig zurückholen.',
            'Auch persönliche Faktoren zählen: Zeit für Pflege und Bewegung, Stellplatzsituation, Versicherungs- und Unterhaltskosten. Ein geordneter Verkauf aus Ruhe heraus führt meist zu besseren Ergebnissen als ein später Notverkauf.',
          ],
          bullets: [
            'Vor großen Kostenblöcken neu bewerten',
            'Marktfenster des konkreten Modells beobachten',
            'Nicht erst unter Zeitdruck verkaufen',
          ],
        },
        {
          heading: 'Welche Herausforderungen gibt es beim Oldtimer-Verkauf?',
          paragraphs: [
            'Viele Verkäufer finden zwar Interessenten, aber nicht automatisch ernsthafte Käufer. Besichtigungstourismus, unklare Zahlungsbereitschaft und zähe Verhandlungen sind im Klassikersegment häufig.',
            'Ein weiteres Problem ist Preisunsicherheit. Ohne klare Bewertungsbasis entstehen oft unrealistische Erwartungen auf beiden Seiten, was zu langen Vermarktungszeiten führt.',
            'Zusätzlich können Logistik, Dokumentenlage und rechtssichere Vertragsgestaltung anspruchsvoll sein - insbesondere bei seltenen oder nicht fahrbereiten Fahrzeugen.',
          ],
          bullets: [
            'Schwierige Trennung zwischen Liebhaber-Anfrage und echter Kaufabsicht',
            'Hohe Varianz in Preisvorstellungen',
            'Mehr Aufwand bei Unterlagen, Transport und Vertrag',
          ],
        },
        {
          heading: 'Oldtimer restaurieren oder verkaufen - was ist wirtschaftlich sinnvoll?',
          paragraphs: [
            'Die Frage "Oldtimer restaurieren oder verkaufen" sollte nüchtern gerechnet werden: Wie hoch ist das sichere Restaurationsbudget? Welche Folgekosten sind wahrscheinlich? Und wie stark steigt der erzielbare Marktwert danach wirklich?',
            'Viele Teilrestaurationen wirken zunächst überschaubar, erweitern sich aber durch versteckte Zusatzarbeiten deutlich. Dadurch verschiebt sich die Wirtschaftlichkeit schneller als geplant.',
            'Wenn Investition, Risiko und Zeitaufwand den realistischen Mehrerlös nicht klar übersteigen, ist der Verkauf im aktuellen Zustand oft die bessere Entscheidung - insbesondere bei Projektfahrzeugen ohne kurzfristige Nutzungsperspektive.',
          ],
          bullets: [
            'Budget realistisch inklusive Reserve planen',
            'Mehrwert nach Restaurierung konservativ schätzen',
            'Zeit- und Opportunitätskosten immer mitrechnen',
          ],
        },
        {
          heading: 'Welche Oldtimer sind wertvoll - und welche Youngtimer werden interessant?',
          paragraphs: [
            'Welche Oldtimer sind wertvoll, lässt sich nur modellbezogen beantworten. Typisch sind Fahrzeuge mit starker Markenhistorie, limitierter Produktion, hoher Originalität und nachvollziehbarer Dokumentation.',
            'Bei Youngtimern spielen zusätzlich Faktoren wie aufkommende Enthusiasten-Nachfrage, technische Besonderheiten, Produktionszahlen und Erhaltungszustand eine große Rolle.',
            'Für Verkäufer ist entscheidend, das eigene Fahrzeug nicht über allgemeine Listen, sondern über das konkrete Marktprofil bewerten zu lassen.',
          ],
        },
        {
          heading: 'Wie maximieren Sie den Verkaufspreis Ihres Klassikers?',
          paragraphs: [
            'Die stärksten Hebel sind Transparenz und Vorbereitung. Käufer im Oldtimersegment zahlen für nachvollziehbare Qualität - nicht für unklare Hoffnung.',
            'Sammeln Sie Dokumente, strukturieren Sie Fotos, benennen Sie bekannte Mängel offen und setzen Sie einen realistischen Preisrahmen. So reduzieren Sie Unsicherheit und verhindern aggressive Nachverhandlungen.',
            'Auch bei nicht perfektem Zustand lässt sich ein starker Verkauf erreichen, wenn Substanz, Historie und Ablauf professionell aufbereitet sind.',
          ],
          bullets: [
            'Unterlagen bündeln: Gutachten, Rechnungen, Historie, Schlüssel',
            'Mängel offen benennen statt späterer Preisstürze',
            'Verkaufskanal passend zu Fahrzeugtyp wählen',
          ],
        },
        {
          heading: 'Warum ist ein professioneller Oldtimer Ankauf oft sicherer?',
          paragraphs: [
            'Professionelle Ankäufer arbeiten mit klaren Prozessen: strukturierte Bewertung, verlässliche Vertragsgestaltung, nachvollziehbare Zahlung und organisierte Logistik. Das reduziert Risiken, die im Privatverkauf häufig auftreten.',
            'Gerade bei wertigen Klassikern, Scheunenfunden oder nicht fahrbereiten Fahrzeugen ist diese Planbarkeit oft wichtiger als ein theoretisch höherer Wunschpreis ohne Abschlussgarantie.',
            'Wenn Sie einen sicheren und geordneten Abschluss wünschen, ist ein professioneller Oldtimer Ankauf häufig die effizientere und nervenschonendere Lösung.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Wie kann ich den Wert meines Oldtimers realistisch einschätzen?',
          a: 'Kombinieren Sie Zustandsnote, Originalität, Historie, Dokumente und Markttrend des Modells. Eine strukturierte Bewertung ist belastbarer als Vergleich mit Einzelinseraten.',
        },
        {
          q: 'Ist ein Verkauf im unrestaurierten Zustand sinnvoll?',
          a: 'Ja, häufig sogar. Wenn Restaurationskosten und Risiko den erwartbaren Mehrerlös nicht klar übersteigen, ist der Verkauf im Ist-Zustand oft wirtschaftlicher.',
        },
        {
          q: 'Steigen Oldtimerpreise dauerhaft?',
          a: 'Nicht pauschal. Preisentwicklungen sind modell- und segmentabhängig. Einige Fahrzeuge steigen, andere stagnieren oder verlieren.',
        },
        {
          q: 'Kann ich auch einen Youngtimer professionell verkaufen?',
          a: 'Ja. Viele Youngtimer sind sammlerrelevant. Entscheidend sind Nachfrage, Zustand, Historie und technisches Profil.',
        },
        {
          q: 'Warum ist ein professioneller Ankauf bei Klassikern oft sicherer?',
          a: 'Weil Bewertung, Vertrag, Zahlung und Übergabe klar strukturiert sind und Sie weniger Risiko durch unklare Käufer oder geplatzte Termine haben.',
        },
      ],
      relatedSlugs: [
        'unterlagen-autoverkauf-checkliste',
        'rechtssicherer-kaufvertrag-auto',
        'autoabmeldung-nach-verkauf',
        'autoverkauf-an-exporthaendler',
      ],
      coreLink: '/auto-verkaufen',
      ctaBridge: {
        heading: 'Oldtimer jetzt strukturiert verkaufen?',
        text: 'Prüfen Sie den aktuellen Marktwert Ihres Klassikers und starten Sie den Verkauf mit einem professionellen, sicheren Ablauf.',
        href: '/oldtimer-verkaufen',
        label: 'Zur Oldtimer Ankaufseite',
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
