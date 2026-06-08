import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import portfolio from "@/data/portfolio.json";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== "string" || !question.trim()) {
      return NextResponse.json(
        { answer: "Please ask a question." },
        { status: 400 }
      );
    }

    const prompt = `You are Shaurya Manjkhola's personal AI portfolio assistant.

Your purpose is to answer questions about Shaurya using ONLY the information provided below.

Rules:
- Speak naturally and professionally.
- Refer to Shaurya in third person (e.g., "Shaurya has...").
- Be concise but informative.
- Never invent projects, skills, achievements, or personal details.
- Only use information present in the portfolio data.
- If information is unavailable, clearly state it is not available in the portfolio.
- Do not make assumptions beyond what is provided.

Portfolio Data:
${JSON.stringify(portfolio, null, 2)}

User Question:
${question.trim()}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const answer =
      response.text || "No response generated.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Gemini API error:", error);

    return NextResponse.json(
      {
        answer:
          "The AI copilot is temporarily unavailable. Please try again later.",
      },
      { status: 500 }
    );
  }
}