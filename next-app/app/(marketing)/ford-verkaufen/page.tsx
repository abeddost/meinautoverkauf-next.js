import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const FORD_CONTENT = BRAND_SEO_CONTENT.ford;

export const metadata: Metadata = {
  title: FORD_CONTENT.landing.seoTitle,
  description: FORD_CONTENT.landing.seoDescription,
  alternates: { canonical: FORD_CONTENT.landing.canonicalPath },
};

export default function FordVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    FORD_CONTENT.landing.canonicalPath,
    FORD_CONTENT.landing.faqs,
  );
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: FORD_CONTENT.displayName, path: FORD_CONTENT.landing.canonicalPath },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Marken', href: '/marken' },
          { name: FORD_CONTENT.displayName, href: FORD_CONTENT.landing.canonicalPath },
        ]}
      />
      <RouteHero
        headline={FORD_CONTENT.landing.heroHeadline}
        subheadline={FORD_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={FORD_CONTENT.slug} />
    </>
  );
}
