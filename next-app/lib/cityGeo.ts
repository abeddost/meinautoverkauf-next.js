/**
 * Real, public city-center coordinates (WGS84) used to compute genuinely
 * nearby cities for each autoankauf city page. Values sourced from public
 * geographic references, not invented.
 */

export interface Coordinates {
  lat: number;
  lng: number;
}

export const CITY_COORDINATES: Record<string, Coordinates> = {
  bodenheim: { lat: 49.9283, lng: 8.3068 },
  frankfurt: { lat: 50.1109, lng: 8.6821 },
  wiesbaden: { lat: 50.0782, lng: 8.2398 },
  mainz: { lat: 49.9929, lng: 8.2473 },
  ruesselsheim: { lat: 49.9917, lng: 8.4139 },
  darmstadt: { lat: 49.8728, lng: 8.6512 },
  koblenz: { lat: 50.3569, lng: 7.5890 },
  offenbach: { lat: 50.1055, lng: 8.7761 },
  koeln: { lat: 50.9375, lng: 6.9603 },
  hamburg: { lat: 53.5511, lng: 9.9937 },
  mannheim: { lat: 49.4875, lng: 8.4660 },
  heidelberg: { lat: 49.3988, lng: 8.6724 },
  worms: { lat: 49.6326, lng: 8.3594 },
  kaiserslautern: { lat: 49.4401, lng: 7.7491 },
  ludwigshafen: { lat: 49.4741, lng: 8.4340 },
  hanau: { lat: 50.1268, lng: 8.9153 },
  giessen: { lat: 50.5841, lng: 8.6784 },
  aschaffenburg: { lat: 49.9769, lng: 9.1508 },
  neuwied: { lat: 50.4275, lng: 7.4633 },
  wetzlar: { lat: 50.5606, lng: 8.5044 },
  speyer: { lat: 49.3167, lng: 8.4333 },
  'neustadt-weinstrasse': { lat: 49.3502, lng: 8.1487 },
  'bad-homburg-vor-der-hoehe': { lat: 50.2266, lng: 8.6183 },
  oberursel: { lat: 50.2033, lng: 8.5769 },
  'bad-kreuznach': { lat: 49.8500, lng: 7.8667 },
  dreieich: { lat: 50.0170, lng: 8.7040 },
  bensheim: { lat: 49.6837, lng: 8.6184 },
  maintal: { lat: 50.1340, lng: 8.8390 },
  'hofheim-am-taunus': { lat: 50.0830, lng: 8.4500 },
  weinheim: { lat: 49.5486, lng: 8.6683 },
  kassel: { lat: 51.3127, lng: 9.4797 },
  stuttgart: { lat: 48.7758, lng: 9.1829 },
  bonn: { lat: 50.7374, lng: 7.0982 },
  karlsruhe: { lat: 49.0069, lng: 8.4037 },
  frankenthal: { lat: 49.5344, lng: 8.3539 },
  rodgau: { lat: 50.0170, lng: 8.8830 },
};

const EARTH_RADIUS_KM = 6371;

const toRadians = (degrees: number): number => (degrees * Math.PI) / 180;

const haversineDistanceKm = (a: Coordinates, b: Coordinates): number => {
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const sinDLat = Math.sin(dLat / 2);
  const sinDLng = Math.sin(dLng / 2);
  const h = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLng * sinDLng;

  return Math.round(2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h)));
};

export interface NearbyCity {
  slug: string;
  distanceKm: number;
}

/** Nearest other served cities to the given slug, by real straight-line distance. */
export const getNearestCitySlugs = (slug: string, count = 3): NearbyCity[] => {
  const origin = CITY_COORDINATES[slug];
  if (!origin) return [];

  return Object.entries(CITY_COORDINATES)
    .filter(([otherSlug]) => otherSlug !== slug)
    .map(([otherSlug, coords]) => ({
      slug: otherSlug,
      distanceKm: haversineDistanceKm(origin, coords),
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, count);
};
