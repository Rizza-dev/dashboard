import api from "@/lib/axios";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import CreateProduct from "./CreateProduct";
import Link from "next/link";

const ProductsList = ({ products, getAllProduct }) => {
  const handleDeleteProduct = async (id) => {
    try {
      await api.delete(`/products`, { data: { id } });
      toast.success("محصول با موفقیت حذف شد");
      getAllProduct();
    } catch (error) {
      console.log(error);
      toast.error("خطا در حذف محصول");
    }
  };
  return (
    <div className="max-h-[400px] lg:max-h-[800px] overflow-y-auto mt-4 relative">
      <table className="w-full">
        <thead className="sticky top-0 border-b border-strok bg-bg-2">
          <tr className="border-b border-strok text-xs md:text-base">
            <th className="pb-4 text-xs md:text-base ">کد</th>
            <th className="pb-4 text-xs md:text-base ">نام</th>
            <th className="pb-4 text-xs md:text-base ">تعداد</th>
            <th className="pb-4 text-xs md:text-base ">توضیحات</th>
            <th className="pb-4 text-xs md:text-base ">قیمت</th>
            <th className="pb-4 text-xs md:text-base ">ویرایش</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="border-b border-strok text-xs md:text-base hover:bg-strok"
            >
              <th className="p-2 text-xs md:text-base ">#{product.code}</th>
              <th className="p-2 text-xs md:text-base max-w-[80px] truncate">
                {product.name}
              </th>
              <th className="p-2 text-xs md:text-base ">{product.stock}</th>
              <th className="p-2 text-xs md:text-base max-w-[80px] truncate">
                {product.description}
              </th>
              <th className="p-2 text-xs md:text-base">
                {new Intl.NumberFormat("fa-IR").format(product.price)}
                <p className="inline text-sm mr-2">تومان</p>
              </th>
              <th className="p-2 flex items-center justify-center gap-2">
                <button onClick={() => handleDeleteProduct(product._id)}>
                  <Trash className="w-4 md:w-5 cursor-pointer" />
                </button>

                <Link href={`/admin/products/${product._id}`}>
                  <Edit className="w-4 md:w-5 cursor-pointer" />
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
