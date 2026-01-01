
import React, { useState, useEffect } from 'react';
import { CarDetails, ValuationResult } from '../types';
import { getCarValuation } from '../geminiService';

interface ValuationFormProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

const ValuationForm: React.FC<ValuationFormProps> = ({ onValuationComplete }) => {
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [formData, setFormData] = useState<CarDetails>({
    brand: '',
    model: '',
    year: '2020',
    mileage: '',
    fuelType: 'Benzin',
    condition: 'Good'
  });

  const loadingSteps = [
    { label: "Fahrzeugdaten werden validiert", status: "Prüfe Eingaben..." },
    { label: "Marktdaten-Abgleich", status: "Suche Referenzwerte..." },
    { label: "KI-Modell wird geladen", status: "Analysiere Trends 2024..." },
    { label: "Auktionsergebnisse werden verglichen", status: "Berechne Händler-Marge..." },
    { label: "Finales Angebot wird erstellt", status: "Fast fertig..." }
  ];

  useEffect(() => {
    let interval: any;
    if (loading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep(prev => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
      }, 1800);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await getCarValuation(formData);
      // Ensure we stay in loading at least long enough for UX
      setTimeout(() => {
        onValuationComplete(formData, result);
      }, 1000);
    } catch (error: any) {
      console.error("Valuation error:", error);
      alert(error.message || "Hoppla! Der Preis konnte nicht berechnet werden. Bitte versuchen Sie es erneut.");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#1e293b]/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-white/10 flex flex-col min-h-[550px] relative overflow-hidden text-white">
        {/* Animated Scanner Beam */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-orange shadow-[0_0_25px_rgba(249,115,22,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent h-1/2 animate-[scan_3s_ease-in-out_infinite]"></div>
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-10 text-center">
            <div className="w-20 h-20 bg-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-orange/30 animate-pulse">
              <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04m18.236 0a11.955 11.955 0 01-8.618 3.04M12 2.944a11.955 11.955 0 01-8.618 3.04M12 21.359c-1.39-1.365-2.76-2.69-4.04-3.89m8.08 0c-1.28 1.2-2.65 2.525-4.04 3.89" />
              </svg>
            </div>
            <h2 className="text-3xl font-black mb-2 tracking-tight">Preis-Kalkulation läuft</h2>
            <p className="text-slate-400 font-medium">Präzise Wertermittlung durch Echtzeit-KI...</p>
          </div>

          <div className="space-y-6 flex-grow py-4">
            {loadingSteps.map((step, idx) => (
              <div key={idx} className={`flex items-center gap-5 transition-all duration-700 ${idx > loadingStep ? 'opacity-20 translate-x-2' : 'opacity-100 translate-x-0'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-colors ${
                  idx < loadingStep ? 'bg-green-500 text-white' : 
                  idx === loadingStep ? 'bg-brand-orange text-white ring-4 ring-brand-orange/20' : 'bg-slate-700 text-slate-400'
                }`}>
                  {idx < loadingStep ? '✓' : idx + 1}
                </div>
                <div className="flex-grow">
                  <div className={`text-base font-bold ${idx === loadingStep ? 'text-white' : 'text-slate-300'}`}>
                    {step.label}
                  </div>
                  {idx === loadingStep && (
                    <div className="text-[11px] text-brand-orange font-black uppercase tracking-widest mt-0.5 animate-pulse">
                      {step.status}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="flex justify-between mb-3 text-[11px] font-black text-slate-400 uppercase tracking-widest">
              <span>Fortschritt</span>
              <span className="text-brand-orange">{Math.round(((loadingStep + 1) / loadingSteps.length) * 100)}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-[2px]">
              <div 
                className="h-full bg-brand-orange transition-all duration-1000 ease-out rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]" 
                style={{ width: `${((loadingStep + 1) / loadingSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-gray-100 transition-all duration-500 text-brand-dark">
      <div className="mb-8">
        <h2 className="text-2xl font-black mb-2">Fahrzeug kostenlos bewerten</h2>
        <p className="text-slate-500 text-sm font-medium">In nur 2 Minuten zum garantierten Ankaufspreis.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 ml-1">Marke</label>
            <input
              required
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="z.B. VW"
              className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all placeholder:text-gray-300 font-bold"
            />
          </div>
          
          <div className="space-y-1.5">
            <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 ml-1">Modell</label>
            <input
              required
              name="model"
              value={formData.model}
              onChange={handleChange}
              placeholder="z.B. Golf"
              className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all placeholder:text-gray-300 font-bold"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 ml-1">Erstzulassung</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all appearance-none bg-white cursor-pointer font-bold"
            >
              {Array.from({ length: 30 }, (_, i) => 2024 - i).map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 ml-1">Kilometer (km)</label>
            <input
              required
              type="number"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              placeholder="z.B. 80.000"
              className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all placeholder:text-gray-300 font-bold"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 ml-1">Kraftstoff</label>
            <select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all appearance-none bg-white cursor-pointer font-bold"
            >
              <option value="Benzin">Benzin</option>
              <option value="Diesel">Diesel</option>
              <option value="Elektro">Elektro</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 ml-1">Zustand</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all appearance-none bg-white cursor-pointer font-bold"
            >
              <option value="Excellent">Wie neu (Top Zustand)</option>
              <option value="Good">Gepflegt (Normal)</option>
              <option value="Fair">Gebraucht (Mängel vorhanden)</option>
              <option value="Poor">Reparaturbedürftig</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-brand-orange hover:bg-orange-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:shadow-orange-200 transition-all transform hover:-translate-y-1 active:scale-95 mt-4"
        >
          Kostenlos bewerten
        </button>
        
        <p className="text-[10px] text-slate-400 text-center uppercase tracking-[0.1em] font-bold">
          Sicher & Unverbindlich nach DSGVO
        </p>
      </form>
    </div>
  );
};

export default ValuationForm;
