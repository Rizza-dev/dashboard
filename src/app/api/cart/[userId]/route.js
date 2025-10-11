import { connectDB } from "@/lib/mongodb";
import Cart from "@/models/Cart";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await connectDB();
  const { userId } = params;
  const { productId, quantity } = await req.json();

  const cart = await Cart.findOne({ userId });

  if (!cart)
    return NextResponse.json({ message: "Cart not found" }, { status: 404 });

  const item = cart.items.find((i) => i.productId.toString() === productId);

  if (item) {
    item.quantity = quantity;
  }

  return NextResponse.json(cart);
}

export async function DELETE(req, { params }) {
  await connectDB();
  const { userId } = params;
  const { productId } = await req.json();
  const cart = await Cart.findOne({ userId });
  if (!cart)
    return NextResponse.json({ message: "Cart not found" }, { status: 404 });
  cart.items = cart.items.filter((i) => i.productId.toString() !== productId);
  await cart.save();
  return NextResponse.json(cart);
}
