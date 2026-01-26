
import React, { useState, useEffect } from 'react';
import { CarDetails, ValuationResult } from '../types';
import { getCarValuation } from '../geminiService';

interface ValuationFormProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

type FormPage = 1 | 2 | 3 | 4;

const BRAND_DATA: Record<string, string[]> = {
  'Abarth': ['500', '595', '695', '124 Spider', 'Punto', 'Grande Punto'],
  'Alfa Romeo': ['Giulia', 'Stelvio', 'Tonale', 'Giulietta', 'Mito', 'Brera', 'Spider', '159', '147', '156', 'GT', '4C', '8C'],
  'Aston Martin': ['DB11', 'Vantage', 'DBS', 'DBX', 'Rapide', 'Vanquish', 'DB9'],
  'Audi': ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q4 e-tron', 'Q5', 'Q7', 'Q8', 'TT', 'e-tron', 'R8', 'S1', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'RS Q3', 'RS Q8'],
  'Bentley': ['Continental GT', 'Bentayga', 'Flying Spur', 'Mulsanne', 'Arnage'],
  'BMW': ['1er', '2er', '3er', '4er', '5er', '6er', '7er', '8er', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z1', 'Z3', 'Z4', 'Z8', 'i3', 'i4', 'i7', 'i8', 'iX', 'iX1', 'iX3', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M8'],
  'Cadillac': ['XT4', 'XT5', 'Escalade', 'CT4', 'CT5', 'CTS', 'SRX'],
  'Chevrolet': ['Camaro', 'Corvette', 'Spark', 'Cruze', 'Captiva', 'Aveo', 'Orlando', 'Matiz', 'Volt'],
  'Chrysler': ['300C', 'Voyager', 'Grand Voyager', 'Crossfire', 'PT Cruiser'],
  'Citroën': ['C1', 'C2', 'C3', 'C3 Aircross', 'C4', 'C4 Cactus', 'C4 Picasso', 'C5', 'C5 Aircross', 'C5 X', 'C6', 'C8', 'Berlingo', 'Jumpy', 'Spacetourer', 'Nemo', 'Xsara', 'Saxo'],
  'Cupra': ['Formentor', 'Leon', 'Born', 'Ateca', 'Tavascan'],
  'Dacia': ['Sandero', 'Duster', 'Jogger', 'Spring', 'Lodgy', 'Logan', 'Dokker'],
  'Daihatsu': ['Sirion', 'Cuore', 'Terios', 'Materia', 'Copen', 'Charade'],
  'Dodge': ['Challenger', 'Charger', 'RAM', 'Durango', 'Nitro', 'Caliber', 'Journey'],
  'DS Automobiles': ['DS 3', 'DS 3 Crossback', 'DS 4', 'DS 5', 'DS 7 Crossback', 'DS 9'],
  'Ferrari': ['488', 'F8 Tributo', 'Roma', 'Portofino', 'SF90', 'Purosangue', '812 Superfast', '458 Italia', 'California', 'FF'],
  'Fiat': ['500', '500X', '500L', 'Panda', 'Tipo', 'Ducato', 'Punto', 'Grande Punto', 'Evo', 'Bravo', 'Stilo', 'Sedici', 'Fullback', 'Talento', 'Croma', 'Multipla', 'Barchetta', 'Coupe'],
  'Ford': ['Ka', 'Ka+', 'Fiesta', 'Focus', 'Mondeo', 'Mustang', 'Mustang Mach-E', 'Kuga', 'Puma', 'Ranger', 'Transit', 'Tourneo Custom', 'EcoSport', 'S-Max', 'Galaxy', 'C-Max', 'B-Max', 'Edge', 'Explorer', 'Fusion'],
  'Genesis': ['G70', 'G80', 'G90', 'GV60', 'GV70', 'GV80'],
  'Honda': ['Civic', 'Jazz', 'CR-V', 'HR-V', 'ZR-V', 'e', 'Accord', 'Insight', 'S2000', 'FR-V', 'Legend', 'Prelude'],
  'Hyundai': ['i10', 'i20', 'i30', 'Kona', 'Tucson', 'Ioniq', 'Ioniq 5', 'Ioniq 6', 'Santa Fe', 'Bayon', 'Staria', 'Veloster', 'ix20', 'ix35', 'ix55', 'Genesis', 'Getz', 'Accent', 'Matrix', 'Coupe'],
  'Infiniti': ['Q30', 'Q50', 'Q60', 'Q70', 'QX30', 'QX50', 'QX70'],
  'Jaguar': ['XE', 'XF', 'XJ', 'E-Pace', 'F-Pace', 'I-Pace', 'F-Type', 'S-Type', 'X-Type', 'XK'],
  'Jeep': ['Renegade', 'Compass', 'Cherokee', 'Grand Cherokee', 'Wrangler', 'Gladiator', 'Avenger', 'Patriot', 'Commander'],
  'Kia': ['Picanto', 'Rio', 'Ceed', 'Sportage', 'Niro', 'EV6', 'EV9', 'Sorento', 'Stinger', 'XCeed', 'Stonic', 'Soul', 'Venga', 'Carens', 'Optima', 'Carnival', 'Magentis'],
  'Lamborghini': ['Urus', 'Huracán', 'Aventador', 'Revuelto', 'Gallardo', 'Murciélago'],
  'Lancia': ['Ypsilon', 'Delta', 'Thema', 'Voyager', 'Musa', 'Phedra', 'Lybra', 'Kappa', 'Thesis'],
  'Land Rover': ['Defender', 'Discovery', 'Discovery Sport', 'Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque', 'Freelander'],
  'Lexus': ['UX', 'NX', 'RX', 'RZ', 'ES', 'LS', 'LC', 'IS', 'CT', 'GS', 'SC'],
  'Lotus': ['Emira', 'Evija', 'Eletre', 'Elise', 'Exige', 'Evora'],
  'Maserati': ['Ghibli', 'Levante', 'Quattroporte', 'Grecale', 'MC20', 'GranTurismo', 'GranCabrio'],
  'Mazda': ['2', '3', '6', 'CX-3', 'CX-30', 'CX-5', 'CX-60', 'CX-80', 'MX-30', 'MX-5', 'RX-8', '5', 'Premacy', 'MPV', 'Tribute'],
  'McLaren': ['720S', 'Artura', 'GT', '570S', '650S', 'MP4-12C'],
  'Mercedes-Benz': ['A-Klasse', 'B-Klasse', 'C-Klasse', 'E-Klasse', 'S-Klasse', 'CLA', 'CLS', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'G-Klasse', 'EQA', 'EQB', 'EQC', 'EQE', 'EQS', 'EQV', 'V-Klasse', 'Vito', 'Sprinter', 'Citan', 'X-Klasse', 'SL', 'SLC', 'SLK', 'SLS', 'AMG GT', 'R-Klasse', 'CLK'],
  'MG': ['MG4', 'MG5', 'ZS', 'HS', 'EHS', 'Marvel R', 'Cyberster', 'MG3', 'TF'],
  'Mini': ['One', 'Cooper', 'Cooper S', 'Cooper D', 'Cooper SD', 'John Cooper Works', 'Countryman', 'Clubman', 'Cabrio', 'Coupe', 'Roadster', 'Paceman'],
  'Mitsubishi': ['Space Star', 'Colt', 'ASX', 'Eclipse Cross', 'Outlander', 'L200', 'Pajero', 'Lancer', 'Galant', 'Grandis', 'I-MiEV'],
  'Nissan': ['Micra', 'Qashqai', 'Juke', 'X-Trail', 'Leaf', 'Ariya', 'GT-R', 'Z', '370Z', '350Z', 'Navara', 'Note', 'Pulsar', 'Tiida', 'Primera', 'Almera', 'Pathfinder', 'Murano', 'Terrano', 'Pixo', 'NV200'],
  'Opel': ['Corsa', 'Astra', 'Insignia', 'Mokka', 'Grandland', 'Crossland', 'Combo', 'Zafira Life', 'Adam', 'Karl', 'Agila', 'Antara', 'Meriva', 'Zafira', 'Vectra', 'Signum', 'Omega', 'Tigra', 'Speedster', 'Casca', 'Ampera'],
  'Peugeot': ['107', '108', '206', '207', '208', '307', '308', '407', '408', '508', '607', '807', '1007', '2008', '3008', '4007', '4008', '5008', 'RCZ', 'Partner', 'Rifter', 'Expert', 'Traveller', 'Bipper', 'Ion'],
  'Polestar': ['Polestar 1', 'Polestar 2', 'Polestar 3', 'Polestar 4'],
  'Porsche': ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan', '718 Boxster', '718 Cayman', '918 Spyder', 'Carrera GT'],
  'Renault': ['Twingo', 'Clio', 'Megane', 'Megane E-Tech', 'Captur', 'Zoe', 'Scenic', 'Grand Scenic', 'Austral', 'Arkana', 'Kadjar', 'Koleos', 'Kangoo', 'Trafic', 'Espace', 'Rafale', 'Laguna', 'Modus', 'Fluence', 'Latitude', 'Wind', 'Twizy'],
  'Saab': ['9-3', '9-5', '900', '9000'],
  'Seat': ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco', 'Alhambra', 'Mii', 'Toledo', 'Altea', 'Exeo', 'Cordoba', 'Arosa'],
  'Skoda': ['Fabia', 'Scala', 'Octavia', 'Superb', 'Kamiq', 'Karoq', 'Kodiaq', 'Enyaq', 'Citigo', 'Yeti', 'Roomster', 'Rapid', 'Felicia'],
  'Smart': ['Fortwo', 'Forfour', 'Roadster', 'Crossblade', '#1', '#3'],
  'SsangYong': ['Korando', 'Tivoli', 'Rexton', 'Musso', 'Torres', 'Kyron', 'Actyon', 'Rodius'],
  'Subaru': ['Impreza', 'XV', 'Forester', 'Outback', 'Solterra', 'BRZ', 'WRX STI', 'Legacy', 'Justy', 'Levorg', 'Trezia'],
  'Suzuki': ['Swift', 'Ignis', 'Vitara', 'S-Cross', 'Jimny', 'Across', 'Swace', 'Baleno', 'Alto', 'Splash', 'SX4', 'Celerio', 'Grand Vitara', 'Kizashi', 'Liana', 'Wagon R'],
  'Tesla': ['Model 3', 'Model Y', 'Model S', 'Model X', 'Roadster', 'Cybertruck'],
  'Toyota': ['Aygo', 'Aygo X', 'Yaris', 'Yaris Cross', 'Corolla', 'Auris', 'Avensis', 'RAV4', 'C-HR', 'Prius', 'Hilux', 'Land Cruiser', 'Supra', 'Proace City', 'Proace', 'Verso', 'IQ', 'Urban Cruiser', 'GT86', 'GR86', 'Celica', 'MR2', 'bZ4X'],
  'Volvo': ['XC40', 'XC60', 'XC90', 'V40', 'V50', 'V60', 'V70', 'V90', 'S40', 'S60', 'S80', 'S90', 'C30', 'C40', 'C70', 'EX30', 'EX90'],
  'VW': ['up!', 'Polo', 'Golf', 'ID.3', 'ID.4', 'ID.5', 'ID.7', 'ID.Buzz', 'Passat', 'Arteon', 'T-Cross', 'Taigo', 'T-Roc', 'Tiguan', 'Touareg', 'Touran', 'Sharan', 'Caddy', 'Multivan', 'Transporter', 'Caravelle', 'California', 'Amarok', 'Beetle', 'Scirocco', 'Eos', 'Jetta', 'Bora', 'Lupo', 'Fox', 'Phaeton', 'Corrado']
};

const BODY_TYPES = ['Limousine', 'Kombi', 'SUV / Geländewagen', 'Kleinwagen', 'Cabrio', 'Coupé', 'Van', 'Pick-up'];
const FUELS = ['Benzin', 'Diesel', 'Elektro', 'Hybrid', 'LPG / Autogas'];
const TRANSMISSIONS = ['Manuelles Getriebe', 'Automatikgetriebe'];
const YEARS = Array.from({ length: 30 }, (_, i) => (2024 - i).toString());

const MILEAGE_OPTIONS = Array.from({ length: 26 }, (_, i) => {
    const val = (i * 10000).toString();
    const label = i === 0 ? "weniger als 5.000 km" : `bis zu ${new Intl.NumberFormat('de-DE').format(i * 10000)} km`;
    return { val, label };
});

const POWER_RANGES = Array.from({ length: 113 }, (_, i) => {
    const start = 40 + (i * 5);
    const end = start + 5;
    const kwStart = Math.round(start / 1.35962);
    const kwEnd = Math.round(end / 1.35962);
    const label = `${start} - ${end} PS (${kwStart} - ${kwEnd} kW)`;
    return { val: label, label };
});

const CONDITIONS = [
  { val: 'Excellent', label: 'Neuwertig / Top (Keine Kratzer)' },
  { val: 'Good', label: 'Gepflegt / Normal (Gebrauchspuren)' },
  { val: 'Fair', label: 'Mängel / Gebraucht (Wartungsstau)' },
  { val: 'Poor', label: 'Defekt / Unfall (Beschädigt)' }
];

const MATRIX_CHARS = "010110010182736459ABCDEF";

const ValuationForm: React.FC<ValuationFormProps> = ({ onValuationComplete }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<FormPage>(1);
  const [formData, setFormData] = useState<CarDetails>({
    brand: '',
    model: '',
    variant: 'Basis',
    year: '2019',
    mileage: '70000',
    fuelType: 'Benzin',
    transmission: 'Automatikgetriebe',
    power: '100 - 105 PS (74 - 77 kW)',
    bodyType: 'Limousine',
    condition: 'Good',
    vin: '',
    doors: '4/5',
    postalCode: '',
    color: '',
    images: []
  });
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      ...(name === 'brand' ? { model: '' } : {})
    }));
  };

  const nextPage = () => {
    if (currentPage === 1 && (!formData.brand || !formData.model || !formData.year)) return;
    if (currentPage === 2 && (!formData.power || !formData.bodyType || !formData.transmission)) return;
    if (currentPage === 3 && (!formData.mileage || !formData.condition || !formData.fuelType)) return;
    if (currentPage === 4 && (!formData.postalCode || formData.postalCode.length !== 5)) {
      alert('Bitte geben Sie eine gültige 5-stellige Postleitzahl ein.');
      return;
    }
    setCurrentPage(prev => (prev < 4 ? (prev + 1) as FormPage : prev));
  };

  const prevPage = () => setCurrentPage(prev => (prev > 1 ? (prev - 1) as FormPage : prev));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate postal code before submission
    if (!formData.postalCode || formData.postalCode.length !== 5) {
      alert('Bitte geben Sie eine gültige 5-stellige Postleitzahl ein.');
      return;
    }
    
    setLoading(true);
    try {
      const result = await getCarValuation(formData);
      // Extra delay to show off the scanning animation
      setTimeout(() => onValuationComplete(formData, result), 6000);
    } catch (error: any) {
      alert("Fehler bei der Bewertung.");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#0a0f1d] rounded-[1.5rem] lg:rounded-[2.5rem] p-6 lg:p-12 min-h-[450px] lg:min-h-[580px] flex flex-col items-center justify-center text-white shadow-2xl overflow-hidden relative border border-white/5 animate-in fade-in duration-500">
        
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none select-none flex justify-around overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="flex flex-col animate-matrix-drop" style={{ animationDelay: `${Math.random() * 4}s`, animationDuration: `${3 + Math.random() * 4}s` }}>
              {Array.from({ length: 40 }).map((_, j) => (
                <span key={j} className="font-mono text-xs leading-none py-1 text-brand-orange">
                  {MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Pulsing Central Node & Scanning Effect */}
        <div className="relative z-10 mb-8 lg:mb-12 flex items-center justify-center">
            {/* Concentric Pulsing Rings */}
            <div className="absolute w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-brand-orange/20 animate-ping opacity-30"></div>
            <div className="absolute w-48 h-48 lg:w-56 lg:h-56 rounded-full border border-brand-orange/10 animate-pulse opacity-20"></div>
            
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#0f172a] border-4 border-slate-800 flex items-center justify-center relative shadow-[0_0_40px_rgba(249,115,22,0.15)]">
                {/* Laser scan line inside the node */}
                <div className="absolute inset-2 border-t border-brand-orange animate-scan-line opacity-50 z-20"></div>
                
                {/* Dynamic Data Stream Icon */}
                <div className="flex flex-col gap-1 items-center">
                   <div className="w-8 lg:w-10 h-1 bg-brand-orange/40 rounded-full"></div>
                   <div className="w-5 lg:w-6 h-1 bg-brand-orange/60 rounded-full"></div>
                   <div className="w-10 lg:w-12 h-1 bg-brand-orange rounded-full shadow-[0_0_10px_#f97316]"></div>
                   <div className="w-6 lg:w-8 h-1 bg-brand-orange/60 rounded-full"></div>
                </div>
            </div>
        </div>

        {/* Status Text Area */}
        <div className="text-center z-10 space-y-3 lg:space-y-4 mb-8 lg:mb-10">
          <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-white drop-shadow-md uppercase">Berechne Marktwert</h3>
          <div className="flex flex-col items-center gap-1">
             <div className="text-[9px] lg:text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] lg:tracking-[0.4em] animate-pulse">
               Grounding Markt-Analyse
             </div>
             <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
             </div>
          </div>
        </div>

        {/* Complex Progress Tracker */}
        <div className="w-full max-w-xs lg:max-w-sm space-y-3 lg:space-y-4 z-10">
          <div className="flex justify-between items-end mb-1">
            <span className="text-[9px] lg:text-[10px] font-black text-slate-500 uppercase tracking-widest">Dauer: ca. 10-20 Sekunden</span>
            <span className="text-[9px] lg:text-[10px] font-black text-brand-orange">ANALYSE...</span>
          </div>
          
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5 p-0.5">
            <div className="h-full bg-brand-orange rounded-full shadow-[0_0_10px_#f97316] animate-complex-progress transition-all duration-300 ease-out"></div>
          </div>
          
          <div className="flex justify-center">
            <p className="text-[10px] lg:text-[11px] text-slate-400 font-bold uppercase tracking-widest px-6 lg:px-8 py-2 bg-white/5 rounded-lg border border-white/10 text-center leading-relaxed">
              Bitte haben Sie einen Moment Geduld. <br/> Wir ermitteln den Bestpreis.
            </p>
          </div>
        </div>

        <style>{`
          @keyframes matrix-drop {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          @keyframes scan-line {
            0% { transform: translateY(-15px); lg:transform: translateY(-20px); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(15px); lg:transform: translateY(20px); opacity: 0; }
          }
          @keyframes complex-progress {
            0% { width: 0%; }
            15% { width: 10%; }
            30% { width: 45%; }
            45% { width: 48%; }
            60% { width: 75%; }
            85% { width: 92%; }
            100% { width: 98%; }
          }
          .animate-matrix-drop { animation-name: matrix-drop; animation-timing-function: linear; animation-iteration-count: infinite; }
          .animate-scan-line { animation-name: scan-line; animation-duration: 1.5s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
          .animate-complex-progress { animation-name: complex-progress; animation-duration: 5.5s; animation-fill-mode: forwards; animation-timing-function: cubic-bezier(0.1, 0, 0.4, 1); }
        `}</style>
      </div>
    );
  }

  const StepLabel = ({ label }: { label: string }) => (
    <label className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1.5 lg:mb-2 block ml-1">{label}</label>
  );

  return (
    <div className="bg-white rounded-[1.5rem] lg:rounded-[2.5rem] shadow-[0_16px_32px_-8px_rgba(0,0,0,0.15)] lg:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden text-brand-dark flex flex-col w-full border border-white/5">
      {/* Form Header */}
      <div className="px-6 py-4 lg:px-8 lg:py-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
             <div className="bg-brand-orange text-white text-[9px] lg:text-[10px] font-black px-2 py-0.5 lg:px-2.5 lg:py-1 rounded lg:rounded-lg uppercase tracking-tight">
               Schritt {currentPage}/4
             </div>
             <span className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-widest">
               {currentPage === 1 ? "Fahrzeugwahl" : currentPage === 2 ? "Technik" : currentPage === 3 ? "Zustand" : "Details"}
             </span>
          </div>
          <div className="flex gap-1 mt-1">
            {[1, 2, 3, 4].map(p => (
              <div key={p} className={`h-1 lg:h-1.5 rounded-full transition-all duration-500 ${currentPage >= p ? 'w-8 lg:w-10 bg-brand-orange' : 'w-1.5 lg:w-2 bg-slate-200'}`}></div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 lg:p-10 space-y-5 lg:space-y-8 flex-grow flex flex-col justify-between">
        <div className="space-y-4 lg:space-y-6">
          {currentPage === 1 && (
            <div className="grid grid-cols-1 gap-4 lg:gap-6 animate-in fade-in slide-in-from-right-2 duration-300">
              <div>
                <StepLabel label="Automarke" />
                <select name="brand" value={formData.brand} onChange={handleSelectChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all appearance-none cursor-pointer text-sm lg:text-base">
                  <option value="">Bitte wählen...</option>
                  {Object.keys(BRAND_DATA).sort().map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <StepLabel label="Modellreihe" />
                <select name="model" value={formData.model} onChange={handleSelectChange} disabled={!formData.brand} className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all appearance-none disabled:opacity-50 cursor-pointer text-sm lg:text-base">
                  <option value="">{formData.brand ? "Modell wählen..." : "Wähle zuerst die Marke"}</option>
                  {formData.brand && BRAND_DATA[formData.brand].map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <StepLabel label="Erstzulassung" />
                <select name="year" value={formData.year} onChange={handleSelectChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all appearance-none cursor-pointer text-sm lg:text-base">
                  {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div className="grid grid-cols-1 gap-4 lg:gap-6 animate-in fade-in slide-in-from-right-2 duration-300">
              <div>
                <StepLabel label="Motorleistung" />
                <select name="power" value={formData.power} onChange={handleSelectChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all appearance-none cursor-pointer text-sm lg:text-base">
                  {POWER_RANGES.map(p => <option key={p.val} value={p.val}>{p.label}</option>)}
                </select>
              </div>
              <div>
                <StepLabel label="Karosserieform" />
                <select name="bodyType" value={formData.bodyType} onChange={handleSelectChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all appearance-none cursor-pointer text-sm lg:text-base">
                  {BODY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <StepLabel label="Anzahl der Türen *" />
                <select name="doors" value={formData.doors || '4/5'} onChange={handleSelectChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all appearance-none cursor-pointer text-sm lg:text-base">
                  <option value="2/3">2/3 Türen</option>
                  <option value="4/5">4/5 Türen</option>
                  <option value="6/7">6/7 Türen (Van/Bus)</option>
                </select>
              </div>
              <div>
                <StepLabel label="Getriebeart" />
                <select name="transmission" value={formData.transmission} onChange={handleSelectChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all appearance-none cursor-pointer text-sm lg:text-base">
                  {TRANSMISSIONS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div className="grid grid-cols-1 gap-4 lg:gap-6 animate-in fade-in slide-in-from-right-2 duration-300">
              <div>
                <StepLabel label="Laufleistung" />
                <select name="mileage" value={formData.mileage} onChange={handleSelectChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all appearance-none cursor-pointer text-sm lg:text-base">
                  {MILEAGE_OPTIONS.map(o => <option key={o.val} value={o.val}>{o.label}</option>)}
                </select>
              </div>
              <div>
                <StepLabel label="Antrieb / Kraftstoff" />
                <select name="fuelType" value={formData.fuelType} onChange={handleSelectChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all appearance-none cursor-pointer text-sm lg:text-base">
                  {FUELS.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <StepLabel label="Fahrzeugzustand" />
                <div className="grid grid-cols-2 gap-2.5 lg:gap-3">
                  {CONDITIONS.map(c => (
                    <button 
                      key={c.val}
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, condition: c.val as any }))}
                      className={`py-2.5 lg:py-3.5 rounded-lg lg:rounded-xl font-bold text-xs lg:text-sm transition-all border-2 ${formData.condition === c.val ? 'bg-orange-50 border-brand-orange text-brand-orange' : 'bg-slate-50 border-slate-100 text-slate-500'}`}
                    >
                      {c.label.split(' (')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentPage === 4 && (
            <div className="grid grid-cols-1 gap-4 lg:gap-6 animate-in fade-in slide-in-from-right-2 duration-300">
              <div>
                <StepLabel label="Postleitzahl (Standort) *" />
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode || ''}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                    setFormData(prev => ({ ...prev, postalCode: value }));
                  }}
                  placeholder="z.B. 10115"
                  maxLength={5}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all text-sm lg:text-base"
                  required
                />
                <p className="text-xs text-slate-400 mt-1 ml-1">Wird benötigt für regionale Preisermittlung</p>
              </div>
              <div>
                <StepLabel label="Fahrzeug-Identifizierungsnummer (FIN/VIN) - Optional" />
                <input
                  type="text"
                  name="vin"
                  value={formData.vin || ''}
                  onChange={handleSelectChange}
                  placeholder="17-stellige Nummer (z.B. WVWZZZ1KZBW123456)"
                  maxLength={17}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all text-sm lg:text-base uppercase"
                />
              </div>
              <div>
                <StepLabel label="Farbe (Optional)" />
                <input
                  type="text"
                  name="color"
                  value={formData.color || ''}
                  onChange={handleSelectChange}
                  placeholder="z.B. Schwarz, Weiß, Silber..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 font-bold text-[#004d7c] outline-none focus:border-brand-orange transition-all text-sm lg:text-base"
                />
              </div>
              <div>
                <StepLabel label="Fotos hochladen (Optional, max 5)" />
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      if (files.length > 5) {
                        alert('Maximal 5 Bilder erlaubt');
                        return;
                      }
                      // For now, just store file names (in production, you'd upload to Supabase Storage)
                      const fileNames = files.map(f => f.name);
                      setUploadedImages(fileNames);
                      setFormData(prev => ({ ...prev, images: fileNames }));
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg lg:rounded-xl px-4 py-2.5 lg:py-3.5 text-[#004d7c] outline-none focus:border-brand-orange transition-all text-sm lg:text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-orange file:text-white hover:file:bg-orange-600"
                  />
                  {uploadedImages.length > 0 && (
                    <div className="text-xs text-slate-500 font-medium">
                      {uploadedImages.length} Bild(er) ausgewählt: {uploadedImages.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 lg:pt-6 flex flex-col gap-3 lg:gap-4">
          <button 
            type={currentPage === 4 ? "submit" : "button"} 
            onClick={currentPage === 4 ? undefined : nextPage}
            disabled={currentPage === 1 && (!formData.brand || !formData.model)}
            className="w-full bg-gradient-to-b from-[#ff8437] to-[#f97316] text-white py-4 lg:py-5 rounded-lg lg:rounded-2xl font-black text-base lg:text-xl shadow-[0_8px_16px_-4px_rgba(249,115,22,0.3)] lg:shadow-[0_12px_24px_-8px_rgba(249,115,22,0.4)] hover:shadow-[0_16px_32px_-8px_rgba(249,115,22,0.5)] active:scale-[0.97] transition-all disabled:opacity-50"
          >
            {currentPage === 4 ? "Kostenlosen Verkaufspreis erhalten" : "Kostenlos bewerten"}
          </button>
          
          {currentPage > 1 && (
            <button 
              type="button" 
              onClick={prevPage}
              className="w-full text-slate-400 font-bold text-xs lg:text-sm hover:text-slate-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
              Zurück
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ValuationForm;
