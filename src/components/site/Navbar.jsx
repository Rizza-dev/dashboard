"use client";
import api from "@/lib/axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = ({ logoUrl, siteName }) => {
  const pathname = usePathname();

  // مسیرهایی که Navbar نشون داده نشه
  const hideNavbarPaths = ["/login"];
  const hideNavbarWildcard = pathname.startsWith("/admin");

  const showNavbar = !hideNavbarPaths.includes(pathname) && !hideNavbarWildcard;
  // PATHNAME
  if (!showNavbar) {
    return null;
  }
  return (
    <div className="w-full flex justify-between items-center">
      <ul className="flex items-center justify-center gap-2">
        <li onClick={() => (window.location.href = "/login")}>
          <Button primery>ورود</Button>
        </li>
      </ul>
      {/* ===================== logo ==================== */}
      <Link href={"/"} className="gap-2 flex items-center justify-center">
        <span className=" md:text-2xl font-bold">{siteName || ""}</span>
        <img src={logoUrl || ""} alt="logo" className="w-4 md:w-6" />
      </Link>
    </div>
  );
};

const Button = ({ primery, children }) => {
  return (
    <button
      className={`py-1 cursor-pointer px-8 rounded-[4px] ${
        primery ? "bg-[#F2994A]" : "bg-bg-2"
      } text-lg text-foreground`}
    >
      {children}
    </button>
  );
};

export default Navbar;
