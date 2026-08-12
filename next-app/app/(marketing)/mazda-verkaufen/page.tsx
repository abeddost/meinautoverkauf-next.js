import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const MAZDA_CONTENT = BRAND_SEO_CONTENT.mazda;

export const metadata: Metadata = {
  title: MAZDA_CONTENT.landing.seoTitle,
  description: MAZDA_CONTENT.landing.seoDescription,
  alternates: { canonical: MAZDA_CONTENT.landing.canonicalPath },
};

export default function MazdaVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    MAZDA_CONTENT.landing.canonicalPath,
    MAZDA_CONTENT.landing.faqs,
  );
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: MAZDA_CONTENT.displayName, path: MAZDA_CONTENT.landing.canonicalPath },
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
          { name: MAZDA_CONTENT.displayName, href: MAZDA_CONTENT.landing.canonicalPath },
        ]}
      />
      <RouteHero
        headline={MAZDA_CONTENT.landing.heroHeadline}
        subheadline={MAZDA_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={MAZDA_CONTENT.slug} />
    </>
  );
}
