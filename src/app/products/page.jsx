import Button from "@/components/Button";
import CategoryList from "@/components/CategoryList";
import ProductsList from "@/components/ProductsList";
import { Plus } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[85vh] flex items-center justify-between flex-col lg:flex-row gap-4">
      <div className="w-full flex flex-col justify-between flex-2 border border-strok h-full rounded-xl p-4 gap-6">
        <h1 className="text-2xl md:text-3xl">لیست محصولات</h1>
        <div className=" w-full h-full">
          <ProductsList />
        </div>
        <div className="w-full">
          <Button
            strok={true}
            icon={<Plus className="max-md:w-4" />}
            text={"افزودن محصول"}
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-between flex-1 border border-strok h-full rounded-xl p-4 gap-6">
        <h2 className="text-2xl md:text-3xl">لیست دسته بندی ها</h2>
        <div className=" w-full h-full">
          <CategoryList />
        </div>
        <div className="w-full ">
          <Button
            strok={true}
            icon={<Plus className="max-md:w-4" />}
            text={"افزودن دسته جدید"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
