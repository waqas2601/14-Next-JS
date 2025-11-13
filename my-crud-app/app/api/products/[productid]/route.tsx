import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";

export async function GET(
  req: Request,
  { params }: { params: { productid: string } }
) {
  await connectDB();
  const product = await Product.findById(params.productid);
  if (!product)
    return NextResponse.json({ success: false, message: "Product not found" });
  return NextResponse.json({ success: true, result: product });
}

export async function PUT(
  req: Request,
  { params }: { params: { productid: string } }
) {
  await connectDB();
  const body = await req.json();
  const updatedProduct = await Product.findByIdAndUpdate(
    params.productid,
    body,
    { new: true, runValidators: true }
  );
  if (!updatedProduct)
    return NextResponse.json({ success: false, message: "Product not found" });
  return NextResponse.json({ success: true, result: updatedProduct });
}

export async function DELETE(
  req: Request,
  { params }: { params: { productid: string } }
) {
  await connectDB();
  const deletedProduct = await Product.findByIdAndDelete(params.productid);
  if (!deletedProduct)
    return NextResponse.json({ success: false, message: "Product not found" });
  return NextResponse.json({
    success: true,
    message: "Product deleted successfully",
  });
}
