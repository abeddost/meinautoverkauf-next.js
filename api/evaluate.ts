
import { GoogleGenAI, Type } from "@google/genai";

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  // Only allow POST requests
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
      console.error("Critical Error: API_KEY environment variable is missing on Vercel.");
      return new Response(JSON.stringify({ error: 'Server configuration error: API key missing.' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Sie sind ein hochqualifizierter KFZ-Sachverständiger bei MeinAutoPreis24. 
      Analysieren Sie folgendes Fahrzeug basierend auf aktuellen Marktdaten in Deutschland:
      
      FAHRZEUGDATEN:
      - Marke & Modell: ${details.brand} ${details.model}
      - Baujahr: ${details.year}
      - Laufleistung: ${details.mileage} km
      - Kraftstoff: ${details.fuelType}
      - Optischer Zustand: ${details.condition}

      AUFGABE:
      1. Berechnen Sie einen realistischen Händler-Ankaufspreis (EUR).
      2. Verfassen Sie eine professionelle Erklärung (max. 3 Sätze) auf Deutsch.
      3. Bestimmen Sie den Markttrend (Up/Down/Stable).`;

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
              description: "Markt-Tendenz."
            }
          },
          required: ["estimatedPrice", "explanation", "marketTrend"]
        }
      }
    });

    const result = response.text;
    
    return new Response(result, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error("Vercel Serverless Function Error:", error);
    return new Response(JSON.stringify({ error: 'Internal Server Error: ' + error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
