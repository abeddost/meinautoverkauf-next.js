'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ConfirmationStep from '@/components/ConfirmationStep';

const ConfirmationPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="hidden sm:block flex-shrink-0 border-b border-slate-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
            aria-label="Meinautoverkauf Startseite"
          >
            <img
              src="/logo.webp"
              srcSet="/logo-295.webp 295w, /logo.webp 700w"
              sizes="(max-width: 1023px) 220px, 295px"
              alt="MeinAutoVerkauf.de"
              className="h-20 lg:h-24 w-auto"
              width={1260}
              height={410}
              loading="eager"
              decoding="async"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="sr-only">Zur Startseite</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow py-4 sm:py-8 lg:py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-0 sm:px-4 py-6 sm:py-10 lg:py-6">
          <ConfirmationStep onReset={() => router.replace('/')} />
        </div>
      </main>
    </div>
  );
};

export default ConfirmationPage;
