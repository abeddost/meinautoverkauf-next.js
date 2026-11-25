/**
 * Keeps the shown offer below the customer's Wunschpreis.
 *
 * - AI price already below the Wunschpreis  -> AI price is shown.
 * - AI price at or above the Wunschpreis    -> offer is set just below the Wunschpreis.
 * - Wunschpreis more than 70 % below the AI price (not a realistic price for
 *   this car, e.g. a typo or placeholder)   -> AI price is shown.
 */

/** The offer is this share of the Wunschpreis when the AI price is not below it. */
const OFFER_SHARE_OF_WUNSCHPREIS = 0.92;

/** A Wunschpreis below this share of the AI price counts as unrealistically low. */
const MIN_REALISTIC_SHARE_OF_AI_PRICE = 0.3;

/** Width of the price corridor around an offer derived from the Wunschpreis. */
const CORRIDOR_SPREAD = 0.03;

interface PricedValuation {
  estimatedPrice: number;
  priceRange: { min: number; max: number };
}

export function parseWunschpreis(raw: unknown): number | null {
  if (typeof raw === 'number') return Number.isFinite(raw) && raw > 0 ? Math.round(raw) : null;
  if (typeof raw !== 'string') return null;
  const parsed = parseInt(raw.replace(/\D/g, ''), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

export function applyWunschpreisRule<T extends PricedValuation>(valuation: T, desiredPrice: unknown): T {
  const wished = parseWunschpreis(desiredPrice);
  const aiPrice = valuation.estimatedPrice;
  if (wished === null || !Number.isFinite(aiPrice) || aiPrice <= 0) return valuation;

  if (aiPrice < wished) return valuation;
  if (wished < aiPrice * MIN_REALISTIC_SHARE_OF_AI_PRICE) return valuation;

  const offer = Math.round(wished * OFFER_SHARE_OF_WUNSCHPREIS);
  return {
    ...valuation,
    estimatedPrice: offer,
    priceRange: {
      min: Math.round(offer * (1 - CORRIDOR_SPREAD)),
      max: Math.round(offer * (1 + CORRIDOR_SPREAD)),
    },
  };
}
