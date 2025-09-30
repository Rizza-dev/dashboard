"use client";
import AdminProfile from "@/components/admin/AdminProfile";
import Button from "@/components/admin/Button";
import LogoSetting from "@/components/admin/LogoSetting";
import MainBanner from "@/components/admin/MainBanner";
import SocialMedia from "@/components/admin/SocialMedia";
import { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState("mainBanner");
  return (
    <div className="flex w-full bg-bg-2 h-screen max-h-[85vh] border border-strok rounded-xl items-center justify-center p-2 lg:p-6">
      <div className="w-full h-full flex-1 gap-8 flex flex-col border-l border-strok p-2 justify-center ">
        <div onClick={() => setActiveTab("mainBanner")}>
          <Button
            style={"w-full lg:max-w-[250px]"}
            fill={activeTab === "mainBanner"}
            strok={activeTab !== "mainBanner"}
            text={"بنر اصلی سایت"}
          />
        </div>
        <div onClick={() => setActiveTab("logoSetting")}>
          <Button
            style={"w-full lg:max-w-[250px]"}
            fill={activeTab === "logoSetting"}
            strok={activeTab !== "logoSetting"}
            text={"تنظیمات لوگو"}
          />
        </div>
        <div onClick={() => setActiveTab("admin")}>
          <Button
            style={"w-full lg:max-w-[250px]"}
            fill={activeTab === "admin"}
            strok={activeTab !== "admin"}
            text={"مشخصات ادمین"}
          />
        </div>
        <div onClick={() => setActiveTab("socialMedia")}>
          <Button
            style={"w-full lg:max-w-[250px]"}
            fill={activeTab === "socialMedia"}
            strok={activeTab !== "socialMedia"}
            text={"شبکه های اجتماعی"}
          />
        </div>
      </div>
      <div className="w-full h-full flex-2 p-2">
        {activeTab === "mainBanner" && <MainBanner />}
        {activeTab === "logoSetting" && <LogoSetting />}
        {activeTab === "admin" && <AdminProfile />}
        {activeTab === "socialMedia" && <SocialMedia />}
      </div>
    </div>
  );
};

export default page;
