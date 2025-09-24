"use client";
import {
  ArrowLeft,
  ArrowRight,
  LayoutDashboard,
  LogOut,
  PackageSearch,
  Settings,
  Truck,
  Users,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const SideBar = () => {
  const [showText, setShowText] = useState(true);
  return (
    <div className="h-full  p-6 border-strok border-2 rounded-[32px] bg-bg-2 ">
      <ul className="flex flex-col items-start justify-center gap-10 ">
        <li
          onClick={() => setShowText(!showText)}
          className="cursor-pointer bg-strok p-4 rounded-[32px] "
        >
          {!showText ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
        </li>
        <li className="cursor-pointer flex items-center justify-center gap-4 ">
          <Link className="bg-strok p-4 rounded-[32px]" href="/">
            <LayoutDashboard size={24} />
          </Link>
          <p className={` ${showText ? "" : "hidden"} text-2xl`}>داشبورد</p>
        </li>
        <li className="cursor-pointer flex items-center justify-center gap-4 ">
          <Link className="bg-strok p-4 rounded-[32px]" href="/products">
            <PackageSearch size={24} />
          </Link>
          <p className={` ${showText ? "" : "hidden"} text-2xl`}>محصولات</p>
        </li>
        <li className="cursor-pointer flex items-center justify-center gap-4 ">
          <Link className="bg-strok p-4 rounded-[32px]" href="/orders">
            <Truck size={24} />
          </Link>
          <p className={` ${showText ? "" : "hidden"} text-2xl`}>سفارشات</p>
        </li>
        <li className="cursor-pointer flex items-center justify-center gap-4 ">
          <Link className="bg-strok p-4 rounded-[32px]" href="/users">
            <Users size={24} />
          </Link>
          <p className={` ${showText ? "" : "hidden"} text-2xl`}>کاربران</p>
        </li>
        <li className="cursor-pointer flex items-center justify-center gap-4 ">
          <Link className="bg-strok p-4 rounded-[32px]" href="/settings">
            <Settings size={24} />
          </Link>
          <p className={` ${showText ? "" : "hidden"} text-2xl`}>تنظیمات</p>
        </li>
        <li className="cursor-pointer flex items-center justify-center gap-4 ">
          <Link className="bg-strok p-4 rounded-[32px]" href="/">
            <LogOut size={24} />
          </Link>
          <p className={` ${showText ? "" : "hidden"} text-2xl`}>خروج</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
