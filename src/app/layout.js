import "./globals.css";
import { artin } from "../assets/fonts/font.js";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/site/Navbar";

export const metadata = {
  title: "لوازم آشپزخانه برلیان",
  description: "شرکت پخش لوازم آشپزخانه برلیان",
  icons: "./logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="FA-IR" dir="rtl">
      <body className={`${artin.className} space-y-4 p-4 md:space-y-6 md:p-6`}>
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
