/**
 * Hand-written checklist and pitfall sections for the core guides. They replace the
 * generated blocks that used to repeat the guide's own text under broken headings.
 */

export interface GuideListItem {
  title: string;
  text: string;
}

export interface GuideListSection {
  heading: string;
  items: GuideListItem[];
}

export interface GuideExtras {
  checklist: GuideListSection;
  pitfalls: GuideListSection;
}

export const GUIDE_EXTRAS: Record<string, GuideExtras> = {
  'autoankauf-trotz-finanzierung': {
    checklist: {
      heading: 'Das klären Sie vorab mit Ihrer Bank',
      items: [
        { title: 'Ablösesumme schriftlich anfragen', text: 'Lassen Sie sich den Betrag mit Stichtag bestätigen. Er ändert sich mit jeder Rate.' },
        { title: 'Ablageort des Fahrzeugbriefs', text: 'Fragen Sie, ob die Bank den Brief verwahrt und wie schnell sie ihn nach der Ablöse freigibt.' },
        { title: 'Vorfälligkeitsentschädigung', text: 'Prüfen Sie im Kreditvertrag, ob für die vorzeitige Rückzahlung eine Entschädigung anfällt.' },
        { title: 'Restschuldversicherung', text: 'Haben Sie eine abgeschlossen, fragen Sie nach einer anteiligen Erstattung bei vorzeitiger Ablöse.' },
        { title: 'Differenz berechnen', text: 'Vergleichen Sie Ablösesumme und Preisangebot, bevor Sie einen Termin vereinbaren.' },
      ],
    },
    pitfalls: {
      heading: 'Typische Fehler bei finanzierten Autos',
      items: [
        { title: 'Übergabe vor geklärter Ablöse', text: 'Geben Sie das Auto erst ab, wenn feststeht, wie Restschuld und Brieffreigabe geregelt sind.' },
        { title: 'Nur die Monatsrate im Blick', text: 'Entscheidend ist die Ablösesumme, nicht die Rate. Gerade bei einer hohen Schlussrate kann sie den Fahrzeugwert übersteigen.' },
        { title: 'Differenz nicht eingeplant', text: 'Liegt das Angebot unter der Restschuld, müssen Sie die Lücke aus eigenen Mitteln schließen.' },
        { title: 'Leasing mit Finanzierung verwechselt', text: 'Ein Leasingauto gehört der Leasinggesellschaft. Ohne deren Zustimmung können Sie es nicht verkaufen.' },
      ],
    },
  },
  'auto-mit-motorschaden-verkaufen': {
    checklist: {
      heading: 'So bereiten Sie den Verkauf vor',
      items: [
        { title: 'Diagnose der Werkstatt', text: 'Ein schriftlicher Befund ersetzt Vermutungen und macht das Angebot belastbarer.' },
        { title: 'Kostenvoranschlag', text: 'Er zeigt, ob sich eine Reparatur lohnen könnte, und hilft beim Vergleich mit dem Verkaufspreis.' },
        { title: 'Fotos vom Gesamtzustand', text: 'Karosserie, Innenraum, Reifen und Motorraum zeigen, was am Fahrzeug noch intakt ist.' },
        { title: 'Papiere und Schlüssel', text: 'Fahrzeugschein, Fahrzeugbrief und alle Schlüssel sollten vollständig vorliegen.' },
        { title: 'Standort und Fahrbereitschaft', text: 'Klären Sie vor dem Termin, ob das Auto noch fährt. Falls nicht, rufen Sie uns an, damit wir die Übergabe besprechen können.' },
      ],
    },
    pitfalls: {
      heading: 'Typische Fehler bei der Preisfindung',
      items: [
        { title: 'Mit dem Preis vor dem Schaden rechnen', text: 'Maßgeblich ist der heutige Restwert, nicht der frühere Marktwert minus eine geschätzte Reparatur.' },
        { title: 'Den Schaden verharmlosen', text: 'Formulierungen wie "nur ein kleiner Defekt" führen beim Termin zu Preisanpassungen und bei Privatkäufern zu Streit.' },
        { title: 'Reparatur ohne Gesamtrechnung starten', text: 'Einmal begonnene Arbeiten kosten oft mehr als geplant, und weitere Schäden zeigen sich häufig erst danach.' },
        { title: 'Das Auto monatelang stehen lassen', text: 'Bis zur Abmeldung laufen Steuer und Versicherung weiter, während der Wert sinkt.' },
      ],
    },
  },
  'autoankauf-ohne-tuev': {
    checklist: {
      heading: 'Das prüfen Sie vor dem Verkauf ohne HU',
      items: [
        { title: 'HU-Termin', text: 'Das Fälligkeitsdatum steht im Fahrzeugschein und auf der Plakette am hinteren Kennzeichen.' },
        { title: 'Letzter HU-Bericht', text: 'Er zeigt, welche Mängel zuletzt festgestellt wurden und ob sie behoben sind.' },
        { title: 'Bekannte Mängel', text: 'Listen Sie auf, was Ihnen bekannt ist. Das macht das Angebot belastbarer.' },
        { title: 'Kostenvoranschlag', text: 'Lassen Sie schätzen, was für eine neue Plakette zu reparieren wäre.' },
        { title: 'Weg zur Übergabe', text: 'Klären Sie vorab, wie das Auto zum Termin kommt. Fahrten mit überzogener HU können ein Bußgeld nach sich ziehen.' },
      ],
    },
    pitfalls: {
      heading: 'Häufige Irrtümer beim Verkauf ohne TÜV',
      items: [
        { title: '"TÜV neu" zusagen', text: 'Versprechen Sie keine neue Plakette, solange die Prüfung nicht bestanden ist. Das kann als zugesicherte Eigenschaft gelten.' },
        { title: 'HU machen, ohne die Kosten zu kennen', text: 'Fällt das Auto durch, tragen Sie Prüfgebühr und Reparaturen, ohne dass der Mehrerlös gesichert ist.' },
        { title: 'Kurzzeitkennzeichen einplanen', text: 'Für ein Kurzzeitkennzeichen ist eine gültige HU nötig. Ohne sie bleibt oft nur ein Anhänger oder Transporter.' },
        { title: 'HU-Mängel verschweigen', text: 'Wer bekannte Mängel aus dem letzten Bericht nicht nennt, riskiert auch beim Haftungsausschluss Ansprüche.' },
      ],
    },
  },
  'unfallwagen-verkaufen': {
    checklist: {
      heading: 'Diese Nachweise stellen Sie zusammen',
      items: [
        { title: 'Art und Datum des Schadens', text: 'Halten Sie fest, was wann passiert ist und welche Bauteile betroffen waren.' },
        { title: 'Gutachten oder Kostenvoranschlag', text: 'Beides hilft, den Schaden einzuordnen, auch wenn nichts repariert wurde.' },
        { title: 'Reparaturrechnungen', text: 'Sie belegen, was fachgerecht instand gesetzt wurde und welche Teile verbaut sind.' },
        { title: 'Fotos vor und nach der Reparatur', text: 'Sie sind besonders hilfreich, wenn kein Gutachten vorliegt.' },
        { title: 'Airbags und Restmängel', text: 'Notieren Sie ausgelöste Airbags und alles, was noch nicht behoben ist.' },
      ],
    },
    pitfalls: {
      heading: 'Häufige Fehler beim Verkauf eines Unfallwagens',
      items: [
        { title: '"Unfallfrei" ohne Kenntnis schreiben', text: 'Kennen Sie die Vorgeschichte nicht vollständig, schreiben Sie "laut Vorbesitzer" oder "soweit bekannt" statt einer festen Zusage.' },
        { title: 'Reparierte Schäden weglassen', text: 'Auch fachgerecht reparierte Unfallschäden müssen Sie angeben. Nur reine Bagatellschäden sind ein Sonderfall.' },
        { title: 'Kostenvoranschlag als Preisbasis nehmen', text: 'Die Reparaturkosten sind nicht der Wertverlust. Der Restwert hängt auch von Modell und Gesamtzustand ab.' },
        { title: 'Vor dem Angebot reparieren', text: 'Eine Teilreparatur lohnt sich nur, wenn der Mehrpreis sie sicher übersteigt.' },
      ],
    },
  },
  'unterlagen-autoverkauf-checkliste': {
    checklist: {
      heading: 'Checkliste für Ihre Verkaufsmappe',
      items: [
        { title: 'Zulassungsbescheinigung Teil I', text: 'Der Fahrzeugschein. Er enthält Halter, technische Daten und den HU-Termin.' },
        { title: 'Zulassungsbescheinigung Teil II', text: 'Der Fahrzeugbrief. Ohne ihn ist kein sauberer Eigentumsübergang möglich.' },
        { title: 'Ausweis', text: 'Personalausweis oder Reisepass des Verkäufers, bei Vertretung zusätzlich eine Vollmacht.' },
        { title: 'Alle Schlüssel', text: 'Auch den Ersatzschlüssel. Fehlt einer, sagen Sie es vorab.' },
        { title: 'HU-Bericht und Scheckheft', text: 'Beides ist nicht zwingend, stützt aber den Preis.' },
        { title: 'Rechnungen', text: 'Belege zu Reparaturen, Reifen und Inspektionen zeigen, was zuletzt gemacht wurde.' },
      ],
    },
    pitfalls: {
      heading: 'Was den Termin am häufigsten aufhält',
      items: [
        { title: 'Fahrzeugbrief liegt bei der Bank', text: 'Klären Sie die Ablöse und Freigabe, bevor Sie einen Termin buchen.' },
        { title: 'Halter und Verkäufer sind verschieden', text: 'Dann brauchen Sie eine Vollmacht oder einen Nachweis, dass Sie verkaufen dürfen.' },
        { title: 'Fahrzeugbrief verloren', text: 'Ein Ersatz läuft über die Zulassungsstelle und dauert. Planen Sie dafür Zeit ein und nennen Sie es früh.' },
        { title: 'Erbfall ohne Nachweis', text: 'Bei geerbten Autos ist in der Regel ein Erbschein oder ein vergleichbarer Nachweis nötig.' },
      ],
    },
  },
  'auto-online-verkaufen-sofort-auszahlung': {
    checklist: {
      heading: 'So prüfen Sie den Zahlungsweg',
      items: [
        { title: 'Zahlungsart im Vertrag', text: 'Im Kaufvertrag sollten Betrag, Zahlungsart und Zeitpunkt eindeutig stehen.' },
        { title: 'Kontodaten kontrollieren', text: 'Prüfen Sie IBAN und Kontoinhaber, bevor Sie unterschreiben.' },
        { title: 'Zahlungseingang im eigenen Konto', text: 'Verlassen Sie sich beim Privatverkauf nur auf den Eingang in Ihrem Online-Banking.' },
        { title: 'Beleg aufbewahren', text: 'Vertrag und Zahlungsnachweis gehören zusammen in Ihre Unterlagen.' },
      ],
    },
    pitfalls: {
      heading: 'Was die Auszahlung verzögert',
      items: [
        { title: 'Screenshots als Beweis', text: 'Ein Bild einer Überweisung ist kein Zahlungseingang. Solche Belege lassen sich leicht fälschen.' },
        { title: 'Papiere vor der Zahlung übergeben', text: 'Beim Privatverkauf geben Sie Fahrzeugbrief und Schlüssel erst nach gesichertem Zahlungseingang heraus.' },
        { title: 'Banklaufzeiten nicht einplanen', text: 'Eine Überweisung kommt je nach Bank und Uhrzeit nicht sofort an.' },
        { title: 'Schäden erst beim Termin nennen', text: 'Dann muss das Angebot neu berechnet werden, und der Abschluss verschiebt sich.' },
      ],
    },
  },
  'online-autoankauf-ablauf-7-schritte': {
    checklist: {
      heading: 'Das halten Sie für die 7 Schritte bereit',
      items: [
        { title: 'Fahrzeugschein', text: 'Er enthält die meisten Daten, die Sie im Formular brauchen.' },
        { title: 'Aktueller Kilometerstand', text: 'Lesen Sie ihn am Tag der Bewertung ab.' },
        { title: 'Ehrliche Zustandsangabe', text: 'Schäden, Warnleuchten und bekannte Mängel gehören in die Beschreibung.' },
        { title: 'Fahrzeugbrief und Schlüssel', text: 'Prüfen Sie vor dem Termin, ob alles vollständig ist.' },
        { title: 'Bankverbindung', text: 'Sie brauchen sie für die Auszahlung am Tag der Übergabe.' },
      ],
    },
    pitfalls: {
      heading: 'Häufige Missverständnisse beim Online-Ankauf',
      items: [
        { title: 'Die Online-Bewertung als festen Preis sehen', text: 'Sie ist eine Einschätzung. Verbindlich wird der Preis erst nach der Fahrzeugprüfung.' },
        { title: 'Den Zustand zu gut angeben', text: 'Das führt beim Termin zu einer Preisanpassung, die sich vermeiden lässt.' },
        { title: 'Ohne Papiere zum Termin kommen', text: 'Ohne Fahrzeugbrief ist kein Abschluss möglich.' },
        { title: 'Die Versicherung vergessen', text: 'Informieren Sie Ihre Versicherung auch dann über den Verkauf, wenn der Ankäufer das Auto abmeldet.' },
      ],
    },
  },
  'autoexport-ankauf': {
    checklist: {
      heading: 'Das prüfen Sie vor dem Exportverkauf',
      items: [
        { title: 'Eigentum und Papiere', text: 'Fahrzeugschein, Fahrzeugbrief und Ausweis müssen vollständig zusammenpassen.' },
        { title: 'Käuferdaten', text: 'Lassen Sie sich Ausweis und Anschrift zeigen und tragen Sie beides in den Vertrag ein.' },
        { title: 'Abmeldung', text: 'Klären Sie, wer das Auto abmeldet, und lassen Sie sich den Nachweis geben.' },
        { title: 'Zahlungseingang', text: 'Übergeben Sie das Auto erst nach gesichertem Zahlungseingang.' },
      ],
    },
    pitfalls: {
      heading: 'Warnzeichen beim Verkauf für den Export',
      items: [
        { title: 'Angemeldet übergeben', text: 'Bleibt das Auto auf Sie zugelassen, können Bußgelder und Steuer weiter bei Ihnen landen.' },
        { title: 'Barzahlung gegen späteren Rest', text: 'Vereinbaren Sie keine Teilzahlung mit dem Versprechen, der Rest komme später.' },
        { title: 'Vermittler statt Käufer', text: 'Seien Sie vorsichtig, wenn jemand für einen Dritten kauft und sich nicht ausweisen will.' },
        { title: 'Wrack als Gebrauchtwagen', text: 'Das Umweltbundesamt weist darauf hin, dass der Verkauf eines Wracks als Gebrauchtwagen eine Ordnungswidrigkeit sein kann.' },
      ],
    },
  },
  'autoankauf-firmenwagen-gewerbe': {
    checklist: {
      heading: 'Das halten Sie für den gewerblichen Verkauf bereit',
      items: [
        { title: 'Papiere je Fahrzeug', text: 'Fahrzeugschein, Fahrzeugbrief und alle Schlüssel, am besten pro Fahrzeug sortiert.' },
        { title: 'Vertretungsberechtigung', text: 'Handelsregisterauszug oder Vollmacht der Person, die den Vertrag unterschreibt.' },
        { title: 'Rechnungsdaten', text: 'Firmierung, Anschrift und Umsatzsteuer-Identifikationsnummer für die Abrechnung.' },
        { title: 'Ablöseinformationen', text: 'Bei finanzierten Fahrzeugen die Ablösesumme mit Stichtag.' },
        { title: 'Fahrzeugliste', text: 'Bei mehreren Autos eine Liste mit Kennzeichen, Kilometerstand und bekannten Mängeln.' },
      ],
    },
    pitfalls: {
      heading: 'Worauf Unternehmen achten sollten',
      items: [
        { title: 'Leasingfahrzeuge', text: 'Sie gehören der Leasinggesellschaft und lassen sich ohne deren Zustimmung nicht verkaufen.' },
        { title: 'Umsatzsteuer', text: 'Der Verkauf aus dem Betriebsvermögen ist steuerlich anders zu behandeln als ein Privatverkauf. Klären Sie das mit Ihrer Steuerberatung.' },
        { title: 'Buchwert', text: 'Vergleichen Sie das Angebot auch mit dem Buchwert, damit keine Überraschung in der Bilanz entsteht.' },
        { title: 'Persönliche Daten im Fahrzeug', text: 'Entfernen Sie Tankkarten und löschen Sie gekoppelte Telefone und Navigationsziele.' },
      ],
    },
  },
  'kilometerstand-scheckheft-vorbesitzer-preis': {
    checklist: {
      heading: 'So belegen Sie die Fahrzeughistorie',
      items: [
        { title: 'Scheckheft oder digitaler Nachweis', text: 'Bei digitalen Serviceheften lassen Sie sich von der Werkstatt einen Auszug geben.' },
        { title: 'Rechnungen', text: 'Sie zeigen große Arbeiten wie Zahnriemen, Kupplung oder Bremsen.' },
        { title: 'HU-Berichte', text: 'Sie enthalten den Kilometerstand und machen die Laufleistung nachvollziehbar.' },
        { title: 'Vorbesitzer', text: 'Die Zahl steht im Fahrzeugbrief. Erklären Sie Wechsel, wenn Sie den Hintergrund kennen.' },
      ],
    },
    pitfalls: {
      heading: 'Häufige Fehleinschätzungen beim Preis',
      items: [
        { title: 'Nur auf den Kilometerstand schauen', text: 'Ein gepflegter Langstreckenwagen kann besser dastehen als ein wenig gefahrener Kurzstreckenwagen ohne Wartung.' },
        { title: 'Lücken im Scheckheft verschweigen', text: 'Sie fallen auf. Besser ist es, sie zu benennen und mit Rechnungen zu erklären.' },
        { title: 'Eigene Investitionen voll einrechnen', text: 'Neue Reifen oder Zubehör steigern den Preis selten um den bezahlten Betrag.' },
        { title: 'Inseratspreise mit Verkaufspreisen verwechseln', text: 'Angebotspreise auf Portalen sind nicht das, was am Ende tatsächlich gezahlt wird.' },
      ],
    },
  },
  'rechtssicherer-kaufvertrag-auto': {
    checklist: {
      heading: 'Das prüfen Sie vor der Unterschrift',
      items: [
        { title: 'Fahrzeug-Identnummer', text: 'Vergleichen Sie die FIN im Vertrag mit der Nummer im Fahrzeugschein.' },
        { title: 'Kilometerstand', text: 'Tragen Sie den abgelesenen Stand ein und schreiben Sie "laut Tacho", wenn Sie die Laufleistung nicht belegen können.' },
        { title: 'Mängel und Unfälle', text: 'Führen Sie alles auf, was Sie wissen, so konkret wie möglich.' },
        { title: 'Datum und Uhrzeit der Übergabe', text: 'Sie zeigen im Streitfall, ab wann der Käufer verantwortlich war.' },
        { title: 'Haftungsausschluss', text: 'Beim Privatverkauf sollte der Ausschluss der Sachmängelhaftung ausdrücklich im Vertrag stehen.' },
      ],
    },
    pitfalls: {
      heading: 'Häufige Fehler im Autokaufvertrag',
      items: [
        { title: '"Gekauft wie gesehen" als einziger Schutz', text: 'Diese Formel allein ist unklar und deckt nicht alle Mängel ab. Formulieren Sie den Ausschluss der Sachmängelhaftung ausdrücklich.' },
        { title: 'Eigenschaften zusichern', text: 'Sätze wie "unfallfrei" oder "technisch einwandfrei" können als Zusage gelten, für die Sie trotz Ausschluss haften.' },
        { title: 'Bekannte Mängel verschweigen', text: 'Bei arglistigem Verschweigen schützt Sie auch ein wirksamer Ausschluss nicht.' },
        { title: 'Abmeldung offen lassen', text: 'Regeln Sie, wer das Auto bis wann abmeldet, falls es angemeldet übergeben wird.' },
      ],
    },
  },
  'autoverkauf-betrug-kleinanzeigen-erkennen': {
    checklist: {
      heading: 'Sicherheitscheck vor der Übergabe',
      items: [
        { title: 'Identität', text: 'Lassen Sie sich den Ausweis zeigen und gleichen Sie den Namen mit dem Vertrag ab.' },
        { title: 'Zahlung im eigenen Konto', text: 'Akzeptieren Sie nur den Eingang im Online-Banking, keine Screenshots oder E-Mails.' },
        { title: 'Probefahrt begleiten', text: 'Fahren Sie mit, lassen Sie sich den Führerschein zeigen und behalten Sie die Papiere bei sich.' },
        { title: 'Vertrag vollständig ausfüllen', text: 'Alle Felder gehören ausgefüllt, bevor Sie Schlüssel und Papiere übergeben.' },
      ],
    },
    pitfalls: {
      heading: 'Typische Betrugsmaschen',
      items: [
        { title: 'Kauf ungesehen aus dem Ausland', text: 'Der angebliche Käufer zahlt angeblich zu viel oder verlangt Vorkasse für Spedition und Zoll.' },
        { title: 'Gefälschter Überweisungsbeleg', text: 'Ein Beleg per E-Mail oder als Foto beweist keinen Zahlungseingang.' },
        { title: 'Zahlung per Link', text: 'Geben Sie keine Bankdaten auf Seiten ein, die Ihnen ein Interessent per Nachricht schickt.' },
        { title: 'Fotos von Papieren', text: 'Schicken Sie vorab keine Bilder von Fahrzeugbrief oder Ausweis. Sie lassen sich missbrauchen.' },
      ],
    },
  },
  'auto-online-inserieren-tipps-bilder': {
    checklist: {
      heading: 'Foto- und Textliste fürs Inserat',
      items: [
        { title: 'Außenansichten', text: 'Vorne, hinten und beide Seiten bei Tageslicht, am besten vor ruhigem Hintergrund.' },
        { title: 'Innenraum', text: 'Fahrersitz, Rückbank, Cockpit und Kofferraum, jeweils aufgeräumt.' },
        { title: 'Tacho und Mängel', text: 'Fotografieren Sie den Kilometerstand und jeden bekannten Schaden.' },
        { title: 'Eckdaten im Text', text: 'Erstzulassung, Laufleistung, HU-Termin, Vorbesitzer, Motor und Getriebe.' },
        { title: 'Historie', text: 'Nennen Sie Wartung, letzte größere Arbeiten und bekannte Mängel.' },
      ],
    },
    pitfalls: {
      heading: 'Fehler, die Anfragen kosten',
      items: [
        { title: 'Preis ohne Marktvergleich', text: 'Vergleichen Sie Baujahr, Laufleistung und Ausstattung mit ähnlichen Inseraten, bevor Sie den Preis festlegen.' },
        { title: 'Kennzeichen und FIN öffentlich zeigen', text: 'Machen Sie das Kennzeichen unkenntlich und veröffentlichen Sie die FIN nicht.' },
        { title: 'Mängel weglassen', text: 'Bei der Besichtigung kommen sie heraus, und dann ist das Vertrauen weg.' },
        { title: 'Alle Anfragen gleich behandeln', text: 'Standardnachrichten ohne Bezug zum Fahrzeug sind oft Betrugsversuche.' },
      ],
    },
  },
  'autoabmeldung-nach-verkauf': {
    checklist: {
      heading: 'Das erledigen Sie nach dem Verkauf',
      items: [
        { title: 'Abmeldenachweis sichern', text: 'Bewahren Sie die Bestätigung zusammen mit dem Kaufvertrag auf.' },
        { title: 'Versicherung informieren', text: 'Melden Sie den Verkauf Ihrer Kfz-Versicherung mit Datum und Käuferdaten.' },
        { title: 'Zulassungsstelle', text: 'Wird das Auto angemeldet übergeben, melden Sie den Verkauf mit Name und Anschrift des Käufers.' },
        { title: 'Kfz-Steuer', text: 'Sie wird nach der Abmeldung automatisch abgerechnet. Prüfen Sie den Bescheid des Hauptzollamts.' },
        { title: 'Lastschriften prüfen', text: 'Prüfen Sie Daueraufträge und Einzugsermächtigungen, die am Fahrzeug hängen.' },
      ],
    },
    pitfalls: {
      heading: 'Häufige Fehler rund um die Abmeldung',
      items: [
        { title: 'Angemeldet übergeben ohne Absprache', text: 'Vereinbaren Sie schriftlich, bis wann der Käufer ummeldet, oder melden Sie selbst vor der Übergabe ab.' },
        { title: 'Nur den Kaufvertrag aufheben', text: 'Ohne Abmeldenachweis lässt sich schwerer belegen, dass Sie nicht mehr Halter sind.' },
        { title: 'Keine Uhrzeit im Vertrag', text: 'Datum und Uhrzeit der Übergabe helfen bei späteren Bußgeldbescheiden.' },
        { title: 'Kennzeichen vergessen', text: 'Bei der Abmeldung werden die Kennzeichen entstempelt. Nehmen Sie sie mit zur Zulassungsstelle.' },
      ],
    },
  },
};
