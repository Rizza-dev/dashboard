"use client";
import { X } from "lucide-react";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const page = () => {
  toast.error("شما به سبد خرید منتقل میشوید", {id : "failed"});
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/profile/cart";
    }, 3000);
  });
  return (
    <div className="w-full h-full min-h-[80vh] flex flex-col gap-40 items-center justify-center">
      <div className="relative bg-red-600 w-20 h-20 rounded-full flex items-center justify-center">
        <X size={40} />
        <div className="bg-red-600/30 w-40 h-40 absolute rounded-full" />
        <div className="bg-red-600/10 w-80 h-80 absolute rounded-full" />
      </div>
      <p className="text-4xl">پرداخت با شکست مواجه شد</p>
    </div>
  );
};

export default page;
