"use client";
import Button from "@/components/admin/Button";
import CategoryList from "@/components/admin/CategoryList";
import CreateProduct from "@/components/admin/CreateProduct";
import NewCategory from "@/components/admin/NewCategory";
import ProductsList from "@/components/admin/ProductsList";
import { Plus, RefreshCw } from "lucide-react";
import React, { useEffect, useState } from "react";
import api from "@/lib/axios";
import toast from "react-hot-toast";
const page = () => {
  const [createProduct, setCreateProduct] = useState(false);
  const [newCategory, setNewCategory] = useState(false);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getAllProduct = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
  };
  const getAllCategory = async () => {
    const res = await api.get("/categories");
    setCategories(res.data);
  };
  useEffect(() => {
    getAllProduct();
    getAllCategory();
  }, []);

  return (
    <div className="w-full h-full lg:h-[85vh] flex items-center justify-between flex-col lg:flex-row gap-4 relative">
      <div className="bg-bg-2 w-full flex flex-col justify-between flex-2 border border-strok h-full rounded-xl p-4 gap-6">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl">لیست محصولات</h1>
          <button onClick={getAllProduct} className="bg-foreground/30 flex items-center justify-center gap-2 cursor-pointer text-foreground px-4 py-2 rounded-sm">
            رفرش کردن لیست <RefreshCw size={16} />
          </button>
        </div>
        <div className=" w-full h-full">
          <ProductsList {...{ products,getAllProduct }} />
        </div>
        <div className="w-full" onClick={() => setCreateProduct(true)}>
          <Button
            strok={true}
            icon={<Plus className="max-md:w-4" />}
            text={"افزودن محصول"}
          />
        </div>
      </div>
      <div className="bg-bg-2 w-full flex flex-col justify-between flex-1 border border-strok h-full rounded-xl p-4 gap-6">
       <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl">لیست محصولات</h1>
          <button onClick={getAllCategory} className="bg-foreground/30 flex items-center justify-center gap-2 cursor-pointer text-foreground px-4 py-2 rounded-sm">
            رفرش کردن لیست <RefreshCw size={16} />
          </button>
        </div>
        <div className=" w-full h-full">
          <CategoryList {...{ categories , getAllCategory }} />
        </div>
        <div className="w-full " onClick={() => setNewCategory(true)}>
          <Button
            strok={true}
            icon={<Plus className="max-md:w-4" />}
            text={"افزودن دسته جدید"}
          />
        </div>
      </div>
      {createProduct && (
        <CreateProduct
          setCreateProduct={setCreateProduct}
          createProduct={createProduct}
        />
      )}
      {newCategory && (
        <NewCategory
          setNewCategory={setNewCategory}
          newCategory={newCategory}
        />
      )}
    </div>
  );
};

export default page;
