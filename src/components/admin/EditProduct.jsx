"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { X } from "lucide-react";
import Image from "next/image";
import api from "@/lib/axios";
import toast from "react-hot-toast";

const CreateProduct = ({ product }) => {
  const [newPrice, setNewPrice] = useState(false);
  const [categorys, setCategorys] = useState([]);
  const [uploading, setUploading] = useState(false);

  // get form data
  const [form, setForm] = useState(product);

  // get category
  useEffect(() => {
    const getCAtegorys = async () => {
      const res = await api.get("/categories");
      setCategorys(res.data);
    };
    getCAtegorys();
  }, []);

  // upload image
  const handleUpload = async (e) => {
    setUploading(true);

    const files = e.target.files;
    const formData = new FormData();
    for (const file of files) {
      formData.append("images", file);
    }

    const res = await api.post("/upload", formData);

    const data = res.data;
    setForm({ ...form, images: [...form.images, ...data.urls] });

    setUploading(false);
  };
  // handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit ایجاد محصول
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put("/products", { id: product._id, ...form });
      toast.success("محصول با موفقیت ویرایش شد");
      setForm({
        code: 0,
        name: "",
        price: "",
        description: "",
        colors: [],
        images: [],
        specialPrice: "",
        discountStart: "",
        discountEnd: "",
        categoryId: "",
        stock: 0,
      });
      window.location.href = `/admin/products`;
    } catch (error) {
      toast.error("خطا در ویرایش محصول");
      console.log(error);
      return;
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="w-full max-w-screen-xl relative h-fit bg-bg-2 border border-strok p-4 pt-10 lg:p-8 rounded-lg flex gap-2 flex-col items-center justify-center lg:justify-between lg:flex-row">
        {/* ===================image===================== */}
        <div className="w-full">
          <h1 className="text-2xl md:text-3xl text-center">عکس محصول</h1>
          <div className="flex flex-col items-center justify-center gap-4 w-full mt-4">
            <div className="w-full max-w-[400px] max-h-[533px] h-full relative aspect-[3/4] object-fill rounded-md overflow-hidden">
              <label htmlFor="upload">
                <Image
                  fill
                  className="absolute inset-0 "
                  src={form?.images[0] || "/upload.png"}
                  alt="upload"
                />
                <input
                  onChange={(e) => handleUpload(e)}
                  name="images"
                  id="upload"
                  type="file"
                  accept="image/*"
                  hidden
                  multiple
                  required
                />
              </label>
            </div>
            {uploading ? <p>در حال بارگذاری</p> : <></>}
            <div className="w-full h-1/3 flex items-center justify-center gap-2">
              {form?.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-20 h-20 rounded-md overflow-hidden"
                >
                  <Image
                    fill
                    className="absolute inset-0"
                    src={image}
                    alt="preview"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ===================details===================== */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 max-sm:mt-4">
          <h1 className="text-2xl md:text-3xl text-center">توضیحات محصول</h1>
          {/* ===================name===================== */}
          <input
            value={form?.name}
            name="name"
            onChange={(e) => handleChange(e)}
            type="text"
            id="productName"
            placeholder="نام محصول"
            className="block w-full border border-strok rounded-md p-4  outline-none"
          />
          {/* ====================code===================== */}
          <p className="w-full text-right">کد محصول</p>
          <input
            value={form?.code}
            name="code"
            onChange={(e) => handleChange(e)}
            type="number"
            id="productCode"
            placeholder="کد محصول"
            className="block w-full border border-strok rounded-md p-4  outline-none"
          />
          {/* ====================description===================== */}
          <textarea
            value={form?.description}
            name="description"
            id="description"
            onChange={(e) => handleChange(e)}
            placeholder="توضیحات"
            className="block w-full border border-strok rounded-md p-4  outline-none"
          ></textarea>
          {/* ====================colors===================== */}
          <p className="w-full text-right">رنگبندی</p>
          <div className="w-full flex flex-wrap items-center justify-start gap-2">
            <input
              onChange={(e) => handleChange(e)}
              type="color"
              name="colors"
              id="color"
              placeholder="رنگ"
            />
            <input
              onChange={(e) => handleChange(e)}
              type="color"
              name="colors"
              id="color"
              placeholder="رنگ"
            />
            <input
              onChange={(e) => handleChange(e)}
              type="color"
              name="colors"
              id="color"
              placeholder="رنگ"
            />
            <input
              onChange={(e) => handleChange(e)}
              type="color"
              name="colors"
              id="color"
              placeholder="رنگ"
            />
            <input
              onChange={(e) => handleChange(e)}
              type="color"
              name="colors"
              id="color"
              placeholder="رنگ"
            />
            <input
              onChange={(e) => handleChange(e)}
              type="color"
              name="colors"
              id="color"
              placeholder="رنگ"
            />
            <input
              onChange={(e) => handleChange(e)}
              type="color"
              name="colors"
              id="color"
              placeholder="رنگ"
            />
            <input
              onChange={(e) => handleChange(e)}
              type="color"
              name="colors"
              id="color"
              placeholder="رنگ"
            />
          </div>
          {/* ====================category===================== */}
          <div className="w-full">
            <select
              onChange={(e) => handleChange(e)}
              className="border border-strok rounded-md p-4 outline-none block"
              name="categoryId"
              id="categoryId"
            >
              <option value="">انتخاب دسته</option>
              {categorys.map((cat, index) => (
                <option className="text-background" value={cat._id} key={index}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          {/* ====================stock===================== */}
          <div className="flex items-center justify-start gap-4 flex-wrap">
            <div className="w-full ">
              <label htmlFor="stock">تعداد</label>
              <input
                value={form?.stock}
                onChange={(e) => handleChange(e)}
                type="number"
                name="stock"
                id="stock"
                className="border border-strok rounded-md p-4  outline-none block"
              />
            </div>
            {/* ====================price===================== */}
            <div className="w-full ">
              <label htmlFor="price">قیمت</label>
              <input
                value={form?.price}
                onChange={(e) => handleChange(e)}
                type="number"
                name="price"
                id="price"
                className="border border-strok rounded-md p-4  outline-none block"
              />
            </div>
            {/* ====================special price===================== */}
            <div className="w-full">
              <label htmlFor="checkSpecial">قیمت ویژه</label>
              <input
                type="checkbox"
                id="checkSpecial"
                className="border border-strok rounded-md p-4  outline-none block"
                onChange={(e) => setNewPrice(e.target.checked)}
              />
            </div>
            {newPrice && (
              <div className="w-full ">
                <label htmlFor="newPrice">قیمت جدید</label>
                <input
                  value={form?.specialPrice}
                  onChange={(e) => handleChange(e)}
                  type="number"
                  name="specialPrice"
                  id="specialPrice"
                  className="border border-strok rounded-md p-4  outline-none block"
                />
              </div>
            )}
            {/* ====================button===================== */}
            <Button
              onClick={(e) => handleSubmit(e)}
              disabled={uploading}
              text={"ذخیره محصول"}
              style={"w-full my-4"}
              fill={true}
            />
          </div>
        </div>
        <button className="absolute top-4 left-4 cursor-pointer" onClick={()=>window.location.href = `/admin/products`}><X /></button>
      </div>
    </div>
  );
};

export default CreateProduct;
