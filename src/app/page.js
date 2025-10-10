import HomePageCategories from "@/components/site/HomePageCategories";
import MainBannerHomePage from "@/components/site/MainBannerHomePage";
import ProductCard from "@/components/site/ProductCard";
import { getCategories } from "@/lib/getCategories";
import { getProducts } from "@/lib/getProducts";
import { getSiteSettings } from "@/lib/getSiteSettings.js";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function HomePage() {
  const settings = await getSiteSettings();
  const categoryList = await getCategories();
  const productList = await getProducts();
  const { bannerImage, bannerText, bannerText2, CTA, bannerMobileImage } =
    settings;

  return (
    <div className="scroll-smooth">
      <MainBannerHomePage
        bannerImage={bannerImage}
        bannerMobileImage={bannerMobileImage}
        bannerText={bannerText}
        bannerText2={bannerText2}
        CTA={CTA}
      />
      <HomePageCategories categoryList={categoryList} />
      <div className="w-full h-full mb-20">
        <div className="flex items-center justify-between border-b border-strok pb-4">
          <p className="text-base md:text-[24px] lg:text-[32px] xl:text-[40px]">
            لوازم آشپزخانه لوکس برای هر آشپزخانه
          </p>
          <Link href="/products" className="flex items-center justify-center gap-1 text-nowrap lg:gap-4">
            <p className="text-base md:text-lg lg:text-2xl xl:text-3xl ">همه محصولات</p><ArrowLeftCircle className="w-4 md:w-5 lg:w-6 " />
          </Link>
        </div>
        <section id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center my-6">
          {
            productList.slice(0, 8).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          }
        </section>
      </div>
    </div>
  );
}
