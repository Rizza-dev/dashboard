"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";
import toast from "react-hot-toast";
import api from "@/lib/axios";

const NewCategory = ({ newCategory, setNewCategory }) => {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateCategory = async () => {
    (e) => e.preventDefault()
    
    try {
      if (!name || !slug) {
        toast.error("لطفا نام و آدرس دسته بندی را وارد کنید");
        return;
      }
      const res = await api.post("/categories", {
        name,
        slug,
        description,
      });
      if (res.status === 201) {
        toast.success("دسته بندی با موفقیت ایجاد شد");
        setName("");
        setSlug("");
        setDescription("");
      }
    } catch (error) {
      toast.error("خطا در ایجاد دسته بندی");
      console.log(error);
    }
  };

  return (
    <div
      className={`absolute top-0 right-0  left-0 bottom-0 bg-background/80 backdrop:blur-2xl h-full w-full flex items-center justify-center ${
        !newCategory && "hidden"
      }`}
    >
      <div  className="w-full relative h-fit bg-bg-2 border border-strok p-4 pt-10 lg:p-8 rounded-lg max-w-screen-sm">
        <h1 className="text-2xl md:text-3xl">افزودن دسته جدید</h1>
        <input
        value={name}
          required
          type="text"
          className="block w-full  border border-strok rounded-md p-4 mt-4 outline-none"
          placeholder="نام دسته"
          onChange={(e) => setName(e.target.value)}
        />
        <input
        value={slug}
          required
          type="text"
          className="block w-full  border border-strok rounded-md p-4 mt-4 outline-none"
          placeholder="نام اسلاگ به (انگلیسی)"
          onChange={(e) => setSlug(e.target.value)}
        />
        <input
        value={description}
          type="text"
          className="block w-full  border border-strok rounded-md p-4 mt-4 outline-none"
          placeholder="توضیحات (اختیاری)"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          onClick={handleCreateCategory}
          text="افزودن"
          style="mt-4 w-full"
          fill
        />
        <span
          onClick={() => setNewCategory(false)}
          className="absolute left-4 top-4 cursor-pointer"
        >
          <X />
        </span>
      </div>
    </div>
  );
};

export default NewCategory;
