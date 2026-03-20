import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const BMW_CONTENT = BRAND_SEO_CONTENT.bmw;

export const metadata: Metadata = {
  title: BMW_CONTENT.landing.seoTitle,
  description: BMW_CONTENT.landing.seoDescription,
  alternates: { canonical: BMW_CONTENT.landing.canonicalPath },
};

export default function BmwVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    BMW_CONTENT.landing.canonicalPath,
    BMW_CONTENT.landing.faqs,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RouteHero
        headline={BMW_CONTENT.landing.heroHeadline}
        subheadline={BMW_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={BMW_CONTENT.slug} />
    </>
  );
}
