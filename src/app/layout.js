import "./globals.css";
import { artin } from "../assets/fonts/font.js";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "شرکت پخش لوازم آشپزخانه برلیان",
  description: "تولید و پخش دمکنی ،آبگیرظروف ،سرویس عروس، پیش بند و...",
  icons: "./logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="FA-IR" dir="rtl">
      <body className={`${artin.className} `}>
        <div className="w-full h-full flex gap-10 py-10 px-8">
          <div className="w-fit h-[calc(100vh-80px)]">
            <SideBar />
          </div>
          <div className="w-full h-[calc(100vh-80px)]  ">
            <Navbar />
            <div className="mt-10">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
