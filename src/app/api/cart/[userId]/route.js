import { connectDB } from "@/lib/mongodb";
import Cart from "@/models/Cart";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { userId } = await params;
    const { productId, quantity } = await req.json();

    const cart = await Cart.findOne({ userId });
    if (!cart)
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });

    const item = cart.items.find((i) => i.productId.toString() === productId);

    if (item) {
      item.quantity = quantity;
      await cart.save(); // 👈 حتماً ذخیره کن
      return NextResponse.json({ success: true, cart });
    }

    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "خطا در ویرایش سبد خرید" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await connectDB();
  const { userId } = await params;
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("productId");
  if (!productId) {
    return NextResponse.json(
      { message: "Product ID required" },
      { status: 400 }
    );
  }
  const cart = await Cart.findOne({ userId });

  if (!cart)
    return NextResponse.json({ message: "Cart not found" }, { status: 404 });

  cart.items = cart.items.filter(
    (i) => i._id.toString() !== productId.toString()
  );
  await cart.save();
  return NextResponse.json(cart, { status: 200 });
}
