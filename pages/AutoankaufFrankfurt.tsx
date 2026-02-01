import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufFrankfurtPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl lg:text-5xl font-black text-brand-dark mb-8 leading-tight tracking-tight">
            Autoankauf Frankfurt – Schnell, sicher & zum fairen Preis
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Sie möchten Ihr Auto in <strong>Frankfurt am Main</strong> verkaufen? Wir sind Ihr zuverlässiger Partner für den <strong>Autoankauf Frankfurt</strong> – egal ob Neuwagen, Gebrauchtwagen, Unfallwagen oder Fahrzeuge mit Motorschaden. Mit unserer kostenlosen Online-Bewertung erhalten Sie in wenigen Minuten einen fairen Preis basierend auf aktuellen Marktdaten der Region Frankfurt.
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-3xl p-8 mb-12">
            <h2 className="text-xl font-black text-brand-dark mb-4">✓ Warum Autoankauf Frankfurt mit uns?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Kostenlose Bewertung in 2 Minuten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Faire Preise durch KI-Bewertung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Abholung in ganz Frankfurt & Umgebung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Auszahlung in wenigen Stunden</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Kostenlose Abmeldung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Rechtssichere Abwicklung</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <section className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Autoankauf Frankfurt – Ihr lokaler Experte für Gebrauchtwagenankauf</h2>
            <p className="font-medium leading-relaxed">
              Frankfurt am Main ist das wirtschaftliche Herz Deutschlands und eine der automobilfreundlichsten Städte. Mit über 750.000 Einwohnern und einem der höchsten Pro-Kopf-Einkommen in Deutschland ist der <strong>Autoankauf Frankfurt</strong> Markt besonders dynamisch. Ob Sie in Sachsenhausen, Bockenheim, Bornheim, Nordend, Westend oder einem anderen Stadtteil wohnen – wir kommen zu Ihnen.
            </p>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 my-8">
              <h3 className="text-xl font-black text-brand-dark mb-4">Unser Service in Frankfurt und Umgebung:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Frankfurt Stadtteile:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Sachsenhausen & Sachsenhausen-Nord</li>
                    <li>• Bockenheim & Westend</li>
                    <li>• Nordend & Bornheim</li>
                    <li>• Höchst & Rödelheim</li>
                    <li>• Niederrad & Oberrad</li>
                    <li>• Bergen-Enkheim & Fechenheim</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Umland Frankfurt:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Offenbach am Main</li>
                    <li>• Bad Homburg v.d. Höhe</li>
                    <li>• Neu-Isenburg & Dreieich</li>
                    <li>• Eschborn & Sulzbach</li>
                    <li>• Kelkheim & Hofheim am Taunus</li>
                    <li>• Maintal & Hanau</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">So funktioniert der Autoankauf Frankfurt – In 3 einfachen Schritten</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">1</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Online-Bewertung in 2 Minuten</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Geben Sie die wichtigsten Daten Ihres Fahrzeugs ein: Marke, Modell, Baujahr, Kilometerstand und Zustand. Unsere KI-gestützte Bewertung analysiert aktuelle Verkaufsdaten speziell für den Frankfurter Markt und erstellt ein individuelles Angebot.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">2</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Fahrzeugbesichtigung vor Ort in Frankfurt</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Wählen Sie einen Termin, der Ihnen passt. Unser Experte kommt zu Ihnen nach Hause oder an Ihren Arbeitsplatz in Frankfurt. Die Besichtigung dauert nur 15-20 Minuten. Wir prüfen den Zustand, die Ausstattung und erstellen ein finales Angebot.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">3</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Geld erhalten & entspannt zurücklehnen</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Bei Einigung unterzeichnen wir den Kaufvertrag, Sie erhalten Ihr Geld per Banküberweisung (innerhalb weniger Stunden) oder bar, und wir kümmern uns um die Abmeldung. Fertig!
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Welche Fahrzeuge kaufen wir in Frankfurt an?</h2>
            <p className="font-medium leading-relaxed">
              Beim <strong>Autoankauf Frankfurt</strong> kaufen wir alle Fahrzeugtypen und Marken – vom kleinen Stadtauto bis zur Luxuslimousine:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors">
                <h3 className="text-lg font-black text-brand-dark mb-4">Fahrzeugtypen:</h3>
                <ul className="space-y-2 text-slate-600 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>PKW aller Marken (Mercedes, BMW, VW, Audi, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>SUVs und Geländewagen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Kleinwagen und Kompaktwagen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Limousinen und Kombis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Sportwagen und Cabrios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Elektrofahrzeuge und Hybride</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors">
                <h3 className="text-lg font-black text-brand-dark mb-4">Fahrzeugzustand:</h3>
                <ul className="space-y-2 text-slate-600 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Neuwertige Gebrauchtwagen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Ältere Fahrzeuge mit hoher Laufleistung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Unfallwagen und Hagelschaden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Motorschaden und Getriebeschaden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Fahrzeuge ohne TÜV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Exportfahrzeuge</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Autoankauf Frankfurt: Warum lokale Marktkenntnis zählt</h2>
            <p className="font-medium leading-relaxed">
              Frankfurt ist einzigartig. Als Finanzmetropole mit Europäischer Zentralbank, Deutscher Börse und hunderten internationalen Unternehmen herrscht eine besondere Nachfrage nach hochwertigen Fahrzeugen. Gleichzeitig ist die Stadt von einer exzellenten Verkehrsinfrastruktur geprägt – Autobahn A3, A5, A66, Hauptbahnhof, Flughafen – was den Export erleichtert.
            </p>

            <p className="font-medium leading-relaxed mt-4">
              Unsere Erfahrung im <strong>Autoankauf Frankfurt</strong> zeigt: Premium-Marken wie Mercedes-Benz, BMW, Audi und Porsche erzielen hier überdurchschnittliche Preise. Aber auch Volumen-Marken wie VW, Opel und Ford sind begehrt. Elektrofahrzeuge werden zunehmend nachgefragt, da Frankfurt eine der Städte mit der besten E-Ladeinfrastruktur in Deutschland ist.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Frankfurt Stadtteile im Fokus – Wo wir tätig sind</h2>
            
            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Sachsenhausen & Sachsenhausen-Nord</h3>
            <p className="font-medium leading-relaxed">
              Das beliebte Sachsenhausen mit seinen Museen, Apfelweinlokalen und der Skyline-Aussicht ist eines der nachgefragtesten Wohngebiete. Viele unserer Kunden im <strong>Autoankauf Frankfurt Sachsenhausen</strong> verkaufen hochwertige Fahrzeuge, die in den engen Altstadtgassen nicht mehr gebraucht werden. Wir holen Ihr Auto direkt vor der Haustür ab.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Westend & Nordend</h3>
            <p className="font-medium leading-relaxed">
              Das Westend ist bekannt für seine Gründerzeitvillen und das Bankenviertel. Hier verkaufen viele Geschäftsleute ihre Dienstwagen oder Zweitfahrzeuge. Das Nordend als Szene- und Familienviertel hat eine hohe Nachfrage nach zuverlässigen Gebrauchtwagen. Unser <strong>Autoankauf Frankfurt Westend</strong> und <strong>Nordend</strong> Service ist besonders beliebt.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Bockenheim & Rödelheim</h3>
            <p className="font-medium leading-relaxed">
              Studentenviertel und Wohngebiete mit guter Anbindung. Hier werden vor allem praktische Fahrzeuge für den Alltag gesucht – Kleinwagen, Kombis und kompakte SUVs. Unser Team bewertet auch ältere Fahrzeuge fair und transparent.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Höchst & Industriepark</h3>
            <p className="font-medium leading-relaxed">
              Der Frankfurter Westen mit dem Industriepark Höchst ist industriell geprägt. Hier kaufen wir häufig Nutzfahrzeuge, Transporter und Baustellenfahrzeuge an. Auch beschädigte oder ältere Fahrzeuge für den Export sind gefragt.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Autoankauf Frankfurt vs. Privatverkauf – Der Vergleich</h2>
            
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-black text-brand-dark">Kriterium</th>
                    <th className="text-left p-4 font-black text-brand-orange">Autoankauf Frankfurt</th>
                    <th className="text-left p-4 font-black text-slate-500">Privatverkauf</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Zeitaufwand</td>
                    <td className="p-4 text-slate-600">✓ 1-2 Stunden gesamt</td>
                    <td className="p-4 text-slate-600">✗ 2-4 Wochen</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Aufwand</td>
                    <td className="p-4 text-slate-600">✓ Minimal (Online-Formular)</td>
                    <td className="p-4 text-slate-600">✗ Hoch (Anzeigen, Fotos, Besichtigungen)</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Sicherheit</td>
                    <td className="p-4 text-slate-600">✓ Maximale Sicherheit, keine Betrüger</td>
                    <td className="p-4 text-slate-600">✗ Betrugsrisiko durch Fremde</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Haftung</td>
                    <td className="p-4 text-slate-600">✓ Keine (Händler übernimmt)</td>
                    <td className="p-4 text-slate-600">✗ Gewährleistungsrisiko</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Abmeldung</td>
                    <td className="p-4 text-slate-600">✓ Kostenlos durch uns</td>
                    <td className="p-4 text-slate-600">✗ Selbst organisieren</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="p-4 font-bold text-slate-700">Auszahlung</td>
                    <td className="p-4 text-slate-600">✓ In wenigen Stunden</td>
                    <td className="p-4 text-slate-600">✗ Nach Käufersuche</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Häufige Fragen zum Autoankauf Frankfurt</h2>
          </section>

          {/* FAQ Section */}
          <section className="space-y-4 mt-8">
            {[
              {
                q: "Wie schnell kann ich mein Auto in Frankfurt verkaufen?",
                a: "Bei uns dauert der komplette Prozess vom ersten Kontakt bis zur Auszahlung in der Regel 1-2 Tage. Die Online-Bewertung erhalten Sie in 2 Minuten. Nach der Besichtigung vor Ort in Frankfurt erhalten Sie das finale Angebot sofort. Bei Einigung erfolgt die Auszahlung innerhalb weniger Stunden."
              },
              {
                q: "Kommt ihr auch in alle Frankfurter Stadtteile?",
                a: "Ja, wir holen Fahrzeuge in allen Stadtteilen Frankfurts ab – von Sachsenhausen über Bockenheim bis Höchst, Bornheim, Nordend und überall dazwischen. Auch im Frankfurter Umland (Offenbach, Bad Homburg, Neu-Isenburg, Hanau, etc.) sind wir aktiv."
              },
              {
                q: "Kauft ihr auch Autos mit Motorschaden in Frankfurt?",
                a: "Ja! Wir kaufen auch Fahrzeuge mit Motorschaden, Getriebeschaden, Unfallschäden oder ohne TÜV. Selbst nicht fahrbereite Autos haben noch einen Restwert für Ersatzteile oder Export. Fordern Sie eine kostenlose Bewertung an."
              },
              {
                q: "Wie wird der Preis für mein Auto ermittelt?",
                a: "Unsere KI-Bewertung analysiert tausende aktuelle Verkaufsdaten speziell für den Frankfurter und Rhein-Main-Gebiet Markt. Faktoren wie Marke, Modell, Alter, Kilometerstand, Zustand, Ausstattung und regionale Nachfrage fließen in die Preisermittlung ein."
              },
              {
                q: "Muss ich mein Auto vor dem Verkauf abmelden?",
                a: "Nein! Beim Verkauf an uns übernehmen wir die komplette Abmeldung kostenlos für Sie. Sie müssen nur den Fahrzeugschein und -brief bereithalten. Die Abmeldung erfolgt bei der Zulassungsstelle Frankfurt."
              },
              {
                q: "Welche Unterlagen brauche ich für den Autoankauf Frankfurt?",
                a: "Sie benötigen: Fahrzeugschein (Zulassungsbescheinigung Teil I), Fahrzeugbrief (Zulassungsbescheinigung Teil II), alle Fahrzeugschlüssel und Ihren Personalausweis. Scheckheft und TÜV-Berichte sind hilfreich, aber nicht zwingend erforderlich."
              },
              {
                q: "Wie bekomme ich mein Geld nach dem Autoankauf?",
                a: "Sie haben die Wahl: Banküberweisung (erfolgt innerhalb weniger Stunden) oder Barzahlung bei Abholung. Beide Varianten sind absolut sicher und werden vertraglich festgehalten."
              },
              {
                q: "Ist die Bewertung wirklich kostenlos und unverbindlich?",
                a: "Ja, absolut! Die Online-Bewertung ist 100% kostenlos, unverbindlich und dauert nur 2 Minuten. Sie gehen keinerlei Verpflichtungen ein. Erst wenn Sie mit unserem finalen Angebot nach der Besichtigung einverstanden sind, kommt ein Kaufvertrag zustande."
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
            <h2 className="text-2xl font-black text-brand-dark mb-6 text-center">Weitere Standorte in der Region</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
              Wir bieten unseren Autoankauf-Service auch in anderen Städten im Rhein-Main-Gebiet an:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/autoankauf-wiesbaden" className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-all">
                Autoankauf Wiesbaden →
              </Link>
              <Link to="/autoankauf-mainz" className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-all">
                Autoankauf Mainz →
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-600 font-medium mb-4">
                Interessiert an weiteren Tipps zum Autoverkauf? Besuchen Sie unsere Ratgeber-Seiten:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/auto-bewerten" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Auto Bewerten
                </Link>
                <Link to="/auto-verkaufen" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Auto Verkaufen Guide
                </Link>
                <Link to="/ratgeber" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Ratgeber Gebrauchtwagen
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="my-20 bg-gradient-to-br from-brand-dark via-slate-800 to-brand-dark rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-4xl font-black mb-6">Jetzt Auto verkaufen in Frankfurt!</h2>
              <p className="text-slate-300 mb-12 max-w-2xl mx-auto font-semibold text-lg">
                Erhalten Sie in 2 Minuten eine kostenlose Bewertung Ihres Fahrzeugs. Fair, transparent und unverbindlich.
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
              Der <strong>Autoankauf Frankfurt</strong> mit Meinautoverkauf.de ist die stressfreie Alternative zum Privatverkauf. Sie sparen Zeit, Nerven und erhalten einen fairen Preis basierend auf aktuellen Marktdaten. Egal ob Sie in Sachsenhausen, Westend, Bockenheim oder einem anderen Stadtteil wohnen – wir kommen zu Ihnen.
            </p>
            <p>
              Starten Sie jetzt Ihre kostenlose Fahrzeugbewertung und erleben Sie, wie einfach Autoverkauf sein kann. Ihre Zufriedenheit ist unser Anspruch!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AutoankaufFrankfurtPage;
