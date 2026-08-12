import type { FAQItem } from './faqContent';

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

export const buildLocalBusinessSchema = (siteUrl: string): Record<string, unknown> => {
  const url = toAbsolutePageUrl(siteUrl, '/');
  const normalizedSiteUrl = siteUrl.replace(/\/+$/, '');

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    name: "Meinautoverkauf.de",
    legalName: "Autohaus HF – Inhaber: Idris Sarwari",
    url,
    image: `${normalizedSiteUrl}/logo.webp`,
    logo: `${normalizedSiteUrl}/logo.webp`,
    telephone: "+491782415897",
    email: "info@meinautoverkauf.de",
    vatID: "DE332778289",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Am Kuemmerling 41a",
      postalCode: "55294",
      addressLocality: "Bodenheim",
      addressRegion: "Rheinland-Pfalz",
      addressCountry: "DE",
    },
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
