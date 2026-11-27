/**
 * City-specific service pages (e.g. Unfallwagen Ankauf in a city).
 * Listed on /standorte and in the sitemap. The pages themselves live in app/(marketing)/<path>.
 */
export interface CityServicePage {
  path: `/${string}`;
  label: string;
  cityName: string;
  cityPath: `/${string}`;
}

export const CITY_SERVICE_PAGES: CityServicePage[] = [
  {
    path: '/unfallwagen-ankauf-wiesbaden',
    label: 'Unfallwagen Ankauf Wiesbaden',
    cityName: 'Wiesbaden',
    cityPath: '/autoankauf-wiesbaden',
  },
  {
    path: '/unfallwagen-ankauf-mainz',
    label: 'Unfallwagen Ankauf Mainz',
    cityName: 'Mainz',
    cityPath: '/autoankauf-mainz',
  },
];
