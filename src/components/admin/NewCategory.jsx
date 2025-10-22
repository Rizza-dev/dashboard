"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";
import toast from "react-hot-toast";
import api from "@/lib/axios";
import { set } from "mongoose";

const NewCategory = ({ newCategory, setNewCategory }) => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);


   const handleUpload = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setPreview(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("file", file);

    const res = await api.post("/categories/upload", formData);

    setCategoryImage(res.data.url);
    setUploading(false);
  };
  const handleCreateCategory = async () => {
    (e) => e.preventDefault();
    
    try {
      if (!name || !slug) {
        toast.error("لطفا نام و آدرس دسته بندی را وارد کنید");
        return;
      }
      const res = await api.post("/categories", {
        name,
        image: categoryImage,
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
      <div className="w-full relative h-fit bg-bg-2 border border-strok p-4 pt-10 lg:p-8 rounded-lg max-w-screen-sm">
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

        {/* ========================category image =========================== */}

        <label
          htmlFor="categoryImage"
          className="relative cursor-pointer aspect-[3/4]  "
        >
          <img
            className="w-[200px] h-[266px] mt-4 rounded-sm"
            src={categoryImage || preview || '/upload.png'}
            alt="categoryImage"
          />
          <input
            name="categoryImage"
            id="categoryImage"
            onChange={handleUpload}
            type="file"
            accept="image/*"
            hidden
          />
        </label>
        {uploading && <p className="w-full text-center mt-4">در حال بارگزاری</p>}

        <Button
        disabled={uploading}
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
