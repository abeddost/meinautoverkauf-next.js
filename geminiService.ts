
import { GoogleGenAI, Type } from "@google/genai";
import { CarDetails, ValuationResult } from "./types";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API Key ist nicht konfiguriert oder ungültig.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // We provide a logical framework for the model to follow during its "thinking" phase
    const prompt = `Du bist ein spezialisierter KFZ-Preiskalkulator für den deutschen Markt.
      Deine Aufgabe: Berechne einen realistischen Händler-Ankaufspreis (DAT/Schwacke-basiert).
      
      DATEN:
      - Fahrzeug: ${details.brand} ${details.model}
      - Jahr: ${details.year}
      - KM: ${details.mileage}
      - Kraftstoff: ${details.fuelType}
      - Zustand: ${details.condition}

      DEIN LOGIK-PROZESS (Nutze dies in deiner Thinking-Phase):
      1. Schätze den durchschnittlichen Bruttolistenpreis (Neupreis) dieses Modells im Jahr ${details.year}.
      2. Wende Standard-Wertverlust an: ~25% im 1. Jahr, danach ~12-15% p.a.
      3. Korrigiere die Laufleistung: Basis sind 15.000 km/Jahr. Mehr- oder Minderkilometer mit ca. 0,05-0,10€ verrechnen.
      4. Zustands-Faktor: Excellent (+5%), Good (0%), Fair (-15%), Poor (-30% oder mehr).
      5. Händler-Marge: Ziehe 15-20% vom geschätzten Marktwert ab, um den HÄNDLER-ANKAUFSPREIS zu erhalten.

      Antworte NUR im JSON-Format mit:
      - estimatedPrice (Zahl, EUR)
      - explanation (Deutsch, max. 2 Sätze, nenne konkrete Gründe wie KM-Stand oder Markttrend)
      - marketTrend (Up, Down, Stable)`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 4096 }, // Increased budget for complex math logic
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

    return JSON.parse(text.trim());
  } catch (error: any) {
    console.error("Valuation Service Error:", error);
    throw new Error(error.message || "Der Bewertungs-Service ist derzeit nicht erreichbar.");
  }
}
