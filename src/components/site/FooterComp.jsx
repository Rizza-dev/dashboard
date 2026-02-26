"use client";
import {
  EarthIcon,
  Handshake,
  Headset,
  Info,
  Instagram,
  LocationEdit,
  MessageCircle,
  Send,
  Truck,
  UserLock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const FooterComp = ({ logoUrl, siteName, socialLinks }) => {
  const pathname = usePathname();
  // مسیرهایی که Navbar نشون داده نشه
  const hideFooterPaths = ["/login"];
  const hideFooterWildcard = pathname.startsWith("/admin");

  const hideFooter = !hideFooterPaths.includes(pathname) && !hideFooterWildcard;
  // PATHNAME
  if (!hideFooter) {
    return null;
  }
  return (
    <div className="w-full h-full py-10 bg-bg-2 rounded-md px-4 sm:px-[3vw] md:px-[5vw] lg:px-[9vw] mt-10">
      <div className="w-full h-full gap-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
        <div className="w-full h-full space-y-6 border-strok pb-4 border-b-[0.5px] md:border-l-[0.5px] md:border-0">
          <Link href="/terms" className="flex items-center gap-2">
            <Handshake size={20} />
            <p className="text-xl text-nowrap 2xl:text-2xl">قوانین و مقررات</p>
          </Link>
          <Link href="/about-us" className="flex items-center gap-2">
            <Info size={20} />
            <p className="text-xl text-nowrap 2xl:text-2xl">درباره ما</p>
          </Link>
          <Link href="/privacy" className="flex items-center gap-2">
            <UserLock size={20} />
            <p className="text-xl text-nowrap 2xl:text-2xl">حریم خصوصی</p>
          </Link>
          <Link href="/profile/orders" className="flex items-center gap-2">
            <Truck size={20} />
            <p className="text-xl text-nowrap 2xl:text-2xl">پیگیری سفارشات</p>
          </Link>
        </div>
        <div className="w-full h-full space-y-6 border-strok pb-4 border-b-[0.5px] xl:border-l-[0.5px] md:border-0">
          <div className="flex items-center gap-2">
            <Headset size={20} />
            <p className="text-xl text-nowrap 2xl:text-2xl">
              اطلاعات تماس و پشتیبانی
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-start gap-8 items-center w-full">
              <p> نصیری :</p>
              <p>09028463423</p>
            </div>
            <div className="flex justify-start gap-8 items-center w-full">
              <p> نوری :</p>
              <p>09337931522</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full space-y-6 border-strok pb-4 border-b-[0.5px] md:border-l-[0.5px] md:border-0">
          <div className="flex items-center gap-2">
            <EarthIcon size={20} />
            <p className="text-xl text-nowrap lg:text-2xl">شبکه های اجتماعی</p>
          </div>
          <div className="space-y-4">
            <Link
              href={socialLinks?.instagram || "#"}
              className="flex justify-start gap-2 items-center w-full"
            >
              <p>
                <Instagram size={14} />
              </p>
              <p>اینستاگرام</p>
            </Link>
            <Link
              href={socialLinks?.telegram || "#"}
              className="flex justify-start gap-2 items-center w-full"
            >
              <p>
                <Send size={14} />
              </p>
              <p>تلگرام</p>
            </Link>
            <Link
              href={socialLinks?.whatsapp || "#"}
              className="flex justify-start gap-2 items-center w-full"
            >
              <p>
                <MessageCircle size={14} />
              </p>
              <p>واتساپ</p>
            </Link>
          </div>
        </div>
        <Link
          href="/"
          className="w-full h-full flex flex-col items-center justify-center "
        >
          <div className="relative w-[80px] h-[80px] overflow-hidden">
            <Image sizes="100vw" fill src={logoUrl} alt="logo" />
          </div>
          <p className="text-xl text-nowrap lg:text-2xl">{siteName}</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterComp;
