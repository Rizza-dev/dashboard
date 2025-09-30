'use client'
import React, { useState } from "react";
import Button from "./Button";
import { X } from "lucide-react";
import Image from "next/image";

const CreateProduct = ({ createProduct, setCreateProduct }) => {
     const [newPrice, setNewPrice] = useState(false);
  return (
    <div
      className={`absolute top-0 right-0  left-0 bottom-0 bg-background/80 backdrop:blur-2xl h-full w-full flex items-start justify-center ${
        !createProduct && "hidden"
      }`}
    >
      <div className="w-full max-w-screen-xl relative h-fit bg-bg-2 border border-strok p-4 pt-10 lg:p-8 rounded-lg flex gap-2 flex-col items-center justify-center lg:justify-between lg:flex-row">
        <div className="w-full">
          <h1 className="text-2xl md:text-3xl text-center">عکس محصول</h1>
          <div className="flex flex-col items-center justify-center gap-4 w-full mt-4">
            <div className="w-full max-w-[400px] max-h-[533px] h-full relative aspect-[3/4] border object-fill rounded-md overflow-hidden">
              <label htmlFor="upload">
                <Image
                  fill
                  className="absolute inset-0 "
                  src="/upload.png"
                  alt="upload"
                />
                <input id="upload" type="file" accept="image/*" hidden />
              </label>
            </div>
            <div className="w-full h-1/3 flex items-center justify-center gap-2">
              <div className="relative w-20 h-20 rounded-md overflow-hidden">
                <label htmlFor="uploadImage2">
                  <Image
                    fill
                    className="absolute inset-0"
                    src="/upload.png"
                    alt="upload"
                  />
                  <input
                    id="uploadImage2"
                    type="file"
                    accept="image/*"
                    hidden
                  />
                </label>
              </div>
              <div className="relative w-20 h-20 rounded-md overflow-hidden">
                <label htmlFor="uploadImage4">
                  <Image
                    fill
                    className="absolute inset-0"
                    src="/upload.png"
                    alt="upload"
                  />
                  <input
                    id="uploadImage4"
                    type="file"
                    accept="image/*"
                    hidden
                  />
                </label>
              </div>
              <div className="relative w-20 h-20 rounded-md overflow-hidden">
                <label htmlFor="uploadImage5">
                  <Image
                    fill
                    className="absolute inset-0"
                    src="/upload.png"
                    alt="upload"
                  />
                  <input
                    id="uploadImage5"
                    type="file"
                    accept="image/*"
                    hidden
                  />
                </label>
              </div>
              <div className="relative w-20 h-20 rounded-md overflow-hidden">
                <label htmlFor="uploadImage3">
                  <Image
                    fill
                    className="absolute inset-0"
                    src="/upload.png"
                    alt="upload"
                  />
                  <input
                    id="uploadImage3"
                    type="file"
                    accept="image/*"
                    hidden
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 max-sm:mt-4">
          <h1 className="text-2xl md:text-3xl text-center">توضیحات محصول</h1>
          <input
            type="text"
            name="productName"
            id="productName"
            placeholder="نام محصول"
            className="block w-full border border-strok rounded-md p-4  outline-none"
          />
          <textarea
            name="description"
            id="description"
            placeholder="توضیحات"
            className="block w-full border border-strok rounded-md p-4  outline-none"
          ></textarea>
          <p className="w-full text-right">رنگبندی</p>
          <div className="w-full flex flex-wrap items-center justify-start gap-2">
            <input type="color" name="color" id="color" placeholder="رنگ" />
            <input type="color" name="color" id="color" placeholder="رنگ" />
            <input type="color" name="color" id="color" placeholder="رنگ" />
            <input type="color" name="color" id="color" placeholder="رنگ" />
            <input type="color" name="color" id="color" placeholder="رنگ" />
            <input type="color" name="color" id="color" placeholder="رنگ" />
            <input type="color" name="color" id="color" placeholder="رنگ" />
            <input type="color" name="color" id="color" placeholder="رنگ" />
          </div>
          <div className="flex items-center justify-start gap-4 flex-wrap">
            <div className="w-full ">
              <label htmlFor="count">تعداد</label>
              <input
                type="number"
                name="count"
                id="count"
                className="border border-strok rounded-md p-4  outline-none block"
              />
            </div>
            <div className="w-full ">
              <label htmlFor="price">قیمت</label>
              <input
                type="number"
                name="price"
                id="price"
                className="border border-strok rounded-md p-4  outline-none block"
              />
            </div>
            <div className="w-full">
              <label htmlFor="SpecialPrice">قیمت ویژه</label>
              <input
                type="checkbox"
                name="SpecialPrice"
                id="SpecialPrice"
                className="border border-strok rounded-md p-4  outline-none block"
                onChange={(e) => setNewPrice(e.target.checked)}
              />
            </div>
            {newPrice && (
              <div className="w-full ">
                <label htmlFor="newPrice">قیمت جدید</label>
                <input
                  type="number"
                  name="newPrice"
                  id="newPrice"
                  className="border border-strok rounded-md p-4  outline-none block"
                />
              </div>
            )}
            <Button text={"افزودن محصول"} style={"w-full my-4"} fill={true} />
          </div>
        </div>
        <span
          onClick={() => setCreateProduct(false)}
          className="absolute left-4 top-4 cursor-pointer"
        >
          <X />
        </span>
      </div>
    </div>
  );
};

export default CreateProduct;
