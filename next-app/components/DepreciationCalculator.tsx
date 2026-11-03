'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { DEPRECIATION_TABLE, calculateResidualRange, formatEuro } from '@/lib/depreciation';

const DEFAULT_PRICE = 30000;
const MAX_PRICE = 500000;

export default function DepreciationCalculator() {
  const priceId = useId();
  const ageId = useId();
  const [price, setPrice] = useState(String(DEFAULT_PRICE));
  const [years, setYears] = useState(5);

  const parsedPrice = Number(price);
  const isValidPrice = Number.isFinite(parsedPrice) && parsedPrice >= 1000 && parsedPrice <= MAX_PRICE;
  const step = DEPRECIATION_TABLE.find((item) => item.years === years) ?? DEPRECIATION_TABLE[0];
  const range = isValidPrice ? calculateResidualRange(parsedPrice, step) : null;

  return (
    <section aria-label="Wertverlust-Rechner" className="rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
      <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Wertverlust berechnen</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor={priceId} className="block text-sm font-bold text-slate-700 mb-2">
            Neupreis in Euro
          </label>
          <input
            id={priceId}
            type="number"
            inputMode="numeric"
            min={1000}
            max={MAX_PRICE}
            step={500}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
        </div>
        <div>
          <label htmlFor={ageId} className="block text-sm font-bold text-slate-700 mb-2">
            Alter des Autos
          </label>
          <select
            id={ageId}
            value={years}
            onChange={(event) => setYears(Number(event.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange"
          >
            {DEPRECIATION_TABLE.map((item) => (
              <option key={item.years} value={item.years}>
                {item.years} {item.years === 1 ? 'Jahr' : 'Jahre'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div aria-live="polite" className="rounded-2xl bg-white border border-orange-200 p-5">
        {range ? (
          <>
            <p className="text-sm font-semibold text-slate-600 mb-1">Geschätzter Restwert als grober Richtwert</p>
            <p className="text-2xl lg:text-3xl font-black text-brand-dark mb-2">
              {formatEuro(range.low)} bis {formatEuro(range.high)}
            </p>
            <p className="text-sm text-slate-600 font-medium">
              Das entspricht einem Wertverlust von etwa {step.lossLow} bis {step.lossHigh} Prozent.
            </p>
          </>
        ) : (
          <p className="text-sm font-semibold text-slate-600">Bitte geben Sie einen Neupreis zwischen 1.000 und 500.000 Euro ein.</p>
        )}
      </div>

      <p className="text-sm text-slate-600 font-medium mt-4">
        Der Rechner kennt weder Ihr Modell noch den Zustand. Eine Einschätzung für Ihr konkretes Auto erhalten Sie mit unserer{' '}
        <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
          kostenlosen Bewertung
        </Link>
        .
      </p>
    </section>
  );
}
