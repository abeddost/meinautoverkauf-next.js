
import { GoogleGenAI, Type } from "@google/genai";
import { CarDetails, ValuationResult } from "./types";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API Key ist nicht konfiguriert.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // DYNAMIC TIERED MARGIN (DTM) LOGIC
    // Purpose: High-margin for low-price cars, high-volume/fair-margin for luxury cars.
    
    const prompt = `Handel als strategischer KFZ-Einkaufsdirektor. 
      ZIEL: Berechne einen Ankaufspreis, der für den Händler attraktiv ist, aber bei teuren Autos nicht unrealistisch niedrig wirkt.
      
      FAHRZEUG: ${details.brand} ${details.model}, ${details.year}, ${details.mileage} km, ${details.fuelType}, Zustand: ${details.condition}.
      
      LOGIK (STAFFEL-MARGE):
      1. Suche auf mobile.de nach dem "Wettbewerbsfähigen VK" (unteres Marktviertel).
      2. Wende folgende Abzüge auf den Wettbewerbs-VK an:
         - Wenn VK < 15k €: 22% Marge + 1.000 € Aufbereitung.
         - Wenn VK 15k - 45k €: 15% Marge + 1.500 € Aufbereitung.
         - Wenn VK 45k - 100k €: 10% Marge + 2.500 € Aufbereitung.
         - Wenn VK > 100k €: 8% Marge + 4.000 € Aufbereitung.
      3. Das Ergebnis ist der 'estimatedPrice'.
      
      Antworte NUR im JSON-Format:
      - estimatedPrice: Der berechnete Händler-Ankaufspreis (Zahl).
      - priceRange: { min: Zahl, max: Zahl } (Spanne +/- 4%).
      - explanation: Marketing-Text auf Deutsch. Erkläre bei teuren Autos (>50k), dass wir durch Direktankauf das Vermarktungsrisiko für Luxuswagen komplett übernehmen.
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
