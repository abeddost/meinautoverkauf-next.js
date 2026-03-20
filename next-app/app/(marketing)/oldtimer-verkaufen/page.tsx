import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const OLDTIMER_CONTENT = BRAND_SEO_CONTENT.oldtimer;

export const metadata: Metadata = {
  title: OLDTIMER_CONTENT.landing.seoTitle,
  description: OLDTIMER_CONTENT.landing.seoDescription,
  alternates: { canonical: OLDTIMER_CONTENT.landing.canonicalPath },
};

export default function OldtimerVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    OLDTIMER_CONTENT.landing.canonicalPath,
    OLDTIMER_CONTENT.landing.faqs,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RouteHero
        headline={OLDTIMER_CONTENT.landing.heroHeadline}
        subheadline={OLDTIMER_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding brandSlug={OLDTIMER_CONTENT.slug} />
    </>
  );
}
