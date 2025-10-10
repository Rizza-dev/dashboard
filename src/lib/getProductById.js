import Product from "@/models/Product";
import mongoose from "mongoose";
import { connectDB } from "./mongodb";

export async function getProductById(id) {
  await connectDB();
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  const product = await Product.findById(id).lean();
  return product ? JSON.parse(JSON.stringify(product)) : null;
}