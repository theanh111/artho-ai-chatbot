import { GoogleGenAI } from "@google/genai";

export async function POST(request: Request) {
  const content = await request.json().then((data) => data.content);
  const ai = await new GoogleGenAI({
    apiKey: process.env.GEMINI_GOOGLE_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content,
  });

  return Response.json({ text: response.text ?? "" });
}
