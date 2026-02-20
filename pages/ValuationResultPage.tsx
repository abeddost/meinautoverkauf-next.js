import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import ValuationResults from '../components/ValuationResults';
import MetaTags from '../components/MetaTags';
import Footer from '../components/Footer';
import { CarDetails, ValuationResult } from '../types';
import { submitEstimation } from '../lib/supabaseFunctions';
import { consumePendingPhotoPromise } from '../lib/pendingPhotoUpload';

const ValuationResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { carDetails?: CarDetails; valuation?: ValuationResult; estimationId?: string } | null;
  const carDetails = state?.carDetails;
  const valuation = state?.valuation;
  const [estimationId, setEstimationId] = useState<string | null>(state?.estimationId ?? null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const submittedRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!carDetails || !valuation) {
      navigate('/', { replace: true });
    }
  }, [carDetails, valuation, navigate]);

  useEffect(() => {
    if (!carDetails || !valuation || submittedRef.current || estimationId) return;
    submittedRef.current = true;
    setSubmitting(true);
    setSubmitError(null);

    consumePendingPhotoPromise()
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
          },
          valuation: {
            estimatedPrice: valuation.estimatedPrice,
            priceRange: valuation.priceRange,
            explanation: valuation.explanation,
            marketTrend: valuation.marketTrend,
            sources: valuation.sources,
          },
          photos: pendingPhotoPaths,
        };

        return submitEstimation(body);
      })
      .then(({ data, error, status }) => {
        if (data?.estimationId) {
          setEstimationId(data.estimationId);
        } else {
          setSubmitError(
            status === 429
              ? 'Zu viele Anfragen. Bitte kurz warten und Seite neu laden.'
              : (error?.error ?? 'Speichern fehlgeschlagen. Sie können trotzdem fortfahren.')
          );
        }
      })
      .catch(() => setSubmitError('Speichern fehlgeschlagen. Sie können trotzdem fortfahren.'))
      .finally(() => setSubmitting(false));
  }, [carDetails, valuation, estimationId]);

  if (!carDetails || !valuation) {
    return null;
  }

  const effectiveEstimationId = estimationId ?? state?.estimationId ?? null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MetaTags
        title="Ihr Ankauf-Angebot | Meinautoverkauf.de"
        description="Ihr persönliches Ankauf-Angebot – fair, transparent und sofort gültig."
        canonicalUrl="/bewertung-ergebnis"
        noindex
      />
      {/* Logo area: matches homepage Header */}
      <header className="hidden sm:block flex-shrink-0 border-b border-slate-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
          <Link
            to="/"
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
          </Link>
        </div>
      </header>

      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {submitError && (
            <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 font-semibold">
              {submitError}
            </div>
          )}
          <ValuationResults
            valuation={valuation}
            carDetails={carDetails}
            onNext={() =>
              navigate('/termin-buchen', {
                state: { carDetails, valuation, estimationId: effectiveEstimationId },
              })
            }
            onBack={() => navigate('/')}
            isSubmitting={submitting}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ValuationResultPage;
