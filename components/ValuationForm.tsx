
import React, { useState, useEffect } from 'react';
import { CarDetails, ValuationResult } from '../types';
import { getCarValuation } from '../geminiService';

interface ValuationFormProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

type FormPage = 1 | 2 | 3 | 4;

const BRAND_DATA: Record<string, string[]> = {
  'Audi': ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'TT', 'e-tron'],
  'BMW': ['1er', '2er', '3er', '4er', '5er', '7er', '8er', 'X1', 'X3', 'X5', 'X7', 'Z4', 'iX'],
  'Ford': ['Fiesta', 'Focus', 'Mondeo', 'Mustang', 'Kuga', 'Puma', 'Ranger', 'Transit'],
  'Mercedes-Benz': ['A-Klasse', 'B-Klasse', 'C-Klasse', 'E-Klasse', 'S-Klasse', 'CLA', 'GLA', 'GLC', 'GLE', 'EQS'],
  'Opel': ['Corsa', 'Astra', 'Insignia', 'Mokka', 'Grandland', 'Combo', 'Adam'],
  'Skoda': ['Fabia', 'Octavia', 'Superb', 'Kamiq', 'Karoq', 'Kodiaq', 'Enyaq'],
  'Toyota': ['Aygo', 'Yaris', 'Corolla', 'RAV4', 'C-HR', 'Prius', 'Hilux'],
  'VW': ['Polo', 'Golf', 'Passat', 'Tiguan', 'T-Roc', 'ID.3', 'ID.4', 'Touareg', 'Touran'],
  'Tesla': ['Model 3', 'Model Y', 'Model S', 'Model X'],
  'Hyundai': ['i10', 'i20', 'i30', 'Kona', 'Tucson', 'Ioniq 5', 'Santa Fe'],
  'Seat': ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco'],
  'Cupra': ['Formentor', 'Leon', 'Born'],
  'Kia': ['Picanto', 'Ceed', 'Sportage', 'Niro', 'EV6', 'Sorento'],
  'Peugeot': ['208', '308', '508', '2008', '3008', '5008'],
  'Renault': ['Twingo', 'Clio', 'Megane', 'Captur', 'Zoe', 'Scenic'],
  'Fiat': ['500', 'Panda', 'Tipo', 'Ducato'],
  'Volvo': ['XC40', 'XC60', 'XC90', 'V60', 'S60'],
  'Mazda': ['2', '3', '6', 'CX-5', 'CX-30', 'MX-5'],
  'Nissan': ['Micra', 'Qashqai', 'Juke', 'X-Trail', 'Leaf'],
  'Dacia': ['Sandero', 'Duster', 'Jogger', 'Spring']
};

const BODY_TYPES = ['Limousine', 'Kombi', 'SUV / Geländewagen', 'Kleinwagen', 'Cabrio', 'Coupé', 'Van'];
const FUELS = ['Benzin', 'Diesel', 'Elektro', 'Hybrid'];
const TRANSMISSIONS = ['Manuelles Getriebe', 'Automatikgetriebe'];
const YEARS = Array.from({ length: 30 }, (_, i) => (2024 - i).toString());
const MILEAGE_OPTIONS = Array.from({ length: 21 }, (_, i) => (i * 10000).toString());
const POWER_OPTIONS = ['60', '75', '90', '110', '130', '150', '170', '190', '210', '250', '300', '400', '500'];
const CONDITIONS = [
  { val: 'Excellent', label: 'Neuwertig / Top' },
  { val: 'Good', label: 'Gepflegt / Normal' },
  { val: 'Fair', label: 'Mängel / Gebraucht' },
  { val: 'Poor', label: 'Defekt / Unfall' }
];

const ValuationForm: React.FC<ValuationFormProps> = ({ onValuationComplete }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<FormPage>(1);
  const [formData, setFormData] = useState<CarDetails>({
    brand: '',
    model: '',
    year: '2019',
    mileage: '70000',
    fuelType: 'Benzin',
    transmission: 'Automatikgetriebe',
    power: '150',
    bodyType: 'Limousine',
    condition: 'Good'
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      ...(name === 'brand' ? { model: '' } : {})
    }));
  };

  const nextPage = () => {
    if (currentPage === 1 && (!formData.brand || !formData.model || !formData.bodyType)) return;
    if (currentPage === 2 && (!formData.fuelType || !formData.transmission || !formData.power)) return;
    if (currentPage === 3 && (!formData.year || !formData.mileage || !formData.condition)) return;
    setCurrentPage(prev => (prev < 4 ? (prev + 1) as FormPage : prev));
  };

  const prevPage = () => setCurrentPage(prev => (prev > 1 ? (prev - 1) as FormPage : prev));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await getCarValuation(formData);
      setTimeout(() => onValuationComplete(formData, result), 300);
    } catch (error: any) {
      alert("Fehler bei der Bewertung.");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-brand-dark rounded-2xl p-6 flex flex-col items-center justify-center min-h-[300px] text-white border border-white/10">
        <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mb-4"></div>
        <h2 className="text-base font-black">Preisfindung läuft...</h2>
      </div>
    );
  }

  const Dropdown = ({ label, name, value, options, placeholder = "Wählen..." }: any) => (
    <div className="flex flex-col gap-0.5">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={handleSelectChange}
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-[#004d7c] appearance-none outline-none focus:border-brand-orange"
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt: any) => {
            const isObj = typeof opt === 'object';
            const val = isObj ? opt.val : opt;
            const labelStr = isObj ? opt.label : opt;
            return <option key={val} value={val}>{labelStr}</option>
          })}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden text-brand-dark border border-slate-100 flex flex-col w-full max-w-2xl mx-auto min-h-[340px] lg:min-h-[580px]">
      <div className="bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <span className="bg-brand-orange text-white text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-widest">Schritt {currentPage}/4</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase">
              {currentPage === 1 && "Fahrzeug"} {currentPage === 2 && "Technik"} {currentPage === 3 && "Zustand"} {currentPage === 4 && "Check"}
            </span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map(p => (
              <div key={p} className={`h-1 rounded-full transition-all duration-500 ${currentPage >= p ? 'w-5 lg:w-16 bg-brand-orange' : 'w-2 bg-slate-200'}`}></div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 lg:p-8 flex-grow flex flex-col justify-between gap-3">
        <div className="space-y-3 lg:space-y-6">
          {currentPage === 1 && (
            <div className="grid grid-cols-1 gap-3 animate-in fade-in slide-in-from-right-2">
              <Dropdown label="Marke" name="brand" value={formData.brand} options={Object.keys(BRAND_DATA)} />
              <Dropdown label="Modell" name="model" value={formData.model} options={formData.brand ? BRAND_DATA[formData.brand] : []} placeholder={formData.brand ? "Modell..." : "Wähle Marke"} />
              <Dropdown label="Karosserie" name="bodyType" value={formData.bodyType} options={BODY_TYPES} />
            </div>
          )}
          {currentPage === 2 && (
            <div className="grid grid-cols-1 gap-3 animate-in fade-in slide-in-from-right-2">
              <Dropdown label="Kraftstoff" name="fuelType" value={formData.fuelType} options={FUELS} />
              <Dropdown label="Getriebe" name="transmission" value={formData.transmission} options={TRANSMISSIONS} />
              <Dropdown label="Leistung" name="power" value={formData.power} options={POWER_OPTIONS.map(ps => ({ label: `${ps} PS`, val: ps }))} />
            </div>
          )}
          {currentPage === 3 && (
            <div className="grid grid-cols-1 gap-3 animate-in fade-in slide-in-from-right-2">
              <Dropdown label="Erstzulassung" name="year" value={formData.year} options={YEARS} />
              <Dropdown label="Kilometerstand" name="mileage" value={formData.mileage} options={MILEAGE_OPTIONS.map(km => ({ label: `${new Intl.NumberFormat('de-DE').format(parseInt(km))} km`, val: km }))} />
              <Dropdown label="Optik" name="condition" value={formData.condition} options={CONDITIONS} />
            </div>
          )}
          {currentPage === 4 && (
            <div className="text-center space-y-3 py-1">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto text-brand-orange">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="text-[11px] lg:text-sm text-slate-500 font-bold max-w-[180px] mx-auto leading-tight">Bereit zur kostenlosen KI-Preisermittlung für Ihren {formData.brand}.</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mt-1">
          {currentPage > 1 && (
            <button type="button" onClick={prevPage} className="w-1/3 h-[42px] lg:h-[60px] rounded-lg border border-slate-200 text-[#004d7c] font-black text-xs lg:text-base flex items-center justify-center gap-1 active:scale-95 transition-all">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7" /></svg>
              Zurück
            </button>
          )}
          {currentPage < 4 ? (
            <button type="button" disabled={currentPage === 1 && (!formData.brand || !formData.model)} onClick={nextPage} className="flex-grow h-[42px] lg:h-[60px] bg-[#004d7c] disabled:opacity-50 text-white rounded-lg font-black text-xs lg:text-base transition-all active:scale-95">
              Nächster Schritt
            </button>
          ) : (
            <button type="submit" className="flex-grow h-[42px] lg:h-[60px] bg-brand-orange text-white rounded-lg font-black text-xs lg:text-base shadow-lg active:scale-95">
              Preis berechnen
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ValuationForm;
