'use client';

import AutoVerkaufenPage from '@/page-components/AutoVerkaufen';

export default function AutoVerkaufenWrapper() {
  return (
    <AutoVerkaufenPage
      onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  );
}
