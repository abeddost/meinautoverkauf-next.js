'use client';

import RatgeberPage from '@/page-components/Ratgeber';

export default function RatgeberWrapper() {
  return (
    <RatgeberPage
      onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  );
}
