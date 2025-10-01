"use client";
import { useAuthStore } from "@/store/authStore";
import useMenuState from "@/store/MenuState";
import {
  LayoutDashboard,
  LogOut,
  PackageSearch,
  Settings,
  Truck,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const { clearAuth } = useAuthStore();
  const { isOpen, onClose } = useMenuState();
  const router = usePathname();
  const path = router;
  const handleLogout = () => {
    clearAuth();
    window.location.href = "/";
  };

  return (
    <div>
      {isOpen ? (
        <div className="bg-background/90 w-full h-screen z-10 absolute top-0 right-0 left-0"></div>
      ) : (
        <div></div>
      )}

      <div
        className={`${
          isOpen ? "" : "hidden"
        } md:h-[calc(100vh-80px)] h-full w-fit max-md:w-2/4 p-4 md:p-6  bg-bg-2 absolute md:static z-20 right-0 top-0 md:block md:border-strok md:border-2 md:rounded-2xl `}
      >
        <ul className="flex flex-col items-start h-full justify-start  gap-8 md:gap-10 ">
          <li
            onClick={onClose}
            className="cursor-pointer md:hidden flex items-center justify-center gap-2"
          >
            <button
              className={`bg-strok px-3 py-2 md:p-4 rounded-full cursor-pointer`}
            >
              <X className="w-4 md:w-6" />
            </button>
            <p className={`text-xl`}>بستن منو</p>
          </li>
          <li
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <Link
              className={`bg-strok px-3 py-2 md:p-4 rounded-full ${
                path === "/admin" && "border border-foreground"
              }`}
              href="/admin"
            >
              <LayoutDashboard className="w-4 md:w-6" />
            </Link>
            <Link href="/admin" className={`text-xl`}>
              داشبورد
            </Link>
          </li>
          <li
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <Link
              className={`bg-strok px-3 py-2 md:p-4 rounded-[32px] ${
                path === "/admin/products" && "border border-foreground"
              }`}
              href="/admin/products"
            >
              <PackageSearch className="w-4 md:w-6" />
            </Link>
            <Link href="/admin/products" className={`text-xl`}>
              محصولات
            </Link>
          </li>
          <li
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <Link
              className={` ${
                path === "/admin/orders" && "border border-foreground"
              } bg-strok px-3 py-2 md:p-4 rounded-[32px]`}
              href="/admin/orders"
            >
              <Truck className="w-4 md:w-6" />
            </Link>
            <Link href="/admin/orders" className={` text-xl`}>
              سفارشات
            </Link>
          </li>
          <li
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <Link
              className={`${
                path === "/admin/users" && "border border-foreground"
              } bg-strok px-3 py-2 md:p-4 rounded-[32px]`}
              href="/admin/users"
            >
              <Users className="w-4 md:w-6" />
            </Link>
            <Link href="/admin/users" className={` text-xl`}>
              کاربران
            </Link>
          </li>
          <li
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <Link
              className={`${
                path === "/admin/settings" && "border border-foreground"
              } bg-strok px-3 py-2 md:p-4 rounded-[32px]`}
              href="/admin/settings"
            >
              <Settings className="w-4 md:w-6" />
            </Link>
            <Link href="/admin/settings" className={`text-xl`}>
              تنظیمات
            </Link>
          </li>
          <li
            onClick={handleLogout}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <span className="bg-strok px-3 py-2 md:p-4 rounded-[32px]">
              <LogOut className="w-4 md:w-6" />
            </span>
            <button className={`text-xl`}>خروج</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
