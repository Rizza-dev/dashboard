import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Instagram, MessageCircle, Send, X } from "lucide-react";
import api from "@/lib/axios";
import toast from "react-hot-toast";

const SocialMedia = () => {
  const [instagram, setInstagram] = useState("");
  const [telegram, setTelegram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [x, setX] = useState("");

  useEffect(() => {
    api.get("/setting").then((res) => {
      console.log(res);

      setInstagram(res.data.socialLinks.instagram);
      setTelegram(res.data.socialLinks.telegram);
      setWhatsapp(res.data.socialLinks.whatsApp);
      setX(res.data.socialLinks.x);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      socialLinks: {
        instagram,
        telegram,
        whatsApp: whatsapp,
        x,
      },
    };
    try {
      await api.post("/setting", payload);

      toast.success("تفییرات با موفقیت انجام شد");
    } catch (error) {
      toast.error("خطا در ایجاد تفییرات");
      console.log(error);
      return;
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-start justify-center gap-6 lg:mr-4">
      <div className="space-y-4 w-full">
        <label className="block" htmlFor="instagram">
          اینستاگرام
        </label>
        <div className="border border-strok rounded-sm flex items-center justify-end gap-2 w-full p-4 max-w-[380px]">
          <input
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
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
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
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
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            type="tel"
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
            value={x}
            onChange={(e) => setX(e.target.value)}
            type="text"
            id="x"
            placeholder="https://www.x.com/"
            className="w-full h-full text-left outline-none"
          />
          <X size={16} />
        </div>
      </div>

      <div className="mt-10">
        <Button
          onClick={handleSubmit}
          style={"inline-block mr-4"}
          fill
          text={"ذخیره تغییرات"}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
