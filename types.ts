
export interface CarDetails {
  brand: string;
  model: string;
  variant: string;
  year: string;
  mileage: string;
  fuelType: string;
  transmission: string;
  power: string;
  bodyType: string;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Poor' | '';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  desiredPrice: string;
  vin?: string;
  images?: string[];
  doors?: string;
  postalCode?: string;
  color?: string;
}

export interface CarSpecs {
  variants: string[];
  powers: string[];
}

export interface ValuationResult {
  estimatedPrice: number;
  priceRange: {
    min: number;
    max: number;
  };
  explanation: string;
  marketTrend: 'Up' | 'Down' | 'Stable';
  sources?: { title: string; uri: string }[];
}

export enum AppStep {
  VALUATION_FORM = 'VALUATION_FORM',
  RESULTS = 'RESULTS',
  BOOKING = 'BOOKING',
  CONFIRMATION = 'CONFIRMATION'
}

export enum AppView {
  HOME = 'HOME',
  AUTO_BEWERTEN = 'AUTO_BEWERTEN',
  AUTO_VERKAUFEN = 'AUTO_VERKAUFEN',
  VORTEILE = 'VORTEILE',
  RATGEBER = 'RATGEBER',
  AUTOANKAUF_FRANKFURT = 'AUTOANKAUF_FRANKFURT',
  AUTOANKAUF_WIESBADEN = 'AUTOANKAUF_WIESBADEN',
  AUTOANKAUF_MAINZ = 'AUTOANKAUF_MAINZ'
}
