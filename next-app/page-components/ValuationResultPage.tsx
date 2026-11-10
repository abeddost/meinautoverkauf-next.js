'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ValuationResults from '@/components/ValuationResults';
import { CarDetails, ValuationResult } from '@/types';
import { submitEstimation } from '@/lib/supabaseFunctions';
import { consumePendingPhotoPromise } from '@/lib/pendingPhotoUpload';
import Footer from '@/components/Footer';

// A Wunschpreis below this share of the AI estimate is treated as a typo or a non-serious entry
// (e.g. "25" for a 10.000 € car, usually meant as 25.000) and ignored instead of capping the price.
const MIN_PLAUSIBLE_WISH_SHARE = 0.5;

function applyWunschpreisCap(valuation: ValuationResult, desiredPrice: string | undefined): ValuationResult {
  const wished = desiredPrice ? parseInt(desiredPrice.replace(/\D/g, ''), 10) : NaN;
  if (!wished || isNaN(wished) || valuation.estimatedPrice <= wished) return valuation;
  if (wished < valuation.estimatedPrice * MIN_PLAUSIBLE_WISH_SHARE) return valuation;
  const capped = Math.round(wished * 0.92);
  return {
    ...valuation,
    estimatedPrice: capped,
    priceRange: { min: Math.round(capped * 0.97), max: Math.round(capped * 1.03) },
  };
}

const ValuationResultPage: React.FC = () => {
  const router = useRouter();

  // Hydration-safe mount gate
  const [mounted, setMounted] = useState(false);
  const [carDetails, setCarDetails] = useState<CarDetails | undefined>(undefined);
  const [rawValuation, setRawValuation] = useState<ValuationResult | undefined>(undefined);
  const [estimationId, setEstimationId] = useState<string | null>(null);

  const valuation =
    rawValuation && carDetails ? applyWunschpreisCap(rawValuation, carDetails.desiredPrice) : rawValuation;

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [saveConfirmed, setSaveConfirmed] = useState(false);
  const [saveAttempt, setSaveAttempt] = useState(0);
  const submittedRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      const raw = sessionStorage.getItem('valuation_result');
      if (raw) {
        const parsed = JSON.parse(raw) as {
          carDetails?: CarDetails;
          valuation?: ValuationResult;
          estimationId?: string;
        };
        setCarDetails(parsed.carDetails);
        setRawValuation(parsed.valuation);
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

  useEffect(() => {
    if (!carDetails || !valuation || submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    setSaveConfirmed(false);
    setSubmitError(null);

    // If estimationId was passed from AnalyzingPage (partial save), photos were
    // already consumed there — pass an empty array so we don't double-upload.
    const photoPromise = estimationId
      ? Promise.resolve([] as { storagePath: string }[])
      : consumePendingPhotoPromise();

    photoPromise
      .then((pendingPhotoPaths) => {
        const body = {
          customer: {
            firstName: carDetails.firstName,
            lastName: carDetails.lastName,
            email: carDetails.email,
            phone: carDetails.phone,
          },
          car: {
            brand: carDetails.brand,
            model: carDetails.model,
            variant: carDetails.variant || carDetails.model || undefined,
            year: carDetails.year,
            mileage: carDetails.mileage,
            fuelType: carDetails.fuelType,
            transmission: carDetails.transmission,
            power: carDetails.power,
            bodyType: carDetails.bodyType,
            condition: carDetails.condition,
            desiredPrice: carDetails.desiredPrice || undefined,
            vin: carDetails.vin,
            doors: carDetails.doors,
            postalCode: carDetails.postalCode,
            color: carDetails.color,
            knownDamages: carDetails.knownDamages || undefined,
            tuv: carDetails.tuv,
            vorbesitzer: carDetails.vorbesitzer,
            letzteInspektion: carDetails.letzteInspektion,
          },
          valuation: {
            estimatedPrice: valuation.estimatedPrice,
            priceRange: valuation.priceRange,
            explanation: valuation.explanation,
            marketTrend: valuation.marketTrend,
            sources: valuation.sources,
          },
          photos: pendingPhotoPaths,
          // If we already saved a partial lead, update it instead of inserting
          ...(estimationId ? { estimationId } : {}),
        };

        return submitEstimation(body);
      })
      .then(({ data, error, status }) => {
        if (data?.estimationId) {
          setEstimationId(data.estimationId);
          setSaveConfirmed(true);
        } else {
          setSubmitError(
            status === 429
              ? 'Zu viele Anfragen. Bitte kurz warten und Seite neu laden.'
              : (error?.error ?? 'Ihre Bewertung konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.')
          );
        }
      })
      .catch(() => setSubmitError('Ihre Bewertung konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.'))
      .finally(() => setSubmitting(false));
  }, [carDetails, valuation, estimationId, saveAttempt]);

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

  const effectiveEstimationId = estimationId;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Logo area: matches homepage Header */}
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

      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {submitError && (
            <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 font-semibold">
              <p>{submitError}</p>
              <button
                type="button"
                disabled={submitting}
                onClick={() => {
                  submittedRef.current = false;
                  setSaveAttempt((attempt) => attempt + 1);
                }}
                className="mt-2 font-bold underline disabled:opacity-50"
              >
                Erneut speichern
              </button>
            </div>
          )}
          <ValuationResults
            valuation={valuation}
            carDetails={carDetails}
            onNext={() => {
              if (!saveConfirmed || !effectiveEstimationId || submitting) return;
              if (typeof window !== 'undefined') {
                sessionStorage.setItem(
                  'booking_data',
                  JSON.stringify({ carDetails, valuation, estimationId: effectiveEstimationId }),
                );
              }
              router.push('/termin-buchen');
            }}
            onBack={() => router.replace('/')}
            isSubmitting={submitting}
            canBook={saveConfirmed && Boolean(effectiveEstimationId)}
          />
        </div>
      </main>
      <Footer showBrandLinks={false} />
    </div>
  );
};

export default ValuationResultPage;
