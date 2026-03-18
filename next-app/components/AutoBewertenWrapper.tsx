'use client';

import AutoBewertenPage from '@/page-components/AutoBewerten';

export default function AutoBewertenWrapper() {
  return (
    <AutoBewertenPage
      onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  );
}
