import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useAuthStore } from "@/store/authStore";
import { Edit } from "lucide-react";
import Link from "next/link";
import api from "@/lib/axios";

const AdminProfile = () => {
  const [admin, setAdmin] = useState({});
  const { user } = useAuthStore();
  useEffect(() => {
    findAdmin();
  }, []);

  const findAdmin = async () => {
    const res = await api.get("/users");
    const admin = res.data.find((user) => user.role === "admin");
    setAdmin(admin);
  };

  return (
    <div className="flex flex-col w-full h-full items-start justify-center gap-10 lg:mr-4">
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
    </div>
  );
};

export default AdminProfile;
