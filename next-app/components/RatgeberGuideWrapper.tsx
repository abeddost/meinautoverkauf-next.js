'use client';

import RatgeberGuidePage from '@/page-components/RatgeberGuide';

interface Props {
  slug: string;
}

export default function RatgeberGuideWrapper({ slug }: Props) {
  return (
    <RatgeberGuidePage
      slug={slug}
      onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  );
}
