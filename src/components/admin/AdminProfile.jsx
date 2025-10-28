import React, { useEffect, useState } from "react";
import { Edit } from "lucide-react";
import Link from "next/link";
import api from "@/lib/axios";
import Button from "./Button";
import toast from "react-hot-toast";

const AdminProfile = () => {
  const [admin, setAdmin] = useState({});
  const [loading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState("");
  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    const init = async () => {
      const findAdmin = async () => {
        const res = await api.get("/users");
        const admin = res.data.find((user) => user.role === "admin");
        setAdmin(admin);
        setLoading(false);
      };

      findAdmin();
    };

    init();
  }, []);

  const handleUplloadAvatar = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const res = await api.post("/users/update-info/uploadAvatar", formData);
    setAvatar(res.data.url);
    console.log("uploaded url :" ,res.data.url);
    
    setUploading(false);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put("/users/update-info", { avatar, userId: admin._id});
      toast.success("تفییرات با موفقیت انجام شد");
    } catch (error) {
      toast.error("خطا در ایجاد تفییرات");
      console.log(error);
      return;
    }
  };

  if (loading) {
    return <div className="w-full h-full text-center">در حال بارگذاری...</div>;
  }
  return (
    <div className="flex flex-col w-full h-full items-start justify-center gap-10 lg:mr-4">
      <div className="space-y-4 w-full flex items-center justify-between max-w-screen-sm">
        <p className="text-base md:text-lg ">عکس پروفایل شما</p>
        <label
          htmlFor="avatar"
          className="border rounded-full bg-white relative"
        >
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={avatar ||admin?.avatar || "/avatar.png"}
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
      <div className="space-y-4 w-full flex items-center justify-between max-w-screen-sm">
        <p className="text-base md:text-lg ">نام و نام خانوادگی</p>
        <h2 className=" text-lg md:text-2xl">{admin?.name}</h2>
      </div>
      <div className="space-y-4 w-full flex items-center justify-between max-w-screen-sm">
        <p className="text-base md:text-lg ">شماره تماس</p>
        <h2 className=" text-lg md:text-2xl">{admin?.phone}</h2>
      </div>
      <div className="space-y-4 w-full flex items-center justify-between max-w-screen-sm">
        <p className="text-base md:text-lg ">ایمیل</p>
        <h2 className=" text-lg md:text-2xl">{admin?.email || "-"}</h2>
      </div>
      <div className="space-y-4 w-full flex items-center justify-between max-w-screen-sm">
        <p className="text-base md:text-lg ">ویرایش</p>
        <Link href={`/admin/users/${admin?._id}`}>
          <Edit size={16} />
        </Link>
      </div>
      <Button
        disabled={uploading}
        fill={true}
        style={"w-full max-w-screen-sm"}
        text={"ثبت تغییرات"}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default AdminProfile;
