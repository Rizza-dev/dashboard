import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({});
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در دریافت محصولات" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در ایجاد محصول" },
      { status: 500 }
    );
  }
}
