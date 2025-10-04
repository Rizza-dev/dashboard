import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const categories = await Category.find({});
    return NextResponse.json(categories);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "خطا در دریافت دسته بندی ها" },
      { status: 500 }
    );
  }
}
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, slug, description } = body;
    if ((!name, !slug)) {
      return NextResponse.json(
        { message: "لطفا نام و آدرس دسته بندی را وارد کنید" },
        { status: 400 }
      );
    }
    const category = await Category.findOne({ slug });
    if (category) {
      return NextResponse.json(
        { message: "دسته بندی وجود دارد" },
        { status: 400 }
      );
    }
    const newCategory = await Category.create({ name, slug, description });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در ایجاد دسته بندی" },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  const body = await req.json();
  try {
    await connectDB();
    const { id } = body;
    if (!id) {
      return NextResponse.json(
        { message: "لطفا شناسه دسته را وارد کنید" },
        { status: 400 }
      );
    }

    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return NextResponse.json({ message: "دسته یافت نشد" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "دسته با موفقیت حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "خطا در حذف دسته" }, { status: 500 });
  }
}
