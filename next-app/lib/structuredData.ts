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
