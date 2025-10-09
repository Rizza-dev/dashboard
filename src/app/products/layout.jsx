
import ProductMenu from "@/components/site/ProductMenu";
import { getCategories } from "@/lib/getCategories";
import Link from "next/link";

export default async function ProductsLayout({ children }) {
  const categories = await getCategories();
  return (
    <div className="w-full h-full ">
      <h1 className="text-5xl md:text-6xl font-bold tracking-widest my-10">
        لیست محصولات
      </h1>
      <ProductMenu categories={categories} />
      <div className="my-10">
        {children}
      </div>
    </div>
  );
}
