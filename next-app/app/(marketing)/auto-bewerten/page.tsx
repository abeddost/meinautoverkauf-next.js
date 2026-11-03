import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import AutoBewertenPage from '@/page-components/AutoBewerten';
import RouteHero from '@/components/RouteHero';
import Breadcrumb from '@/components/Breadcrumb';
import { buildBreadcrumbSchema } from '@/lib/structuredData';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Auto bewerten: Was ist mein Auto wert?',
  description:
    'Auto kostenlos online bewerten: In etwa 2 Minuten erhalten Sie eine KI-gestützte, unverbindliche Preiseinschätzung auf Basis aktueller Online-Angebote.',
  path: '/auto-bewerten',
});

export default function AutoBewertenRoute() {
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Auto bewerten', path: '/auto-bewerten' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Auto bewerten', href: '/auto-bewerten' },
        ]}
      />
      <RouteHero
        headline="Auto bewerten: Was ist mein Auto wert?"
        subheadline="In etwa 2 Minuten zur kostenlosen, unverbindlichen Preiseinschätzung"
        accent="bewerten"
      />
      <AutoBewertenPage />
    </>
  );
}
