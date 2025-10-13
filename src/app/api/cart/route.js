import { connectDB } from "@/lib/mongodb";
import Cart from "@/models/Cart";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET; // 👈 حتماً در .env تنظیم کن

// ✅ گرفتن userId از توکن کوکی
// function getUserIdFromToken() {
//   const token = cookies().get("accessToken")?.value;
//   if (!token) return null;
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     return decoded.userId;
//   } catch (err) {
//     return null;
//   }
// }
export async function GET() {
  await connectDB();
  const cookiesStore = cookies();
  const token = (await cookiesStore).get("accessToken")?.value;

  if (!token)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const userId = decoded.id;

  if (!userId) {
    return NextResponse.json({ message: "User ID required" }, { status: 400 });
  }

  const cart = await Cart.findOne({ userId }).lean();
  return NextResponse.json(cart || { items: [] });
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const { userId, product } = body;

  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = await Cart.create({ userId, items: [product] });
  } else {
    const existing = cart.items.find(
      (item) => item.productId.toString() === product.productId.toString()
    );
    if (existing) {
      existing.quantity += product.quantity || 1;
    } else {
      cart.items.push(product);
    }

    await cart.save();
  }

  return NextResponse.json(cart);
}

export async function DELETE(req) {
  await connectDB();
  const cookiesStore = cookies();
  const token = (await cookiesStore).get("accessToken")?.value;

  if (!token)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const userId = decoded.id;

  if (!userId) {
    return NextResponse.json({ message: "User ID required" }, { status: 400 });
  }
  
  const { productId } = await req.json();
  const cart = await Cart.findOne({ userId });
  if (!cart)
    return NextResponse.json({ message: "Cart not found" }, { status: 404 });
  cart.items = cart.items.filter((i) => i.productId.toString() !== productId);
  await cart.save();
  return NextResponse.json(cart);
}
