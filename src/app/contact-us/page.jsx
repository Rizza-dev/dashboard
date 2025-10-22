import { getSiteSettings } from "@/lib/getSiteSettings.js";
import {
  Mail,
  MapPin,
  MessageCircle,
  MessageCircleQuestionMark,
  Send,
} from "lucide-react";
import Image from "next/image";

export default async function ContactUsPage() {
  const setting = await getSiteSettings();

  return (
    <div className="w-full min-h-[70vh] h-full max-w-screen-lg mx-auto mt-20">
      <div className="flex flex-col items-center justify-center">
        <div className="relative aspect-square w-[100px]">
          <Image className="p-1" fill src={setting.logoUrl} alt="picture" />
        </div>
        <p className="text-xl font-bold">{setting.siteName}</p>
      </div>
      <h1 className="text-[48px] mt-10 text-center w-full">
        تماس با مجموعه برلیان
      </h1>
      <p className="text-2xl mt-6 w-full text-center">
        از طریق راه‌های زیر می‌توانید با ما ارتباط بگیرید
      </p>
      <div className="w-full max-w-sm mx-auto mt-10 flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-between w-full h-full">
          <span className="flex gap-1">
            <Send size={20} /> <MessageCircle size={20} />
          </span>
          <p className="text-lg">
            {setting.phoneNumber || "09028463423 | 09941674749"}
          </p>
        </div>
        <div className="flex items-center justify-between w-full h-full">
          <span>
            <Mail />{" "}
          </span>
          <p className="text-lg">{setting.email || "Lz5w0@example.com"}</p>
        </div>
        <div className="flex items-center justify-between w-full h-full">
          <span>
            <MapPin />{" "}
          </span>
          <p className="text-lg">{setting.locaion || "Tehran,Qarchack"}</p>
        </div>
      </div>
    </div>
  );
}
