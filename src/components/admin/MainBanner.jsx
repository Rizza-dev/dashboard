"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import toast from "react-hot-toast";
import api from "@/lib/axios";
import Loading from "../Loading";

const MainBanner = () => {
  const [bannerImage, setBannerImage] = useState("");
  const [preview, setPreview] = useState(null);
  const [bannerText, setBannerText] = useState("");
  const [bannerText2, setBannerText2] = useState("");
  const [CTA, setCTA] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(()=>{
     api.get("/setting").then((res) => {
      setBannerImage(res.data.bannerImage);
      setBannerText(res.data.bannerText);
      setBannerText2(res.data.bannerText2);
      setCTA(res.data.CTA);
    });
  },[])

  const handleUpload = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setPreview(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("file", file);

    const res = await api.post("/setting/upload", formData);

    setBannerImage(res.data.url);
    setUploading(false);
  };

  if (!bannerImage || !bannerText || !bannerText2 || !CTA) {
    return <Loading />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await api.post("/setting", {
        bannerImage,
        bannerText,
        bannerText2,
        CTA,
      });
      toast.success("تفییران با موفقیت انجام شد");
      window.location.reload();
    } catch (error) {
      toast.error("خطا در ایجاد تفییرات");
      console.log(error);
      return;
    }
  };

  return (
    <div className="w-full h-full flex flex-col 2xl:flex-row items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4 ">
        <h4 className="text-xl">بنر اصلی</h4>
        <label
          htmlFor="mainBanner"
          className=" relative aspect-video w-[192px] h-[108px] lg:w-[384px] lg:h-[216px] rounded-md overflow-hidden object-center"
        >
          <img
            src={bannerImage || preview || "/upload.png"}
            className="absolute inset-0 m-auto"
            alt=""
          />
          <input
            onChange={handleUpload}
            id="mainBanner"
            type="file"
            accept="image/*"
            hidden
          />
        </label>
        {uploading && <p className="animate-pulse">در حال آپلود</p>}
      </div>
      <div className="flex flex-col items-center justify-start lg:justify-center w-full h-full gap-4 ">
        <div className="w-full p-2">
          <p className="lg:text-xl text-foreground">متن اصلی</p>
          <input
            value={bannerText}
            onChange={(e) => setBannerText(e.target.value)}
            placeholder={"لمس اصالت در آشپزخانه"}
            type="text"
            className="outline-none  bg-bg-2 border border-strok rounded-md p-4 mt-4 w-full text-xs md:text-base"
          />
        </div>
        <div className="w-full p-2">
          <p className="lg:text-xl text-foreground">متن دوم</p>
          <input
            value={bannerText2}
            onChange={(e) => setBannerText2(e.target.value)}
            placeholder={"ست‌های آشپزخانه دست‌ساز برای سلیقه‌های خاص"}
            type="text"
            className="outline-none bg-bg-2 border border-strok rounded-md p-4 mt-4 w-full  text-xs md:text-base"
          />
        </div>
        <div className="w-full p-2">
          <p className="lg:text-xl text-foreground">
            دکمه فراخان به اقدام (CTA)
          </p>
          <input
            value={CTA}
            onChange={(e) => setCTA(e.target.value)}
            type="text"
            className="outline-none bg-bg-2 border border-strok rounded-md p-4 mt-4 w-full text-xs md:text-base"
            placeholder={""}
          />
        </div>
        <Button fill onClick={handleSubmit} text={"ذحیره تغییرات"} />
      </div>
    </div>
  );
};

export default MainBanner;
