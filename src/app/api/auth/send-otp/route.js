import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
// import { KavenegarApi } from "kavenegar";

// const api = KavenegarApi({ apikey: process.env.KAVENEGAR_API_KEY });

export async function POST(req) {
  const { phone } = await req.json();
  await connectDB();

  // ایجاد کاربر جدید
  let user = await User.findOne({ phone });
  if (!user) user = await User.create({ phone });

  // ارسال OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpire = new Date(Date.now() + 3 * 60 * 1000);

  //   ذخیره OTP در دیتابیس
  user.otp = otp;
  user.otpExpire = otpExpire;
  await user.save();

  //   ارسال درخواست به کاوه نگار
  // api.VerifyLookup(
  //   { receptor: phone, token: otp, template: "registerverify" },
  //   (response, status) => console.log(response, status)
  // );
  console.log(`OTP for ${phone}: ${otp}`);
  

  //   پاسخ به کلاینت
  return NextResponse.json({ success: true , message : "کد تایید به شماره موبایل شما ارسال شد" });
}
