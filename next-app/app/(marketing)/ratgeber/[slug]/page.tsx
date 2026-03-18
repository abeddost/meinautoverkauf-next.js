import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GUIDE_CONTENT, getGuideBySlug, getGuidePath } from '@/lib/guideContent';
import RatgeberGuideWrapper from '@/components/RatgeberGuideWrapper';
import RouteHero from '@/components/RouteHero';

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

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: getGuidePath(guide.slug) },
  };
}

export default async function RatgeberGuideRoute({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <RouteHero
        headline={guide.h1}
        subheadline="Praxisleitfaden mit Checklisten, Preisfaktoren und klaren nächsten Schritten"
        accent="ratgeber"
        headlineTag="h2"
      />
      <RatgeberGuideWrapper slug={slug} />
    </>
  );
}
