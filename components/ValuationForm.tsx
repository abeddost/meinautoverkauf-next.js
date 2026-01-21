
import React, { useState, useEffect } from 'react';
import { CarDetails, ValuationResult } from '../types';
import { getCarValuation } from '../geminiService';

interface ValuationFormProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

type FormPage = 1 | 2 | 3 | 4;

const BRAND_DATA: Record<string, string[]> = {
  'Audi': ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q4', 'Q5', 'Q7', 'Q8', 'TT', 'R8', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'SQ2', 'SQ5', 'SQ7', 'SQ8', 'V8', 'Quattro', '100', '80', '90', 'e-tron', 'e-tron GT', 'Q4 e-tron', 'Q8 e-tron'],
  'BMW': ['1er', '2er', '3er', '4er', '5er', '6er', '7er', '8er', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'XM', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M8', 'Z1', 'Z3', 'Z4', 'Z8', 'i3', 'i4', 'i7', 'i8', 'iX', 'iX1', 'iX2', 'iX3'],
  'Ford': ['Fiesta', 'Focus', 'Mondeo', 'Mustang', 'Mustang Mach-E', 'Kuga', 'Puma', 'Explorer', 'S-Max', 'Galaxy', 'EcoSport', 'Ka', 'Ka+', 'C-Max', 'B-Max', 'Ranger', 'Transit', 'Tourneo', 'Capri', 'Escort', 'Sierra', 'Scorpio', 'Fusion'],
  'Hyundai': ['i10', 'i20', 'i30', 'i40', 'Ioniq', 'Ioniq 5', 'Ioniq 6', 'Kona', 'Tucson', 'Santa Fe', 'Bayon', 'Getz', 'Matrix', 'Veloster', 'Genesis', 'Nexo', 'Staria', 'Terracan', 'Trajet'],
  'Mercedes-Benz': ['A-Klasse', 'B-Klasse', 'C-Klasse', 'E-Klasse', 'S-Klasse', 'G-Klasse', 'CLA', 'CLS', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'SL', 'SLC', 'SLK', 'AMG GT', 'AMG GT 4-Türer', 'EQA', 'EQB', 'EQC', 'EQE', 'EQS', 'EQV', 'Vito', 'V-Klasse', 'X-Klasse', 'Sprinter', 'Citan'],
  'Opel': ['Corsa', 'Astra', 'Insignia', 'Mokka', 'Crossland', 'Grandland', 'Combo', 'Zafira', 'Adam', 'Karl', 'Meriva', 'Antara', 'Cascada', 'Vectra', 'Omega', 'Tigra', 'Vivaro', 'Movano', 'Frontera', 'Signum', 'Agila'],
  'Renault': ['Twingo', 'Clio', 'Megane', 'Captur', 'Kadjar', 'Austral', 'Arkana', 'Zoe', 'Scenic', 'Grand Scenic', 'Espace', 'Koleos', 'Laguna', 'Modus', 'Kangoo', 'Master', 'Rafale', 'Talisman', 'Fluence', 'Latitude'],
  'Skoda': ['Fabia', 'Scala', 'Octavia', 'Superb', 'Kamiq', 'Karoq', 'Kodiaq', 'Enyaq', 'Citigo', 'Rapid', 'Yeti', 'Roomster', 'Felicia', 'Favorit'],
  'Toyota': ['Aygo', 'Aygo X', 'Yaris', 'Yaris Cross', 'Corolla', 'Camry', 'Prius', 'C-HR', 'RAV4', 'Highlander', 'Land Cruiser', 'Hilux', 'Supra', 'GR86', 'Mirai', 'Proace', 'Verso', 'Avensis', 'Auris', 'Urban Cruiser'],
  'VW': ['Up!', 'Polo', 'Golf', 'Golf Sportsvan', 'Golf Variant', 'ID.3', 'ID.4', 'ID.5', 'ID.7', 'ID. Buzz', 'Passat', 'Arteon', 'T-Cross', 'T-Roc', 'Tiguan', 'Tiguan Allspace', 'Touareg', 'Touran', 'Sharan', 'Multivan', 'Amarok', 'Scirocco', 'Beetle', 'Eos', 'Phaeton', 'Jetta', 'Fox', 'Lupo', 'Bora', 'New Beetle'],
  'Fiat': ['500', '500X', '500L', 'Panda', 'Tipo', 'Punto', 'Bravo', 'Croma', 'Doblo', 'Fiorino', 'Sedici', 'Stilo', 'Ulysse', 'Grande Punto', 'Qubo', 'Freemont', 'Fullback'],
  'Mazda': ['2', '3', '6', 'CX-3', 'CX-30', 'CX-5', 'CX-60', 'CX-80', 'MX-5', 'MX-30', 'RX-8', 'MPV', 'Premacy', 'Tribute', 'BT-50'],
  'Nissan': ['Micra', 'Juke', 'Qashqai', 'X-Trail', 'Leaf', 'Ariya', 'Townstar', 'Primastar', 'Interstar', 'Navara', '370Z', '350Z', 'GT-R', 'Pulsar', 'Note', 'Primera', 'Almera', 'Pathfinder', 'Patrol', 'Murano', 'Tiida'],
  'Seat': ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco', 'Alhambra', 'Mii', 'Toledo', 'Altea', 'Exeo', 'Cordoba', 'Arosa'],
  'Volvo': ['V40', 'V60', 'V90', 'S60', 'S90', 'XC40', 'XC60', 'XC90', 'C40', 'EX30', 'EX90', 'V50', 'S40', 'C30', 'C70', 'V70', 'S80', 'XC70'],
  'Tesla': ['Model 3', 'Model Y', 'Model S', 'Model X', 'Roadster', 'Cybertruck'],
  'Cupra': ['Formentor', 'Leon', 'Ateca', 'Born', 'Tavascan', 'Terramar'],
  'Kia': ['Picanto', 'Rio', 'Ceed', 'Proceed', 'Xceed', 'Stinger', 'Niro', 'Sportage', 'Sorento', 'EV6', 'EV9', 'Stonic', 'Soul', 'Venga', 'Optima', 'Carens', 'Carnival', 'Magentis'],
  'Peugeot': ['108', '208', '308', '408', '508', '2008', '3008', '5008', 'Rifter', 'Partner', 'Expert', 'Boxer', 'RCZ', '207', '307', '407', '607', '807', '1007', '4007', '4008', '5008'],
  'Citroen': ['C1', 'C3', 'C3 Aircross', 'C4', 'C4 X', 'C4 Cactus', 'C5 Aircross', 'C5 X', 'Berlingo', 'Spacetourer', 'Jumpy', 'Jumper', 'DS3', 'DS4', 'DS5', 'C2', 'C6', 'C8', 'Nemo'],
  'Dacia': ['Sandero', 'Logan', 'Duster', 'Jogger', 'Spring', 'Lodgy', 'Dokker'],
  'Mitsubishi': ['Space Star', 'Colt', 'ASX', 'Eclipse Cross', 'Outlander', 'L200', 'Pajero', 'Lancer', 'Galant', 'Grandis'],
  'Honda': ['Civic', 'Jazz', 'HR-V', 'CR-V', 'ZR-V', 'e', 'e:Ny1', 'Accord', 'Insight', 'S2000', 'FR-V', 'Legend'],
  'Suzuki': ['Swift', 'Ignis', 'Vitara', 'S-Cross', 'Jimny', 'Swace', 'Across', 'Alto', 'Splash', 'Baleno', 'Grand Vitara', 'Liana', 'Kizashi'],
  'Land Rover': ['Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque', 'Defender', 'Discovery', 'Discovery Sport', 'Freelander'],
  'Porsche': ['911', '718 Boxster', '718 Cayman', 'Taycan', 'Panamera', 'Macan', 'Cayenne'],
  'Mini': ['One', 'Cooper', 'Cooper S', 'Cooper D', 'Cooper SD', 'JCW', 'Clubman', 'Countryman', 'Paceman', 'Convertible'],
  'Alfa Romeo': ['Giulietta', 'Giulia', 'Stelvio', 'Tonale', 'Mito', '159', '156', 'Brera', 'Spider'],
  'Jeep': ['Renegade', 'Compass', 'Grand Cherokee', 'Wrangler', 'Cherokee', 'Avenger', 'Gladiator'],
  'Lancia': ['Ypsilon', 'Delta', 'Musa', 'Thema', 'Voyager', 'Phedra'],
  'Jaguar': ['XE', 'XF', 'XJ', 'E-Pace', 'F-Pace', 'I-Pace', 'F-Type', 'XK'],
  'Sonstige': ['Andere Marke']
};

const BODY_TYPES = ['Limousine', 'Kombi', 'SUV / Geländewagen', 'Kleinwagen', 'Cabrio', 'Coupé', 'Van / Minibus', 'Pickup', 'Transporter'];
const FUELS = ['Benzin', 'Diesel', 'Elektro', 'Hybrid (Benzin)', 'Hybrid (Diesel)', 'LPG (Autogas)', 'CNG (Erdgas)'];
const TRANSMISSIONS = ['Manuelles Getriebe', 'Automatikgetriebe', 'Halbautomatik'];
const POWER_OPTIONS = Array.from({ length: 55 }, (_, i) => ((i + 5) * 10).toString());
const YEARS = Array.from({ length: 35 }, (_, i) => (2024 - i).toString());
const MILEAGE_OPTIONS = Array.from({ length: 81 }, (_, i) => (i * 5000).toString());
const CONDITIONS = [
  { val: 'Excellent', label: 'Neuwertig / Top' },
  { val: 'Good', label: 'Gepflegt / Normal' },
  { val: 'Fair', label: 'Mängel / Gebraucht' },
  { val: 'Poor', label: 'Defekt / Unfall' }
];

const ValuationForm: React.FC<ValuationFormProps> = ({ onValuationComplete }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<FormPage>(1);
  const [loadingStep, setLoadingStep] = useState(0);
  
  const [formData, setFormData] = useState<CarDetails>({
    brand: '',
    model: '',
    year: '2019',
    mileage: '75000',
    fuelType: 'Benzin',
    transmission: 'Automatikgetriebe',
    power: '150',
    bodyType: 'Limousine',
    condition: 'Good'
  });

  useEffect(() => {
    let interval: any;
    if (loading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep(prev => (prev < 4 ? prev + 1 : prev));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [loading]);

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
      alert("Fehler. Bitte erneut versuchen.");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-brand-dark rounded-2xl lg:rounded-[2.5rem] p-6 lg:p-8 flex flex-col items-center justify-center min-h-[300px] lg:min-h-[550px] text-white relative border border-white/10">
        <div className="w-16 h-16 lg:w-32 lg:h-32 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mb-6"></div>
        <h2 className="text-lg lg:text-2xl font-black text-center">Analysiere Marktdaten...</h2>
      </div>
    );
  }

  const Dropdown = ({ label, name, value, options, placeholder = "Wählen..." }: any) => (
    <div className="flex flex-col gap-0.5">
      <label className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
        {label}
      </label>
      <div className="relative group">
        <select
          name={name}
          value={value}
          onChange={handleSelectChange}
          className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-2xl px-3 py-2.5 lg:px-6 lg:py-4 text-sm lg:text-base font-bold text-[#004d7c] appearance-none cursor-pointer focus:border-brand-orange outline-none"
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt: any) => {
            const isObj = typeof opt === 'object';
            const val = isObj ? opt.val : opt;
            const labelStr = isObj ? opt.label : opt;
            return <option key={val} value={val}>{labelStr}</option>
          })}
        </select>
        <div className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
          <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl lg:rounded-[3rem] shadow-xl overflow-hidden text-brand-dark border border-slate-100 flex flex-col w-full max-w-2xl mx-auto min-h-[360px] lg:min-h-[620px]">
      <div className="bg-slate-50 border-b border-slate-100 px-4 lg:px-10 py-3 lg:py-6 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="bg-brand-orange text-white text-[8px] lg:text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
              Schritt {currentPage}/4
            </span>
            <span className="text-[9px] lg:text-xs font-bold text-slate-400 uppercase">
              {currentPage === 1 && "Fahrzeug"} {currentPage === 2 && "Technik"} {currentPage === 3 && "Zustand"} {currentPage === 4 && "Check"}
            </span>
          </div>
          <div className="flex gap-1 lg:gap-2">
            {[1, 2, 3, 4].map(p => (
              <div key={p} className={`h-1 lg:h-1.5 rounded-full transition-all duration-500 ${currentPage >= p ? 'w-6 lg:w-16 bg-brand-orange' : 'w-2 bg-slate-200'}`}></div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 lg:p-10 flex-grow flex flex-col justify-between gap-3 lg:gap-6">
        <div className="space-y-3 lg:space-y-6">
          {currentPage === 1 && (
            <div className="grid grid-cols-1 gap-3 lg:gap-5 animate-in fade-in slide-in-from-right-2">
              <Dropdown label="Marke" name="brand" value={formData.brand} options={Object.keys(BRAND_DATA)} />
              <Dropdown label="Modell" name="model" value={formData.model} options={formData.brand ? BRAND_DATA[formData.brand] : []} />
              <Dropdown label="Karosserie" name="bodyType" value={formData.bodyType} options={BODY_TYPES} />
            </div>
          )}
          {currentPage === 2 && (
            <div className="grid grid-cols-1 gap-3 lg:gap-5 animate-in fade-in slide-in-from-right-2">
              <Dropdown label="Kraftstoff" name="fuelType" value={formData.fuelType} options={FUELS} />
              <Dropdown label="Getriebe" name="transmission" value={formData.transmission} options={TRANSMISSIONS} />
              <Dropdown label="Leistung" name="power" value={formData.power} options={POWER_OPTIONS.map(ps => ({ label: `${ps} PS`, val: ps }))} />
            </div>
          )}
          {currentPage === 3 && (
            <div className="grid grid-cols-1 gap-3 lg:gap-5 animate-in fade-in slide-in-from-right-2">
              <Dropdown label="Erstzulassung" name="year" value={formData.year} options={YEARS} />
              <Dropdown label="Kilometerstand" name="mileage" value={formData.mileage} options={MILEAGE_OPTIONS.map(km => ({ label: km === '0' ? 'Neuwagen' : `${new Intl.NumberFormat('de-DE').format(parseInt(km))} km`, val: km }))} />
              <Dropdown label="Optik" name="condition" value={formData.condition} options={CONDITIONS} />
            </div>
          )}
          {currentPage === 4 && (
            <div className="text-center space-y-4 lg:space-y-6 py-2">
              <div className="w-12 h-12 lg:w-20 lg:h-20 bg-orange-100 rounded-lg flex items-center justify-center mx-auto text-brand-orange">
                <svg className="w-6 h-6 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="text-xs lg:text-base text-slate-500 font-bold max-w-[200px] mx-auto">Bereit zur kostenlosen KI-Preisermittlung für Ihren {formData.brand}.</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 lg:gap-4 mt-1">
          {currentPage > 1 && (
            <button type="button" onClick={prevPage} className="w-1/3 h-[48px] lg:h-[68px] rounded-lg lg:rounded-2xl border border-slate-200 text-[#004d7c] font-black text-xs lg:text-lg flex items-center justify-center gap-1 active:scale-95 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7" /></svg>
              Zurück
            </button>
          )}
          {currentPage < 4 ? (
            <button type="button" disabled={currentPage === 1 && (!formData.brand || !formData.model)} onClick={nextPage} className="flex-grow h-[48px] lg:h-[68px] bg-[#004d7c] disabled:opacity-50 text-white rounded-lg lg:rounded-2xl font-black text-sm lg:text-xl transition-all active:scale-95">
              Weiter
            </button>
          ) : (
            <button type="submit" className="flex-grow h-[48px] lg:h-[68px] bg-brand-orange text-white rounded-lg lg:rounded-2xl font-black text-sm lg:text-xl shadow-lg active:scale-95">
              Preis berechnen
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ValuationForm;
