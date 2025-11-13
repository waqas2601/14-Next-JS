import { connectDB } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import { NextResponse } from "next/server";

// GET: all products
export async function GET() {
  await connectDB();
  try {
    const data = await Product.find();
    return NextResponse.json({ success: true, result: data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ success: false, message });
  }
}

// POST: add new product
export async function POST(req: Request) {
  await connectDB();
  try {
    const body = await req.json();
    const product = new Product(body);
    const savedProduct = await product.save();
    return NextResponse.json({ success: true, result: savedProduct });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ success: false, message });
  }
}
