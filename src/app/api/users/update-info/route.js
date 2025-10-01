import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const token = req.cookies.get("token") || {};
  if (!token)
    return NextResponse.json({
      success: false,
      message: "لطفا وارد حساب کاربری خود شوید",
    });

  let decode;
  try {
    decode = jwt.verify(token , process.env.JWT_SECRET);
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "توکن نا معتبر",
    });
  }

  const { name, email, address, postalCode } = await req.json();
  const user = await User.findByIdAndUpdate(
    decode.id,
    { name, email, address, postalCode },
    { new: true }
  );

  return NextResponse.json({ success: true, user });
}
