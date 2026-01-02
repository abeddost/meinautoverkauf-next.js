
import { GoogleGenAI, Type } from "@google/genai";
import { CarDetails, ValuationResult } from "./types";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API Key ist nicht konfiguriert.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Handel als KFZ-Einkaufsdirektor eines Premium-Ankaufportals. 
      ZIEL: Berechne den Händler-Ankaufspreis für einen "${details.condition}" Zustand und generiere ein überzeugendes Verkaufsargument.
      
      FAHRZEUG: ${details.brand} ${details.model}, ${details.year}, ${details.mileage} km.
      
      BEWERTUNGS-LOGIK:
      1. Suche aktuellen Marktpreis (Retail).
      2. Abzug für Zustand: Excellent (+5%), Good (0%), Fair (-20%), Poor (-45%).
      3. Abzug Händlermarge & Risiko:
         - < 15k €: 22% + 1.000€
         - 15k-45k €: 15% + 1.500€
         - 45k-100k €: 10% + 2.500€
         - > 100k €: 8% + 4.000€
      
      AUSGABE-FORMAT (JSON):
      - estimatedPrice: Finaler Preis (Zahl).
      - priceRange: { min: Zahl, max: Zahl } (+/- 5%).
      - explanation: Ein überzeugender Marketing-Text (25-35 Wörter). 
        Fokus: Warum ist der Verkauf an UNS besser als privat? 
        Punkte: "Verkauf wie gesehen" (keine Gewährleistung für den Verkäufer), sofortige Echtzeit-Überweisung, kein Stress mit 'Letzte Preis'-Anfragen, volle Rechtssicherheit. 
        Sprich den Nutzer direkt an (Sie/Ihr).
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
            marketTrend: { type: Type.STRING, enum: ['Up', 'Down', 'Stable'] }
          },
          required: ["estimatedPrice", "priceRange", "explanation", "marketTrend"]
        }
      }
    });

    const result: ValuationResult = JSON.parse(response.text.trim());
    return result;
  } catch (error: any) {
    console.error("Valuation Error:", error);
    throw new Error("Bewertung fehlgeschlagen.");
  }
}
