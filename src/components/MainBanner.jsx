"use client";
import React, { useState } from "react";

const MainBanner = () => {
  const [mainBanner, setMainBanner] = useState();
  return (
    <div className="w-full h-full flex flex-col 2xl:flex-row items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4 ">
        <h4 className="text-xl">بنر اصلی</h4>
        <label
          htmlFor="mainBanner"
          className=" relative aspect-video w-[192px] h-[108px] lg:w-[384px] lg:h-[216px] rounded-md overflow-hidden object-center"
        >
          <img
            src={mainBanner || "/upload.png"}
            className="absolute inset-0 m-auto"
            alt=""
          />
          <input id="mainBanner" type="file" accept="image/*" hidden />
        </label>
      </div>
      <div className="flex flex-col items-center justify-start lg:justify-center w-full h-full gap-4 ">
        <div className="w-full p-2">
          <p className="lg:text-xl text-foreground">متن اصلی</p>
          <input
            placeholder={"لمس اصالت در آشپزخانه"}
            type="text"
            className="outline-none  bg-bg-2 border border-strok rounded-md p-4 mt-4 w-full text-xs"
          />
        </div>
        <div className="w-full p-2">
          <p className="lg:text-xl text-foreground">متن دوم</p>
          <input
            placeholder={"ست‌های آشپزخانه دست‌ساز برای سلیقه‌های خاص"}
            type="text"
            className="outline-none bg-bg-2 border border-strok rounded-md p-4 mt-4 w-full  text-xs"
          />
        </div>
        <div className="w-full p-2">
          <p className="lg:text-xl text-foreground">دکمه فراخان به اقدام (CTA)</p>
          <input
            type="text"
            className="outline-none bg-bg-2 border border-strok rounded-md p-4 mt-4 w-full text-xs"
            placeholder={"مشاهده محصولات"}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
