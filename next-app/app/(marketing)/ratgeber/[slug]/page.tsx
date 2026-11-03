import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GUIDE_CONTENT, getGuideBySlug, getGuidePath } from '@/lib/guideContent';
import RatgeberGuidePage from '@/page-components/RatgeberGuide';
import RouteHero from '@/components/RouteHero';
import Breadcrumb from '@/components/Breadcrumb';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/structuredData';
import { buildPageMetadata, SITE_URL } from '@/lib/seo';
import { getGuidePublishedDate, getLastModified } from '@/lib/contentDates';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIDE_CONTENT.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return buildPageMetadata({
    title: guide.title,
    description: guide.description,
    path: getGuidePath(guide.slug),
    type: 'article',
  });
}

export default async function RatgeberGuideRoute({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const path = getGuidePath(guide.slug);
  const datePublished = getGuidePublishedDate(guide.slug);
  const articleSchema = buildArticleSchema(SITE_URL, {
    path,
    headline: guide.h1,
    description: guide.description,
    datePublished,
    dateModified: getLastModified(path) ?? datePublished,
  });
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Ratgeber', path: '/ratgeber' },
    { name: guide.h1, path },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Ratgeber', href: '/ratgeber' },
          { name: guide.h1, href: path },
        ]}
      />
      <RouteHero headline={guide.h1} subheadline={guide.description} accent="ratgeber" />
      <RatgeberGuidePage guide={guide} />
    </>
  );
}
