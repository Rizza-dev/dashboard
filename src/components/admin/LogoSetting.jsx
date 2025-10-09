import React, { useEffect, useState } from "react";
import Button from "./Button";
import toast from "react-hot-toast";
import api from "@/lib/axios";
import Loading from "../Loading";

const LogoSetting = () => {
  const [siteName, setSiteName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    api.get("/setting").then((res) => {
      setLogoUrl(res.data.logoUrl);
      setSiteName(res.data.siteName);
    });
  }, []);

  const handleUpload = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const res = await api.post("/setting/upload", formData);
    setLogoUrl(res.data.url);
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/setting", { logoUrl, siteName });

      toast.success("تفییرات با موفقیت انجام شد");
      window.location.reload();
    } catch (error) {
      toast.error("خطا در ایجاد تفییرات");
      console.log(error);
      return;
    }
  };

  if (!logoUrl) {
    return <Loading />
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly gap-4 py-6 lg:flex-row">
      <div className="w-full flex flex-col items-center">
        <p>لوگو</p>
        <label htmlFor="logo">
          <img
            className="w-[240px] h-[240px] rounded-md mt-6"
            src={logoUrl || "/upload.png"}
            alt=""
          />
          <input
            onChange={handleUpload}
            id="logo"
            type="file"
            accept="image/*"
            hidden
          />
        </label>
        {uploading && <p className="mt-4 animate-pulse">در حال بارگذاری</p>}
      </div>
      <div className="w-full">
        <label htmlFor="brandName">نام برند شما</label>
        <input
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          type="text"
          id="brandName"
          placeholder="brilliant"
          className="block w-full border border-strok rounded-md p-4 mt-4 outline-none"
        />
        <Button
          disabled={uploading}
          style={"w-full lg:max-w-[250px] mt-4"}
          text={"ذخیره تغییرات"}
          onClick={handleSubmit}
          fill={true}
        />
      </div>
    </div>
  );
};

export default LogoSetting;
