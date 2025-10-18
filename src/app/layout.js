import "./globals.css";
import { artin } from "../assets/fonts/font.js";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/site/Navbar";
import { getSiteSettings } from "@/lib/getSiteSettings.js";
import Footer from "@/components/site/Footer";
import AuthProvider from "@/components/AuthProvider";

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
    <html lang="FA-IR" dir="rtl" data-scroll-behavior="smooth">
      <body className={`${artin.className}`}>
        <div className=" space-y-4 p-4 w-full h-full">
          <Toaster />
          <AuthProvider>
            <Navbar logoUrl={logoUrl} siteName={siteName} />
            {children}
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
