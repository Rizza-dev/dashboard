"use client";
import React, { useEffect, useState } from "react";
import { Edit, Trash } from "lucide-react";
import Button from "@/components/admin/Button";
import CreateUser from "@/components/admin/CreateUser";
import api from "@/lib/axios";
import toast from "react-hot-toast";
import Link from "next/link";
const page = () => {
  const [createUser, setCreateUser] = useState(false);

  const [usersList, setUsersList] = useState([]);
  const getUsers = async () => {
    const res = await api.get("/users");
    setUsersList(res.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      if (usersList.length === 1) {
        toast.error("حداقل یک کاربر باید وجود داشته باشد");
        return;
      }
      await api.delete(`/users`, { data: { id } });
      toast.success("کاربر با موفقیت حذف شد");
      getUsers();
    } catch (error) {
      toast.error("خطا در حذف کاربر");
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen max-h-[85vh] border border-strok max-w-screen-2xl mx-auto rounded-lg p-6 bg-bg-2 relative">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-4xl">لیست کاربران</h1>
        <p className="text-xs">تعداد کل کاربران :</p>
      </div>
      <div className="w-full h-full  mt-4 max-h-[600px] overflow-y-auto">
        <table className="w-full mt-4">
          <thead className="sticky top-0 bg-bg-2">
            <tr className="border-b border-strok font-light">
              <th className="py-2 text-xs lg:text-base ">نقش کاربر</th>
              <th className="py-2 text-xs lg:text-base">نام</th>
              <th className="py-2 text-xs lg:text-base">شماره تماس</th>
              <th className="py-2 text-xs lg:text-base hidden lg:block">
                ایمیل
              </th>
              <th className="py-2 text-xs lg:text-base">آدرس</th>
              <th className="py-2 text-xs lg:text-base">ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user, index) => (
              <tr key={index} className="border-b border-strok hover:bg-strok">
                <th className="py-2 text-xs lg:text-base ">{user.role}</th>
                <th className="py-2 text-xs lg:text-base">{user.name}</th>
                <th className="py-2 text-xs lg:text-base">{user.phone}</th>
                <th className="py-2 text-xs lg:text-base hidden lg:block">
                  {user.email}
                </th>
                <th className="py-2 text-xs lg:text-base max-w-[40px] lg:max-w-[100px] truncate">
                  {user.address}
                </th>
                <th className="py-2 text-xs lg:text-base flex items-center justify-center gap-2">
                  <button onClick={() => handleDeleteUser(user._id)}>
                    {user.role !== "admin" && <Trash className="w-4 md:w-6" />}
                  </button>
                  <Link href={`/admin/users/${user._id}`}>
                    <Edit className="w-4 md:w-6 cursor-pointer" />
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        onClick={() => setCreateUser(true)}
        className="w-full flex items-center justify-end mt-6"
      >
        <Button text="افزودن کاربر" fill>
          افزودن کاربر
        </Button>
      </div>
      {createUser && (
        <CreateUser
          getUsers={getUsers}
          createUser={createUser}
          setCreateUser={setCreateUser}
        />
      )}
    </div>
  );
};

export default page;
