import Category from "@/models/Category";
import { connectDB } from "./mongodb";
export async function getCategories() {
  await connectDB();
  const catories = await Category.find({}).lean();

  return JSON.parse(JSON.stringify(catories));
}
