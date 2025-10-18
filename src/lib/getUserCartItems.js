import { cookies } from "next/headers";
import { connectDB } from "./mongodb";
import jwt from "jsonwebtoken";
import Cart from "@/models/Cart";
export async function GetUserCartItems() {
  try {
    const coockieStore = cookies();
    const token = (await coockieStore).get("accessToken")?.value;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    await connectDB();
    const CartItems = await Cart.findOne({ userId }).lean();
    return JSON.parse(JSON.stringify(CartItems));
  } catch (error) {
    console.log(error);
  }
}
