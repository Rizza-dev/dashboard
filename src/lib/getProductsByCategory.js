import Product from "@/models/Product";
import Category from "@/models/Category";
import { connectDB } from "./mongodb";

export const getProductsByCategory = async (slug) => {
  await connectDB();

  const category = await Category.findOne({ slug });
  if (!category) return [];

  const products = await Product.find({ category: category._id })
    .populate("category", "name slug")
    .lean();

  return JSON.parse(JSON.stringify(products));
};
