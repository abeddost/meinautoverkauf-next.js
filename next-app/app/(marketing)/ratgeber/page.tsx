import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import RatgeberPage from '@/page-components/Ratgeber';
import RouteHero from '@/components/RouteHero';
import Breadcrumb from '@/components/Breadcrumb';
import { buildBreadcrumbSchema } from '@/lib/structuredData';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Ratgeber: Gebrauchtwagen verkaufen',
  description:
    'Ratgeber zum Autoverkauf: Unterlagen, Kaufvertrag, Abmeldung, Schäden, Preisfaktoren und Betrugsschutz. Alle Leitfäden nach Thema sortiert.',
  path: '/ratgeber',
});

export default function RatgeberRoute() {
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Ratgeber', path: '/ratgeber' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Ratgeber', href: '/ratgeber' },
        ]}
      />
      <RouteHero
        headline="Ratgeber: Gebrauchtwagen richtig verkaufen"
        subheadline="Unterlagen, Kaufvertrag, Schäden und Preis: alle Leitfäden nach Thema"
        accent="ratgeber"
      />
      <RatgeberPage />
    </>
  );
}
