
import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';

interface Props {
  onCtaClick: () => void;
}

const VorteilePage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">Ihre Vorteile</span>
          <h1 className="text-3xl lg:text-5xl font-black text-brand-dark leading-tight tracking-tight mb-6">
            Autoankauf mit Meinautoverkauf.de – <br className="hidden lg:block"/> Ihre Vorteile auf einen Blick
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Wenn Sie sich fragen "Wir kaufen dein Auto – was macht den Unterschied?", finden Sie hier alle Gründe, warum tausende Kunden sich für unseren <strong>Autoankauf</strong>-Service entscheiden. Schnell, sicher und zum fairen Preis – <strong>Gebrauchtwagen verkaufen</strong> war noch nie so einfach.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 scale-[0.85] origin-top">
          {/* Security & Trust */}
          <div className="p-10 bg-brand-dark bg-gradient-to-br from-brand-dark to-slate-800 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group border border-slate-800/40">
            <div className="relative z-10">
              <h2 className="text-2xl font-black mb-6 text-brand-orange">Sicherheit & Vertrauen – Auto verkaufen ohne Risiko</h2>
              <p className="text-slate-100 font-semibold leading-relaxed mb-6">
                Beim <strong>Autoankauf</strong> mit Meinautoverkauf.de verkaufen Sie Ihr Fahrzeug mit maximaler Sicherheit. Kein Verkauf an dubiose Händler, keine versteckten Klauseln – nur ein rechtssicherer Vertrag nach deutschem Recht. <strong>Auto verkaufen ohne Risiko</strong> bedeutet bei uns:
              </p>
              <ul className="mt-8 space-y-4 text-slate-100">
                <li className="flex items-start gap-3 text-sm font-bold"><span className="text-brand-orange text-lg flex-shrink-0">✓</span> <span>Ausschluss jeglicher Sachmängelhaftung – Sie verkaufen "wie gesehen"</span></li>
                <li className="flex items-start gap-3 text-sm font-bold"><span className="text-brand-orange text-lg flex-shrink-0">✓</span> <span>Offizielle Abmeldung bei der Zulassungsstelle inklusive</span></li>
                <li className="flex items-start gap-3 text-sm font-bold"><span className="text-brand-orange text-lg flex-shrink-0">✓</span> <span>Geprüfte Vertragsvorlagen – rechtlich wasserdicht</span></li>
                <li className="flex items-start gap-3 text-sm font-bold"><span className="text-brand-orange text-lg flex-shrink-0">✓</span> <span>Keine späteren Reklamationen oder Haftungsansprüche</span></li>
                <li className="flex items-start gap-3 text-sm font-bold"><span className="text-brand-orange text-lg flex-shrink-0">✓</span> <span>Sichere Banküberweisung – keine unsicheren Zahlungsmethoden</span></li>
              </ul>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-orange/5 rounded-full"></div>
          </div>

          {/* Speed */}
          <div className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-[3rem] group relative overflow-hidden">
            <h2 className="text-2xl font-black mb-6 text-brand-dark">Geschwindigkeit – Auto verkaufen schnell</h2>
            <p className="text-slate-700 font-semibold leading-relaxed mb-6">
              Zeit ist Geld. Während ein Privatverkauf durchschnittlich 4-6 Wochen dauert, können Sie bei uns Ihr <strong>Auto verkaufen schnell</strong> – oft noch am selben Tag. <strong>Auto verkaufen sofort Geld</strong> erhalten:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm font-bold text-slate-700"><span className="text-brand-orange text-lg flex-shrink-0">⚡</span> <span>Bewertung in 2 Minuten online</span></li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-700"><span className="text-brand-orange text-lg flex-shrink-0">⚡</span> <span>Termin innerhalb von 24-48 Stunden möglich</span></li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-700"><span className="text-brand-orange text-lg flex-shrink-0">⚡</span> <span>Fahrzeugprüfung dauert nur 45-60 Minuten</span></li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-700"><span className="text-brand-orange text-lg flex-shrink-0">⚡</span> <span>Auszahlung am Tag der Übergabe</span></li>
            </ul>
            <div className="mt-6 flex items-end gap-6 justify-center scale-[0.75]">
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-56 rounded-t-3xl bg-gradient-to-t from-slate-200 to-slate-50 ring-1 ring-slate-200 shadow-sm bar-rise">
                  <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] font-black text-slate-500">LANGSAM</span>
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase mt-2">Privat</span>
                <span className="text-[9px] text-slate-400 font-bold">4–6 Wochen</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 rounded-t-3xl bg-gradient-to-t from-brand-orange to-brand-orange/85 ring-1 ring-orange-300/70 shadow-lg bar-rise bar-delay-200">
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[11px] font-black text-slate-500">
                    SCHNELL
                  </span>
                </div>
                <span className="text-[10px] font-black text-brand-orange uppercase mt-2">BEI UNS</span>
                <span className="text-[9px] text-brand-orange font-bold">24–48h</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes barRise {
            0% { transform: scaleY(0.05); opacity: 0; }
            100% { transform: scaleY(1); opacity: 1; }
          }
          .bar-rise {
            transform-origin: bottom;
            will-change: transform, opacity;
            animation: barRise 1.4s cubic-bezier(0.2, 0.7, 0.2, 1) both;
          }
          .bar-delay-200 {
            animation-delay: 200ms;
          }
        `}</style>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <section className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">KI-gestützte faire Preisermittlung</h2>
            <p className="font-medium leading-relaxed">
              Beim <strong>Auto Ankauf</strong> ist der Preis entscheidend. Wir setzen auf modernste künstliche Intelligenz, die kontinuierlich tausende Transaktionen analysiert. Mit unserer <Link to="/auto-bewerten" className="text-brand-orange font-bold hover:underline">kostenlosen Bewertung</Link> erhalten Sie in 2 Minuten einen fairen Preis. Unsere Algorithmen bewerten nicht nur den aktuellen Zustand Ihres Fahrzeugs, sondern auch Marktdynamik, regionale Nachfrage und saisonale Trends. Das Ergebnis: Sie erhalten einen fairen, marktgerechten Preis – oft höher als bei lokalen Händlern, die nur ihr eigenes Inventar im Blick haben.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Transparente Bewertung ohne versteckte Kosten</h3>
            <p className="font-medium leading-relaxed">
              <strong>Autoankauf ohne versteckte Kosten</strong> ist für uns selbstverständlich. Der Preis, den wir Ihnen nennen, ist der Preis, den Sie erhalten – ohne Abzüge, ohne Gebühren, ohne Überraschungen. Andere Anbieter ziehen nachträglich "Bearbeitungsgebühren" oder "Logistikkosten" ab. Nicht bei uns.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Hausabholung – Autoankauf mit Abholung</h2>
            <p className="font-medium leading-relaxed">
              Sie möchten Ihr <strong>Gebrauchtwagen verkaufen</strong>, aber haben keine Zeit für lange Fahrten? Unser <strong>Autoankauf mit Abholung</strong> macht es möglich: Wir kommen zu Ihnen nach Hause, prüfen das Fahrzeug vor Ort, unterzeichnen den Vertrag und nehmen das Auto direkt mit. Innerhalb unseres Einzugsgebiets ist dieser Service vollkommen kostenlos – keine Kilometer-Pauschalen, keine versteckten Gebühren.
            </p>

            <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Deutschlandweite Abholung</h3>
            <p className="font-medium leading-relaxed">
              Egal ob Sie in München, Berlin, Hamburg, <Link to="/autoankauf-frankfurt" className="text-brand-orange font-bold hover:underline">Frankfurt</Link>, <Link to="/autoankauf-wiesbaden" className="text-brand-orange font-bold hover:underline">Wiesbaden</Link>, <Link to="/autoankauf-mainz" className="text-brand-orange font-bold hover:underline">Mainz</Link>, Köln, Stuttgart oder einer kleineren Stadt wohnen – unser Service ist überall verfügbar. Wir haben ein deutschlandweites Netzwerk und können Ihr Fahrzeug flexibel abholen.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Sofortige Auszahlung – Auto verkaufen sofort Geld</h2>
            <p className="font-medium leading-relaxed">
              Beim Privatverkauf warten Sie oft Tage oder Wochen auf das Geld. Bei uns nicht. <strong>Auto verkaufen sofort Geld</strong> bedeutet: Sobald der Vertrag unterzeichnet ist, erfolgt die Überweisung auf Ihr Konto – oft noch am selben Tag. Keine Schecks, keine verzögerten Zahlungen, keine "das Geld ist unterwegs"-Ausreden. Sie erhalten Ihr Geld sofort und sicher per Banküberweisung.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Papierkram-Service – Auto verkaufen ohne Papierkram</h2>
            <p className="font-medium leading-relaxed">
              <strong>Auto verkaufen ohne Papierkram</strong> klingt zu schön, um wahr zu sein? Nicht bei uns. Wir übernehmen die gesamte Bürokratie für Sie:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Abmeldung bei der Zulassungsstelle:</strong> Wir kümmern uns um alle Formalitäten.</li>
              <li><strong>Kaufvertrag vorbereitet:</strong> Sie müssen nur noch unterschreiben.</li>
              <li><strong>Finanzierung ablösen:</strong> Wenn Ihr Auto noch finanziert ist, kommunizieren wir direkt mit Ihrer Bank.</li>
              <li><strong>Versicherung informieren:</strong> Wir geben Ihnen alle nötigen Unterlagen für Ihre Versicherung.</li>
              <li><strong>Exportpapiere:</strong> Falls Ihr Auto exportiert wird, erstellen wir alle notwendigen Dokumente.</li>
            </ul>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Finanzierungsservice – Restkredit? Kein Problem!</h2>
            <p className="font-medium leading-relaxed">
              Viele Autobesitzer glauben, sie können ihr Fahrzeug nicht verkaufen, solange noch ein Kredit läuft. Das stimmt nicht! Wir bieten einen vollständigen Finanzierungsservice:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li>Wir kontaktieren Ihre finanzierende Bank direkt</li>
              <li>Wir begleichen die Restschuld aus dem Kaufpreis</li>
              <li>Sie erhalten den Differenzbetrag ausgezahlt</li>
              <li>Kein zusätzlicher Aufwand für Sie</li>
            </ul>
            <p className="font-medium leading-relaxed mt-4">
              Dieser Service ist selbstverständlich kostenlos und erspart Ihnen viel Zeit und Kommunikation mit der Bank.
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Flexible Terminplanung nach Ihrem Zeitplan</h2>
            <p className="font-medium leading-relaxed">
              Wir wissen, dass Ihr Alltag vollgepackt ist. Deshalb bieten wir maximale Flexibilität bei der Terminplanung. Sie bestimmen, wann und wo wir Ihr Fahrzeug prüfen und abholen:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Abendtermine:</strong> Auch nach Feierabend verfügbar</li>
              <li><strong>Wochenendservice:</strong> Samstags und oft auch sonntags</li>
              <li><strong>Kurzfristige Termine:</strong> Oft innerhalb von 24 Stunden</li>
              <li><strong>Flexible Stornierung:</strong> Termin ändern oder absagen ohne Gebühren</li>
            </ul>

            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mt-16 mb-6">Kundenzufriedenheit: Was unsere Kunden sagen</h2>
            <p className="font-medium leading-relaxed">
              Über 95% unserer Kunden würden uns weiterempfehlen. Das ist kein Zufall – es ist das Ergebnis unseres kundenorientierten Ansatzes. Wenn Sie Ihren <strong>Gebrauchtwagen verkaufen</strong> möchten, erwarten Sie:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Ehrliche Kommunikation:</strong> Keine falschen Versprechungen oder Lockangebote</li>
              <li><strong>Professionelles Team:</strong> Freundliche, kompetente Mitarbeiter</li>
              <li><strong>Schnelle Reaktionszeiten:</strong> Ihre Anfragen werden zeitnah beantwortet</li>
              <li><strong>Faire Behandlung:</strong> Jeder Kunde ist uns wichtig</li>
            </ul>
          </section>

          {/* Key Benefits Grid */}
          <div className="mt-20 mb-20">
            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark text-center mb-12">Alle Vorteile auf einen Blick</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  num: "01",
                  title: "Marktgerechte Preisermittlung", 
                  desc: "KI-gestützte Bewertung basierend auf aktuellen Marktdaten und echten Verkaufspreisen." 
                },
                { 
                  num: "02",
                  title: "Kostenlose Hausabholung", 
                  desc: "Wir kommen zu Ihnen – deutschlandweit und ohne zusätzliche Kosten." 
                },
                { 
                  num: "03",
                  title: "Sofort-Überweisung", 
                  desc: "Auszahlung per Echtzeit-Banküberweisung direkt nach Vertragsunterzeichnung." 
                },
                { 
                  num: "04",
                  title: "Komplette Papierarbeit", 
                  desc: "Wir übernehmen Abmeldung, Verträge und alle Formalitäten für Sie." 
                },
                { 
                  num: "05",
                  title: "Keine Haftung", 
                  desc: "Verkaufen Sie 'wie gesehen' – ohne spätere Reklamationen oder Gewährleistung." 
                },
                { 
                  num: "06",
                  title: "Finanzierungsablösung", 
                  desc: "Wir lösen Ihren bestehenden Autokredit direkt bei der Bank ab." 
                },
                { 
                  num: "07",
                  title: "Flexible Termine", 
                  desc: "Abend- und Wochenendtermine nach Ihrem Zeitplan verfügbar." 
                },
                { 
                  num: "08",
                  title: "Keine versteckten Kosten", 
                  desc: "Transparente Preisgestaltung ohne Gebühren, Pauschalen oder Abzüge." 
                },
                { 
                  num: "09",
                  title: "Auch defekte Autos", 
                  desc: "Wir kaufen Fahrzeuge in jedem Zustand – auch mit Motorschaden oder Unfallschaden." 
                }
              ].map((benefit, i) => (
                <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-200">
                  <div className="text-brand-orange text-4xl mb-4 font-black">#{benefit.num}</div>
                  <h3 className="font-black text-brand-dark mb-3 text-base uppercase tracking-tight">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden my-20 border border-slate-700/60 shadow-2xl">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-4xl font-black mb-6">Überzeugen Sie sich selbst von unserem Autoankauf</h2>
              <p className="text-slate-100 mb-12 max-w-2xl mx-auto font-semibold text-lg">
                Viele Kunden nutzen unseren Service, um ihren <strong>Gebrauchtwagen zu verkaufen</strong>. Starten Sie jetzt Ihre kostenlose Bewertung – unverbindlich und in nur 2 Minuten.
              </p>
              <button 
                onClick={onCtaClick}
                className="bg-brand-orange text-white px-12 py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
              >
                Jetzt kostenlos Auto bewerten
              </button>
            </div>
          </div>
        </div>

          <FAQSection
            title="Häufig gestellte Fragen zu unseren Vorteilen"
            sectionId="faq-vorteile"
            className="mt-24"
            faqs={[
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
            ]}
          />

        <div className="max-w-4xl mx-auto">
          {/* Conclusion */}
          <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark mb-6 text-center">Fazit: Autoankauf mit maximalen Vorteilen</h2>
            <p className="text-slate-700 font-medium leading-relaxed mb-4">
              Wenn Sie Ihr <strong>Auto verkaufen</strong> möchten, bietet Ihnen Meinautoverkauf.de den besten Service auf dem Markt. <strong>Wir kaufen dein Auto</strong> schnell, sicher und zum fairen Preis – mit allen Vorteilen, die Sie sich wünschen können.
            </p>
            <p className="text-slate-700 font-medium leading-relaxed mb-4">
              Ob <strong>Auto verkaufen schnell</strong>, <strong>Auto verkaufen ohne Risiko</strong>, <strong>Autoankauf mit Abholung</strong>, <strong>Auto verkaufen sofort Geld</strong>, <strong>Auto verkaufen ohne Papierkram</strong> oder <strong>Autoankauf ohne versteckte Kosten</strong> – wir erfüllen all diese Anforderungen und noch mehr.
            </p>
            <p className="text-slate-700 font-medium leading-relaxed mb-6">
              Starten Sie jetzt Ihre <Link to="/auto-bewerten" className="text-brand-orange font-bold hover:underline">kostenlose Bewertung</Link> und überzeugen Sie sich selbst von unseren Vorteilen. Erfahren Sie mehr über den <Link to="/auto-verkaufen" className="text-brand-orange font-bold hover:underline">Verkaufsprozess</Link> oder nutzen Sie unseren <Link to="/ratgeber" className="text-brand-orange font-bold hover:underline">Verkaufs-Ratgeber</Link> für Tipps.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VorteilePage;
