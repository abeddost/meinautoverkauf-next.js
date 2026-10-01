/**
 * Vehicle filter options for the admin lead list (mobile.de-style), and the
 * mapping from each filter choice to the raw values stored on `estimations`.
 */
import { MILEAGE_RANGES } from '@/lib/valuationOptionsData';

export type TransmissionFilter = 'automatik' | 'schaltung';
export type FuelFilter = 'Benzin' | 'Diesel' | 'Elektro' | 'Hybrid';

export const TRANSMISSION_OPTIONS: { value: TransmissionFilter; label: string }[] = [
  { value: 'automatik', label: 'Automatik' },
  { value: 'schaltung', label: 'Schaltgetriebe' },
];

/** Halbautomatik has no clutch pedal, so it counts as automatic. */
export const TRANSMISSION_VALUES: Record<TransmissionFilter, string[]> = {
  automatik: ['Automatik', 'Halbautomatik'],
  schaltung: ['Schaltung'],
};

export const FUEL_OPTIONS: FuelFilter[] = ['Benzin', 'Diesel', 'Elektro', 'Hybrid'];

export const FUEL_GROUPS: Record<FuelFilter, string[]> = {
  Benzin: ['Benzin'],
  Diesel: ['Diesel'],
  Elektro: ['Elektro'],
  Hybrid: ['Hybrid (Diesel/Elektro)', 'Hybrid (Benzin/Elektro)', 'Plug-in-Hybrid'],
};

export const MAX_MILEAGE_OPTIONS = [10000, 20000, 30000, 50000, 70000, 100000, 150000, 200000, 250000];
export const MAX_DISTANCE_OPTIONS = [10, 20, 50, 70, 100, 200];
export const MAX_PRICE_OPTIONS = [10000, 20000, 50000];

/** Parses the upper bound of a stored mileage label like '40.000–50.000'. */
const mileageUpperBound = (label: string): number => {
  const upper = label.split('–')[1];
  return upper ? Number(upper.replace(/\./g, '')) : Infinity;
};

/**
 * Mileage is stored as 10.000 km bucket labels, so "bis X km" matches every
 * bucket whose upper bound is at most X.
 */
export const mileageLabelsUpTo = (maxKm: number): string[] =>
  MILEAGE_RANGES.filter((range) => mileageUpperBound(range.val) <= maxKm).map((range) => range.val);

export const formatThousands = (value: number): string => value.toLocaleString('de-DE');
