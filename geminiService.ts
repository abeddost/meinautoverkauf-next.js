import { CarDetails, ValuationResult } from "./types";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  try {
    const response = await fetch("/api/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });

    if (!response.ok) {
      throw new Error(`Bewertung fehlgeschlagen (HTTP ${response.status}).`);
    }

    const result = (await response.json()) as ValuationResult;
    return result;
  } catch (error: unknown) {
    console.error("Valuation Error:", error);
    throw new Error("Bewertung fehlgeschlagen.");
  }
}
