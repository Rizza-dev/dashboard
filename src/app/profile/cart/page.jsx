"use client";
import CartLists from "@/components/site/cartLists";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { Info } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const { checkAuth, user } = useAuthStore();
  const [cart, setCart] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    await api.get("/cart/").then((res) => {
      setCart(res.data.items);
      setFinalPrice(
        res.data.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ) + 85000
      );
    });
  };

  if (cart.length === 0) {
    return (
      <div className="w-full h-full min-h-[80vh] text-center flex flex-col items-center justify-center">
        <p className=" text-2xl">سبد خرید خالی است</p>
        <Link href="/products">
          <button className="max-w-md bg-foreground text-background mt-6 py-3 px-6 rounded-md hover:scale-95">
            برای خرید کلیک کنید
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[80vh] mt-20 grid grid-cols-1 md:grid-cols-6 gap-6 relative">
      <CartLists cart={cart} getProduct={getProduct} />
      <div className="w-full h-full p-4 border border-strok rounded-md md:col-start-5 md:col-end-7">
        <h1 className="text-2xl ">جمع سبد خرید</h1>
        <div className="flex items-center justify-between w-full mt-6">
          <h2>قیمت تمام شده</h2>
          <p>
            {new Intl.NumberFormat("fa-IR").format(
              cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
            )}
          </p>
        </div>
        <div className="flex items-center justify-between w-full mt-6">
          <h2>هزینه ارسال با پست پسشتاز</h2>
          <p>{new Intl.NumberFormat("fa-IR").format(85000)}</p>
        </div>
        <span className="text-xs mb-8 text-[#e6e79d] flex items-center justify-start gap-1 mt-2">
          <Info size={14} /> هزینه ارسال به عهده مشتری است
        </span>
        <hr />
        <div className="flex items-center justify-between w-full mt-6">
          <h2 className="text-xl">جمع کل</h2>
          <p className="text-2xl font-bold">
            {new Intl.NumberFormat("fa-IR").format(
              cart.reduce((acc, item) => acc + item.price * item.quantity, 0) +
                85000
            )}
          </p>
        </div>
        <Link href="/checkout">
          <button className="w-full text-center py-3 bg-foreground text-background rounded-sm mt-10 hover:scale-90 transition-all ease-in duration-200 cursor-pointer">
            تکمیل سفارش
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
