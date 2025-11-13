import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json({ success: true, result: products });
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const newProduct = await Product.create(body);
  return NextResponse.json({ success: true, result: newProduct });
}
