
import { GoogleGenAI, Type } from "@google/genai";
import { CarDetails, ValuationResult } from "./types";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API Key ist nicht konfiguriert.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Handel als erfahrener KFZ-Einkaufsdirektor. 
      ZIEL: Berechne einen Ankaufspreis unter Berücksichtigung des Zustands: "${details.condition}".
      
      FAHRZEUG: ${details.brand} ${details.model}, ${details.year}, ${details.mileage} km, ${details.fuelType}.
      
      ZUSTANDS-LOGIK (WICHTIG):
      - Excellent: Marktwert (Retail) + 5%. Basis für Abzüge ist das obere Marktsegment.
      - Good: Standard Marktwert. Basis ist der Marktschnitt.
      - Fair: Ziehe 20% vom Marktwert ab (Reparaturstau/Mängel) BEVOR die Marge berechnet wird.
      - Poor: Ziehe 45% vom Marktwert ab (Export/Verwertung) BEVOR die Marge berechnet wird.
      
      STAFFEL-MARGE (Nach Zustands-Anpassung):
      - < 15k €: 22% Marge + 1.000 € Aufbereitung.
      - 15k - 45k €: 15% Marge + 1.500 € Aufbereitung.
      - 45k - 100k €: 10% Marge + 2.500 € Aufbereitung.
      - > 100k €: 8% Marge + 4.000 € Aufbereitung.
      
      Antworte NUR im JSON-Format:
      - estimatedPrice: Der berechnete Händler-Ankaufspreis (Zahl).
      - priceRange: { min: Zahl, max: Zahl } (Berechne eine Spanne von +/- 5% um den estimatedPrice).
      - explanation: Ein professioneller, emotionaler Marketing-Text auf Deutsch. 
        Betone bei schlechtem Zustand (Fair/Poor), dass wir das Auto "wie besehen" kaufen und der Verkäufer keine Gewährleistung übernehmen muss.
      - marketTrend: (Up, Down, Stable).`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.1,
        thinkingConfig: { thinkingBudget: 0 },
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

    const text = response.text;
    if (!text) {
      throw new Error("Keine Antwort von der KI erhalten.");
    }

    const result: ValuationResult = JSON.parse(text.trim());

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (groundingChunks) {
      result.sources = groundingChunks
        .filter((chunk: any) => chunk.web)
        .map((chunk: any) => ({
          title: chunk.web.title || "Markt-Referenz",
          uri: chunk.web.uri
        }));
    }

    return result;
  } catch (error: any) {
    console.error("Valuation Service Error:", error);
    throw new Error(error.message || "Der Bewertungs-Service ist derzeit nicht erreichbar.");
  }
}
