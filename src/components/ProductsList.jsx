import React from "react";
import { products } from "@/assets/assets";
import { Edit, Trash } from "lucide-react";
const ProductsList = () => {
  return (
    <div className="max-h-64 overflow-y-auto">
      <table className="w-full">
        <thead className="sticky top-0 bg-background">
          <tr className="border-b border-strok text-xs md:text-base">
            <th className="p-2 ">کد</th>
            <th className="p-2 ">نام</th>
            <th className="p-2 ">تعداد</th>
            <th className="p-2 ">توضیحات</th>
            <th className="p-2 ">قیمت</th>
            <th className="p-2 ">ویرایش</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="border-b border-strok text-xs md:text-base hover:bg-strok"
            >
              <th className="p-2 ">{product.code}</th>
              <th className="p-2 ">{product.name}</th>
              <th className="p-2 ">{product.count}</th>
              <th className="p-2 ">{product.desc}</th>
              <th className="p-2 ">{product.price}</th>
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
