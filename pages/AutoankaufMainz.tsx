import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufMainzPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl lg:text-5xl font-black text-brand-dark mb-8 leading-tight tracking-tight">
            Autoankauf Mainz – Ihr Partner in der Landeshauptstadt Rheinland-Pfalz
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Sie möchten Ihr Auto in <strong>Mainz</strong> verkaufen? Wir sind Ihr erfahrener Partner für den <strong>Autoankauf Mainz</strong> – von der Altstadt bis Gonsenheim, von Mombach bis Bretzenheim. Ob Gebrauchtwagen, Neuwagen, Unfallfahrzeug oder Auto mit Motorschaden – bei uns erhalten Sie faire Preise in der Gutenberg-Stadt am Rhein.
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-3xl p-8 mb-12">
            <h2 className="text-xl font-black text-brand-dark mb-4">✓ Darum Autoankauf Mainz mit uns:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Kostenlose Sofort-Bewertung online</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Marktgerechte Preise durch KI-Analyse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Abholung in ganz Mainz & Rheinhessen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Schnelle Auszahlung am selben Tag</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Kostenlose Abmeldung & Zulassungsstelle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>100% rechtssicher & seriös</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div id="content" className="max-w-4xl mx-auto">
          <section className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Autoankauf Mainz – Lokaler Service in der Gutenberg-Stadt</h2>
            <p className="font-medium leading-relaxed">
              Mainz, die Landeshauptstadt von Rheinland-Pfalz, ist mit über 220.000 Einwohnern eine lebendige Universitätsstadt und Medienmetropole (ZDF, SWR). Der <strong>Autoankauf Mainz</strong> Markt profitiert von der zentralen Lage im Rhein-Main-Gebiet, der Nähe zu Wiesbaden und Frankfurt sowie der starken Wirtschaft. Ob Sie in der Altstadt, Neustadt, Gonsenheim, Mombach oder Bretzenheim wohnen – unser Service ist überall verfügbar.
            </p>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 my-8">
              <h3 className="text-xl font-black text-brand-dark mb-4">Unser Autoankauf-Service in Mainz und Umgebung:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Mainz Stadtteile:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Altstadt & Neustadt</li>
                    <li>• Gonsenheim & Finthen</li>
                    <li>• Mombach & Hartenberg-Münchfeld</li>
                    <li>• Bretzenheim & Oberstadt</li>
                    <li>• Hechtsheim & Weisenau</li>
                    <li>• Lerchenberg & Drais</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Umland Mainz:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Wiesbaden & Wiesbaden-Kastel</li>
                    <li>• Ingelheim am Rhein</li>
                    <li>• Budenheim & Bodenheim</li>
                    <li>• Nieder-Olm & Essenheim</li>
                    <li>• Bingen am Rhein</li>
                    <li>• Alzey & Bad Kreuznach</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Autoankauf Mainz – So einfach geht's</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">1</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Online-Bewertung in 2 Minuten</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Geben Sie die Eckdaten Ihres Fahrzeugs ein: Hersteller, Modell, Baujahr, Laufleistung und allgemeiner Zustand. Unsere KI analysiert den Mainzer Markt und berechnet einen realistischen Ankaufspreis. Völlig kostenlos und unverbindlich.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">2</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Vor-Ort-Besichtigung in Mainz</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Vereinbaren Sie einen Wunschtermin. Unser Fahrzeugexperte kommt zu Ihnen nach Hause, an Ihren Arbeitsplatz oder zu einem beliebigen Ort in Mainz. Die Begutachtung dauert 15-20 Minuten. Danach erhalten Sie unser finales Kaufangebot.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">3</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Kaufvertrag, Zahlung & Abmeldung</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Bei Zustimmung unterzeichnen wir den rechtssicheren Kaufvertrag. Sie erhalten Ihr Geld per Express-Überweisung (meist innerhalb von 2-4 Stunden) oder bar. Wir übernehmen die Abmeldung bei der Zulassungsstelle Mainz-Bingen. Fertig!
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Diese Fahrzeuge kaufen wir in Mainz an</h2>
            <p className="font-medium leading-relaxed">
              Beim <strong>Autoankauf Mainz</strong> sind wir auf sämtliche Fahrzeugtypen, Marken und Zustände spezialisiert:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors">
                <h3 className="text-lg font-black text-brand-dark mb-4">Alle Marken:</h3>
                <ul className="space-y-2 text-slate-600 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Deutsche Premium-Marken (Mercedes, BMW, Audi, Porsche)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Volumen-Hersteller (VW, Opel, Ford, Skoda)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Französische Fahrzeuge (Renault, Peugeot, Citroën)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Asiatische Modelle (Toyota, Mazda, Hyundai, Kia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Italienische Marken (Fiat, Alfa Romeo, Lancia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>E-Autos & Hybride (Tesla, VW ID, BMW i, Hyundai Ioniq)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors">
                <h3 className="text-lg font-black text-brand-dark mb-4">Alle Zustände:</h3>
                <ul className="space-y-2 text-slate-600 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Gepflegte Gebrauchtwagen mit Scheckheft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Ältere PKW mit hoher Kilometerleistung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Unfallwagen (repariert oder unrepariert)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Fahrzeuge mit Motorschaden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Autos ohne gültigen TÜV/HU</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Export-Fahrzeuge & Liebhaberautos</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Autoankauf Mainz: Was macht uns besonders?</h2>
            <p className="font-medium leading-relaxed">
              Mainz liegt im Herzen des Rhein-Main-Gebiets und ist verkehrstechnisch perfekt angebunden – A60, A63, Hauptbahnhof, Rheinufer. Das macht die Stadt attraktiv für Pendler, Studenten und Medienschaffende. Der Automarkt ist entsprechend vielfältig.
            </p>

            <p className="font-medium leading-relaxed mt-4">
              Unsere Erfahrung im <strong>Autoankauf Mainz</strong> zeigt: Die Nachfrage nach zuverlässigen Familienautos, kompakten Stadtfahrzeugen und Premium-Limousinen ist hoch. Durch die Nähe zum Weinbaugebiet Rheinhessen sind auch Transporter und Nutzfahrzeuge gefragt. Wir kaufen alles!
            </p>

            <div className="bg-orange-50 border-l-4 border-brand-orange p-6 rounded-r-2xl my-8">
              <p className="font-bold text-brand-dark mb-2">💡 Mainz-Tipp:</p>
              <p className="text-slate-700 font-medium">
                Mainz ist eine Faschingshochburg und Medienstadt – viele Menschen ziehen hier hin oder weg. Das bedeutet: Hohe Fluktuation und ständige Nachfrage nach Gebrauchtwagen. Perfekte Bedingungen für einen schnellen und fairen Verkauf!
              </p>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Mainz Stadtteile – Wo wir Ihr Auto abholen</h2>
            
            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Mainz Altstadt & Neustadt</h3>
            <p className="font-medium leading-relaxed">
              Das historische Zentrum mit Dom, Gutenberg-Museum und Rheinuferpromenade. Hier wohnen viele Studenten und junge Berufstätige. Parkplätze sind rar – perfekt für den <strong>Autoankauf Mainz Altstadt</strong> Service. Viele verkaufen ihr Auto und nutzen ÖPNV.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Gonsenheim & Finthen</h3>
            <p className="font-medium leading-relaxed">
              Die westlichen Stadtteile mit hoher Wohnqualität und Familienfreundlichkeit. Hier werden häufig größere Fahrzeuge wie Kombis und SUVs verkauft. Unser Service ist schnell und unkompliziert – von der Bewertung bis zur Abholung.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Mombach & Hartenberg-Münchfeld</h3>
            <p className="font-medium leading-relaxed">
              Industriegebiet und Wohnviertel mit guter Verkehrsanbindung. Hier kaufen wir häufig Nutzfahrzeuge, Transporter und ältere PKW für den Export. Auch Fahrzeuge mit Defekten sind willkommen.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Bretzenheim & Lerchenberg</h3>
            <p className="font-medium leading-relaxed">
              Universitätsnähe und Medienviertel (ZDF). Hier verkaufen viele jüngere Menschen ihre Erst- oder Zweitwagen. Kleinwagen und Kompaktfahrzeuge sind besonders gefragt. Unser <strong>Autoankauf Mainz Bretzenheim</strong> Service ist bei Studenten beliebt.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Autoankauf Mainz vs. Privatverkauf – Der direkte Vergleich</h2>
            
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-black text-brand-dark">Aspekt</th>
                    <th className="text-left p-4 font-black text-brand-orange">Autoankauf Mainz</th>
                    <th className="text-left p-4 font-black text-slate-500">Privatverkauf</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Verkaufsdauer</td>
                    <td className="p-4 text-slate-600">✓ 1-2 Tage komplett</td>
                    <td className="p-4 text-slate-600">✗ 2-6 Wochen oder länger</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Ihr Aufwand</td>
                    <td className="p-4 text-slate-600">✓ Minimal (Online-Formular + Termin)</td>
                    <td className="p-4 text-slate-600">✗ Hoch (Anzeigen, Fotos, Besichtigungen, Verhandlungen)</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Sicherheit</td>
                    <td className="p-4 text-slate-600">✓ 100% sicher, keine Betrüger</td>
                    <td className="p-4 text-slate-600">✗ Betrugsrisiko (gefälschte Überweisungen, Diebstahl)</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Gewährleistung</td>
                    <td className="p-4 text-slate-600">✓ Keine – Händler übernimmt alles</td>
                    <td className="p-4 text-slate-600">✗ Haftungsrisiko bei Privatverkauf</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Abmeldung</td>
                    <td className="p-4 text-slate-600">✓ Kostenlos durch uns übernommen</td>
                    <td className="p-4 text-slate-600">✗ Selbst zur Zulassungsstelle</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Zahlung</td>
                    <td className="p-4 text-slate-600">✓ Am selben Tag (Express-Überweisung/Bar)</td>
                    <td className="p-4 text-slate-600">✗ Nach Käufersuche, Zahlungsrisiko</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Häufige Fragen zum Autoankauf Mainz</h2>
          </section>

          {/* FAQ Section */}
          <section className="space-y-4 mt-8">
            {[
              {
                q: "Wie lange dauert der Autoankauf in Mainz?",
                a: "Von der ersten Kontaktaufnahme bis zur Auszahlung vergehen in der Regel nur 1-2 Tage. Die Online-Bewertung dauert 2 Minuten, die Vor-Ort-Besichtigung 15-20 Minuten. Die Auszahlung erfolgt meist noch am selben Tag per Express-Überweisung."
              },
              {
                q: "Holt ihr auch in Gonsenheim, Bretzenheim oder Mombach ab?",
                a: "Ja, wir holen Fahrzeuge in allen Mainzer Stadtteilen ab – von der Altstadt über Neustadt, Gonsenheim, Finthen, Mombach, Bretzenheim bis Lerchenberg und überall dazwischen. Auch im Umland (Wiesbaden, Ingelheim, Budenheim, Bingen) sind wir aktiv."
              },
              {
                q: "Kauft ihr auch Autos mit Motorschaden oder Unfallschäden?",
                a: "Ja! Wir kaufen alle Fahrzeuge – egal ob Motorschaden, Getriebeschaden, Unfallschaden oder ohne TÜV. Selbst nicht fahrbereite Autos haben einen Restwert durch Ersatzteile oder Export. Fordern Sie eine kostenlose Bewertung an."
              },
              {
                q: "Wie wird der Preis ermittelt?",
                a: "Unsere KI-Bewertung analysiert tausende aktuelle Verkäufe im Rhein-Main-Gebiet und Rheinhessen. Faktoren wie Marke, Modell, Baujahr, Kilometerstand, Zustand, Ausstattung und lokale Nachfrage in Mainz fließen in die Preisberechnung ein."
              },
              {
                q: "Welche Dokumente brauche ich?",
                a: "Sie benötigen: Fahrzeugschein (Zulassungsbescheinigung Teil I), Fahrzeugbrief (Teil II), alle Fahrzeugschlüssel und Ihren Personalausweis. Scheckheft und TÜV-Berichte sind hilfreich, aber nicht zwingend erforderlich."
              },
              {
                q: "Übernehmt ihr die Abmeldung in Mainz?",
                a: "Ja, die Abmeldung bei der Zulassungsstelle Mainz-Bingen übernehmen wir komplett und kostenlos für Sie. Sie müssen sich um nichts kümmern – wir erledigen alles."
              },
              {
                q: "Wie bekomme ich mein Geld?",
                a: "Sie haben die Wahl zwischen Express-Banküberweisung (innerhalb von 2-4 Stunden) oder Barzahlung bei Abholung. Beide Varianten sind absolut sicher und werden vertraglich festgehalten."
              },
              {
                q: "Ist die Bewertung wirklich kostenlos?",
                a: "Ja, 100% kostenlos und unverbindlich! Die Online-Bewertung dauert nur 2 Minuten. Sie gehen keinerlei Verpflichtungen ein. Erst wenn Sie mit unserem finalen Angebot einverstanden sind, kommt ein Kaufvertrag zustande."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-200">
                <h3 className="text-base lg:text-lg font-black text-brand-dark mb-4">{faq.q}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </section>

          {/* Related Pages Section */}
          <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
            <h2 className="text-2xl font-black text-brand-dark mb-6 text-center">Weitere Standorte im Rhein-Main-Gebiet</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
              Wir bieten unseren professionellen Autoankauf-Service auch in weiteren Städten an:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/autoankauf-frankfurt" className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-all">
                Autoankauf Frankfurt →
              </Link>
              <Link to="/autoankauf-wiesbaden" className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-all">
                Autoankauf Wiesbaden →
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-600 font-medium mb-4">
                Mehr Informationen und Tipps finden Sie in unserem Ratgeber:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/auto-bewerten" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Auto Bewerten
                </Link>
                <Link to="/auto-verkaufen" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Auto Verkaufen
                </Link>
                <Link to="/vorteile" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Ihre Vorteile
                </Link>
                <Link to="/ratgeber" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Gebrauchtwagen Ratgeber
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="my-20 bg-gradient-to-br from-brand-dark via-slate-800 to-brand-dark rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-4xl font-black mb-6">Auto verkaufen in Mainz – Jetzt starten!</h2>
              <p className="text-slate-300 mb-12 max-w-2xl mx-auto font-semibold text-lg">
                Kostenlose Bewertung in 2 Minuten. Fair, transparent und absolut unverbindlich.
              </p>
              <button 
                onClick={onCtaClick}
                className="bg-brand-orange text-white px-12 py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
              >
                Jetzt kostenlos Auto bewerten
              </button>
            </div>
          </div>

          {/* Conclusion */}
          <section className="mt-12 text-slate-700 font-medium leading-relaxed space-y-4">
            <p>
              Der <strong>Autoankauf Mainz</strong> mit Meinautoverkauf.de ist die smarte, sichere und unkomplizierte Alternative zum Privatverkauf. Sie sparen Zeit, vermeiden Stress und erhalten einen fairen, marktgerechten Preis. Egal ob Altstadt, Gonsenheim, Bretzenheim oder Mombach – wir kommen zu Ihnen!
            </p>
            <p>
              Starten Sie jetzt Ihre kostenlose Online-Bewertung und erleben Sie, wie einfach und schnell Autoverkauf in Mainz sein kann. Ihre Zufriedenheit ist uns wichtig!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AutoankaufMainzPage;
