
import React from 'react';
import ValuationForm from './ValuationForm';
import { CarDetails, ValuationResult } from '../types';

interface HeroProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

const Hero: React.FC<HeroProps> = ({ onValuationComplete }) => {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden min-h-[calc(100vh-80px)] flex items-center py-12 lg:py-0">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Side: Content */}
          <div className="lg:w-[55%] text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 tracking-tight">
              Dein Auto. <br/>
              Dein Preis. <br/>
              <span className="text-brand-orange italic">Deine Entscheidung.</span>
            </h1>
            
            <div className="mb-10 max-w-xl mx-auto lg:mx-0">
               <p className="text-xl md:text-2xl text-slate-300 font-medium leading-tight mb-2">
                Schnell. Fair. Sicher.
               </p>
               <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                Mit echten Angeboten statt Lockpreisen.
               </p>
            </div>
            
            {/* Trust-Booster Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12 max-w-xl mx-auto lg:mx-0">
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

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-brand-dark flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-slate-700 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                   </div>
                 ))}
              </div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Über 250.000+ bewertete Fahrzeuge</div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div id="evaluate" className="lg:w-[42%] w-full max-w-xl mx-auto lg:mx-0 flex items-center justify-center">
            <ValuationForm onValuationComplete={onValuationComplete} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
