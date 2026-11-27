import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import Breadcrumb from '@/components/Breadcrumb';
import BrandAutoankaufLanding from '@/components/BrandAutoankaufLanding';
import { buildBreadcrumbSchema, buildFaqPageSchema } from '@/lib/structuredData';
import type { ServiceLandingContent } from '@/lib/serviceLandingContent';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';

/** Metadata for service landings: absolute title so the <title> stays within 60 characters. */
export const buildServiceLandingMetadata = ({ landing }: ServiceLandingContent): Metadata => ({
  title: { absolute: landing.seoTitle },
  description: landing.seoDescription,
  alternates: { canonical: landing.canonicalPath },
});

/** Same shell as /oldtimer-verkaufen: schema, breadcrumb (Home / Marken / Seite), hero, landing body. */
export default function ServiceLandingPage({ content }: { content: ServiceLandingContent }) {
  const { landing, displayName } = content;
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Marken', path: '/marken' },
    { name: displayName, path: landing.canonicalPath },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqPageSchema(SITE_URL, landing.canonicalPath, landing.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(SITE_URL, trail)) }}
      />
      <Breadcrumb items={trail.map((item) => ({ name: item.name, href: item.path }))} />
      <RouteHero
        headline={landing.heroHeadline}
        subheadline={landing.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <BrandAutoankaufLanding content={content} />
    </>
  );
}
