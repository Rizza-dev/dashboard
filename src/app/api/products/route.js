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
  const body = await req.json();
  try {
    await connectDB();
    const {
      name,
      price,
      description,
      colors,
      images,
      specialPrice,
      discountStart,
      discountEnd,
      categoryId,
      stock
    } = body;

    if ((!name, !price, !description, !colors, !images, !category)) {
      return NextResponse.json(
        { message: "لطفا تمامی فیلد ها را پر کنید" },
        { status: 400 }
      );
    }

    const createdProduct = await Product.create({
      name,
      price,
      description,
      colors,
      images,
      specialPrice,
      discountStart,
      discountEnd,
      stock,
      category: categoryId,
    });

    return NextResponse.json(
      createdProduct,
      { message: "محصول با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در ایجاد محصول" },
      { status: 500 }
    );
  }
}
