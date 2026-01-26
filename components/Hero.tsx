
import React from 'react';
import ValuationForm from './ValuationForm';
import { CarDetails, ValuationResult } from '../types';

interface HeroProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

const Hero: React.FC<HeroProps> = ({ onValuationComplete }) => {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-80px)] flex flex-col">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:flex flex-grow items-center relative py-12">
        <div className="container mx-auto px-8 lg:px-12 z-10">
          <div className="flex flex-row items-center justify-between gap-20">
            {/* Desktop Left: Content Area */}
            <div className="w-[50%] animate-in fade-in slide-in-from-left-12 duration-1000">
              <div className="mb-10">
                <h1 className="text-4xl lg:text-5xl font-black leading-[1.1] mb-6 tracking-tight">
                  Dein Auto. <br/>
                  Dein Preis. <br/>
                  <span className="text-brand-orange">Deine Entscheidung.</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-100 font-bold leading-snug mb-6 max-w-lg">
                  Verkaufe dein Auto in 2–3 Tagen zum echten Marktpreis.
                </p>
                <div className="flex flex-col gap-1">
                   <p className="text-base text-white font-black">Schnell. Fair. Sicher.</p>
                   <p className="text-sm text-slate-400 font-medium">Mit echten Angeboten statt Lockpreisen.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 max-w-xl">
                {[
                  "100 % transparente Preisfindung",
                  "Geprüfte Händler aus unserem Netzwerk",
                  "Kostenlos & unverbindlich",
                  "Kein Verkaufsdruck"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-slate-100 leading-tight">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Right: Form Area */}
            <div className="w-[45%] flex justify-end animate-in fade-in slide-in-from-right-12 duration-1000">
              <div className="w-full max-w-md">
                <ValuationForm onValuationComplete={onValuationComplete} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      {/* --- MOBILE VIEW (Updated to prevent white area) --- */}
      <div className="lg:hidden flex flex-col flex-grow pt-4 pb-8">
        <div className="container mx-auto px-4 z-10 flex-grow flex flex-col justify-center">
          <div className="text-center mb-4">
            <h1 className="text-xl font-black leading-tight tracking-tight text-brand-orange">
              Verkaufe dein Auto sicher, schnell und zum fairen Preis
            </h1>
            <p className="text-xs font-bold text-slate-300 mt-1 max-w-[280px] mx-auto leading-relaxed">
              Kostenlose Online-Bewertung • Unverbindlich • In nur 2 Minuten
            </p>
          </div>
          <div className="relative z-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ValuationForm onValuationComplete={onValuationComplete} />
          </div>
          <div className="mt-4 flex justify-center gap-4 text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-80">
            <span>✓ Kein Risiko</span>
            <span>✓ In 2 Min.</span>
            <span>✓ 100% Unverbindlich</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
