
export interface CarDetails {
  brand: string;
  model: string;
  year: string;
  mileage: string;
  fuelType: string;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  images?: string[];
}

export interface ValuationResult {
  estimatedPrice: number;
  explanation: string;
  marketTrend: 'Up' | 'Down' | 'Stable';
}

export enum AppStep {
  VALUATION_FORM = 'VALUATION_FORM',
  RESULTS = 'RESULTS',
  BOOKING = 'BOOKING',
  CONFIRMATION = 'CONFIRMATION'
}
