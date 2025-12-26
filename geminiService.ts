
import { GoogleGenAI, Type } from "@google/genai";
import { CarDetails, ValuationResult } from "./types";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  // Ensure we use the latest injected API key from the environment
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Sie sind ein hochqualifizierter KFZ-Sachverständiger bei MeinAutoPreis24. 
    Analysieren Sie folgendes Fahrzeug basierend auf aktuellen Marktdaten der letzten 24 Stunden in Deutschland:
    
    FAHRZEUGDATEN:
    - Marke & Modell: ${details.brand} ${details.model}
    - Baujahr: ${details.year}
    - Laufleistung: ${details.mileage} km
    - Kraftstoff: ${details.fuelType}
    - Optischer Zustand: ${details.condition}

    AUFGABE:
    1. Berechnen Sie einen realistischen Händler-Ankaufspreis (nicht Privatverkaufspreis).
    2. Verfassen Sie eine professionelle, vertrauenserweckende Erklärung (max. 3 Sätze) auf Deutsch.
    3. Bestimmen Sie den aktuellen Markttrend für dieses spezifische Modell.`;

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
              description: "Markt-Tendenz: Up (Steigend), Down (Sinkend), Stable (Stabil)."
            }
          },
          required: ["estimatedPrice", "explanation", "marketTrend"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Fehler bei der Kommunikation mit dem Bewertungs-Modul.");
    }

    return JSON.parse(resultText);
  } catch (error: any) {
    console.error("AI Valuation Error:", error);
    
    // Fallback logic for production stability
    if (error.message?.includes("API_KEY")) {
      throw new Error("System-Konfiguration fehlt: Bitte hinterlegen Sie den API_KEY in den Deployment-Einstellungen.");
    }
    
    throw new Error("Die KI-Bewertung ist derzeit überlastet. Bitte versuchen Sie es in wenigen Augenblicken erneut.");
  }
}
