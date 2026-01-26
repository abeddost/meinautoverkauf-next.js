
import React from 'react';
import ValuationForm from './ValuationForm';
import { CarDetails, ValuationResult } from '../types';

interface HeroProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

const Hero: React.FC<HeroProps> = ({ onValuationComplete }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 overflow-hidden min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-80px)] flex flex-col">
      {/* Germany Map Background with Location Pins */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Simplified Germany outline */}
          <path d="M 600,150 L 650,180 L 680,160 L 710,190 L 750,170 L 780,200 L 800,250 L 820,300 L 810,350 L 790,400 L 770,450 L 740,480 L 700,500 L 650,510 L 600,500 L 550,520 L 500,510 L 450,480 L 420,450 L 400,400 L 390,350 L 400,300 L 420,250 L 450,210 L 500,180 L 550,160 Z" 
                stroke="#1e293b" strokeWidth="2" fill="none" opacity="0.3"/>
          {/* Location pins */}
          <circle cx="600" cy="250" r="6" fill="#ff8437"/>
          <circle cx="520" cy="320" r="6" fill="#ff8437"/>
          <circle cx="680" cy="300" r="6" fill="#ff8437"/>
          <circle cx="650" cy="380" r="6" fill="#ff8437"/>
          <circle cx="550" cy="420" r="6" fill="#ff8437"/>
          <circle cx="720" cy="280" r="6" fill="#ff8437"/>
        </svg>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:flex flex-grow items-center relative py-16">
        <div className="container mx-auto px-8 lg:px-16 z-10 max-w-7xl">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Desktop Left: Content + Car Image */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              {/* Headline */}
              <div className="mb-8">
                <h1 className="text-[42px] lg:text-[48px] font-black leading-[1.1] mb-4 tracking-tight text-[#1e293b]">
                  Verkaufe dein Auto in 48 Stunden zum besten Marktpreis.
                </h1>
              </div>

              {/* Car Image */}
              <div className="relative mb-10">
                <img 
                  src="/bmw.png" 
                  alt="BMW Car" 
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🛡️", text: "100 % transparente Preisfindung" },
                  { icon: "✓", text: "Geprüfte Händler aus unserem Netzwerk" },
                  { icon: "✓", text: "Kostenlos & unverbindlich" },
                  { icon: "✗", text: "Kein Verkaufsdruck" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-slate-200 px-5 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                      {item.icon === "🛡️" ? (
                        <span className="text-xl">{item.icon}</span>
                      ) : item.icon === "✓" ? (
                        <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-slate-700 leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Right: Floating Form Card */}
            <div className="flex justify-center animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="w-full max-w-[480px]">
                <ValuationForm onValuationComplete={onValuationComplete} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="lg:hidden flex flex-col flex-grow pt-6 pb-8">
        <div className="container mx-auto px-4 z-10 flex-grow flex flex-col">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-black leading-tight tracking-tight text-[#1e293b] mb-2">
              Verkaufe dein Auto in 48 Stunden zum besten Marktpreis
            </h1>
          </div>
          
          <div className="relative z-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ValuationForm onValuationComplete={onValuationComplete} />
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              "100% transparent",
              "Geprüfte Händler",
              "Kostenlos",
              "Kein Druck"
            ].map((text, i) => (
              <div key={i} className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-lg">
                <svg className="w-3 h-3 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs font-semibold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
