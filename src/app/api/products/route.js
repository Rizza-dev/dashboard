import cloudinary from "@/lib/cloudinary";
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
      code,
      name,
      price,
      description,
      colors,
      images,
      specialPrice,
      discountStart,
      discountEnd,
      categoryId,
      stock,
    } = body;

    if ((!name, !price, !description, !images, !categoryId, !stock, !code)) {
      return NextResponse.json(
        { message: "لطفا تمامی فیلد ها را پر کنید" },
        { status: 400 }
      );
    }

    const createdProduct = await Product.create({
      code,
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

export async function DELETE(req) {
  const body = await req.json();
  try {
    await connectDB();
    const { id } = body;
    if (!id) {
      return NextResponse.json(
        { message: "لطفا شناسه محصول را وارد کنید" },
        { status: 400 }
      );
    }

    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({ message: "محصول یافت نشد" }, { status: 404 });
    }

    // delete from cloudinary
    if (product.images && product.images?.length) {
      for (const img of product.images) {
        const parts = img.split("/upload/");
        if (parts.length < 2) return null;
        const publicId = parts[1].replace(/^v\d+\//, "").split(".")[0]; // حذف پسوند

        if (publicId) {
          await cloudinary.uploader.destroy(publicId);
        }
      }
    }

    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return NextResponse.json({ message: "محصول یافت نشد" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "محصول با موفقیت حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "خطا در حذف محصول" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { id, ...data } = body;

    if (!id) {
      return NextResponse.json(
        { message: "لطفا شناسه محصول را وارد کنید" },
        { status: 400 }
      );
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      { ...data },
      { new: true }
    );
    if (!updatedProduct) {
      return NextResponse.json({ message: "محصول یافت نشد" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "محصول با موفقیت ویرایش شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در ویرایش محصول" },
      { status: 500 }
    );
  }
}
