
import { GoogleGenAI, Type } from "@google/genai";
import { CarDetails, ValuationResult } from "./types";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  try {
    const apiKey = (process.env.API_KEY) as string;

    if (!apiKey) {
      throw new Error("API Key ist nicht konfiguriert.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Du bist ein hochqualifizierter KFZ-Sachverständiger bei MeinAutoPreis24.
      Analysiere das folgende Fahrzeug basierend auf aktuellen Marktdaten in Deutschland:
      
      FAHRZEUGDATEN:
      - Marke: ${details.brand}
      - Modell: ${details.model}
      - Erstzulassung: ${details.year}
      - Laufleistung: ${details.mileage} km
      - Kraftstoff: ${details.fuelType}
      - Optischer Zustand: ${details.condition}

      AUFGABE:
      1. Berechnen Sie einen realistischen HÄNDLER-ANKAUFSPREIS (Inzahlungnahmewert) in EUR. Dies ist der Preis, den ein professioneller Händler für den sofortigen Ankauf zahlen würde.
      2. Verfassen Sie eine professionelle Erklärung (max. 3 Sätze) auf DEUTSCH, warum dieser Preis gewählt wurde.
      3. Bestimmen Sie den Markttrend (Up/Down/Stable).
      
      WICHTIG: Das Ergebnis MUSS valides JSON sein.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 4096 },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedPrice: { 
              type: Type.NUMBER,
              description: "Der berechnete Händler-Ankaufspreis in Euro."
            },
            explanation: { 
              type: Type.STRING,
              description: "Fachliche Begründung des Preises auf Deutsch."
            },
            marketTrend: { 
              type: Type.STRING,
              enum: ['Up', 'Down', 'Stable'],
              description: "Markttendenz."
            }
          },
          required: ["estimatedPrice", "explanation", "marketTrend"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Keine Antwort von der KI erhalten.");
    }

    const result: ValuationResult = JSON.parse(text);
    return result;
  } catch (error: any) {
    console.error("Valuation Service Error:", error);
    throw new Error(error.message || "Der Bewertungs-Service ist derzeit nicht erreichbar.");
  }
}
