import { CarDetails, ValuationResult } from "./types";
import { buildValuationEventParams, trackGoogleEvent, toSafeEventValue } from "./lib/analytics";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  const requestId =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}_${Math.random().toString(16).slice(2)}`;
  const hasImages = Boolean(
    (details.images && details.images.length > 0) ||
      (details.pendingPhotoPaths && details.pendingPhotoPaths.length > 0)
  );
  const pagePath = typeof window !== "undefined" ? window.location.pathname : undefined;
  const baseEventParams = {
    requestId,
    brand: details.brand,
    fuelType: details.fuelType,
    condition: details.condition || undefined,
    hasImages,
    pagePath,
    source: "client" as const,
  };

  trackGoogleEvent("ai_valuation_form_submitted", buildValuationEventParams("ai_valuation_form_submitted", baseEventParams));
  trackGoogleEvent("generate_lead", {
    request_id: requestId,
    form_name: "ai_valuation_form",
    page_path: pagePath,
  });

  let failureTracked = false;
  try {
    const response = await fetch("/api/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...details,
        analyticsRequestId: requestId,
      }),
    });

    if (!response.ok) {
      trackGoogleEvent("ai_valuation_form_failed", {
        ...buildValuationEventParams("ai_valuation_form_failed", baseEventParams),
        http_status: response.status,
      });
      failureTracked = true;
      throw new Error(`Bewertung fehlgeschlagen (HTTP ${response.status}).`);
    }

    const result = (await response.json()) as ValuationResult;
    trackGoogleEvent(
      "ai_valuation_form_success_client",
      buildValuationEventParams("ai_valuation_form_success_client", {
        ...baseEventParams,
        estimatedPrice: result.estimatedPrice,
        marketTrend: result.marketTrend,
      }),
    );
    return result;
  } catch (error: unknown) {
    if (!failureTracked) {
      trackGoogleEvent("ai_valuation_form_failed", {
        ...buildValuationEventParams("ai_valuation_form_failed", baseEventParams),
        error_name: error instanceof Error ? toSafeEventValue(error.name) : "unknown_error",
      });
    }
    console.error("Valuation Error:", error);
    throw new Error("Bewertung fehlgeschlagen.");
  }
}
