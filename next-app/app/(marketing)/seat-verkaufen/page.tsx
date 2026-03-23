import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const SEAT_CONTENT = BRAND_SEO_CONTENT.seat;

export const metadata: Metadata = {
  title: SEAT_CONTENT.landing.seoTitle,
  description: SEAT_CONTENT.landing.seoDescription,
  alternates: { canonical: SEAT_CONTENT.landing.canonicalPath },
};

export default function SeatVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    SEAT_CONTENT.landing.canonicalPath,
    SEAT_CONTENT.landing.faqs,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RouteHero
        headline={SEAT_CONTENT.landing.heroHeadline}
        subheadline={SEAT_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={SEAT_CONTENT.slug} />
    </>
  );
}
