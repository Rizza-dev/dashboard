import localFont from "next/font/local";


// فونت آرتین
export const artin = localFont({
  src: [
    {
      path: "./Artin-Sharp-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Artin-Sharp-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-artin",
});