'use client';

import VorteilePage from '@/page-components/VorteilePage';

export default function VorteileWrapper() {
  return (
    <VorteilePage
      onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  );
}
