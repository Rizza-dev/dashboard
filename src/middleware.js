import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";
export async function middleware(req) {
  const url = req.nextUrl.pathname;
  const token = req.cookies.get("accessToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const { payload } = await jwtVerify(token, secret);

  if (req.nextUrl.pathname.startsWith("/admin") && payload.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// تعریف مسیرهایی که middleware روشون اعمال بشه
export const config = {
  matcher: ["/admin/:path*"],
};
