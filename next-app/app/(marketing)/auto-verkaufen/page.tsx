import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import AutoVerkaufenPage from '@/page-components/AutoVerkaufen';
import RouteHero from '@/components/RouteHero';
import Breadcrumb from '@/components/Breadcrumb';
import { buildBreadcrumbSchema } from '@/lib/structuredData';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Auto verkaufen: sicher, schnell, fair',
  description:
    'Auto verkaufen: Privatverkauf oder Händler, Unterlagen, Kaufvertrag und Preis. So finden Sie den passenden Weg und vermeiden typische Fehler beim Autoverkauf.',
  path: '/auto-verkaufen',
});

export default function AutoVerkaufenRoute() {
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Auto verkaufen', path: '/auto-verkaufen' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Auto verkaufen', href: '/auto-verkaufen' },
        ]}
      />
      <RouteHero
        headline="Auto verkaufen: So finden Sie den passenden Weg"
        subheadline="Privat oder an den Händler? Unterlagen, Preis und Ablauf im Überblick"
        accent="verkaufen"
      />
      <AutoVerkaufenPage />
    </>
  );
}
