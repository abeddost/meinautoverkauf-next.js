
import { CarDetails, ValuationResult } from "./types";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  try {
    // We call our internal Vercel API endpoint. 
    // This is secure because the API key stays on the server.
    const response = await fetch('/api/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = "Der Bewertungs-Server hat einen Fehler gemeldet.";
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error || errorMessage;
      } catch(e) {
        // Fallback to raw text if not JSON
      }
      throw new Error(errorMessage);
    }

    const result: ValuationResult = await response.json();
    return result;
  } catch (error: any) {
    console.error("Client-side Valuation Service Error:", error);
    throw new Error(error.message || "Der Bewertungs-Service ist derzeit nicht erreichbar.");
  }
}
