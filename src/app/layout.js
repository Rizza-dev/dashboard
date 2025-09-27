import "./globals.css";
import { artin } from "../assets/fonts/font.js";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

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
            <div className="lg:mt-6 mt-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
