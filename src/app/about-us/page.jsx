"use client";
import { useAuthStore } from "@/store/authStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const {user} = useAuthStore();
  return (
    <div className="max-w-screen-md mx-auto min-h-[80vh] gap-[56px] h-full w-full flex flex-col items-center justify-start">
      <h1 className="text-[56px] mt-10">درباره برلیان</h1>
      <div className="w-full h-full flex items-center justify-center gap-8">
        <div className="relative aspect-[3/4] border border-strok p-2 rounded-md w-[166px] h-[215px]">
          <Image className="p-1" fill src={"/start.png"} alt="picture" />
        </div>
        <div className="w-full h-full flex flex-col gap-4 justify-between items-start">
          <h2 className="text-3xl">1-شروع داستان</h2>
          <p>ما از یک دغدغه ساده شروع کردیم؛</p>
          <p>
            چرا باید لوازم آشپزخانه چند برابر قیمت واقعی به دست مشتری برسد؟{" "}
          </p>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center gap-8">
        <div className="w-full h-full flex flex-col gap-4 justify-between items-start">
          <h2 className="text-3xl">2-ایده اصلی</h2>
          <p>تصمیم گرفتیم فروشگاهی بسازیم که محصولات را مستقیم از تولید </p>
          <p>به دست شما برساند، بدون واسطه‌های اضافی.</p>
        </div>
        <div className="relative aspect-[3/4] border border-strok p-2 rounded-md w-[166px] h-[215px]">
          <Image className="p-1" fill src={"/mainIdea.png"} alt="picture" />
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center gap-8">
        <div className="relative aspect-[3/4] border border-strok p-2 rounded-md w-[166px] h-[215px]">
          <Image className="p-1" fill src={"/3.png"} alt="picture" />
        </div>
        <div className="w-full h-full flex flex-col gap-4 justify-between items-start">
          <h2 className="text-3xl">3-مزیت ما</h2>
          <p>اینجا هم خرید تکی راحت است و هم فروش عمده؛ کیفیت کارگاهی با </p>
          <p>قیمتی واقعی.</p>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center gap-8">
        <div className="w-full h-full flex flex-col gap-4 justify-between items-start">
          <h2 className="text-3xl">4-باور های ما</h2>
          <p>ما معتقدیم هر خانه‌ای لایق وسایلی ساده، زیبا و کاربردی است. این </p>
          <p>فقط خرید نیست؛ داستانی است برای اعتماد.</p>
        </div>
        <div className="relative aspect-[3/4] border border-strok p-2 rounded-md w-[166px] h-[215px]">
          <Image className="p-1" fill src={"/mainIdea.png"} alt="picture" />
        </div>
      </div>
      {
        !user ? <Link href={'/login'} className="hover:underline mt-8 cursor-pointer text-2xl">به جمع مشتریان ما بپیوندید</Link> : <Link  className="hover:underline mt-8 cursor-pointer text-2xl" href={'/products'}>لیست محصولات ما</Link>
      }
    </div>
  );
};

export default page;
