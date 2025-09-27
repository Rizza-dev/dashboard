"use client";
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
  const { isOpen, onClose } = useMenuState();
  const router = usePathname();
  const path = router.split("/")[1];
  
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
            <button className={`bg-strok px-3 py-2 md:p-4 rounded-full cursor-pointer`}>
              <X className="w-4 md:w-6" />
            </button>
            <p className={`text-xl`}>بستن منو</p>
          </li>
          <li
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <Link className={`bg-strok px-3 py-2 md:p-4 rounded-full ${path === '' && 'border border-foreground'}`} href="/">
              <LayoutDashboard className="w-4 md:w-6" />
            </Link>
            <Link href="/" className={`text-xl`}>
              داشبورد
            </Link>
          </li>
          <li
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <Link
              className={`bg-strok px-3 py-2 md:p-4 rounded-[32px] ${path === 'products' && 'border border-foreground'}`}
              href="/products"
            >
              <PackageSearch className="w-4 md:w-6" />
            </Link>
            <Link href="/products" className={`text-xl`}>
              محصولات
            </Link>
          </li>
          <li
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <Link
              className={` ${path === 'orders' && 'border border-foreground'} bg-strok px-3 py-2 md:p-4 rounded-[32px]`}
              href="/orders"
            >
              <Truck className="w-4 md:w-6" />
            </Link>
            <Link href="/orders" className={` text-xl`}>
              سفارشات
            </Link>
          </li>
          <li
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <Link
              className={`${path === 'users' && 'border border-foreground'} bg-strok px-3 py-2 md:p-4 rounded-[32px]`}
              href="/users"
            >
              <Users className="w-4 md:w-6" />
            </Link>
            <Link href="/users" className={` text-xl`}>
              کاربران
            </Link>
          </li>
          <li
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <Link
              className={`${path === 'settings' && 'border border-foreground'} bg-strok px-3 py-2 md:p-4 rounded-[32px]`}
              href="/settings"
            >
              <Settings className="w-4 md:w-6" />
            </Link>
            <Link href="/settings" className={`text-xl`}>
              تنظیمات
            </Link>
          </li>
          <li
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center gap-2 "
          >
            <Link className="bg-strok px-3 py-2 md:p-4 rounded-[32px]" href="/">
              <LogOut className="w-4 md:w-6" />
            </Link>
            <Link href="/" className={`text-xl`}>
              خروج
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
