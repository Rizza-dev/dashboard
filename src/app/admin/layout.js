import "./globals.css";
import { artin } from "../../assets/fonts/font.js";
import SideBar from "@/components/admin/SideBar";
import Navbar from "@/components/admin/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "داشبورد ادمین",
  description: "داشبورد ادمین",
  icons: "./logo.png",
};

export default function AdminLayout({ children }) {
  return (
    <div dir="rtl" className="w-full h-full flex md:gap-4 py-4 px-4 ">
      <div className="w-fit h-full">
        <SideBar />
      </div>
      <div className="w-full h-full">
        <Navbar />
        <div className="lg:mt-6 mt-4 h-full w-full">{children}</div>
        <Toaster />
      </div>
    </div>
  );
}
