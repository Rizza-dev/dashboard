import MainBannerHomePage from "@/components/site/MainBannerHomePage";
import { getSiteSettings } from "@/lib/getSiteSettings.js";
import React from "react";

export default async function HomePage() {
  const settings = await getSiteSettings();
  const {bannerImage , bannerText , bannerText2 , CTA } = settings;
  return (
    <div>
      <MainBannerHomePage bannerImage={bannerImage} bannerText={bannerText}  bannerText2={bannerText2}  CTA={CTA} />
    </div>
  )
}
