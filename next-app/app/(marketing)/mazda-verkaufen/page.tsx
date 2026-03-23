import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
