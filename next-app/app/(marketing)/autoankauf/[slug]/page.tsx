import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CITY_SEO_DATA, CITY_SEO_BY_SLUG } from '@/lib/citySeoData';
import CityPageWrapper from '@/components/CityPageWrapper';
import RouteHero from '@/components/RouteHero';
import Breadcrumb from '@/components/Breadcrumb';
import CityLocationInfo from '@/components/CityLocationInfo';
import { buildBreadcrumbSchema } from '@/lib/structuredData';
import { getNearestCitySlugs } from '@/lib/cityGeo';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CITY_SEO_DATA.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = CITY_SEO_BY_SLUG[slug];
  if (!city) return {};

  return {
    title: city.title,
    description: city.description,
    alternates: { canonical: city.path },
  };
}

export default async function AutoankaufCityRoute({ params }: Props) {
  const { slug } = await params;
  const city = CITY_SEO_BY_SLUG[slug];
  if (!city) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Standorte', path: '/standorte' },
    { name: city.cityName, path: city.path },
  ]);

  const nearbyCities = getNearestCitySlugs(city.slug, 3)
    .map(({ slug: nearbySlug }) => CITY_SEO_BY_SLUG[nearbySlug])
    .filter((nearbyCity): nearbyCity is NonNullable<typeof nearbyCity> => Boolean(nearbyCity))
    .map((nearbyCity) => ({ cityName: nearbyCity.cityName, path: nearbyCity.path }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Standorte', href: '/standorte' },
          { name: city.cityName, href: city.path },
        ]}
      />
      <RouteHero
        headline={city.heroHeadline}
        subheadline={city.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <CityPageWrapper slug={city.pageComponentName} />
      <CityLocationInfo state={city.state} nearbyCities={nearbyCities} />
    </>
  );
}
