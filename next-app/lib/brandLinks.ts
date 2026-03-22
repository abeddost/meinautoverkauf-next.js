export interface BrandLinkItem {
  href: `/${string}`;
  label: string;
  order: number;
}

/**
 * Lightweight brand navigation source for UI interlinking.
 * Keep this file minimal so client bundles (e.g. Footer) do not include
 * full SEO content objects.
 */
export const BRAND_LINKS: BrandLinkItem[] = [
  { href: '/bmw-verkaufen', label: 'BMW verkaufen', order: 1 },
  { href: '/audi-verkaufen', label: 'Audi verkaufen', order: 2 },
  { href: '/mercedes-verkaufen', label: 'Mercedes verkaufen', order: 3 },
  { href: '/oldtimer-verkaufen', label: 'Oldtimer verkaufen', order: 4 },
];

export const MARKEN_OVERVIEW_PATH = '/marken';
