
import React from 'react';
import { CarDetails, ValuationResult } from '../types';

interface ValuationResultsProps {
  valuation: ValuationResult;
  carDetails: CarDetails;
  onNext: () => void;
  onBack: () => void;
}

const ValuationResults: React.FC<ValuationResultsProps> = ({ valuation, carDetails, onNext, onBack }) => {
  const formatPrice = (val: number) => new Intl.NumberFormat('de-DE', { 
    style: 'currency', 
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(val);

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-brand-orange mb-6 transition-all font-bold group"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Angaben bearbeiten
      </button>

      <div className="bg-white rounded-2xl lg:rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
        {/* Main Price Display (Left/Top) */}
        <div className="bg-brand-dark text-white p-4 sm:p-6 lg:p-6 lg:w-[30%] flex flex-col justify-center items-center text-center relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange"></div>
          
          <h2 className="text-xs sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-3">Ihr Ankauf-Angebot</h2>
          <div className="text-2xl sm:text-4xl lg:text-3xl font-black text-brand-orange mb-3 tracking-tighter">
            {formatPrice(valuation.estimatedPrice)}
          </div>
          
          <div className="w-full p-2.5 sm:p-4 bg-white/5 rounded-xl border border-white/10 mb-3 lg:mb-5">
            <span className="text-xs sm:text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Geprüfter Preiskorridor</span>
            <div className="text-sm sm:text-lg font-black text-slate-300">
              {formatPrice(valuation.priceRange.min)} — {formatPrice(valuation.priceRange.max)}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-full">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-300 bg-white/5 px-3 py-2 rounded-xl border border-white/5">
              <span className="text-green-400">●</span> Garantiert für 7 Tage
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-300 bg-white/5 px-3 py-2 rounded-xl border border-white/5">
              <span className="text-brand-orange">●</span> Sofortige Auszahlung
            </div>
          </div>
        </div>

        {/* Persuasive Content (Right/Bottom) */}
        <div className="p-4 sm:p-6 lg:p-6 lg:w-[70%] bg-white flex flex-col gap-5 lg:gap-0 lg:justify-between">
          <div className="order-1 lg:order-2 space-y-3">
            <button 
              onClick={onNext}
              className="w-full bg-brand-orange hover:bg-orange-600 text-white px-5 py-3 lg:py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg transition-all transform active:scale-95 shadow-orange-900/20"
            >
              Termin zur Übergabe buchen
            </button>
            
            <div className="text-center text-xs text-slate-400 font-bold uppercase tracking-[0.15em] px-2">
              Sicherer Verkauf • Keine versteckten Gebühren • Inkl. Rechts-Service
            </div>
          </div>

          <div className="order-2 lg:order-1">
            <div className="mb-5 lg:mb-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-6">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-orange shadow-inner flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04m18.236 0a11.955 11.955 0 01-8.618 3.04M12 2.944a11.955 11.955 0 01-8.618 3.04M12 21.359c-1.39-1.365-2.76-2.69-4.04-3.89m8.08 0c-1.28 1.2-2.65 2.525-4.04 3.89" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-xl font-black text-brand-dark tracking-tight">Ihre Vorteile auf einen Blick</h3>
              </div>
              
              <div className="relative mb-4 lg:mb-8">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-brand-orange/20 rounded-full"></div>
                <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
                  "{valuation.explanation}"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  { title: "Keine Haftung", desc: "Verkauf ohne Gewährleistungspflicht Ihrerseits." },
                  { title: "Echtzeit-Geld", desc: "Direkte Überweisung bei Fahrzeugübergabe." },
                  { title: "Kostenlose Abmeldung", desc: "Wir übernehmen den Behörden-Service für Sie." },
                  { title: "Marktgerechter Preis", desc: "Transparenter Richtpreis ohne Verhandlungsdruck." }
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 p-2.5 lg:p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-orange-50 transition-colors ${
                      i === 2
                        ? 'order-1 sm:order-none'
                        : i === 3
                          ? 'order-2 sm:order-none'
                          : i === 1
                            ? 'order-3 sm:order-none'
                            : ''
                    }`}
                  >
                    <div className="mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-black text-brand-dark uppercase tracking-wide">{benefit.title}</div>
                      <div className="text-xs text-slate-500 font-medium">{benefit.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationResults;
