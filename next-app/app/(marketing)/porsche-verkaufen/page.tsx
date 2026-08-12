import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const PORSCHE_CONTENT = BRAND_SEO_CONTENT.porsche;

export const metadata: Metadata = {
  title: PORSCHE_CONTENT.landing.seoTitle,
  description: PORSCHE_CONTENT.landing.seoDescription,
  alternates: { canonical: PORSCHE_CONTENT.landing.canonicalPath },
};

export default function PorscheVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    PORSCHE_CONTENT.landing.canonicalPath,
    PORSCHE_CONTENT.landing.faqs,
  );
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: PORSCHE_CONTENT.displayName, path: PORSCHE_CONTENT.landing.canonicalPath },
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
          { name: PORSCHE_CONTENT.displayName, href: PORSCHE_CONTENT.landing.canonicalPath },
        ]}
      />
      <RouteHero
        headline={PORSCHE_CONTENT.landing.heroHeadline}
        subheadline={PORSCHE_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={PORSCHE_CONTENT.slug} />
    </>
  );
}
