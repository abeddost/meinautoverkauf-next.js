import type { GuidePageContent } from './guideContent';

/** Guides added in the November 2026 content review. */
export const NEW_GUIDES: GuidePageContent[] = [
  {
    slug: 'auto-privat-oder-haendler-verkaufen',
    title: 'Auto privat oder an den Händler verkaufen? Der Vergleich',
    description:
      'Auto privat oder an den Händler verkaufen? Preis, Aufwand, Haftung und Risiko im ehrlichen Vergleich, mit Rechenbeispiel und klarer Entscheidungshilfe.',
    h1: 'Auto privat oder an den Händler verkaufen? Der ehrliche Vergleich',
    intro:
      'Privat erzielen Sie meist den höheren Preis, beim Händler den einfacheren Ablauf. Welcher Weg sich lohnt, hängt nicht nur vom Preis ab, sondern auch von Zeit, Zustand des Autos und Ihrer Bereitschaft, sich um alles selbst zu kümmern. Auch wir kaufen Autos an, und deshalb sagen wir hier offen, wann der Privatverkauf die bessere Wahl ist.',
    quickFacts: [
      'Privatverkauf bringt meist mehr Geld, kostet aber Zeit.',
      'Der Händler rechnet Marge, Aufbereitung und Risiko in den Preis ein.',
      'Bei Schäden wird der Privatverkauf schnell mühsam.',
      'Haftung lässt sich privat ausschließen, aber nur mit sauberem Vertrag.',
      'Vergleichen Sie Nettoerlös und Aufwand, nicht nur den Bruttopreis.',
    ],
    sections: [
      {
        heading: 'Der Vergleich auf einen Blick',
        paragraphs: [
          'Beim Privatverkauf sind Sie Verkäufer, Fotograf, Kundendienst und Vertragspartner in einer Person. Beim Verkauf an einen Händler geben Sie diese Aufgaben ab und zahlen dafür mit einem niedrigeren Preis.',
          'Der Preisabstand ist kein Zufall. Ein Händler muss das Auto aufbereiten, einige Zeit finanzieren, beim Weiterverkauf meist Gewährleistung bieten und Gewinn machen. Diese Kosten stecken im Ankaufspreis.',
        ],
        bullets: [
          'Privat: höherer Preis, mehr Aufwand, offener Zeitpunkt',
          'Händler: niedrigerer Preis, wenig Aufwand, planbarer Termin',
          'Privat: Sie suchen, prüfen und verhandeln selbst',
          'Händler: Vertrag und Abmeldung werden meist übernommen',
        ],
      },
      {
        heading: 'Rechenbeispiel: Was am Ende übrig bleibt',
        paragraphs: [
          'Nehmen wir einen Gebrauchtwagen, der privat etwa 10.000 Euro erzielen könnte. Ein Händler bietet dafür zum Beispiel 7.000 bis 8.000 Euro. Das ist ein reines Rechenbeispiel, der tatsächliche Abstand hängt stark von Modell und Zustand ab.',
          'Privat müssen Sie gegenrechnen: Aufbereitung, eventuell ein Inserat, ein Preisnachlass in der Verhandlung sowie Steuer und Versicherung für die Wochen bis zum Verkauf. Bleibt nach allen Abzügen ein deutlicher Vorsprung, lohnt sich der Aufwand. Bei teuren Autos in gutem Zustand ist das oft der Fall.',
          'Bei einem älteren Auto für 2.000 Euro sieht es anders aus. Dort beträgt der Unterschied vielleicht wenige Hundert Euro, und der Aufwand bleibt gleich.',
        ],
      },
      {
        heading: 'Wann der Privatverkauf die bessere Wahl ist',
        paragraphs: [
          'Ein Privatverkauf lohnt sich, wenn Ihr Auto in gutem Zustand ist, die Nachfrage stimmt und Sie nicht unter Zeitdruck stehen. Gefragte Modelle mit lückenloser Wartung und frischer HU verkaufen sich privat oft gut.',
          'Sie sollten außerdem bereit sein, Anrufe anzunehmen, Besichtigungen zu begleiten und beim Vertrag sorgfältig zu arbeiten. Unser Ratgeber zum Inserieren und die Hinweise zu Betrugsmaschen helfen dabei.',
        ],
      },
      {
        heading: 'Wann der Verkauf an einen Händler sinnvoll ist',
        paragraphs: [
          'Der Händler ist oft die bessere Wahl, wenn das Auto Schäden hat, die HU abgelaufen ist oder eine größere Reparatur ansteht. Privatkäufer sind bei solchen Fahrzeugen vorsichtig und verhandeln hart.',
          'Auch wer schnell Klarheit braucht, etwa wegen eines Umzugs, eines Jobwechsels oder eines neuen Autos, fährt mit einem festen Termin meist besser. Holen Sie dann mehrere Angebote ein und vergleichen Sie sie.',
        ],
      },
      {
        heading: 'Haftung: Der Unterschied, der oft übersehen wird',
        paragraphs: [
          'Beim Privatverkauf können Sie die Sachmängelhaftung vertraglich ausschließen. Das schützt Sie aber nicht, wenn Sie einen bekannten Mangel verschweigen oder eine Eigenschaft zusichern, die nicht stimmt.',
          'Verkaufen Sie an einen Händler, wird im Vertrag meist ebenfalls ein Ausschluss vereinbart. Auch hier gilt: Bekannte Mängel und Unfallschäden müssen Sie angeben.',
        ],
      },
    ],
    checklist: {
      heading: 'So treffen Sie die Entscheidung',
      items: [
        { title: 'Wert realistisch einschätzen', text: 'Vergleichen Sie ähnliche Inserate und holen Sie eine kostenlose Bewertung ein.' },
        { title: 'Zeit ehrlich planen', text: 'Fragen Sie sich, bis wann das Auto weg sein muss und wie viele Besichtigungen Sie begleiten können.' },
        { title: 'Zustand prüfen', text: 'Hat das Auto Schäden oder steht bald eine HU an, sinkt die Zahl der Privatkäufer.' },
        { title: 'Nettoerlös vergleichen', text: 'Ziehen Sie vom Privatpreis Aufbereitung, laufende Kosten und den üblichen Nachlass ab.' },
        { title: 'Mehrere Angebote einholen', text: 'Das gilt für den Händlerverkauf genauso wie für den Privatverkauf.' },
      ],
    },
    pitfalls: {
      heading: 'Denkfehler beim Preisvergleich',
      items: [
        { title: 'Inseratspreis mit Verkaufspreis gleichsetzen', text: 'Was im Inserat steht, wird selten vollständig bezahlt.' },
        { title: 'Die laufenden Kosten vergessen', text: 'Steuer, Versicherung und Wertverlust laufen bis zum Verkauf weiter.' },
        { title: 'Eigene Zeit gratis rechnen', text: 'Besichtigungen und Nachrichten kosten mehr Stunden, als viele erwarten.' },
        { title: 'Nur ein Händlerangebot einholen', text: 'Die Preise können sich deutlich unterscheiden. Vergleichen lohnt sich.' },
      ],
    },
    faqs: [
      { q: 'Wie viel weniger zahlt ein Händler als ein Privatkäufer?', a: 'Das hängt stark von Modell, Alter und Zustand ab. Der Abstand kann bei gefragten Autos spürbar sein und bei älteren Fahrzeugen in absoluten Euro klein ausfallen. Vergleichen Sie am besten konkrete Angebote.' },
      { q: 'Ist der Privatverkauf riskanter?', a: 'Er birgt mehr Risiken, etwa gefälschte Zahlungsbelege oder Streit über Mängel. Mit klaren Regeln für Besichtigung, Zahlung und Vertrag lassen sie sich aber deutlich verringern.' },
      { q: 'Muss ich beim Händlerverkauf etwas selbst abmelden?', a: 'Das ist Vereinbarungssache. Viele Händler übernehmen die Abmeldung. Beim Verkauf an uns ist sie kostenfrei enthalten.' },
      { q: 'Kann ich erst privat inserieren und später an einen Händler verkaufen?', a: 'Ja. Setzen Sie sich dafür eine Frist. Bleibt das Inserat ohne ernsthafte Anfragen, können Sie immer noch den einfacheren Weg wählen.' },
      { q: 'Was ist bei einem Auto mit Motorschaden besser?', a: 'Meist der Verkauf an einen Händler oder Spezialisten. Privatkäufer scheuen das Risiko, sofern sie nicht selbst schrauben.' },
    ],
    relatedSlugs: ['auto-online-inserieren-tipps-bilder', 'autoverkauf-betrug-kleinanzeigen-erkennen', 'rechtssicherer-kaufvertrag-auto', 'inzahlungnahme-oder-verkaufen'],
    coreLink: '/auto-bewerten',
  },
  {
    slug: 'auto-mit-getriebeschaden-verkaufen',
    title: 'Auto mit Getriebeschaden verkaufen | Reparieren oder nicht?',
    description:
      'Auto mit Getriebeschaden verkaufen: Symptome, typische Reparaturkosten und wie Sie entscheiden, ob sich Reparatur oder Verkauf für Ihr Fahrzeug eher lohnt.',
    h1: 'Auto mit Getriebeschaden verkaufen: Reparieren oder verkaufen?',
    intro:
      'Ein Getriebeschaden kann mehrere Tausend Euro kosten, und der genaue Betrag steht oft erst nach der Diagnose fest. Bevor Sie einen Auftrag erteilen, lohnt sich ein nüchterner Vergleich: Was kostet die Reparatur, was ist das Auto danach wert, und was bringt es heute im aktuellen Zustand?',
    quickFacts: [
      'Erst die Diagnose zeigt, ob das Getriebe wirklich defekt ist.',
      'Eine Reparatur ist oft günstiger als ein Austausch.',
      'Automatik- und Doppelkupplungsgetriebe sind meist teurer.',
      'Bei jüngeren Autos zuerst nach Garantie oder Kulanz fragen.',
      'Auch mit defektem Getriebe hat ein Auto oft noch einen Restwert.',
    ],
    sections: [
      {
        heading: 'Woran Sie einen Getriebeschaden erkennen',
        paragraphs: [
          'Typische Anzeichen sind Brummen oder Vibrationen, Ruckeln beim Anfahren, verzögertes Schalten oder Gänge, die sich nicht mehr einlegen lassen. Bei Automatikgetrieben kommt oft ein Notlauf hinzu, bei dem nur noch wenige Gänge verfügbar sind.',
          'Nicht jedes Symptom bedeutet das Ende des Getriebes. Manchmal liegt die Ursache an der Kupplung, am Steuergerät oder am Getriebeöl. Lassen Sie deshalb erst eine Diagnose machen, bevor Sie über Reparatur oder Verkauf entscheiden. Bei starken Symptomen sollten Sie nicht weiterfahren.',
        ],
      },
      {
        heading: 'Was eine Reparatur kosten kann',
        paragraphs: [
          'Die Kosten schwanken stark mit Getriebeart, Fahrzeug und Schaden. Ratgeber und Werkstätten nennen für Reparaturen an Automatik- und Doppelkupplungsgetrieben häufig Beträge von rund 1.500 bis 5.000 Euro. Einzelne Arbeiten an Mechatronik oder Kupplung können darunter liegen, ein Austausch bei großen Fahrzeugen auch deutlich darüber.',
          'Nehmen Sie solche Spannen nur als grobe Orientierung. Verlässlich ist erst ein schriftlicher Kostenvoranschlag für Ihr Auto.',
        ],
        bullets: [
          'Instandsetzung: oft die günstigere Lösung',
          'Überholtes Getriebe: häufig preiswerter als ein Neuteil',
          'Neues Austauschgetriebe: meist die teuerste Variante',
          'Ursache klären, sonst kann der Schaden wiederkommen',
        ],
      },
      {
        heading: 'So rechnen Sie Reparatur gegen Verkauf',
        paragraphs: [
          'Ermitteln Sie zuerst den Wert, den das Auto in gutem Zustand hätte. Ziehen Sie davon die Reparaturkosten ab und vergleichen Sie das Ergebnis mit dem Angebot für das Auto im aktuellen Zustand.',
          'Rechnen Sie mit einem Sicherheitspuffer. Bei älteren Autos mit hoher Laufleistung können nach der Reparatur weitere Arbeiten anstehen. Liegen Reparaturkosten und Fahrzeugwert nah beieinander, ist der Verkauf meist die ruhigere Entscheidung.',
        ],
      },
      {
        heading: 'Garantie, Kulanz und Gebrauchtwagengarantie',
        paragraphs: [
          'Fragen Sie bei jüngeren Fahrzeugen vor jeder Reparatur beim Hersteller oder Vertragshändler nach Garantie oder Kulanz. Auch nach Ablauf der Garantie beteiligen sich Hersteller manchmal an den Kosten, besonders bei lückenlosem Scheckheft.',
          'Prüfen Sie außerdem, ob beim Kauf eine Gebrauchtwagengarantie abgeschlossen wurde, und reichen Sie die Unterlagen rechtzeitig ein.',
        ],
      },
      {
        heading: 'Verkauf mit defektem Getriebe: darauf kommt es an',
        paragraphs: [
          'Nennen Sie den Getriebeschaden im Vertrag und im Bewertungsformular ausdrücklich. Das schützt Sie später und vermeidet Preisdiskussionen beim Termin.',
          'Für den Restwert zählen Modell, Laufleistung, Karosserie, Innenraum und der Zustand der übrigen Technik. Ist das Auto nicht mehr fahrbereit, klären Sie den Transport vorab. Rufen Sie uns in diesem Fall vor dem Termin an.',
        ],
      },
    ],
    checklist: {
      heading: 'Das klären Sie vor der Entscheidung',
      items: [
        { title: 'Fehlerspeicher auslesen lassen', text: 'Das ist der günstigste erste Schritt und oft in kurzer Zeit erledigt.' },
        { title: 'Schriftlicher Kostenvoranschlag', text: 'Fragen Sie nach Reparatur, Überholung und Austausch, damit Sie vergleichen können.' },
        { title: 'Zweite Meinung', text: 'Getriebe-Fachbetriebe kommen manchmal zu einem anderen Ergebnis als die erste Werkstatt.' },
        { title: 'Garantie und Kulanz', text: 'Klären Sie das vor jedem Auftrag, weil danach oft nichts mehr erstattet wird.' },
        { title: 'Angebot im Ist-Zustand', text: 'Eine kostenlose Bewertung zeigt, was das Auto ohne Reparatur noch bringt.' },
      ],
    },
    pitfalls: {
      heading: 'Häufige Fehler beim Getriebeschaden',
      items: [
        { title: 'Weiterfahren trotz starker Symptome', text: 'Das kann den Schaden vergrößern und die Reparatur verteuern.' },
        { title: 'Austausch ohne Ursachenklärung', text: 'Ist die Ursache nicht behoben, kann auch das neue Getriebe Schaden nehmen.' },
        { title: 'Preis vor dem Befund nennen', text: 'Ohne Diagnose lässt sich ein Getriebeschaden nur schwer einordnen, das gilt auch für Käufer.' },
        { title: 'Den Schaden verschweigen', text: 'Ein bekannter Getriebeschaden muss angegeben werden, auch bei vereinbartem Haftungsausschluss.' },
      ],
    },
    faqs: [
      { q: 'Lohnt sich die Reparatur eines Getriebeschadens?', a: 'Das hängt vom Fahrzeugwert ab. Bei jüngeren, wertvollen Autos lohnt sie sich eher als bei älteren Fahrzeugen, bei denen die Kosten nah an den Wert herankommen.' },
      { q: 'Kann ich mit einem Getriebeschaden noch fahren?', a: 'Bei starken Symptomen sollten Sie nicht weiterfahren. Lassen Sie das Auto prüfen, bevor der Schaden größer wird.' },
      { q: 'Kaufen Sie Autos mit Getriebeschaden an?', a: 'Ja. Beschreiben Sie den Schaden im Bewertungsformular. Ist das Auto nicht fahrbereit, rufen Sie uns vor dem Termin an.' },
      { q: 'Muss ich den Getriebeschaden angeben?', a: 'Ja. Bekannte Mängel müssen Sie angeben. Ein Haftungsausschluss schützt nicht, wenn Sie einen bekannten Schaden verschweigen.' },
      { q: 'Was kostet ein Austauschgetriebe?', a: 'Das hängt stark vom Fahrzeug ab. Holen Sie einen schriftlichen Kostenvoranschlag ein und fragen Sie auch nach einem überholten Getriebe als günstigerer Alternative.' },
    ],
    relatedSlugs: ['auto-mit-motorschaden-verkaufen', 'autoankauf-ohne-tuev', 'unterlagen-autoverkauf-checkliste', 'auto-verschrotten-oder-verkaufen'],
    coreLink: '/auto-bewerten',
    ctaBridge: {
      heading: 'Mehr zu defekten Fahrzeugen',
      text: 'Unsere Übersicht zeigt, wie Sie bei Motorschaden, Unfall, Getriebeschaden oder abgelaufener HU vorgehen.',
      href: '/defektes-auto-verkaufen',
      label: 'Defektes Auto verkaufen',
    },
  },
  {
    slug: 'auto-verschrotten-oder-verkaufen',
    title: 'Auto verschrotten oder verkaufen? Das lohnt sich wann',
    description:
      'Auto verschrotten oder verkaufen? Wann ein Altauto noch Geld bringt, was ein Verwertungsnachweis ist und was das Umweltbundesamt zum Verkauf von Wracks sagt.',
    h1: 'Auto verschrotten oder verkaufen? So treffen Sie die richtige Wahl',
    intro:
      'Nicht jedes alte Auto gehört auf den Schrottplatz. Viele Fahrzeuge haben noch einen Marktwert, auch wenn sie durch die HU fallen würden. Echte Altfahrzeuge dagegen dürfen nur über anerkannte Betriebe entsorgt werden. Dieser Ratgeber hilft Ihnen bei der Abgrenzung und zeigt, welche Nachweise Sie brauchen.',
    quickFacts: [
      'Altfahrzeuge dürfen nur an anerkannte Demontagebetriebe gehen.',
      'Der Verwertungsnachweis ist für die Abmeldung vorgeschrieben.',
      'Das Verschrotten ist für den letzten Halter meist kostenlos.',
      'Ein Wrack darf nicht als Gebrauchtwagen verkauft werden.',
      'Ein altes Auto ist nicht automatisch ein Altfahrzeug.',
    ],
    sections: [
      {
        heading: 'Gebrauchtwagen oder Altfahrzeug: Wo die Grenze liegt',
        paragraphs: [
          'Das Umweltbundesamt empfiehlt, nur echte Gebrauchtwagen zu verkaufen und keine Wracks. Als Gebrauchtwagen gilt danach ein Auto, das fahrbereit ist oder nur geringe Reparaturen braucht. Motor oder Achsen sollten nicht stark beschädigt sein.',
          'Totalschäden und Fahrzeuge, aus denen Betriebsflüssigkeiten austreten, gelten eher als Altfahrzeug und damit als Abfall. Wer ein Wrack als Gebrauchtwagen verkauft, kann eine Ordnungswidrigkeit begehen. Im Zweifel fragen Sie die Zulassungsstelle, einen Sachverständigen oder einen anerkannten Betrieb.',
        ],
      },
      {
        heading: 'Wann sich der Verkauf lohnt',
        paragraphs: [
          'Ein Verkauf ist meist die bessere Wahl, wenn das Auto noch fährt, die Papiere vollständig sind und es für das Modell eine Nachfrage gibt. Auch abgelaufene HU, kleine Mängel oder hohe Laufleistung sprechen nicht automatisch gegen einen Verkauf.',
          'Holen Sie vor dem Verschrotten eine Bewertung ein. Sie ist kostenlos und zeigt, ob das Auto noch einen Marktwert hat. Geben Sie dabei den Zustand ehrlich an.',
        ],
      },
      {
        heading: 'Wann das Verschrotten richtig ist',
        paragraphs: [
          'Ist das Auto ein Totalschaden, stark verrostet oder technisch nicht mehr sinnvoll instand zu setzen, ist der Weg über einen anerkannten Demontagebetrieb richtig. Das Auto dort abzugeben ist für den letzten Halter meist kostenlos, und je nach Zustand und Marktpreisen gibt es manchmal sogar noch Geld.',
          'Laut Umweltbundesamt besteht bei Betrieben aus dem Rücknahmenetz des Herstellers ein Anspruch auf kostenlose Annahme, sofern das Auto noch wertvolle Teile wie Motor und Katalysator hat. Solche Rücknahmestellen müssen im Umkreis von höchstens 50 Kilometern erreichbar sein.',
        ],
      },
      {
        heading: 'Der Verwertungsnachweis',
        paragraphs: [
          'Den Verwertungsnachweis erhalten Sie vom Demontagebetrieb. Er belegt die ordnungsgemäße Verwertung und muss bei der Abmeldung der Zulassungsstelle vorgelegt werden.',
          'Verkaufen Sie das Auto dagegen als Gebrauchtwagen, brauchen Sie keinen Verwertungsnachweis. Dann regeln Kaufvertrag und Abmeldung den Vorgang.',
        ],
        bullets: [
          'Nur von einem anerkannten Demontagebetrieb ausstellen lassen',
          'Für die Abmeldung bei der Zulassungsstelle vorlegen',
          'Zusammen mit den übrigen Unterlagen aufbewahren',
        ],
      },
      {
        heading: 'Vorsicht bei Schrotthändlern und Zetteln am Auto',
        paragraphs: [
          'Lassen Sie sich nicht von Zetteln an der Windschutzscheibe oder kostenlosen Abholangeboten unter Druck setzen. Prüfen Sie, ob der Betrieb anerkannt ist und einen Verwertungsnachweis ausstellt, falls Sie das Auto verschrotten möchten.',
          'Übergeben Sie das Auto nie ohne Kaufvertrag oder Nachweis. Bleibt es auf Sie zugelassen, können Steuer, Versicherung und Bußgelder weiter bei Ihnen landen.',
        ],
      },
    ],
    checklist: {
      heading: 'So gehen Sie Schritt für Schritt vor',
      items: [
        { title: 'Zustand ehrlich einschätzen', text: 'Fährt das Auto noch? Sind Motor, Achsen und Karosserie stark beschädigt?' },
        { title: 'Bewertung einholen', text: 'Eine kostenlose Einschätzung zeigt, ob ein Verkauf infrage kommt.' },
        { title: 'Anerkannten Betrieb finden', text: 'Falls verschrottet wird, fragen Sie nach der Anerkennung und dem Rücknahmenetz.' },
        { title: 'Nachweis sichern', text: 'Lassen Sie sich Verwertungsnachweis oder Kaufvertrag aushändigen.' },
        { title: 'Abmelden', text: 'Melden Sie das Auto ab und informieren Sie Ihre Versicherung.' },
      ],
    },
    pitfalls: {
      heading: 'Häufige Fehler beim Altauto',
      items: [
        { title: 'Ohne Bewertung verschrotten', text: 'So verschenken Sie unter Umständen Geld, obwohl das Auto noch einen Marktwert hat.' },
        { title: 'Wrack als Gebrauchtwagen anbieten', text: 'Das kann eine Ordnungswidrigkeit sein. Beschreiben Sie den Zustand ehrlich.' },
        { title: 'Keinen Verwertungsnachweis verlangen', text: 'Ohne ihn lässt sich ein verschrottetes Auto nicht ordnungsgemäß abmelden.' },
        { title: 'Auto irgendwo abstellen', text: 'Ein abgestelltes Altauto zu entsorgen kann teuer werden und ist verboten.' },
      ],
    },
    faqs: [
      { q: 'Was kostet es, ein Auto zu verschrotten?', a: 'Für den letzten Halter ist die Abgabe meist kostenlos. Je nach Zustand und Marktpreisen kann es sogar noch Geld geben.' },
      { q: 'Brauche ich einen Verwertungsnachweis?', a: 'Ja, wenn das Auto verschrottet wird. Sie erhalten ihn vom Demontagebetrieb und legen ihn bei der Abmeldung vor. Bei einem Verkauf als Gebrauchtwagen ist er nicht nötig.' },
      { q: 'Darf ich ein Auto ohne HU verkaufen?', a: 'Ja. Eine abgelaufene HU allein macht ein Auto nicht zum Altfahrzeug. Geben Sie den Zustand und den HU-Status offen an.' },
      { q: 'Kaufen Sie auch sehr alte Autos an?', a: 'Sprechen Sie uns an. Ob ein Ankauf möglich ist, hängt vom Zustand ab. Echte Altfahrzeuge und Wracks gehören zu einem anerkannten Demontagebetrieb.' },
      { q: 'Wie finde ich einen anerkannten Demontagebetrieb?', a: 'Fragen Sie beim Hersteller nach dem Rücknahmenetz oder lassen Sie sich die Anerkennung vom Betrieb zeigen.' },
    ],
    relatedSlugs: ['autoankauf-ohne-tuev', 'auto-mit-motorschaden-verkaufen', 'autoabmeldung-nach-verkauf', 'auto-mit-getriebeschaden-verkaufen'],
    coreLink: '/auto-bewerten',
  },
  {
    slug: 'inzahlungnahme-oder-verkaufen',
    title: 'Inzahlungnahme oder Auto selbst verkaufen? Der Vergleich',
    description:
      'Auto beim Neuwagenkauf in Zahlung geben oder selbst verkaufen? Vor- und Nachteile, Prämien und wie Sie Rabatt und Ankaufspreis richtig vergleichen.',
    h1: 'Inzahlungnahme oder selbst verkaufen? So vergleichen Sie richtig',
    intro:
      'Beim Kauf des nächsten Autos ist die Inzahlungnahme bequem: Alt abgeben, Neu mitnehmen. Der Preis für das alte Auto ist dabei aber schwer zu beurteilen, weil er mit dem Rabatt auf das neue Auto vermischt wird. Trennen Sie deshalb beide Geschäfte in Ihrer Rechnung, dann sehen Sie, welcher Weg wirklich mehr bringt.',
    quickFacts: [
      'Inzahlungnahme ist bequem und spart Zeit.',
      'Der Händler ist nicht verpflichtet, Ihr Auto zu nehmen.',
      'Rabatt und Ankaufspreis lassen sich gegeneinander verschieben.',
      'Prämien gibt es nur bei bestimmten Herstellern und Aktionen.',
      'Ein separates Vergleichsangebot stärkt Ihre Verhandlung.',
    ],
    sections: [
      {
        heading: 'So funktioniert die Inzahlungnahme',
        paragraphs: [
          'Der Händler verrechnet den Wert Ihres Autos mit dem Kaufpreis des neuen Fahrzeugs. Sie bezahlen nur die Differenz und übergeben das alte Auto oft genau dann, wenn das neue bereitsteht. So bleiben Sie durchgehend mobil.',
          'Ein Anspruch darauf besteht nicht. Der Händler muss Ihr Auto weder annehmen noch einen bestimmten Preis zahlen.',
        ],
      },
      {
        heading: 'Warum der Preis schwer zu beurteilen ist',
        paragraphs: [
          'Ein Händler kann Ihrem alten Auto einen hohen Preis geben und dafür beim Rabatt auf das neue Auto sparen, oder umgekehrt. Am Ende zählt nur die Summe, die Sie zuzahlen.',
          'Verhandeln Sie daher zuerst den Preis des neuen Autos, ohne die Inzahlungnahme zu erwähnen. Sprechen Sie erst danach über Ihr altes Fahrzeug. Mit einem unabhängigen Vergleichsangebot können Sie das Ergebnis besser einordnen.',
        ],
      },
      {
        heading: 'Inzahlungnahmeprämien richtig einordnen',
        paragraphs: [
          'Einige Hersteller bieten beim Neuwagenkauf zeitweise eine Prämie für die Inzahlungnahme an. Das kann sich lohnen, vor allem bei älteren Autos mit geringem Marktwert.',
          'Prüfen Sie aber die Bedingungen genau: Oft gilt die Prämie nur für bestimmte Modelle oder setzt voraus, dass Sie das alte Auto eine Mindestzeit besessen haben. Vergleichen Sie zudem, ob der Rabatt ohne Prämie höher ausfallen würde.',
        ],
      },
      {
        heading: 'Wann der getrennte Verkauf mehr bringt',
        paragraphs: [
          'Wer das Auto selbst verkauft, kann den besten Preis suchen und den Neuwagen frei bei einem anderen Händler verhandeln. Das lohnt sich besonders bei gefragten Modellen in gutem Zustand.',
          'Bei Autos mit größeren Vorschäden ist die Inzahlungnahme oft schwierig, weil die Kosten für den Händler zu hoch werden. Dann kann ein Verkauf an einen spezialisierten Ankäufer sinnvoller sein.',
        ],
      },
      {
        heading: 'Unterlagen und Übergabe',
        paragraphs: [
          'Für die Inzahlungnahme brauchen Sie dieselben Unterlagen wie bei jedem Verkauf: Fahrzeugschein, Fahrzeugbrief, Ausweis und alle Schlüssel. Halten Sie im Vertrag den Zustand und bekannte Mängel fest.',
          'Klären Sie außerdem, wer das alte Auto abmeldet und ob sich der Preis ändern kann, wenn das neue Auto erst Monate später geliefert wird.',
        ],
      },
    ],
    checklist: {
      heading: 'So vergleichen Sie die Angebote',
      items: [
        { title: 'Neuwagenpreis ohne Altauto', text: 'Lassen Sie sich den Preis zuerst ohne Inzahlungnahme nennen.' },
        { title: 'Unabhängiges Angebot für das Altauto', text: 'Eine kostenlose Bewertung gibt Ihnen einen Vergleichswert.' },
        { title: 'Endsumme vergleichen', text: 'Zählen Sie nur, was Sie am Ende insgesamt bezahlen.' },
        { title: 'Prämienbedingungen', text: 'Lesen Sie die Voraussetzungen, bevor Sie die Prämie einrechnen.' },
        { title: 'Lieferzeit', text: 'Klären Sie, ob der Preis für Ihr altes Auto bis zur Übergabe gilt.' },
      ],
    },
    pitfalls: {
      heading: 'Typische Fehler bei der Inzahlungnahme',
      items: [
        { title: 'Nur auf den Ankaufspreis schauen', text: 'Ein hoher Preis für das alte Auto kann durch einen niedrigen Rabatt erkauft sein.' },
        { title: 'Das Altauto zu früh erwähnen', text: 'So kann der Händler beide Preise von Anfang an miteinander verrechnen.' },
        { title: 'Lange Lieferzeit nicht bedenken', text: 'Das alte Auto fährt weiter und verliert Wert. Klären Sie, wie das im Vertrag geregelt ist.' },
        { title: 'Mängel weglassen', text: 'Stellt der Händler sie bei der Übergabe fest, kann der vereinbarte Preis sinken.' },
      ],
    },
    faqs: [
      { q: 'Ist die Inzahlungnahme schlechter als der Privatverkauf?', a: 'Beim Preis oft ja, beim Aufwand nein. Entscheidend ist, wie viel Ihnen die Zeitersparnis wert ist und wie hoch die Differenz in Ihrem konkreten Fall ausfällt.' },
      { q: 'Muss ein Händler mein altes Auto in Zahlung nehmen?', a: 'Nein. Er ist dazu nicht verpflichtet und muss auch keinen bestimmten Preis zahlen.' },
      { q: 'Wer meldet das Auto bei der Inzahlungnahme ab?', a: 'In der Regel übernimmt das der Händler. Lassen Sie sich das im Vertrag bestätigen und den Nachweis geben.' },
      { q: 'Kann ich ein finanziertes Auto in Zahlung geben?', a: 'Ja, in der Regel. Die Restschuld wird mit dem Wert des Autos verrechnet. Klären Sie die Ablösesumme vorab mit Ihrer Bank.' },
      { q: 'Lohnt sich eine Inzahlungnahmeprämie?', a: 'Das kann sich lohnen, besonders bei älteren Autos. Vergleichen Sie aber immer die Endsumme mit einem Angebot ohne Prämie.' },
    ],
    relatedSlugs: ['auto-privat-oder-haendler-verkaufen', 'autoankauf-trotz-finanzierung', 'unterlagen-autoverkauf-checkliste', 'kilometerstand-scheckheft-vorbesitzer-preis'],
    coreLink: '/auto-bewerten',
  },
];
