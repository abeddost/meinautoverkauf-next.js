
import React, { useState, useEffect } from 'react';
import { CarDetails, ValuationResult } from '../types';
import { getCarValuation } from '../geminiService';

interface ValuationFormProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

// Pagination logic: 4 Pages (3 items each, last page is summary)
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
const POWER_OPTIONS = Array.from({ length: 55 }, (_, i) => ((i + 5) * 10).toString()); // 50 to 590 PS
const YEARS = Array.from({ length: 35 }, (_, i) => (2024 - i).toString()); // Last 35 years
const MILEAGE_OPTIONS = Array.from({ length: 81 }, (_, i) => (i * 5000).toString()); // 0 to 400,000 km
const CONDITIONS = [
  { val: 'Excellent', label: 'Neuwertig / Top-Zustand' },
  { val: 'Good', label: 'Gepflegt / Normale Gebrauchsspuren' },
  { val: 'Fair', label: 'Starke Gebrauchsspuren / Mängel' },
  { val: 'Poor', label: 'Defekt / Unfallfahrzeug' }
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
      }, 1200);
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
      setTimeout(() => onValuationComplete(formData, result), 500);
    } catch (error: any) {
      alert("Bewertung fehlgeschlagen. Bitte versuchen Sie es später erneut.");
      setLoading(false);
    }
  };

  if (loading) {
    const loadingLabels = ["KI-System startet...", "Marktdaten-Abgleich...", "Trend-Analyse...", "Fahrzeug-Prüfung...", "Preis wird generiert..."];
    return (
      <div className="bg-brand-dark rounded-[2.5rem] shadow-2xl p-8 flex flex-col items-center justify-center min-h-[550px] text-white overflow-hidden relative border border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(249,115,22,0.1),transparent)] pointer-events-none"></div>
        <div className="relative mb-10">
          <div className="w-32 h-32 border-4 border-white/5 rounded-full flex items-center justify-center">
             <div className="w-24 h-24 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-full animate-pulse flex items-center justify-center">
                   <svg className="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
             </div>
          </div>
        </div>
        <h2 className="text-2xl lg:text-3xl font-black mb-2 text-center">{loadingLabels[loadingStep]}</h2>
        <p className="text-brand-orange font-black uppercase text-[10px] tracking-[0.4em] mb-10">AI Valuation Engine 6.0</p>
        <div className="w-full max-w-xs h-2 bg-white/10 rounded-full overflow-hidden mb-10 shadow-inner">
           <div className="h-full bg-brand-orange transition-all duration-1000 ease-out shadow-[0_0_20px_#f97316]" style={{ width: `${(loadingStep + 1) * 20}%` }}></div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-[9px] font-black uppercase tracking-widest text-slate-500 opacity-70">
           <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Live Market Sync</div>
           <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Price Crawler</div>
           <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Valuation Log</div>
           <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Best Price Match</div>
        </div>
      </div>
    );
  }

  const Dropdown = ({ label, name, value, options, placeholder = "Bitte wählen..." }: any) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-black text-slate-400 uppercase tracking-widest ml-1">
        {label}
      </label>
      <div className="relative group">
        <select
          name={name}
          value={value}
          onChange={handleSelectChange}
          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-base font-bold text-[#004d7c] appearance-none cursor-pointer focus:border-brand-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all group-hover:border-slate-200 shadow-sm"
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt: any) => {
            const isObj = typeof opt === 'object';
            const val = isObj ? opt.val : opt;
            const labelStr = isObj ? opt.label : opt;
            return <option key={val} value={val}>{labelStr}</option>
          })}
        </select>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-brand-orange transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-[2rem] lg:rounded-[3rem] shadow-2xl overflow-hidden text-brand-dark border border-slate-100 flex flex-col w-full max-w-2xl mx-auto min-h-[560px] lg:min-h-[620px]">
      {/* Navigation Header */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 lg:px-10 py-6 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-brand-orange text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Schritt {currentPage}/4
            </span>
            <span className="text-xs font-bold text-slate-400">
              {currentPage === 1 && "Fahrzeugmodell wählen"}
              {currentPage === 2 && "Technische Details"}
              {currentPage === 3 && "Kilometer & Zustand"}
              {currentPage === 4 && "Berechnung starten"}
            </span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map(p => (
              <div key={p} className={`h-1.5 rounded-full transition-all duration-500 ${currentPage >= p ? 'w-10 lg:w-16 bg-brand-orange' : 'w-4 bg-slate-200'}`}></div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 lg:p-10 flex-grow flex flex-col justify-between gap-6">
        <div className="space-y-6">
          {currentPage === 1 && (
            <div className="grid grid-cols-1 gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
              <Dropdown label="Marke" name="brand" value={formData.brand} options={Object.keys(BRAND_DATA)} />
              <Dropdown 
                label="Modell" 
                name="model" 
                value={formData.model} 
                options={formData.brand ? BRAND_DATA[formData.brand] : []} 
                placeholder={formData.brand ? "Modell auswählen..." : "Wähle erst die Marke"}
              />
              <Dropdown label="Bauform / Karosserie" name="bodyType" value={formData.bodyType} options={BODY_TYPES} />
            </div>
          )}

          {currentPage === 2 && (
            <div className="grid grid-cols-1 gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
              <Dropdown label="Kraftstoffart" name="fuelType" value={formData.fuelType} options={FUELS} />
              <Dropdown label="Getriebe" name="transmission" value={formData.transmission} options={TRANSMISSIONS} />
              <Dropdown label="Motorleistung" name="power" value={formData.power} options={POWER_OPTIONS.map(ps => ({ label: `${ps} PS`, val: ps }))} />
            </div>
          )}

          {currentPage === 3 && (
            <div className="grid grid-cols-1 gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
              <Dropdown label="Erstzulassung" name="year" value={formData.year} options={YEARS} />
              <Dropdown 
                label="Kilometerstand" 
                name="mileage" 
                value={formData.mileage} 
                options={MILEAGE_OPTIONS.map(km => ({ 
                  label: km === '0' ? 'Neufahrzeug' : `${new Intl.NumberFormat('de-DE').format(parseInt(km))} km`, 
                  val: km 
                }))} 
              />
              <Dropdown label="Optischer Zustand" name="condition" value={formData.condition} options={CONDITIONS} />
            </div>
          )}

          {currentPage === 4 && (
            <div className="text-center space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 lg:pt-4">
              <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto text-brand-orange shadow-inner">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="space-y-3">
                 <h3 className="text-2xl font-black text-[#004d7c] tracking-tight">Analyse bereit!</h3>
                 <p className="text-base text-slate-500 font-bold leading-relaxed max-w-sm mx-auto">
                   Sie erhalten eine Bewertung für Ihren <span className="text-brand-orange">{formData.brand} {formData.model}</span>.
                 </p>
              </div>
              <div className="p-5 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-[11px] font-bold text-slate-400 leading-relaxed max-w-sm mx-auto">
                Klicken Sie auf "Preis berechnen", um die kostenlose Marktwert-Ermittlung durch unsere KI zu starten.
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-4">
          {currentPage > 1 && (
            <button
              type="button"
              onClick={prevPage}
              className="flex-grow lg:flex-none lg:w-1/3 h-[68px] rounded-2xl border-2 border-slate-100 text-[#004d7c] font-black text-lg hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-3 active:scale-95 group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7" /></svg>
              Zurück
            </button>
          )}
          
          {currentPage < 4 ? (
            <button
              type="button"
              disabled={currentPage === 1 && (!formData.brand || !formData.model)}
              onClick={nextPage}
              className="flex-grow h-[68px] bg-[#004d7c] hover:bg-[#003d63] disabled:opacity-50 text-white rounded-2xl font-black text-xl shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-4 active:scale-95 group"
            >
              Nächster Schritt
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>
            </button>
          ) : (
            <button
              type="submit"
              className="flex-grow h-[68px] bg-brand-orange hover:bg-orange-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-orange-100 transition-all transform active:scale-95 flex items-center justify-center gap-4 group"
            >
              Preis berechnen
              <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ValuationForm;
