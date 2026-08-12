import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

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
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: VW_CONTENT.displayName, path: VW_CONTENT.landing.canonicalPath },
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
          { name: VW_CONTENT.displayName, href: VW_CONTENT.landing.canonicalPath },
        ]}
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
