/**
 * Links to all city autoankauf pages, derived from CITY_SEO_DATA so a new city
 * can never be missing here. Used by Footer (first N links) and StandortePage (full list).
 */
import { CITY_SEO_DATA } from './citySeoData';
import { CITY_DRIVE_TO_BRANCH } from './cityGeo';

export interface CityPage {
  path: string;
  label: string;
  minutes: number;
}

const shortCityName = (cityName: string): string =>
  cityName.replace(/ am Main$/, '').replace(/ am Rhein$/, '').replace(/ vor der Höhe$/, '').replace(/ \(.*\)$/, '');

/** Sorted by driving time to the nearer branch, nearest first. */
export const CITY_PAGES: CityPage[] = CITY_SEO_DATA.map((city) => ({
  path: city.path,
  label: `Autoankauf ${shortCityName(city.cityName)}`,
  minutes: CITY_DRIVE_TO_BRANCH[city.slug]?.minutes ?? Number.MAX_SAFE_INTEGER,
})).sort((a, b) => a.minutes - b.minutes);
