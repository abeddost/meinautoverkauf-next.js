import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const TOYOTA_CONTENT = BRAND_SEO_CONTENT.toyota;

export const metadata: Metadata = {
  title: TOYOTA_CONTENT.landing.seoTitle,
  description: TOYOTA_CONTENT.landing.seoDescription,
  alternates: { canonical: TOYOTA_CONTENT.landing.canonicalPath },
};

export default function ToyotaVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    TOYOTA_CONTENT.landing.canonicalPath,
    TOYOTA_CONTENT.landing.faqs,
  );
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: TOYOTA_CONTENT.displayName, path: TOYOTA_CONTENT.landing.canonicalPath },
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
          { name: TOYOTA_CONTENT.displayName, href: TOYOTA_CONTENT.landing.canonicalPath },
        ]}
      />
      <RouteHero
        headline={TOYOTA_CONTENT.landing.heroHeadline}
        subheadline={TOYOTA_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={TOYOTA_CONTENT.slug} />
    </>
  );
}
