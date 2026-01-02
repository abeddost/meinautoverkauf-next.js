
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
    
    const prompt = `Berechne einen strategischen Händler-Ankaufspreis für: ${details.brand} ${details.model} (${details.year}).
      LOGIK (Dynamic Tiered Margin):
      1. Bestimme Marktwert (Retail).
      2. Abzug Marge: 22% bei <15k, 15% bei 15-45k, 10% bei 45-100k, 8% bei >100k.
      3. Abzug Aufbereitung: 1k - 4k je nach Wertklasse.
      Antworte als JSON mit 'estimatedPrice', 'explanation' (deutsch) und 'marketTrend'.`;

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
