import { connectDB } from "@/lib/mongodb";

import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const users = await User.find({});
  return Response.json(users);
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { phone, name, role } = body;

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return Response.json(
        { error: "کاربری با این شماره موبایل وجود دارد" },
        { status: 400 }
      );
    }
    const newUser = await User.create({ phone, name, role: role || "user" });
    return Response.json(newUser, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "خطا در ایجاد کاربر" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const body = await req.json();
    const id = body.id;
    if (!id) {
      return NextResponse.json(
        { message: "لطفا شناسه کاربر را وارد کنید" },
        { status: 400 }
      );
    }
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return NextResponse.json({ message: "کاربر یافت نشد" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "کاربر با موفقیت حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "خطا در حذف کاربر" }, { status: 500 });
  }
}

export async function PUT(req ) {
  try {
    await connectDB();
    const body = await req.json();
    const { id , ...data } = body;
    const { phone, name, role } = data;
    
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { name, phone, role },
      { new: true }
    );
    if (!updatedUser) {
      return NextResponse.json({ message: "کاربر یافت نشد" }, { status: 404 });
    }
    return NextResponse.json({ message: "کاربر با موفقیت ویرایش شد" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در ویرایش کاربر" },
      { status: 500 }
    );
  }
}
