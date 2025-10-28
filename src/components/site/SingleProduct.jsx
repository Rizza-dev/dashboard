"use client";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/useCartStore";
import { MinusCircle, PlusCircle } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
const SingleProduct = ({ product }) => {
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuthStore();
  const { getCartLength } = useCartStore();

  const handleAddToCart = async () => {
    try {
      if (user === null) {
        return toast.error("لطفا وارد حساب کاربری خود شوید", { id: "auth" });
      }
      await api.post("/cart", {
        userId: user.id,
        product: {
          productId: product._id,
          title: product.name,
          price: product.price,
          quantity: quantity,
          image: product?.images[0],
        },
      });
      await getCartLength();
      toast.success("محصول با موفقیت به سبد خرید اضافه شد");
    } catch (error) {
      console.log(error);
      toast.error("خطا در اضافه کردن محصول به سبد خرید");
    }
  };

  return (
    <div className="w-full h-full sm:px-[3vw] md:px-[5vw] lg:px-[9vw] lg:mt-10">
      <div className="w-full h-full grid grid-cols-1 xl:grid-cols-2 gap-6 gap-y-6">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col items-center justify-center gap-4 rounded-md py-8 border-strok border"
        >
          <div className="relative w-[90%] h-full flex-6 aspect-[3/4] max-w-[500px] rounded-md overflow-hidden">
            <Image
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
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
                className="relative aspect-square w-[80px] h-[80px] md:w-[100px] md:h-[100px]  rounded-sm overflow-hidden"
              >
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  src={image}
                  alt={product.name}
                  fill
                  className="object-fill cursor-pointer"
                  onClick={() => setMainImage(image)}
                />
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full rounded-md py-8 border-strok border flex gap-8 flex-col items-start px-4 md:px-8 lg:justify-around"
        >
          <div>
            <h1 className="md:text-[40px] text-3xl">{product.name}</h1>
            <p className="text-base leading-16 md:text-[24px] max-w-[250px] text-wrap  mt-6">
              {product.description}
            </p>
          </div>
          <div>
            <label htmlFor="quantity">تعداد</label>
            <div className="flex gap-2 items-center justify-center border p-3 border-strok mt-6">
              <button onClick={() => setQuantity(quantity + 1)}>
                <PlusCircle className="w-6 h-6 cursor-pointer" />
              </button>
              <input
                onChange={() => setQuantity(quantity)}
                value={quantity}
                className="max-w-[48px] text-center outline-none bg-transparent"
                min="1"
                type="number"
                name="quantity"
                id="quantity"
              />
              <button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                <MinusCircle className="w-6 h-6 cursor-pointer" />
              </button>
            </div>
          </div>

          <p className="text-[32px]">
            {" "}
            {new Intl.NumberFormat("fa-IR").format(product.price)} تومان
          </p>
          <button
            onClick={() => handleAddToCart()}
            className="w-full hover:scale-95 transition-all ease-in duration-100 cursor-pointer rounded-md lg:max-w-[260px] py-4 bg-foreground text-background"
          >
            افزودن به سبد
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SingleProduct;
