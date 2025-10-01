import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: "خروج با موفقیت انجام شد" },
      { status: 200 }
    );
    response.cookies.set("accessToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0),
      path: "/",
      sameSite: "strict",
    });
    return response;
  } catch (error) {
    return NextResponse.json({ message: "خطا در خروج" }, { status: 500 });
  }
}
