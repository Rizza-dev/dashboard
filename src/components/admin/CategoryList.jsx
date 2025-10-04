import React from "react";
import { Edit, Trash } from "lucide-react";
import toast from "react-hot-toast";
import api from "@/lib/axios";
const CategoryList = ({ categories , getAllCategory }) => {
  const handleDeleteCategory = async (id) => {
    try {
      await api.delete(`/categories`, { data: { id } });
      toast.success("دسته بندی با موفقیت حذف شد");
      getAllCategory();
    } catch (error) {
      console.log(error);
      toast.error("خطا در حذف دسته بندی");
    }
  }
  return (
    <div className="max-h-[400px] lg:max-h-[800px] overflow-y-auto my-4">
      <table className="w-full">
        <thead className="sticky top-0 border-b border-strok bg-bg-2">
          <tr className="border-b border-strok text-xs md:text-base">
            <th className="pb-4 ">نام دسته</th>
            <th className="pb-4 ">اسلاگ</th>
            <th className="pb-4 ">ویرایش</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr
              key={index}
              className="border-b border-strok text-xs md:text-base hover:bg-strok"
            >
              <th className="p-2 ">{category.name}</th>
              <th className="p-2 ">{category.slug}</th>
              <th className="p-2 flex items-center justify-center gap-2">
                <button onClick={() => handleDeleteCategory(category._id)}><Trash size={20} className="w-4 md:w-6 cursor-pointer" /></button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
