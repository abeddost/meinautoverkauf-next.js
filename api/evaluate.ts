
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
    
    const prompt = `Berechne den Händler-Ankaufspreis für: ${details.brand} ${details.model} (${details.year}), ${details.mileage}km, ${details.fuelType}, Zustand: ${details.condition}.
      Nutze Standard-Depreziationskurven für Deutschland (ca. 15% Wertverlust p.a. nach dem 1. Jahr).
      Berücksichtige die Kilometer-Laufleistung (Soll: 15k/Jahr) und den Zustand.
      Antworte nur mit validem JSON.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 4096 },
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
