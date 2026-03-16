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

export const RUESSELSHEIM_FAQS: FAQItem[] = [
  {
    q: "Kaufen Sie Opel-Fahrzeuge und Stellantis-Flottenwagen in Rüsselsheim an?",
    a: "Ja. In Rüsselsheim bewerten wir täglich Opel-, Peugeot- und Citroën-Fahrzeuge, häufig mit Flottenhistorie. Gerade bei gut gepflegten Firmenfahrzeugen erzielen Sie oft einen besseren Preis als erwartet."
  },
  {
    q: "Ist eine Fahrzeugübergabe in der Nähe des Frankfurter Flughafens möglich?",
    a: "Ja. Rüsselsheim liegt direkt an der A60 – der Frankfurter Flughafen ist in ca. 10 bis 15 Minuten erreichbar. Wir stimmen Übergabepunkt und Termin individuell ab, auch bei kurzfristiger Abreise."
  },
  {
    q: "Welche Zulassungsstelle ist für Rüsselsheim zuständig?",
    a: "Fahrzeuge mit Rüsselsheimer Kennzeichen (GG – Kreis Groß-Gerau) werden bei der Zulassungsbehörde des Landkreises Groß-Gerau abgemeldet. Wir übernehmen diesen Schritt vollständig für Sie."
  },
  {
    q: "Kaufen Sie auch ältere Dieselfahrzeuge oder Autos mit hoher Laufleistung?",
    a: "Ja. Hochkilometrige Dieselfahrzeuge und ältere Modelle haben oft noch einen soliden Restwert – besonders wenn sie für den Export geeignet sind. Wir bewerten transparent auf Basis aktueller Marktdaten."
  },
  {
    q: "Holen Sie Fahrzeuge aus allen Rüsselsheimer Stadtteilen ab?",
    a: "Ja. Wir holen in der Kernstadt sowie in Bauschheim, Königstädten, Haßloch, Crumstadt, Goddelau, Leeheim und Nauheim ab – ohne zusätzliche Anfahrtskosten."
  }
];

export const DARMSTADT_FAQS: FAQItem[] = [
  {
    q: "Kaufen Sie auch Fahrzeuge von Studierenden der TU Darmstadt?",
    a: "Ja. Gerade beim Studienabschluss oder einem Umzug ins Ausland ist ein schneller, unkomplizierter Verkauf ideal. Wir bewerten alle Fahrzeugtypen fair – auch Kleinwagen und ältere Erstfahrzeuge."
  },
  {
    q: "Können internationale Mitarbeitende (z. B. von ESA/ESOC oder Merck) ihr Fahrzeug verkaufen?",
    a: "Ja. Wir kaufen auch Fahrzeuge von internationalen Beschäftigten an, einschließlich Fahrzeuge mit ausländischer Zulassung oder kurzem deutschen Zulassungszeitraum. Sprechen Sie uns einfach an."
  },
  {
    q: "Welche Zulassungsstelle ist für Darmstadt zuständig?",
    a: "Fahrzeuge mit Darmstädter Kennzeichen (DA) werden beim Straßenverkehrsamt der Stadt Darmstadt abgemeldet. Wir übernehmen die Abmeldung vollständig für Sie – kein Behördengang nötig."
  },
  {
    q: "Holen Sie Fahrzeuge auch in Griesheim, Weiterstadt oder Pfungstadt ab?",
    a: "Ja. Unser Einzugsgebiet umfasst das gesamte Stadtgebiet Darmstadt sowie den Landkreis Darmstadt-Dieburg, inklusive Griesheim, Weiterstadt, Pfungstadt, Langen und Mörfelden-Walldorf."
  },
  {
    q: "Kaufen Sie auch zurückgegebene Firmenwagen oder Leasingfahrzeuge?",
    a: "Ja. Leasingrückläufer und Firmenfahrzeuge aus dem Merck- oder Technologiepark-Umfeld bewerten wir gerne. Voraussetzung ist ein klarer Eigentümernachweis – bei Fragen helfen wir Ihnen weiter."
  }
];

export const KOBLENZ_FAQS: FAQItem[] = [
  {
    q: "Kaufen Sie auch Dienstwagen und Behördenfahrzeuge in Koblenz an?",
    a: "Ja. In Koblenz bewerten wir regelmäßig Fahrzeuge aus Behörden-, Dienst- und Fuhrparkumfeld. Entscheidend sind Zustand, Laufleistung und nachvollziehbare Historie."
  },
  {
    q: "Holen Sie Fahrzeuge auch im Rhein-Mosel-Umland wie Lahnstein oder Neuwied ab?",
    a: "Ja. Unser Einzugsgebiet umfasst Koblenz sowie angrenzende Orte wie Lahnstein, Neuwied, Andernach, Bendorf und Mülheim-Kärlich. Die Abholung ist für Sie kostenlos."
  },
  {
    q: "Welche Zulassungsstelle ist für Fahrzeuge in Koblenz zuständig?",
    a: "Für Fahrzeuge mit Koblenzer Kennzeichen ist die Zulassungsbehörde der Stadt Koblenz zuständig. Wir übernehmen die Abmeldung vollständig für Sie."
  },
  {
    q: "Kaufen Sie auch ältere Diesel oder Fahrzeuge mit hoher Laufleistung?",
    a: "Ja. Gerade Pendler- und Langstreckenfahrzeuge mit hoher Laufleistung haben oft noch einen soliden Restwert. Wir bewerten transparent auf Basis aktueller Marktdaten."
  },
  {
    q: "Ist der Ankauf auch bei Exportfahrzeugen oder Autos ohne HU möglich?",
    a: "Ja. Auch Fahrzeuge für den Export sowie Autos ohne gültige HU können angekauft werden. Voraussetzung ist ein klarer Eigentumsnachweis und vollständige Unterlagen."
  }
];

export const OFFENBACH_FAQS: FAQItem[] = [
  {
    q: "Kaufen Sie typische Pendlerfahrzeuge aus Offenbach an?",
    a: "Ja. Offenbach ist ein starker Pendlerstandort. Wir bewerten regelmäßig Fahrzeuge mit höherer Laufleistung fair, wenn Wartung und Zustand nachvollziehbar sind."
  },
  {
    q: "Was ist der Unterschied zwischen Zulassungsstelle Stadt Offenbach und Kreis Offenbach?",
    a: "In der Region gibt es unterschiedliche Zuständigkeiten. Wir prüfen vor dem Ankauf, welche Behörde für Ihr Fahrzeug zuständig ist, und übernehmen die korrekte Abmeldung für Sie."
  },
  {
    q: "Ist eine Abholung in Kaiserlei, Hafen Offenbach oder im Gewerbegebiet möglich?",
    a: "Ja. Wir holen Fahrzeuge auch an Firmenstandorten und Gewerbeadressen ab, z. B. im Bereich Kaiserlei oder Hafen Offenbach. Termin und Übergabepunkt stimmen wir individuell ab."
  },
  {
    q: "Kaufen Sie auch Fahrzeuge von internationalen Eigentümern an?",
    a: "Ja. Wir kaufen auch Fahrzeuge von internationalen Eigentümern an. Bei ausländischen Dokumenten prüfen wir die Unterlagen vorab, damit die Abwicklung reibungslos bleibt."
  },
  {
    q: "Nehmen Sie Firmenwagen und Leasingrückläufer in Offenbach an?",
    a: "Ja. Firmenfahrzeuge und Leasingrückläufer bewerten wir regelmäßig. Wichtig sind ein eindeutiger Eigentümernachweis und vollständige Fahrzeugunterlagen."
  }
];

export const KOELN_FAQS: FAQItem[] = [
  {
    q: "Kaufen Sie Fahrzeuge in allen Kölner Stadtteilen an?",
    a: "Ja. Wir holen Fahrzeuge in allen Kölner Stadtteilen ab, unter anderem in Ehrenfeld, Nippes, Lindenthal, Porz, Mülheim, Kalk und Rodenkirchen."
  },
  {
    q: "Ist der Ankauf auch bei typischen Pendlerfahrzeugen mit hoher Laufleistung möglich?",
    a: "Ja. Gerade in Köln bewerten wir viele Pendlerfahrzeuge mit höherer Laufleistung. Entscheidend sind Zustand, Wartungshistorie und nachvollziehbare Unterlagen."
  },
  {
    q: "Welche Zulassungsstelle ist für Kölner Fahrzeuge zuständig?",
    a: "Für Fahrzeuge mit Kölner Kennzeichen ist die Zulassungsbehörde der Stadt Köln zuständig. Wir übernehmen die Abmeldung auf Wunsch vollständig für Sie."
  },
  {
    q: "Kaufen Sie auch Unfallwagen oder Fahrzeuge ohne TÜV in Köln an?",
    a: "Ja. Auch Fahrzeuge mit Unfallschäden, Motordefekten oder abgelaufener HU können angekauft werden. Die Bewertung erfolgt transparent nach Zustand und Verwertbarkeit."
  },
  {
    q: "Wie schnell erfolgt die Auszahlung beim Autoankauf Köln?",
    a: "Nach Vertragsabschluss wird die Auszahlung in der Regel umgehend per Überweisung veranlasst, häufig noch am selben Tag."
  }
];

export const HAMBURG_FAQS: FAQItem[] = [
  {
    q: "Holen Sie Fahrzeuge in ganz Hamburg und der Metropolregion ab?",
    a: "Ja. Wir holen in allen Hamburger Bezirken sowie in Teilen der Metropolregion ab, zum Beispiel in Norderstedt, Ahrensburg, Seevetal oder Pinneberg."
  },
  {
    q: "Ist Autoankauf auch bei hoher Laufleistung oder Pendlerprofil möglich?",
    a: "Ja. In Hamburg bewerten wir regelmäßig Fahrzeuge mit hoher Laufleistung fair, sofern Zustand, Historie und Unterlagen nachvollziehbar sind."
  },
  {
    q: "Welche Stelle ist für die Abmeldung in Hamburg zuständig?",
    a: "Für Hamburger Fahrzeuge ist der Landesbetrieb Verkehr (LBV) zuständig. Wir übernehmen die Abmeldung auf Wunsch für Sie."
  },
  {
    q: "Kaufen Sie auch Firmenwagen oder Leasingrückläufer in Hamburg an?",
    a: "Ja. Firmenfahrzeuge und Leasingrückläufer können angekauft werden. Wichtig sind ein klarer Eigentumsnachweis und vollständige Fahrzeugdokumente."
  },
  {
    q: "Ist eine schnelle Auszahlung in Hamburg möglich?",
    a: "Ja. Nach Vertragsabschluss wird die Auszahlung in der Regel direkt veranlasst, oft noch am Tag der Übergabe."
  }
];

export const LUDWIGSHAFEN_FAQS: FAQItem[] = [
  {
    q: "Kaufen Sie auch BASF-nahe Pendler- und Dienstfahrzeuge in Ludwigshafen an?",
    a: "Ja. Im Raum Ludwigshafen bewerten wir regelmäßig Fahrzeuge aus Schicht- und Pendlerbetrieb, auch mit höherer Laufleistung. Entscheidend sind Zustand, Wartung und nachvollziehbare Unterlagen."
  },
  {
    q: "Ist eine Abholung in Oggersheim, Friesenheim, Mundenheim oder Oppau möglich?",
    a: "Ja. Wir holen in allen Ludwigshafener Stadtteilen ab, darunter Oggersheim, Friesenheim, Mundenheim, Oppau, Gartenstadt und Rheingönheim. Die Terminabstimmung erfolgt flexibel."
  },
  {
    q: "Welche Zulassungsstelle ist für Fahrzeuge mit LU-Kennzeichen zuständig?",
    a: "Für Fahrzeuge mit LU-Kennzeichen ist die Zulassungsbehörde der Stadt Ludwigshafen zuständig. Auf Wunsch übernehmen wir die Abmeldung im Rahmen der Abwicklung."
  },
  {
    q: "Kaufen Sie Fahrzeuge, die überwiegend über A650 und B9 genutzt wurden?",
    a: "Ja. Gerade im Pendlerkorridor zwischen Ludwigshafen und Mannheim sind hohe Laufleistungen üblich. Wir berücksichtigen Kilometerstand und Wartungshistorie transparent bei der Bewertung."
  },
  {
    q: "Ist der Ankauf auch möglich, wenn das Auto häufig in Mannheim genutzt wird?",
    a: "Ja. Viele Eigentümer bewegen ihr Fahrzeug täglich zwischen Ludwigshafen und Mannheim. Die Nutzung über Stadtgrenzen ist kein Problem, solange Eigentumsnachweis und Fahrzeugunterlagen vorliegen."
  }
];

export const HANAU_FAQS: FAQItem[] = [
  {
    q: "Kaufen Sie Fahrzeuge aus dem Umfeld Hanau-Wolfgang und Heraeus an?",
    a: "Ja. In Hanau-Wolfgang und den angrenzenden Gewerbegebieten kaufen wir regelmäßig Dienst- und Alltagsfahrzeuge an, einschließlich Fahrzeugen mit dokumentierter Flottenhistorie."
  },
  {
    q: "Bieten Sie Abholung in Kesselstadt, Steinheim und Großauheim an?",
    a: "Ja. Unser Service deckt alle großen Hanauer Stadtteile ab, unter anderem Kesselstadt, Steinheim, Großauheim, Lamboy, Mittelbuchen und Wolfgang."
  },
  {
    q: "Welche Zulassungsstelle ist für Hanauer Fahrzeuge zuständig?",
    a: "Für viele Fahrzeuge im Raum Hanau ist die Zulassungsbehörde des Main-Kinzig-Kreises zuständig. Wir klären die konkrete Zuständigkeit im Einzelfall und übernehmen auf Wunsch die Abmeldung."
  },
  {
    q: "Kann die Übergabe auch in der Nähe von Hanau Hauptbahnhof stattfinden?",
    a: "Ja. Bei passender Terminlage sind Übergaben im Stadtgebiet und in Bahnhofsnähe möglich. Gerade für Pendler Richtung Frankfurt ist das oft die praktischste Lösung."
  },
  {
    q: "Kaufen Sie auch Pendlerfahrzeuge mit hoher Laufleistung aus dem A66/A45-Korridor?",
    a: "Ja. Fahrzeuge aus dem täglichen Verkehr rund um das Hanauer Kreuz bewerten wir regelmäßig. Ein höherer Kilometerstand ist kein Ausschlusskriterium, wenn Zustand und Historie stimmig sind."
  }
];

export const MANNHEIM_FAQS: FAQItem[] = [
  {
    q: "Holen Sie Fahrzeuge in allen Mannheimer Stadtteilen ab?",
    a: "Ja. Wir holen in der gesamten Quadratestadt ab – inklusive Neckarstadt-Ost, Neckarstadt-West, Lindenhof, Rheinau, Sandhofen, Käfertal, Vogelstang und Innenstadt. Keine Anfahrtskosten."
  },
  {
    q: "Kaufen Sie auch Fahrzeuge aus dem Raum Ludwigshafen und Rhein-Neckar-Kreis?",
    a: "Ja. Unser Einzugsgebiet umfasst Mannheim und die gesamte Metropolregion Rhein-Neckar – inklusive Ludwigshafen, Viernheim, Weinheim, Schwetzingen, Hockenheim, Eppelheim und Walldorf."
  },
  {
    q: "Welche Zulassungsstelle ist für Mannheimer Fahrzeuge zuständig?",
    a: "Mannheimer Fahrzeuge (Kennzeichen MA) werden beim Straßenverkehrsamt der Stadt Mannheim abgemeldet. Wir übernehmen die Abmeldung vollständig für Sie – kein eigener Behördengang nötig."
  },
  {
    q: "Kaufen Sie auch hochkilometrige Pendlerfahrzeuge an?",
    a: "Ja. Mannheim ist ein starker Pendlerstandort. Gut gewartete Pendlerfahrzeuge mit hoher Laufleistung haben oft noch einen soliden Marktwert – besonders bei nachvollziehbarer Servicehistorie. Wir bewerten transparent."
  },
  {
    q: "Ist ein Ankauf auch bei Fahrzeugen mit rheinland-pfälzischem Kennzeichen möglich?",
    a: "Ja. Da Mannheim direkt an der Grenze zu Rheinland-Pfalz liegt, kaufen wir regelmäßig Fahrzeuge mit LU-, NW- oder FT-Kennzeichen an. Entscheidend ist der Wohnsitz des Eigentümers, nicht das Kennzeichen."
  }
];

export const HEIDELBERG_FAQS: FAQItem[] = [
  {
    q: "Kaufen Sie auch Fahrzeuge von Studierenden der Universität Heidelberg?",
    a: "Ja. Gerade beim Studienabschluss, Umzug oder Auslandsaufenthalt ist ein schneller Verkauf ideal. Wir bewerten alle Fahrzeugtypen fair – auch ältere Erstfahrzeuge mit hoher Laufleistung."
  },
  {
    q: "Können internationale Mitarbeitende (z. B. von DKFZ, EMBL oder SAP) ihr Fahrzeug verkaufen?",
    a: "Ja. Wir kaufen Fahrzeuge von internationalen Beschäftigten an – einschließlich Fahrzeuge mit ausländischer Zulassung oder kurzem deutschen Zulassungszeitraum. Sprechen Sie uns gerne an."
  },
  {
    q: "Welche Zulassungsstelle ist für Heidelberg zuständig?",
    a: "Heidelberger Fahrzeuge (Kennzeichen HD) werden beim Straßenverkehrsamt der Stadt Heidelberg abgemeldet. Wir übernehmen die Abmeldung vollständig für Sie."
  },
  {
    q: "Holen Sie Fahrzeuge auch aus Leimen, Wiesloch, Walldorf oder Schwetzingen ab?",
    a: "Ja. Unser Einzugsgebiet umfasst das gesamte Stadtgebiet Heidelberg sowie den Rhein-Neckar-Kreis, inklusive Leimen, Wiesloch, Walldorf, Schwetzingen, Dossenheim, Eppelheim und Sandhausen."
  },
  {
    q: "Kaufen Sie auch Leasingfahrzeuge oder Dienstwagen aus dem SAP-Umfeld an?",
    a: "Ja. Leasingrückläufer und Firmenfahrzeuge aus dem SAP-Campus Walldorf oder dem Technologiepark Heidelberg bewerten wir gerne. Voraussetzung ist ein klarer Eigentümernachweis."
  }
];

export const WORMS_FAQS: FAQItem[] = [
  {
    q: "Kaufen Sie Fahrzeuge aus allen Wormser Stadtteilen ab – auch aus Herrnsheim oder Pfeddersheim?",
    a: "Ja. Wir holen in der Innenstadt, in Hochheim, Pfeddersheim, Herrnsheim, Abenheim, Horchheim und Rheindürkheim ab – ohne zusätzliche Anfahrtskosten. Einfach online bewerten und Termin wählen."
  },
  {
    q: "Welche Zulassungsstelle ist für Worms zuständig und übernehmen Sie die Abmeldung?",
    a: "Wormser Fahrzeuge tragen das Kennzeichen WO und werden bei der Zulassungsstelle der Stadt Worms abgemeldet. Wir übernehmen diesen Behördengang vollständig für Sie – kein zusätzlicher Aufwand nötig."
  },
  {
    q: "Bieten Sie auch einen fairen Preis für ältere Weinbaufahrzeuge oder gewerblich genutzte Transporter?",
    a: "Ja. In der Wormser Weinregion sind Transporter, Kleintransporter und ältere Nutzfahrzeuge weit verbreitet. Wir bewerten alle Fahrzeugtypen transparent – auch mit hoher Laufleistung oder gewerblicher Nutzungshistorie."
  },
  {
    q: "Ist ein Ankauf auch für Pendler zwischen Worms und Mannheim oder Mainz möglich?",
    a: "Ja. Worms liegt zentral an der A61 zwischen Mannheim (ca. 30 Minuten) und Mainz (ca. 40 Minuten). Wir bieten flexible Übergabetermine – auch abends oder am Wochenende – und holen Ihr Fahrzeug bei Bedarf direkt ab."
  },
  {
    q: "Können BASF-Mitarbeitende oder Beschäftigte aus dem Industriepark Worms ihr Fahrzeug schnell verkaufen?",
    a: "Ja. Wir sind auf schnelle, unkomplizierte Abwicklungen spezialisiert – ideal für Beschäftigte mit engem Zeitplan. Online-Bewertung, verbindliches Angebot und Auszahlung bei Übergabe – alles an einem Termin."
  }
];

export const KAISERSLAUTERN_FAQS: FAQItem[] = [
  {
    q: "Kaufen Sie Fahrzeuge von Studierenden oder Beschäftigten der RPTU Kaiserslautern-Landau?",
    a: "Ja. Gerade beim Studienabschluss, einem Umzug oder dem Beginn des Berufslebens ist ein schneller Fahrzeugverkauf ideal. Wir bewerten alle Fahrzeugtypen fair und unkompliziert – auch kompakte Erstfahrzeuge."
  },
  {
    q: "Kaufen Sie auch Fahrzeuge von US-Militärangehörigen aus der Region Ramstein-Kaiserslautern?",
    a: "Ja. Wir kaufen regelmäßig Fahrzeuge von internationalen Verkäufern an, einschließlich amerikanischer oder importierter Modelle. Entscheidend ist ein klarer Eigentumsnachweis – bei Fragen helfen wir Ihnen weiter."
  },
  {
    q: "Welche Zulassungsstelle ist für Kaiserslautern zuständig und übernehmen Sie die Abmeldung?",
    a: "Fahrzeuge mit KL-Kennzeichen werden bei der Zulassungsstelle der Stadt Kaiserslautern abgemeldet. Wir übernehmen diesen Schritt vollständig – kein Behördengang, kein zusätzlicher Aufwand für Sie."
  },
  {
    q: "Holen Sie Fahrzeuge auch aus Siegelbach, Erfenbach, Morlautern oder Einsiedlerhof ab?",
    a: "Ja. Unser Einzugsgebiet umfasst das gesamte Stadtgebiet Kaiserslautern sowie umliegende Ortschaften wie Siegelbach, Erfenbach, Morlautern, Einsiedlerhof, Otterbach und Enkenbach-Alsenborn – ohne zusätzliche Kosten."
  },
  {
    q: "Ist ein Verkauf auch für Pendler auf der A6 oder A63 Richtung Mannheim oder Saarbrücken möglich?",
    a: "Ja. Kaiserslautern liegt direkt an der A6 (Richtung Mannheim und Saarbrücken) und der A63 (Richtung Mainz). Wir bieten flexible Übergabetermine und holen Ihr Fahrzeug auch auf dem Weg zur Arbeit oder nach Feierabend ab."
  }
];
