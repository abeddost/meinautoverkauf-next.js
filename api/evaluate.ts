
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
    
    const prompt = `KFZ-Wertermittlung für Händler-Ankauf (Sofort-Preis): ${details.brand} ${details.model} (${details.year}), ${details.mileage}km, ${details.fuelType}, Zustand: ${details.condition}.
      Berechne den Preis, den ein Händler im Ankauf zahlen würde (ca. 15-20% unter Marktwert).
      Die 'explanation' soll ein rein verkaufsfördernder Marketing-Text auf Deutsch sein.
      Antworte nur mit validem JSON.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.1,
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

    return new Response(response.text, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: 'Bewertung fehlgeschlagen: ' + error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
