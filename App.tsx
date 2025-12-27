
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Hero from './components/Hero.tsx';
import ValuationForm from './components/ValuationForm.tsx';
import ValuationResults from './components/ValuationResults.tsx';
import BookingStep from './components/BookingStep.tsx';
import ConfirmationStep from './components/ConfirmationStep.tsx';
import TrustElements from './components/TrustElements.tsx';
import FAQSection from './components/FAQSection.tsx';
import { AppStep, CarDetails, ValuationResult } from './types.ts';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.VALUATION_FORM);
  const [carDetails, setCarDetails] = useState<CarDetails | null>(null);
  const [valuation, setValuation] = useState<ValuationResult | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

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
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-orange selection:text-white">
      <Header onLogoClick={resetApp} />
      
      <main className="flex-grow">
        {currentStep === AppStep.VALUATION_FORM && (
          <div className="animate-in fade-in duration-1000">
            <Hero />
            <div id="evaluate" className="container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto">
                <ValuationForm onValuationComplete={handleStartValuation} />
              </div>
            </div>
            <TrustElements />
            <FAQSection />
          </div>
        )}

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
      </main>

      <Footer />
    </div>
  );
};

export default App;
