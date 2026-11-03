import type { FAQItem } from './faqContent';
import { BRANCHES, BUSINESS_PHONE_E164, type Branch } from './branches';

const toAbsolutePageUrl = (siteUrl: string, routePath: string): string => {
  const normalizedSiteUrl = siteUrl.replace(/\/+$/, '');
  if (routePath === '/') {
    return `${normalizedSiteUrl}/`;
  }

  const normalizedPath = routePath.startsWith('/') ? routePath : `/${routePath}`;
  return `${normalizedSiteUrl}${normalizedPath}`;
};

export const buildFaqPageSchema = (
  siteUrl: string,
  routePath: string,
  faqs: FAQItem[],
): Record<string, unknown> => {
  const pageUrl = toAbsolutePageUrl(siteUrl, routePath);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
};

const buildBranchLocation = (branch: Branch): Record<string, unknown> => ({
  address: {
    "@type": "PostalAddress",
    streetAddress: branch.streetAddress,
    postalCode: branch.postalCode,
    addressLocality: branch.locality,
    addressRegion: branch.region,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: branch.lat,
    longitude: branch.lng,
  },
});

export const buildLocalBusinessSchema = (siteUrl: string): Record<string, unknown> => {
  const url = toAbsolutePageUrl(siteUrl, '/');
  const normalizedSiteUrl = siteUrl.replace(/\/+$/, '');

  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": `${url}#localbusiness`,
    name: "Meinautoverkauf.de",
    legalName: "Autohaus HF – Inhaber: Idris Sarwari",
    url,
    image: `${normalizedSiteUrl}/logo.webp`,
    logo: `${normalizedSiteUrl}/logo.webp`,
    telephone: BUSINESS_PHONE_E164,
    email: "info@meinautoverkauf.de",
    vatID: "DE332778289",
    ...buildBranchLocation(BRANCHES.bodenheim),
    hasMap: "https://share.google/qn8pSz064K7Cy6c6S",
    department: [
      {
        "@type": "AutoDealer",
        name: "Meinautoverkauf.de Rüsselsheim",
        url: toAbsolutePageUrl(siteUrl, BRANCHES.ruesselsheim.path),
        telephone: BUSINESS_PHONE_E164,
        ...buildBranchLocation(BRANCHES.ruesselsheim),
      },
    ],
  };
};

export const buildWebsiteSchema = (siteUrl: string): Record<string, unknown> => {
  const url = toAbsolutePageUrl(siteUrl, '/');

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    name: "Meinautoverkauf.de",
    url,
    inLanguage: "de-DE",
    publisher: { "@id": `${url}#localbusiness` },
  };
};

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export const buildBreadcrumbSchema = (
  siteUrl: string,
  items: BreadcrumbItem[],
): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsolutePageUrl(siteUrl, item.path),
  })),
});

interface ArticleSchemaInput {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

export const buildArticleSchema = (
  siteUrl: string,
  { path, headline, description, datePublished, dateModified }: ArticleSchemaInput,
): Record<string, unknown> => {
  const pageUrl = toAbsolutePageUrl(siteUrl, path);
  const homeUrl = toAbsolutePageUrl(siteUrl, '/');

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline,
    description,
    mainEntityOfPage: pageUrl,
    inLanguage: "de-DE",
    image: [toAbsolutePageUrl(siteUrl, '/og-image.webp')],
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Meinautoverkauf.de",
      url: homeUrl,
    },
    publisher: { "@id": `${homeUrl}#localbusiness` },
  };
};
