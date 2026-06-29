import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const imgbbForm = new FormData();
    imgbbForm.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      { method: "POST", body: imgbbForm },
    );

    const data = await res.json();

    if (!data.success) {
      return NextResponse.json(
        { error: "Image upload failed" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: data.data.url as string });
  } catch (err) {
    console.error("imgbb upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
