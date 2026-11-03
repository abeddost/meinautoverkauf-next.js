/**
 * Real content dates for the sitemap and for Article structured data.
 *
 * Google only trusts lastmod when it is consistently accurate, so a date here must
 * change only when a page's main content changes, never on a deploy.
 * To record an edit, add the page to PAGE_UPDATED_OVERRIDES with the edit date.
 */

/** Date of the last full content review of the site. */
const LAST_SITE_REVIEW = '2026-11-04';

const PAGE_UPDATED_OVERRIDES: Record<string, string> = {};

/** Pages whose main content is not tracked by date. They carry no lastmod. */
const PAGES_WITHOUT_DATE = new Set(['/impressum', '/datenschutz']);

export const getLastModified = (path: string): string | undefined => {
  if (PAGES_WITHOUT_DATE.has(path)) return undefined;
  return PAGE_UPDATED_OVERRIDES[path] ?? LAST_SITE_REVIEW;
};

/** First publication dates, taken from git history. */
const GUIDE_PUBLISHED_DATES: Record<string, string> = {
  'autoankauf-trotz-finanzierung': '2026-03-11',
  'auto-mit-motorschaden-verkaufen': '2026-03-11',
  'autoankauf-ohne-tuev': '2026-03-11',
  'unfallwagen-verkaufen': '2026-03-11',
  'unterlagen-autoverkauf-checkliste': '2026-03-11',
  'auto-online-verkaufen-sofort-auszahlung': '2026-03-11',
  'online-autoankauf-ablauf-7-schritte': '2026-03-11',
  'autoexport-ankauf': '2026-03-11',
  'autoankauf-firmenwagen-gewerbe': '2026-03-11',
  'kilometerstand-scheckheft-vorbesitzer-preis': '2026-03-11',
  'rechtssicherer-kaufvertrag-auto': '2026-03-11',
  'autoverkauf-betrug-kleinanzeigen-erkennen': '2026-03-11',
  'auto-online-inserieren-tipps-bilder': '2026-03-11',
  'autoabmeldung-nach-verkauf': '2026-03-11',
  'bmw-probleme-verkauf': '2026-03-20',
  'mercedes-probleme-verkauf': '2026-03-20',
  'oldtimer-wert-verkauf': '2026-03-20',
  'audi-probleme-verkauf': '2026-03-22',
  'vw-probleme-verkauf': '2026-03-22',
  'porsche-probleme-verkauf': '2026-03-22',
  'toyota-probleme-verkauf': '2026-03-23',
  'opel-probleme-verkauf': '2026-03-23',
  'seat-probleme-verkauf': '2026-03-23',
  'ford-probleme-verkauf': '2026-03-23',
  'skoda-probleme-verkauf': '2026-03-23',
  'mazda-probleme-verkauf': '2026-03-23',
};

export const getGuidePublishedDate = (slug: string): string =>
  GUIDE_PUBLISHED_DATES[slug] ?? LAST_SITE_REVIEW;

const GERMAN_DATE = new Intl.DateTimeFormat('de-DE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatGermanDate = (isoDate: string): string => GERMAN_DATE.format(new Date(isoDate));
