/**
 * The two physical branches where customers hand over their car.
 * Single source of truth for addresses shown on the site and in structured data.
 * The online booking flow (components/BookingStep.tsx) offers exactly these two.
 */

export type BranchId = 'bodenheim' | 'ruesselsheim';

export interface Branch {
  id: BranchId;
  name: string;
  streetAddress: string;
  postalCode: string;
  locality: string;
  region: string;
  lat: number;
  lng: number;
  /** City page for this branch. */
  path: `/${string}`;
}

export const BRANCHES: Record<BranchId, Branch> = {
  bodenheim: {
    id: 'bodenheim',
    name: 'Bodenheim',
    // Official street name is spelled "Kuemmerling" (OpenStreetMap, Impressum).
    streetAddress: 'Am Kuemmerling 41a',
    postalCode: '55294',
    locality: 'Bodenheim',
    region: 'Rheinland-Pfalz',
    lat: 49.92432,
    lng: 8.31992,
    path: '/autoankauf-bodenheim',
  },
  ruesselsheim: {
    id: 'ruesselsheim',
    name: 'Rüsselsheim',
    streetAddress: 'Wormser Str. 8b',
    postalCode: '65428',
    locality: 'Rüsselsheim am Main',
    region: 'Hessen',
    lat: 49.98329,
    lng: 8.39394,
    path: '/autoankauf-ruesselsheim',
  },
};

export const BRANCH_LIST: Branch[] = [BRANCHES.bodenheim, BRANCHES.ruesselsheim];

export const formatBranchAddress = (branch: Branch): string =>
  `${branch.streetAddress}, ${branch.postalCode} ${branch.locality}`;

export const getBranchDirectionsUrl = (branch: Branch): string =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(formatBranchAddress(branch))}`;

export const BUSINESS_PHONE_DISPLAY = '0178 2415897';
export const BUSINESS_PHONE_E164 = '+491782415897';
