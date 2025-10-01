import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { phone, otp } = await req.json();
  await connectDB();

  // دریافت کاربر با شماره موبایل
  const user = await User.findOne({ phone });

  if (user.otp !== otp || new Date() > user.otpExpire) {
    return NextResponse.json({
      success: false,
      message: "کد وارد شده صحیح نیست یا منقضی شده است",
    });
  }

  user.otp = null;
  user.otpExpire = null;
  await user.save();

  // تولید توکن
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "3d" }
  );

  // پاسخ به کلاینت
  const res = NextResponse.json({
    success: true,
    message: "ورود با موفقیت انجام شد",
    user,
    token,
    requiresProfile: !user.name,
  });
  res.cookies.set("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  return res;
}
