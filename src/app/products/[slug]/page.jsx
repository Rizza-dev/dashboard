import ProductListPage from "@/components/site/ProductListPage";
import { getProductsByCategory } from "@/lib/getProductsByCategory";

export default async function CategoryPage({ params }){
  const {slug} = await params;
  const products = await getProductsByCategory(slug);
  if (products.length === 0) {
    return (
      <div className="w-full text-center flex items-center justify-center text-2xl h-[50vh]">محصولی پیدا نشد</div>
    )
    
  }
  return (
    <ProductListPage products={products} />
  )
}