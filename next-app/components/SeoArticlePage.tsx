import RouteHero from '@/components/RouteHero';
import Breadcrumb from '@/components/Breadcrumb';
import SeoArticle, { type SeoArticleContent } from '@/components/SeoArticle';
import { stripRichText } from '@/components/RichText';
import { buildBreadcrumbSchema, buildFaqPageSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';

interface Props {
  path: `/${string}`;
  breadcrumbs: { name: string; href: string }[];
  heroHeadline: string;
  heroSubheadline: string;
  content: SeoArticleContent;
}

/** Page shell shared by model pages and city service pages: schema, breadcrumb, hero, article. */
export default function SeoArticlePage({ path, breadcrumbs, heroHeadline, heroSubheadline, content }: Props) {
  const faqSchema = buildFaqPageSchema(
    SITE_URL,
    path,
    content.faqs.map((faq) => ({ q: stripRichText(faq.q), a: stripRichText(faq.a) })),
  );
  const breadcrumbSchema = buildBreadcrumbSchema(
    SITE_URL,
    breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb items={breadcrumbs} />
      <RouteHero headline={heroHeadline} subheadline={heroSubheadline} accent="verkaufen" headlineTag="h2" />
      <SeoArticle content={content} />
    </>
  );
}
