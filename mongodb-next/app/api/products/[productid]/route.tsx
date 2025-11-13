import { connectDB } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import { NextResponse } from "next/server";

// DELETE: remove product by ID
export async function DELETE(
  req: Request,
  context: { params: Promise<{ productid: string }> }
) {
  await connectDB();
  try {
    const { productid } = await context.params; // ✅ await params
    const deletedProduct = await Product.findByIdAndDelete(productid);

    if (!deletedProduct) {
      return NextResponse.json({
        success: false,
        message: "Product not found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ success: false, message });
  }
}

// PUT: update product by ID
export async function PUT(
  req: Request,
  context: { params: Promise<{ productid: string }> }
) {
  await connectDB();
  try {
    const { productid } = await context.params; // ✅ await params
    const body = await req.json();

    const updatedProduct = await Product.findByIdAndUpdate(productid, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return NextResponse.json({
        success: false,
        message: "Product not found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
      result: updatedProduct,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ success: false, message });
  }
}
