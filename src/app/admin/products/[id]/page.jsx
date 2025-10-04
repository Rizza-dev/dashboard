import EditProduct from "@/components/admin/EditProduct";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export default async function EditProductPage({ params }) {
  // ⚡ params یک promise است، باید await شود
  const { id } = await params;
  
  
  await connectDB();
  const product = await Product.findById(id).lean();

  if (!product) {
    return <div>محصولی پیدا نشد</div>;
  }
  
  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">ویرایش محصول</h1>
      <EditProduct product={JSON.parse(JSON.stringify(product))} />
    </div>
  );
}