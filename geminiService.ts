
import { GoogleGenAI, Type } from "@google/genai";
import { CarDetails, ValuationResult } from "./types";

export async function getCarValuation(details: CarDetails): Promise<ValuationResult> {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API Key ist nicht konfiguriert oder ungültig.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Du bist ein professioneller KFZ-Sachverständiger, spezialisiert auf den Händler-Ankauf (B2B/Ankauf von Privat).
      Deine Aufgabe: Ermittle den Händler-Ankaufspreis (NICHT den Marktwert für den Privatverkauf!) für folgendes Fahrzeug:
      Marke & Modell: ${details.brand} ${details.model}
      Erstzulassung: ${details.year}
      Kilometerstand: ${details.mileage} km
      Kraftstoff: ${details.fuelType}
      Zustand: ${details.condition}

      WICHTIGE PREIS-GUIDELINES:
      - Du berechnest den Preis, den ein gewerblicher Händler bereit ist zu zahlen (Sofort-Ankaufspreis).
      - Dieser Preis liegt zwingend ca. 15% bis 25% UNTER dem Marktwert für Privatverkäufe (wegen Händlermarge, Gewährleistungsrisiko, Aufbereitung und Standkosten).
      - Berücksichtige den Wertverlust basierend auf Alter, Laufleistung und Zustand.
      - Das Ziel ist ein realistisches Angebot für einen schnellen "Ankauf ohne Stress".

      ANFORDERUNG AN DIE 'explanation':
      - Erstelle einen rein verkaufsfördernden Marketing-Text auf Deutsch.
      - Erwähne NICHT die prozentualen Abzüge oder Margen.
      - Hebe hervor, dass dieser Preis ein faires, sofortiges Angebot für den Direkt-Verkauf darstellt.
      - Betone die Zeitersparnis und Sicherheit im Vergleich zum mühsamen Privatverkauf.

      Antworte NUR im JSON-Format:
      - estimatedPrice: Der berechnete Händler-Ankaufspreis als Zahl.
      - priceRange: { min: Zahl, max: Zahl } (Spanne ca. +/- 5% um den Ankaufspreis).
      - explanation: Der Marketing-Text.
      - marketTrend: (Up, Down, Stable).`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.1, // Lower temperature for more consistency
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

    return JSON.parse(text.trim());
  } catch (error: any) {
    console.error("Valuation Service Error:", error);
    throw new Error(error.message || "Der Bewertungs-Service ist derzeit nicht erreichbar.");
  }
}
