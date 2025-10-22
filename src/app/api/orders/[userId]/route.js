import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export async function GET(req ,{ params }) {
  try {
    const { userId } = await params;
    
    if (!userId) {
      return NextResponse.json(
        { message: "User ID required" },
        { status: 400 }
      );
    }
    // Connect to the database
    await connectDB();

    // Find the order for the given user ID
    const order = await Order.find({ user: userId }).lean().sort({ createdAt: -1 });

    // Return the order
    return NextResponse.json(order);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در دریافت سفارشات" },
      { status: 500 }
    );
  }
}