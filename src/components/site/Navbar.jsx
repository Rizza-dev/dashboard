"use client";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/useCartStore";
import { Menu, ShoppingCart, UserCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = ({ logoUrl, siteName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuthStore();
  const { cartLength, getCartLength } = useCartStore();

  useEffect(() => {
    if (user) {
      getCartLength();
    }
  }, [user]);

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
      <ul className="flex items-center justify-center gap-2 max-md:hidden">
        {user === null ? (
          <li>
            <Button to={"/login"} primery>
              عضویت
            </Button>
          </li>
        ) : (
          <li className="px-4 py-2 bg-[#F2994A] rounded-sm cursor-pointer relative flex items-center justify-center gap-4">
            <Link href={"/profile/cart"}>
              <ShoppingCart size={20} />
            </Link>
            <Link href={"/profile"}>
              <UserCircle size={20} />
            </Link>
            <span className="absolute -top-2 text-background -right-2 px-2 rounded-full  bg-foreground ">
              {cartLength}
            </span>
          </li>
        )}
        <li>
          <Button to={"/"}>صفحه اصلی</Button>
        </li>
        <li>
          <Button to={"/products"}>فروشگاه</Button>
        </li>
        <li>
          <Button to={"/about-us"}>درباره ما</Button>
        </li>
        <li>
          <Button to={"/contact-us"}>تماس با ما</Button>
        </li>
      </ul>
      {/* ===================== mobile menu ==================== */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`w-full h-full bg-background/10 backdrop-blur-xs absolute top-0 left-0 z-40 ${
          isMenuOpen ? "opacity-100" : "opacity-0 hidden"
        }  md:hidden`}
      />
      <button
        className="cursor-pointer md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu />
      </button>
      <div
        className={`md:hidden w-3/4 absolute top-0 right-0 bottom-0  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in duration-300 h-screen bg-bg-2 z-50`}
      >
        <div className="w-full h-full relative">
          {/* ===================== menu ==================== */}
          <ul className="flex flex-col items-center justify-center gap-4 h-full">
            <li onClick={() => setIsMenuOpen(false)}>
              <Button to={"/"}>صفحه اصلی</Button>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Button to={"/products"}>فروشگاه</Button>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Button to={"/about-us"}>درباره ما</Button>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Button to={"/contact-us"}>تماس با ما</Button>
            </li>
            {user !== null && (
              <li onClick={() => setIsMenuOpen(false)}>
                <Button to={"/admin"}>
                  {user?.role === "admin" ? "پنل مدیریت" : "پروفایل"}
                </Button>
              </li>
            )}
            {user === null ? (
              <li onClick={() => setIsMenuOpen(false)}>
                <Button to={"/login"} primery>
                  عضویت
                </Button>
              </li>
            ) : (
              <li
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 bg-[#F2994A] rounded-sm cursor-pointer relative"
              >
                <Link href={"/profile/cart"}>
                  <ShoppingCart size={20} />
                </Link>
                <span className="absolute -top-2 text-background -right-2 px-2 rounded-full  bg-foreground ">
                  {cartLength}
                </span>
              </li>
            )}
          </ul>
          {/* ===================== close button ==================== */}
          <X
            className="absolute top-4 left-4 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
      {/* ===================== logo ==================== */}
      <Link href={"/"} className="gap-2 flex items-center justify-center">
        <span className="text-2xl md:text-3xl">{siteName || ""}</span>
        <img src={logoUrl || ""} alt="logo" className="w-5 md:w-6" />
      </Link>
    </div>
  );
};

const Button = ({ primery, children, to }) => {
  return (
    <Link
      href={to}
      className={`py-1 cursor-pointer px-8 rounded-[4px] ${
        primery ? "bg-[#F2994A]" : "bg-bg-2"
      } xl:text-lg text-foreground`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
