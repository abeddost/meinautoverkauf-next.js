'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BookingStep from '@/components/BookingStep';
import Footer from '@/components/Footer';
import type { CarDetails, ValuationResult } from '@/types';

const BookingPage: React.FC = () => {
  const router = useRouter();

  // Hydration-safe mount gate
  const [mounted, setMounted] = useState(false);
  const [carDetails, setCarDetails] = useState<CarDetails | undefined>(undefined);
  const [valuation, setValuation] = useState<ValuationResult | undefined>(undefined);
  const [estimationId, setEstimationId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      const raw = sessionStorage.getItem('booking_data');
      if (raw) {
        const parsed = JSON.parse(raw) as {
          carDetails?: CarDetails;
          valuation?: ValuationResult;
          estimationId?: string | null;
        };
        setCarDetails(parsed.carDetails);
        setValuation(parsed.valuation);
        setEstimationId(parsed.estimationId ?? null);
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!carDetails || !valuation) {
      router.replace('/');
    }
  }, [mounted, carDetails, valuation, router]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-brand-orange border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!carDetails || !valuation) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="hidden sm:block flex-shrink-0 border-b border-slate-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 h-16 lg:h-[72px] flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
            aria-label="Meinautoverkauf Startseite"
          >
            <img
              src="/logo.webp"
              srcSet="/logo-295.webp 295w, /logo.webp 700w"
              sizes="220px"
              alt="MeinAutoVerkauf.de"
              className="h-20 lg:h-20 w-auto"
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

      <main className="flex-grow py-3 sm:py-6 lg:py-5 px-4 sm:px-5 lg:px-6">
        <div className="container mx-auto px-0 sm:px-2 py-3 sm:py-6 lg:py-7">
          <BookingStep
            estimationId={estimationId}
            onComplete={() => router.replace('/vielen-dank')}
            onBack={() => {
              if (typeof window !== 'undefined') {
                sessionStorage.setItem(
                  'valuation_result',
                  JSON.stringify({ carDetails, valuation, estimationId }),
                );
              }
              router.replace('/bewertung-ergebnis');
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
