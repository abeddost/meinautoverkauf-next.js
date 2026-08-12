import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const SKODA_CONTENT = BRAND_SEO_CONTENT.skoda;

export const metadata: Metadata = {
  title: SKODA_CONTENT.landing.seoTitle,
  description: SKODA_CONTENT.landing.seoDescription,
  alternates: { canonical: SKODA_CONTENT.landing.canonicalPath },
};

export default function SkodaVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    SKODA_CONTENT.landing.canonicalPath,
    SKODA_CONTENT.landing.faqs,
  );
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: SKODA_CONTENT.displayName, path: SKODA_CONTENT.landing.canonicalPath },
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
          { name: SKODA_CONTENT.displayName, href: SKODA_CONTENT.landing.canonicalPath },
        ]}
      />
      <RouteHero
        headline={SKODA_CONTENT.landing.heroHeadline}
        subheadline={SKODA_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={SKODA_CONTENT.slug} />
    </>
  );
}
