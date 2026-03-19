import { CarDetails, ValuationResult } from "./types";
import { buildValuationEventParams, trackGoogleEvent, toSafeEventValue } from "./lib/analytics";
import { getConsentState } from "./lib/consent";

const MAX_RETRIES = 2;
const RETRYABLE_STATUS_CODES = new Set([429, 500, 502, 503, 504]);

type ValuationErrorKind =
  | "rate_limited"
  | "configuration"
  | "service_unavailable"
  | "server"
  | "network"
  | "unknown";

export class ValuationServiceError extends Error {
  status?: number;
  kind: ValuationErrorKind;
  attempts: number;

  constructor(kind: ValuationErrorKind, message: string, attempts: number, status?: number) {
    super(message);
    this.name = "ValuationServiceError";
    this.kind = kind;
    this.attempts = attempts;
    this.status = status;
  }
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const getRetryDelayMs = (attempt: number): number => {
  const base = 600 * (2 ** attempt);
  const jitter = Math.floor(Math.random() * 250);
  return base + jitter;
};

const parseJsonSafely = (raw: string): unknown | null => {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const extractApiErrorMessage = (payload: unknown): string | undefined => {
  if (!payload || typeof payload !== "object" || !("error" in payload)) return undefined;
  const maybeError = (payload as { error?: unknown }).error;
  return typeof maybeError === "string" && maybeError.trim() ? maybeError.trim() : undefined;
};

const isValuationResult = (value: unknown): value is ValuationResult => {
  if (!value || typeof value !== "object") return false;
  const result = value as Partial<ValuationResult> & { priceRange?: { min?: unknown; max?: unknown } };
  return typeof result.estimatedPrice === "number" &&
    typeof result.explanation === "string" &&
    typeof result.marketTrend === "string" &&
    !!result.priceRange &&
    typeof result.priceRange.min === "number" &&
    typeof result.priceRange.max === "number";
};

const mapStatusToValuationError = (
  status: number,
  attempts: number,
  apiMessage?: string,
): ValuationServiceError => {
  const normalized = (apiMessage ?? "").toLowerCase();

  if (status === 429) {
    return new ValuationServiceError(
      "rate_limited",
      "Zu viele Anfragen gerade. Bitte warten Sie kurz und versuchen Sie es erneut.",
      attempts,
      status,
    );
  }
  if (status === 500 && normalized.includes("api key missing")) {
    return new ValuationServiceError(
      "configuration",
      "Die Bewertung ist aktuell nicht verfügbar. Bitte versuchen Sie es später erneut.",
      attempts,
      status,
    );
  }
  if (status === 502) {
    return new ValuationServiceError(
      "service_unavailable",
      "Der Bewertungsdienst hat keine gültige Antwort geliefert. Bitte versuchen Sie es erneut.",
      attempts,
      status,
    );
  }
  if (status >= 500) {
    return new ValuationServiceError(
      "server",
      "Der Bewertungsdienst ist gerade vorübergehend nicht erreichbar. Bitte versuchen Sie es später erneut.",
      attempts,
      status,
    );
  }
  return new ValuationServiceError(
    "unknown",
    "Die Bewertung konnte nicht erstellt werden. Bitte versuchen Sie es später erneut.",
    attempts,
    status,
  );
};

const isLikelyNetworkError = (error: unknown): boolean => {
  if (!(error instanceof Error)) return false;
  if (error.name === "AbortError") return false;
  const msg = `${error.name} ${error.message}`.toLowerCase();
  return msg.includes("network") || msg.includes("fetch") || msg.includes("failed to fetch");
};

export function getValuationErrorMessage(error: unknown): string {
  if (error instanceof ValuationServiceError) {
    return error.message;
  }
  return "Die Bewertung konnte nicht erstellt werden. Bitte versuchen Sie es später erneut.";
}

export async function getCarValuation(
  details: CarDetails,
  requestIdOverride?: string,
): Promise<ValuationResult> {
  const requestId =
    typeof requestIdOverride === "string" && requestIdOverride.trim()
      ? requestIdOverride.trim()
      : typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
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
  const consentState = getConsentState();
  const analyticsConsentGranted = consentState.choice === "accepted" && consentState.analytics;

  trackGoogleEvent("ai_valuation_form_submitted", buildValuationEventParams("ai_valuation_form_submitted", baseEventParams));
  trackGoogleEvent("generate_lead", {
    request_id: requestId,
    form_name: "ai_valuation_form",
    page_path: pagePath,
  });

  let finalError: unknown = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    const attemptCount = attempt + 1;
    try {
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...details,
          analyticsRequestId: requestId,
          analyticsConsentGranted,
        }),
      });

      const raw = await response.text();
      const parsed = parseJsonSafely(raw);

      if (!response.ok) {
        const apiMessage = extractApiErrorMessage(parsed);
        const shouldRetry = RETRYABLE_STATUS_CODES.has(response.status) && attempt < MAX_RETRIES;
        if (shouldRetry) {
          await wait(getRetryDelayMs(attempt));
          continue;
        }
        throw mapStatusToValuationError(response.status, attemptCount, apiMessage);
      }

      if (!isValuationResult(parsed)) {
        if (attempt < MAX_RETRIES) {
          await wait(getRetryDelayMs(attempt));
          continue;
        }
        throw new ValuationServiceError(
          "service_unavailable",
          "Der Bewertungsdienst hat keine gültige Antwort geliefert. Bitte versuchen Sie es erneut.",
          attemptCount,
          502,
        );
      }

      trackGoogleEvent(
        "ai_valuation_form_success_client",
        buildValuationEventParams("ai_valuation_form_success_client", {
          ...baseEventParams,
          estimatedPrice: parsed.estimatedPrice,
          marketTrend: parsed.marketTrend,
        }),
      );
      return parsed;
    } catch (error: unknown) {
      if (error instanceof ValuationServiceError) {
        finalError = error;
        break;
      }

      if (isLikelyNetworkError(error) && attempt < MAX_RETRIES) {
        await wait(getRetryDelayMs(attempt));
        continue;
      }

      finalError = isLikelyNetworkError(error)
        ? new ValuationServiceError(
            "network",
            "Netzwerkproblem bei der Bewertung. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
            attemptCount,
          )
        : new ValuationServiceError(
            "unknown",
            "Die Bewertung konnte nicht erstellt werden. Bitte versuchen Sie es später erneut.",
            attemptCount,
          );
      break;
    }
  }

  const telemetryError = finalError ?? new ValuationServiceError(
    "unknown",
    "Die Bewertung konnte nicht erstellt werden. Bitte versuchen Sie es später erneut.",
    MAX_RETRIES + 1,
  );

  trackGoogleEvent("ai_valuation_form_failed", {
    ...buildValuationEventParams("ai_valuation_form_failed", baseEventParams),
    ...(telemetryError instanceof ValuationServiceError && typeof telemetryError.status === "number"
      ? { http_status: telemetryError.status }
      : {}),
    error_name: telemetryError instanceof Error ? toSafeEventValue(telemetryError.name) : "unknown_error",
  });

  console.error("Valuation Error:", telemetryError);
  throw telemetryError;
}
