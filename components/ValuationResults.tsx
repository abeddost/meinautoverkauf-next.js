
import React from 'react';
import { CarDetails, ValuationResult } from '../types';

interface ValuationResultsProps {
  valuation: ValuationResult;
  carDetails: CarDetails;
  onNext: () => void;
  onBack: () => void;
}

const ValuationResults: React.FC<ValuationResultsProps> = ({ valuation, carDetails, onNext, onBack }) => {
  const formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valuation.estimatedPrice);

  return (
    <div className="max-w-5xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-brand-orange mb-8 transition-all font-bold group"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Daten anpassen
      </button>

      <div className="bg-white rounded-[3rem] shadow-3xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
        <div className="bg-brand-dark text-white p-12 md:w-2/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange"></div>
          <h2 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-4">Das ist Ihr Bestpreis</h2>
          <div className="text-6xl md:text-7xl font-black text-brand-orange mb-6 tracking-tighter">
            {formattedPrice}
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl text-sm font-bold inline-flex items-center gap-3">
             <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
             Heute garantiert
          </div>
          <div className="mt-12 text-slate-500 text-xs italic max-w-[200px]">
            Basierend auf {new Date().toLocaleDateString('de-DE')} Echtzeit-Marktdaten.
          </div>
        </div>

        <div className="p-12 md:w-3/5">
          <div className="mb-10">
            <h3 className="text-2xl font-black text-brand-dark mb-4">Experten-Analyse</h3>
            <p className="text-slate-600 leading-relaxed text-lg italic">
              "{valuation.explanation}"
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
               <div className="flex justify-between items-center mb-6">
                 <h4 className="font-black text-brand-dark uppercase text-sm tracking-widest">Marktwert-Check</h4>
                 <div className={`px-4 py-1.5 rounded-full text-xs font-black uppercase ${valuation.marketTrend === 'Up' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                   {valuation.marketTrend === 'Up' ? 'Nachfrage steigt' : 'Markt stabil'}
                 </div>
               </div>
               <div className="space-y-4">
                  {[
                    { label: "Modell", val: `${carDetails.brand} ${carDetails.model}` },
                    { label: "Laufleistung", val: `${carDetails.mileage} km` },
                    { label: "Erstzulassung", val: carDetails.year },
                    { label: "Zustand", val: carDetails.condition === 'Excellent' ? 'Hervorragend' : carDetails.condition === 'Good' ? 'Gepflegt' : 'Gebraucht' }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-slate-500 font-medium">{row.label}</span>
                      <span className="text-brand-dark font-bold">{row.val}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={onNext}
                className="w-full bg-brand-orange hover:bg-orange-600 text-white py-6 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-orange-100"
              >
                Kauf-Termin sichern
              </button>
              <div className="text-center text-sm text-slate-400 font-medium">
                Sicherer Banktransfer direkt nach dem Termin.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationResults;
