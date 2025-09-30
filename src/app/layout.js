import "./globals.css";
import { artin } from "../assets/fonts/font.js";

export const metadata = {
  title: "لوازم آشپزخانه برلیان",
  description: "شرکت پخش لوازم آشپزخانه برلیان",
  icons: "./logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="FA-IR" dir="rtl">
      <body className={`${artin.className} `}>
        {children}
      </body>
    </html>
  );
}
