import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CITY_SEO_DATA, CITY_SEO_BY_SLUG } from '@/lib/citySeoData';
import CityPageWrapper from '@/components/CityPageWrapper';
import RouteHero from '@/components/RouteHero';

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

  return (
    <>
      <RouteHero
        headline={city.heroHeadline}
        subheadline={city.heroSubheadline}
        accent="verkaufen"
        headlineTag="h2"
      />
      <CityPageWrapper slug={city.pageComponentName} />
    </>
  );
}
