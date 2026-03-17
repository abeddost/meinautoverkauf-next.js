
import { GoogleGenAI, Type } from "@google/genai";
import { buildValuationEventParams } from "../lib/analytics";

export const config = {
  runtime: 'edge',
};

const DEFAULT_GA4_MEASUREMENT_ID = "G-GX8B3LF4KZ";

const normalizePathFromReferer = (referer: string | null): string | undefined => {
  if (!referer) return undefined;
  try {
    return new URL(referer).pathname;
  } catch {
    return undefined;
  }
};

const sendGa4Event = async (params: {
  measurementId: string;
  apiSecret: string;
  clientId: string;
  name: string;
  eventParams: Record<string, unknown>;
}): Promise<void> => {
  const { measurementId, apiSecret, clientId, name, eventParams } = params;

  const response = await fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(measurementId)}&api_secret=${encodeURIComponent(apiSecret)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        events: [
          {
            name,
            params: eventParams,
          },
        ],
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`GA4 MP request failed with status ${response.status}`);
  }
};

const extractUpstreamStatus = (error: unknown): number | undefined => {
  if (!error || typeof error !== "object") return undefined;
  const candidate = error as {
    status?: unknown;
    statusCode?: unknown;
    code?: unknown;
  };

  if (typeof candidate.status === "number") return candidate.status;
  if (typeof candidate.statusCode === "number") return candidate.statusCode;
  if (typeof candidate.code === "number") return candidate.code;
  return undefined;
};

const normalizeHttpStatus = (status: number | undefined): number => {
  if (typeof status !== "number") return 500;
  if (status === 429) return 429;
  if (status >= 500 && status <= 599) return status;
  return 500;
};

const getSafeErrorMessage = (status: number, error: unknown): string => {
  if (status === 429) return "Zu viele Anfragen beim Bewertungsdienst.";
  if (status === 503) return "Bewertungsdienst vorübergehend nicht verfügbar.";
  if (error instanceof Error && error.message.trim()) return error.message.trim();
  return "Bewertung fehlgeschlagen";
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const details = await req.json();
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    const measurementId = process.env.GA4_MEASUREMENT_ID || DEFAULT_GA4_MEASUREMENT_ID;
    const gaApiSecret = process.env.GA4_API_SECRET;
    const analyticsConsentGranted = details?.analyticsConsentGranted === true;
    const analyticsRequestId =
      typeof details.analyticsRequestId === "string" && details.analyticsRequestId.trim()
        ? details.analyticsRequestId.trim()
        : (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
            ? crypto.randomUUID()
            : `${Date.now()}_${Math.random().toString(16).slice(2)}`);
    const pagePath = normalizePathFromReferer(req.headers.get("referer"));
    const hasImages = Boolean(
      (Array.isArray(details.images) && details.images.length > 0) ||
      (Array.isArray(details.pendingPhotoPaths) && details.pendingPhotoPaths.length > 0)
    );

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key missing.' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Handel als KFZ-Einkaufsdirektor eines Premium-Ankaufportals.
      ZIEL: Berechne den Händler-Ankaufspreis für ein Fahrzeug mit folgenden Daten:
      
      FAHRZEUG:
      - Marke: ${details.brand}
      - Modell: ${details.model}
      - Karosserie: ${details.bodyType}
      - Erstzulassung: ${details.year}
      - Kilometerstand (Bereich): ${details.mileage}
      - Kraftstoff: ${details.fuelType}
      - Getriebe: ${details.transmission}
      - Leistungsbereich: ${details.power}
      - Zustand: ${details.condition}
      
      HINWEIS: Die FIN (Fahrzeug-Identifizierungsnummer) wird hier explizit NICHT zur Preisberechnung herangezogen.
      
      BEWERTUNGS-LOGIK:
      1. Nutze Google Search Grounding für aktuelle Marktpreise (Mobile.de/Autoscout24).
      2. Berücksichtige Wertverlust für Getriebeart und Motorleistung.
      3. Abzug Händlermarge & Risiko: Ca. 23-30% vom Marktwert.
      
      AUSGABE-FORMAT (JSON):
      - estimatedPrice: Finaler Preis (Zahl).
      - priceRange: { min: Zahl, max: Zahl } (+/- 10%).
      - explanation: Ein Text (30 Wörter) an den Kunden, warum unser Angebot fair ist (Sofortankauf, keine Haftung, Banküberweisung).
      - marketTrend: (Up, Down, Stable).`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.1,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedPrice: { type: Type.NUMBER },
            priceRange: {
              type: Type.OBJECT,
              properties: {
                min: { type: Type.NUMBER },
                max: { type: Type.NUMBER }
              },
              required: ["min", "max"]
            },
            explanation: { type: Type.STRING },
            marketTrend: { 
              type: Type.STRING, 
              enum: ['Up', 'Down', 'Stable'] 
            }
          },
          required: ["estimatedPrice", "priceRange", "explanation", "marketTrend"]
        }
      }
    });

    const responseText = response.text?.trim();
    if (!responseText) {
      return new Response(JSON.stringify({ error: 'Leere Antwort von der KI.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let result: { estimatedPrice?: number; marketTrend?: string } | null = null;
    try {
      result = JSON.parse(responseText);
    } catch {
      result = null;
    }

    if (gaApiSecret && analyticsConsentGranted) {
      try {
        await sendGa4Event({
          measurementId,
          apiSecret: gaApiSecret,
          clientId: analyticsRequestId,
          name: "ai_valuation_form_success",
          eventParams: buildValuationEventParams("ai_valuation_form_success", {
            requestId: analyticsRequestId,
            brand: typeof details.brand === "string" ? details.brand : undefined,
            fuelType: typeof details.fuelType === "string" ? details.fuelType : undefined,
            condition: typeof details.condition === "string" ? details.condition : undefined,
            hasImages,
            pagePath,
            source: "server",
            estimatedPrice: typeof result?.estimatedPrice === "number" ? result.estimatedPrice : undefined,
            marketTrend: typeof result?.marketTrend === "string" ? result.marketTrend : undefined,
          }),
        });
      } catch (measurementError) {
        console.warn("GA4 Measurement Protocol send failed:", measurementError);
      }
    }

    return new Response(responseText, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: unknown) {
    const status = normalizeHttpStatus(extractUpstreamStatus(error));
    const safeErrorMessage = getSafeErrorMessage(status, error);
    const errorCode = status === 429 ? "rate_limit_exceeded" : "valuation_failed";

    return new Response(JSON.stringify({ error: safeErrorMessage, code: errorCode }), {
      status,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
