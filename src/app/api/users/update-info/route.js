import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function PUT(req) {
  await connectDB();
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { message: "User ID required" },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "کاربر یافت نشد" }, { status: 404 });
    }

    // فقط فیلدهایی که در body هست رو آپدیت کن
    const allowedFields = ["name", "email", "phone", "address", "postalCode", "avatar"];
    allowedFields.forEach((field) => {
      if (body[field] !== undefined && body[field] !== null) {
        user[field] = body[field];
      }
    });

    await user.save();

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در ویرایش کاربر" },
      { status: 500 }
    );
  }
}
