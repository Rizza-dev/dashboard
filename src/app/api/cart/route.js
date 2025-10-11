import { connectDB } from "@/lib/mongodb";
import Cart from "@/models/Cart";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

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
