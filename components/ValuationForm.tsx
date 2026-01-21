
import React, { useState, useMemo, useEffect } from 'react';
import { CarDetails, ValuationResult, CarSpecs } from '../types';
import { getCarValuation } from '../geminiService';

interface ValuationFormProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
}

type FormPage = 1 | 2 | 3 | 4;

const SPECS_DATABASE: Record<string, Record<string, CarSpecs>> = {
  'Audi': {
    'A1': { variants: ['Basis', 'Advanced', 'S line', 'Citycarver'], powers: ['95', '110', '116', '150', '200', '207'] },
    'A3': { variants: ['Basis', 'Advanced', 'S line', 'S3', 'RS3', 'g-tron', 'e-tron'], powers: ['110', '116', '150', '184', '190', '204', '245', '310', '400'] },
    'A4': { variants: ['Basis', 'Advanced', 'S line', 'S4', 'RS4', 'allroad'], powers: ['122', '136', '150', '163', '190', '204', '245', '265', '341', '354', '450'] },
    'A6': { variants: ['Basis', 'Sport', 'Design', 'S line', 'S6', 'RS6'], powers: ['163', '190', '204', '245', '286', '340', '344', '367', '600'] },
    'Q3': { variants: ['Basis', 'Advanced', 'S line', 'RS Q3', 'Sportback'], powers: ['150', '184', '190', '200', '230', '245', '400'] },
    'Q5': { variants: ['Basis', 'Advanced', 'S line', 'SQ5', 'Sportback'], powers: ['150', '163', '190', '204', '265', '286', '299', '341', '367'] },
  },
  'BMW': {
    '1er': { variants: ['Basis', 'Advantage', 'Sport Line', 'Luxury Line', 'M Sport', 'M135i', 'M140i'], powers: ['109', '116', '136', '140', '150', '178', '190', '224', '306', '340'] },
    '3er': { variants: ['Basis', 'Advantage', 'Sport Line', 'Luxury Line', 'M Sport', 'M3', 'M340i', 'M340d'], powers: ['116', '150', '156', '184', '190', '258', '286', '292', '340', '374', '480', '510'] },
    '5er': { variants: ['Basis', 'Luxury Line', 'M Sport', 'M5', 'M550i', 'M550d'], powers: ['184', '190', '197', '252', '286', '299', '333', '340', '400', '530', '600', '625'] },
    'X1': { variants: ['Basis', 'xLine', 'Sport Line', 'M Sport'], powers: ['116', '136', '140', '150', '170', '190', '211', '218', '231'] },
    'X3': { variants: ['Basis', 'xLine', 'M Sport', 'X3 M', 'M40i', 'M40d'], powers: ['150', '184', '190', '245', '252', '286', '292', '340', '360', '480', '510'] },
  },
  'Mercedes-Benz': {
    'A-Klasse': { variants: ['Basis', 'Style', 'Progressive', 'AMG Line', 'AMG A35', 'AMG A45 S'], powers: ['109', '116', '136', '150', '163', '190', '218', '224', '306', '421'] },
    'C-Klasse': { variants: ['Basis', 'Avantgarde', 'Exclusive', 'AMG Line', 'C43 AMG', 'C63 AMG'], powers: ['156', '170', '184', '197', '200', '204', '245', '258', '265', '300', '408', '510', '680'] },
    'E-Klasse': { variants: ['Avantgarde', 'Exclusive', 'AMG Line', 'E53 AMG', 'E63 AMG'], powers: ['150', '160', '194', '197', '245', '258', '272', '313', '330', '367', '435', '612'] },
    'GLC': { variants: ['Basis', 'Offroad', 'AMG Line', 'GLC 43 AMG', 'GLC 63 AMG'], powers: ['163', '170', '194', '197', '204', '245', '258', '265', '300', '306', '367', '390', '476', '510'] },
  },
  'VW': {
    'Golf': { variants: ['Basis', 'Life', 'Style', 'R-Line', 'GTI', 'GTD', 'GTE', 'R', 'Clubsport'], powers: ['80', '90', '110', '115', '130', '150', '200', '204', '245', '300', '310', '320', '333'] },
    'Polo': { variants: ['Basis', 'Life', 'Style', 'R-Line', 'GTI', 'Fresh'], powers: ['65', '75', '80', '95', '110', '115', '150', '200', '207'] },
    'Passat': { variants: ['Basis', 'Business', 'Elegance', 'R-Line', 'GTE', 'Alltrack'], powers: ['120', '122', '125', '150', '190', '200', '218', '240', '272', '280'] },
    'Tiguan': { variants: ['Basis', 'Life', 'Elegance', 'R-Line', 'Tiguan R', 'Allspace'], powers: ['115', '122', '130', '150', '190', '200', '240', '245', '320'] },
  }
};

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
const MILEAGE_OPTIONS = Array.from({ length: 26 }, (_, i) => (i * 10000).toString());

const CONDITIONS = [
  { val: 'Excellent', label: 'Neuwertig / Top (Keine Kratzer)' },
  { val: 'Good', label: 'Gepflegt / Normal (Gebrauchspuren)' },
  { val: 'Fair', label: 'Mängel / Gebraucht (Wartungsstau)' },
  { val: 'Poor', label: 'Defekt / Unfall (Beschädigt)' }
];

const ValuationForm: React.FC<ValuationFormProps> = ({ onValuationComplete }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<FormPage>(1);
  const [formData, setFormData] = useState<CarDetails>({
    brand: '',
    model: '',
    variant: '',
    year: '2019',
    mileage: '70000',
    fuelType: 'Benzin',
    transmission: 'Automatikgetriebe',
    power: '',
    bodyType: 'Limousine',
    condition: 'Good'
  });

  const currentSpecs = useMemo(() => {
    if (formData.brand && formData.model && SPECS_DATABASE[formData.brand]?.[formData.model]) {
      return SPECS_DATABASE[formData.brand][formData.model];
    }
    let baseVariants = ['Basis / Trend', 'Business Edition', 'Highline / Premium', 'Advanced / Comfort'];
    if (['Audi', 'BMW', 'Mercedes-Benz', 'Porsche'].includes(formData.brand)) {
      baseVariants = ['Basis', 'Sport Paket', 'Premium / Luxury', 'Performance / RS / AMG'];
    }
    
    return {
      variants: baseVariants,
      powers: ['60', '75', '90', '110', '130', '150', '170', '190', '210', '250', '300', '400', '500+']
    };
  }, [formData.brand, formData.model]);

  useEffect(() => {
    if (currentSpecs) {
      setFormData(prev => ({
        ...prev,
        variant: currentSpecs.variants.includes(prev.variant) ? prev.variant : currentSpecs.variants[0],
        power: currentSpecs.powers.includes(prev.power) ? prev.power : currentSpecs.powers[0]
      }));
    }
  }, [currentSpecs]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      ...(name === 'brand' ? { model: '', variant: '', power: '' } : {})
    }));
  };

  const nextPage = () => {
    if (currentPage === 1 && (!formData.brand || !formData.model || !formData.year)) return;
    if (currentPage === 2 && (!formData.variant || !formData.power || !formData.bodyType)) return;
    if (currentPage === 3 && (!formData.mileage || !formData.condition)) return;
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
        <h2 className="text-base font-black">Marktanalyse läuft...</h2>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Prüfe aktuelle Börsenpreise</p>
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
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-[#004d7c] appearance-none outline-none focus:border-brand-orange transition-colors"
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
              {currentPage === 1 && "Fahrzeug"} {currentPage === 2 && "Variante"} {currentPage === 3 && "Zustand"} {currentPage === 4 && "Check"}
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
              <Dropdown label="Marke" name="brand" value={formData.brand} options={Object.keys(BRAND_DATA).sort()} />
              <Dropdown label="Modell" name="model" value={formData.model} options={formData.brand ? BRAND_DATA[formData.brand].sort() : []} placeholder={formData.brand ? "Modell..." : "Wähle zuerst die Marke"} />
              <Dropdown label="Erstzulassung" name="year" value={formData.year} options={YEARS} />
            </div>
          )}
          {currentPage === 2 && (
            <div className="grid grid-cols-1 gap-3 animate-in fade-in slide-in-from-right-2">
              <Dropdown label="Modellvariante / Trim" name="variant" value={formData.variant} options={currentSpecs.variants} />
              <Dropdown label="Wie viel PS" name="power" value={formData.power} options={currentSpecs.powers.map(ps => ({ label: `${ps} PS`, val: ps }))} />
              <Dropdown label="Bauform" name="bodyType" value={formData.bodyType} options={BODY_TYPES} />
            </div>
          )}
          {currentPage === 3 && (
            <div className="grid grid-cols-1 gap-3 animate-in fade-in slide-in-from-right-2">
              <Dropdown label="Kilometerstand" name="mileage" value={formData.mileage} options={MILEAGE_OPTIONS.map(km => ({ label: `${new Intl.NumberFormat('de-DE').format(parseInt(km))} km`, val: km }))} />
              <Dropdown label="Kraftstoff" name="fuelType" value={formData.fuelType} options={FUELS} />
              <Dropdown label="Gesamtzustand" name="condition" value={formData.condition} options={CONDITIONS} />
            </div>
          )}
          {currentPage === 4 && (
            <div className="text-center space-y-4 py-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto text-brand-orange shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black text-brand-dark uppercase tracking-tight">Eingaben geprüft</p>
                <p className="text-[11px] lg:text-sm text-slate-500 font-bold max-w-[200px] mx-auto leading-tight">Berechne jetzt den Bestpreis für Ihren {formData.brand} {formData.model}.</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mt-2">
          {currentPage > 1 && (
            <button type="button" onClick={prevPage} className="w-1/3 h-[42px] lg:h-[60px] rounded-lg border border-slate-200 text-[#004d7c] font-black text-xs lg:text-base flex items-center justify-center gap-1 active:scale-95 transition-all">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7" /></svg>
              Zurück
            </button>
          )}
          {currentPage < 4 ? (
            <button type="button" disabled={currentPage === 1 && (!formData.brand || !formData.model)} onClick={nextPage} className="flex-grow h-[42px] lg:h-[60px] bg-[#004d7c] disabled:opacity-50 text-white rounded-lg font-black text-xs lg:text-base transition-all active:scale-95 shadow-lg shadow-blue-900/10">
              Nächster Schritt
            </button>
          ) : (
            <button type="submit" className="flex-grow h-[42px] lg:h-[60px] bg-brand-orange text-white rounded-lg font-black text-xs lg:text-base shadow-lg shadow-orange-900/20 active:scale-95 hover:bg-orange-600 transition-colors">
              Jetzt Bestpreis ermitteln
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ValuationForm;
