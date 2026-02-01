import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufWiesbadenPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl lg:text-5xl font-black text-brand-dark mb-8 leading-tight tracking-tight">
            Autoankauf Wiesbaden – Ihr zuverlässiger Partner in der Kurstadt
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Sie möchten Ihr Auto in <strong>Wiesbaden</strong> verkaufen? Wir sind Ihr kompetenter Ansprechpartner für den <strong>Autoankauf Wiesbaden</strong> – von der Kurstadt bis Mainz-Kastel, vom Nerotal bis Biebrich. Egal ob gepflegter Gebrauchtwagen, Luxusfahrzeug oder Auto mit Motorschaden – bei uns erhalten Sie faire Preise und professionellen Service in der hessischen Landeshauptstadt.
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-3xl p-8 mb-12">
            <h2 className="text-xl font-black text-brand-dark mb-4">✓ Ihre Vorteile beim Autoankauf Wiesbaden:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Kostenlose Online-Bewertung in 120 Sekunden</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>KI-basierte Preisermittlung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Abholung in ganz Wiesbaden & Umgebung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Express-Auszahlung am selben Tag</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Kostenlose Zulassungsstelle-Abwicklung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Seriöse & rechtssichere Kaufabwicklung</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <section className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Autoankauf Wiesbaden – Lokaler Service in der Landeshauptstadt</h2>
            <p className="font-medium leading-relaxed">
              Wiesbaden, die hessische Landeshauptstadt und weltbekannte Kurstadt, ist mit rund 280.000 Einwohnern eine der wohlhabendsten Städte Deutschlands. Der <strong>Autoankauf Wiesbaden</strong> Markt zeichnet sich durch eine hohe Nachfrage nach Premiumfahrzeugen und gepflegten Gebrauchtwagen aus. Ob Sie in der Innenstadt, Biebrich, Dotzheim, Mainz-Kastel oder Erbenheim wohnen – unser Service ist überall verfügbar.
            </p>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 my-8">
              <h3 className="text-xl font-black text-brand-dark mb-4">Unser Autoankauf in Wiesbaden und Umgebung:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Wiesbaden Stadtteile:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Mitte & Rheingauviertel</li>
                    <li>• Biebrich & Amöneburg</li>
                    <li>• Dotzheim & Schierstein</li>
                    <li>• Mainz-Kastel & Mainz-Kostheim</li>
                    <li>• Erbenheim & Nordenstadt</li>
                    <li>• Sonnenberg & Rambach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Umland Wiesbaden:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Mainz & Mainz-Mombach</li>
                    <li>• Taunusstein & Bad Schwalbach</li>
                    <li>• Hochheim am Main</li>
                    <li>• Eltville am Rhein & Geisenheim</li>
                    <li>• Rüdesheim am Rhein</li>
                    <li>• Idstein & Niedernhausen</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">So läuft der Autoankauf Wiesbaden ab – Einfach & transparent</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">1</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Kostenlose Online-Bewertung</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Füllen Sie unser Online-Formular aus – Marke, Modell, Baujahr, Kilometerstand und Zustand. Unsere KI analysiert den Wiesbadener Markt und erstellt eine realistische Preiseinschätzung. Das dauert nur 2 Minuten und ist völlig unverbindlich.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">2</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Persönliche Besichtigung in Wiesbaden</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Wählen Sie Wunschtermin und -ort. Unser Experte kommt zu Ihnen nach Hause, an Ihre Arbeitsstelle oder zu einem Treffpunkt Ihrer Wahl in Wiesbaden. Die Fahrzeugbegutachtung dauert 15-20 Minuten. Anschließend erhalten Sie unser finales Kaufangebot.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">3</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Vertrag, Auszahlung & Abmeldung</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Bei Einigung unterzeichnen wir den notariell sicheren Kaufvertrag. Sie erhalten Ihr Geld per Überweisung (Express innerhalb von 2-4 Stunden) oder bar. Wir kümmern uns um die Abmeldung bei der Zulassungsstelle Wiesbaden. Fertig!
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Diese Fahrzeuge kaufen wir in Wiesbaden an</h2>
            <p className="font-medium leading-relaxed">
              Beim <strong>Autoankauf Wiesbaden</strong> sind wir auf alle Fahrzeugklassen und Marken spezialisiert:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors">
                <h3 className="text-lg font-black text-brand-dark mb-4">Marken & Modelle:</h3>
                <ul className="space-y-2 text-slate-600 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Premium-Marken (Mercedes, BMW, Audi, Porsche)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Volumen-Marken (VW, Opel, Ford, Renault)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Japanische Marken (Toyota, Honda, Mazda)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Französische Marken (Peugeot, Citroën)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>US-Modelle (Jeep, Ford Mustang, Chevrolet)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Elektro- und Hybridfahrzeuge (Tesla, BMW i, VW ID)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors">
                <h3 className="text-lg font-black text-brand-dark mb-4">Auch bei Schäden:</h3>
                <ul className="space-y-2 text-slate-600 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Motorschaden & Getriebeschaden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Unfallwagen (repariert oder unrepariert)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Fahrzeuge ohne TÜV oder HU</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Hagelschaden & Rostschäden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Alte Fahrzeuge mit hoher Laufleistung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Exportfahrzeuge & Liebhaberfahrzeuge</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Warum Autoankauf Wiesbaden mit uns?</h2>
            <p className="font-medium leading-relaxed">
              Wiesbaden ist nicht nur Kurstadt und Landeshauptstadt, sondern auch ein wichtiger Wirtschaftsstandort mit zahlreichen Versicherungen, Dienstleistern und Pendlern nach Frankfurt, Mainz und ins Rhein-Main-Gebiet. Diese Vielfalt spiegelt sich im Automarkt wider.
            </p>

            <p className="font-medium leading-relaxed mt-4">
              Unsere Erfahrung im <strong>Autoankauf Wiesbaden</strong> zeigt: Luxusfahrzeuge, Cabrios und SUVs sind besonders gefragt. Aber auch praktische Familienautos, Kleinwagen und Kombi-Modelle finden dankbare Abnehmer. Die Nähe zu Frankfurt sorgt für starke Nachfrage und faire Preise.
            </p>

            <div className="bg-orange-50 border-l-4 border-brand-orange p-6 rounded-r-2xl my-8">
              <p className="font-bold text-brand-dark mb-2">💡 Wiesbaden-Tipp:</p>
              <p className="text-slate-700 font-medium">
                Wiesbaden hat eine der höchsten Dichten an Premium-Fahrzeugen in Deutschland. Wenn Sie einen Mercedes, BMW oder Audi verkaufen möchten, sind Sie hier besonders gut aufgehoben – die Nachfrage ist enorm!
              </p>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Wiesbaden Stadtteile – Wo wir Ihr Auto abholen</h2>
            
            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Wiesbaden Mitte & Rheingauviertel</h3>
            <p className="font-medium leading-relaxed">
              Das Stadtzentrum mit Kurhaus, Casino, Theater und wilhelminischer Architektur. Hier wohnen viele Geschäftsleute und Kulturinteressierte. Unser <strong>Autoankauf Wiesbaden Mitte</strong> Service ist besonders bei Luxusfahrzeugen gefragt.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Biebrich & Schierstein am Rhein</h3>
            <p className="font-medium leading-relaxed">
              Die Rheinufer-Stadtteile mit dem barocken Schloss Biebrich und idyllischen Weinbergen. Hier verkaufen viele Familien ihre Zweitwagen oder Cabrios. Der <strong>Autoankauf Wiesbaden Biebrich</strong> und Schierstein Service ist ganzjährig stark nachgefragt.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Dotzheim & Sonnenberg</h3>
            <p className="font-medium leading-relaxed">
              Beliebte Wohnviertel im Westen mit guter Infrastruktur. Hier werden vor allem praktische Alltagsfahrzeuge gekauft – Kombis, Kleinwagen und kompakte SUVs sind besonders gefragt.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Mainz-Kastel & Mainz-Kostheim</h3>
            <p className="font-medium leading-relaxed">
              Die rechtsrheinischen Stadtteile mit direkter Anbindung nach Mainz. Viele Pendler verkaufen hier ihre Firmenwagen oder steigen auf öffentliche Verkehrsmittel um. Unser Service ist schnell und unkompliziert.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Autoankauf Wiesbaden: Fair, transparent, sicher</h2>
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 my-8">
              <h3 className="text-lg font-black text-brand-dark mb-6">Unsere Garantien für Sie:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center font-black">✓</div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Faire Preise</h4>
                    <p className="text-sm text-slate-600">KI-basierte Bewertung nach aktuellen Marktdaten</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center font-black">✓</div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Maximale Sicherheit</h4>
                    <p className="text-sm text-slate-600">Keine Betrüger, rechtssichere Verträge</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center font-black">✓</div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Express-Auszahlung</h4>
                    <p className="text-sm text-slate-600">Geld am selben Tag auf Ihrem Konto</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center font-black">✓</div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Keine Haftung</h4>
                    <p className="text-sm text-slate-600">Sie verkaufen "wie gesehen" ohne spätere Gewährleistung</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Häufige Fragen zum Autoankauf Wiesbaden</h2>
          </section>

          {/* FAQ Section */}
          <section className="space-y-4 mt-8">
            {[
              {
                q: "Wie schnell kann ich mein Auto in Wiesbaden verkaufen?",
                a: "Der gesamte Prozess dauert in der Regel 1-2 Tage. Die Online-Bewertung erhalten Sie in 2 Minuten, die Besichtigung vor Ort dauert 15-20 Minuten, und die Auszahlung erfolgt noch am selben Tag per Express-Überweisung oder bar."
              },
              {
                q: "Kommt ihr auch nach Biebrich, Dotzheim oder Mainz-Kastel?",
                a: "Ja, wir holen Fahrzeuge in allen Wiesbadener Stadtteilen ab – von der Innenstadt über Biebrich, Dotzheim, Schierstein bis Mainz-Kastel, Erbenheim und überall dazwischen. Auch im Umland (Mainz, Taunusstein, Hochheim, Eltville) sind wir aktiv."
              },
              {
                q: "Kauft ihr auch Luxusfahrzeuge und Sportwagen?",
                a: "Ja, absolut! Wiesbaden hat einen starken Markt für Premiumfahrzeuge. Wir kaufen Mercedes, BMW, Audi, Porsche, Tesla und alle anderen Luxusmarken zu fairen Preisen. Unsere Expertise im Premiumsegment ist langjährig erprobt."
              },
              {
                q: "Was ist, wenn mein Auto einen Motorschaden hat?",
                a: "Kein Problem! Wir kaufen auch Fahrzeuge mit Motor- oder Getriebeschaden, Unfallschäden oder ohne TÜV. Selbst nicht fahrbereite Autos haben einen Restwert. Fordern Sie einfach eine kostenlose Bewertung an."
              },
              {
                q: "Wie wird der Ankaufspreis ermittelt?",
                a: "Unsere KI analysiert tausende aktuelle Verkäufe im Rhein-Main-Gebiet und berücksichtigt Marke, Modell, Alter, Kilometerstand, Zustand, Ausstattung sowie lokale Nachfrage in Wiesbaden. So erhalten Sie einen marktgerechten Preis."
              },
              {
                q: "Welche Dokumente brauche ich für den Verkauf?",
                a: "Sie benötigen: Fahrzeugschein (Zulassungsbescheinigung Teil I), Fahrzeugbrief (Teil II), alle Schlüssel und Ihren Personalausweis. Scheckheft und TÜV-Berichte sind hilfreich, aber nicht zwingend."
              },
              {
                q: "Übernehmt ihr die Abmeldung?",
                a: "Ja, die Abmeldung bei der Zulassungsstelle Wiesbaden übernehmen wir komplett und kostenlos für Sie. Sie müssen sich um nichts kümmern."
              },
              {
                q: "Ist die Bewertung wirklich kostenlos?",
                a: "Ja, 100% kostenlos und unverbindlich. Sie gehen keinerlei Verpflichtungen ein. Erst wenn Sie mit unserem finalen Angebot nach der Besichtigung einverstanden sind, kommt ein Kauf zustande."
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
              Wir bieten unseren Autoankauf-Service auch in anderen Städten der Region an:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/autoankauf-frankfurt" className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-all">
                Autoankauf Frankfurt →
              </Link>
              <Link to="/autoankauf-mainz" className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-all">
                Autoankauf Mainz →
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-600 font-medium mb-4">
                Weitere hilfreiche Informationen finden Sie in unserem Ratgeber:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/auto-bewerten" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Auto Bewerten
                </Link>
                <Link to="/auto-verkaufen" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Auto Verkaufen Tipps
                </Link>
                <Link to="/ratgeber" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Verkaufs-Ratgeber
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="my-20 bg-gradient-to-br from-brand-dark via-slate-800 to-brand-dark rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-4xl font-black mb-6">Jetzt Auto in Wiesbaden verkaufen!</h2>
              <p className="text-slate-300 mb-12 max-w-2xl mx-auto font-semibold text-lg">
                Kostenlose Bewertung in 2 Minuten. Fair, transparent und unverbindlich.
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
              Der <strong>Autoankauf Wiesbaden</strong> mit Meinautoverkauf.de ist die unkomplizierte, sichere und faire Alternative zum Privatverkauf. Sie sparen Zeit, vermeiden Stress und erhalten einen marktgerechten Preis. Egal ob Innenstadt, Biebrich, Dotzheim oder Mainz-Kastel – wir kommen zu Ihnen!
            </p>
            <p>
              Starten Sie jetzt Ihre kostenlose Online-Bewertung und erleben Sie, wie einfach Autoverkauf in Wiesbaden sein kann!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AutoankaufWiesbadenPage;
