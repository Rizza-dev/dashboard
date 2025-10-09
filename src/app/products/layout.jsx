import ProductMenu from "@/components/site/ProductMenu";
import { getCategories } from "@/lib/getCategories";

export default async function ProductsLayout({ children }) {
  const categories = await getCategories();
  return (
    <div className="w-full h-full mt-20">
      <h1 className="text-5xl md:text-6xl font-bold tracking-widest my-10 text-center">
        لیست محصولات
      </h1>
      <ProductMenu categories={categories} />
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
}
