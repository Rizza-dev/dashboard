import React from "react";
import { categorys } from "@/assets/assets";
import { Edit, Trash } from "lucide-react";
const CategoryList = () => {
  return (
    <div className="max-h-64 overflow-y-auto">
      <table className="w-full">
        <thead className="sticky top-0 bg-background">
          <tr className="border-b border-strok text-xs md:text-base">
            <th className="p-2 ">کد</th>
            <th className="p-2 ">نام دسته</th>
            <th className="p-2 ">تعداد محصولات</th>
            <th className="p-2 ">ویرایش</th>
          </tr>
        </thead>
        <tbody>
          {categorys.map((category, index) => (
            <tr
              key={index}
              className="border-b border-strok text-xs md:text-base hover:bg-strok"
            >
              <th className="p-2 ">{category.code}</th>
              <th className="p-2 ">{category.name}</th>
              <th className="p-2 ">{category.count}</th>
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

export default CategoryList;
