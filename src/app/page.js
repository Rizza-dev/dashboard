import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full gap-6 flex-col h-[80vh]">
      {/* ===================top======================== */}
      <div className="flex justify-between items-center gap-4 w-full h-full flex-col lg:flex-row">
        <div className="w-full h-full border border-strok rounded-2xl p-6 flex-1 ">
          <div className="flex w-full items-center justify-center h-full flex-col gap-4 ">
            <div className="flex items-center gap-4 justify-center w-full h-full">
              <div>
                <p className="text-xs text-nowrap mb-4 text-center">
                  سفارشات جدید
                </p>
                <div className="w-full bg-foreground p-10 rounded-xl text-background">
                  1
                </div>
              </div>
              <div>
                <p className="text-xs text-nowrap mb-4 text-center">
                  کاربران جدید
                </p>
                <div className="w-full bg-foreground p-10 rounded-xl text-background">
                  2
                </div>
              </div>
            </div>
            <p>12% افزایش فروش</p>
          </div>
        </div>
        <div className="w-full h-full border border-strok rounded-2xl p-6 flex-2">
          left
        </div>
      </div>
      {/* ====================bottom===================== */}
      <div className="flex justify-between items-center gap-4 w-full h-full flex-col lg:flex-row">
        <div className="w-full h-full border border-strok rounded-2xl p-6 ">
          <div className="w-full flex justify-between items-center">
            <h2 className="xl:text-4xl text-2xl">
              کاربران جدید 
            </h2>
            <Link href={'/users'} className="border border-strok p-2 rounded-full">
              <ArrowLeft size={16} /> 
            </Link>
          </div>
          
        </div>
        <div className="w-full h-full border border-strok rounded-2xl p-6 ">
          <div className="w-full flex justify-between items-center">
            <h2 className="xl:text-4xl text-2xl">
              محصولات پرفروش 
            </h2>
            <Link href={'/products'} className="border border-strok p-2 rounded-full">
              <ArrowLeft size={16} /> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
