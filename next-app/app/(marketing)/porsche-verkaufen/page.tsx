import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
