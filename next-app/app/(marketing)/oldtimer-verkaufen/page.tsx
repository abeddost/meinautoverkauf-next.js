import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

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
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: OLDTIMER_CONTENT.displayName, path: OLDTIMER_CONTENT.landing.canonicalPath },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Marken', href: '/marken' },
          { name: OLDTIMER_CONTENT.displayName, href: OLDTIMER_CONTENT.landing.canonicalPath },
        ]}
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
