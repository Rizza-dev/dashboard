import React from "react";
import { categorys } from "@/assets/assets";
import { Edit, Trash } from "lucide-react";
const CategoryList = () => {
  return (
    <div className="max-h-[400px] lg:max-h-[800px] overflow-y-auto my-4">
      <table className="w-full">
        <thead className="sticky top-0 border-b border-strok bg-bg-2">
          <tr className="border-b border-strok text-xs md:text-base">
            <th className="pb-4 ">کد</th>
            <th className="pb-4 ">نام دسته</th>
            <th className="pb-4 ">تعداد محصولات</th>
            <th className="pb-4 ">ویرایش</th>
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
