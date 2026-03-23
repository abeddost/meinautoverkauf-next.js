import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
