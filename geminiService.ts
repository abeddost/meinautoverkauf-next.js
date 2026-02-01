
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
      ZIEL: Berechne den Händler-Ankaufspreis für ein Fahrzeug mit folgenden Daten:
      
      FAHRZEUG: 
      - Marke: ${details.brand}
      - Modell: ${details.model}
      - Karosserie: ${details.bodyType}
      - Erstzulassung: ${details.year}
      - Kilometerstand (maximal): ${details.mileage} km
      - Kraftstoff: ${details.fuelType}
      - Getriebe: ${details.transmission}
      - Leistungsbereich: ${details.power}
      - Zustand: ${details.condition}
      
      HINWEIS: Die FIN (Fahrzeug-Identifizierungsnummer) wird hier explizit NICHT zur Preisberechnung herangezogen.
      
      BEWERTUNGS-LOGIK:
      1. Nutze Google Search Grounding für aktuelle Marktpreise (Mobile.de/Autoscout24).
      2. Berücksichtige Wertverlust für Getriebeart und Motorleistung.
      3. Abzug Händlermarge & Risiko: Ca. 15-20% vom Marktwert.
      
      AUSGABE-FORMAT (JSON):
      - estimatedPrice: Finaler Preis (Zahl).
      - priceRange: { min: Zahl, max: Zahl } (+/- 5%).
      - explanation: Ein Text (30 Wörter) an den Kunden, warum UNSER Angebot fair ist (Sofortankauf, keine Haftung, Bargeld).
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

    const responseText = response.text?.trim();
    if (!responseText) {
      throw new Error("Leere Antwort von der KI.");
    }
    const result: ValuationResult = JSON.parse(responseText);
    return result;
  } catch (error: any) {
    console.error("Valuation Error:", error);
    throw new Error("Bewertung fehlgeschlagen.");
  }
}
