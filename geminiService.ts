import { CarDetails, ValuationResult } from "./types";
import { trackGoogleEvent, toSafeEventValue } from "./lib/analytics";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  const requestId =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}_${Math.random().toString(16).slice(2)}`;
  const hasImages = Boolean(
    (details.images && details.images.length > 0) ||
      (details.pendingPhotoPaths && details.pendingPhotoPaths.length > 0)
  );

  trackGoogleEvent("ai_valuation_form_submitted", {
    request_id: requestId,
    car_brand: toSafeEventValue(details.brand),
    fuel_type: toSafeEventValue(details.fuelType),
    condition: toSafeEventValue(details.condition || undefined),
    has_images: hasImages,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
  trackGoogleEvent("generate_lead", {
    request_id: requestId,
    form_name: "ai_valuation_form",
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });

  let failureTracked = false;
  try {
    const response = await fetch("/api/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });

    if (!response.ok) {
      trackGoogleEvent("ai_valuation_form_failed", {
        request_id: requestId,
        http_status: response.status,
      });
      failureTracked = true;
      throw new Error(`Bewertung fehlgeschlagen (HTTP ${response.status}).`);
    }

    const result = (await response.json()) as ValuationResult;
    trackGoogleEvent("ai_valuation_form_success", {
      request_id: requestId,
      estimated_price: result.estimatedPrice,
      market_trend: toSafeEventValue(result.marketTrend),
    });
    return result;
  } catch (error: unknown) {
    if (!failureTracked) {
      trackGoogleEvent("ai_valuation_form_failed", {
        request_id: requestId,
        error_name: error instanceof Error ? toSafeEventValue(error.name) : "unknown_error",
      });
    }
    console.error("Valuation Error:", error);
    throw new Error("Bewertung fehlgeschlagen.");
  }
}
