export interface FAQItem {
  q: string;
  a: string;
}

export const HOME_FAQS: FAQItem[] = [
  {
    q: "Wie kann ich mein Auto online verkaufen?",
    a: "Geben Sie die Fahrzeugdaten in unser Online-Bewertungstool ein. Sie erhalten sofort ein unverbindliches Angebot. Wenn Ihnen der Preis zusagt, vereinbaren Sie einen Abholtermin. Wir holen das Auto bei Ihnen ab, prüfen den Zustand und überweisen Ihnen das Geld direkt."
  },
  {
    q: "Wie schnell bekomme ich mein Geld?",
    a: "In der Regel ist das Geld innerhalb weniger Stunden nach Fahrzeugübergabe auf Ihrem Konto. Bei Übergabe am Vormittag oft noch am selben Tag."
  },
  {
    q: "Kauft ihr auch Autos mit Motorschaden?",
    a: "Ja, wir kaufen Fahrzeuge in jedem Zustand – auch mit Motorschaden, Unfallschaden oder ohne TÜV. Selbst nicht fahrbereite Autos haben noch einen Wert für uns."
  },
  {
    q: "Ist die Bewertung wirklich kostenlos und unverbindlich?",
    a: "Absolut! Die Online-Bewertung ist 100% kostenlos und verpflichtet Sie zu nichts. Sie können das Angebot annehmen oder ablehnen – ganz wie Sie möchten."
  },
  {
    q: "Was passiert, wenn das Auto bei der Abholung anders aussieht als beschrieben?",
    a: "Sollte der tatsächliche Zustand von Ihren Angaben abweichen, passen wir den Preis fair an. Sie entscheiden dann, ob Sie zum angepassten Preis verkaufen möchten oder nicht. Völlig ohne Druck."
  },
  {
    q: "Muss ich das Auto selbst abmelden?",
    a: "Nein, wir übernehmen die Abmeldung bei der Zulassungsstelle kostenlos für Sie. Sie müssen sich um nichts kümmern."
  },
  {
    q: "Welche Marken und Modelle kauft ihr an?",
    a: "Wir kaufen alle gängigen Marken: VW, Audi, BMW, Mercedes, Opel, Ford, Toyota, Renault, Peugeot, Skoda, Seat und viele mehr. Auch Premiummarken, Sportwagen und Oldtimer."
  },
  {
    q: "Ist der Service in meiner Stadt verfügbar?",
    a: "Wir sind deutschlandweit aktiv – von Großstädten wie Berlin, München, Hamburg, Köln, Frankfurt, Stuttgart bis zu kleineren Städten wie Wiesbaden, Mannheim, Karlsruhe, Nürnberg oder Dresden."
  },
  {
    q: "Was muss ich zur Fahrzeugübergabe mitbringen?",
    a: "Sie benötigen: Fahrzeugbrief (Zulassungsbescheinigung Teil II), Fahrzeugschein (Zulassungsbescheinigung Teil I), alle Fahrzeugschlüssel, sowie Ihren Personalausweis. Falls vorhanden: Serviceheft und TÜV-Berichte."
  },
  {
    q: "Kann ich mein Fahrzeug auch ohne Inserat verkaufen?",
    a: "Ja, genau dafür sind wir da! Sie müssen keine Inserate auf Portalen schalten, keine Fotos machen und keine Interessenten empfangen. Wir übernehmen den kompletten Verkaufsprozess für Sie."
  }
];

export const RATGEBER_FAQS: FAQItem[] = [...HOME_FAQS];

export const AUTO_BEWERTEN_FAQS: FAQItem[] = [
  {
    q: "Was ist mein Auto wert – wie genau ist die Online-Bewertung?",
    a: "Unsere KI-gestützte Bewertung liefert eine fundierte Einschätzung auf Basis vieler aktueller Transaktionen und relevanter Faktoren. Der tatsächliche Verkaufspreis kann je nach Ausstattung, Zustand und Nachfrage abweichen."
  },
  {
    q: "Warum weicht mein Online-Wert vom Händlerangebot ab?",
    a: "Der Händler-Ankaufspreis liegt meist unter dem Privatverkaufspreis. Ein Händler muss Kosten für Aufbereitung, Garantie, Standzeit und seine eigene Marge einplanen. Dafür erhalten Sie eine schnelle und bequeme Abwicklung."
  },
  {
    q: "Wie lange ist die Bewertung gültig?",
    a: "Der Gebrauchtwagenmarkt ist dynamisch. Unsere Bewertung spiegelt den aktuellen Marktwert wider und ist in der Regel 7 bis 14 Tage verbindlich. Danach empfehlen wir eine erneute Bewertung, um aktuelle Marktveränderungen zu berücksichtigen."
  },
  {
    q: "Kostet es etwas, mein Auto schätzen zu lassen?",
    a: "Nein, bei Meinautoverkauf.de ist die Wertermittlung ein reiner Service und bleibt kostenfrei. Es entstehen keine versteckten Kosten oder Verpflichtungen."
  },
  {
    q: "Werden Unfallschäden berücksichtigt?",
    a: "Ja, im Rahmen der detaillierten Zustandsbeschreibung können Sie Schäden, Vorschäden und Unfallhistorie angeben. Wir fließen diese fair in die Berechnung ein, sodass Sie einen realistischen Wert erhalten."
  },
  {
    q: "Kann ich auch Fahrzeuge mit Motorschaden bewerten lassen?",
    a: "Absolut. Auch Fahrzeuge mit Motorschaden, Getriebeschaden oder ohne TÜV haben einen Restwert. Unsere KI berücksichtigt den Zustand und ermittelt einen fairen Preis für Ihr Fahrzeug – auch für den Export oder als Teilespender."
  },
  {
    q: "Wie viel ist mein Auto wert, wenn es getunt oder umgebaut ist?",
    a: "Die KI ist auf Serienmodelle optimiert. Bei speziellen Umbauten, Tuning oder seltenen Fahrzeugen empfehlen wir nach der Online-Einschätzung ein persönliches Gespräch mit unseren Experten für eine individuelle Bewertung."
  },
  {
    q: "Muss ich mein Auto nach der Bewertung verkaufen?",
    a: "Nein, die Bewertung ist völlig unverbindlich. Sie können den Wert Ihres Autos ermitteln, ohne jegliche Verkaufsverpflichtung einzugehen. Nutzen Sie unseren Service einfach zur Information."
  }
];

export const AUTO_VERKAUFEN_FAQS: FAQItem[] = [
  {
    q: "Wie schnell kann ich mein Auto verkaufen?",
    a: "Bei Meinautoverkauf.de können Sie Ihr Auto innerhalb von 24-48 Stunden verkaufen. Nach der Online-Bewertung vereinbaren Sie einen Termin, das Fahrzeug wird geprüft, der Vertrag unterzeichnet und das Geld überwiesen – alles an einem Tag möglich."
  },
  {
    q: "Kann ich ein finanziertes Auto verkaufen?",
    a: "Ja, absolut! Wir lösen die Finanzierung direkt bei Ihrer Bank ab und zahlen Ihnen den Differenzbetrag aus. Wir kümmern uns um den gesamten Schriftverkehr mit der finanzierenden Bank."
  },
  {
    q: "Was passiert mit meiner Versicherung und Steuern?",
    a: "Wir melden Ihr Fahrzeug zeitnah nach dem Ankauf bei der Zulassungsstelle ab. Damit endet automatisch auch die Versicherungspflicht und die KFZ-Steuerpflicht. Sie sollten Ihre Versicherung trotzdem informieren."
  },
  {
    q: "Muss ich das Auto vor dem Verkauf reparieren lassen?",
    a: "Nein, in der Regel nicht. Wir kaufen Fahrzeuge in jedem Zustand – auch mit Motorschaden, Unfallschäden oder ohne TÜV. Größere Reparaturen vor dem Verkauf lohnen sich meist finanziell nicht für Sie."
  },
  {
    q: "Wie viel weniger bekomme ich beim Händler als beim Privatverkauf?",
    a: "Der Händler-Ankaufspreis liegt typischerweise 10-20% unter dem Privatverkaufspreis. Dafür sparen Sie Zeit und Aufwand, und die Abwicklung ist vertraglich klar geregelt."
  },
  {
    q: "Kann ich auch ein Auto mit Motorschaden verkaufen?",
    a: "Ja. Auch Fahrzeuge mit Motorschaden, Getriebeschaden oder anderen Defekten haben einen Restwert. Wir berücksichtigen den Zustand, Ersatzteile und Exportpotenzial in unserer Bewertung."
  },
  {
    q: "Ist der Export meines Autos möglich?",
    a: "Ja, wir haben ein internationales Händlernetzwerk. Wenn Ihr Fahrzeug für den Export geeignet ist (z.B. ältere Mercedes, robuste Geländewagen, Dieselfahrzeuge), kann der Export eine Option sein."
  },
  {
    q: "Welche Dokumente brauche ich zum Auto verkaufen?",
    a: "Sie benötigen: Fahrzeugschein, Fahrzeugbrief, TÜV-Bericht, alle Schlüssel, Scheckheft/Service-Nachweise, Ihren Personalausweis und Ihre Bankverbindung. Je vollständiger die Unterlagen, desto reibungsloser der Verkauf."
  },
  {
    q: "Haftet ich nach dem Verkauf noch für Mängel?",
    a: "Nein. Beim Verkauf an einen Händler (wie uns) verkaufen Sie das Fahrzeug in der Regel 'wie gesehen' ohne Gewährleistung. Es gibt keine späteren Reklamationen oder Haftungsansprüche."
  },
  {
    q: "Wie lange dauert die Fahrzeugprüfung vor Ort?",
    a: "Die Begutachtung und Vertragsunterzeichnung dauert in der Regel 45-60 Minuten. Unser Experte prüft den Zustand, vergleicht mit den Angaben und erstellt das finale Angebot."
  }
];

export const VORTEILE_FAQS: FAQItem[] = [
  {
    q: "Warum ist Ihr Autoankauf besser als der Privatverkauf?",
    a: "Beim Privatverkauf investieren Sie Wochen in Inserate, Besichtigungen und Verhandlungen – mit Haftungsrisiken und Betrugsgefahr. Bei uns verkaufen Sie Ihr Auto in 24-48 Stunden, erhalten sofort Geld, haben keine Haftung und sparen enorm viel Zeit und Nerven. Wir übernehmen alle Risiken und den gesamten Papierkram."
  },
  {
    q: "Ist die Hausabholung wirklich kostenlos?",
    a: "Ja, absolut. Innerhalb unseres Einzugsgebiets berechnen wir keinen Cent für die Abholung. Der Preis, den wir Ihnen anbieten, kommt ohne Abzüge bei Ihnen an. Keine Kilometer-Pauschalen, keine Logistikgebühren – komplett kostenfrei."
  },
  {
    q: "Wie schnell erhalte ich mein Geld?",
    a: "Die Auszahlung erfolgt sofort nach Vertragsunterzeichnung per Banküberweisung. In den meisten Fällen ist das Geld noch am selben Tag auf Ihrem Konto. Keine Wartezeiten, keine verzögerten Zahlungen."
  },
  {
    q: "Was passiert, wenn mein Auto noch finanziert ist?",
    a: "Kein Problem! Wir kontaktieren Ihre finanzierende Bank, begleichen die Restschuld direkt und zahlen Ihnen den Differenzbetrag aus. Dieser Service ist kostenlos und erspart Ihnen jegliche Kommunikation mit der Bank."
  },
  {
    q: "Muss ich das Auto vorher putzen oder reparieren?",
    a: "Ein sauberer, gepflegter Wagen macht immer einen besseren Eindruck und kann die Bewertung positiv beeinflussen. Größere Reparaturen vor dem Verkauf lohnen sich jedoch meist nicht finanziell. Wir kaufen Fahrzeuge in jedem Zustand – auch mit Mängeln."
  },
  {
    q: "Gibt es versteckte Gebühren oder Kosten?",
    a: "Nein, absolut nicht. Unser gesamtes Geschäftsmodell basiert auf Transparenz. Es gibt keine Servicepauschalen, Bearbeitungsgebühren, Logistikkosten oder sonstige versteckte Kosten. Der genannte Preis ist der Preis, den Sie erhalten."
  },
  {
    q: "Was passiert, wenn ich den Termin absagen muss?",
    a: "Kein Problem. Rufen Sie uns einfach kurz an oder nutzen Sie den Link in Ihrer Bestätigungsmail. Wir finden flexibel einen neuen Termin, der Ihnen besser passt. Es gibt keine Stornierungsgebühren oder Ähnliches."
  },
  {
    q: "Kaufen Sie auch Autos mit Motorschaden oder Unfallschäden?",
    a: "Ja, wir kaufen Fahrzeuge in jedem Zustand – ob Motorschaden, Getriebeschaden, Unfallschaden oder ohne TÜV. Auch defekte Autos haben einen Restwert."
  },
  {
    q: "Wie funktioniert die Abmeldung des Fahrzeugs?",
    a: "Wir übernehmen die komplette Abmeldung bei der Zulassungsstelle für Sie. Sie müssen sich um nichts kümmern. Nach der Abmeldung endet automatisch auch Ihre Versicherungs- und Steuerpflicht. Wir stellen Ihnen alle nötigen Unterlagen zur Verfügung."
  },
  {
    q: "Warum sollte ich mich für Meinautoverkauf.de entscheiden?",
    a: "Wir kombinieren die Vorteile eines schnellen Händlerankaufs mit fairer Preisermittlung. Sie erhalten einen marktgerechten Preis, eine schnelle Auszahlung, kostenlose Abholung und kompletten Service – alles aus einer Hand."
  }
];

export const FRANKFURT_FAQS: FAQItem[] = [
  {
    q: "Kaufen Sie auch Firmenwagen im Bankenviertel oder Westend an?",
    a: "Ja. Wir kaufen Firmen- und Dienstwagen in ganz Frankfurt an, auch direkt an Bürostandorten im Bankenviertel, Westend oder Europaviertel. Auf Wunsch mit flexiblen Abendterminen."
  },
  {
    q: "Ist eine Abholung am Flughafen Frankfurt möglich?",
    a: "Ja, wir organisieren auch Übergaben im Umfeld des Frankfurter Flughafens, wenn Sie beruflich viel reisen oder kurzfristig umziehen. Termin und Übergabepunkt stimmen wir individuell mit Ihnen ab."
  },
  {
    q: "Kaufen Sie Fahrzeuge mit Umweltzonen-Problemen oder ältere Diesel?",
    a: "Ja. Auch Diesel mit eingeschränkter Umweltzonen-Tauglichkeit können noch einen fairen Restwert haben. Wir bewerten transparent auf Basis Zustand, Nachfrage und Verwertungsoptionen."
  },
  {
    q: "Wie schnell ist die Auszahlung beim Autoankauf Frankfurt?",
    a: "Nach Fahrzeugprüfung und Vertragsabschluss erfolgt die Auszahlung in der Regel noch am selben Tag per Überweisung. Die genaue Dauer hängt von Banklaufzeiten und Uhrzeit ab."
  },
  {
    q: "Übernehmen Sie die Abmeldung bei der Zulassungsstelle Frankfurt?",
    a: "Ja. Wir übernehmen die Abmeldung für Sie, damit Sie keine zusätzlichen Behördentermine planen müssen."
  }
];

export const WIESBADEN_FAQS: FAQItem[] = [
  {
    q: "Bieten Sie Autoankauf auch in Mainz-Kastel und Mainz-Kostheim an?",
    a: "Ja. Unser Service umfasst auch Mainz-Kastel und Mainz-Kostheim sowie weitere Stadtteile auf beiden Rheinseiten."
  },
  {
    q: "Kaufen Sie auch Premiumfahrzeuge in Wiesbaden an?",
    a: "Ja. In Wiesbaden kaufen wir regelmäßig Premiumfahrzeuge wie Mercedes, BMW, Audi oder Porsche an und berücksichtigen bei der Bewertung Ausstattung, Pflegezustand und regionale Nachfrage."
  },
  {
    q: "Wie läuft die Besichtigung in Wiesbaden ab?",
    a: "Nach der Online-Bewertung vereinbaren wir einen Termin vor Ort. Die Besichtigung dauert meist 15 bis 20 Minuten. Danach erhalten Sie ein finales Angebot."
  },
  {
    q: "Was passiert mit Fahrzeugen ohne TÜV oder mit Motorschaden?",
    a: "Auch Fahrzeuge ohne gültige HU oder mit technischen Schäden kaufen wir an. Der Preis richtet sich nachvollziehbar nach Zustand, Reparaturbedarf und Marktwert."
  },
  {
    q: "Übernehmen Sie die Abmeldung in Wiesbaden?",
    a: "Ja. Wir kümmern uns um die Abmeldung, damit Sie keine zusätzlichen Wege zur Zulassungsstelle einplanen müssen."
  }
];

export const MAINZ_FAQS: FAQItem[] = [
  {
    q: "Holen Sie Fahrzeuge in allen Mainzer Stadtteilen ab?",
    a: "Ja. Wir holen Fahrzeuge in allen Mainzer Stadtteilen ab, inklusive Altstadt, Neustadt, Gonsenheim, Bretzenheim, Weisenau, Lerchenberg sowie im Umland."
  },
  {
    q: "Ist Autoankauf auch in Mainz-Kastel und Mainz-Kostheim möglich?",
    a: "Ja. Auch in Mainz-Kastel und Mainz-Kostheim bieten wir Abholung und Ankauf an."
  },
  {
    q: "Kaufen Sie auch Studentenautos oder Fahrzeuge mit hoher Laufleistung?",
    a: "Ja. Gerade in Mainz bewerten wir häufig Kleinwagen mit hoher Laufleistung fair, wenn Zustand und Historie nachvollziehbar sind."
  },
  {
    q: "Wie schnell läuft der Verkauf in Mainz ab?",
    a: "Von der Online-Bewertung bis zur Übergabe sind in vielen Fällen 1 bis 2 Tage möglich. Die genaue Dauer hängt von Terminverfügbarkeit und Fahrzeugprüfung ab."
  },
  {
    q: "Übernehmen Sie die Abmeldung bei der Zulassungsstelle Mainz-Bingen?",
    a: "Ja. Wir übernehmen die Abmeldung für Sie, damit der Verkauf für Sie möglichst unkompliziert bleibt."
  }
];
