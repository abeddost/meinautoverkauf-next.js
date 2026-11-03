/**
 * Depreciation guide values as a share of the new-car price lost after N years.
 *
 * Anchors from public sources:
 * - Year 1: 18 to 25 percent (DAT-Report 2026 as cited by fahrzeugschein.de; Allianz about 25).
 * - Year 3: about one third (mobile.de) to about 50 percent (Allianz).
 * - Year 5: about 50 percent (mobile.de) to about 60 percent (Allianz).
 * - After that about 5 percentage points per year (Allianz: 5 to 6).
 * Years 2 and 4 are interpolated between the anchors.
 */
export interface DepreciationStep {
  years: number;
  lossLow: number;
  lossHigh: number;
}

export const DEPRECIATION_TABLE: DepreciationStep[] = [
  { years: 1, lossLow: 18, lossHigh: 25 },
  { years: 2, lossLow: 26, lossHigh: 38 },
  { years: 3, lossLow: 33, lossHigh: 50 },
  { years: 4, lossLow: 42, lossHigh: 55 },
  { years: 5, lossLow: 50, lossHigh: 60 },
  { years: 6, lossLow: 55, lossHigh: 65 },
  { years: 7, lossLow: 60, lossHigh: 70 },
  { years: 8, lossLow: 65, lossHigh: 75 },
  { years: 9, lossLow: 70, lossHigh: 80 },
  { years: 10, lossLow: 75, lossHigh: 85 },
];

export interface ResidualRange {
  low: number;
  high: number;
}

const roundToHundred = (value: number): number => Math.round(value / 100) * 100;

export const calculateResidualRange = (newPrice: number, step: DepreciationStep): ResidualRange => ({
  low: roundToHundred(newPrice * (1 - step.lossHigh / 100)),
  high: roundToHundred(newPrice * (1 - step.lossLow / 100)),
});

export const formatEuro = (value: number): string => `${value.toLocaleString('de-DE')} €`;
