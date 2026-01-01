
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
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Server configuration error: API key missing.' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Du bist ein erfahrener KFZ-Sachverständiger bei MeinAutoPreis24. 
    Analysiere dieses Fahrzeug und berechne einen realistischen HÄNDLER-ANKAUFSPREIS (Netto-Einkaufswert für den Weiterverkauf).
    
    FAHRZEUG:
    Marke: ${details.brand}
    Modell: ${details.model}
    Jahr: ${details.year}
    Kilometer: ${details.mileage}
    Kraftstoff: ${details.fuelType}
    Zustand: ${details.condition}

    REGELN:
    - Der Preis muss ein fairer Händler-Einkaufspreis sein (ca. 15% unter Privatverkaufspreis).
    - Die Erklärung muss auf Deutsch sein und fachlich fundiert (max 3 Sätze).
    - Das Ergebnis MUSS valides JSON sein.`;

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
              description: "Berechneter Euro-Betrag (Ganzzahl)."
            },
            explanation: { 
              type: Type.STRING,
              description: "Fachliche Begründung."
            },
            marketTrend: { 
              type: Type.STRING,
              enum: ['Up', 'Down', 'Stable'],
              description: "Aktueller Markttrend."
            }
          },
          required: ["estimatedPrice", "explanation", "marketTrend"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return new Response(text, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error("Server-side valuation error:", error);
    return new Response(JSON.stringify({ error: 'Bewertung fehlgeschlagen: ' + error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
