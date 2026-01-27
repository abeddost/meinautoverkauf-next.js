
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
            <h2 className="text-3xl md:text-4xl font-black text-center text-brand-dark mb-16">
              So einfach funktioniert der Autoverkauf:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                { 
                  num: "01", 
                  title: "Fahrzeugdaten online eingeben", 
                  desc: "In nur 2 Minuten bequem von zu Hause aus alle Details erfassen.",
                  sub: "(2 Minuten)"
                },
                { 
                  num: "02", 
                  title: "Finales Händlerangebot erhalten", 
                  desc: "Unsere KI berechnet basierend auf echten Marktwerten einen marktgerechten Preis.",
                  sub: "Direkt & Realistisch"
                },
                { 
                  num: "03", 
                  title: "Abgabe-Termin buchen & Geld erhalten", 
                  desc: "Wählen Sie Ihren Wunschtermin. Schnelle Abwicklung & Sofortüberweisung.",
                  sub: "Sicher & Schnell"
                }
              ].map((step, i) => (
                <div key={i} className="relative group text-center md:text-left">
                  <div className="text-6xl font-black text-slate-50 absolute -top-8 -left-4 z-0 group-hover:text-orange-50 transition-colors">
                    {step.num}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-black text-brand-dark mb-3">
                      {step.title} <span className="text-brand-orange block md:inline text-sm italic">{step.sub}</span>
                    </h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustElements />
        <FAQSection />
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
