import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const OPEL_CONTENT = BRAND_SEO_CONTENT.opel;

export const metadata: Metadata = {
  title: OPEL_CONTENT.landing.seoTitle,
  description: OPEL_CONTENT.landing.seoDescription,
  alternates: { canonical: OPEL_CONTENT.landing.canonicalPath },
};

export default function OpelVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    OPEL_CONTENT.landing.canonicalPath,
    OPEL_CONTENT.landing.faqs,
  );
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: OPEL_CONTENT.displayName, path: OPEL_CONTENT.landing.canonicalPath },
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
          { name: OPEL_CONTENT.displayName, href: OPEL_CONTENT.landing.canonicalPath },
        ]}
      />
      <RouteHero
        headline={OPEL_CONTENT.landing.heroHeadline}
        subheadline={OPEL_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={OPEL_CONTENT.slug} />
    </>
  );
}
