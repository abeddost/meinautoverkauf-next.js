
import { GoogleGenAI, Type } from "@google/genai";
import { CarDetails, ValuationResult } from "./types.ts";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  // Use a safer way to access process.env that won't throw ReferenceError
  const apiKey = (window as any).process?.env?.API_KEY || process?.env?.API_KEY;

  if (!apiKey) {
    throw new Error("API-Konfigurationsfehler: Bitte stellen Sie sicher, dass der API_KEY in den Vercel-Umgebungsvariablen hinterlegt ist.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `Sie sind ein hochqualifizierter KFZ-Sachverständiger bei MeinAutoPreis24. 
    Analysieren Sie folgendes Fahrzeug basierend auf aktuellen Marktdaten in Deutschland:
    
    FAHRZEUGDATEN:
    - Marke & Modell: ${details.brand} ${details.model}
    - Baujahr: ${details.year}
    - Laufleistung: ${details.mileage} km
    - Kraftstoff: ${details.fuelType}
    - Optischer Zustand: ${details.condition}

    AUFGABE:
    1. Berechnen Sie einen realistischen Händler-Ankaufspreis (EUR).
    2. Verfassen Sie eine professionelle Erklärung (max. 3 Sätze) auf Deutsch.
    3. Bestimmen Sie den Markttrend (Up/Down/Stable).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 8192 },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedPrice: { 
              type: Type.NUMBER,
              description: "Der berechnete Ankaufspreis in Euro."
            },
            explanation: { 
              type: Type.STRING,
              description: "Fachliche Begründung des Preises auf Deutsch."
            },
            marketTrend: { 
              type: Type.STRING,
              enum: ['Up', 'Down', 'Stable'],
              description: "Markt-Tendenz."
            }
          },
          required: ["estimatedPrice", "explanation", "marketTrend"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Die KI konnte keine Bewertung generieren.");
    }

    return JSON.parse(resultText);
  } catch (error: any) {
    console.error("Valuation Error:", error);
    if (error.message?.includes("API_KEY")) {
      throw new Error("Hoppla! Der API-Schlüssel scheint ungültig zu sein. Bitte prüfen Sie die Vercel-Einstellungen.");
    }
    throw new Error(error.message || "Der Bewertungs-Service ist derzeit nicht erreichbar.");
  }
}
