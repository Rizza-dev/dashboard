import "./globals.css";
import { artin } from "../assets/fonts/font.js";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/site/Navbar";
import { getSiteSettings } from "@/lib/getSiteSettings.js";

export async function generateMetadata() {
  const settings = await getSiteSettings();
  const { logoUrl, siteName, bannerText } = settings;
  return {
    title: siteName || "لوازم آشپزخانه برلیان",
    description: bannerText || "شرکت پخش لوازم آشپزخانه برلیان",
    icons: logoUrl || "./logo.svg",
  };
}

export default async function RootLayout({ children }) {
  const settings = await getSiteSettings();
  const { logoUrl, siteName } = settings;
  return (
    <html lang="FA-IR" dir="rtl">
      <body className={`${artin.className} space-y-4 p-4`}>
        <Toaster />
        <Navbar logoUrl={logoUrl} siteName={siteName} />
        {children}
      </body>
    </html>
  );
}
