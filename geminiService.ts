
import { GoogleGenAI, Type } from "@google/genai";
import { CarDetails, ValuationResult } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  const prompt = `Sie sind ein professioneller Fahrzeug-Sachverständiger in Deutschland. 
    Bewerten Sie folgendes Fahrzeug für den Ankauf durch meinautopreis24.de:
    Marke: ${details.brand}
    Modell: ${details.model}
    Baujahr: ${details.year}
    Kilometerstand: ${details.mileage} km
    Kraftstoff: ${details.fuelType}
    Zustand: ${details.condition}

    Geben Sie einen geschätzten Ankaufspreis in Euro an und erklären Sie kurz (auf Deutsch), 
    wie dieser Preis zustande kommt (basierend auf Marktlage, Zustand und Laufleistung).`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          estimatedPrice: { type: Type.NUMBER },
          explanation: { type: Type.STRING },
          marketTrend: { 
            type: Type.STRING,
            enum: ['Up', 'Down', 'Stable']
          }
        },
        required: ["estimatedPrice", "explanation", "marketTrend"]
      }
    }
  });

  return JSON.parse(response.text);
}
