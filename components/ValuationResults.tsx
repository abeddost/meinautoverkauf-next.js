
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

  const formattedPrice = formatPrice(valuation.estimatedPrice);
  const formattedMin = formatPrice(valuation.priceRange.min);
  const formattedMax = formatPrice(valuation.priceRange.max);

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-brand-orange mb-8 transition-all font-bold group"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Fahrzeugdaten korrigieren
      </button>

      <div className="bg-white rounded-[3rem] shadow-3xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
        <div className="bg-brand-dark text-white p-12 lg:w-2/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-orange"></div>
          
          <div className="z-10 w-full">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Ankaufspreis heute</h2>
            <div className="text-6xl lg:text-7xl font-black text-brand-orange mb-2 tracking-tighter drop-shadow-2xl">
              {formattedPrice}
            </div>
            
            <div className="mb-8">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">KI-Preiskorridor:</span>
              <div className="text-sm font-black text-slate-300">
                {formattedMin} — {formattedMax}
              </div>
            </div>
            
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-200">Garantiert für 24 Stunden</span>
            </div>
          </div>
        </div>

        <div className="p-10 lg:p-16 lg:w-3/5 bg-white">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-brand-orange">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
              </div>
              <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">Echtzeit-Analyse</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-3xl border-l-4 border-brand-orange shadow-sm">
                <p className="text-slate-600 leading-relaxed text-lg font-medium italic">
                  "{valuation.explanation}"
                </p>
              </div>

              {valuation.sources && valuation.sources.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Datenbasis (Live Markt-Referenzen)</h4>
                  <div className="flex flex-wrap gap-2">
                    {valuation.sources.slice(0, 3).map((source, idx) => (
                      <a 
                        key={idx} 
                        href={source.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-slate-100 hover:bg-orange-50 hover:text-brand-orange text-slate-600 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border border-slate-200"
                      >
                        Inserat prüfen ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pt-2">
                <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Individuelle Wertermittlung basierend auf Fahrzeugklasse
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10">
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group">
               <div className="flex justify-between items-center mb-8">
                 <h4 className="font-bold text-slate-400 uppercase text-xs tracking-[0.2em]">Fahrzeug-Profil</h4>
                 <div className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider ${
                   valuation.marketTrend === 'Up' ? 'bg-green-500 text-white' : 
                   valuation.marketTrend === 'Down' ? 'bg-red-500 text-white' : 'bg-slate-700 text-white'
                 }`}>
                   Markttrend: {valuation.marketTrend === 'Up' ? 'Steigend' : valuation.marketTrend === 'Down' ? 'Sinkend' : 'Stabil'}
                 </div>
               </div>
               
               <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                  {[
                    { label: "Modell", val: `${carDetails.brand} ${carDetails.model}` },
                    { label: "Laufleistung", val: `${parseInt(carDetails.mileage).toLocaleString('de-DE')} km` },
                    { label: "Baujahr", val: carDetails.year },
                    { label: "Zustand", val: carDetails.condition === 'Excellent' ? 'Ausgezeichnet' : carDetails.condition === 'Good' ? 'Gepflegt' : 'Basis' }
                  ].map((row, i) => (
                    <div key={i} className="flex flex-col border-b border-slate-200 pb-2">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{row.label}</span>
                      <span className="text-brand-dark font-extrabold truncate">{row.val}</span>
                    </div>
                  ))}
               </div>
            </div>

            <button 
              onClick={onNext}
              className="w-full bg-brand-orange hover:bg-orange-600 text-white py-6 rounded-2xl font-black text-2xl shadow-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-orange-200"
            >
              Ankauf-Termin buchen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationResults;
