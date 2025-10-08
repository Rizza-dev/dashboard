import HomePageCategories from "@/components/site/HomePageCategories";
import MainBannerHomePage from "@/components/site/MainBannerHomePage";
import { getCategories } from "@/lib/getCategories";
import { getSiteSettings } from "@/lib/getSiteSettings.js";
import React from "react";

export default async function HomePage() {
  const settings = await getSiteSettings();
  const categoryList = await getCategories();
  const {bannerImage , bannerText , bannerText2 , CTA , bannerMobileImage } = settings;
  
  return (
    <div className="scroll-smooth">
      <MainBannerHomePage bannerImage={bannerImage} bannerMobileImage={bannerMobileImage} bannerText={bannerText}  bannerText2={bannerText2}  CTA={CTA} />
      <HomePageCategories categoryList={categoryList} />
    </div>
  )
}
