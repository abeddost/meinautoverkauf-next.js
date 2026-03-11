import React from 'react';
import { Helmet } from 'react-helmet-async';

type JsonLdObject = Record<string, unknown>;

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  noindex?: boolean;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  pageType?: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'ContactPage';
  breadcrumbs?: BreadcrumbItem[];
  extraSchemas?: JsonLdObject | JsonLdObject[];
}

const SITE_URL = 'https://www.meinautoverkauf.de';

const ROUTE_NAME_MAP: Record<string, string> = {
  'auto-bewerten': 'Auto bewerten',
  'auto-verkaufen': 'Auto verkaufen',
  vorteile: 'Vorteile',
  ratgeber: 'Ratgeber',
  'autoankauf-frankfurt': 'Autoankauf Frankfurt',
  'autoankauf-wiesbaden': 'Autoankauf Wiesbaden',
  'autoankauf-mainz': 'Autoankauf Mainz',
  'autoankauf-koeln': 'Autoankauf Köln',
  'autoankauf-hamburg': 'Autoankauf Hamburg',
  impressum: 'Impressum',
  datenschutz: 'Datenschutz',
  admin: 'Admin',
  login: 'Login',
  'bewertung-laeuft': 'Bewertung läuft',
  'bewertung-ergebnis': 'Bewertung Ergebnis',
  'termin-buchen': 'Termin buchen',
  'vielen-dank': 'Vielen Dank',
  'autoankauf-trotz-finanzierung': 'Autoankauf trotz Finanzierung',
  'auto-mit-motorschaden-verkaufen': 'Auto mit Motorschaden verkaufen',
  'autoankauf-ohne-tuev': 'Autoankauf ohne TÜV',
  'unfallwagen-verkaufen': 'Unfallwagen verkaufen',
  'unfallwagen-ankauf': 'Unfallwagen Ankauf',
  'unterlagen-autoverkauf-checkliste': 'Unterlagen beim Autoverkauf',
  'auto-online-verkaufen-sofort-auszahlung': 'Auto online verkaufen mit Sofort-Auszahlung',
  'autoankauf-mit-motorschaden': 'Autoankauf mit Motorschaden',
  'online-autoankauf-ablauf-7-schritte': 'Online-Autoankauf Ablauf',
  'autoexport-ankauf': 'Autoexport Ankauf',
  'autoankauf-firmenwagen-gewerbe': 'Autoankauf Firmenwagen und Gewerbe',
  'autoverkauf-an-exporthaendler': 'Autoverkauf an Exporthändler',
  'kilometerstand-scheckheft-vorbesitzer-preis': 'Preisfaktoren beim Autoverkauf',
  'rechtssicherer-kaufvertrag-auto': 'Rechtssicherer Kaufvertrag Auto',
  'autoverkauf-betrug-kleinanzeigen-erkennen': 'Betrug bei Kleinanzeigen erkennen',
  'auto-online-inserieren-tipps-bilder': 'Auto online inserieren',
  'autoabmeldung-nach-verkauf': 'Autoabmeldung nach Verkauf',
};

const toAbsoluteUrl = (inputUrl: string): string => {
  if (inputUrl.startsWith('http://') || inputUrl.startsWith('https://')) {
    return inputUrl;
  }

  if (inputUrl.startsWith('/')) {
    return `${SITE_URL}${inputUrl}`;
  }

  return `${SITE_URL}/${inputUrl}`;
};

const getCanonicalPath = (canonicalUrl?: string): string => {
  if (!canonicalUrl) return '/';

  if (canonicalUrl.startsWith('http://') || canonicalUrl.startsWith('https://')) {
    try {
      return new URL(canonicalUrl).pathname || '/';
    } catch {
      return '/';
    }
  }

  return canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`;
};

const slugToName = (slug: string): string => {
  if (ROUTE_NAME_MAP[slug]) return ROUTE_NAME_MAP[slug];

  return decodeURIComponent(slug)
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const buildBreadcrumbs = (canonicalPath: string): BreadcrumbItem[] => {
  if (!canonicalPath || canonicalPath === '/') {
    return [{ name: 'Startseite', path: '/' }];
  }

  const segments = canonicalPath.split('/').filter(Boolean);
  const crumbs: BreadcrumbItem[] = [{ name: 'Startseite', path: '/' }];
  let currentPath = '';

  for (const segment of segments) {
    currentPath += `/${segment}`;
    crumbs.push({
      name: slugToName(segment),
      path: currentPath,
    });
  }

  return crumbs;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const isFaqPageSchema = (schema: JsonLdObject): boolean => schema['@type'] === 'FAQPage';

const mergeAndDedupeFaqSchemas = (schemas: JsonLdObject[]): JsonLdObject[] => {
  const faqSchemas = schemas.filter(isFaqPageSchema);
  if (faqSchemas.length <= 1) {
    return schemas;
  }

  const mergedMainEntity: Record<string, unknown>[] = [];
  const seenQuestions = new Set<string>();

  for (const faqSchema of faqSchemas) {
    const mainEntity = faqSchema.mainEntity;
    if (!Array.isArray(mainEntity)) {
      continue;
    }

    for (const entity of mainEntity) {
      if (!isRecord(entity)) {
        continue;
      }

      const questionName = typeof entity.name === 'string' ? entity.name.trim().toLowerCase() : '';
      const dedupeKey = questionName || JSON.stringify(entity);
      if (seenQuestions.has(dedupeKey)) {
        continue;
      }

      seenQuestions.add(dedupeKey);
      mergedMainEntity.push(entity);
    }
  }

  const firstFaq = faqSchemas[0];
  const mergedFaqSchema: JsonLdObject = {
    ...firstFaq,
    mainEntity: mergedMainEntity,
  };

  if (import.meta.env.DEV) {
    console.warn(
      `Merged ${faqSchemas.length} FAQPage schemas into one to prevent duplicate rich-result markup.`,
    );
  }

  const mergedSchemas: JsonLdObject[] = [];
  let faqInserted = false;

  for (const schema of schemas) {
    if (!isFaqPageSchema(schema)) {
      mergedSchemas.push(schema);
      continue;
    }

    if (!faqInserted) {
      mergedSchemas.push(mergedFaqSchema);
      faqInserted = true;
    }
  }

  return mergedSchemas;
};

const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  canonicalUrl,
  noindex = false,
  ogImage,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  twitterImage,
  pageType = 'WebPage',
  breadcrumbs,
  extraSchemas,
}) => {
  const canonicalPath = getCanonicalPath(canonicalUrl);
  const fullUrl = canonicalUrl ? toAbsoluteUrl(canonicalUrl) : `${SITE_URL}${canonicalPath}`;
  const defaultOgImage = `${SITE_URL}/og-image.webp`;
  const resolvedOgImage = ogImage ? toAbsoluteUrl(ogImage) : defaultOgImage;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;
  const resolvedTwitterTitle = twitterTitle ?? resolvedOgTitle;
  const resolvedTwitterDescription = twitterDescription ?? resolvedOgDescription;
  const resolvedTwitterImage = twitterImage ? toAbsoluteUrl(twitterImage) : resolvedOgImage;
  const resolvedBreadcrumbs = breadcrumbs ?? buildBreadcrumbs(canonicalPath);

  const organizationSchema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Meinautoverkauf.de",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.webp`
  };

  const websiteSchema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Meinautoverkauf.de",
    url: `${SITE_URL}/`,
    inLanguage: "de-DE",
    publisher: {
      "@id": `${SITE_URL}/#organization`
    }
  };

  const webpageSchema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${fullUrl}#webpage`,
    url: fullUrl,
    name: title,
    description,
    inLanguage: "de-DE",
    isPartOf: {
      "@id": `${SITE_URL}/#website`
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`
    }
  };

  const breadcrumbSchema: JsonLdObject | null = !noindex && resolvedBreadcrumbs.length > 1 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${fullUrl}#breadcrumb`,
    itemListElement: resolvedBreadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: toAbsoluteUrl(crumb.path),
    }))
  } : null;

  if (breadcrumbSchema) {
    webpageSchema.breadcrumb = { "@id": `${fullUrl}#breadcrumb` };
  }

  const resolvedExtraSchemas = Array.isArray(extraSchemas)
    ? extraSchemas
    : extraSchemas
      ? [extraSchemas]
      : [];

  const schemaBlocks: JsonLdObject[] = mergeAndDedupeFaqSchemas([
    organizationSchema,
    websiteSchema,
    webpageSchema,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...resolvedExtraSchemas,
  ]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      {noindex && <meta name="googlebot" content="noindex,nofollow" />}
      <link rel="alternate" hrefLang="de-DE" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="Meinautoverkauf.de" />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:secure_url" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Auto verkaufen online bei Meinautoverkauf.de" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={resolvedTwitterTitle} />
      <meta name="twitter:description" content={resolvedTwitterDescription} />
      <meta name="twitter:image" content={resolvedTwitterImage} />
      <meta name="twitter:image:alt" content="Auto verkaufen online bei Meinautoverkauf.de" />

      {schemaBlocks.map((schema, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default MetaTags;
