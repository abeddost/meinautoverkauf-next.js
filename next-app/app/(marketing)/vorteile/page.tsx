import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import VorteilePage from '@/page-components/VorteilePage';
import RouteHero from '@/components/RouteHero';
import Breadcrumb from '@/components/Breadcrumb';
import { buildBreadcrumbSchema } from '@/lib/structuredData';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Ihre Vorteile beim Autoankauf',
  description:
    'Warum an uns verkaufen? Kostenlose Bewertung, fester Termin in unserer Filiale, keine versteckten Kosten und Abmeldung inklusive. Und wann privat mehr bringt.',
  path: '/vorteile',
});

export default function VorteileRoute() {
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Ihre Vorteile', path: '/vorteile' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Ihre Vorteile', href: '/vorteile' },
        ]}
      />
      <RouteHero
        headline="Ihre Vorteile beim Autoankauf"
        subheadline="Was Sie von uns erwarten können und was nicht"
        accent="vorteile"
      />
      <VorteilePage />
    </>
  );
}
