import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { WIESBADEN_FAQS } from '../lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufWiesbadenPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] -left-32 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[16%] right-[10%] w-80 h-80 bg-orange-300/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[12%] w-24 h-24 bg-blue-200/50 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full"></div>
        <div className="absolute top-[55%] left-[6%] w-40 h-40 border-2 border-blue-200/40 rounded-full"></div>
        <div className="absolute top-24 left-20 w-4 h-4 bg-orange-300 rounded-full"></div>
        <div className="absolute top-[40%] right-[32%] w-3 h-3 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-5 h-5 bg-orange-200 rounded-full"></div>
        <img
          src="/elements/kurhaus-wiesbaden.webp"
          alt=""
          width={320}
          height={320}
          className="absolute top-20 right-0 w-64 h-64 lg:w-80 lg:h-80 opacity-[0.08] pointer-events-none"
          loading="lazy"
          decoding="async"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <img
          src="/elements/auto-ankauf-wiesbaden.webp"
          alt=""
          width={288}
          height={288}
          className="absolute bottom-40 left-0 w-56 h-56 lg:w-72 lg:h-72 opacity-[0.12] pointer-events-none"
          loading="lazy"
          decoding="async"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-brand-orange/40 rounded-full blur-2xl"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            Autoankauf Wiesbaden – Schnell, sicher & fair in der Landeshauptstadt
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Sie möchten Ihr <strong>Auto in Wiesbaden verkaufen</strong>? Als erfahrener Partner für <strong>Autoankauf Wiesbaden</strong> bieten wir Ihnen einen komfortablen Service direkt vor Ihrer Haustür – ob am Kurhaus, in Biebrich am Rhein, in Dotzheim oder Mainz-Kastel. Keine Fahrten nach Frankfurt nötig: Wir kommen zu Ihnen, bewerten Ihr Fahrzeug fair und zahlen sofort aus. Egal ob gepflegter Gebrauchtwagen, Luxusfahrzeug, <strong>Motorschaden Ankauf Wiesbaden</strong> oder <strong>Unfallwagen Ankauf Wiesbaden</strong> – bei uns sind Sie richtig.
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200/60 rounded-3xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-brand-orange/40 rounded-full blur-2xl"></div>
            <div className="absolute top-6 right-24 w-24 h-24 border-2 border-orange-200/40 rounded-full"></div>
            <h2 className="text-xl font-black text-brand-dark mb-4 relative z-10">✓ Ihre Vorteile beim Autoankauf Wiesbaden:</h2>
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
        <div id="wiesbaden-content" className="max-w-4xl mx-auto relative">
          <section className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <div className="relative">
              <img
                src="/elements/neroberg-wiesbaden.webp"
                alt=""
                width={256}
                height={256}
                className="absolute -top-4 right-0 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-[0.07] pointer-events-none"
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6 relative z-10">Autoankauf Wiesbaden – Unser Service vor Ort</h2>
              <p className="font-medium leading-relaxed relative z-10">
                Wiesbaden, die hessische Landeshauptstadt und weltberühmte Kurstadt mit ihren heißen Quellen, dem prachtvollen Kurhaus und der wilhelminischen Architektur, ist mit rund 280.000 Einwohnern eine der wohlhabendsten Städte Deutschlands. Als wichtiger Standort für Versicherungen, Medien und Dienstleister sowie als Pendlerstadt ins Rhein-Main-Gebiet spiegelt sich die Vielfalt auch im Automarkt wider.
              </p>
              <p className="font-medium leading-relaxed relative z-10">
                Beim <strong>Autoankauf Wiesbaden</strong> profitieren Sie von unserem lokalen Service: Wir kennen den Wiesbadener Markt, die Nachfrage nach bestimmten Fahrzeugtypen und die Besonderheiten der Region. Ob Sie in der Innenstadt nahe Wilhelmstraße und Schlossplatz wohnen, in Biebrich am Rhein mit Blick auf das barocke Schloss, im grünen Dotzheim, am Neroberg mit seiner Zahnradbahn, in Schierstein direkt am Rheinufer oder in Mainz-Kastel und Mainz-Kostheim auf der "rechten Rheinseite" – unser Service ist überall verfügbar. <strong>Auto verkaufen Wiesbaden</strong> war noch nie so einfach!
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 my-8 relative overflow-hidden">
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-blue-100/50 rounded-full blur-xl"></div>
              <h3 className="text-lg md:text-xl font-black text-brand-dark mb-4 relative z-10">Kostenlose Abholung in ganz Wiesbaden und Umgebung:</h3>
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

            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Auto verkaufen in Wiesbaden: So einfach geht's</h2>
            <p className="font-medium leading-relaxed mb-6">
              <strong>Auto verkaufen Wiesbaden sofort</strong> – das ist unser Versprechen. Während ein Privatverkauf Wochen dauern kann, ist bei uns der gesamte Prozess in 1-2 Tagen abgeschlossen. Hier die drei einfachen Schritte:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">1</div>
                <div>
                  <h3 className="text-base md:text-lg font-black text-brand-dark mb-2">Kostenlose Online-Bewertung</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Füllen Sie unser Online-Formular aus – Marke, Modell, Baujahr, Kilometerstand und Zustand. Unsere KI analysiert den Wiesbadener Markt und erstellt eine realistische Preiseinschätzung. Das dauert nur 2 Minuten und ist völlig unverbindlich.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">2</div>
                <div>
                  <h3 className="text-base md:text-lg font-black text-brand-dark mb-2">Persönliche Besichtigung in Wiesbaden</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Wählen Sie Wunschtermin und -ort. Unser Experte kommt zu Ihnen nach Hause, an Ihre Arbeitsstelle oder zu einem Treffpunkt Ihrer Wahl in Wiesbaden. Die Fahrzeugbegutachtung dauert 15-20 Minuten. Anschließend erhalten Sie unser finales Kaufangebot.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 text-white flex items-center justify-center text-xl font-black">3</div>
                <div>
                  <h3 className="text-base md:text-lg font-black text-brand-dark mb-2">Vertrag, Auszahlung & Abmeldung</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Bei Einigung unterzeichnen wir den notariell sicheren Kaufvertrag. Sie erhalten Ihr Geld per Überweisung (Express innerhalb von 2-4 Stunden) oder bar. Wir kümmern uns um die Abmeldung bei der Zulassungsstelle Wiesbaden. Fertig!
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Welche Fahrzeuge kaufen wir in Wiesbaden an?</h2>
            <p className="font-medium leading-relaxed">
              Beim <strong>Autoankauf Wiesbaden</strong> sind wir auf alle Fahrzeugklassen und Marken spezialisiert. Von der Luxuslimousine bis zum Kleinwagen, vom Neuwagen bis zum Oldtimer – wir kaufen alles:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors">
                <h3 className="text-base md:text-lg font-black text-brand-dark mb-4">Marken & Modelle:</h3>
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

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange-50 rounded-full blur-xl"></div>
                <h3 className="text-base md:text-lg font-black text-brand-dark mb-4 relative z-10">Auch bei Schäden:</h3>
                <ul className="space-y-2 text-slate-600 font-medium relative z-10">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span><strong>Motorschaden Ankauf Wiesbaden</strong> – Reparatur lohnt sich nicht? Wir zahlen den Restwert!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span><strong>Unfallwagen Ankauf Wiesbaden</strong> – Repariert oder unrepariert, wir kaufen beides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Fahrzeuge ohne TÜV oder HU – Auch ohne gültige Hauptuntersuchung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Getriebeschaden – Automatik oder Schaltgetriebe defekt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Alte Fahrzeuge mit hoher Laufleistung – 200.000+ km kein Problem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange">✓</span>
                    <span>Exportfahrzeuge & Liebhaberfahrzeuge – Für den internationalen Markt</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Was macht uns beim Autoankauf in Wiesbaden besonders?</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-3xl p-8 my-8 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
              <h3 className="text-base md:text-lg font-black text-brand-dark mb-4 relative z-10">🏛️ Lokale Expertise für Wiesbaden</h3>
              <p className="text-slate-700 font-medium leading-relaxed relative z-10">
                Als etablierter Partner für <strong>Gebrauchtwagen Ankauf Wiesbaden</strong> kennen wir den lokalen Markt genau. Wiesbaden hat einen überdurchschnittlich hohen Anteil an Luxus- und Premiumfahrzeugen – Mercedes-Benz, BMW, Audi und Porsche sind hier besonders gefragt. Die Nähe zu Frankfurt, die hohe Kaufkraft und die vielen Geschäftsleute sorgen für stabile Nachfrage und faire Preise.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mt-4 relative z-10">
                Wir kennen auch die lokalen Besonderheiten: die verkehrsberuhigte Innenstadt, die Umweltzone, die Parkplatzsituation am Kurpark und die Zulassungsstelle an der Konrad-Adenauer-Ring. Diese Ortskenntnisse erleichtern den gesamten Prozess erheblich.
              </p>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Nachbarstädte im Fokus</h3>
            <p className="font-medium leading-relaxed">
              Unser <strong>KFZ Ankauf Wiesbaden</strong> Service erstreckt sich auch ins direkte Umland: <strong>Mainz</strong> (nur 10 km), <strong>Taunusstein</strong>, <strong>Hochheim am Main</strong>, <strong>Eltville am Rhein</strong> mit seinen Weingütern, und <strong>Bad Schwalbach</strong> im Taunus. Selbst wenn Sie außerhalb wohnen, profitieren Sie von unserem schnellen und zuverlässigen Service.
            </p>

            <div className="bg-orange-50 border-l-4 border-brand-orange p-6 rounded-r-2xl my-8 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-orange-100/40 rounded-full blur-xl"></div>
              <p className="font-bold text-brand-dark mb-2 relative z-10">💡 Wiesbaden-Tipp:</p>
              <p className="text-slate-700 font-medium relative z-10">
                Wiesbaden hat eine der höchsten Dichten an Premiumfahrzeugen in Deutschland. Wenn Sie einen Mercedes, BMW, Audi oder Porsche verkaufen möchten, sind Sie hier besonders gut aufgehoben – die lokale Nachfrage ist enorm! Auch Cabrios (perfekt für Fahrten durch den Rheingau) und gehobene SUVs erzielen in Wiesbaden Top-Preise.
              </p>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Schnelle Zulassungsstelle-Abwicklung</h3>
            <p className="font-medium leading-relaxed">
              Die Wiesbadener Zulassungsstelle am Konrad-Adenauer-Ring kennen wir aus jahrelanger Praxis. Wir übernehmen die komplette Abmeldung Ihres Fahrzeugs – Sie müssen nicht einmal persönlich zur Behörde. Das spart Ihnen Zeit, Parkplatzsuche und Wartezeiten. Bei uns läuft alles digital und effizient.
            </p>

            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Wiesbaden Stadtteile – Wo wir Ihr Auto abholen</h2>
            
            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Wiesbaden Mitte & Rheingauviertel</h3>
            <p className="font-medium leading-relaxed">
              Das Stadtzentrum mit dem prächtigen Kurhaus, Casino, Hessischem Staatstheater, Wilhelmstraße und wilhelminischer Pracht-Architektur. Hier wohnen viele Geschäftsleute, Kulturliebhaber und wohlhabende Familien. Unser <strong>Autoankauf Wiesbaden Mitte</strong> Service ist besonders bei Luxusfahrzeugen und Cabrios stark nachgefragt – kein Wunder bei so viel Eleganz ringsum!
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Biebrich & Schierstein am Rhein</h3>
            <p className="font-medium leading-relaxed">
              Die malerischen Rheinufer-Stadtteile mit dem barocken Schloss Biebrich, idyllischen Weinbergen und direktem Zugang zum Rhein. Hier verkaufen viele Familien ihre Zweitwagen, Oldtimer oder Cabrios. Der <strong>Autoankauf Wiesbaden Biebrich</strong> und Schierstein Service ist ganzjährig stark frequentiert – besonders im Frühjahr, wenn die Cabrio-Saison startet.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Dotzheim, Sonnenberg & Rambach</h3>
            <p className="font-medium leading-relaxed">
              Beliebte Wohnviertel im Westen und Nordwesten mit hervorragender Infrastruktur und vielen Familien. Hier werden vor allem praktische Alltagsfahrzeuge gesucht: Kombis, Kleinwagen, kompakte SUVs und zuverlässige Mittelklasse-Modelle für den täglichen Pendlerverkehr nach Frankfurt oder Mainz.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Mainz-Kastel, Mainz-Kostheim & Mainz-Amöneburg</h3>
            <p className="font-medium leading-relaxed">
              Die rechtsrheinischen Stadtteile mit direkter Anbindung nach Mainz über die Theodor-Heuss-Brücke. Viele Pendler verkaufen hier ihre Firmenwagen oder steigen auf öffentliche Verkehrsmittel um. Unser Service ist schnell, unkompliziert und passt perfekt in den Alltag berufstätiger Wiesbadener.
            </p>

            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Autoankauf Wiesbaden: Fair, transparent, sicher</h2>
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 my-8">
              <h3 className="text-base md:text-lg font-black text-brand-dark mb-6">Unsere Garantien für Sie:</h3>
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

          </section>

          {/* FAQ Section */}
          <FAQSection
            title="Häufige Fragen zum Autoankauf in Wiesbaden"
            faqs={[...WIESBADEN_FAQS]}
            sectionId="faq-wiesbaden"
          />

          {/* Related Pages Section */}
          <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
            <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere Standorte im Rhein-Main-Gebiet</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
              Wir bieten unseren Autoankauf-Service auch in anderen Städten der Region an:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/autoankauf-frankfurt" className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-all">
                Autoankauf Frankfurt →
              </Link>
              <Link to="/autoankauf-hofheim-am-taunus" className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-all">
                Auch in Hofheim am Taunus verfügbar →
              </Link>
              <Link to="/autoankauf-mainz" className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-all">
                Autoankauf Mainz →
              </Link>
              <Link to="/autoankauf-koblenz" className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-all">
                Autoankauf Koblenz →
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-600 font-medium mb-4">
                Weitere hilfreiche Informationen finden Sie in unserem Ratgeber:
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
                  Verkaufs-Ratgeber
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="my-20 bg-gradient-to-br from-[#0f172a] via-slate-800 to-[#0f172a] rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-xl lg:text-2xl font-black mb-6">Jetzt Auto in Wiesbaden verkaufen!</h2>
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
          <section className="mt-12 text-slate-700 font-medium leading-relaxed space-y-4 relative">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-orange-50 rounded-full blur-2xl"></div>
            <p className="relative z-10">
              Der <strong>Autoankauf Wiesbaden</strong> mit Meinautoverkauf.de ist die unkomplizierte, sichere und faire Alternative zum privaten Verkauf. Ob Sie in der prachtvollen Innenstadt nahe dem Kurhaus wohnen, in Biebrich am Rhein, im grünen Dotzheim oder in Mainz-Kastel – wir kommen zu Ihnen! Sie sparen Zeit, vermeiden Stress mit unseriösen Käufern und erhalten einen marktgerechten Preis basierend auf aktuellen Wiesbadener Marktdaten.
            </p>
            <p className="relative z-10">
              <strong>Auto verkaufen Wiesbaden</strong> war noch nie so einfach: Kostenlose Online-Bewertung, persönliche Besichtigung vor Ort, sofortige Auszahlung und kostenlose Abmeldung bei der Zulassungsstelle. Egal ob <strong>Gebrauchtwagen Ankauf Wiesbaden</strong>, <strong>Motorschaden Ankauf Wiesbaden</strong> oder <strong>Unfallwagen Ankauf Wiesbaden</strong> – wir sind Ihr vertrauensvoller Partner in der hessischen Landeshauptstadt.
            </p>
            <p className="font-bold text-brand-dark text-lg mt-6 relative z-10">
              Starten Sie jetzt Ihre kostenlose Bewertung und erleben Sie, wie einfach <strong>Auto verkaufen Wiesbaden sofort</strong> sein kann!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AutoankaufWiesbadenPage;
