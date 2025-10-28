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
  const [avatar, setAvatar] = useState("");
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleUplloadAvatar = async (e) => {
    setUploading(true);
    try {
      const file = e.target.files[0];
      setAvatar(URL.createObjectURL(file));
      const formData = new FormData();
      formData.append("file", file);
      const res = await api.post("/users/update-info/uploadAvatar", formData);
      await api.put("/users/update-info", {
        avatar: res.data.url,
        userId: user.id,
      });
      console.log("uploaded url :", res.data.url);
      toast.success("عکس با موفقیت آپلود شد");
      setUploading(false);
    } catch (error) {
      console.log(error);
      toast.error("خطا در آپلود عکس");
    }
  };
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
        <div className="space-y-4 w-full flex items-center justify-between max-w-screen-sm">
          <p className="text-base md:text-lg ">عکس پروفایل شما</p>
          <label
            htmlFor="avatar"
            className="border rounded-full bg-white relative"
          >
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={avatar || userInfo?.avatar || "/avatar.png"}
              alt="avatar"
            />
            <input
              type="file"
              hidden
              id="avatar"
              onChange={(e) => handleUplloadAvatar(e)}
            />
            {uploading && (
              <div className="absolute text-xs text-nowrap -top-6 -left-2 text-amber-300">
                در حال بارگذاری...
              </div>
            )}
          </label>
        </div>
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
          disabled={uploading}
          onClick={updateInformation}
          className={`${
            uploading && "opacity-50 cursor-not-allowed"
          } w-full py-2 bg-foreground text-background mt-8 rounded hover:scale-95 transition-all ease-in duration-200 cursor-pointer`}
        >
          ذخیره
        </button>
      </div>
    </div>
  );
};

export default page;
