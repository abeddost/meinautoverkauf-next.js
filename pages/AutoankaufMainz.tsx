import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufMainzPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-gradient-to-br from-red-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] -left-32 w-[520px] h-[520px] bg-gradient-to-tr from-amber-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[16%] right-[10%] w-80 h-80 bg-amber-300/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[12%] w-24 h-24 bg-red-200/50 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-amber-200/40 rounded-full"></div>
        <div className="absolute top-[55%] left-[6%] w-40 h-40 border-2 border-red-200/40 rounded-full"></div>
        <div className="absolute top-24 left-20 w-4 h-4 bg-amber-300 rounded-full"></div>
        <div className="absolute top-[40%] right-[32%] w-3 h-3 bg-red-200 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-5 h-5 bg-amber-200 rounded-full"></div>
        <img
          src="/elements/mainzer-dom.webp"
          alt=""
          className="absolute top-20 right-0 w-64 h-64 lg:w-80 lg:h-80 opacity-[0.08] pointer-events-none"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <img
          src="/elements/gutenberg-mainz.webp"
          alt=""
          className="absolute bottom-40 left-0 w-56 h-56 lg:w-72 lg:h-72 opacity-[0.1] pointer-events-none"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-200/60 rounded-full blur-2xl"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            Autoankauf Mainz – Ihr vertrauensvoller Partner in der Landeshauptstadt
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium relative">
            Sie möchten Ihr <strong>Auto verkaufen Mainz</strong>? Herzlich willkommen in der Gutenberg-Stadt! Als Landeshauptstadt von Rheinland-Pfalz verbindet Mainz Geschichte mit Moderne – mit dem prächtigen Dom, der historischen Altstadt und der malerischen Rheinpromenade. Genau diese Mischung spiegelt unser <strong>Autoankauf Mainz</strong> Service wider: traditionell vertrauensvoll, modern effizient. Ob Sie am Rheinufer spazieren, in der Neustadt wohnen, in Gonsenheim zu Hause sind oder in Bretzenheim studieren: Wir holen Ihr Auto überall in Mainz ab – von Mombach über Weisenau bis Mainz-Kastel und Mainz-Kostheim. <strong>Gebrauchtwagen Ankauf Mainz</strong> mit Herz und Verstand – persönlich, fair und schnell.
          </p>

          <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200/60 rounded-3xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-red-200/60 rounded-full blur-2xl"></div>
            <div className="absolute top-6 right-24 w-24 h-24 border-2 border-red-200/40 rounded-full"></div>
            <h2 className="text-xl font-black text-brand-dark mb-4 relative z-10">✓ Autoankauf Mainz – Ihre Vorteile:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-medium relative z-10">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Kostenlose Bewertung – rund um die Uhr verfügbar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Persönlicher Service – kein Callcenter, echte Menschen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Abholung in ganz Mainz, Rheinhessen & beide Rheinseiten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Faire Preise – marktgerechte Bewertung für Mainzer Verhältnisse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Zulassungsstelle Mainz-Bingen – wir regeln alles kostenlos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-black">→</span>
                <span>Express-Auszahlung am selben Tag – bar oder Überweisung</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div id="content" className="max-w-4xl mx-auto relative">
          <section className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <div className="relative">
              <img
                src="/elements/rheinufer-mainz.webp"
                alt=""
                className="absolute -top-6 right-0 w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 opacity-[0.06] pointer-events-none"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6 relative z-10">Autoankauf Mainz: Ihr Partner vor Ort</h2>
              <p className="font-medium leading-relaxed relative z-10">
                Mainz – die über 2.000 Jahre alte Römerstadt am Rhein, Landeshauptstadt von Rheinland-Pfalz und Geburtsstadt des Buchdrucks durch Johannes Gutenberg. Mit rund 220.000 Einwohnern ist Mainz eine lebendige Universitätsstadt (Johannes Gutenberg-Universität mit 32.000 Studierenden), Medienstadt (ZDF-Sendezentrum am Lerchenberg) und Faschingshochburg am Rhein. Der <strong>Autoankauf Mainz</strong> Markt profitiert von der zentralen Lage zwischen Wiesbaden, Frankfurt und dem Rheinhessischen Weinland – eine perfekte Mischung aus urbanem Leben und regionaler Verwurzelung.
              </p>
              <p className="font-medium leading-relaxed relative z-10 mt-4">
                Unser <strong>KFZ Ankauf Mainz</strong> Service ist auf die besonderen Bedürfnisse der Mainzer zugeschnitten: persönlich, unkompliziert, vertrauensvoll. Wir sind kein anonymes Großunternehmen, sondern Ihr regionaler Partner, der die Stadt kennt – vom Mainzer Dom über die Theodor-Heuss-Brücke bis zum Volkspark. Ob Sie Ihr <strong>Auto verkaufen Mainz</strong> in der Altstadt (mit ihren engen Gassen), in Gonsenheim (im grünen Westen), in Bretzenheim (nahe der Uni), in Weisenau (am südlichen Rheinufer) oder in Mainz-Kastel (über dem Rhein) möchten – wir kommen zu Ihnen. Keine Parkplatzsuche am Rheinufer, keine Fahrt zur Zulassungsstelle – Sie sparen Zeit und Nerven.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 my-8 relative overflow-hidden">
              <div className="absolute -left-6 -top-6 w-28 h-28 bg-amber-100/40 rounded-full blur-2xl"></div>
              <h3 className="text-lg md:text-xl font-black text-brand-dark mb-4 relative z-10">Kostenlose Abholung in ganz Mainz & Rheinhessen:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Alle Mainz Stadtteile:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Altstadt & Neustadt (Zentrum)</li>
                    <li>• Oberstadt & Hartenberg-Münchfeld</li>
                    <li>• Gonsenheim & Finthen (Westen)</li>
                    <li>• Bretzenheim & Drais (Uni-Nähe)</li>
                    <li>• Mombach (Industriegebiet)</li>
                    <li>• Weisenau & Hechtsheim (Süden)</li>
                    <li>• Lerchenberg (ZDF-Viertel)</li>
                    <li>• Laubenheim & Ebersheim</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-orange mb-2">Cross-Rhein & Umland:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Mainz-Kastel & Mainz-Kostheim ✓</li>
                    <li>• Ingelheim am Rhein & Budenheim</li>
                    <li>• Bodenheim & Nieder-Olm</li>
                    <li>• Wiesbaden-Biebrich & Erbenheim</li>
                    <li>• Bingen & Bad Kreuznach</li>
                    <li>• Alzey & Landkreis Mainz-Bingen</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Warum wir die beste Wahl in Mainz sind</h2>
            
            <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-100 rounded-3xl p-8 my-8 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-100/30 rounded-full blur-3xl"></div>
              <h3 className="text-base md:text-lg font-black text-brand-dark mb-4 relative z-10">🍷 Mainzer Charme trifft auf professionellen Service</h3>
              <p className="text-slate-700 font-medium leading-relaxed relative z-10">
                Mainz ist keine anonyme Großstadt – hier kennt man sich, hier gibt man sich die Hand, hier ist der rheinische Frohsinn zuhause. Und genau so funktioniert unser <strong>Auto verkaufen Mainz</strong> Service: persönlich, herzlich, auf Augenhöhe. Wir kennen den Mainzer Markt seit Jahren – wissen, welche Autos in Gonsenheim gefragt sind (Familienautos, SUVs), was Studenten in Bretzenheim brauchen (günstige Kleinwagen, erste Autos) und welche Fahrzeuge in der Oberstadt oder Neustadt gesucht werden (Mittelklasse bis Premium).
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mt-4 relative z-10">
                <strong>Besonders wichtig:</strong> Die einzigartige Verbindung zwischen Mainz und Wiesbaden über den Rhein. Viele Mainzer arbeiten "dribbe" (drüben) in Wiesbaden, viele Wiesbadener studieren oder arbeiten "hibber" (herüben) in Mainz. Unser <strong>Auto verkaufen Mainz Kastel</strong> und <strong>Autoankauf Mainz</strong> Kostheim Service berücksichtigt diese besondere Lage – wir holen auf beiden Rheinseiten ab, ohne Aufpreis, ohne Umstände.
              </p>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Vielfältiger Mainzer Automarkt – wir verstehen ihn</h3>
            <p className="font-medium leading-relaxed">
              Mainz ist bunt: Studenten mit kleinem Budget, ZDF-Mitarbeiter und Landesbeamte mit soliden Gehältern, Winzer aus Rheinhessen mit Transportern, Familien in Gonsenheim mit Kombis, Pendler nach Frankfurt mit Langstreckenfahrzeugen. Wir kaufen alles – vom 15 Jahre alten Opel Corsa (perfekt fürs Studium) bis zum gepflegten Audi A6 (Beamter geht in Ruhestand). Jedes Auto verdient eine faire Bewertung, jeder Verkäufer verdient respektvollen, freundlichen Service – das ist Mainzer Art.
            </p>

            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Auto verkaufen in Mainz: Der Ablauf</h2>
            <p className="font-medium leading-relaxed mb-6">
              Keine komplizierten Prozesse, keine versteckten Gebühren – nur drei einfache Schritte zum fairen Autoverkauf in Mainz:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black shadow-lg">1</div>
                <div>
                  <h3 className="text-base md:text-lg font-black text-brand-dark mb-2">Online-Bewertung – 24/7 verfügbar</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Geben Sie die Eckdaten Ihres Fahrzeugs ein: Hersteller, Modell, Baujahr, Laufleistung und Zustand. Unsere KI analysiert speziell den <strong>Autoankauf Mainz</strong> Markt – berücksichtigt lokale Nachfrage, Rheinhessische Besonderheiten und Rhein-Main-Preise. Das funktioniert rund um die Uhr – auch nach Feierabend oder am Wochenende, wenn Sie Zeit haben. Völlig kostenlos und unverbindlich.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black shadow-lg">2</div>
                <div>
                  <h3 className="text-base md:text-lg font-black text-brand-dark mb-2">Vor-Ort-Besichtigung in Mainz – flexibel & unkompliziert</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Vereinbaren Sie einen Wunschtermin. Unser Fahrzeugexperte kommt zu Ihnen: nach Hause in Gonsenheim, zur Uni nach Bretzenheim, zum Büro in die Neustadt, zum ZDF-Parkplatz am Lerchenberg oder nach Mainz-Kastel über den Rhein. Auch samstags kein Problem! Die Begutachtung dauert 15-20 Minuten. Danach erhalten Sie unser finales, faires Kaufangebot – keine Nachverhandlungen, keine versteckten Abzüge.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black shadow-lg">3</div>
                <div>
                  <h3 className="text-base md:text-lg font-black text-brand-dark mb-2">Kaufvertrag, Zahlung & Zulassungsstelle Mainz</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Bei Zustimmung unterzeichnen wir den rechtssicheren Kaufvertrag. Sie erhalten Ihr Geld per Express-Überweisung (meist innerhalb von 2-4 Stunden auf Ihrem Konto) oder bar. Wir übernehmen die komplette Abmeldung bei der Zulassungsstelle Mainz-Bingen in der Kreyßigstraße – Sie müssen nicht einmal persönlich zur Behörde. Fertig! Ihr Auto ist verkauft, das Geld ist da, die Papiere sind erledigt.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Welche Autos kaufen wir in Mainz an?</h2>
            <p className="font-medium leading-relaxed">
              Mainz ist vielfältig – und so auch die Fahrzeuge, die wir hier ankaufen. Vom Studentenauto bis zum Dienstwagen, vom Familien-Kombi bis zum Winzer-Transporter:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-50 rounded-full blur-xl"></div>
                <h3 className="text-base md:text-lg font-black text-brand-dark mb-4 relative z-10">🎓 Studenten & Einsteiger:</h3>
                <ul className="space-y-2 text-slate-600 font-medium relative z-10">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Kleinwagen:</strong> VW Polo, Opel Corsa, Ford Fiesta, Renault Clio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Günstige Gebrauchte:</strong> Ältere Modelle mit 150.000+ km</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Erste Autos:</strong> Ohne TÜV, mit kleinen Mängeln – für Studenten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span>Perfekt für Uni-Abgänger, die nach dem Studium umziehen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-50 rounded-full blur-xl"></div>
                <h3 className="text-base md:text-lg font-black text-brand-dark mb-4 relative z-10">👨‍👩‍👧‍👦 Familien & Alltag:</h3>
                <ul className="space-y-2 text-slate-600 font-medium relative z-10">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Kombis & Vans:</strong> VW Passat, Skoda Octavia, Ford Mondeo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>SUVs:</strong> VW Tiguan, Audi Q3, BMW X1, Nissan Qashqai</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>7-Sitzer:</strong> VW Touran, Seat Alhambra, Opel Zafira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span>Mainzer Familien-Favoriten aus Gonsenheim, Finthen & Drais</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-slate-100 rounded-full blur-xl"></div>
                <h3 className="text-base md:text-lg font-black text-brand-dark mb-4 relative z-10">🏢 Business & Behörden:</h3>
                <ul className="space-y-2 text-slate-600 font-medium relative z-10">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Dienstwagen:</strong> Mercedes, BMW, Audi (oft von Landesbeamten)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>ZDF-Mitarbeiter:</strong> Solide Mittelklasse (Passat, 3er, A4)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Firmenwagen-Rückläufer:</strong> Gepflegt, Vollausstattung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span>Schnelle Abwicklung für Jobwechsel oder Ruhestand</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-50 rounded-full blur-xl"></div>
                <h3 className="text-base md:text-lg font-black text-brand-dark mb-4 relative z-10">🔧 Auch Problemfälle:</h3>
                <ul className="space-y-2 text-slate-600 font-medium relative z-10">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Unfallwagen Ankauf Mainz:</strong> Repariert oder unrepariert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Motorschaden verkaufen Mainz:</strong> Motor kaputt? Restwert zahlen wir!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span><strong>Ohne TÜV/HU:</strong> Abgelaufene Plakette kein Problem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-black">→</span>
                    <span>Getriebeschaden, Rost, Elektronikdefekte – wir kaufen alles</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Mainz und Umgebung: Wo wir abholen</h2>
            
            <p className="font-medium leading-relaxed">
              Unser <strong>Autoankauf Mainz</strong> Service endet nicht an der Stadtgrenze. Wir decken das gesamte Rheinhessische Umland ab:
            </p>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 my-8 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-slate-200/40 rounded-full blur-2xl"></div>
              <h3 className="text-base md:text-lg font-black text-brand-dark mb-4 relative z-10">🍇 Rheinhessen & Mainz-Bingen Landkreis:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div>
                  <h4 className="font-bold text-brand-orange mb-2 text-sm">Weinstraße & Rheinufer:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Ingelheim am Rhein</li>
                    <li>• Bingen am Rhein</li>
                    <li>• Budenheim</li>
                    <li>• Bodenheim</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-orange mb-2 text-sm">Hinterland:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Nieder-Olm</li>
                    <li>• Alzey</li>
                    <li>• Bad Kreuznach (Grenze)</li>
                    <li>• Oppenheim</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-orange mb-2 text-sm">Cross-Rhein:</h4>
                  <ul className="text-sm space-y-1 text-slate-600 font-medium">
                    <li>• Mainz-Kastel ✓</li>
                    <li>• Mainz-Kostheim ✓</li>
                    <li>• Wiesbaden-Biebrich</li>
                    <li>• Wiesbaden-Erbenheim</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 font-medium mt-6 text-sm relative z-10">
                💡 <strong>Besonderheit Mainz-Kastel & Kostheim:</strong> Obwohl administrativ zu Wiesbaden gehörend, sind diese Stadtteile historisch und kulturell eng mit Mainz verbunden ("AKK-Konflikt"). Unser <strong>Auto verkaufen Mainz Kastel</strong> Service berücksichtigt diese einzigartige Lage – wir kennen beide Seiten des Rheins!
              </p>
            </div>

            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Mainz Stadtteile – Individuelle Abholung überall</h2>
            <p className="font-medium leading-relaxed mb-6">
              Jeder Mainzer Stadtteil hat seinen eigenen Charakter – und wir kennen sie alle:
            </p>
            
            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">⛪ Mainz Altstadt & Neustadt: Historisches Herz</h3>
            <p className="font-medium leading-relaxed">
              Das historische Zentrum mit dem prächtigen Mainzer Dom, dem Gutenberg-Museum und der Rheinuferpromenade mit Blick auf die Theodor-Heuss-Brücke. Hier wohnen viele Studenten in WGs, junge Berufstätige und Kulturliebhaber. Parkplätze sind Mangelware, die Straßen eng. Perfekt für unseren <strong>Autoankauf Mainz</strong> Altstadt Service – viele verkaufen ihr Auto und nutzen nur noch ÖPNV, Fahrrad oder MVG-Mainzer Mobilität. Wir holen direkt vor der Haustür ab, Sie müssen sich nicht durch die engen Gassen quälen.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">🏡 Gonsenheim & Finthen: Familienfreundlicher Westen</h3>
            <p className="font-medium leading-relaxed">
              Die westlichen Stadtteile mit hoher Wohnqualität, Einfamilienhäusern, Gärten und Schulen. Hier leben viele junge Familien, die größere Fahrzeuge wie Kombis (VW Passat, Skoda Octavia) oder SUVs (Tiguan, Q3) fahren. Wenn die Kinder größer werden, ein zweites Auto nicht mehr gebraucht wird oder die Familie umzieht – wir kaufen fair und unkompliziert. Unser <strong>Gebrauchtwagen Ankauf Mainz</strong> ist in diesen Vierteln besonders geschätzt.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">🎓 Bretzenheim & Lerchenberg: Uni & Medien</h3>
            <p className="font-medium leading-relaxed">
              Bretzenheim liegt direkt neben der Johannes Gutenberg-Universität – viele Studenten wohnen hier in günstigen Wohnungen. Der Lerchenberg ist das ZDF-Viertel mit Medienschaffenden und Redakteuren. Hier verkaufen viele ihr Erst- oder Zweitauto: Kleinwagen (Polo, Corsa, Clio) sind besonders gefragt. Unser <strong>Autoankauf Mainz Weisenau</strong> bis Bretzenheim Service ist bei jungen Leuten und Berufseinsteigern beliebt – schnelle Online-Bewertung, flexible Termine, faire Preise auch für ältere Autos mit Gebrauchsspuren.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">🏭 Mombach & Industriegebiet: Robuste Fahrzeuge</h3>
            <p className="font-medium leading-relaxed">
              Mombach mit seinem Industriegebiet, Hafengebiet und Arbeiterwohnvierteln ist geprägt von Handwerkern, kleinen Betrieben und Transportgewerbe. Hier kaufen wir häufig Nutzfahrzeuge, Transporter (Mercedes Sprinter, VW Crafter), ältere PKW für den Export und robuste Arbeitsfahrzeuge an. Auch Fahrzeuge mit hoher Laufleistung (200.000+ km) oder Defekten sind willkommen – wir bewerten fair und kennen den Restwert.
            </p>


            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Autoankauf Mainz vs. Privatverkauf – Der direkte Vergleich</h2>
            
            {/* Mobile: card layout (no horizontal scroll) */}
            <div className="md:hidden my-8 space-y-4">
              {[
                { aspekt: 'Verkaufsdauer', uns: '✓ 1-2 Tage komplett', privat: '✗ 2-6 Wochen oder länger' },
                { aspekt: 'Ihr Aufwand', uns: '✓ Minimal (Online-Formular + Termin)', privat: '✗ Hoch (Anzeigen, Fotos, Besichtigungen, Verhandlungen)' },
                { aspekt: 'Sicherheit', uns: '✓ 100% sicher, keine Betrüger', privat: '✗ Betrugsrisiko (gefälschte Überweisungen, Diebstahl)' },
                { aspekt: 'Gewährleistung', uns: '✓ Keine – Händler übernimmt alles', privat: '✗ Haftungsrisiko bei Privatverkauf' },
                { aspekt: 'Abmeldung', uns: '✓ Kostenlos durch uns übernommen', privat: '✗ Selbst zur Zulassungsstelle' },
                { aspekt: 'Zahlung', uns: '✓ Am selben Tag (Express-Überweisung/Bar)', privat: '✗ Nach Käufersuche, Zahlungsrisiko' },
              ].map((row, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                  <div className="p-3 bg-slate-50 border-b border-slate-100">
                    <div className="font-black text-brand-dark text-sm">{row.aspekt}</div>
                  </div>
                  <div className="p-3 space-y-2 text-sm">
                    <div className="flex justify-between gap-2">
                      <span className="text-slate-500 font-semibold shrink-0">Autoankauf:</span>
                      <span className="text-slate-600 text-right">{row.uns}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-slate-500 font-semibold shrink-0">Privat:</span>
                      <span className="text-slate-600 text-right">{row.privat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: table */}
            <div className="hidden md:block overflow-x-auto my-8">
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

          </section>

          {/* FAQ Section */}
          <FAQSection title="Häufige Fragen zum Autoankauf in Mainz" />

          {/* Related Pages Section */}
          <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
            <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere Standorte im Rhein-Main-Gebiet</h2>
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
                <Link to="/auto-bewerten" className="text-sm px-4 py-3 sm:py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">
                  Auto Bewerten
                </Link>
                <Link to="/auto-verkaufen" className="text-sm px-4 py-3 sm:py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">
                  Auto Verkaufen
                </Link>
                <Link to="/vorteile" className="text-sm px-4 py-3 sm:py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">
                  Ihre Vorteile
                </Link>
                <Link to="/ratgeber" className="text-sm px-4 py-3 sm:py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">
                  Gebrauchtwagen Ratgeber
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="my-20 bg-gradient-to-br from-[#0f172a] via-slate-800 to-[#0f172a] rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-12 left-12 w-56 h-56 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">Autoankauf Mainz</p>
              <h2 className="text-xl lg:text-2xl font-black mb-6">Auto in Mainz verkaufen – Vertrauen Sie dem Mainzer Service!</h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto font-semibold text-lg">
                Kostenlose Bewertung in 2 Minuten. Persönlich, fair und unverbindlich – so wie Mainzer es schätzen.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-slate-300">
                <span className="bg-white/10 px-4 py-2 rounded-full">✓ Alle Mainz Stadtteile</span>
                <span className="bg-white/10 px-4 py-2 rounded-full">✓ Auch Kastel & Kostheim</span>
                <span className="bg-white/10 px-4 py-2 rounded-full">✓ Studentenautos willkommen</span>
              </div>
              <button 
                onClick={onCtaClick}
                className="bg-brand-orange text-white px-12 py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
              >
                Jetzt kostenlos Auto bewerten
              </button>
              <p className="text-slate-400 text-xs mt-4">Vertrauen Sie dem freundlichen Mainzer Autoankauf-Service</p>
            </div>
          </div>

          {/* Conclusion */}
          <section className="mt-12 text-slate-700 font-medium leading-relaxed space-y-4 relative">
            <div className="absolute -right-6 -top-6 w-28 h-28 bg-red-50 rounded-full blur-2xl"></div>
            <p className="relative z-10">
              Der <strong>Autoankauf Mainz</strong> mit Meinautoverkauf.de ist die persönliche, vertrauensvolle Alternative zum Privatverkauf – perfekt für Mainzer, die Wert auf ehrlichen Service legen. Ob Sie am Rheinufer wohnen, in Gonsenheim Ihre Familie großziehen, in Bretzenheim studieren, am Lerchenberg beim ZDF arbeiten oder in Mainz-Kastel über dem Rhein leben: Wir sind Ihr regionaler Partner. <strong>Auto verkaufen Mainz</strong> – so einfach, so fair, so persönlich.
            </p>
            <p className="relative z-10">
              Sie sparen Zeit (kein wochenlanges Inserat), vermeiden Stress mit unseriösen Käufern und erhalten einen fairen Preis basierend auf aktuellen Mainzer und Rheinhessischen Marktdaten. <strong>Gebrauchtwagen Ankauf Mainz</strong>, <strong>Unfallwagen Ankauf Mainz</strong> oder <strong>Motorschaden verkaufen Mainz</strong> – wir kaufen alles und behandeln jeden Kunden mit Respekt.
            </p>
            <p className="font-bold text-brand-dark text-lg mt-6 relative z-10">
              Starten Sie jetzt Ihre kostenlose Bewertung und erleben Sie, wie unkompliziert <strong>KFZ Ankauf Mainz</strong> sein kann. Mainzer vertrauen Mainzern – und wir sind stolz darauf, Teil dieser Gemeinschaft zu sein!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AutoankaufMainzPage;
