import { getSiteSettings } from "@/lib/getSiteSettings.js";
import { Barcode, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
export default async function ContactUsPage() {
  const setting = await getSiteSettings();

  return (
    <div className="w-full min-h-[70vh] h-full max-w-screen-lg mx-auto mt-20 space-y-6">
      <div className="flex flex-col items-center justify-center">
        <div className="relative aspect-square w-[100px]">
          <Image className="p-1" fill src={setting.logoUrl} alt="picture" />
        </div>
      </div>
      <h1 className="md:text-[48px] text-3xl mt-10 text-center w-full">
        تماس با مجموعه
      </h1>
      <p className="md:text-2xl text-lg mt-6 w-full text-center">
        از طریق راه‌های زیر می‌توانید با ما ارتباط بگیرید
      </p>
      <div className="w-full max-w-sm mx-auto mt-20 flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-between w-full h-full">
          <span className="flex gap-1">
            <Send size={20} /> <MessageCircle size={20} />
          </span>
          <p className="text-lg">
            {setting.phoneNumber || "09337931522 | 09028463423"}
          </p>
        </div>
        <div className="flex items-center justify-between w-full h-full">
          <span>
            <Mail />{" "}
          </span>
          <p className="text-lg">{setting.email || "khanezy.com"}</p>
        </div>
        <div className="flex items-center justify-between w-full h-full">
          <span>
            <MapPin />{" "}
          </span>
          <p className="text-lg">
            {setting.locaion || "Tehran,Qarchack,Zibashahr / 1868791204"}
          </p>
        </div>
      </div>
    </div>
  );
}
