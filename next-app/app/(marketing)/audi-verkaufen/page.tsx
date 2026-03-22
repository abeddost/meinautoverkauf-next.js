import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
