import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const HYUNDAI_CONTENT = BRAND_SEO_CONTENT.hyundai;

export const metadata: Metadata = buildPageMetadata({
  title: HYUNDAI_CONTENT.landing.seoTitle,
  description: HYUNDAI_CONTENT.landing.seoDescription,
  path: HYUNDAI_CONTENT.landing.canonicalPath,
});

export default function HyundaiVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    HYUNDAI_CONTENT.landing.canonicalPath,
    HYUNDAI_CONTENT.landing.faqs,
  );
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: HYUNDAI_CONTENT.displayName, path: HYUNDAI_CONTENT.landing.canonicalPath },
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
          { name: HYUNDAI_CONTENT.displayName, href: HYUNDAI_CONTENT.landing.canonicalPath },
        ]}
      />
      <RouteHero
        headline={HYUNDAI_CONTENT.landing.heroHeadline}
        subheadline={HYUNDAI_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
      />
      <BrandAutoankaufLanding brandSlug={HYUNDAI_CONTENT.slug} />
    </>
  );
}
