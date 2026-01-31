
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ValuationResults from './components/ValuationResults';
import BookingStep from './components/BookingStep';
import ConfirmationStep from './components/ConfirmationStep';
import TrustElements from './components/TrustElements';
import FAQSection from './components/FAQSection';
import AutoBewertenPage from './pages/AutoBewerten';
import AutoVerkaufenPage from './pages/AutoVerkaufen';
import VorteilePage from './pages/VorteilePage';
import RatgeberPage from './pages/Ratgeber';
import { AppStep, AppView, CarDetails, ValuationResult } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.VALUATION_FORM);
  const [carDetails, setCarDetails] = useState<CarDetails | null>(null);
  const [valuation, setValuation] = useState<ValuationResult | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep, currentView]);

  const handleStartValuation = (details: CarDetails, result: ValuationResult) => {
    setCarDetails(details);
    setValuation(result);
    setCurrentStep(AppStep.RESULTS);
  };

  const handleProceedToBooking = () => {
    setCurrentStep(AppStep.BOOKING);
  };

  const handleBookingComplete = () => {
    setCurrentStep(AppStep.CONFIRMATION);
  };

  const resetApp = () => {
    setCurrentStep(AppStep.VALUATION_FORM);
    setCarDetails(null);
    setValuation(null);
    setCurrentView(AppView.HOME);
  };

  const renderContent = () => {
    if (currentView === AppView.AUTO_BEWERTEN) return <AutoBewertenPage onCtaClick={() => setCurrentView(AppView.HOME)} />;
    if (currentView === AppView.AUTO_VERKAUFEN) return <AutoVerkaufenPage onCtaClick={() => setCurrentView(AppView.HOME)} />;
    if (currentView === AppView.VORTEILE) return <VorteilePage onCtaClick={() => setCurrentView(AppView.HOME)} />;
    if (currentView === AppView.RATGEBER) return <RatgeberPage onCtaClick={() => setCurrentView(AppView.HOME)} />;

    return (
      <div className="animate-in fade-in duration-1000">
        <Hero onValuationComplete={handleStartValuation} />

        <section id="evaluate" className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-5">
                So funktioniert der Auto Ankauf bei uns – In 3 einfachen Schritten
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Der Prozess könnte kaum einfacher sein. In nur drei Schritten von der ersten Anfrage bis zum Geld auf Ihrem Konto.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  num: "01",
                  title: "Online-Bewertung (2 Minuten)",
                  desc: "Geben Sie online die wichtigsten Daten zu Ihrem Fahrzeug ein. Dieser Schritt dauert maximal zwei Minuten und kann bequem von zu Hause aus erledigt werden. Sie benötigen lediglich Ihre Fahrzeugpapiere – keine Besichtigung, keine Probefahrt nötig.",
                  img: "/3%20steps/Fahrzeugdaten%20online%20eingeben.png"
                },
                {
                  num: "02",
                  title: "Sofortangebot erhalten",
                  desc: "Unsere künstliche Intelligenz erstellt eine detaillierte Bewertung. Sie erhalten sofort einen realistischen Preiskorridor auf Basis echter Marktwerte – transparent, nachvollziehbar und ohne versteckte Abzüge.",
                  img: "/3%20steps/Preis%20Erhalten.png"
                },
                {
                  num: "03",
                  title: "Übergabe & Auszahlung (wenige Stunden)",
                  desc: "Wählen Sie Ihren Termin aus, wir holen das Fahrzeug bei Ihnen ab (kostenlos im Einzugsgebiet). Vor Ort findet eine kurze Begutachtung statt, danach unterzeichnen Sie den Kaufvertrag und erhalten Ihr Geld per Sofortüberweisung.",
                  img: "/3%20steps/Abgabe-Termin%20buchen%20%26%20Geld%20erhalten.png"
                }
              ].map((step, i) => (
                <div key={i} className="relative bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.45)] overflow-hidden">
                  <div className="absolute top-4 right-5 text-3xl font-black text-orange-100">{step.num}</div>
                  <img src={step.img} alt={step.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-black text-brand-dark mb-3">{step.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vorteile" className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center text-brand-dark mb-12">
              Auto verkaufen online: Die Vorteile auf einen Blick
            </h2>
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-3 text-slate-600 font-medium">
                {[
                  "Sie sparen Zeit – Keine Anzeigen schalten, keine Fotos aufnehmen, keine potenziellen Käufer empfangen",
                  "Sie sparen Nerven – Keine Preisverhandlungen oder unseriöse Interessenten",
                  "Sie erhalten faire Preise – KI-gestützte Bewertung, oft höher als Angebote lokaler Händler",
                  "Maximale Sicherheit – Keine Betrüger, sichere Banküberweisung, rechtssichere Dokumentation",
                  "Abholung – Wir kommen zu Ihnen nach Hause",
                  "Blitzschnelle Auszahlung – Geld in weniger Stunden auf Ihrem Konto",
                  "Keine Gewährleistung – Sie verkaufen \"wie gesehen\" ohne spätere Haftung"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center text-xs font-black">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed font-medium pt-6">
                Ein weiterer großer Vorteil ist die Sicherheit. Beim Privatverkauf besteht immer das Risiko, an Betrüger zu geraten. Gefälschte
                Überweisungsbestätigungen, ungedeckte Schecks oder sogar Diebstahl sind leider keine Seltenheit. Bei uns erhalten Sie Ihr Geld per
                sicherer Banküberweisung, und die gesamte Transaktion wird rechtssicher dokumentiert.
              </p>
            </div>
          </div>
        </section>

        <section id="intro" className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">
                Auto verkaufen online – Schnell, sicher und zum fairen Preis | Meinautoverkauf.de
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Sie möchten Ihr Auto verkaufen und suchen nach einer stressfreien Lösung? Bei Meinautoverkauf.de profitieren Sie von
                einem innovativen Service, der den gesamten Verkaufsprozess vereinfacht.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Ob Gebrauchtwagen, Fahrzeug mit Motorschaden oder Exportfahrzeug – wir garantieren Ihnen eine faire Bewertung und einen
                reibungslosen Ablauf.
              </p>
              <p className="text-slate-600 leading-relaxed font-semibold">
                Innerhalb weniger Stunden können Sie Ihr Fahrzeug verkaufen und erhalten Ihr Geld direkt auf Ihr Konto.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-100/60 via-white to-blue-50/70 rounded-[2.5rem] blur-2xl"></div>
              <img
                src="/elements/auto%20schnell%20verkaufen.png"
                alt="Auto schnell verkaufen"
                className="relative w-full max-w-[440px] mx-auto rounded-[2rem] shadow-[0_25px_55px_-30px_rgba(15,23,42,0.45)] border border-white"
              />
            </div>
          </div>
        </section>

        <section id="warum" className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">
              Autoankauf neu gedacht: Warum Meinautoverkauf.de die beste Wahl ist
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Der Autoverkauf kann eine nervenaufreibende Angelegenheit sein. Unzählige Anrufe von unseriösen Interessenten,
              zeitraubende Besichtigungen und zähe Preisverhandlungen gehören beim Privatverkauf leider oft dazu. Genau hier setzen wir an.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Unser Autoankauf-Service kombiniert modernste Technologie mit langjähriger Branchenerfahrung, um Ihnen den bestmöglichen
              Service zu bieten. Bei uns können Sie Ihr Auto verkaufen online, ohne das Haus verlassen zu müssen.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Unsere künstliche Intelligenz analysiert in Echtzeit Tausende von Transaktionsdaten und ermittelt so einen marktgerechten Preis
              für Ihr Fahrzeug. Diese KI-gestützte Bewertung berücksichtigt nicht nur Marke, Modell und Kilometerstand, sondern auch regionale
              Markttrends und saisonale Schwankungen.
            </p>
            <div className="mt-6 rounded-2xl bg-white/80 border border-slate-100 p-5 shadow-sm">
              <p className="text-slate-600 leading-relaxed font-semibold">
                Ihr Auto in guten Händen: Wir kaufen Fahrzeuge in ganz Deutschland – von München über Berlin bis Hamburg, von Frankfurt bis Köln
                und darüber hinaus. Egal ob Sie in Wiesbaden, Stuttgart oder Dresden wohnen: Unser Service ist überall verfügbar.
              </p>
            </div>
          </div>
        </section>

        <section id="transparenz" className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">
              Gebrauchtwagen verkaufen: Transparenz steht an erster Stelle
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Transparenz ist das Fundament unseres Geschäftsmodells. Wenn Sie Ihren Gebrauchtwagen verkaufen möchten, haben Sie ein Recht darauf
              zu wissen, wie der angebotene Preis zustande kommt. Deshalb legen wir alle Bewertungskriterien offen.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Sie erfahren genau, welchen Einfluss Faktoren wie die Laufleistung, das Alter des Fahrzeugs, die Ausstattung und der Zustand auf den
              Ankaufspreis haben.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Anders als beim Privatverkauf müssen Sie sich bei uns keine Sorgen über rechtliche Fallstricke machen. Wir übernehmen die vollständige
              Haftung und Sie verkaufen das Fahrzeug wie gesehen. Das bedeutet: keine späteren Reklamationen, keine Diskussionen über versteckte Mängel
              und keine juristischen Auseinandersetzungen.
            </p>
            <div className="mt-6 rounded-2xl bg-white/80 border border-slate-100 p-5 shadow-sm">
              <p className="text-slate-600 leading-relaxed font-semibold">
                Sobald der Kaufvertrag unterschrieben ist, sind Sie aus dem Schneider.
              </p>
            </div>
          </div>
        </section>

        <TrustElements />

        <section id="motorschaden" className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">
              Autoverkauf auch bei Motorschaden oder für Export möglich
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Nicht jedes Fahrzeug ist in einem perfekten Zustand. Vielleicht hat Ihr Auto einen Motorschaden, einen Unfallschaden oder ist einfach
              schon sehr alt. Kein Problem – wir kaufen auch solche Fahrzeuge an.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Während Privatpersonen bei einem Motorschaden oft abwinken, sehen wir den Wert, der in jedem Fahrzeug steckt. Selbst Autos, die nicht
              mehr fahrtüchtig sind, haben noch einen Restwert, sei es für Ersatzteile oder für den Export.
            </p>
            <div className="rounded-2xl bg-white/80 border border-slate-100 p-5 shadow-sm">
              <div className="font-bold text-brand-dark mb-3">Wir kaufen jeden PKW:</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 font-medium">
                {[
                  "Autos mit Motorschaden",
                  "Unfallfahrzeuge",
                  "Fahrzeuge ohne TÜV",
                  "Exportfahrzeuge",
                  "Oldtimer und Liebhaberfahrzeuge",
                  "Hochwertige Gebrauchtwagen aller Marken"
                ].map((item, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <span className="mt-1 h-4 w-4 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center text-[10px] font-black">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium mt-4">
              Besonders interessant ist unser Service für Besitzer von Fahrzeugen, die sich für den Export eignen. Ältere Mercedes-Modelle, robuste
              Geländewagen oder beliebte Kleinwagen finden auf ausländischen Märkten oft dankbare Abnehmer.
            </p>
            <div className="mt-4 text-slate-600 font-semibold">
              💡 Tipp: Auch wenn Ihr Auto nicht mehr fährt – kontaktieren Sie uns trotzdem. Sie werden überrascht sein, was es noch wert ist!
            </div>
          </div>
        </section>

        <section id="ki" className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">
              Faire Bewertung durch künstliche Intelligenz
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Unser größter Trumpf ist die KI-gestützte Bewertung. Während traditionelle Händler oft aus dem Bauch heraus entscheiden oder veraltete
              Preislisten verwenden, setzen wir auf Datenanalyse.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Unsere Algorithmen werten kontinuierlich Verkaufsdaten von allen großen Gebrauchtwagenportalen, Auktionsplattformen und Händlernetzwerken
              aus. Das Ergebnis ist eine Preiseinschätzung, die den aktuellen Marktwert präzise widerspiegelt.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-6">
              Sie erhalten keinen Fantasiepreis, der sich später als unrealistisch herausstellt, sondern ein solides Angebot, das auf echten
              Verkaufszahlen basiert. Diese Transparenz schafft Vertrauen und sorgt dafür, dass beide Seiten zufrieden sind.
            </p>
            <a
              href="#bewerten"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-[#ff9a3c] to-[#ff7a1a] px-5 py-2.5 rounded-full shadow-lg shadow-orange-200/60 hover:brightness-105 transition"
            >
              🚀 JETZT AUTO BEWERTEN – Kostenlos & unverbindlich in 2 Minuten
            </a>
          </div>
        </section>

        <section id="versprechen" className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-5">
                Sicher, schnell und seriös: Das Versprechen von Meinautoverkauf.de
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Seriösität ist im Autoankauf-Geschäft leider keine Selbstverständlichkeit. Bei Meinautoverkauf.de legen wir größten Wert auf einen
                sauberen und transparenten Geschäftsablauf.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Rechtssichere Abwicklung",
                  desc: "Alle Verträge entsprechen den aktuellen rechtlichen Anforderungen. Sie erhalten eine Kopie des Kaufvertrags für Ihre Unterlagen."
                },
                {
                  title: "Kostenlose Abmeldung",
                  desc: "Die Abmeldung des Fahrzeugs bei der Zulassungsstelle übernehmen wir kostenfrei. Sie müssen sich um nichts kümmern."
                },
                {
                  title: "Sichere Auszahlung",
                  desc: "Ihr Geld wird per Banküberweisung oder Bar transferiert – keine unsicheren Zahlungsmethoden."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-sm">
                  <div className="text-brand-orange font-black text-lg mb-2">{item.title}</div>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection />

        <section id="zufriedenheit" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">
              Ihre Zufriedenheit ist unser Maßstab
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Am Ende des Tages zählt nur eines: Ihre Zufriedenheit. Wir möchten, dass Sie den Verkauf Ihres Autos als positives Erlebnis in Erinnerung
              behalten. Deshalb legen wir Wert auf eine freundliche und kompetente Beratung, faire Preise und eine schnelle Abwicklung.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Viele unserer Kunden kommen über Empfehlungen zu uns oder verkaufen bei ihrem nächsten Fahrzeugwechsel wieder an uns. Das ist für uns der
              beste Beweis dafür, dass wir unsere Arbeit gut machen.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-6">
              Auto verkaufen muss nicht kompliziert sein – mit Meinautoverkauf.de wird er zum Kinderspiel.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Wenn Sie Ihr Auto verkaufen möchten, zögern Sie nicht länger. Nutzen Sie unser kostenloses Online-Bewertungstool und erfahren Sie in wenigen
              Minuten, was Ihr Fahrzeug wert ist. Unverbindlich, schnell und präzise. Der erste Schritt zu Ihrem stressfreien Autoverkauf ist nur einen Klick entfernt.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-6">
              Egal ob Sie Ihren Gebrauchtwagen verkaufen, ein Fahrzeug mit Motorschaden loswerden oder einen PKW für den Export anbieten möchten –
              wir sind Ihr zuverlässiger Partner für den Autoankauf in ganz Deutschland.
            </p>
            <a
              href="#bewerten"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-[#ff9a3c] to-[#ff7a1a] px-5 py-2.5 rounded-full shadow-lg shadow-orange-200/60 hover:brightness-105 transition"
            >
              Jetzt Auto verkaufen – Stressfrei und fair!
            </a>
            <div className="mt-6 text-slate-500 font-semibold">
              Deutschlandweiter Service · KI-gestützte Bewertung · Faire Preise · Auszahlung in weniger Stunden
            </div>
            <div className="mt-3 text-slate-600 font-semibold">
              Meinautoverkauf.de – Ihr vertrauensvoller Partner für den schnellen und sicheren Autoverkauf online.
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-orange selection:text-white">
      <Header onLogoClick={resetApp} onViewChange={setCurrentView} />
      
      <main className={`flex-grow ${currentStep === AppStep.VALUATION_FORM && currentView === AppView.HOME ? 'bg-brand-dark' : 'bg-gray-50'}`}>
        {currentView === AppView.HOME ? (
          <>
            {currentStep === AppStep.VALUATION_FORM && renderContent()}

            {currentStep === AppStep.RESULTS && valuation && carDetails && (
              <div className="container mx-auto px-4 py-16">
                <ValuationResults 
                  valuation={valuation} 
                  carDetails={carDetails} 
                  onNext={handleProceedToBooking}
                  onBack={() => setCurrentStep(AppStep.VALUATION_FORM)}
                />
              </div>
            )}

            {currentStep === AppStep.BOOKING && carDetails && (
              <div className="container mx-auto px-4 py-16">
                <BookingStep 
                  onComplete={handleBookingComplete} 
                  onBack={() => setCurrentStep(AppStep.RESULTS)}
                />
              </div>
            )}

            {currentStep === AppStep.CONFIRMATION && (
              <div className="container mx-auto px-4 py-16">
                <ConfirmationStep onReset={resetApp} />
              </div>
            )}
          </>
        ) : renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
