import Cart from "@/models/Cart";
import { connectDB } from "./mongodb";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export async function getCartLength() {
  await connectDB();
    const cookiesStore = cookies();
    const token = (await cookiesStore).get("accessToken")?.value;
    if (!token) {
        return null
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    const cart = await Cart.findOne({ userId }).lean();
    return JSON.stringify(cart.items.length);
}
