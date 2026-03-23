import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
