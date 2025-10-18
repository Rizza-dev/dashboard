import Order from "@/models/Order";
import { connectDB } from "./mongodb";
import User from "@/models/User";
export async function getOrders() {
  await connectDB();
  const orders = await Order.find()
    .populate("user", "name phone") // فقط فیلدهایی که لازم داری
    .sort({ createdAt: -1 });
  return JSON.parse(JSON.stringify(orders));
}
