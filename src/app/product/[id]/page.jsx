import SingleProduct from "@/components/site/SingleProduct";
import { getProductById } from "@/lib/getProductById";

export default async function SingleProductPage({ params }) {
    const {id} = await params;
    const product = await getProductById(id);

    if (!product) {
        return <div className="w-full h-[80vh] flex items-center justify-center ">محصولی پیدا نشد</div>
    }

    
    return (
        <SingleProduct product={product} />
    )
}