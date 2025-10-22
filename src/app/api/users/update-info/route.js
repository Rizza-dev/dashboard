import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function PUT(req) {
  await connectDB();
  try {
    const { name, email, phone, address, postalCode, userId } =
      await req.json();
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

    user.name = name;
    user.phone = phone;
    user.email = email;
    user.address = address;
    user.postalCode = postalCode;
    await user.save();

    // const user = await User.findByIdAndUpdate(
    //   userId,
    //   { name, email, address, postalCode },
    //   { new: true }
    // );

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در ویرایش کاربر" },
      { status: 500 }
    );
  }
}
