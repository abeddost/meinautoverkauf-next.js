/**
 * Contextual internal links between cities, guides and brands.
 * These groups were previously connected mainly through the sitewide footer.
 * A stable hash spreads links evenly instead of always favouring the same pages.
 */

export interface ContextLink {
  href: `/${string}`;
  label: string;
}

export const SELLING_GUIDE_LINKS: ContextLink[] = [
  { href: '/defektes-auto-verkaufen', label: 'Defektes Auto verkaufen' },
  { href: '/ratgeber/auto-privat-oder-haendler-verkaufen', label: 'Privat oder an den Händler?' },
  { href: '/ratgeber/unterlagen-autoverkauf-checkliste', label: 'Unterlagen-Checkliste' },
  { href: '/ratgeber/rechtssicherer-kaufvertrag-auto', label: 'Kaufvertrag richtig gestalten' },
  { href: '/ratgeber/autoabmeldung-nach-verkauf', label: 'Abmeldung nach dem Verkauf' },
  { href: '/ratgeber/auto-mit-motorschaden-verkaufen', label: 'Auto mit Motorschaden verkaufen' },
  { href: '/ratgeber/autoankauf-ohne-tuev', label: 'Auto ohne TÜV verkaufen' },
  { href: '/ratgeber/unfallwagen-verkaufen', label: 'Unfallwagen verkaufen' },
  { href: '/ratgeber/autoankauf-trotz-finanzierung', label: 'Verkauf trotz Finanzierung' },
  { href: '/wertverlust-auto-rechner', label: 'Wertverlust-Rechner' },
  { href: '/ratgeber/kilometerstand-scheckheft-vorbesitzer-preis', label: 'Was den Preis bestimmt' },
  { href: '/ratgeber/autoverkauf-betrug-kleinanzeigen-erkennen', label: 'Betrug beim Verkauf erkennen' },
];

export const BRAND_PAGE_LINKS: ContextLink[] = [
  { href: '/vw-verkaufen', label: 'VW verkaufen' },
  { href: '/mercedes-verkaufen', label: 'Mercedes verkaufen' },
  { href: '/bmw-verkaufen', label: 'BMW verkaufen' },
  { href: '/audi-verkaufen', label: 'Audi verkaufen' },
  { href: '/opel-verkaufen', label: 'Opel verkaufen' },
  { href: '/ford-verkaufen', label: 'Ford verkaufen' },
  { href: '/skoda-verkaufen', label: 'Skoda verkaufen' },
  { href: '/seat-verkaufen', label: 'SEAT verkaufen' },
  { href: '/renault-verkaufen', label: 'Renault verkaufen' },
  { href: '/hyundai-verkaufen', label: 'Hyundai verkaufen' },
  { href: '/toyota-verkaufen', label: 'Toyota verkaufen' },
  { href: '/mazda-verkaufen', label: 'Mazda verkaufen' },
  { href: '/porsche-verkaufen', label: 'Porsche verkaufen' },
];

const hash = (value: string): number => {
  let result = 0;
  for (let i = 0; i < value.length; i += 1) {
    result = (result * 31 + value.charCodeAt(i)) >>> 0;
  }
  return result;
};

/** Picks `count` items for a page, stable across builds, excluding links to the page itself. */
export const pickLinks = (items: ContextLink[], key: string, count: number, excludeHref?: string): ContextLink[] => {
  const pool = items.filter((item) => item.href !== excludeHref);
  const start = hash(key) % pool.length;
  return Array.from({ length: Math.min(count, pool.length) }, (_, index) => pool[(start + index) % pool.length]);
};
