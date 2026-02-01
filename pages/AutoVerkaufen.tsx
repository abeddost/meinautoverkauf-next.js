
import React from 'react';
import FAQSection from '../components/FAQSection';

interface Props {
  onCtaClick: () => void;
}

const AutoVerkaufenPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl">
        {/* Hero Section with Background Image */}
        <section className="relative mb-16 max-w-5xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-6 lg:pr-10 pointer-events-none">
            <img
              src="/elements/auto-schnell-verkaufen.png"
              alt=""
              className="w-full max-w-[520px] opacity-[0.16]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="relative z-10 text-left">
            <h1 className="text-3xl lg:text-5xl font-black text-brand-dark mb-6 leading-tight tracking-tight text-center lg:text-left">
              Auto verkaufen online – Schnell, transparent und zum fairen Preis
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              Sie möchten Ihr <strong>Auto verkaufen</strong> und suchen nach einer stressfreien Lösung? Wir kaufen dein Auto – egal ob <strong>Gebrauchtwagen verkaufen</strong>, <strong>Auto mit Motorschaden verkaufen</strong> oder <strong>defektes Auto verkaufen</strong>. Bei Meinautoverkauf.de profitieren Sie von einem innovativen Service, der den gesamten Verkaufsprozess vereinfacht.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Ob Sie Ihr <strong>Auto schnell verkaufen</strong> möchten, ein <strong>Auto für Export verkaufen</strong> wollen oder einen marktgerechten Preis anstreben – wir bieten Ihnen eine faire KI-gestützte Bewertung und einen reibungslosen Ablauf.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 justify-start">
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <span className="text-green-600 font-black text-xl">✓</span>
                <span className="text-sm font-bold text-slate-700">Kostenlose Bewertung</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <span className="text-green-600 font-black text-xl">✓</span>
                <span className="text-sm font-bold text-slate-700">Sofortige Auszahlung</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <span className="text-green-600 font-black text-xl">✓</span>
                <span className="text-sm font-bold text-slate-700">Keine Haftung</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-brand-orange pl-6">
            Der Verkauf eines Autos kann eine stressige Angelegenheit sein – nervige Anrufe, unzuverlässige Käufer und endlose Preisverhandlungen. Wir zeigen Ihnen, wie Sie Ihr <strong>Auto verkaufen online</strong> können, ohne Kopfschmerzen und zum fairen Preis.
          </p>

          <section className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-12 mb-6">Auto verkaufen: Privatverkauf vs. Händlerankauf</h2>
            <p className="font-medium leading-relaxed">
              Wenn Sie Ihr <strong>Auto verkaufen</strong> möchten, stehen Ihnen grundsätzlich zwei Wege offen: der Privatverkauf oder der Verkauf an einen Händler. Beide Optionen haben Vor- und Nachteile, die Sie kennen sollten.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Privatverkauf: Mehr Geld, mehr Aufwand</h3>
            <p className="font-medium leading-relaxed">
              Der Privatverkauf verspricht theoretisch den höchsten Preis. Sie verkaufen direkt an den Endkunden ohne Zwischenhändler. Allerdings erfordert dieser Weg viel Eigeninitiative und Zeit:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Inserate erstellen:</strong> Professionelle Fotos machen, ansprechende Beschreibungen formulieren, auf mehreren Portalen inserieren.</li>
              <li><strong>Anfragen bearbeiten:</strong> Dutzende Anrufe und E-Mails von Interessenten, viele davon unseriös oder nur neugierig.</li>
              <li><strong>Besichtigungen koordinieren:</strong> Probefahrten mit Fremden, oft zu ungünstigen Zeiten.</li>
              <li><strong>Preisverhandlungen:</strong> Zähe Diskussionen, Tiefstapelei und Versuche, den Preis zu drücken.</li>
              <li><strong>Haftungsrisiken:</strong> Nach dem Verkauf können Gewährleistungsansprüche geltend gemacht werden.</li>
              <li><strong>Betrugsrisiko:</strong> Gefälschte Überweisungsbestätigungen, ungedeckte Schecks oder sogar Diebstahl sind keine Seltenheit.</li>
            </ul>
            <p className="font-medium leading-relaxed mt-4">
              Der Privatverkauf kann Wochen oder sogar Monate dauern – Zeit, in der Sie weiter Versicherung und Steuern zahlen müssen.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Händlerankauf: Schnell, sicher, stressfrei</h3>
            <p className="font-medium leading-relaxed">
              Der Händlerankauf, wie wir ihn bei Meinautoverkauf.de anbieten, ist auf Geschwindigkeit und Sicherheit optimiert. "Wir kaufen dein Auto" bedeutet bei uns:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Sofortiges Angebot:</strong> In 2 Minuten erhalten Sie eine verbindliche KI-gestützte Bewertung.</li>
              <li><strong>Keine Haftung:</strong> Sie verkaufen "wie gesehen" ohne spätere Reklamationen.</li>
              <li><strong>Sichere Zahlung:</strong> Geld per Banküberweisung, oft am selben Tag.</li>
              <li><strong>Kostenlose Abmeldung:</strong> Wir kümmern uns um alle Formalitäten.</li>
              <li><strong>Keine Wartezeit:</strong> Innerhalb von 24-48 Stunden ist alles erledigt.</li>
            </ul>
            <p className="font-medium leading-relaxed mt-4">
              Der Händlerpreis liegt zwar ca. 10-15% unter dem privaten Verkaufspreis, aber Sie sparen enorm viel Zeit, Nerven und Risiko.
            </p>

            {/* Document Checklist with Visual Element */}
            <div className="relative bg-gradient-to-br from-slate-50 to-white p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 my-12">
              {/* Decorative element */}
              <img 
                src="/elements/car-details.png" 
                alt="" 
                className="absolute top-4 right-4 w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 opacity-[0.12] pointer-events-none"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <h3 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Wichtige Dokumente zum Auto verkaufen</h3>
              <p className="font-medium text-slate-600 mb-6">
                Bevor Sie Ihr <strong>Auto verkaufen</strong>, sollten Sie diese Unterlagen bereithalten. Eine vollständige Dokumentation erleichtert den Verkauf und erhöht das Vertrauen potenzieller Käufer:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                {[
                  "Zulassungsbescheinigung Teil I (Fahrzeugschein)",
                  "Zulassungsbescheinigung Teil II (Fahrzeugbrief)",
                  "Letzter HU/AU-Bericht (TÜV-Bericht)",
                  "Alle verfügbaren Fahrzeugschlüssel (inkl. Ersatzschlüssel)",
                  "Scheckheft / Service-Nachweise",
                  "Rechnungen über Reparaturen, Reifen, Inspektionen",
                  "Bedienungsanleitung und Bordmappe",
                  "Persönlicher Ausweis oder Reisepass",
                  "Bankverbindung für die Auszahlung",
                  "COC-Papiere (bei Importen oder Export-Verkauf)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700 bg-white p-3 rounded-xl border border-slate-100">
                    <span className="text-brand-orange text-lg flex-shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
              <p className="font-medium text-slate-600 mt-6 text-sm">
                <strong>Tipp:</strong> Je vollständiger Ihre Unterlagen, desto schneller und reibungsloser läuft der Verkauf ab.
              </p>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Vorbereitung: So erhöhen Sie den Verkaufspreis</h2>
            <p className="font-medium leading-relaxed">
              Wenn Sie Ihr <strong>Auto schnell verkaufen</strong> möchten, spielt die Präsentation eine wichtige Rolle. Mit diesen Tipps maximieren Sie den Verkaufspreis:
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">1. Gründliche Reinigung</h3>
            <p className="font-medium leading-relaxed">
              Der erste Eindruck zählt. Eine professionelle Innen- und Außenreinigung kann den wahrgenommenen Wert um mehrere hundert Euro steigern. Entfernen Sie alle persönlichen Gegenstände, saugen Sie Teppiche und Sitze, reinigen Sie das Armaturenbrett und polieren Sie die Scheiben. Ein frischer Duft (aber kein penetranter Lufterfrischer) macht einen guten Eindruck.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">2. Kleine Reparaturen</h3>
            <p className="font-medium leading-relaxed">
              Kleinigkeiten wie defekte Glühbirnen, beschädigte Scheibenwischer oder blinde Scheinwerfer sollten Sie vor dem Verkauf beheben. Diese Reparaturen kosten wenig, signalisieren aber Pflege und Sorgfalt. Größere Reparaturen lohnen sich meist nicht – besprechen Sie dies vorab mit uns.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">3. Dokumentation vorbereiten</h3>
            <p className="font-medium leading-relaxed">
              Sammeln Sie alle Unterlagen: Scheckheft, TÜV-Berichte, Reparaturrechnungen. Eine lückenlose Service-Historie erhöht das Vertrauen und den Wert erheblich.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Defektes Auto verkaufen: Motorschaden, Unfallschaden & Co.</h2>
            <p className="font-medium leading-relaxed">
              Viele Autobesitzer glauben, dass ein <strong>defektes Auto verkaufen</strong> unmöglich oder nicht lohnenswert ist. Das stimmt nicht! Auch Fahrzeuge mit erheblichen Mängeln haben einen Restwert.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Auto mit Motorschaden verkaufen</h3>
            <p className="font-medium leading-relaxed">
              Ein Motorschaden bedeutet nicht das Ende. Wenn Sie Ihr <strong>Auto mit Motorschaden verkaufen</strong> möchten, gibt es mehrere Abnehmer: Händler, die Fahrzeuge für Ersatzteile nutzen, Exporteure oder Werkstätten, die Motoren austauschen. Bei uns erhalten Sie auch für ein <strong>motorschaden auto verkaufen</strong> ein faires Angebot – basierend auf:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Restwert der Teile:</strong> Karosserie, Innenraum, Elektronik, Reifen – all das hat noch Wert.</li>
              <li><strong>Exportpotenzial:</strong> In manchen Ländern werden defekte Fahrzeuge günstig repariert und weiterverkauft.</li>
              <li><strong>Recycling-Wert:</strong> Metalle, Katalysatoren und andere Komponenten können verwertet werden.</li>
            </ul>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Unfallfahrzeuge und Totalschäden</h3>
            <p className="font-medium leading-relaxed">
              Auch nach einem Unfall müssen Sie Ihr Fahrzeug nicht verschrotten. Unfallwagen mit reparierbaren Schäden oder sogar Totalschäden werden häufig an Händler verkauft, die diese professionell aufarbeiten oder für Ersatzteile nutzen.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Fahrzeuge ohne TÜV</h3>
            <p className="font-medium leading-relaxed">
              Ein abgelaufener TÜV mindert den Wert, macht einen Verkauf aber nicht unmöglich. Wir kaufen auch Fahrzeuge ohne gültige Hauptuntersuchung. Der Preis wird entsprechend angepasst, aber Sie sparen sich die Kosten und den Aufwand einer neuen Prüfung.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Auto für Export verkaufen</h2>
            <p className="font-medium leading-relaxed">
              Wenn Sie Ihr <strong>Auto für Export verkaufen</strong> möchten, können Sie oft bessere Preise erzielen als auf dem deutschen Markt. Bestimmte Fahrzeugtypen sind in anderen Ländern besonders gefragt:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Ältere Mercedes-Modelle:</strong> In Osteuropa, Afrika und dem Nahen Osten sehr beliebt.</li>
              <li><strong>Robuste Geländewagen:</strong> Toyota, Land Cruiser, Nissan Patrol – perfekt für schwieriges Terrain.</li>
              <li><strong>Kleinwagen und Kompaktfahrzeuge:</strong> VW Polo, Opel Corsa – ideal für Märkte mit engen Straßen.</li>
              <li><strong>Dieselfahrzeuge:</strong> Während sie in Deutschland an Wert verlieren, sind sie im Export oft noch gefragt.</li>
            </ul>
            <p className="font-medium leading-relaxed mt-4">
              Wir haben ein internationales Händlernetzwerk und wissen genau, welche Fahrzeuge wo gefragt sind. Wenn Ihr Auto exportfähig ist, erhalten Sie bei uns oft einen höheren Preis als bei einem lokalen Verkauf.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Seriöse Käufer erkennen (beim Privatverkauf)</h2>
            <p className="font-medium leading-relaxed">
              Falls Sie sich für den Privatverkauf entscheiden, sollten Sie wissen, wie Sie seriöse Käufer von Betrügern unterscheiden:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Echtes Interesse:</strong> Seriöse Käufer stellen detaillierte Fragen zum Fahrzeug, zur Historie und zum Zustand.</li>
              <li><strong>Persönliche Besichtigung:</strong> Vorsicht bei Käufern, die das Auto ungesehen kaufen wollen oder nur per Übersee-Transfer zahlen können.</li>
              <li><strong>Bargeld oder Banküberweisung:</strong> Akzeptieren Sie nur Bargeld bei Übergabe oder Überweisungen, die Sie VOR Übergabe verifiziert haben. Keine Schecks!</li>
              <li><strong>Ausweis prüfen:</strong> Lassen Sie sich den Personalausweis zeigen und notieren Sie die Daten für den Kaufvertrag.</li>
              <li><strong>Kaufvertrag:</strong> Nutzen Sie einen schriftlichen Kaufvertrag mit "gekauft wie gesehen" Klausel.</li>
            </ul>
            <p className="font-medium leading-relaxed mt-4">
              <strong>Achtung vor Betrugsmaschen:</strong> Gefälschte Überweisungsbestätigungen, angebliche "Freunde", die das Auto abholen, oder plötzliche "Notfälle" sind klassische Warnsignale.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Der Verkaufsprozess bei Meinautoverkauf.de</h2>
            <p className="font-medium leading-relaxed">
              Wenn Sie bei uns Ihr <strong>Auto verkaufen online</strong> möchten, durchlaufen Sie einen einfachen, transparenten Prozess in nur 3 Schritten:
            </p>

            {/* 3-Step Process with Visual Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-12 my-12">
              <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100">
                <div className="w-20 h-20 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto text-3xl font-black">1</div>
                <h4 className="font-black text-lg text-brand-dark">Online bewerten</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">Geben Sie Fahrzeugdaten ein und erhalten Sie sofort eine KI-gestützte Bewertung – kostenlos und unverbindlich.</p>
              </div>
              <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100">
                <div className="w-20 h-20 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto text-3xl font-black">2</div>
                <h4 className="font-black text-lg text-brand-dark">Termin vereinbaren</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">Wählen Sie einen passenden Termin für die Fahrzeugübergabe oder lassen Sie Ihr Auto bei sich abholen.</p>
              </div>
              <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100">
                <div className="w-20 h-20 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto text-3xl font-black">3</div>
                <h4 className="font-black text-lg text-brand-dark">Geld erhalten</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">Nach Prüfung und Vertragsunterzeichnung erfolgt die sofortige Überweisung auf Ihr Konto.</p>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Gebrauchtwagen verkaufen: Tipps für einen besseren Preis</h2>
            <p className="font-medium leading-relaxed">
              Wenn Sie Ihren <strong>Gebrauchtwagen verkaufen</strong> möchten, können Sie mit einigen Tricks den Preis optimieren:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Timing:</strong> Cabrios im Frühjahr, Geländewagen im Herbst – saisonale Nachfrage nutzen.</li>
              <li><strong>Markt beobachten:</strong> Wirtschaftliche Schwankungen beeinflussen Preise. In starken Wirtschaftsphasen sind Gebrauchtwagen teurer.</li>
              <li><strong>Vollständige Ausstattung:</strong> Zweiter Schlüsselsatz, Winterreifen, Originalteile – alles mitliefern.</li>
              <li><strong>Ehrlichkeit:</strong> Verschweigen Sie keine Mängel. Transparenz schafft Vertrauen und vermeidet spätere Probleme.</li>
            </ul>
          </section>
        </div>

        {/* CTA Section */}
        <div className="my-12 bg-gradient-to-br from-orange-100 via-white to-orange-50 rounded-[2.5rem] p-8 lg:p-10 text-slate-800 shadow-2xl relative overflow-hidden max-w-5xl mx-auto border border-orange-200/70">
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <p className="text-orange-600 text-sm font-bold uppercase tracking-widest mb-3">Kostenlos & unverbindlich</p>
              <h2 className="text-2xl lg:text-3xl font-black mb-3">Bereit, Ihr Auto zu verkaufen?</h2>
              <p className="text-slate-600 font-semibold text-base">
                Egal ob Sie Ihr <strong>Auto schnell verkaufen</strong>, ein <strong>Auto mit Motorschaden verkaufen</strong> oder einen marktgerechten Preis erzielen möchten – starten Sie jetzt Ihre kostenlose Bewertung!
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
              <button
                onClick={onCtaClick}
                className="w-full lg:w-auto bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] transform duration-200"
              >
                Jetzt kostenlos Auto bewerten & verkaufen
              </button>
              <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                <span className="bg-orange-100 px-3 py-1 rounded-full">2 Minuten</span>
                <span className="bg-orange-100 px-3 py-1 rounded-full">Sofort-Ergebnis</span>
                <span className="bg-orange-100 px-3 py-1 rounded-full">100% kostenlos</span>
              </div>
            </div>
          </div>
        </div>

        <FAQSection
          title="Häufig gestellte Fragen zum Auto verkaufen"
          sectionId="faq-verkaufen"
          className="mt-16"
          faqs={[
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
          ]}
        />

        <div className="max-w-4xl mx-auto">
          {/* Conclusion Section */}
          <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mb-6 text-center">Fazit: Auto verkaufen leicht gemacht</h2>
            <p className="text-slate-700 font-medium leading-relaxed mb-4">
              Ob Sie Ihr <strong>Auto verkaufen online</strong> möchten, einen <strong>Gebrauchtwagen verkaufen</strong>, ein <strong>defektes Auto verkaufen</strong> oder sogar ein <strong>Auto mit Motorschaden verkaufen</strong> wollen – bei Meinautoverkauf.de sind Sie richtig. Wir bieten Ihnen eine schnelle, transparente und faire Lösung.
            </p>
            <p className="text-slate-700 font-medium leading-relaxed mb-4">
              "Wir kaufen dein Auto" bedeutet bei uns: Transparente KI-gestützte Bewertung, keine versteckten Kosten und eine schnelle Auszahlung. Egal ob Sie Ihr <strong>Auto schnell verkaufen</strong> müssen oder ein <strong>Auto für Export verkaufen</strong> möchten – wir finden eine passende Lösung.
            </p>
            <p className="text-slate-700 font-medium leading-relaxed">
              Starten Sie jetzt Ihre kostenlose Bewertung und erfahren Sie, was Ihr Fahrzeug wirklich wert ist. In nur 2 Minuten zum fairen Angebot – unverbindlich und ohne Risiko.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AutoVerkaufenPage;
