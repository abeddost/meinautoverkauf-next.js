'use client';

import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import type { CarDetails, ValuationResult } from '@/types';
import { savePartialLead } from '@/lib/supabaseFunctions';
import { consumePendingPhotoPromise } from '@/lib/pendingPhotoUpload';
import { setPendingPartialSavePromise } from '@/lib/pendingPartialSave';

interface RouteHeroProps {
  headline: string;
  subheadline: string;
  accent: 'home' | 'bewerten' | 'verkaufen' | 'vorteile' | 'ratgeber';
  headlineTag?: 'h1' | 'h2';
}

export default function RouteHero({
  headline,
  subheadline,
  accent,
  headlineTag = 'h2',
}: RouteHeroProps) {
  const router = useRouter();

  const handleValuationSubmit = (formData: CarDetails) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('valuation_form_data', JSON.stringify(formData));
    }

    const partialPromise = consumePendingPhotoPromise().then((photos) =>
      savePartialLead({
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
        car: {
          brand: formData.brand,
          model: formData.model,
          variant: formData.variant,
          year: formData.year,
          mileage: formData.mileage,
          power: formData.power,
          fuelType: formData.fuelType,
          transmission: formData.transmission,
          bodyType: formData.bodyType,
          condition: formData.condition,
          postalCode: formData.postalCode,
          desiredPrice: formData.desiredPrice || undefined,
          vin: formData.vin,
          doors: formData.doors,
          color: formData.color,
        },
        photos: photos ?? [],
      })
        .then((r) => r.data?.estimationId ?? null)
        .catch(() => null),
    );
    setPendingPartialSavePromise(partialPromise);

    router.push('/bewertung-laeuft');
  };

  const handleValuationComplete = (details: CarDetails, result: ValuationResult) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(
        'valuation_result',
        JSON.stringify({ carDetails: details, valuation: result }),
      );
    }
    router.push('/bewertung-ergebnis');
  };

  return (
    <Hero
      onValuationComplete={handleValuationComplete}
      onValuationSubmit={handleValuationSubmit}
      headline={headline}
      subheadline={subheadline}
      accent={accent}
      headlineTag={headlineTag}
    />
  );
}
