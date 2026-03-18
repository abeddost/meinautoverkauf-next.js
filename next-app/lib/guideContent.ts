import type { FAQItem } from './faqContent';

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuidePageContent {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  quickFacts: string[];
  sections: GuideSection[];
  faqs: FAQItem[];
  relatedSlugs: string[];
  coreLink: '/auto-bewerten' | '/auto-verkaufen';
}

const SLUG_EVALUATION_FAQ: Record<string, FAQItem> = {
  'autoankauf-trotz-finanzierung': {
    q: 'Ist die Fahrzeugbewertung auch bei laufendem Kredit unverbindlich?',
    a: 'Ja. Auch bei Finanzierung bleibt die Bewertung unverbindlich, damit Sie Restschuld und Verkaufsoptionen in Ruhe vergleichen können.',
  },
  'auto-mit-motorschaden-verkaufen': {
    q: 'Kann ich trotz Motorschaden eine kostenlose Ersteinschätzung erhalten?',
    a: 'Ja. Eine unverbindliche Bewertung ist auch bei deutlichem Motordefekt möglich, wenn Zustand und bekannte Schäden klar beschrieben werden.',
  },
  'autoankauf-ohne-tuev': {
    q: 'Gibt es eine unverbindliche Bewertung auch ohne gültigen TÜV?',
    a: 'Ja. Der TÜV-Status wird in der Bewertung berücksichtigt, ohne dass dadurch eine Verpflichtung zum Verkauf entsteht.',
  },
  'unfallwagen-verkaufen': {
    q: 'Ist die Bewertung bei dokumentiertem Unfallschaden kostenlos?',
    a: 'Ja. Auch Unfallfahrzeuge können unverbindlich bewertet werden, wenn Schadenhistorie und Reparaturstand transparent angegeben sind.',
  },
  'unfallwagen-ankauf': {
    q: 'Bekomme ich für einen Unfallwagen eine schnelle Ersteinschätzung?',
    a: 'Ja. Eine erste, unverbindliche Einschätzung ist möglich, bevor ein konkreter Ankauftermin abgestimmt wird.',
  },
  'unterlagen-autoverkauf-checkliste': {
    q: 'Kann ich vorab prüfen, ob meine Unterlagen für die Bewertung ausreichen?',
    a: 'Ja. Bereits mit den Kernunterlagen ist eine erste Einschätzung möglich; fehlende Nachweise können anschließend gezielt ergänzt werden.',
  },
  'auto-online-verkaufen-sofort-auszahlung': {
    q: 'Ist die Online-Einschätzung vor einer Sofort-Auszahlung kostenfrei?',
    a: 'Ja. Die Bewertung ist kostenlos und dient als Grundlage, bevor Sie über den finalen Verkauf entscheiden.',
  },
  'autoankauf-mit-motorschaden': {
    q: 'Kann ich ein nicht fahrbereites Auto unverbindlich anfragen?',
    a: 'Ja. Auch bei nicht fahrbereiten Fahrzeugen ist die Ersteinschätzung kostenlos und unverbindlich.',
  },
  'online-autoankauf-ablauf-7-schritte': {
    q: 'Startet der 7-Schritte-Ablauf mit einer unverbindlichen Bewertung?',
    a: 'Ja. Der Prozess beginnt mit einer kostenlosen Einschätzung, erst spätere Schritte führen bei Wunsch zum verbindlichen Abschluss.',
  },
  'autoexport-ankauf': {
    q: 'Ist die Bewertung für exportgeeignete Fahrzeuge kostenfrei?',
    a: 'Ja. Auch Exportfahrzeuge werden zunächst unverbindlich bewertet, bevor ein konkreter Ankaufprozess beginnt.',
  },
  'autoankauf-firmenwagen-gewerbe': {
    q: 'Können Firmenfahrzeuge vorab unverbindlich bewertet werden?',
    a: 'Ja. Für einzelne Fahrzeuge oder Teilflotten ist eine kostenfreie Ersteinschätzung möglich.',
  },
  'autoverkauf-an-exporthaendler': {
    q: 'Kann ich Export und Direktankauf zunächst unverbindlich vergleichen?',
    a: 'Ja. Eine unverbindliche Bewertung hilft, die wirtschaftlich sinnvollste Verkaufsroute zu wählen.',
  },
  'kilometerstand-scheckheft-vorbesitzer-preis': {
    q: 'Berücksichtigt die Bewertung Kilometerstand und Historie differenziert?',
    a: 'Ja. Laufleistung, Wartungsnachweise und Halterhistorie fließen gemeinsam in eine unverbindliche Einschätzung ein.',
  },
  'rechtssicherer-kaufvertrag-auto': {
    q: 'Kann ich vor Vertragsabschluss unverbindlich bewerten lassen?',
    a: 'Ja. Die Bewertung bleibt unverbindlich, damit Sie Vertrags- und Unterlagenlage vor dem Abschluss sauber vorbereiten können.',
  },
  'autoverkauf-betrug-kleinanzeigen-erkennen': {
    q: 'Ist eine unverbindliche Bewertung eine Alternative zum riskanten Inseratstart?',
    a: 'Ja. Sie können zunächst kostenfrei bewerten und entscheiden danach, ob Sie ohne Kleinanzeigenrisiko direkt verkaufen möchten.',
  },
  'auto-online-inserieren-tipps-bilder': {
    q: 'Kann ich vor dem Inserieren eine kostenlose Preisorientierung einholen?',
    a: 'Ja. Eine unverbindliche Bewertung liefert eine belastbare Orientierung für realistische Inseratpreise.',
  },
  'autoabmeldung-nach-verkauf': {
    q: 'Ist die Bewertung auch dann unverbindlich, wenn Abmeldung schon mitgeplant wird?',
    a: 'Ja. Sie können den Ablauf inklusive Abmeldung prüfen, ohne sofort verkaufen zu müssen.',
  },
};

const SLUG_BASE_FAQS: Record<string, FAQItem[]> = {
  'autoankauf-trotz-finanzierung': [
    {
      q: 'Welche Unterlagen sind für den Verkauf eines finanzierten Autos entscheidend?',
      a: 'Wichtig sind vor allem Kreditdaten, Restschuldinformation, Halternachweis und die Abstimmung zur Brief-Freigabe mit der Bank.',
    },
    {
      q: 'Kann die Auszahlung direkt mit der finanzierenden Bank verrechnet werden?',
      a: 'Ja. In vielen Fällen wird die Restschuld direkt berücksichtigt und nur der verbleibende Betrag an Sie ausgezahlt.',
    },
  ],
  'auto-mit-motorschaden-verkaufen': [
    {
      q: 'Sollte ich vor dem Verkauf noch eine große Reparatur starten?',
      a: 'Nur wenn Kosten, Zeitaufwand und erwarteter Mehrerlös belastbar kalkuliert sind. Ohne klare Rechnung ist der Direktverkauf oft wirtschaftlicher.',
    },
    {
      q: 'Welche Nachweise helfen bei der Bewertung trotz Motorschaden?',
      a: 'Werkstattdiagnosen, Servicehistorie und eine ehrliche Schadendokumentation verbessern Transparenz und Preisstabilität.',
    },
  ],
  'autoankauf-ohne-tuev': [
    {
      q: 'Ist ein Verkauf ohne aktuelle HU/AU rechtlich möglich?',
      a: 'Ja. Ein Fahrzeug ohne gültige HU/AU kann regulär verkauft werden, solange Zustand und Mängel transparent angegeben sind.',
    },
    {
      q: 'Wann lohnt sich eine neue HU vor dem Verkauf?',
      a: 'Das hängt von den erwarteten Reparaturkosten ab. Bei hoher Unsicherheit ist der Direktverkauf häufig die planbarere Lösung.',
    },
  ],
  'unfallwagen-verkaufen': [
    {
      q: 'Muss ein Unfallschaden im Kaufvertrag ausdrücklich genannt werden?',
      a: 'Ja. Bekannte Schäden sollten konkret dokumentiert werden, um spätere Streitfälle zu vermeiden.',
    },
    {
      q: 'Welche Unterlagen stärken einen rechtssicheren Unfallwagenverkauf?',
      a: 'Gutachten, Reparaturrechnungen und eine klare Zustandsbeschreibung erhöhen Rechtssicherheit und Nachvollziehbarkeit.',
    },
  ],
  'unfallwagen-ankauf': [
    {
      q: 'Werden auch Fahrzeuge mit größeren Karosserieschäden angekauft?',
      a: 'Ja. Entscheidende Faktoren sind Verwertbarkeit, technischer Gesamtzustand und dokumentierte Schadenhistorie.',
    },
    {
      q: 'Wie wird der Restwert bei einem Unfallwagen ermittelt?',
      a: 'Die Bewertung orientiert sich an Schadenumfang, Reparaturqualität, Modellnachfrage und realistischer Verwertungsoption.',
    },
  ],
  'unterlagen-autoverkauf-checkliste': [
    {
      q: 'Was passiert, wenn einzelne Unterlagen fehlen?',
      a: 'Fehlende Dokumente verzögern oft die Abwicklung. Mit Vorabprüfung lässt sich klären, welche Nachweise ersetzt oder beschafft werden müssen.',
    },
    {
      q: 'Sollte ich die Übergabeunterlagen digital sichern?',
      a: 'Ja. Digitale Kopien von Vertrag, Ausweisprüfung und Abmeldenachweis erleichtern spätere Nachweise erheblich.',
    },
  ],
  'auto-online-verkaufen-sofort-auszahlung': [
    {
      q: 'Wie erkenne ich, dass die Auszahlung sauber dokumentiert ist?',
      a: 'Ein belastbarer Zahlungsnachweis mit Betrag, Datum und Zuordnung zum Fahrzeug sorgt für klare Nachvollziehbarkeit.',
    },
    {
      q: 'Kann die Auszahlung am Tag der Übergabe erfolgen?',
      a: 'In vielen Fällen ja. Der konkrete Geldeingang hängt zusätzlich von Banklaufzeiten und dem Übergabezeitpunkt ab.',
    },
  ],
  'autoankauf-mit-motorschaden': [
    {
      q: 'Ist die Abholung bei nicht fahrbereitem Fahrzeug möglich?',
      a: 'Ja. Nicht fahrbereite Fahrzeuge können am Standort übernommen werden, wenn Zufahrt und Unterlagen vorab geklärt sind.',
    },
    {
      q: 'Welche Angaben beschleunigen den Motorschaden-Ankauf?',
      a: 'Hilfreich sind Schadendiagnose, Standortinfo, Schlüsselanzahl und vollständige Fahrzeugdokumente.',
    },
  ],
  'online-autoankauf-ablauf-7-schritte': [
    {
      q: 'Kann ich nach einem Zwischenschritt noch abbrechen?',
      a: 'Ja. Bis zur finalen Zusage bleibt der Prozess flexibel. Verbindlich wird der Verkauf erst mit Vertragsabschluss.',
    },
    {
      q: 'Warum ist ein strukturierter 7-Schritte-Ablauf sinnvoll?',
      a: 'Er reduziert Rückfragen, verhindert Lücken bei Unterlagen und macht jeden Übergabeschritt nachvollziehbar.',
    },
  ],
  'autoexport-ankauf': [
    {
      q: 'Welche Fahrzeuge sind typischerweise exportgeeignet?',
      a: 'Häufig ältere Diesel, hohe Laufleistungen oder Modelle mit schwächerer Inlandsnachfrage, sofern die Dokumentenlage stimmt.',
    },
    {
      q: 'Welche Dokumente sind beim Exportankauf besonders wichtig?',
      a: 'Wesentlich sind Eigentumsnachweise, Fahrzeugpapiere, klarer Vertrag und ein nachvollziehbarer Zahlungsnachweis.',
    },
  ],
  'autoankauf-firmenwagen-gewerbe': [
    {
      q: 'Können mehrere Firmenfahrzeuge in einem Prozess abgewickelt werden?',
      a: 'Ja. Teilflotten lassen sich mit einheitlicher Terminierung, Dokumentenprüfung und Übergabestruktur gebündelt verkaufen.',
    },
    {
      q: 'Welche Zusatzunterlagen braucht ein gewerblicher Verkauf?',
      a: 'Je nach Fall sind Vollmachten, Rechnungsdaten, Handelsregisterinformationen und Leasing-/Ablöseangaben relevant.',
    },
  ],
  'autoverkauf-an-exporthaendler': [
    {
      q: 'Wann lohnt Export gegenüber einem Inlandsverkauf eher nicht?',
      a: 'Vor allem bei stark nachgefragten Fahrzeugen mit guter Inlandsvermarktung kann ein lokaler Verkauf wirtschaftlicher sein.',
    },
    {
      q: 'Wie vergleiche ich Export und Direktankauf sinnvoll?',
      a: 'Entscheidend sind Nettoerlös, Zeitaufwand, Risiko aus Nachverhandlungen und die Verlässlichkeit des Abschlussprozesses.',
    },
  ],
  'kilometerstand-scheckheft-vorbesitzer-preis': [
    {
      q: 'Kann ein hohes Kilometerprofil durch Wartung teilweise ausgeglichen werden?',
      a: 'Ja. Eine belegbare Servicehistorie reduziert Unsicherheit und kann Preisabschläge gegenüber unklarer Historie spürbar mindern.',
    },
    {
      q: 'Wie stark beeinflussen Vorbesitzer den Preis in der Praxis?',
      a: 'Die Anzahl allein ist nicht entscheidend. Wichtiger ist eine nachvollziehbare, saubere Eigentumshistorie ohne Lücken.',
    },
  ],
  'rechtssicherer-kaufvertrag-auto': [
    {
      q: 'Welche Vertragsangaben fehlen in der Praxis am häufigsten?',
      a: 'Typisch fehlen genaue Mängelangaben, präziser Zahlungszeitpunkt oder vollständige Übergabedokumentation mit Schlüsselanzahl.',
    },
    {
      q: 'Reicht ein Gewährleistungsausschluss ohne Mängelbeschreibung aus?',
      a: 'Nein. Bekannte Mängel sollten trotzdem konkret dokumentiert werden, damit die Vertragslage belastbar bleibt.',
    },
  ],
  'autoverkauf-betrug-kleinanzeigen-erkennen': [
    {
      q: 'Welche Warnzeichen deuten bei Kleinanzeigen auf Betrugsrisiko hin?',
      a: 'Typisch sind Druck auf Sofortentscheidung, unklare Identität, ungewöhnliche Zahlungswege und fehlende Vertragsbereitschaft.',
    },
    {
      q: 'Wie sichere ich mich bei Besichtigung und Bezahlung ab?',
      a: 'Nutzen Sie klare Treffpunkte, prüfen Sie Ausweise, dokumentieren Sie den Ablauf und bestehen Sie auf nachvollziehbare Zahlungsnachweise.',
    },
  ],
  'auto-online-inserieren-tipps-bilder': [
    {
      q: 'Welche Fotos erhöhen die Anfragequalität am stärksten?',
      a: 'Entscheidend sind gut belichtete Gesamtansichten, transparente Detailbilder und nachvollziehbare Aufnahmen bekannter Mängel.',
    },
    {
      q: 'Warum sind präzise Beschreibungstexte wichtiger als viele Schlagworte?',
      a: 'Konkrete Angaben zu Zustand, Historie und Ausstattungsstand filtern passende Interessenten und reduzieren Rückfragen.',
    },
  ],
  'autoabmeldung-nach-verkauf': [
    {
      q: 'Wie schnell sollte ein verkaufter Wagen abgemeldet werden?',
      a: 'So früh wie möglich nach Übergabe. Eine schnelle Abmeldung reduziert Haftungs- und Versicherungsrisiken deutlich.',
    },
    {
      q: 'Welche Nachweise sollte ich nach der Abmeldung aufbewahren?',
      a: 'Sinnvoll sind Kaufvertrag, Übergabeprotokoll, Abmeldebestätigung und Zahlungsnachweis in einer gemeinsamen Dokumentation.',
    },
  ],
};

const withBaseFaqs = (slug: string, topicFaqs: FAQItem[]): FAQItem[] => [
  ...topicFaqs,
  ...(SLUG_BASE_FAQS[slug] ?? []),
  SLUG_EVALUATION_FAQ[slug],
].slice(0, 5);

export const GUIDE_CONTENT: GuidePageContent[] = [
  {
    slug: 'autoankauf-trotz-finanzierung',
    title: 'Autoankauf trotz Finanzierung | Kredit sicher ablösen',
    description:
      'Auto mit laufender Finanzierung verkaufen: Restschuld korrekt ablösen, Fahrzeugbrief freigeben lassen und Auszahlung transparent abwickeln.',
    h1: 'Autoankauf trotz Finanzierung – Kredit sicher ablösen und sauber verkaufen',
    intro:
      'Eine laufende Finanzierung schließt den Verkauf nicht aus. Entscheidend ist eine saubere Reihenfolge zwischen Ankaufpreis, Restschuld, Bankfreigabe und Auszahlung. Mit klaren Nachweisen lässt sich der Verkauf rechtssicher und ohne Zeitverlust abschließen.',
    quickFacts: [
      'Finanzierte Fahrzeuge können regulär verkauft werden.',
      'Restschuld und Ankaufpreis müssen transparent gegeneinander gerechnet werden.',
      'Der Fahrzeugbrief wird erst nach Bankfreigabe final übertragen.',
      'Die Abwicklung ist auch bei Ballonfinanzierung möglich.',
      'Dokumentierte Zahlungswege minimieren Haftungs- und Eigentumsrisiken.',
    ],
    sections: [
      {
        heading: 'Was bei laufender Finanzierung zuerst geklärt werden muss',
        paragraphs: [
          'Bei den meisten Kreditmodellen liegt die Zulassungsbescheinigung Teil II bei der Bank. Damit ist der Fahrzeugbrief nicht sofort verfügbar, obwohl Sie das Fahrzeug nutzen. Für den Verkauf braucht es deshalb eine abgestimmte Ablöse mit der finanzierenden Bank.',
          'Wichtig sind Restschuld, Ablösezeitpunkt und die Frage, wann der Brief freigegeben wird. Ein seriöser Ankauf trennt diese Schritte klar, damit kein Geld ohne Eigentumsklarheit fließt.',
        ],
        bullets: [
          'Ablösebetrag tagesgenau bei der Bank anfragen',
          'Kreditnummer und Ansprechpartner vorab bereithalten',
          'Vereinbaren, wann die Bank die Freigabe bestätigt',
        ],
      },
      {
        heading: 'Rechenlogik: Ankaufpreis minus Restschuld',
        paragraphs: [
          'Der wirtschaftliche Kern ist einfach: Ankaufpreis minus offener Restschuld ergibt Ihren Auszahlungsbetrag. Liegt der Ankaufpreis über der Restschuld, erhalten Sie die Differenz. Liegt er darunter, muss die Differenz vor Abschluss geklärt sein.',
          'Diese Transparenz verhindert spätere Konflikte. Deshalb sollten alle Beträge im Kaufprozess nachvollziehbar dokumentiert werden, inklusive Wertstellung und Bankbelegen.',
        ],
      },
      {
        heading: 'Typische Sonderfälle: Ballon, Schlussrate, Schadenfahrzeug',
        paragraphs: [
          'Bei Ballonfinanzierungen ist die hohe Schlussrate häufig der Auslöser für den Verkauf. Hier hilft eine frühe Planung, damit keine Frist unter Druck entscheidet. Auch bei Motorschaden oder Unfall bleibt ein Verkauf möglich, wenn die Restschuld sauber in den Ablauf integriert wird.',
          'Bei Schadenfahrzeugen ist eine ehrliche Zustandsbeschreibung besonders wichtig. Sie stabilisiert das Angebot und reduziert Nachverhandlungen beim Übergabetermin.',
        ],
      },
      {
        heading: 'Unterlagen und Ablauf für einen schnellen Abschluss',
        paragraphs: [
          'Für den Start reichen meist Fahrzeugschein, Halterausweis, Kreditdaten und eine realistische Zustandsangabe. Serviceunterlagen und Rechnungen verbessern die Beurteilbarkeit und können den Preis stützen.',
          'Wenn alle Daten vollständig sind, lässt sich die Abwicklung häufig in 24 bis 48 Stunden strukturieren. Der genaue Zeitrahmen hängt vor allem von der Bankreaktion und Terminverfügbarkeit ab.',
        ],
      },
    ],
    faqs: withBaseFaqs('autoankauf-trotz-finanzierung', [
      {
        q: 'Kann ich ohne Fahrzeugbrief verkaufen, wenn er bei der Bank liegt?',
        a: 'Ja. Der Verkauf ist möglich, wenn die Ablöse mit der Bank abgestimmt ist und die Freigabe des Briefs nachvollziehbar dokumentiert wird.',
      },
      {
        q: 'Was passiert, wenn der Ankaufpreis unter der Restschuld liegt?',
        a: 'Dann muss die Differenz vor Abschluss geklärt werden. Ein seriöser Ablauf stellt sicher, dass keine offenen Beträge unbemerkt bleiben.',
      },
    ]),
    relatedSlugs: [
      'unterlagen-autoverkauf-checkliste',
      'rechtssicherer-kaufvertrag-auto',
      'online-autoankauf-ablauf-7-schritte',
      'autoabmeldung-nach-verkauf',
    ],
    coreLink: '/auto-verkaufen',
  },
  {
    slug: 'auto-mit-motorschaden-verkaufen',
    title: 'Auto mit Motorschaden verkaufen | Optionen und Preisfaktoren',
    description:
      'Auto mit Motorschaden verkaufen: Reparatur oder Direktverkauf, realistische Preisfaktoren und typische Fehler bei Inserat und Übergabe.',
    h1: 'Auto mit Motorschaden verkaufen – Optionen, Preisfaktoren und Fallstricke',
    intro:
      'Ein Motorschaden bedeutet nicht automatisch Totalschaden. Der beste Weg hängt von Reparaturkosten, Fahrzeugwert, Zeitdruck und Exportpotenzial ab. Wer nüchtern rechnet, spart oft mehrere Tausend Euro Fehleinsatz.',
    quickFacts: [
      'Motorschaden-Fahrzeuge haben weiterhin Restwert.',
      'Eine Reparatur lohnt nur, wenn Marktwert und Reparaturrisiko passen.',
      'Ehrliche Mängelangaben sind rechtlich und wirtschaftlich sinnvoll.',
      'Getriebe, Karosserie und Ausstattung beeinflussen den Restwert stark.',
      'Direktverkauf spart Standzeit und unsichere Privatverhandlungen.',
    ],
    sections: [
      {
        heading: 'Reparieren oder verkaufen: die Entscheidungsformel',
        paragraphs: [
          'Die zentrale Frage lautet: Übersteigt der erwartete Mehrerlös die Gesamtkosten aus Reparatur, Ausfallzeit und Risiko? Bei älteren Fahrzeugen mit hoher Laufleistung ist das oft nicht der Fall.',
          'Zusätzlich sollten Sie einkalkulieren, dass nach einer Motorreparatur weitere Defekte folgen können. Eine scheinbar günstige Instandsetzung kann dadurch zur Kostenfalle werden.',
        ],
        bullets: [
          'Angebot der Werkstatt inklusive Nebenarbeiten einholen',
          'Marktwert mit und ohne Reparatur vergleichen',
          'Zeitwert nicht mit emotionalem Wert verwechseln',
        ],
      },
      {
        heading: 'Welche Faktoren den Preis bei Motorschaden bestimmen',
        paragraphs: [
          'Nicht nur der Motordefekt zählt. Zustand von Karosserie, Getriebe, Elektronik, Innenraum und Reifen beeinflusst den Restwert spürbar. Auch Modellbeliebtheit und Ersatzteillage spielen eine Rolle.',
          'Exportfähige Fahrzeuge mit robuster Plattform können trotz Motorproblem attraktiv sein. Deshalb fallen Preise je nach Marke und Zielmarkt sehr unterschiedlich aus.',
        ],
      },
      {
        heading: 'Typische Fehler beim privaten Verkauf von Defektfahrzeugen',
        paragraphs: [
          'Häufige Fehler sind unklare Schadenbeschreibung, fehlende Nachweise und unrealistische Preisvorstellungen. Das führt zu Terminabbrüchen und unnötiger Standzeit.',
          'Ebenso kritisch: Formulierungen wie "kleiner Defekt" ohne Diagnose. Besser ist eine offene Darstellung mit Werkstattbefund, damit Käufer den Zustand korrekt einordnen können.',
        ],
      },
      {
        heading: 'Saubere Abwicklung: Vertrag, Übergabe, Nachweis',
        paragraphs: [
          'Beim Defektfahrzeug sollte der Vertrag den bekannten Motorschaden ausdrücklich nennen. Das schützt beide Seiten vor Missverständnissen über den Zustand bei Übergabe.',
          'Mit dokumentierter Übergabe, schneller Auszahlung und Abmeldung schließen Sie den Verkauf ohne offene Haftungsfragen ab.',
        ],
      },
    ],
    faqs: withBaseFaqs('auto-mit-motorschaden-verkaufen', [
      {
        q: 'Lohnt es sich, vor dem Verkauf noch Geld in den Motor zu investieren?',
        a: 'Nur wenn der erwartete Mehrerlös die Reparaturkosten plus Risiko klar übersteigt. Bei älteren Fahrzeugen ist der Direktverkauf oft wirtschaftlicher.',
      },
      {
        q: 'Kann ich ein nicht fahrbereites Auto trotzdem verkaufen?',
        a: 'Ja. Auch nicht fahrbereite Fahrzeuge können angekauft und abgeholt werden, sofern Eigentum und Unterlagen nachvollziehbar sind.',
      },
    ]),
    relatedSlugs: [
      'autoankauf-mit-motorschaden',
      'autoankauf-ohne-tuev',
      'autoverkauf-an-exporthaendler',
      'unterlagen-autoverkauf-checkliste',
    ],
    coreLink: '/auto-bewerten',
  },
  {
    slug: 'autoankauf-ohne-tuev',
    title: 'Autoankauf ohne TÜV | Verkauf trotz abgelaufener HU/AU',
    description:
      'Auto ohne TÜV verkaufen: realistische Preisabschläge, wann sich eine neue HU lohnt und wie die Abwicklung ohne Zulassungsrisiko funktioniert.',
    h1: 'Autoankauf ohne TÜV – Ankauf auch bei abgelaufener HU/AU',
    intro:
      'Abgelaufener TÜV ist ein Preisfaktor, aber kein Verkaufsstopp. Entscheidend ist, ob eine neue HU wirtschaftlich sinnvoll ist oder ob der direkte Verkauf mit transparentem Abschlag die bessere Wahl bleibt.',
    quickFacts: [
      'Autos ohne TÜV sind regulär verkaufbar.',
      'Preisabschläge hängen stark vom technischen Zustand ab.',
      'HU vor Verkauf lohnt sich nur bei kalkulierbarem Reparaturbedarf.',
      'Klare Mängelangaben reduzieren Nachverhandlungen.',
      'Abmeldung und Übergabe sollten sauber dokumentiert werden.',
    ],
    sections: [
      {
        heading: 'Was "ohne TÜV" für Käufer wirklich bedeutet',
        paragraphs: [
          'Ein abgelaufener HU-Bericht signalisiert Unsicherheit über den technischen Zustand. Käufer kalkulieren deshalb ein Risiko für Reparaturen und Werkstattzeiten ein.',
          'Je klarer Sie den Zustand belegen, desto kleiner fällt dieser Risikoabschlag aus. Wartungsbelege, aktuelle Fehlerspeicherberichte oder Werkstattdiagnosen helfen spürbar.',
        ],
      },
      {
        heading: 'Wann sich eine neue HU vor dem Verkauf lohnt',
        paragraphs: [
          'Eine frische HU kann den erzielbaren Preis erhöhen. Sie lohnt sich aber nur, wenn die nötigen Reparaturen überschaubar bleiben und keine großen Folgekosten zu erwarten sind.',
          'Bei älteren Fahrzeugen mit mehreren Baustellen ist der Direktverkauf häufig wirtschaftlicher, weil Sie keine unplanbaren Werkstattrechnungen vorfinanzieren.',
        ],
        bullets: [
          'HU sinnvoll bei gutem Gesamtzustand und kleiner Mängelliste',
          'Direktverkauf sinnvoll bei hoher Laufleistung oder teuren Defekten',
          'Kalkulation immer mit Zeitwert und Standzeit betrachten',
        ],
      },
      {
        heading: 'Preisfaktoren bei Fahrzeugen ohne HU/AU',
        paragraphs: [
          'Neben dem TÜV-Status bestimmen Zustand von Motor, Getriebe, Bremsen und Karosserie den Marktwert. Auch die Modellnachfrage beeinflusst, wie stark der HU-Abschlag ausfällt.',
          'Diesel mit Exportnachfrage oder robuste Volumenmodelle können trotz abgelaufener HU solide Restwerte erzielen, wenn Historie und Unterlagen nachvollziehbar sind.',
        ],
      },
      {
        heading: 'So läuft der Verkauf ohne Zulassungsrisiko ab',
        paragraphs: [
          'Im Vertrag sollten der HU-Status und bekannte Mängel klar benannt sein. Das schafft rechtliche Klarheit und schützt vor späteren Rückfragen zum Zustand bei Übergabe.',
          'Mit übernommener Abmeldung und bestätigter Auszahlung schließen Sie den Verkauf ohne offene Punkte bei Versicherung oder Steuer.',
        ],
      },
    ],
    faqs: withBaseFaqs('autoankauf-ohne-tuev', [
      {
        q: 'Muss ich den TÜV vor dem Verkauf zwingend erneuern?',
        a: 'Nein. Ein Verkauf ist auch ohne gültige HU/AU möglich. Entscheidend ist eine transparente Zustandsbeschreibung.',
      },
      {
        q: 'Wie stark sinkt der Preis ohne TÜV?',
        a: 'Das hängt von der Mängellage ab. Je besser der technische Zustand belegt ist, desto geringer fällt der Risikoabschlag aus.',
      },
    ]),
    relatedSlugs: [
      'auto-mit-motorschaden-verkaufen',
      'unfallwagen-verkaufen',
      'online-autoankauf-ablauf-7-schritte',
      'unterlagen-autoverkauf-checkliste',
    ],
    coreLink: '/auto-verkaufen',
  },
  {
    slug: 'unfallwagen-verkaufen',
    title: 'Unfallwagen verkaufen | Rechtssicher und transparent',
    description:
      'Unfallwagen privat oder an Händler verkaufen: Offenlegungspflichten, Preislogik und sichere Vertragsgestaltung ohne spätere Haftungsrisiken.',
    h1: 'Unfallwagen verkaufen – worauf Käufer achten und wie Sie rechtssicher bleiben',
    intro:
      'Unfallfahrzeuge lassen sich verkaufen, wenn Schadenhistorie und Reparaturstatus sauber offengelegt werden. Die größte Fehlerquelle ist nicht der Schaden selbst, sondern unklare oder beschönigte Dokumentation.',
    quickFacts: [
      'Unfallwagen sind verkaufbar, wenn Schäden transparent dokumentiert sind.',
      'Reparaturqualität beeinflusst den Preis stärker als die reine Schadenshöhe.',
      'Rechtssicherheit entsteht durch klare Offenlegung im Vertrag.',
      'Gutachten und Rechnungen reduzieren Verhandlungsspielraum.',
      'Schneller Abschluss ist mit strukturierter Übergabe möglich.',
    ],
    sections: [
      {
        heading: 'Bagatellschaden vs. struktureller Unfallschaden',
        paragraphs: [
          'Nicht jede Delle macht ein Fahrzeug zum schweren Unfallwagen. Käufer unterscheiden zwischen reinen Blechschäden und strukturellen Eingriffen an Rahmen, Trägern oder sicherheitsrelevanten Komponenten.',
          'Diese Differenzierung ist wichtig für den Preis. Ein sauber reparierter Bagatellschaden wirkt deutlich weniger wertmindernd als ein Fahrzeug mit unsicherer Reparaturhistorie.',
        ],
      },
      {
        heading: 'Welche Nachweise den Preis stabilisieren',
        paragraphs: [
          'Werkstattrechnungen, Gutachten, Fotodokumentation und Achsvermessungsprotokolle schaffen Vertrauen. Ohne Nachweise kalkulieren Käufer höhere Sicherheitsabschläge ein.',
          'Auch Angaben zu Airbag-Auslösung, betroffenen Bauteilen und Ersatzteilqualität helfen, den Zustand nachvollziehbar einzuordnen.',
        ],
        bullets: [
          'Reparaturrechnung mit Teilenachweis',
          'Gutachten oder Schadensprotokoll',
          'Fotos vor und nach der Instandsetzung',
        ],
      },
      {
        heading: 'Rechtssicherer Vertrag bei Unfallhistorie',
        paragraphs: [
          'Im Kaufvertrag sollten Unfallangaben konkret formuliert werden: Art des Schadens, Zeitpunkt, Reparaturumfang und bekannte Restmängel. Allgemeine Formulierungen reichen nicht aus.',
          'Ein klarer Haftungsausschluss ist beim Privatverkauf wichtig, schützt aber nicht bei bewusst verschwiegenen Schäden. Vollständige Offenlegung bleibt daher der wichtigste Schutz.',
        ],
      },
      {
        heading: 'Privatverkauf oder Direktankauf: was passt wann?',
        paragraphs: [
          'Privat kann ein höherer Preis möglich sein, verlangt aber Zeit, Verhandlungssicherheit und hohe Dokumentationsqualität. Beim Direktankauf ist der Preis oft etwas konservativer, dafür ist der Ablauf schneller und planbarer.',
          'Wenn Sie kurzfristig verkaufen müssen oder Diskussionen vermeiden möchten, ist ein strukturierter Ankauf häufig die robustere Lösung.',
        ],
      },
    ],
    faqs: withBaseFaqs('unfallwagen-verkaufen', [
      {
        q: 'Muss ich einen reparierten Unfallschaden immer angeben?',
        a: 'Ja. Bekannte Unfallschäden sollten immer offengelegt werden, auch wenn sie fachgerecht repariert wurden.',
      },
      {
        q: 'Kann ein Unfallwagen trotzdem einen guten Preis erzielen?',
        a: 'Ja, besonders mit vollständiger Dokumentation und qualitativ nachvollziehbarer Reparatur.',
      },
    ]),
    relatedSlugs: [
      'unfallwagen-ankauf',
      'rechtssicherer-kaufvertrag-auto',
      'unterlagen-autoverkauf-checkliste',
      'autoverkauf-betrug-kleinanzeigen-erkennen',
    ],
    coreLink: '/auto-verkaufen',
  },
  {
    slug: 'unfallwagen-ankauf',
    title: 'Unfallwagen Ankauf | Fairer Preis trotz Schaden',
    description:
      'Unfallwagen direkt an Händler verkaufen: faire Bewertung trotz Schaden, komplette Abwicklung mit Vertrag, Abholung und schneller Auszahlung.',
    h1: 'Unfallwagen Ankauf – fairer Preis trotz Schaden und komplette Abwicklung',
    intro:
      'Beim Unfallwagen-Ankauf steht nicht die perfekte Optik im Fokus, sondern die wirtschaftliche Verwertung des Fahrzeugs. Mit realistischer Bewertung und vollständiger Dokumentation lässt sich auch ein beschädigtes Auto schnell verkaufen.',
    quickFacts: [
      'Ankauf ist auch bei nicht reparierten Unfallschäden möglich.',
      'Bewertung basiert auf Schadenbild, Modell und Verwertungsweg.',
      'Abholung und Vertragsabwicklung können in einem Termin erfolgen.',
      'Restwert hängt stark von Reparaturfähigkeit und Teilemarkt ab.',
      'Transparente Angaben beschleunigen den Abschluss deutlich.',
    ],
    sections: [
      {
        heading: 'Wie Unfallwagen im Ankauf bewertet werden',
        paragraphs: [
          'Ankaufsbewertungen berücksichtigen Schadenart, Karosseriestruktur, Laufleistung, Ausstattungsniveau und Marktgängigkeit des Modells. Ein identischer Schaden kann je nach Fahrzeugklasse unterschiedlich wirken.',
          'Zusätzlich spielt die Teileverfügbarkeit eine Rolle. Modelle mit guter Ersatzteillage und stabiler Nachfrage erreichen häufig höhere Restwerte.',
        ],
      },
      {
        heading: 'Repariert oder unrepariert verkaufen',
        paragraphs: [
          'Eine Teilreparatur lohnt sich nur, wenn sie den erzielbaren Mehrpreis sicher übersteigt. Bei unsicherer Kostenschätzung ist der Direktankauf meist wirtschaftlicher.',
          'Unreparierte Fahrzeuge lassen sich oft schneller und mit geringerem Risiko abgeben, weil keine zusätzliche Werkstatt- und Standzeit entsteht.',
        ],
      },
      {
        heading: 'Ablauf: von der Bewertung bis zur Übergabe',
        paragraphs: [
          'Nach der Online-Einschätzung werden Schadendetails abgestimmt und ein Termin vereinbart. Vor Ort erfolgt die finale Prüfung und Vertragsunterzeichnung. Danach wird die Auszahlung veranlasst.',
          'Bei klarer Dokumentenlage lässt sich der gesamte Prozess kurzfristig planen, inklusive Abholung und Abmeldung.',
        ],
        bullets: [
          'Schadendaten und Fotos vorab bereitstellen',
          'Dokumente und Schlüssel vollständig mitbringen',
          'Bekannte Restmängel ausdrücklich im Vertrag aufführen',
        ],
      },
      {
        heading: 'Wann ein Ankauf dem Privatmarkt überlegen ist',
        paragraphs: [
          'Unfallfahrzeuge erzeugen im Privatmarkt viele Rückfragen und harte Nachverhandlungen. Das kostet Zeit und erhöht das Risiko geplatzter Termine.',
          'Ein professioneller Ankauf reduziert diese Unsicherheit, weil Bewertung, Vertrag, Zahlung und Formalitäten aus einer Hand kommen.',
        ],
      },
    ],
    faqs: withBaseFaqs('unfallwagen-ankauf', [
      {
        q: 'Kaufen Sie auch schwer beschädigte Unfallwagen an?',
        a: 'Ja. Auch Fahrzeuge mit größeren Unfallschäden können angekauft werden, sofern Eigentum und Unterlagen nachvollziehbar sind.',
      },
      {
        q: 'Brauche ich ein Gutachten für den Ankauf?',
        a: 'Ein Gutachten ist hilfreich, aber nicht immer zwingend. Rechnungen, Fotos und eine ehrliche Schadenbeschreibung unterstützen die Bewertung ebenfalls.',
      },
    ]),
    relatedSlugs: [
      'unfallwagen-verkaufen',
      'rechtssicherer-kaufvertrag-auto',
      'autoankauf-ohne-tuev',
      'online-autoankauf-ablauf-7-schritte',
    ],
    coreLink: '/auto-bewerten',
  },
  {
    slug: 'unterlagen-autoverkauf-checkliste',
    title: 'Unterlagen für den Autoverkauf | Checkliste Deutschland',
    description:
      'Welche Unterlagen brauchen Sie für den Autoverkauf? Komplette Checkliste für Deutschland inklusive Pflichtdokumente und häufige Sonderfälle.',
    h1: 'Welche Unterlagen brauche ich für den Autoverkauf? Checkliste für Deutschland',
    intro:
      'Fehlende Dokumente verursachen beim Autoverkauf die meisten Verzögerungen. Mit einer vollständigen Unterlagenmappe vermeiden Sie Rückfragen, stärken den Preis und beschleunigen die Auszahlung.',
    quickFacts: [
      'Fahrzeugschein, Fahrzeugbrief, Ausweis und Schlüssel sind Pflichtkern.',
      'Service- und Reparaturnachweise erhöhen Vertrauen und Preisstabilität.',
      'Bei Finanzierung sind zusätzliche Bankunterlagen nötig.',
      'Fehlende Dokumente sind oft lösbar, wenn sie früh kommuniziert werden.',
      'Eine vorbereitete Mappe reduziert Terminzeit deutlich.',
    ],
    sections: [
      {
        heading: 'Pflichtunterlagen: ohne diese Dokumente geht es nicht',
        paragraphs: [
          'Die wichtigsten Unterlagen sind Zulassungsbescheinigung Teil I und II, ein gültiger Ausweis sowie alle vorhandenen Fahrzeugschlüssel. Diese Dokumente sichern Identität, Eigentum und Übergabefähigkeit.',
          'Bei Firmenfahrzeugen oder Vertretungen kommen Vollmachten und ggf. Handelsregisterauszug hinzu. Diese sollten vor Terminbeginn geprüft sein.',
        ],
        bullets: [
          'Zulassungsbescheinigung Teil I (Fahrzeugschein)',
          'Zulassungsbescheinigung Teil II (Fahrzeugbrief)',
          'Personalausweis oder Reisepass des Halters',
          'Alle Fahrzeugschlüssel inkl. Ersatzschlüssel',
        ],
      },
      {
        heading: 'Preisrelevante Unterlagen: was den Verkauf verbessert',
        paragraphs: [
          'Ein gepflegtes Scheckheft, HU-Berichte und Werkstattrechnungen schaffen Vertrauen. Käufer können den Zustand besser einordnen und kalkulieren geringere Risikozuschläge.',
          'Auch Nachweise zu Reifen, Zubehör und größeren Reparaturen helfen, den Wert plausibel zu begründen und Diskussionen zu verkürzen.',
        ],
      },
      {
        heading: 'Sonderfälle: Finanzierung, Erbe, fehlende Dokumente',
        paragraphs: [
          'Bei laufender Finanzierung liegt der Fahrzeugbrief häufig bei der Bank. Dann sind Kreditdaten und Ablöseabstimmung erforderlich. Ohne Freigabe kann kein sauberer Eigentumsübergang erfolgen.',
          'Bei Erbfällen oder Vertretungen braucht es zusätzliche Nachweise wie Erbschein oder Vollmacht. Fehlende Unterlagen sollten vorab benannt werden, damit der Prozess planbar bleibt.',
        ],
      },
      {
        heading: 'Praktische Übergabe-Checkliste für den Termin',
        paragraphs: [
          'Legen Sie alle Unterlagen in einer Mappe bereit und prüfen Sie Schlüssel, Zubehör und Servicebelege am Vortag. So vermeiden Sie unnötige Verzögerungen beim Termin.',
          'Dokumentieren Sie die Übergabe im Vertrag vollständig, inklusive Schlüsselanzahl und übergebener Nachweise. Das reduziert spätere Rückfragen deutlich.',
        ],
      },
    ],
    faqs: withBaseFaqs('unterlagen-autoverkauf-checkliste', [
      {
        q: 'Kann ich auch verkaufen, wenn einzelne Unterlagen fehlen?',
        a: 'Häufig ja. Entscheidend ist, fehlende Dokumente früh transparent zu benennen, damit eine passende Lösung vorbereitet werden kann.',
      },
      {
        q: 'Brauche ich das Scheckheft zwingend?',
        a: 'Nein, aber ein gepflegtes Serviceheft verbessert Nachvollziehbarkeit und kann den erzielbaren Preis stabilisieren.',
      },
    ]),
    relatedSlugs: [
      'rechtssicherer-kaufvertrag-auto',
      'autoankauf-trotz-finanzierung',
      'online-autoankauf-ablauf-7-schritte',
      'autoabmeldung-nach-verkauf',
    ],
    coreLink: '/auto-verkaufen',
  },
  {
    slug: 'auto-online-verkaufen-sofort-auszahlung',
    title: 'Auto online verkaufen | Sofort-Auszahlung per Überweisung',
    description:
      'Auto online verkaufen mit schneller Auszahlung: sichere Zahlungswege, transparente Vertragsabwicklung und typische Prüfungen vor der Übergabe.',
    h1: 'Auto online verkaufen mit Sofort-Auszahlung per Überweisung',
    intro:
      'Der entscheidende Vorteil beim Online-Autoankauf ist planbare Geschwindigkeit. Damit "Sofort-Auszahlung" sicher bleibt, müssen Zahlungsweg, Vertrag und Übergabe logisch zusammenpassen.',
    quickFacts: [
      'Online-Bewertung reduziert den Prozess auf wenige Schritte.',
      'Auszahlung erfolgt nach Vertragsabschluss per Banküberweisung.',
      'Transparente Preislogik verhindert Überraschungen bei Übergabe.',
      'Digitale Vorbereitung spart Zeit am Vor-Ort-Termin.',
      'Saubere Dokumentation schützt vor Zahlungs- und Haftungsrisiken.',
    ],
    sections: [
      {
        heading: 'Was "Sofort-Auszahlung" seriös bedeutet',
        paragraphs: [
          'Sofort bedeutet im seriösen Ankauf: Auszahlung wird direkt nach Vertragsabschluss veranlasst, häufig mit Geldeingang am selben Tag. Banklaufzeiten können je nach Uhrzeit und Institut variieren.',
          'Wichtig ist, dass der Zahlungsweg im Vertrag eindeutig festgelegt wird und Sie einen nachvollziehbaren Nachweis erhalten.',
        ],
      },
      {
        heading: 'Der sichere Ablauf von Online-Bewertung bis Übergabe',
        paragraphs: [
          'Der Prozess beginnt mit einer datengestützten Ersteinschätzung. Danach werden Zustand und Unterlagen abgestimmt. Erst wenn das Angebot passt, wird ein verbindlicher Termin festgelegt.',
          'Vor Ort erfolgt die finale Prüfung gegen die Angaben. Bei konsistenten Daten bleibt die Abwicklung schnell und ohne unnötige Nachverhandlungen.',
        ],
      },
      {
        heading: 'Wie Sie Preisstabilität beim Termin sichern',
        paragraphs: [
          'Preisabweichungen entstehen vor allem durch unvollständige Schadenangaben oder fehlende Unterlagen. Je präziser die Angaben im Vorfeld, desto stabiler bleibt der Angebotspreis.',
          'Fotos von Schäden, dokumentierte Wartung und klare HU-Angaben helfen, den finalen Termin effizient und konfliktarm zu halten.',
        ],
      },
      {
        heading: 'Überweisung oder Barzahlung: was passt wann?',
        paragraphs: [
          'Die Überweisung ist der Standard, weil sie gut dokumentierbar ist. In bestimmten Fällen kann eine Barauszahlung möglich sein, wenn das vorab abgestimmt wird.',
          'Entscheidend ist immer, dass Vertrag, Fahrzeugübergabe und Zahlungsbestätigung zeitlich sauber abgestimmt sind.',
        ],
      },
    ],
    faqs: withBaseFaqs('auto-online-verkaufen-sofort-auszahlung', [
      {
        q: 'Ist die Auszahlung wirklich am selben Tag möglich?',
        a: 'In vielen Fällen ja, insbesondere bei früher Übergabezeit. Der tatsächliche Geldeingang hängt zusätzlich von Banklaufzeiten ab.',
      },
      {
        q: 'Muss ich mein Auto vorher inserieren?',
        a: 'Nein. Beim Direktankauf ist kein Inserat erforderlich. Sie sparen damit Rückfragen, Besichtigungstermine und Verhandlungsaufwand.',
      },
    ]),
    relatedSlugs: [
      'online-autoankauf-ablauf-7-schritte',
      'unterlagen-autoverkauf-checkliste',
      'autoverkauf-betrug-kleinanzeigen-erkennen',
      'autoabmeldung-nach-verkauf',
    ],
    coreLink: '/auto-bewerten',
  },
  {
    slug: 'autoankauf-mit-motorschaden',
    title: 'Autoankauf Motorschaden | Abholung und sichere Abwicklung',
    description:
      'Direkter Autoankauf mit Motorschaden: kostenlos abholen lassen, Restwert fair bewerten und sicher per Vertrag verkaufen.',
    h1: 'Autoankauf mit Motorschaden – kostenlos abholen lassen und sicher verkaufen',
    intro:
      'Wenn der Motor defekt ist, zählt ein verlässlicher Prozess mehr als ein theoretischer Höchstpreis. Der Direktankauf bündelt Bewertung, Abholung, Vertrag und Auszahlung in einer klaren Abfolge.',
    quickFacts: [
      'Ankauf ist auch bei schwerem Motorschaden möglich.',
      'Fahrzeug muss für den Verkauf nicht fahrbereit sein.',
      'Restwert basiert auf Modell, Zustand und Verwertungsweg.',
      'Abholung spart Abschlepp- und Standkosten.',
      'Vertrag und Auszahlung erfolgen in einem planbaren Termin.',
    ],
    sections: [
      {
        heading: 'Direktankauf statt Reparaturrisiko',
        paragraphs: [
          'Bei Motorschaden sind Reparaturkosten oft schwer kalkulierbar. Der Direktankauf vermeidet dieses Risiko, weil keine Vorfinanzierung für Werkstattarbeiten nötig ist.',
          'Sie erhalten eine marktnahe Restwertbewertung auf Basis der vorhandenen Daten und können ohne lange Standzeit entscheiden.',
        ],
      },
      {
        heading: 'Welche Motorschäden typischerweise angekauft werden',
        paragraphs: [
          'Angekauft werden unter anderem Fahrzeuge mit Kolbenfresser, Steuerkettenschaden, Turboladerschaden, Öldruckproblemen oder massiver Laufgeräuschentwicklung.',
          'Auch Mischbilder mit zusätzlichem Getriebe- oder Elektronikproblem sind möglich. Wichtig bleibt eine ehrliche Schadenbeschreibung.',
        ],
      },
      {
        heading: 'Abholung nicht fahrbereiter Fahrzeuge',
        paragraphs: [
          'Nicht fahrbereite Fahrzeuge können am Standort übernommen werden. Das reduziert Organisationsaufwand und vermeidet zusätzliche Kosten für private Transporte.',
          'Für eine schnelle Terminierung sollten Zufahrt, Standortbedingungen und Schlüsselverfügbarkeit vorab geklärt sein.',
        ],
      },
      {
        heading: 'So bleibt der Verkauf rechtssicher',
        paragraphs: [
          'Der bekannte Motorschaden sollte im Vertrag klar benannt werden. So ist der Zustand bei Übergabe eindeutig dokumentiert.',
          'Mit nachweisbarer Auszahlung und Abmeldebestätigung schließen Sie den Vorgang vollständig und nachvollziehbar ab.',
        ],
      },
    ],
    faqs: withBaseFaqs('autoankauf-mit-motorschaden', [
      {
        q: 'Kaufen Sie auch Autos mit kapitalem Motorschaden?',
        a: 'Ja. Auch Fahrzeuge mit schwerem Motorschaden können bewertet und angekauft werden, sofern Eigentum und Unterlagen klar sind.',
      },
      {
        q: 'Entstehen Zusatzkosten für die Abholung?',
        a: 'Im Regelfall wird die Abholung im Ankaufprozess kostenfrei organisiert. Details werden vor Termin transparent abgestimmt.',
      },
    ]),
    relatedSlugs: [
      'auto-mit-motorschaden-verkaufen',
      'autoankauf-ohne-tuev',
      'autoverkauf-an-exporthaendler',
      'online-autoankauf-ablauf-7-schritte',
    ],
    coreLink: '/auto-verkaufen',
  },
  {
    slug: 'online-autoankauf-ablauf-7-schritte',
    title: 'Online-Autoankauf Ablauf | In 7 klaren Schritten',
    description:
      'Wie funktioniert Online-Autoankauf? Der gesamte Ablauf in 7 Schritten von der Bewertung bis zur Abholung und Auszahlung.',
    h1: 'Wie funktioniert der Online-Autoankauf? Ablauf in 7 Schritten',
    intro:
      'Ein guter Online-Ankaufprozess ist vorhersehbar: gleiche Reihenfolge, klare Zuständigkeiten, keine versteckten Zwischenschritte. Damit wird aus einer Preisidee ein sauber dokumentierter Verkauf.',
    quickFacts: [
      'Der Prozess startet mit unverbindlicher Online-Bewertung.',
      'Erst nach Angebotsannahme wird der Verkauf verbindlich.',
      'Alle Schritte sind zeitlich planbar und dokumentierbar.',
      'Abholung, Vertrag und Auszahlung werden koordiniert.',
      'Abmeldung kann direkt mit übernommen werden.',
    ],
    sections: [
      {
        heading: 'Schritt 1 bis 3: Daten, Bewertung, Angebotsklärung',
        paragraphs: [
          'Schritt 1: Fahrzeugdaten vollständig eingeben. Schritt 2: Ersteinschätzung erhalten. Schritt 3: offene Punkte zu Zustand, Historie und Dokumenten klären.',
          'In dieser Phase entscheidet sich, wie stabil der spätere Angebotspreis bleibt. Präzise Angaben sparen Zeit und reduzieren spätere Korrekturen.',
        ],
      },
      {
        heading: 'Schritt 4 bis 5: Termin und Vor-Ort-Prüfung',
        paragraphs: [
          'Schritt 4: Übergabetermin vereinbaren. Schritt 5: Fahrzeug vor Ort mit den gemachten Angaben abgleichen. Dieser Abgleich ist Standard und dient der Fairness für beide Seiten.',
          'Weichen Zustand oder Unterlagen deutlich ab, wird das Angebot transparent angepasst. Sie entscheiden anschließend frei über den Abschluss.',
        ],
      },
      {
        heading: 'Schritt 6 bis 7: Vertrag, Auszahlung, Abmeldung',
        paragraphs: [
          'Schritt 6: Kaufvertrag unterzeichnen und Übergabe dokumentieren. Schritt 7: Auszahlung veranlassen und Abmeldung organisieren. Damit ist der Vorgang vollständig abgeschlossen.',
          'Durch diese Reihenfolge bleibt der Prozess rechtlich und organisatorisch sauber. Sie behalten jederzeit den Überblick über den Status.',
        ],
      },
      {
        heading: 'Warum der 7-Schritte-Ablauf effizient ist',
        paragraphs: [
          'Der strukturierte Ablauf ersetzt viele unsichere Einzelschritte aus dem Privatverkauf, etwa wiederholte Besichtigungen und offene Zahlungszusagen.',
          'Für Verkäufer bedeutet das planbare Termine, klare Dokumente und weniger operative Belastung.',
        ],
      },
    ],
    faqs: withBaseFaqs('online-autoankauf-ablauf-7-schritte', [
      {
        q: 'Kann ich nach der Online-Bewertung noch absagen?',
        a: 'Ja. Die erste Bewertung ist unverbindlich. Sie entscheiden erst bei einem final abgestimmten Angebot.',
      },
      {
        q: 'Wie lange dauert der komplette Ablauf in der Praxis?',
        a: 'Je nach Fahrzeug und Terminlage ist eine Abwicklung oft in 24 bis 48 Stunden möglich.',
      },
    ]),
    relatedSlugs: [
      'auto-online-verkaufen-sofort-auszahlung',
      'unterlagen-autoverkauf-checkliste',
      'rechtssicherer-kaufvertrag-auto',
      'autoabmeldung-nach-verkauf',
    ],
    coreLink: '/auto-bewerten',
  },
  {
    slug: 'autoexport-ankauf',
    title: 'Autoexport Ankauf | Exportfahrzeuge inkl. Abmeldung',
    description:
      'Autoexport Ankauf für ältere Fahrzeuge, Diesel und hohe Laufleistung: faire Bewertung, Dokumente, Abmeldung und sichere Übergabe.',
    h1: 'Autoexport Ankauf – wir kaufen Exportfahrzeuge inkl. Abmeldung und Dokumente',
    intro:
      'Der Exportmarkt ist für viele Fahrzeuge die wirtschaftlich beste Verwertung, besonders bei hoher Laufleistung oder eingeschränkter Inlandsnachfrage. Entscheidend ist ein seriöser Prozess mit klaren Dokumenten.',
    quickFacts: [
      'Exportankauf ist legal und bei vielen Fahrzeugen sinnvoll.',
      'Besonders gefragt: ältere Diesel, robuste Volumenmodelle, Nutzfahrzeuge.',
      'Preis hängt von Exportfähigkeit und Dokumentenlage ab.',
      'Saubere Verträge und Nachweise sind Pflicht.',
      'Abmeldung und Übergabe sollten zentral koordiniert sein.',
    ],
    sections: [
      {
        heading: 'Wann ein Fahrzeug für den Export besonders geeignet ist',
        paragraphs: [
          'Typische Exportkandidaten sind ältere Diesel, Fahrzeuge mit hoher Laufleistung, Modelle mit geringen Reparaturkosten im Zielmarkt und Fahrzeuge ohne aktuelle HU.',
          'Nicht jedes Auto ist automatisch exportstark. Modellbeliebtheit, Ersatzteillage und Zustand entscheiden über den tatsächlichen Exportwert.',
        ],
      },
      {
        heading: 'Preisbildung im Exportankauf',
        paragraphs: [
          'Die Preisbildung orientiert sich nicht nur am deutschen Privatmarkt, sondern an Verwertungsoptionen im Zielmarkt. Dadurch können Fahrzeuge mit schwacher Inlandsnachfrage weiterhin solide Restwerte erzielen.',
          'Klare Schadenangaben, vollständige Papiere und nachvollziehbare Historie verbessern die Exportkalkulation deutlich.',
        ],
      },
      {
        heading: 'Dokumente und rechtliche Sauberkeit',
        paragraphs: [
          'Für einen sicheren Exportankauf braucht es vollständige Eigentums- und Fahrzeugnachweise. Fehlende Dokumente verzögern oder blockieren den Prozess.',
          'Vertrag, Zahlungsnachweis und Abmeldebestätigung sollten immer vollständig vorliegen, damit keine offenen Haftungs- oder Behördenfragen bleiben.',
        ],
      },
      {
        heading: 'Risiken vermeiden: so erkennen Sie seriöse Abwicklung',
        paragraphs: [
          'Vorsicht bei intransparenten Zahlungszusagen, unklaren Vollmachten oder Druck, Unterlagen vorzeitig auszuhändigen. Ein seriöser Ablauf arbeitet mit klaren Schritten und nachvollziehbarer Kommunikation.',
          'Mit strukturierter Übergabe und dokumentierter Zahlung bleibt der Verkauf auch beim Exportmarkt rechtlich stabil.',
        ],
      },
    ],
    faqs: withBaseFaqs('autoexport-ankauf', [
      {
        q: 'Welche Fahrzeuge eignen sich besonders für den Export?',
        a: 'Häufig ältere Diesel, robuste Volumenmodelle, Fahrzeuge mit hoher Laufleistung oder ohne HU, sofern die Dokumentenlage vollständig ist.',
      },
      {
        q: 'Ist der Verkauf an Exporthändler rechtlich sicher?',
        a: 'Ja, wenn Vertrag, Eigentumsnachweis, Zahlungsweg und Abmeldung sauber dokumentiert sind.',
      },
    ]),
    relatedSlugs: [
      'autoverkauf-an-exporthaendler',
      'autoankauf-ohne-tuev',
      'autoankauf-mit-motorschaden',
      'rechtssicherer-kaufvertrag-auto',
    ],
    coreLink: '/auto-verkaufen',
  },
  {
    slug: 'autoankauf-firmenwagen-gewerbe',
    title: 'Autoankauf Firmenwagen | Schnelle Gewerbeabwicklung',
    description:
      'Autoankauf für Firmenwagen und Gewerbe: transparente Preise, Rechnung, klare Eigentumsnachweise und schnelle Abwicklung auch bei mehreren Fahrzeugen.',
    h1: 'Autoankauf für Firmenwagen und Gewerbe – inkl. Rechnung und schneller Abwicklung',
    intro:
      'Im Gewerbe zählt ein reibungsloser Ablauf mehr als Einzelverhandlung. Firmenwagen- und Fuhrparkverkäufe brauchen klare Zuständigkeiten, belastbare Dokumente und verlässliche Terminierung.',
    quickFacts: [
      'Ankauf ist für einzelne Firmenwagen und ganze Teilflotten möglich.',
      'Rechnungs- und Nachweislogik wird gewerblich sauber abgebildet.',
      'Eigentümer- und Vertretungsnachweise sind zentral.',
      'Auch Leasingrückläufer oder hohe Laufleistung sind abbildbar.',
      'Zeitfenster und Übergaben lassen sich standortübergreifend planen.',
    ],
    sections: [
      {
        heading: 'Was Unternehmen beim Fahrzeugverkauf brauchen',
        paragraphs: [
          'Unternehmen benötigen vor allem Prozesssicherheit: klare Angebotslogik, feste Ansprechpartner und dokumentierte Übergaben. Das reduziert internen Abstimmungsaufwand zwischen Fuhrpark, Buchhaltung und Geschäftsführung.',
          'Gerade bei mehreren Fahrzeugen ist Standardisierung entscheidend, damit keine Einzelfallchaos entsteht.',
        ],
      },
      {
        heading: 'Dokumente für Firmenwagen und gewerbliche Halter',
        paragraphs: [
          'Zusätzlich zu Fahrzeugpapieren werden häufig Handelsregisterauszug, Vollmachten und steuerlich saubere Rechnungsdaten benötigt. Bei Leasing- oder Finanzierungsbezug kommen Ablöseinformationen hinzu.',
          'Eine vollständige Dokumentenmappe beschleunigt den Freigabeprozess intern und extern.',
        ],
        bullets: [
          'Fahrzeugpapiere und Schlüssel je Fahrzeug',
          'Vertretungsberechtigung oder Vollmacht',
          'Rechnungs- und Unternehmensdaten',
          'Bei Bedarf: Leasing-/Bankablöseinfos',
        ],
      },
      {
        heading: 'Preisfaktoren bei Dienstwagen und Flottenfahrzeugen',
        paragraphs: [
          'Wartungshistorie, Laufleistung, Vorhaltekosten und Wiedervermarktungsfähigkeit bestimmen den Preis. Gepflegte Dienstwagen mit nachvollziehbarer Historie schneiden oft deutlich besser ab als erwartet.',
          'Auch die Bündelung mehrerer Fahrzeuge kann in der Abwicklung Effizienzvorteile schaffen.',
        ],
      },
      {
        heading: 'Abwicklung mit minimalem operativen Aufwand',
        paragraphs: [
          'Ein strukturierter Ankauf übernimmt Terminierung, Abholung und Nachweisdokumentation. Unternehmen sparen dadurch interne Ressourcen und vermeiden langwierige Einzelverkäufe.',
          'Mit abgestimmten Übergabeprozessen bleibt der Verkauf auditierbar und betriebswirtschaftlich planbar.',
        ],
      },
    ],
    faqs: withBaseFaqs('autoankauf-firmenwagen-gewerbe', [
      {
        q: 'Kaufen Sie auch mehrere Firmenfahrzeuge in einem Vorgang an?',
        a: 'Ja. Auch Teilflotten können in einem koordinierten Prozess bewertet, terminiert und abgewickelt werden.',
      },
      {
        q: 'Erhalte ich eine ordnungsgemäße Rechnung für den Verkauf?',
        a: 'Ja. Die Abwicklung wird mit den nötigen Rechnungs- und Nachweisdaten gewerblich korrekt dokumentiert.',
      },
    ]),
    relatedSlugs: [
      'autoankauf-trotz-finanzierung',
      'kilometerstand-scheckheft-vorbesitzer-preis',
      'unterlagen-autoverkauf-checkliste',
      'online-autoankauf-ablauf-7-schritte',
    ],
    coreLink: '/auto-bewerten',
  },
  {
    slug: 'autoverkauf-an-exporthaendler',
    title: 'Autoverkauf an Exporthändler | Wann Export wirklich lohnt',
    description:
      'Autoverkauf an Exporthändler: Für welche Fahrzeuge Export sinnvoll ist, wie Preise entstehen und welche Unterlagen für einen sicheren Verkauf nötig sind.',
    h1: 'Autoverkauf an Exporthändler – für welche Fahrzeuge lohnt sich Export wirklich?',
    intro:
      'Export kann wirtschaftlich sinnvoll sein, aber nicht bei jedem Fahrzeug. Wer den richtigen Fahrzeugtyp mit sauberer Dokumentenlage verkauft, erzielt meist die besten Ergebnisse.',
    quickFacts: [
      'Export lohnt sich vor allem bei spezifischen Fahrzeugprofilen.',
      'Nicht der Kilometerstand allein entscheidet über den Wert.',
      'Dokumente und klare Eigentumslage sind entscheidend.',
      'Seriöse Händler arbeiten mit transparenten Zahlungswegen.',
      'Abmeldung und Vertrag müssen vollständig belegt sein.',
    ],
    sections: [
      {
        heading: 'Welche Fahrzeuge im Exportmarkt stark nachgefragt sind',
        paragraphs: [
          'Besonders gefragt sind robuste Diesel, Nutzfahrzeuge, Volumenmodelle mit einfacher Technik und Fahrzeuge mit hoher Laufleistung, die im Inland schwer vermarktbar sind.',
          'Auch markenspezifische Präferenzen spielen eine Rolle. Deshalb kann ein Modell im Export deutlich besser laufen als im regionalen Privatmarkt.',
        ],
      },
      {
        heading: 'Wann Export eher nicht sinnvoll ist',
        paragraphs: [
          'Neuwertige Fahrzeuge oder Modelle mit starker Inlandsnachfrage erzielen häufig bessere Erlöse im klassischen Händler- oder Privatmarkt. Export ist dann nicht automatisch die beste Option.',
          'Fehlende Dokumente oder unklare Eigentumslage können Exportdeals zudem unnötig riskant machen.',
        ],
      },
      {
        heading: 'Sicher verkaufen: Vertrag, Zahlung, Nachweise',
        paragraphs: [
          'Vermeiden Sie intransparente Bargeldzusagen ohne belastbare Dokumentation. Ein seriöser Verkauf nutzt klare Vertragsdaten und nachvollziehbare Zahlungswege.',
          'Mit Abmeldebestätigung und vollständigem Übergabeprotokoll reduzieren Sie das Risiko späterer Haftungs- und Zulassungsfragen.',
        ],
      },
      {
        heading: 'Praktische Entscheidungshilfe für den Exportverkauf',
        paragraphs: [
          'Vergleichen Sie mindestens zwei Vermarktungswege: Direktankauf und Exportoption. Entscheidend sind Nettoerlös, Zeitaufwand und Risiko - nicht nur der Höchstpreis auf dem Papier.',
          'Wenn Geschwindigkeit und Sicherheit im Vordergrund stehen, ist ein strukturierter Ankauf mit klarer Exportlogik oft die pragmatischste Lösung.',
        ],
      },
    ],
    faqs: withBaseFaqs('autoverkauf-an-exporthaendler', [
      {
        q: 'Bekomme ich beim Export immer mehr Geld als im Inland?',
        a: 'Nein. Das hängt stark vom Fahrzeugprofil ab. Bei manchen Modellen ist der Inlandsmarkt wirtschaftlich attraktiver.',
      },
      {
        q: 'Welche Risiken sollte ich beim Exportverkauf vermeiden?',
        a: 'Vor allem unklare Zahlungszusagen, lückenhafte Verträge und fehlende Abmeldenachweise sollten vermieden werden.',
      },
    ]),
    relatedSlugs: [
      'autoexport-ankauf',
      'autoankauf-ohne-tuev',
      'autoankauf-mit-motorschaden',
      'rechtssicherer-kaufvertrag-auto',
    ],
    coreLink: '/auto-verkaufen',
  },
  {
    slug: 'kilometerstand-scheckheft-vorbesitzer-preis',
    title: 'Kilometerstand & Scheckheft | Was den Autopreis bestimmt',
    description:
      'Welche Faktoren beeinflussen den Autopreis am stärksten? Kilometerstand, Scheckheft, Vorbesitzer und Zustand praxisnah erklärt.',
    h1: 'Kilometerstand, Scheckheft, Vorbesitzer: Was zählt am meisten beim Preis?',
    intro:
      'Viele Verkäufer fokussieren nur den Kilometerstand. In der Praxis entscheidet aber das Zusammenspiel aus Laufleistung, Wartung, Vorbesitzern, Zustand und Modellnachfrage über den realen Marktwert.',
    quickFacts: [
      'Kilometerstand ist wichtig, aber nie allein entscheidend.',
      'Ein lückenloses Scheckheft kann hohe Laufleistung teilweise kompensieren.',
      'Wenige Vorbesitzer erhöhen meist die Marktfähigkeit.',
      'Pflegezustand und Unfallschäden wirken sofort preisrelevant.',
      'Preisrealismus entsteht durch Faktor-Kombination statt Einzelwert.',
    ],
    sections: [
      {
        heading: 'Kilometerstand richtig einordnen',
        paragraphs: [
          'Laufleistung ist ein Risikosignal für Verschleiß, aber nicht automatisch ein Ausschlusskriterium. Entscheidend ist, ob die Kilometer durch Wartung und Fahrprofil plausibel begleitet sind.',
          'Langstreckenkilometer bei regelmäßiger Wartung sind häufig weniger kritisch als kurze Stadtzyklen ohne Servicekontinuität.',
        ],
      },
      {
        heading: 'Scheckheft und Wartungsnachweise als Vertrauensfaktor',
        paragraphs: [
          'Ein gepflegtes Scheckheft reduziert Unsicherheit und macht den Zustand greifbar. Käufer kalkulieren bei guter Dokumentation geringere Risikopuffer ein.',
          'Fehlen Nachweise komplett, sinkt nicht nur der Preis, sondern auch die Abschlusswahrscheinlichkeit.',
        ],
      },
      {
        heading: 'Vorbesitzer: warum Eigentumshistorie zählt',
        paragraphs: [
          'Wenige Vorbesitzer wirken positiv, weil Nutzung und Pflegehistorie oft konsistenter erscheinen. Viele Halterwechsel erhöhen dagegen Rückfragen zur Historie.',
          'Wichtiger als die reine Anzahl ist jedoch Transparenz: nachvollziehbare Wechsel sind besser als unklare Übergänge.',
        ],
      },
      {
        heading: 'Die 5 wichtigsten Preishebel im Zusammenspiel',
        paragraphs: [
          'Der Markt bewertet immer mehrere Faktoren zugleich. Deshalb kann ein Fahrzeug mit hoher Laufleistung trotzdem attraktiv sein, wenn Wartung, Zustand und Nachfrage passen.',
        ],
        bullets: [
          'Technischer Zustand und Fehlerspeicher',
          'Nachweisbare Wartungsqualität',
          'Unfall- und Lackhistorie',
          'Ausstattung und Motorisierung',
          'Regionale und saisonale Nachfrage',
        ],
      },
    ],
    faqs: withBaseFaqs('kilometerstand-scheckheft-vorbesitzer-preis', [
      {
        q: 'Ist der Kilometerstand der wichtigste Preisfaktor?',
        a: 'Er ist wichtig, aber nicht allein entscheidend. Wartung, Zustand und Historie können die Wirkung stark verändern.',
      },
      {
        q: 'Wie stark wirkt ein fehlendes Scheckheft auf den Preis?',
        a: 'Je nach Fahrzeugtyp spürbar. Fehlende Servicehistorie erhöht die Unsicherheit und führt häufig zu Risikoabschlägen.',
      },
    ]),
    relatedSlugs: [
      'auto-online-inserieren-tipps-bilder',
      'unterlagen-autoverkauf-checkliste',
      'online-autoankauf-ablauf-7-schritte',
      'autoankauf-firmenwagen-gewerbe',
    ],
    coreLink: '/auto-bewerten',
  },
  {
    slug: 'rechtssicherer-kaufvertrag-auto',
    title: 'Kaufvertrag Auto rechtssicher | Klauseln & Übergabeprotokoll',
    description:
      'Rechtssicherer Kaufvertrag fürs Auto: Muss-Klauseln, Gewährleistung, bekannte Mängel und ein sauberes Übergabeprotokoll.',
    h1: 'Der rechtssichere Kaufvertrag fürs Auto – Must-Klauseln und Übergabeprotokoll',
    intro:
      'Die meisten Streitfälle entstehen nicht wegen des Preises, sondern wegen unklarer Vertragsdetails. Ein präziser Kaufvertrag mit sauberem Übergabeprotokoll schützt vor späteren Reklamationen.',
    quickFacts: [
      'Ein mündlicher Vertrag ist möglich, aber praktisch riskant.',
      'Gewährleistungsausschluss muss klar und wirksam formuliert sein.',
      'Bekannte Mängel gehören konkret in den Vertrag.',
      'Übergabezeitpunkt und Zahlungsstatus müssen dokumentiert sein.',
      'Schlüssel- und Dokumentenliste gehört in jedes Protokoll.',
    ],
    sections: [
      {
        heading: 'Muss-Inhalte eines belastbaren Kaufvertrags',
        paragraphs: [
          'Ein rechtssicherer Vertrag dokumentiert Parteien, Fahrzeugidentität, Kaufpreis, Zahlungsweg, Übergabezeit und bekannte Mängel eindeutig. Die FIN ist dabei wichtiger als die reine Modellbezeichnung.',
          'Unpräzise Formulierungen erzeugen Interpretationsspielraum. Klare Daten verhindern genau diese Grauzonen.',
        ],
        bullets: [
          'Vollständige Käufer- und Verkäuferdaten',
          'FIN/VIN, Kennzeichen, Kilometerstand bei Übergabe',
          'Kaufpreis, Zahlungsart, Zahlungszeitpunkt',
          'Bekannte Mängel und Unfallhistorie',
          'Unterschriften beider Parteien',
        ],
      },
      {
        heading: 'Gewährleistungsausschluss korrekt einsetzen',
        paragraphs: [
          'Beim Privatverkauf ist ein Haftungsausschluss üblich und sinnvoll. Er schützt jedoch nicht bei arglistigem Verschweigen bekannter Mängel.',
          'Deshalb ist ehrliche Mängeloffenlegung kein Nachteil, sondern Ihre stärkste Absicherung gegen spätere Auseinandersetzungen.',
        ],
      },
      {
        heading: 'Übergabeprotokoll: der unterschätzte Schutz',
        paragraphs: [
          'Das Übergabeprotokoll ergänzt den Vertrag um den tatsächlichen Zustand zum Übergabezeitpunkt. Dazu gehören Schlüsselanzahl, Unterlagenliste und dokumentierte Auffälligkeiten.',
          'Je sauberer das Protokoll, desto geringer ist das Risiko späterer Behauptungen zu fehlenden Teilen oder unbekannten Schäden.',
        ],
      },
      {
        heading: 'Sonderfälle: Finanzierung, Vollmacht, Firmenfahrzeug',
        paragraphs: [
          'Bei Finanzierung muss die Brief-Freigabe mit der Bank klar geregelt sein. Bei Vertretung oder Firmenfahrzeugen sind Vollmachten und Berechtigungen zwingend zu prüfen.',
          'Ohne diese Zusatznachweise kann ein formal korrekter Vertrag trotzdem praktisch angreifbar sein.',
        ],
      },
    ],
    faqs: withBaseFaqs('rechtssicherer-kaufvertrag-auto', [
      {
        q: 'Reicht ein Standardformular als Kaufvertrag aus?',
        a: 'Ja, wenn alle relevanten Daten vollständig und präzise eingetragen sind und der Zustand transparent dokumentiert wird.',
      },
      {
        q: 'Schützt "gekauft wie gesehen" immer vor späteren Forderungen?',
        a: 'Nein. Bei bewusst verschwiegenen bekannten Mängeln kann trotzdem Haftung entstehen.',
      },
    ]),
    relatedSlugs: [
      'unterlagen-autoverkauf-checkliste',
      'autoverkauf-betrug-kleinanzeigen-erkennen',
      'autoankauf-trotz-finanzierung',
      'autoabmeldung-nach-verkauf',
    ],
    coreLink: '/auto-verkaufen',
  },
  {
    slug: 'autoverkauf-betrug-kleinanzeigen-erkennen',
    title: 'Autoverkauf ohne Stress | Betrug bei Kleinanzeigen erkennen',
    description:
      'Betrug beim Autoverkauf vermeiden: Warnsignale, sichere Zahlungswege und Checkliste für Besichtigung, Vertrag und Übergabe.',
    h1: 'Autoverkauf ohne Stress – so erkennen Sie Betrug bei Kleinanzeigen',
    intro:
      'Kleinanzeigen funktionieren, aber nur mit klaren Sicherheitsregeln. Die meisten Betrugsfälle folgen wiederkehrenden Mustern, die sich mit einer sauberen Checkliste gut vermeiden lassen.',
    quickFacts: [
      'Betrugsversuche zeigen oft typische Kommunikationsmuster.',
      'Unsichere Zahlungsarten sind der häufigste Risikotreiber.',
      'Besichtigung und Probefahrt brauchen klare Regeln.',
      'Vertrag und Ausweisprüfung sind Pflicht, kein Misstrauen.',
      'Bei Unsicherheit ist Direktankauf die risikoärmere Alternative.',
    ],
    sections: [
      {
        heading: 'Die häufigsten Betrugsmaschen im Überblick',
        paragraphs: [
          'Typisch sind gefälschte Zahlungsbestätigungen, Zeitdruck mit Auslandsabholung, Identitätswechsel und nachträgliche Preisdrückerei am Übergabetag.',
          'Auffällig sind zudem unklare Kommunikation, ungewöhnliche Vermittlerrollen und Forderungen nach Dokumenten vor echtem Kaufinteresse.',
        ],
      },
      {
        heading: 'Sichere Zahlungs- und Übergaberegeln',
        paragraphs: [
          'Übergabe nur gegen bestätigten Zahlungseingang oder klar verifizierbare Echtzeitzahlung. Verlassen Sie sich nie auf Screenshots oder Mailbestätigungen ohne Kontobestätigung.',
          'Bei Barzahlung in sicherer Umgebung zählen, quittieren und den Betrag im Vertrag dokumentieren.',
        ],
        bullets: [
          'Keine Fahrzeug- oder Dokumentenübergabe ohne Zahlungsnachweis',
          'Ausweis und Kontaktdaten des Käufers prüfen',
          'Vertrag vollständig vor Ort ausfüllen und unterschreiben',
        ],
      },
      {
        heading: 'Probefahrt und Besichtigung ohne Risiko organisieren',
        paragraphs: [
          'Begleitete Probefahrt, vorab Führerscheinprüfung und klare Route sind Standard. Schlüssel und Papiere sollten nicht unbeaufsichtigt herausgegeben werden.',
          'Terminieren Sie Besichtigungen bei Tageslicht und möglichst nicht allein, insbesondere bei hochpreisigen Fahrzeugen.',
        ],
      },
      {
        heading: 'Wann Sie den Verkauf besser abbrechen sollten',
        paragraphs: [
          'Wenn Zahlungswege unklar bleiben, Druck aufgebaut wird oder Identitätsangaben nicht passen, ist ein Abbruch die richtige Entscheidung.',
          'Ein seriöser Käufer akzeptiert transparente Sicherheitsregeln. Fehlt diese Bereitschaft, ist das ein klares Warnsignal.',
        ],
      },
    ],
    faqs: withBaseFaqs('autoverkauf-betrug-kleinanzeigen-erkennen', [
      {
        q: 'Sind Banküberweisungen bei Kleinanzeigen sicher?',
        a: 'Ja, wenn Sie den Zahlungseingang direkt in Ihrem Konto verifizieren und nicht auf Screenshots vertrauen.',
      },
      {
        q: 'Was ist ein klares Warnsignal bei Kaufinteressenten?',
        a: 'Ungewöhnlicher Zeitdruck, ausweichende Antworten zu Identität oder Forderung nach vorzeitiger Dokumentenübergabe sind deutliche Warnzeichen.',
      },
    ]),
    relatedSlugs: [
      'rechtssicherer-kaufvertrag-auto',
      'auto-online-inserieren-tipps-bilder',
      'unterlagen-autoverkauf-checkliste',
      'auto-online-verkaufen-sofort-auszahlung',
    ],
    coreLink: '/auto-verkaufen',
  },
  {
    slug: 'auto-online-inserieren-tipps-bilder',
    title: 'Auto online inserieren | Tipps für bessere Bilder und Texte',
    description:
      'Auto online inserieren: bessere Bilder, klare Beschreibung, realistischer Preis und weniger Rückfragen durch strukturierte Inserate.',
    h1: 'Auto online inserieren – Tipps für bessere Bilder und mehr seriöse Anfragen',
    intro:
      'Ein gutes Inserat reduziert Rückfragen, spart Zeit und verbessert die Abschlussqualität. Entscheidend sind klare Bilder, nachvollziehbare Daten und ein realistischer Preisrahmen.',
    quickFacts: [
      'Bilder entscheiden über Klickrate und Erstvertrauen.',
      'Strukturierte Beschreibungen senken Rückfragen deutlich.',
      'Ein realistischer Einstiegspreis spart Verhandlungsschleifen.',
      'Mängeloffenlegung erhöht die Qualität der Anfragen.',
      'Sicherheitsregeln sind auch bei guten Inseraten Pflicht.',
    ],
    sections: [
      {
        heading: 'Fotos, die Vertrauen schaffen',
        paragraphs: [
          'Fotografieren Sie bei Tageslicht, neutralem Hintergrund und aus allen relevanten Perspektiven. Innenraum, Außenansichten, Cockpit, Reifen und bekannte Mängel sollten sichtbar sein.',
          'Unbearbeitete, klare Bilder wirken glaubwürdiger als stark gefilterte Aufnahmen. Qualität schlägt Quantität, aber Vollständigkeit bleibt wichtig.',
        ],
      },
      {
        heading: 'Beschreibung: kurz, präzise, überprüfbar',
        paragraphs: [
          'Nennen Sie Daten, die Interessenten vergleichen können: Erstzulassung, Laufleistung, HU-Status, Servicehistorie, bekannte Schäden und Anzahl der Vorbesitzer.',
          'Vermeiden Sie Übertreibungen. Wer Mängel offen benennt, erhält weniger, aber deutlich seriösere Anfragen.',
        ],
      },
      {
        heading: 'Preisstrategie für weniger Leerlauf',
        paragraphs: [
          'Ein zu hoher Startpreis führt oft zu Wochen ohne echte Nachfrage. Ein datenbasierter Einstieg reduziert Standzeit und macht Verhandlungen sachlicher.',
          'Setzen Sie einen realistischen Rahmen mit kleiner Verhandlungsspanne statt Fantasieaufschlag.',
        ],
      },
      {
        heading: 'Wann Direktankauf besser als Inserat ist',
        paragraphs: [
          'Wenn Zeit knapp ist, Sicherheitsrisiken vermieden werden sollen oder das Fahrzeug schwer vermittelbar ist, kann Direktankauf sinnvoller sein.',
          'Der potenziell geringere Bruttopreis wird dann durch geringeren Aufwand, weniger Risiko und schnellen Abschluss kompensiert.',
        ],
      },
    ],
    faqs: withBaseFaqs('auto-online-inserieren-tipps-bilder', [
      {
        q: 'Wie viele Bilder sollte ein gutes Inserat enthalten?',
        a: 'In der Regel 12 bis 20 aussagekräftige Bilder mit Außen-, Innen-, Detail- und Mängelansichten.',
      },
      {
        q: 'Sollte ich Mängel im Inserat offen nennen?',
        a: 'Ja. Transparente Mängelangaben reduzieren Rückfragen und vermeiden Konflikte bei Besichtigung und Vertrag.',
      },
    ]),
    relatedSlugs: [
      'kilometerstand-scheckheft-vorbesitzer-preis',
      'autoverkauf-betrug-kleinanzeigen-erkennen',
      'unterlagen-autoverkauf-checkliste',
      'auto-online-verkaufen-sofort-auszahlung',
    ],
    coreLink: '/auto-bewerten',
  },
  {
    slug: 'autoabmeldung-nach-verkauf',
    title: 'Autoabmeldung nach Verkauf | Fristen und sichere Nachweise',
    description:
      'Auto nach dem Verkauf abmelden: Wer ist verantwortlich, welche Fristen gelten und welche Nachweise Sie für Versicherung und Steuer brauchen.',
    h1: 'Autoabmeldung nach dem Verkauf – Fristen, Zuständigkeiten und sichere Nachweise',
    intro:
      'Die Abmeldung ist der letzte kritische Schritt nach dem Verkauf. Ohne klaren Nachweis können Versicherung, Steuer und Haftungsfragen unnötig weiterlaufen.',
    quickFacts: [
      'Abmeldung beendet Versicherungspflicht und Kfz-Steuerpflicht.',
      'Verkaufsvertrag ersetzt keinen Abmeldenachweis.',
      'Zuständigkeit muss vor Übergabe klar vereinbart werden.',
      'Schnelle Abmeldung reduziert Haftungsrisiken.',
      'Nachweise sollten strukturiert archiviert werden.',
    ],
    sections: [
      {
        heading: 'Warum die Abmeldung so wichtig ist',
        paragraphs: [
          'Solange das Fahrzeug angemeldet ist, können Halterpflichten fortwirken. Deshalb sollte die Abmeldung nicht als Nebenthema behandelt werden.',
          'Ein sauberer Abschluss umfasst Vertrag, Übergabe und Abmeldebestätigung als vollständiges Paket.',
        ],
      },
      {
        heading: 'Wer meldet ab - Verkäufer, Käufer oder Händler?',
        paragraphs: [
          'Im Privatverkauf bleibt die Verantwortung oft beim Verkäufer, wenn nichts anderes klar geregelt ist. Beim Händlerankauf wird die Abmeldung häufig direkt übernommen.',
          'Entscheidend ist eine eindeutige Vereinbarung vor Übergabe, damit keine Interpretationslücke entsteht.',
        ],
      },
      {
        heading: 'Nachweise für Versicherung und Steuer',
        paragraphs: [
          'Für Versicherer und Behörden ist die Abmeldebestätigung der zentrale Nachweis. Der reine Kaufvertrag genügt bei Streitfragen häufig nicht.',
          'Bewahren Sie deshalb Verkaufsvertrag, Übergabeprotokoll und Abmeldenachweis zusammen auf.',
        ],
        bullets: [
          'Kaufvertrag mit Datum und Uhrzeit',
          'Übergabeprotokoll mit Kennzeichen und Schlüsseln',
          'Offizielle Abmeldebestätigung',
        ],
      },
      {
        heading: 'Praktische Checkliste nach dem Verkauf',
        paragraphs: [
          'Nach dem Verkauf sollten Sie den Status zeitnah prüfen: Abmeldung bestätigt, Versicherung informiert, Unterlagen archiviert. Damit vermeiden Sie spätere Rückfragen und Kosten.',
          'Bei professioneller Abwicklung erhalten Sie diese Nachweise gebündelt und müssen den Prozess nicht selbst nachsteuern.',
        ],
      },
    ],
    faqs: withBaseFaqs('autoabmeldung-nach-verkauf', [
      {
        q: 'Bis wann sollte ein verkauftes Auto abgemeldet sein?',
        a: 'So schnell wie möglich nach Übergabe. Je kürzer die offene Phase, desto geringer das Haftungs- und Kostenrisiko.',
      },
      {
        q: 'Reicht der Kaufvertrag als Nachweis gegenüber der Versicherung?',
        a: 'Der Kaufvertrag ist wichtig, ersetzt aber die offizielle Abmeldebestätigung in der Regel nicht vollständig.',
      },
    ]),
    relatedSlugs: [
      'rechtssicherer-kaufvertrag-auto',
      'unterlagen-autoverkauf-checkliste',
      'online-autoankauf-ablauf-7-schritte',
      'auto-online-verkaufen-sofort-auszahlung',
    ],
    coreLink: '/auto-verkaufen',
  },
];

export const GUIDE_CONTENT_BY_SLUG: Record<string, GuidePageContent> = Object.fromEntries(
  GUIDE_CONTENT.map((guide) => [guide.slug, guide]),
);

export const GUIDE_SLUGS = GUIDE_CONTENT.map((guide) => guide.slug);

export const getGuideBySlug = (slug: string | undefined): GuidePageContent | null => {
  if (!slug) return null;
  return GUIDE_CONTENT_BY_SLUG[slug] ?? null;
};

export const getGuidePath = (slug: string): string => `/ratgeber/${slug}`;

export const isGuideSlug = (slug: string): boolean => Boolean(GUIDE_CONTENT_BY_SLUG[slug]);
