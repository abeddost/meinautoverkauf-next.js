import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const AUDI_CONTENT = BRAND_SEO_CONTENT.audi;

export const metadata: Metadata = {
  title: AUDI_CONTENT.landing.seoTitle,
  description: AUDI_CONTENT.landing.seoDescription,
  alternates: { canonical: AUDI_CONTENT.landing.canonicalPath },
};

export default function AudiVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    AUDI_CONTENT.landing.canonicalPath,
    AUDI_CONTENT.landing.faqs,
  );
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: AUDI_CONTENT.displayName, path: AUDI_CONTENT.landing.canonicalPath },
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
          { name: AUDI_CONTENT.displayName, href: AUDI_CONTENT.landing.canonicalPath },
        ]}
      />
      <RouteHero
        headline={AUDI_CONTENT.landing.heroHeadline}
        subheadline={AUDI_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={AUDI_CONTENT.slug} />
    </>
  );
}
