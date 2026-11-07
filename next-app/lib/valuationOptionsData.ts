export interface RangeOption {
  val: string;
  label: string;
}

export interface ValuationOptionsData {
  brandData: Record<string, string[]>;
  bodyTypes: string[];
  fuels: string[];
  transmissions: string[];
  years: string[];
  mileageRanges: RangeOption[];
  powerRanges: RangeOption[];
  conditions: RangeOption[];
  sortedBrands: string[];
  variantSuggestions: Record<string, Record<string, string[]>>;
}

// Select values that switch the brand/model field to free text.
export const OTHER_BRAND = '__other_brand__';
export const OTHER_MODEL = '__other_model__';

const BRAND_DATA: Record<string, string[]> = {
  'Abarth': ['500', '595', '695', '124 Spider', 'Punto', 'Grande Punto'],
  'Alfa Romeo': ['Giulia', 'Stelvio', 'Tonale', 'Giulietta', 'Mito', 'Brera', 'Spider', '159', '147', '156', 'GT', '4C', '8C'],
  'Aston Martin': ['DB11', 'Vantage', 'DBS', 'DBX', 'Rapide', 'Vanquish', 'DB9'],
  'Audi': ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q4 e-tron', 'Q5', 'Q7', 'Q8', 'TT', 'e-tron', 'R8', 'S1', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'RS Q3', 'RS Q8', '80', '90', '100', '200', 'Ur-quattro'],
  'Bentley': ['Continental GT', 'Bentayga', 'Flying Spur', 'Mulsanne', 'Arnage'],
  'BMW': ['1er', '2er', '3er', '4er', '5er', '6er', '7er', '8er', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z1', 'Z3', 'Z4', 'Z8', 'i3', 'i4', 'i7', 'i8', 'iX', 'iX1', 'iX3', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M8', '02er (1602/2002)', 'Isetta'],
  'Cadillac': ['XT4', 'XT5', 'Escalade', 'CT4', 'CT5', 'CTS', 'SRX'],
  'Chevrolet': ['Camaro', 'Corvette', 'Spark', 'Cruze', 'Captiva', 'Aveo', 'Orlando', 'Matiz', 'Volt'],
  'Chrysler': ['300C', 'Voyager', 'Grand Voyager', 'Crossfire', 'PT Cruiser'],
  'Citroën': ['C1', 'C2', 'C3', 'C3 Aircross', 'C4', 'C4 Cactus', 'C4 Picasso', 'C5', 'C5 Aircross', 'C5 X', 'C6', 'C8', 'Berlingo', 'Jumpy', 'Spacetourer', 'Nemo', 'Xsara', 'Saxo', '2CV', 'DS', 'CX'],
  'Cupra': ['Formentor', 'Leon', 'Born', 'Ateca', 'Tavascan'],
  'Dacia': ['Sandero', 'Duster', 'Jogger', 'Spring', 'Lodgy', 'Logan', 'Dokker'],
  'Daihatsu': ['Sirion', 'Cuore', 'Terios', 'Materia', 'Copen', 'Charade'],
  'Dodge': ['Challenger', 'Charger', 'RAM', 'Durango', 'Nitro', 'Caliber', 'Journey'],
  'DS Automobiles': ['DS 3', 'DS 3 Crossback', 'DS 4', 'DS 5', 'DS 7 Crossback', 'DS 9'],
  'Ferrari': ['488', 'F8 Tributo', 'Roma', 'Portofino', 'SF90', 'Purosangue', '812 Superfast', '458 Italia', 'California', 'FF'],
  'Fiat': ['500', '500X', '500L', 'Panda', 'Tipo', 'Ducato', 'Punto', 'Grande Punto', 'Evo', 'Bravo', 'Stilo', 'Sedici', 'Fullback', 'Talento', 'Croma', 'Multipla', 'Barchetta', 'Coupe', '126', 'X1/9'],
  'Ford': ['Ka', 'Ka+', 'Fiesta', 'Focus', 'Mondeo', 'Mustang', 'Mustang Mach-E', 'Kuga', 'Puma', 'Ranger', 'Transit', 'Tourneo Custom', 'EcoSport', 'S-Max', 'Galaxy', 'C-Max', 'B-Max', 'Edge', 'Explorer', 'Fusion', 'Capri', 'Taunus', 'Granada', 'Escort', 'Sierra', 'Scorpio'],
  'Genesis': ['G70', 'G80', 'G90', 'GV60', 'GV70', 'GV80'],
  'Honda': ['Civic', 'Jazz', 'CR-V', 'HR-V', 'ZR-V', 'e', 'Accord', 'Insight', 'S2000', 'FR-V', 'Legend', 'Prelude'],
  'Hyundai': ['i10', 'i20', 'i30', 'Kona', 'Tucson', 'Ioniq', 'Ioniq 5', 'Ioniq 6', 'Santa Fe', 'Bayon', 'Staria', 'Veloster', 'ix20', 'ix35', 'ix55', 'Genesis', 'Getz', 'Accent', 'Matrix', 'Coupe'],
  'Infiniti': ['Q30', 'Q50', 'Q60', 'Q70', 'QX30', 'QX50', 'QX70'],
  'Jaguar': ['XE', 'XF', 'XJ', 'E-Pace', 'F-Pace', 'I-Pace', 'F-Type', 'S-Type', 'X-Type', 'XK'],
  'Jeep': ['Renegade', 'Compass', 'Cherokee', 'Grand Cherokee', 'Wrangler', 'Gladiator', 'Avenger', 'Patriot', 'Commander'],
  'Kia': ['Picanto', 'Rio', 'Ceed', 'Sportage', 'Niro', 'EV6', 'EV9', 'Sorento', 'Stinger', 'XCeed', 'Stonic', 'Soul', 'Venga', 'Carens', 'Optima', 'Carnival', 'Magentis'],
  'Lamborghini': ['Urus', 'Huracán', 'Aventador', 'Revuelto', 'Gallardo', 'Murciélago'],
  'Lada': ['Niva', '2107', 'Samara', 'Vesta', 'Granta'],
  'Lancia': ['Ypsilon', 'Delta', 'Thema', 'Voyager', 'Musa', 'Phedra', 'Lybra', 'Kappa', 'Thesis'],
  'Land Rover': ['Defender', 'Discovery', 'Discovery Sport', 'Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque', 'Freelander'],
  'Lexus': ['UX', 'NX', 'RX', 'RZ', 'ES', 'LS', 'LC', 'IS', 'CT', 'GS', 'SC'],
  'Lotus': ['Emira', 'Evija', 'Eletre', 'Elise', 'Exige', 'Evora'],
  'Maserati': ['Ghibli', 'Levante', 'Quattroporte', 'Grecale', 'MC20', 'GranTurismo', 'GranCabrio'],
  'Mazda': ['2', '3', '6', 'CX-3', 'CX-30', 'CX-5', 'CX-60', 'CX-80', 'MX-30', 'MX-5', 'RX-8', '5', 'Premacy', 'MPV', 'Tribute'],
  'McLaren': ['720S', 'Artura', 'GT', '570S', '650S', 'MP4-12C'],
  'Mercedes-Benz': ['A-Klasse', 'B-Klasse', 'C-Klasse', 'E-Klasse', 'S-Klasse', 'CLA', 'CLS', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'G-Klasse', 'EQA', 'EQB', 'EQC', 'EQE', 'EQS', 'EQV', 'V-Klasse', 'Vito', 'Sprinter', 'Citan', 'X-Klasse', 'SL', 'SLC', 'SLK', 'SLS', 'AMG GT', 'R-Klasse', 'CLK', '190er (W201)', 'W123', 'W124', '/8 (W114/W115)', 'Pagode (W113)', 'Ponton'],
  'MG': ['MG4', 'MG5', 'ZS', 'HS', 'EHS', 'Marvel R', 'Cyberster', 'MG3', 'TF'],
  'Mini': ['One', 'Cooper', 'Cooper S', 'Cooper D', 'Cooper SD', 'John Cooper Works', 'Countryman', 'Clubman', 'Cabrio', 'Coupe', 'Roadster', 'Paceman'],
  'Mitsubishi': ['Space Star', 'Colt', 'ASX', 'Eclipse Cross', 'Outlander', 'L200', 'Pajero', 'Lancer', 'Galant', 'Grandis', 'I-MiEV'],
  'Nissan': ['Micra', 'Qashqai', 'Juke', 'X-Trail', 'Leaf', 'Ariya', 'GT-R', 'Z', '370Z', '350Z', 'Navara', 'Note', 'Pulsar', 'Tiida', 'Primera', 'Almera', 'Pathfinder', 'Murano', 'Terrano', 'Pixo', 'NV200'],
  'Opel': ['Corsa', 'Astra', 'Insignia', 'Mokka', 'Grandland', 'Crossland', 'Combo', 'Zafira Life', 'Adam', 'Karl', 'Agila', 'Antara', 'Meriva', 'Zafira', 'Vectra', 'Signum', 'Omega', 'Tigra', 'Speedster', 'Casca', 'Ampera', 'Manta', 'Kadett', 'Rekord', 'Ascona', 'Commodore', 'GT', 'Senator', 'Monza', 'Calibra'],
  'Peugeot': ['107', '108', '206', '207', '208', '307', '308', '407', '408', '508', '607', '807', '1007', '2008', '3008', '4007', '4008', '5008', 'RCZ', 'Partner', 'Rifter', 'Expert', 'Traveller', 'Bipper', 'Ion'],
  'Polestar': ['Polestar 1', 'Polestar 2', 'Polestar 3', 'Polestar 4'],
  'Porsche': ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan', '718 Boxster', '718 Cayman', '918 Spyder', 'Carrera GT', '356', '912', '914', '924', '944', '928', '968'],
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
  'Trabant': ['P50', 'P60', '601', '1.1'],
  'Volvo': ['XC40', 'XC60', 'XC90', 'V40', 'V50', 'V60', 'V70', 'V90', 'S40', 'S60', 'S80', 'S90', 'C30', 'C40', 'C70', 'EX30', 'EX90'],
  'VW': ['up!', 'Polo', 'Golf', 'ID.3', 'ID.4', 'ID.5', 'ID.7', 'ID.Buzz', 'Passat', 'Arteon', 'T-Cross', 'Taigo', 'T-Roc', 'Tiguan', 'Touareg', 'Touran', 'Sharan', 'Caddy', 'Multivan', 'Transporter', 'Caravelle', 'California', 'Amarok', 'Beetle', 'Scirocco', 'Eos', 'Jetta', 'Bora', 'Lupo', 'Fox', 'Phaeton', 'Corrado', 'Käfer', 'T1', 'T2', 'T3', 'Karmann Ghia', '181 Kübelwagen'],
  'Wartburg': ['311', '312', '353', '1.3'],
};

const BODY_TYPES = ['Limousine', 'Kombi', 'SUV / Geländewagen', 'Kleinwagen', 'Cabrio', 'Coupé', 'Van', 'Pick-up'];
const FUELS = [
  'Benzin',
  'Diesel',
  'Elektro',
  'Hybrid (Diesel/Elektro)',
  'Hybrid (Benzin/Elektro)',
  'Plug-in-Hybrid',
  'LPG / Autogas',
];
const TRANSMISSIONS = ['Schaltung', 'Automatik', 'Halbautomatik'];
// Computed at runtime so the list never falls behind the calendar; reaches back far enough for oldtimers.
const OLDEST_YEAR = 1930;
const CURRENT_YEAR = new Date().getFullYear();
export const YEARS = Array.from({ length: CURRENT_YEAR - OLDEST_YEAR + 1 }, (_, i) => (CURRENT_YEAR - i).toString());
export const MILEAGE_RANGES = [
  ...Array.from({ length: 25 }, (_, i) => {
    const start = i * 10000;
    const end = start + 10000;
    const startLabel = start.toLocaleString('de-DE');
    const endLabel = end.toLocaleString('de-DE');
    const label = `${startLabel}–${endLabel}`;
    return { val: label, label };
  }),
  { val: 'Mehr als 250.000', label: 'Mehr als 250.000' },
];

const POWER_RANGES = [{ val: 'unter 40 PS (unter 29 kW)', label: 'unter 40 PS (unter 29 kW)' }, ...Array.from({ length: 113 }, (_, i) => {
  const start = 40 + (i * 5);
  const end = start + 5;
  const kwStart = Math.round(start / 1.35962);
  const kwEnd = Math.round(end / 1.35962);
  const label = `${start} - ${end} PS (${kwStart} - ${kwEnd} kW)`;
  return { val: label, label };
})];

const CONDITIONS = [
  { val: 'Excellent', label: 'Sehr gut' },
  { val: 'Good', label: 'Gut' },
  { val: 'Fair', label: 'Mittelmäßig' },
  { val: 'Poor', label: 'Schlecht' },
];

// Suggestions for the optional "Variante / Motor" field. Free text is always allowed,
// so this only needs to cover common models, not every engine ever built.
const VARIANT_SUGGESTIONS: Record<string, Record<string, string[]>> = {
  'Audi': {
    'A3': ['1.0 TFSI', '1.4 TFSI', '1.5 TFSI', '2.0 TFSI', '1.6 TDI', '2.0 TDI', '30 TFSI', '35 TFSI', '40 TFSI e', '30 TDI', '35 TDI', 'Sportback', 'Limousine', 'Cabriolet'],
    'A4': ['1.8 TFSI', '2.0 TFSI', '2.0 TDI', '3.0 TDI', '35 TFSI', '40 TFSI', '45 TFSI', '30 TDI', '35 TDI', '40 TDI', '50 TDI', 'Avant', 'allroad quattro', 'quattro'],
    'A6': ['2.0 TFSI', '3.0 TFSI', '2.0 TDI', '3.0 TDI', '40 TDI', '45 TDI', '50 TDI', '45 TFSI', '55 TFSI', '55 TFSI e', 'Avant', 'allroad quattro', 'quattro'],
    'Q5': ['2.0 TFSI', '2.0 TDI', '3.0 TDI', '40 TDI', '45 TFSI', '50 TDI', '50 TFSI e', '55 TFSI e', 'Sportback', 'quattro'],
  },
  'BMW': {
    '1er': ['116i', '118i', '120i', '125i', '128ti', '116d', '118d', '120d', '123d', '125d', 'M135i', 'M140i'],
    '3er': ['316i', '316d', '318i', '318d', '320i', '320d', '320e', '325i', '325d', '328i', '330i', '330d', '330e', '335i', '335d', '340i', 'M340i', 'M340d', 'Touring', 'Gran Turismo', 'xDrive'],
    '5er': ['518d', '520i', '520d', '523i', '525d', '528i', '530i', '530d', '530e', '535i', '535d', '540i', '540d', '545e', '550i', 'M550i', 'M550d', 'Touring', 'xDrive'],
    'X1': ['sDrive16d', 'sDrive18i', 'sDrive18d', 'sDrive20i', 'xDrive18d', 'xDrive20d', 'xDrive23i', 'xDrive25e', 'xDrive30e'],
    'X3': ['sDrive18d', 'xDrive20i', 'xDrive20d', 'xDrive30i', 'xDrive30d', 'xDrive30e', 'M40i', 'M40d'],
  },
  'Ford': {
    'Fiesta': ['1.0 EcoBoost', '1.1', '1.25', '1.4', '1.6', '1.5 TDCi', '1.6 TDCi', 'ST', 'Active'],
    'Focus': ['1.0 EcoBoost', '1.5 EcoBoost', '1.6', '2.0', '1.5 EcoBlue', '1.5 TDCi', '1.6 TDCi', '2.0 TDCi', '2.0 EcoBlue', 'ST', 'RS', 'Turnier', 'Active'],
  },
  'Mercedes-Benz': {
    'A-Klasse': ['A 160', 'A 180', 'A 200', 'A 220', 'A 250', 'A 250 e', 'A 180 d', 'A 200 d', 'A 220 d', 'A 35 AMG', 'A 45 AMG'],
    'C-Klasse': ['C 160', 'C 180', 'C 200', 'C 220', 'C 250', 'C 300', 'C 300 e', 'C 350', 'C 400', 'C 180 d', 'C 200 d', 'C 220 d', 'C 250 d', 'C 300 d', 'C 43 AMG', 'C 63 AMG', 'T-Modell', 'Coupé', 'Cabriolet'],
    'E-Klasse': ['E 200', 'E 220', 'E 250', 'E 300', 'E 300 e', 'E 350', 'E 400', 'E 450', 'E 200 d', 'E 220 d', 'E 300 d', 'E 350 d', 'E 400 d', 'E 53 AMG', 'E 63 AMG', 'T-Modell', 'Coupé', 'Cabriolet'],
    'GLC': ['GLC 200', 'GLC 250', 'GLC 300', 'GLC 300 e', 'GLC 200 d', 'GLC 220 d', 'GLC 250 d', 'GLC 300 d', 'GLC 43 AMG', 'GLC 63 AMG', 'Coupé'],
  },
  'Opel': {
    'Astra': ['1.0 Turbo', '1.2 Turbo', '1.4', '1.4 Turbo', '1.6', '1.6 Turbo', '1.5 Diesel', '1.6 CDTI', '1.7 CDTI', '2.0 CDTI', 'Plug-in-Hybrid', 'Sports Tourer', 'OPC', 'GTC'],
    'Corsa': ['1.0', '1.2', '1.2 Turbo', '1.4', '1.4 Turbo', '1.6 Turbo', '1.3 CDTI', '1.5 Diesel', 'Corsa-e', 'OPC', 'GS'],
  },
  'Seat': {
    'Leon': ['1.0 TSI', '1.2 TSI', '1.4 TSI', '1.5 TSI', '1.8 TSI', '2.0 TSI', '1.4 e-Hybrid', '1.6 TDI', '2.0 TDI', 'FR', 'Cupra', 'Sportstourer', 'ST', 'X-Perience'],
  },
  'Skoda': {
    'Fabia': ['1.0', '1.0 TSI', '1.2', '1.2 TSI', '1.4', '1.4 TDI', '1.6 TDI', 'Combi', 'Monte Carlo', 'RS'],
    'Octavia': ['1.0 TSI', '1.2 TSI', '1.4 TSI', '1.5 TSI', '1.8 TSI', '2.0 TSI', '1.4 iV', '1.6 TDI', '2.0 TDI', 'RS', 'Scout', 'Combi'],
  },
  'Toyota': {
    'Corolla': ['1.2 Turbo', '1.33', '1.6', '1.8 Hybrid', '2.0 Hybrid', '1.4 D-4D', '2.0 D-4D', 'Touring Sports', 'GR Sport', 'Limousine'],
  },
  'VW': {
    'Golf': ['1.0 TSI', '1.2 TSI', '1.4 TSI', '1.5 TSI', '1.5 eTSI', '1.4 GTE', '1.6', '1.6 TDI', '1.9 TDI', '2.0 TDI', 'GTI', 'GTD', 'GTE', 'R', 'e-Golf', 'Variant', 'Plus', 'Sportsvan', 'Cabriolet'],
    'Passat': ['1.4 TSI', '1.5 TSI', '1.8 TSI', '2.0 TSI', '1.4 GTE', '1.6 TDI', '1.9 TDI', '2.0 TDI', '2.0 BiTDI', 'Variant', 'Alltrack', 'GTE', 'CC'],
    'Polo': ['1.0', '1.0 TSI', '1.2', '1.2 TSI', '1.4', '1.4 TDI', '1.6 TDI', 'GTI', 'Cross Polo'],
    'Tiguan': ['1.4 TSI', '1.5 TSI', '2.0 TSI', '1.4 eHybrid', '2.0 TDI', 'Allspace', '4Motion', 'R'],
  },
};

export const VALUATION_OPTIONS_DATA: ValuationOptionsData = {
  brandData: BRAND_DATA,
  bodyTypes: BODY_TYPES,
  fuels: FUELS,
  transmissions: TRANSMISSIONS,
  years: YEARS,
  mileageRanges: MILEAGE_RANGES,
  powerRanges: POWER_RANGES,
  conditions: CONDITIONS,
  sortedBrands: Object.keys(BRAND_DATA).sort((a, b) => a.localeCompare(b, 'de')),
  variantSuggestions: VARIANT_SUGGESTIONS,
};
