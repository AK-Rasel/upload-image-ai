import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

// GET
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, products });
  } catch (err) {
    console.error("GET /api/products error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}

// POST
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const {
      title,
      price,
      description,
      category,
      brand,
      stock,
      featured,
      image,
    } = body;

    if (!title || !price || !description || !category || !brand || !image) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const product = await Product.create({
      title,
      price: Number(price),
      description,
      category,
      brand,
      stock: Number(stock) || 0,
      featured: Boolean(featured),
      image,
      rating: 0,
      reviews: 0,
    });

    return NextResponse.json({ success: true, product }, { status: 201 });
  } catch (err) {
    console.error("POST /api/products error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to create product" },
      { status: 500 },
    );
  }
}
