import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Bags",
  "Footwear",
  "Accessories",
];

const responseSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      description: "Short, catchy product title, max 6 words",
    },
    description: {
      type: "string",
      description: "2-3 sentence marketing-style product description",
    },
    category: {
      type: "string",
      enum: CATEGORIES,
      description: "Best matching category for this product",
    },
  },
  required: ["title", "description", "category"],
};

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mimeType } = await req.json();

    if (!imageBase64) {
      return NextResponse.json({ error: "No image data" }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are a product cataloging assistant for an e-commerce store. Look at this product image and generate a catchy title, a short marketing description, and the closest matching category. Category must be exactly one of: ${CATEGORIES.join(", ")}.`,
            },
            {
              inlineData: {
                mimeType: mimeType || "image/jpeg",
                data: imageBase64,
              },
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema,
      },
    });

    const result = JSON.parse(response.text ?? "{}");

    return NextResponse.json(result);
  } catch (err) {
    console.error("Gemini analyze error:", err);
    return NextResponse.json({ error: "AI analysis failed" }, { status: 500 });
  }
}
