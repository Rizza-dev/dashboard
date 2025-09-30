import { connectDB } from "@/lib/mongodb";

import User from "@/models/User";

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
