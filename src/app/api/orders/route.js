import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/User";
/**
 * GET /orders
 * @return {Order} The order for the given user ID
 * @throws {401} If the user is not authenticated
 * @throws {400} If the user ID is not provided
 * @throws {500} If there is an error in the database
 */
export async function GET(req) {
  try {
    await connectDB();

    const cookiesStore = cookies();
    const token = (await cookiesStore).get("accessToken")?.value;

    if (!token)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.id;

    if (!userId) {
      return NextResponse.json(
        { message: "User ID required" },
        { status: 400 }
      );
    }

    
    
    const admin = await User.findOne({ role: "admin" });
    

    if (userId !== JSON.parse(JSON.stringify(admin._id))) {
      return NextResponse.json({ message: "Unauthorized you are not admin" }, { status: 401 });
    }

    const orders = await Order.find().lean().sort({ createdAt: -1 });
    return NextResponse.json(orders);

    // Find the order
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در دریافت سفارشات" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { message: "شناسه یا وضعیت سفارش ارسال نشده است" },
        { status: 400 }
      );
    }
    // Connect to the database
    await connectDB();

    // Update the order
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updatedOrder) {
      return NextResponse.json({ message: "سفارش یافت نشد" }, { status: 404 });
    }
    // Return the response
    return NextResponse.json(
      {
        updatedOrder,
        message: "سفارش با موفقیت ویرایش شد",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    // Return an error response
    return NextResponse.json(
      { message: "خطا در ویرایش سفارشات" },
      { status: 500 }
    );
  }
}
