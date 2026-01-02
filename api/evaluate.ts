
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
      return new Response(JSON.stringify({ error: 'API key missing.' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Berechne Händler-Ankaufspreis für: ${details.brand} ${details.model} (${details.year}).
      Zustand: ${details.condition}.
      LOGIK: Berücksichtige hohe Abzüge für Fair/Poor Zustände. Nutze degressive Marge (22% bis 8%).
      Marketing-Text: Fokus auf Sicherheit und "Kauf wie gesehen".
      Antworte als JSON mit 'estimatedPrice', 'priceRange' {min, max}, 'explanation' und 'marketTrend'.`;

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

    return new Response(response.text, {
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
