import React from "react";
import Button from "./Button";
import { Instagram, MessageCircle, Send, X } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="flex flex-col w-full h-full items-start justify-center gap-6 lg:mr-4">
      <div className="space-y-4 w-full">
        <label className="block" htmlFor="instagram">
          اینستاگرام
        </label>
        <div className="border border-strok rounded-sm flex items-center justify-end gap-2 w-full p-4 max-w-[380px]">
          <input
            type="text"
            id="instagram"
            placeholder="https://www.instagram.com/"
            className="w-full h-full text-left outline-none"
          />
          <Instagram size={16} />
        </div>
      </div>
      <div className="space-y-4 w-full">
        <label className="block" htmlFor="telegram">
          تلگرام
        </label>
        <div className="border border-strok rounded-sm flex items-center justify-end gap-2 w-full p-4 max-w-[380px]">
          <input
            type="text"
            id="telegram"
            placeholder="https://t.me/"
            className="w-full h-full text-left outline-none"
          />
          <Send size={16} />
        </div>
      </div>
      <div className="space-y-4 w-full">
        <label className="block" htmlFor="whatsapp">
          واتساپ
        </label>
        <div className="border border-strok rounded-sm flex items-center justify-end gap-2 w-full p-4 max-w-[380px]">
          <input
            type="text"
            id="whatsapp"
            placeholder="https://wa.me/"
            className="w-full h-full text-left outline-none"
          />
          <MessageCircle size={16} />
        </div>
      </div>
      <div className="space-y-4 w-full">
        <label className="block" htmlFor="x">
          ایکس
        </label>
        <div className="border border-strok rounded-sm flex items-center justify-end gap-2 w-full p-4 max-w-[380px]">
          <input
            type="text"
            id="x"
            placeholder="https://www.x.com/"
            className="w-full h-full text-left outline-none"
          />
          <X size={16} />
        </div>
      </div>

      <div className="mt-10">
        <Button style={"inline-block mr-4"} fill text={"ذخیره تغییرات"} />
      </div>
    </div>
  );
};

export default SocialMedia;
