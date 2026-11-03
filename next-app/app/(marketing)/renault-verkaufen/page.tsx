import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const RENAULT_CONTENT = BRAND_SEO_CONTENT.renault;

export const metadata: Metadata = buildPageMetadata({
  title: RENAULT_CONTENT.landing.seoTitle,
  description: RENAULT_CONTENT.landing.seoDescription,
  path: RENAULT_CONTENT.landing.canonicalPath,
});

export default function RenaultVerkaufenRoute() {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    RENAULT_CONTENT.landing.canonicalPath,
    RENAULT_CONTENT.landing.faqs,
  );
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: RENAULT_CONTENT.displayName, path: RENAULT_CONTENT.landing.canonicalPath },
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
          { name: RENAULT_CONTENT.displayName, href: RENAULT_CONTENT.landing.canonicalPath },
        ]}
      />
      <RouteHero
        headline={RENAULT_CONTENT.landing.heroHeadline}
        subheadline={RENAULT_CONTENT.landing.heroSubheadline}
        accent="verkaufen"
      />
      <BrandAutoankaufLanding brandSlug={RENAULT_CONTENT.slug} />
    </>
  );
}
