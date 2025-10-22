import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { userId } = await params;
    if (!userId) {
      return NextResponse.json(
        { message: "User ID required" },
        { status: 400 }
      );
    }
    const user = await User.findById(userId);
    return Response.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در دریافت کاربر" },
      { status: 500 }
    );
  }
}
