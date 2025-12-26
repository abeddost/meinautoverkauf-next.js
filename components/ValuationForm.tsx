
import React, { useState, useEffect } from 'react';
import { CarDetails, ValuationResult } from '../types';
import { getCarValuation } from '../geminiService';

interface ValuationFormProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

const ValuationForm: React.FC<ValuationFormProps> = ({ onValuationComplete }) => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Berechne Bestpreis...");
  const [formData, setFormData] = useState<CarDetails>({
    brand: '',
    model: '',
    year: '2020',
    mileage: '',
    fuelType: 'Benzin',
    condition: 'Good'
  });

  const loadingMessages = [
    "Analysiere Marktdaten...",
    "Prüfe aktuelle Trends...",
    "Vergleiche Auktionsergebnisse...",
    "Berechne Händler-Ankaufswert...",
    "Finalisiere Ihr Angebot..."
  ];

  useEffect(() => {
    let interval: any;
    if (loading) {
      let i = 0;
      interval = setInterval(() => {
        setLoadingText(loadingMessages[i % loadingMessages.length]);
        i++;
      }, 1500);
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
      onValuationComplete(formData, result);
    } catch (error: any) {
      alert(error.message || "Es gab einen Fehler. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100 -mt-16 relative z-20 transition-all duration-500">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-black mb-2 text-center text-brand-dark">Lassen Sie uns den Wert finden.</h2>
        <p className="text-gray-500 text-center mb-10">Nur wenige Details trennen Sie von Ihrem Bestpreis-Angebot.</p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group space-y-2">
              <label className="block text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">Marke</label>
              <input
                required
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="z.B. BMW"
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all placeholder:text-gray-300"
              />
            </div>
            
            <div className="group space-y-2">
              <label className="block text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">Modell</label>
              <input
                required
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="z.B. 3er Reihe"
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">Zulassung</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all appearance-none bg-white cursor-pointer"
              >
                {Array.from({ length: 30 }, (_, i) => 2024 - i).map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div className="group space-y-2">
              <label className="block text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">Laufleistung (km)</label>
              <input
                required
                type="number"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                placeholder="z.B. 50000"
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">Kraftstoff</label>
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all appearance-none bg-white cursor-pointer"
              >
                <option value="Benzin">Benzin</option>
                <option value="Diesel">Diesel</option>
                <option value="Elektro">Elektro</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">Zustand</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all appearance-none bg-white cursor-pointer"
              >
                <option value="Excellent">Wie neu (Top-Zustand)</option>
                <option value="Good">Gepflegt (normal)</option>
                <option value="Fair">Gebraucht (Mängel)</option>
                <option value="Poor">Reparaturbedürftig</option>
              </select>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-6 rounded-2xl text-2xl font-black text-white shadow-xl transition-all transform ${
                loading 
                ? 'bg-slate-700 cursor-wait' 
                : 'bg-brand-orange hover:bg-orange-600 hover:scale-[1.01] active:scale-95 shadow-orange-200'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-4">
                  <svg className="animate-spin h-8 w-8 text-brand-orange" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {loadingText}
                </span>
              ) : (
                "Jetzt Wert ermitteln"
              )}
            </button>
            <div className="flex items-center justify-center gap-6 mt-8 opacity-60">
              <div className="flex items-center gap-2 text-xs font-bold uppercase">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                100% Kostenlos
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                Unverbindlich
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ValuationForm;
