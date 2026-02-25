"use client";
import { useAuthStore } from "@/store/authStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { delay, motion } from "framer-motion";
const page = () => {
  const {user} = useAuthStore();
  return (
    <div className="max-w-screen-md mx-auto min-h-[80vh] gap-[56px] h-full w-full flex flex-col items-center justify-start">
      <motion.h1 initial={{ y : -100 , opacity : 0}} animate={{ y : 0 , opacity : 1}} transition={{duration : 0.3 }} className="text-[56px] mt-10">درباره فروشگاه</motion.h1>
      <motion.div initial={{ x : -100 , opacity : 0}} animate={{ x : 0 , opacity : 1}} transition={{duration : 0.3 , delay : 0.1}} className="w-full h-full flex items-center justify-center gap-4 md:gap-8">
        <div className="relative aspect-[3/4] border border-strok p-2 rounded-md w-[166px] h-[215px]">
          <Image className="p-1" fill src={"/start.png"} alt="picture" />
        </div>
        <div className="w-full h-full flex flex-col gap-4 justify-between items-start">
          <h2 className="md:text-3xl text-xl">1-شروع داستان</h2>
          <p className="text-sm">ما از یک دغدغه ساده شروع کردیم؛</p>
          <p >
            چرا باید لوازم آشپزخانه چند برابر قیمت واقعی به دست مشتری برسد؟{" "}
          </p>
        </div>
      </motion.div>
      <motion.div initial={{ x : 100 , opacity : 0}} animate={{ x : 0 , opacity : 1}} transition={{duration : 0.3 , delay : 0.3}} className="w-full h-full flex items-center justify-center gap-4 md:gap-8">
        <div className="w-full h-full flex flex-col gap-4 justify-between items-start">
          <h2 className="md:text-3xl text-xl">2-ایده اصلی</h2>
          <p className="text-sm">تصمیم گرفتیم فروشگاهی بسازیم که محصولات را مستقیم از تولید </p>
          <p className="text-sm">به دست شما برساند، بدون واسطه‌های اضافی.</p>
        </div>
        <div className="relative aspect-[3/4] border border-strok p-2 rounded-md w-[166px] h-[215px]">
          <Image className="p-1" fill src={"/mainIdea.png"} alt="picture" />
        </div>
      </motion.div>
      <motion.div initial={{ x : -100 , opacity : 0}} animate={{ x : 0 , opacity : 1}} transition={{duration : 0.3 , delay : 0.6}} className="w-full h-full flex items-center justify-center gap-4 md:gap-8">
        <div className="relative aspect-[3/4] border border-strok p-2 rounded-md w-[166px] h-[215px]">
          <Image className="p-1" fill src={"/3.png"} alt="picture" />
        </div>
        <div className="w-full h-full flex flex-col gap-4 justify-between items-start">
          <h2 className="md:text-3xl text-xl">3-مزیت ما</h2>
          <p className="text-sm">اینجا هم خرید تکی راحت است و هم فروش عمده؛ کیفیت کارگاهی با </p>
          <p className="text-sm">قیمتی واقعی.</p>
        </div>
      </motion.div>
      <motion.div initial={{ x : -100 , opacity : 0}} animate={{ x : 0 , opacity : 1}}  transition={{duration : 0.3 ,delay : 0.9}} className="w-full h-full flex items-center justify-center gap-4 md:gap-8">
        <div className="w-full h-full flex flex-col gap-4 justify-between items-start">
          <h2 className="md:text-3xl text-xl">4-باور های ما</h2>
          <p className="text-sm">ما معتقدیم هر خانه‌ای لایق وسایلی ساده، زیبا و کاربردی است. این </p>
          <p className="text-sm">فقط خرید نیست؛ داستانی است برای اعتماد.</p>
        </div>
        <div className="relative aspect-[3/4] border border-strok p-2 rounded-md w-[166px] h-[215px]">
          <Image className="p-1" fill src={"/4.png"} alt="picture" />
        </div>
      </motion.div>
      {
        !user ? <Link href={'/login'} className="underline mt-6 md:mt-8 cursor-pointer text-2xl">به جمع مشتریان ما بپیوندید</Link> : <Link  className="underline mt-6 md:mt-8 cursor-pointer text-2xl" href={'/products'}>لیست محصولات ما</Link>
      }
    </div>
  );
};

export default page;
