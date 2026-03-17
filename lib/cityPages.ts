/**
 * Single source of truth for all city autoankauf pages.
 * Used by Footer (first N links) and StandortePage (full list).
 */
export interface CityPage {
  path: string;
  label: string;
}

export const CITY_PAGES: CityPage[] = [
  { path: '/autoankauf-frankfurt', label: 'Autoankauf Frankfurt' },
  { path: '/autoankauf-wiesbaden', label: 'Autoankauf Wiesbaden' },
  { path: '/autoankauf-mainz', label: 'Autoankauf Mainz' },
  { path: '/autoankauf-ruesselsheim', label: 'Autoankauf Rüsselsheim' },
  { path: '/autoankauf-darmstadt', label: 'Autoankauf Darmstadt' },
  { path: '/autoankauf-koblenz', label: 'Autoankauf Koblenz' },
  { path: '/autoankauf-offenbach', label: 'Autoankauf Offenbach' },
  { path: '/autoankauf-koeln', label: 'Autoankauf Köln' },
  { path: '/autoankauf-hamburg', label: 'Autoankauf Hamburg' },
  { path: '/autoankauf-mannheim', label: 'Autoankauf Mannheim' },
  { path: '/autoankauf-heidelberg', label: 'Autoankauf Heidelberg' },
  { path: '/autoankauf-worms', label: 'Autoankauf Worms' },
  { path: '/autoankauf-kaiserslautern', label: 'Autoankauf Kaiserslautern' },
  { path: '/autoankauf-ludwigshafen', label: 'Autoankauf Ludwigshafen' },
  { path: '/autoankauf-hanau', label: 'Autoankauf Hanau' },
  { path: '/autoankauf-giessen', label: 'Autoankauf Gießen' },
  { path: '/autoankauf-aschaffenburg', label: 'Autoankauf Aschaffenburg' },
  { path: '/autoankauf-neuwied', label: 'Autoankauf Neuwied' },
  { path: '/autoankauf-wetzlar', label: 'Autoankauf Wetzlar' },
  { path: '/autoankauf-speyer', label: 'Autoankauf Speyer' },
  { path: '/autoankauf-neustadt-weinstrasse', label: 'Autoankauf Neustadt an der Weinstraße' },
  { path: '/autoankauf-bad-homburg-vor-der-hoehe', label: 'Autoankauf Bad Homburg' },
  { path: '/autoankauf-oberursel', label: 'Autoankauf Oberursel' },
  { path: '/autoankauf-bensheim', label: 'Autoankauf Bensheim' },
  { path: '/autoankauf-maintal', label: 'Autoankauf Maintal' },
  { path: '/autoankauf-hofheim-am-taunus', label: 'Autoankauf Hofheim am Taunus' },
  { path: '/autoankauf-weinheim', label: 'Autoankauf Weinheim' },
  { path: '/autoankauf-kassel', label: 'Autoankauf Kassel' },
  { path: '/autoankauf-stuttgart', label: 'Autoankauf Stuttgart' },
  { path: '/autoankauf-bonn', label: 'Autoankauf Bonn' },
  { path: '/autoankauf-karlsruhe', label: 'Autoankauf Karlsruhe' },
  { path: '/autoankauf-frankenthal', label: 'Autoankauf Frankenthal' },
  { path: '/autoankauf-rodgau', label: 'Autoankauf Rodgau' },
];
