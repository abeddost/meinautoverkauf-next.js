import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufFrankfurtPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-blue-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[25%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[12%] right-[8%] w-80 h-80 bg-orange-300/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[12%] w-24 h-24 bg-blue-200/50 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full"></div>
        <div className="absolute top-[55%] left-[6%] w-40 h-40 border-2 border-blue-200/40 rounded-full"></div>
        <div className="absolute top-24 left-20 w-4 h-4 bg-orange-300 rounded-full"></div>
        <div className="absolute top-[40%] right-[32%] w-3 h-3 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-5 h-5 bg-orange-200 rounded-full"></div>
        <img
          src="/elements/frankfurt-skyline.png"
          alt=""
          className="absolute top-16 right-0 w-80 h-80 lg:w-96 lg:h-96 opacity-[0.08] pointer-events-none"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <img
          src="/elements/ezb-frankfurt.png"
          alt=""
          className="absolute bottom-32 left-0 w-72 h-72 lg:w-80 lg:h-80 opacity-[0.1] pointer-events-none"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-200/60 rounded-full blur-2xl"></div>
          <h1 className="text-3xl lg:text-5xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            Autoankauf Frankfurt – Schnell, professionell & fair in der Finanzmetropole
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Sie möchten Ihr <strong>Auto verkaufen Frankfurt</strong>? Als Deutschlands Finanzmetropole ist Frankfurt am Main eine Stadt, die keine Zeit verliert – und das gilt auch für den <strong>Autoankauf Frankfurt</strong>. Ob Sie zwischen Meetings im Bankenviertel stecken, am Römerberg wohnen, in Sachsenhausen leben oder vom Frankfurter Flughafen pendeln: Wir kommen zu Ihnen und bieten professionellen <strong>Gebrauchtwagen Ankauf Frankfurt</strong> mit minimaler Unterbrechung Ihres Alltags. Keine zeit zu lange Wege, kein Stress mit Parkplatzsuche in der Innenstadt oder im Westend. <strong>Auto verkaufen Frankfurt main</strong> – einfach, schnell und zum fairen Preis.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-3xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-100/40 rounded-full blur-2xl"></div>
            <h2 className="text-xl font-black text-brand-dark mb-4 relative z-10">✓ Autoankauf Frankfurt – Ihre Vorteile:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-medium relative z-10">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Kostenlose Bewertung in 2 Minuten – perfekt für vielbeschäftigte Frankfurter</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Abendtermine & Wochenend-Service verfügbar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Abholung in allen Frankfurt Stadtteilen & Rhein-Main</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Express-Auszahlung am selben Tag – ideal für Umzüge & Jobwechsel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Umweltzonen-Expertise – auch Diesel & Nicht-Grüne-Plakette</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Zulassungsstelle Frankfurt – wir übernehmen alles kostenlos</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div id="content" className="max-w-4xl mx-auto relative">
          <section className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <div className="relative">
              <img
                src="/elements/roemerberg-frankfurt.png"
                alt=""
                className="absolute -top-6 right-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 opacity-[0.06] pointer-events-none"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6 relative z-10">Autoankauf Frankfurt: Service in allen Stadtteilen</h2>
              <p className="font-medium leading-relaxed relative z-10">
                Frankfurt am Main – Finanzhauptstadt Europas, Heimat der EZB und Deutschen Börse, Drehkreuz des internationalen Verkehrs mit dem größten deutschen Flughafen. Mit über 750.000 Einwohnern und einer der höchsten Kaufkräfte bundesweit ist Frankfurt ein einzigartiger Markt für den <strong>Autoankauf Frankfurt</strong>. Die Stadt ist geprägt von Pendlern, internationalen Fach- und Führungskräften, Studierenden und einer dynamischen Start-up-Szene – entsprechend vielfältig ist die Nachfrage nach Fahrzeugen.
              </p>
              <p className="font-medium leading-relaxed relative z-10 mt-4">
                Unser <strong>KFZ Ankauf Frankfurt</strong> Service ist auf die Bedürfnisse der Mainmetropole zugeschnitten: Schnell, diskret, professionell. Wir verstehen, dass Ihre Zeit wertvoll ist. Deshalb bieten wir flexible Termine – auch abends nach Feierabend oder am Wochenende. Ob Sie Ihr Auto im Bankenviertel, am Römerberg, in Sachsenhausen-Nord mit Skyline-Blick, im grünen Nordend, im studentischen Bockenheim, im westlichen Höchst oder direkt am Frankfurter Flughafen verkaufen möchten: Wir kommen zu Ihnen. Keine mühsame Parkplatzsuche in der Innenstadt, kein Verkehrschaos auf der A5 oder A66 – wir übernehmen die Logistik.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 my-8 relative overflow-hidden">
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-black text-brand-dark mb-4 relative z-10">Kostenlose Abholung in ganz Frankfurt & Rhein-Main:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Frankfurt Mitte & Zentrum:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Innenstadt & Bankenviertel</li>
                    <li>• Bahnhofsviertel & Gallus</li>
                    <li>• Westend-Süd & Westend-Nord</li>
                    <li>• Gutleutviertel & Europaviertel</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Frankfurt Nord:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Nordend-West & Nordend-Ost</li>
                    <li>• Bornheim & Ostend</li>
                    <li>• Preungesheim & Bonames</li>
                    <li>• Eckenheim & Dornbusch</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Frankfurt Süd:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Sachsenhausen-Nord & Sachsenhausen-Süd</li>
                    <li>• Niederrad & Oberrad</li>
                    <li>• Flughafen & Gateway Gardens</li>
                    <li>• Schwanheim & Goldstein</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Frankfurt West & Ost:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Bockenheim & Rödelheim</li>
                    <li>• Höchst & Griesheim</li>
                    <li>• Fechenheim & Riederwald</li>
                    <li>• Bergen-Enkheim & Seckbach</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200 relative z-10">
                <h4 className="font-bold text-brand-dark mb-2">Rhein-Main-Gebiet:</h4>
                <p className="text-sm text-slate-600 font-medium">
                  Offenbach, Hanau, Bad Homburg, Oberursel, Eschborn, Neu-Isenburg, Dreieich, Kelsterbach, Hofheim am Taunus, Rüsselsheim, Maintal, Mühlheim am Main
                </p>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Warum Autoankauf Frankfurt statt Privatverkauf?</h2>
            
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-3xl p-8 my-8 relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-orange-100/30 rounded-full blur-3xl"></div>
              <h3 className="text-lg font-black text-brand-dark mb-4 relative z-10">🏢 Frankfurt-Lifestyle: Keine Zeit für wochenlange Verkaufsverhandlungen</h3>
              <p className="text-slate-700 font-medium leading-relaxed relative z-10">
                Frankfurt ist eine Stadt, die nie schläft. Börsenöffnungszeiten, internationale Calls, Geschäftsreisen – wer hier arbeitet, hat schlicht keine Zeit, sein <strong>Auto verkaufen Frankfurt</strong> über Wochen auf Plattformen zu inserieren, dutzende Anrufe zu beantworten, Probefahrten zu koordinieren und mit Tiefstapeln zu verhandeln. Ein Privatverkauf dauert im Schnitt 3-4 Wochen. Bei uns ist alles in 1-2 Tagen erledigt – vom ersten Kontakt bis zur Auszahlung.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mt-4 relative z-10">
                <strong>Besonders für Expats und internationale Fachkräfte</strong> in Frankfurt ist unser Service ideal: Keine Sprachbarrieren, keine komplizierten Verkaufsverhandlungen, keine Unsicherheit bei deutschen Behördengängen. Wir sprechen Englisch und übernehmen die komplette Abmeldung bei der Zulassungsstelle Frankfurt für Sie.
              </p>
            </div>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Keine Parkplatz-Odyssee in der Innenstadt</h3>
            <p className="font-medium leading-relaxed">
              Wer schon einmal versucht hat, einen Parkplatz im Bankenviertel, rund um den Römerberg oder in Sachsenhausen zu finden, weiß: Das kann Stunden dauern. Für einen Händlerbesuch müssten Sie durch den dichten Frankfurter Verkehr navigieren, einen teuren Parkplatz finden (falls überhaupt verfügbar) und wertvolle Zeit opfern. Bei unserem <strong>Gebrauchtwagen Ankauf Frankfurt</strong> Service entfällt das komplett – wir kommen zu Ihnen, egal ob ins Büro im Westend, nach Hause nach Bornheim oder direkt zum Frankfurter Flughafen vor Ihrem Abflug.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Auto verkaufen Frankfurt: Auch Umweltzonen-Probleme?</h2>
            
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-3xl p-8 my-8 relative overflow-hidden">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-green-100/40 rounded-full blur-2xl"></div>
              <h3 className="text-lg font-black text-brand-dark mb-4 relative z-10">🌱 Frankfurts strenge Umweltzone – Ihr Diesel hat trotzdem Wert!</h3>
              <p className="text-slate-700 font-medium leading-relaxed relative z-10">
                Frankfurt hat eine der strengsten Umweltzonen Deutschlands. Fahrzeuge ohne grüne Plakette dürfen nicht ins Stadtgebiet fahren, und auch für bestimmte Diesel-Fahrzeuge gelten zunehmend Einschränkungen. Viele Frankfurter Autobesitzer glauben deshalb, ihr Diesel oder älteres Fahrzeug sei wertlos geworden. Das stimmt nicht!
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mt-4 relative z-10">
                <strong>Wir kaufen auch:</strong>
              </p>
              <ul className="space-y-2 mt-3 relative z-10">
                <li className="flex items-start gap-2 text-slate-700 font-medium">
                  <span className="text-green-600 font-black">✓</span>
                  <span><strong>Diesel ohne grüne Plakette</strong> – haben Export-Wert oder Ersatzteil-Wert</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700 font-medium">
                  <span className="text-green-600 font-black">✓</span>
                  <span><strong>Euro-4 und Euro-5 Diesel</strong> – in vielen Ländern noch gefragt</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700 font-medium">
                  <span className="text-green-600 font-black">✓</span>
                  <span><strong>Fahrzeuge mit veralteter Abgasnorm</strong> – fairer Restwert garantiert</span>
                </li>
              </ul>
              <p className="text-slate-700 font-medium leading-relaxed mt-4 relative z-10">
                Unsere Expertise im <strong>Autoankauf Frankfurt</strong> umfasst auch die Umweltzonenproblematik. Wir kennen die Export-Märkte und wissen genau, welche Fahrzeuge wo noch verkaufbar sind. <strong>Motorschaden Verkauf Frankfurt</strong> oder <strong>Unfallwagen verkaufen Frankfurt</strong> – auch das übernehmen wir problemlos.
              </p>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Auto verkaufen Frankfurt: Der Prozess in 3 einfachen Schritten</h2>
            <p className="font-medium leading-relaxed mb-6">
              Zeit ist Geld – besonders in Frankfurt. Deshalb haben wir unseren Prozess für <strong>Auto verkaufen Frankfurt sofort</strong> maximal effizient gestaltet:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black shadow-lg">1</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Online-Bewertung – 24/7 verfügbar</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Geben Sie die wichtigsten Daten Ihres Fahrzeugs ein: Marke, Modell, Baujahr, Kilometerstand und Zustand. Unsere KI-gestützte Bewertung analysiert aktuelle Verkaufsdaten speziell für den <strong>Autoankauf Frankfurt</strong> Markt und erstellt ein individuelles Angebot. Das funktioniert rund um die Uhr – perfekt für Ihre Feierabend-Planung oder Ihren Sonntag.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black shadow-lg">2</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Fahrzeugbesichtigung vor Ort in Frankfurt – flexibel nach Ihrem Zeitplan</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Wählen Sie einen Termin, der zu Ihrem Kalender passt – auch abends nach 18 Uhr oder samstags/sonntags. Unser Experte kommt zu Ihnen: nach Hause im Nordend, ins Büro im Bankenviertel, auf den Firmenparkplatz in Eschborn oder sogar zum Frankfurter Flughafen vor Ihrer Abreise. Die Besichtigung dauert nur 15-20 Minuten. Wir prüfen Zustand und Ausstattung, erstellen sofort das finale Angebot.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black shadow-lg">3</div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark mb-2">Geld erhalten, Zulassungsstelle Frankfurt – wir regeln alles</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Bei Einigung unterzeichnen wir den rechtssicheren Kaufvertrag. Sie erhalten Ihr Geld per Express-Banküberweisung (innerhalb 2-4 Stunden auf Ihrem Konto) oder bar. Wir kümmern uns um die Abmeldung bei der Zulassungsstelle Frankfurt am Konrad-Adenauer-Ring. Sie müssen nicht einmal persönlich zur Behörde – wir regeln alles für Sie. Fertig!
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Spezialisiert auf Frankfurt: Diese Autos kaufen wir</h2>
            <p className="font-medium leading-relaxed">
              Frankfurt ist keine gewöhnliche Stadt – und der <strong>Autoankauf Frankfurt</strong> Markt ist es auch nicht. Als Finanzmetropole mit hoher internationaler Präsenz kaufen wir gezielt Fahrzeuge, die in Frankfurt besonders gefragt sind:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-50 rounded-full blur-xl"></div>
                <h3 className="text-lg font-black text-brand-dark mb-4 relative z-10">🏢 Business & Premium:</h3>
                <ul className="space-y-2 text-slate-600 font-medium relative z-10">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Executive-Fahrzeuge:</strong> Mercedes E/S-Klasse, BMW 5er/7er, Audi A6/A8</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Firmenwagen & Dienstwagen:</strong> Häufig in Frankfurt, schnelle Abwicklung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Sportwagen:</strong> Porsche 911, BMW M, AMG, Audi RS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Luxus-SUVs:</strong> Range Rover, Cayenne, X5, Q7</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-50 rounded-full blur-xl"></div>
                <h3 className="text-lg font-black text-brand-dark mb-4 relative z-10">🌱 Eco & Modern:</h3>
                <ul className="space-y-2 text-slate-600 font-medium relative z-10">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Elektrofahrzeuge:</strong> Tesla Model 3/Y/S, BMW i4, Mercedes EQC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Hybride:</strong> Plug-in-Hybride, Voll-Hybride (stark nachgefragt)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Umweltfreundliche Benziner:</strong> Euro-6d Norm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Stadt-Kleinwagen:</strong> VW Up, Smart, Mini – ideal für Frankfurt</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-slate-100 rounded-full blur-xl"></div>
                <h3 className="text-lg font-black text-brand-dark mb-4 relative z-10">🚗 Volumen & Alltag:</h3>
                <ul className="space-y-2 text-slate-600 font-medium relative z-10">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Deutsche Marken:</strong> VW Golf/Passat, Opel Astra/Insignia, Ford Focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Familienautos:</strong> Kombis, Vans, 7-Sitzer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Japanische Zuverlässigkeit:</strong> Toyota, Honda, Mazda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Kompakt-SUVs:</strong> Tiguan, Q3, X1, GLC</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-50 rounded-full blur-xl"></div>
                <h3 className="text-lg font-black text-brand-dark mb-4 relative z-10">🔧 Auch mit Problemen:</h3>
                <ul className="space-y-2 text-slate-600 font-medium relative z-10">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Motorschaden Verkauf Frankfurt:</strong> Motor defekt? Wir zahlen Restwert!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Unfallwagen verkaufen Frankfurt:</strong> Repariert oder unrepariert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Ohne TÜV:</strong> Abgelaufene HU kein Problem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Getriebeschaden, Elektronikprobleme, Rostschäden</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Autoankauf Frankfurt Rhein-Main: Auch Umgebung abgedeckt</h2>
            
            <p className="font-medium leading-relaxed">
              Unser <strong>Autoankauf Frankfurt</strong> Service endet nicht an der Stadtgrenze. Das gesamte Rhein-Main-Gebiet profitiert von unserem schnellen, professionellen Service:
            </p>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 my-8 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-slate-200/40 rounded-full blur-2xl"></div>
              <h3 className="text-lg font-black text-brand-dark mb-4 relative z-10">📍 Frankfurt Umland – Wir sind überall im Rhein-Main-Gebiet aktiv:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div>
                  <h4 className="font-bold text-brand-orange mb-2 text-sm">Östlich:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Offenbach am Main</li>
                    <li>• Hanau</li>
                    <li>• Maintal</li>
                    <li>• Mühlheim am Main</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-orange mb-2 text-sm">Nördlich:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Bad Homburg v.d.H.</li>
                    <li>• Oberursel (Taunus)</li>
                    <li>• Bad Vilbel</li>
                    <li>• Friedberg (Hessen)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-orange mb-2 text-sm">Südlich & Westlich:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Neu-Isenburg & Dreieich</li>
                    <li>• Eschborn & Sulzbach</li>
                    <li>• Hofheim am Taunus</li>
                    <li>• Kelsterbach (Flughafen)</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 font-medium mt-6 text-sm relative z-10">
                💼 <strong>Flughafen Frankfurt:</strong> Sie reisen viel oder ziehen ins Ausland? Wir bieten auch Fahrzeugabholung direkt am Frankfurt Airport (Parkhaus, Langzeitparkplatz, Abholbereich) – perfekt für Expatriates und Geschäftsreisende.
              </p>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Frankfurt Stadtteile im Fokus – Wir holen überall ab</h2>
            <p className="font-medium leading-relaxed mb-6">
              Frankfurt ist eine Stadt der Gegensätze: vom hochmodernen Bankenviertel bis zu den historischen Fachwerkhäusern am Römerberg, von den Villen im Westend bis zu den Industrieanlagen in Höchst. Unser <strong>Autoankauf Frankfurt</strong> Service deckt alle 46 Stadtteile ab:
            </p>
            
            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">🏛️ Frankfurt Mitte: Innenstadt, Bankenviertel & Bahnhofsviertel</h3>
            <p className="font-medium leading-relaxed">
              Das pulsierende Herz der Stadt: EZB, Deutsche Bank, Commerzbank-Tower, Hauptwache und der historische Römerberg. Hier arbeiten täglich hunderttausende Menschen. Unser <strong>Autoankauf Frankfurt Innenstadt</strong> Service ist besonders gefragt bei Geschäftsleuten, die ihren Firmenwagen verkaufen oder auf Car-Sharing umsteigen. Wir kommen auch ins Parkhaus, zum Bürogebäude oder direkt zum Hauptbahnhof – maximale Flexibilität für Ihren vollen Terminkalender.
            </p>
            
            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">🏛️ Sachsenhausen: Alt-Sachsenhausen & Museumsufer</h3>
            <p className="font-medium leading-relaxed">
              Das beliebte Sachsenhausen mit seinen Museen und der einmaligen Skyline-Aussicht vom Mainufer ist eines der begehrtesten Wohngebiete Frankfurts. Viele unserer Kunden im <strong>Autoankauf Frankfurt Sachsenhausen</strong> verkaufen hochwertige Fahrzeuge, Cabrios oder Zweitwagen, die in den engen Altstadtgassen nicht mehr benötigt werden. Wir holen Ihr Auto direkt vor der Haustür ab – ohne dass Sie sich um Parkverbote oder Anwohner-Beschwerden kümmern müssen.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">🏢 Westend & Nordend: Villen, Banken & Szene-Viertel</h3>
            <p className="font-medium leading-relaxed">
              Das Westend – Frankfurts exklusivstes Wohnviertel mit Gründerzeitvillen, Villenkolonien und dem berühmten Bankenviertel. Hier verkaufen viele Geschäftsleute ihre Dienstwagen, Manager steigen um oder Expats verlassen Deutschland. Unser <strong>Autoankauf Frankfurt Westend</strong> Service ist auf Premium-Fahrzeuge spezialisiert: Mercedes S-Klasse, BMW 7er, Audi A8, Porsche. Das Nordend als Szene- und Familienviertel mit Cafés, Parks und Altbauten hat hohe Nachfrage nach zuverlässigen Gebrauchtwagen für den Alltag – auch hier sind wir schnell vor Ort.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">🎓 Bockenheim & Rödelheim: Uni-Viertel & Wohngegenden</h3>
            <p className="font-medium leading-relaxed">
              Bockenheim als Studierenden-Hotspot mit Goethe-Universität und Rödelheim als ruhiges Wohngebiet haben andere Bedürfnisse: Hier werden vor allem praktische, sparsame Fahrzeuge für den Alltag gesucht – Kleinwagen (VW Polo, Opel Corsa), Kombis für Familien und kompakte SUVs. Auch ältere Fahrzeuge mit höherer Laufleistung haben hier Abnehmer. Unser Team bewertet fair und transparent, egal ob Ihr Auto 50.000 oder 250.000 km gelaufen ist.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">🏭 Höchst & Griesheim: Industriepark & Arbeiterviertel</h3>
            <p className="font-medium leading-relaxed">
              Der Frankfurter Westen mit dem riesigen Industriepark Höchst (Chemie, Pharma) und dem traditionellen Arbeiterviertel Griesheim. Hier kaufen wir häufig Nutzfahrzeuge, Transporter, Baustellenfahrzeuge und robuste PKWs für den harten Arbeitsalltag an. Auch beschädigte oder ältere Fahrzeuge für den Export sind stark gefragt – besonders ältere Mercedes, VW oder Opel-Modelle.
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

          </section>

          {/* FAQ Section */}
          <FAQSection title="Häufige Fragen zum Autoankauf in Frankfurt" />

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
                  Auto Verkaufen
                </Link>
                <Link to="/vorteile" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Ihre Vorteile
                </Link>
                <Link to="/ratgeber" className="text-sm px-4 py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
                  Ratgeber Gebrauchtwagen
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="my-20 bg-gradient-to-br from-[#0f172a] via-slate-800 to-[#0f172a] rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">Autoankauf Frankfurt</p>
              <h2 className="text-2xl lg:text-4xl font-black mb-6">Jetzt Auto in Frankfurt verkaufen – Fair, schnell & professionell!</h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto font-semibold text-lg">
                Erhalten Sie in 2 Minuten eine kostenlose Bewertung für Ihr Fahrzeug. Perfekt für Frankfurts schnelles Tempo – keine Zeit verschwenden, fairen Preis erhalten.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-slate-300">
                <span className="bg-white/10 px-4 py-2 rounded-full">✓ Alle Frankfurt Stadtteile</span>
                <span className="bg-white/10 px-4 py-2 rounded-full">✓ Täglich mehrere Ankäufe</span>
                <span className="bg-white/10 px-4 py-2 rounded-full">✓ Auch Diesel & Umweltzone</span>
              </div>
              <button 
                onClick={onCtaClick}
                className="bg-brand-orange text-white px-12 py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
              >
                Jetzt kostenlos Auto bewerten
              </button>
              <p className="text-slate-400 text-xs mt-4">Über 2.500+ zufriedene Kunden in Frankfurt & Rhein-Main</p>
            </div>
          </div>

          {/* Conclusion */}
          <section className="mt-12 text-slate-700 font-medium leading-relaxed space-y-4 relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full blur-2xl"></div>
            <p className="relative z-10">
              Der <strong>Autoankauf Frankfurt</strong> mit Meinautoverkauf.de ist die professionelle, zeitsparende Alternative zum Privatverkauf – perfekt für Frankfurts dynamischen Lifestyle. Ob Sie zwischen Meetings im Bankenviertel stecken, am Römerberg wohnen, in Sachsenhausen leben oder vom Flughafen pendeln: Wir passen uns Ihrem Zeitplan an. Egal ob <strong>Auto verkaufen Frankfurt main</strong> in der Innenstadt, <strong>Gebrauchtwagen Ankauf Frankfurt</strong> im Nordend, <strong>Motorschaden Verkauf Frankfurt</strong> in Höchst oder <strong>Unfallwagen verkaufen Frankfurt</strong> in Bockenheim – wir sind Ihr vertrauensvoller Partner.
            </p>
            <p className="relative z-10">
              Sie sparen Zeit (keine wochenlangen Inserate), vermeiden Stress mit unseriösen Käufern (keine Parkplatz-Odyssee für Besichtigungen) und erhalten einen fairen Preis basierend auf aktuellen Frankfurter Marktdaten. <strong>KFZ Ankauf Frankfurt</strong> auf höchstem Niveau – professionell, diskret, rechtssicher.
            </p>
            <p className="font-bold text-brand-dark text-lg mt-6 relative z-10">
              Starten Sie jetzt Ihre kostenlose Bewertung und erleben Sie, wie einfach <strong>Auto verkaufen Frankfurt sofort</strong> sein kann. Täglich vertrauen uns Frankfurter ihren wertvollsten Besitz an – werden auch Sie Teil unserer zufriedenen Kunden!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AutoankaufFrankfurtPage;
