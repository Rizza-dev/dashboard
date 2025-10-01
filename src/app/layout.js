import "./globals.css";
import { artin } from "../assets/fonts/font.js";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "لوازم آشپزخانه برلیان",
  description: "شرکت پخش لوازم آشپزخانه برلیان",
  icons: "./logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="FA-IR" dir="rtl">
      <body className={`${artin.className} `}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
