import { ArrowDownCircle } from "lucide-react";
import React from "react";

const MainBannerHomePage = ({
  bannerImage,
  bannerMobileImage,
  bannerText,
  bannerText2,
  CTA,
}) => {
  return (
    <picture className="w-full sm:aspect-video aspect-[9/16] block relative rounded-sm md:rounded-lg overflow-hidden">
      <source
        media="(max-width: 640px)"
        srcSet={bannerMobileImage}
      />
      <img
        className="w-full h-full object-cover"
        src={bannerImage}
        alt={bannerText}
      />
      <div className="absolute inset-0 bg-bg-2/30 z-10" />
      <div className="absolute w-full h-full flex items-end sm:items-center justify-center sm:justify-start z-20 inset-0">
        <div className="w-full h-1/2 flex items-center justify-center md:justify-start sm:w-1/2 flex-col">
            <h1 className="text-[32px] lg:text-[40px] 2xl:text-[48px] font-bold tracking-widest">{bannerText}</h1>
            <h2 className="mt-4 md:mt-10 text-lg  lg:text-2xl tracking-widest font-thin">{bannerText2}</h2>
            <button  className="flex items-center justify-center gap-2 mt-6 md:mt-10 cursor-pointer hover:scale-110 transition-all ease-in duration-100">{CTA}<ArrowDownCircle className="w-4 lg:w-6" /></button>
        </div>
      </div>
    </picture>
  );
};

export default MainBannerHomePage;
