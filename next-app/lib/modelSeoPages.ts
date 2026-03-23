export interface ModelSeoPageMeta {
  slug: string;
  href: `/${string}`;
  label: string;
  brandSlug: 'vw' | 'audi' | 'bmw' | 'mercedes' | 'opel' | 'ford' | 'skoda' | 'seat' | 'toyota';
  brandHref: `/${string}`;
  order: number;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: `/${string}`;
}

export const MODEL_OVERVIEW_PATH = '/modelle';

export const MODEL_SEO_PAGES: ModelSeoPageMeta[] = [
  {
    slug: 'vw-golf-verkaufen',
    href: '/vw-golf-verkaufen',
    label: 'VW Golf verkaufen',
    brandSlug: 'vw',
    brandHref: '/vw-verkaufen',
    order: 1,
    seoTitle: 'VW Golf verkaufen | Golf Ankauf fair und schnell',
    seoDescription:
      'VW Golf verkaufen mit transparenter Bewertung, schneller Auszahlung und Abholung. Auch bei Motorschaden, Unfall oder hoher Laufleistung.',
    canonicalPath: '/vw-golf-verkaufen',
  },
  {
    slug: 'vw-passat-verkaufen',
    href: '/vw-passat-verkaufen',
    label: 'VW Passat verkaufen',
    brandSlug: 'vw',
    brandHref: '/vw-verkaufen',
    order: 2,
    seoTitle: 'VW Passat verkaufen | Passat Ankauf deutschlandweit',
    seoDescription:
      'VW Passat Ankauf in Deutschland: fairer Preis auch bei hoher Laufleistung, Diesel-Themen, Motorschaden oder Unfallwagen.',
    canonicalPath: '/vw-passat-verkaufen',
  },
  {
    slug: 'audi-a4-verkaufen',
    href: '/audi-a4-verkaufen',
    label: 'Audi A4 verkaufen',
    brandSlug: 'audi',
    brandHref: '/audi-verkaufen',
    order: 3,
    seoTitle: 'Audi A4 verkaufen | A4 Ankauf sicher und transparent',
    seoDescription:
      'Audi A4 verkaufen mit klarer Premium-Bewertung und schneller Auszahlung. Ankauf auch bei Motorschaden, Getriebeproblemen und hoher Laufleistung.',
    canonicalPath: '/audi-a4-verkaufen',
  },
  {
    slug: 'bmw-3er-verkaufen',
    href: '/bmw-3er-verkaufen',
    label: 'BMW 3er verkaufen',
    brandSlug: 'bmw',
    brandHref: '/bmw-verkaufen',
    order: 4,
    seoTitle: 'BMW 3er verkaufen | 3er Ankauf mit fairer Bewertung',
    seoDescription:
      'BMW 3er Ankauf mit marktgerechter Bewertung und sicherem Ablauf. Auch 3er mit Motorschaden, Unfall oder hoher Kilometerleistung verkaufen.',
    canonicalPath: '/bmw-3er-verkaufen',
  },
  {
    slug: 'mercedes-c-klasse-verkaufen',
    href: '/mercedes-c-klasse-verkaufen',
    label: 'Mercedes C-Klasse verkaufen',
    brandSlug: 'mercedes',
    brandHref: '/mercedes-verkaufen',
    order: 5,
    seoTitle: 'Mercedes C-Klasse verkaufen | C-Klasse Ankauf direkt',
    seoDescription:
      'Mercedes C-Klasse verkaufen mit transparenter Bewertung und diskretem Ablauf. Ankauf auch bei Elektronik-, Motor- oder Getriebeproblemen.',
    canonicalPath: '/mercedes-c-klasse-verkaufen',
  },
  {
    slug: 'opel-corsa-verkaufen',
    href: '/opel-corsa-verkaufen',
    label: 'Opel Corsa verkaufen',
    brandSlug: 'opel',
    brandHref: '/opel-verkaufen',
    order: 6,
    seoTitle: 'Opel Corsa verkaufen | Corsa Ankauf fair und schnell',
    seoDescription:
      'Opel Corsa verkaufen mit transparenter Bewertung und schneller Auszahlung. Ankauf auch bei Motorschaden, Unfall oder hoher Laufleistung.',
    canonicalPath: '/opel-corsa-verkaufen',
  },
  {
    slug: 'ford-focus-verkaufen',
    href: '/ford-focus-verkaufen',
    label: 'Ford Focus verkaufen',
    brandSlug: 'ford',
    brandHref: '/ford-verkaufen',
    order: 7,
    seoTitle: 'Ford Focus verkaufen | Focus Ankauf direkt und fair',
    seoDescription:
      'Ford Focus Ankauf deutschlandweit: fairer Preis auch bei Motorschaden, Getriebeproblemen, Unfallwagen oder hoher Laufleistung.',
    canonicalPath: '/ford-focus-verkaufen',
  },
  {
    slug: 'skoda-octavia-verkaufen',
    href: '/skoda-octavia-verkaufen',
    label: 'Skoda Octavia verkaufen',
    brandSlug: 'skoda',
    brandHref: '/skoda-verkaufen',
    order: 8,
    seoTitle: 'Skoda Octavia verkaufen | Octavia Ankauf bundesweit',
    seoDescription:
      'Skoda Octavia verkaufen mit klarer Preislogik auch bei hoher Laufleistung. Ankauf bei Defekten, Unfall oder ohne TÜV.',
    canonicalPath: '/skoda-octavia-verkaufen',
  },
  {
    slug: 'seat-leon-verkaufen',
    href: '/seat-leon-verkaufen',
    label: 'SEAT Leon verkaufen',
    brandSlug: 'seat',
    brandHref: '/seat-verkaufen',
    order: 9,
    seoTitle: 'SEAT Leon verkaufen | Leon Ankauf schnell und sicher',
    seoDescription:
      'SEAT Leon verkaufen mit transparenter Bewertung. Wir kaufen auch Leon mit DSG-Problemen, Motorschaden, Unfall oder hoher Laufleistung.',
    canonicalPath: '/seat-leon-verkaufen',
  },
  {
    slug: 'toyota-corolla-verkaufen',
    href: '/toyota-corolla-verkaufen',
    label: 'Toyota Corolla verkaufen',
    brandSlug: 'toyota',
    brandHref: '/toyota-verkaufen',
    order: 10,
    seoTitle: 'Toyota Corolla verkaufen | Corolla Ankauf fair bewertet',
    seoDescription:
      'Toyota Corolla verkaufen mit schneller Abwicklung und fairer Bewertung. Auch Hybrid, hohe Laufleistung, Unfallwagen oder Motorschaden.',
    canonicalPath: '/toyota-corolla-verkaufen',
  },
];

export const MODEL_SEO_PAGE_BY_SLUG: Record<string, ModelSeoPageMeta> = Object.fromEntries(
  MODEL_SEO_PAGES.map((item) => [item.slug, item]),
);

export const getModelSeoPageBySlug = (slug: string): ModelSeoPageMeta | null => {
  return MODEL_SEO_PAGE_BY_SLUG[slug] ?? null;
};
