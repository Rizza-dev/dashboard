import ProductListPage from "@/components/site/ProductListPage";
import { getCategories } from "@/lib/getCategories";
import { getProducts } from "@/lib/getProducts";

export default async function productPage() {
  const products = await getProducts();
  const categories = await getCategories();

  return <ProductListPage products={products} categories={categories} />;
}
