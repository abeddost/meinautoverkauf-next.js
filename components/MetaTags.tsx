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
  pageType?: 'WebPage' | 'CollectionPage' | 'Service' | 'AboutPage' | 'ContactPage';
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
  impressum: 'Impressum',
  datenschutz: 'Datenschutz',
  admin: 'Admin',
  login: 'Login',
  'bewertung-laeuft': 'Bewertung läuft',
  'bewertung-ergebnis': 'Bewertung Ergebnis',
  'termin-buchen': 'Termin buchen',
  'vielen-dank': 'Vielen Dank',
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

const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  canonicalUrl,
  noindex = false,
  ogImage,
  pageType = 'WebPage',
  breadcrumbs,
  extraSchemas,
}) => {
  const canonicalPath = getCanonicalPath(canonicalUrl);
  const fullUrl = canonicalUrl ? toAbsoluteUrl(canonicalUrl) : `${SITE_URL}${canonicalPath}`;
  const defaultOgImage = `${SITE_URL}/og-image.webp`;
  const resolvedOgImage = ogImage ? toAbsoluteUrl(ogImage) : defaultOgImage;
  const resolvedBreadcrumbs = breadcrumbs ?? buildBreadcrumbs(canonicalPath);

  const organizationSchema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Meinautoverkauf.de",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.webp`,
    inLanguage: "de-DE"
  };

  const websiteSchema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Meinautoverkauf.de",
    url: SITE_URL,
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

  const schemaBlocks: JsonLdObject[] = [
    organizationSchema,
    websiteSchema,
    webpageSchema,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...resolvedExtraSchemas,
  ];

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
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
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
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedOgImage} />
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
