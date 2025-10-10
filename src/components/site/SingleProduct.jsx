"use client";
import { Minus, MinusCircle, PlusCircle } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SingleProduct = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);

  // console.log(product);

  // useEffect(() => {
  //     setMainImage(product.images[0] || "");
  // }, [product]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-6">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 rounded-md py-8 border-strok border">
          <div className="relative w-[90%] h-full flex-6 aspect-[3/4] max-w-[500px] rounded-md overflow-hidden">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-fill"
            />
          </div>
          <div className="flex-2 flex items-center justify-start snap-x overflow-x-auto snap-mandatory gap-2 whitespace-nowrap ">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square w-[100px] h-[100px] rounded-sm overflow-hidden"
              >
                <Image
                  src={image}
                  alt={product.name}
                  fill
                  className="object-fill cursor-pointer"
                  onClick={() => setMainImage(image)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full rounded-md py-8 border-strok border flex gap-8 flex-col items-start px-4 md:px-8 lg: justify-start">
          <div>
            <h1 className="text-[40px]">{product.name}</h1>
            <p className="text-[20px] mt-6">{product.description}</p>
          </div>
          <div>
            <label htmlFor="quantity">تعداد</label>
            <div className="flex gap-2 items-center justify-center border p-4 border-strok mt-6">
              <button>
                <PlusCircle className="w-6 h-6 cursor-pointer" />
              </button>
              <input
                className="max-w-[48px] text-center outline-none bg-transparent"
                placeholder="0"
                type="text"
                name="quantity"
                id="quantity"
              />
              <button>
                <MinusCircle className="w-6 h-6 cursor-pointer" />
              </button>
            </div>
          </div>

          <p className="text-[32px]">
            {" "}
            {new Intl.NumberFormat("fa-IR").format(product.price)} تومان
          </p>
          <button className="w-full hover:scale-95 transition-all ease-in duration-100 cursor-pointer rounded-md lg:max-w-[260px] py-4 bg-foreground text-background">افزودن به سبد</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
