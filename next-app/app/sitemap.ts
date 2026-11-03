import type { MetadataRoute } from 'next';
import { CITY_SEO_DATA } from '@/lib/citySeoData';
import { GUIDE_CONTENT } from '@/lib/guideContent';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { MODEL_SEO_PAGES } from '@/lib/modelSeoPages';
import { getLastModified } from '@/lib/contentDates';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';

const STATIC_PATHS = [
  '/auto-bewerten',
  '/auto-verkaufen',
  '/vorteile',
  '/standorte',
  '/marken',
  '/modelle',
  '/ratgeber',
  '/defektes-auto-verkaufen',
  '/wertverlust-auto-rechner',
  '/impressum',
  '/datenschutz',
];

// changeFrequency and priority are omitted on purpose: Google ignores both.
const toEntry = (path: string): MetadataRoute.Sitemap[number] => {
  const lastModified = getLastModified(path);
  return {
    url: path === '/' ? BASE_URL : `${BASE_URL}${path}`,
    ...(lastModified ? { lastModified } : {}),
  };
};

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    ...STATIC_PATHS,
    ...CITY_SEO_DATA.map((city) => city.path),
    ...GUIDE_CONTENT.map((guide) => `/ratgeber/${guide.slug}`),
    ...Object.values(BRAND_SEO_CONTENT).map((brand) => brand.landing.canonicalPath),
    ...MODEL_SEO_PAGES.map((model) => model.canonicalPath),
  ];

  return paths.map(toEntry);
}
