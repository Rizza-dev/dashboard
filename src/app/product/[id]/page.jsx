"use client";
import RelatedProducts from "@/components/site/RelatedProducts";
import SingleProduct from "@/components/site/SingleProduct";
import api from "@/lib/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SingleProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
        toast.error("خطا در دریافت محصول");
      } finally {
        setLoading(false); // ✅ اینجا درستشه
      }
    };

    if (id) {
      init();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center text-xl">
        در حال بارگذاری محصول...
      </div>
    );
  }
  if (!product) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center ">
        محصولی پیدا نشد
      </div>
    );
  }

  return (
    <div>
      {product && <SingleProduct product={product} />}
      {/* ===================== Related Products ===================== */}
      <RelatedProducts />
    </div>
  );
};

export default SingleProductPage;
