import React from "react";
import { products } from "@/assets/assets";
import { Edit, Trash } from "lucide-react";
const ProductsList = () => {
  return (
    <div className="max-h-[400px] lg:max-h-[800px] overflow-y-auto mt-4">
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
              <th className="p-2 text-xs md:text-base max-w-[80px] truncate">{product.name}</th>
              <th className="p-2 text-xs md:text-base ">{product.count}</th>
              <th className="p-2 text-xs md:text-base max-w-[80px] truncate">{product.desc}</th>
              <th className="p-2 text-xs md:text-base ">{product.price}</th>
              <th className="p-2 flex items-center justify-center gap-2">
                <Trash className="w-4 md:w-6 cursor-pointer" />
                <Edit className="w-4 md:w-6 cursor-pointer" />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
