import "./globals.css";
import { artin } from "../../assets/fonts/font.js";
import SideBar from "@/components/admin/SideBar";
import Navbar from "@/components/admin/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "داشبورد ادمین",
  description: "داشبورد ادمین پخش لوازم آشپزخانه برلیان",
  icons: "./logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="FA-IR" dir="rtl">
      <body className={`${artin.className} `}>
        <div className="w-full h-full flex md:gap-4  py-4  px-4">
          <div className="w-fit h-full">
            <SideBar />
          </div>
          <div className="w-full h-full">
            <Navbar />
            <div className="lg:mt-6 mt-4 h-full w-full">{children}</div>
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
