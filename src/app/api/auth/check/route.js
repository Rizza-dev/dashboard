import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import User from "@/models/User";
export async function GET() {
  const cookiesStore = cookies();
  const token = (await cookiesStore).get("accessToken")?.value;
  if (!token) {
    return NextResponse.json({ valid: false }, { status: 401 });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userInfo = await User.findOne({ _id: decoded.id });
    return NextResponse.json({ valid: true, user: decoded , avatar : userInfo.avatar});
  } catch (error) {
    return NextResponse.json({ valid: false }, { status: 401 });
  }
}
