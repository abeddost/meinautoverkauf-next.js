
import React from 'react';
import ValuationForm from './ValuationForm';
import { CarDetails, ValuationResult } from '../types';

interface HeroProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

const Hero: React.FC<HeroProps> = ({ onValuationComplete }) => {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      {/* --- DESKTOP VIEW (Visible only on lg and up) --- */}
      <div className="hidden lg:flex min-h-[calc(100vh-80px)] items-center relative py-20">
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-row items-center justify-between gap-16">
            {/* Desktop Left: Emotional Branding */}
            <div className="w-[55%] animate-in fade-in slide-in-from-left-8 duration-1000">
              <h1 className="text-7xl lg:text-8xl font-black leading-[0.95] mb-6 tracking-tight">
                Dein Auto. <br/>
                Dein Preis. <br/>
                <span className="text-brand-orange italic">Deine Entscheidung.</span>
              </h1>
              
              <div className="mb-10 max-w-xl">
                 <p className="text-2xl text-slate-300 font-medium leading-tight mb-2">
                  Schnell. Fair. Sicher.
                 </p>
                 <p className="text-xl text-slate-400 font-medium leading-relaxed">
                  Mit echten Angeboten statt Lockpreisen.
                 </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-12 max-w-xl">
                {[
                  "100 % transparente Preisfindung",
                  "Geprüfte Händler aus unserem Netzwerk",
                  "Kostenlos & unverbindlich",
                  "Kein Verkaufsdruck"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-slate-200">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 opacity-50">
                <div className="flex -space-x-2">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-brand-dark"></div>
                   ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em]">Über 250.000+ Fahrzeugbewertungen</div>
              </div>
            </div>

            {/* Desktop Right: Valuation Form */}
            <div id="evaluate-desktop" className="w-[42%] animate-in fade-in slide-in-from-right-8 duration-1000">
              <ValuationForm onValuationComplete={onValuationComplete} />
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW (Visible only below lg) --- */}
      <div className="lg:hidden flex flex-col pt-8 pb-16 relative">
        <div className="container mx-auto px-4 z-10">
          {/* Headline Mobile */}
          <h1 className="text-[2.6rem] font-black leading-[1.1] mb-8 tracking-tight text-center sm:text-left animate-in fade-in slide-in-from-top-4 duration-700">
            Wie viel ist dein <br/> Auto wert?
          </h1>
          
          {/* Checklist Mobile */}
          <div className="flex flex-col gap-4 mb-10 animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
            {[
              "100% kostenlose Bewertung",
              "Schnell und einfach",
              "Verkaufspreis direkt online erhalten"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white/95">{text}</span>
              </div>
            ))}
          </div>

          {/* Car Image Mobile (Placed exactly as per reference) */}
          <div className="relative w-full h-32 mb-4 pointer-events-none overflow-visible">
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" 
              alt="Car Valuation" 
              className="absolute -right-8 top-[-40px] w-[280px] object-contain animate-in fade-in slide-in-from-right-12 duration-1000"
            />
          </div>

          {/* Form Card Mobile */}
          <div id="evaluate-mobile" className="relative z-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <ValuationForm onValuationComplete={onValuationComplete} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
