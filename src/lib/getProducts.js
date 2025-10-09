import Product from "@/models/Product";
import { connectDB } from "./mongodb";
import Category from "@/models/Category";

export async function getProducts(slug) {
  await connectDB();

  const products = await Product.find().lean();
  return JSON.parse(JSON.stringify(products));
}
