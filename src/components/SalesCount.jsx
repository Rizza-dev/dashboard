import React from "react";

const SalesCount = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[500px] border border-strok rounded-2xl p-6 flex-1 ">
      <div className="flex w-full items-center justify-between h-full flex-col gap-10 ">
        <div className="flex items-center justify-center gap-4 max-lg:gap-8 w-full h-full ">
          <div className="w-[140px] h-[140px] bg-foreground text-background flex flex-col gap-4 items-center justify-center  rounded-2xl">
            <p className=" text-center">تعداد سفارشات جدید</p>
            <span className="text-5xl ">4</span>
          </div>
          <div className="w-[140px] h-[140px] bg-foreground text-background flex flex-col gap-4 items-center justify-center rounded-2xl">
            <p className="text-center">در انتظار پرداخت</p>
            <span className="text-5xl ">2</span>
          </div>
        </div>

        <p className="text-2xl ">12% افزایش فروش</p>
      </div>
    </div>
  );
};

export default SalesCount;
