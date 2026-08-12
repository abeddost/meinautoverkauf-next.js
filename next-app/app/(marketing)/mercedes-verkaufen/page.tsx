import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const MERCEDES_CONTENT = BRAND_SEO_CONTENT.mercedes;

export const metadata: Metadata = {
  title: MERCEDES_CONTENT.landing.seoTitle,
  description: MERCEDES_CONTENT.landing.seoDescription,
  alternates: { canonical: MERCEDES_CONTENT.landing.canonicalPath },
};

export default function MercedesVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    MERCEDES_CONTENT.landing.canonicalPath,
    MERCEDES_CONTENT.landing.faqs,
  );
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: MERCEDES_CONTENT.displayName, path: MERCEDES_CONTENT.landing.canonicalPath },
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
          { name: MERCEDES_CONTENT.displayName, href: MERCEDES_CONTENT.landing.canonicalPath },
        ]}
      />
      <RouteHero
        headline={MERCEDES_CONTENT.landing.heroHeadline}
        subheadline={MERCEDES_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={MERCEDES_CONTENT.slug} />
    </>
  );
}
