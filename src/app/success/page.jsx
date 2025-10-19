"use client";
import { Check } from "lucide-react";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const page = () => {
  useEffect(() => {
    toast.success("شما  به صفحه پروفایل منتقل میشوید");
    setTimeout(() => {
      window.location.href = "/profile";
    }, 3000);
  });
  return (
    <div className="w-full h-full min-h-[80vh] flex flex-col gap-40 items-center justify-center">
      <div className="relative bg-green-600 w-20 h-20 rounded-full flex items-center justify-center">
        <Check size={40} />
        <div className="bg-green-600/30 w-40 h-40 absolute rounded-full" />
        <div className="bg-green-600/10 w-80 h-80 absolute rounded-full" />
      </div>
      <p className="text-4xl">پرداخت با موفقیت انجام شد</p>
    </div>
  );
};

export default page;
