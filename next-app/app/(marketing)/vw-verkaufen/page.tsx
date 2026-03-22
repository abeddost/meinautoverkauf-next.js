import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const VW_CONTENT = BRAND_SEO_CONTENT.vw;

export const metadata: Metadata = {
  title: VW_CONTENT.landing.seoTitle,
  description: VW_CONTENT.landing.seoDescription,
  alternates: { canonical: VW_CONTENT.landing.canonicalPath },
};

export default function VwVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    VW_CONTENT.landing.canonicalPath,
    VW_CONTENT.landing.faqs,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RouteHero
        headline={VW_CONTENT.landing.heroHeadline}
        subheadline={VW_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={VW_CONTENT.slug} />
    </>
  );
}
