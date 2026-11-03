import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import RouteHero from '@/components/RouteHero';
import Breadcrumb from '@/components/Breadcrumb';
import { buildBreadcrumbSchema } from '@/lib/structuredData';
import { SITE_URL } from '@/lib/seo';
import StandortePage from '@/page-components/StandortePage';

export const metadata: Metadata = buildPageMetadata({
  title: 'Standorte: Bodenheim & Rüsselsheim',
  description:
    'Unsere Filialen in Bodenheim und Rüsselsheim: Adressen, Route und alle Städte, aus denen wir Fahrzeuge ankaufen, sortiert nach Fahrzeit zur nächsten Filiale.',
  path: '/standorte',
});

export default function StandorteRoute() {
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Standorte', path: '/standorte' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Standorte', href: '/standorte' },
        ]}
      />
      <RouteHero
        headline="Autoankauf: Unsere Filialen und Standorte"
        subheadline="Filialen in Bodenheim und Rüsselsheim, Ankauf aus der ganzen Region"
        accent="verkaufen"
      />
      <StandortePage />
    </>
  );
}
