
import { GoogleGenAI, Type } from "@google/genai";

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const details = await req.json();
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key missing.' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Handel als KFZ-Einkaufsdirektor eines Premium-Ankaufportals.
      ZIEL: Berechne den Händler-Ankaufspreis für ein Fahrzeug mit folgenden Daten:
      
      FAHRZEUG:
      - Marke: ${details.brand}
      - Modell: ${details.model}
      - Karosserie: ${details.bodyType}
      - Erstzulassung: ${details.year}
      - Kilometerstand (Bereich): ${details.mileage}
      - Kraftstoff: ${details.fuelType}
      - Getriebe: ${details.transmission}
      - Leistungsbereich: ${details.power}
      - Zustand: ${details.condition}
      
      HINWEIS: Die FIN (Fahrzeug-Identifizierungsnummer) wird hier explizit NICHT zur Preisberechnung herangezogen.
      
      BEWERTUNGS-LOGIK:
      1. Nutze Google Search Grounding für aktuelle Marktpreise (Mobile.de/Autoscout24).
      2. Berücksichtige Wertverlust für Getriebeart und Motorleistung.
      3. Abzug Händlermarge & Risiko: Ca. 23-30% vom Marktwert.
      
      AUSGABE-FORMAT (JSON):
      - estimatedPrice: Finaler Preis (Zahl).
      - priceRange: { min: Zahl, max: Zahl } (+/- 10%).
      - explanation: Ein Text (30 Wörter) an den Kunden, warum unser Angebot fair ist (Sofortankauf, keine Haftung, Banküberweisung).
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
            marketTrend: { 
              type: Type.STRING, 
              enum: ['Up', 'Down', 'Stable'] 
            }
          },
          required: ["estimatedPrice", "priceRange", "explanation", "marketTrend"]
        }
      }
    });

    const responseText = response.text?.trim();
    if (!responseText) {
      return new Response(JSON.stringify({ error: 'Leere Antwort von der KI.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(responseText, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: 'Bewertung fehlgeschlagen' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
