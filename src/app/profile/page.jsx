"use client";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, checkAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      const valid = await checkAuth();
      if (!valid) {
        router.replace("/login");
        return;
      }

      if (user && user.id) {
        await getUserInfo(user.id);
      }
      setLoading(false);
    };

    init();
  }, [user]);

  const getUserInfo = async (userId) => {
    const res = await api.get(`/users/${userId}`);
    setUserInfo(res.data);
  };

  const updateInformation = async () => {
    try {
      const userId = user.id;
      const name = document.getElementById("username").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const address = document.getElementById("address").value;
      const postalCode = document.getElementById("postalCode").value;
      const res = await api.put(`/users/update-info/`, {
        name,
        userId,
        phone,
        address,
        email,
        postalCode,
      });
      if (res.data.success) {
        toast.success("اطلاعات با موفقیت بروزرسانی شد");
      }
    } catch (error) {
      console.log(error);
      toast.error("خطا در بروزرسانی اطلاعات");
    }
  };

  if (loading) {
    return (
      <div className="h-[80vh] flex items-center justify-center text-xl">
        <p>لطفا صبر کنید...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] h-full w-full max-w-lg mx-auto ">
      <h1 className="text-4xl mt-20 text-center">صفحه پروفایل</h1>
      <div className="w-full h-full mt-10">
        <div>
          <label htmlFor="username">نام کاربری</label>
          <input
            defaultValue={userInfo?.name}
            id="username"
            type="text"
            className="border mt-4 border-strok outline-none py-2 px-4 w-full"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="phone">شماره تماس</label>
          <input
            defaultValue={userInfo?.phone}
            id="phone"
            type="text"
            className="border mt-4 border-strok outline-none py-2 px-4 w-full"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="email">
            ایمیل<span className="text-xs mr-1">(اختیاری)</span>
          </label>
          <input
            defaultValue={userInfo?.email || ""}
            id="email"
            type="email"
            className="border mt-4 border-strok outline-none py-2 px-4 w-full"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="address">
            آدرس<span className="text-xs mr-1">(پیشفرض)</span>
          </label>
          <textarea
            defaultValue={userInfo?.address}
            id="address"
            type="text"
            className="border mt-4 border-strok outline-none py-2 px-4 w-full"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="postalCode">کد پستی</label>
          <input
            defaultValue={userInfo?.postalCode}
            id="postalCode"
            type="text"
            className="border mt-4 border-strok outline-none py-2 px-4 w-full"
          />
        </div>
        <button
          onClick={updateInformation}
          className="w-full py-2 bg-foreground text-background mt-8 rounded hover:scale-95 transition-all ease-in duration-200 cursor-pointer"
        >
          ذخیره
        </button>
      </div>
    </div>
  );
};

export default page;
