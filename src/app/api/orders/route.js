import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const orders = await Order.find({});
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در دریافت سفارشات" },
      { status: 500 }
    );
  }
}
