import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    if (!id) {
        return NextResponse.json(
          { message: "Product ID required" },
          { status: 400 }
        )
    }

    const product = await Product.findById(id);
    if (!product) {
        return NextResponse.json(
          { message: "Product not found" },
          { status: 404 }
        )
    }

    return NextResponse.json(product, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در دریافت محصول" },
      { status: 500 }
    );
  }
}
