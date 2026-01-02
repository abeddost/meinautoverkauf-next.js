
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
        Angaben bearbeiten
      </button>

      <div className="bg-white rounded-[3rem] shadow-3xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
        <div className="bg-brand-dark text-white p-12 lg:w-2/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-orange"></div>
          
          <div className="z-10 w-full">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Ihr exklusives Angebot</h2>
            <div className="text-6xl lg:text-7xl font-black text-brand-orange mb-2 tracking-tighter drop-shadow-2xl">
              {formattedPrice}
            </div>
            
            <div className="mb-8">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1 text-center">Geschätzte Preisspanne:</span>
              <div className="text-lg font-black text-slate-300">
                {formattedMin} — {formattedMax}
              </div>
            </div>
            
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-200">Geprüfter Bestpreis</span>
            </div>
          </div>
        </div>

        <div className="p-10 lg:p-16 lg:w-3/5 bg-white">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-brand-orange">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">Ihr Premium-Vorteil</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-3xl border-l-4 border-brand-orange shadow-sm">
                <p className="text-slate-600 leading-relaxed text-lg font-medium italic">
                  "{valuation.explanation}"
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pt-2">
                <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04m18.236 0a11.955 11.955 0 01-8.618 3.04M12 2.944a11.955 11.955 0 01-8.618 3.04M12 21.359c-1.39-1.365-2.76-2.69-4.04-3.89m8.08 0c-1.28 1.2-2.65 2.525-4.04 3.89" />
                </svg>
                Inklusive Rundum-Sorglos-Servicepaket
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10">
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group">
               <div className="flex justify-between items-center mb-8">
                 <h4 className="font-bold text-slate-400 uppercase text-xs tracking-[0.2em]">Fahrzeug-Check</h4>
                 <div className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider ${
                   valuation.marketTrend === 'Up' ? 'bg-green-600 text-white' : 
                   valuation.marketTrend === 'Down' ? 'bg-red-600 text-white' : 'bg-slate-700 text-white'
                 }`}>
                   Markt: {valuation.marketTrend === 'Up' ? 'Steigend' : valuation.marketTrend === 'Down' ? 'Sinkend' : 'Stabil'}
                 </div>
               </div>
               
               <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                  {[
                    { label: "Modell", val: `${carDetails.brand} ${carDetails.model}` },
                    { label: "Laufleistung", val: `${parseInt(carDetails.mileage).toLocaleString('de-DE')} km` },
                    { label: "Zustand", val: carDetails.condition === 'Excellent' ? 'Wie neu' : carDetails.condition === 'Good' ? 'Gepflegt' : carDetails.condition === 'Fair' ? 'Mängel' : 'Defekt' },
                    { label: "Garantie", val: "Preis gesichert" }
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
              Termin zur Übergabe buchen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationResults;
