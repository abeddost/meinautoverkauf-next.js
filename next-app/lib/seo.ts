import type { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
export const SITE_NAME = 'Meinautoverkauf.de';

const TITLE_SUFFIX = ` | ${SITE_NAME}`;
/** Google truncates by pixel width; about 60 characters is the usual safe limit. */
const MAX_TITLE_LENGTH = 60;

const OG_IMAGE = {
  url: '/og-image.webp',
  width: 1200,
  height: 630,
  alt: 'Meinautoverkauf.de – Auto verkaufen online',
};

/** Appends the brand only when the full title still fits. */
export const buildSeoTitle = (title: string): string => {
  const branded = `${title}${TITLE_SUFFIX}`;
  return branded.length <= MAX_TITLE_LENGTH ? branded : title;
};

interface PageMetadataInput {
  title: string;
  description: string;
  /** Root-relative path, resolved against metadataBase. */
  path: string;
  type?: 'website' | 'article';
}

/**
 * Complete metadata for an indexable page. A child `openGraph` block replaces the
 * layout's block instead of merging, so every field is set here on purpose.
 */
export const buildPageMetadata = ({
  title,
  description,
  path,
  type = 'website',
}: PageMetadataInput): Metadata => {
  const seoTitle = buildSeoTitle(title);

  return {
    title: { absolute: seoTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      locale: 'de_DE',
      title: seoTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
};
