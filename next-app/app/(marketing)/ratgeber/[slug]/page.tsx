import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GUIDE_CONTENT, getGuideBySlug, getGuidePath } from '@/lib/guideContent';
import { buildFaqPageSchema } from '@/lib/structuredData';
import { stripRichText } from '@/components/RichText';
import RatgeberGuideWrapper from '@/components/RatgeberGuideWrapper';
import RouteHero from '@/components/RouteHero';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';

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
    title: guide.titleAbsolute ? { absolute: guide.title } : guide.title,
    description: guide.description,
    alternates: { canonical: getGuidePath(guide.slug) },
  };
}

export default async function RatgeberGuideRoute({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const guidePath = getGuidePath(guide.slug);
  const pageUrl = `${SITE_URL.replace(/\/+$/, '')}${guidePath}`;
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    guidePath,
    guide.faqs.map((faq) => ({ q: stripRichText(faq.q), a: stripRichText(faq.a) })),
  );
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: guide.h1,
    description: guide.description,
    mainEntityOfPage: pageUrl,
    inLanguage: 'de-DE',
    author: { '@type': 'Organization', name: 'Meinautoverkauf.de' },
    publisher: { '@id': `${SITE_URL.replace(/\/+$/, '')}/#localbusiness` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
