import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import Breadcrumb from '@/components/Breadcrumb';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { buildFaqPageSchema, buildBreadcrumbSchema } from '@/lib/structuredData';

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
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: BMW_CONTENT.displayName, path: BMW_CONTENT.landing.canonicalPath },
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
          { name: BMW_CONTENT.displayName, href: BMW_CONTENT.landing.canonicalPath },
        ]}
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
