import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
