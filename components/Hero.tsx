
import React from 'react';
import ValuationForm from './ValuationForm';
import { CarDetails, ValuationResult } from '../types';

interface HeroProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

const Hero: React.FC<HeroProps> = ({ onValuationComplete }) => {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:flex min-h-[calc(100vh-80px)] items-center relative py-20">
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-row items-center justify-between gap-16">
            {/* Desktop Left */}
            <div className="w-[55%] animate-in fade-in slide-in-from-left-8 duration-1000">
              <h1 className="text-7xl lg:text-8xl font-black leading-[0.95] mb-6 tracking-tight">
                Dein Auto. <br/>
                Dein Preis. <br/>
                <span className="text-brand-orange italic">Deine Entscheidung.</span>
              </h1>
              <div className="mb-10 max-w-xl">
                 <p className="text-2xl text-slate-300 font-medium leading-tight mb-2">Schnell. Fair. Sicher.</p>
                 <p className="text-xl text-slate-400 font-medium leading-relaxed">Mit echten Angeboten statt Lockpreisen.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-12 max-w-xl">
                {[
                  "100 % transparente Preisfindung",
                  "Geprüfte Händler aus unserem Netzwerk",
                  "Kostenlos & unverbindlich",
                  "Kein Verkaufsdruck"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-4 rounded-xl backdrop-blur-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm font-bold text-slate-200">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Desktop Right */}
            <div className="w-[42%] animate-in fade-in slide-in-from-right-8 duration-1000">
              <ValuationForm onValuationComplete={onValuationComplete} />
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW (Ultra Compact) --- */}
      <div className="lg:hidden flex flex-col pt-4 pb-6">
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-3">
            <h1 className="text-lg font-black leading-tight tracking-tight text-brand-orange">
              Gratis Fahrzeug-Bewertung
            </h1>
            <p className="text-xs font-bold text-slate-300 mt-0.5">
              Verkaufe dein Auto – Schnell, fair & ohne Stress.
            </p>
          </div>
          <div className="relative z-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ValuationForm onValuationComplete={onValuationComplete} />
          </div>
          <div className="mt-3 flex justify-center gap-4 text-[8px] font-bold text-slate-400 uppercase tracking-widest opacity-80">
            <span>✓ Kostenlos</span>
            <span>✓ In 2 Min.</span>
            <span>✓ Sofort-Preis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
