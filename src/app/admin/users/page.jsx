"use client";
import React, { useState } from "react";
import { usersList } from "@/assets/assets";
import { Edit, Trash } from "lucide-react";
import Button from "@/components/admin/Button";
import CreateUser from "@/components/admin/CreateUser";
const page = () => {
  const [createUser, setCreateUser] = useState(false);

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
              <th className="py-2 text-xs lg:text-base ">کد</th>
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
                <th className="py-2 text-xs lg:text-base ">#{user.id}</th>
                <th className="py-2 text-xs lg:text-base">{user.name}</th>
                <th className="py-2 text-xs lg:text-base">
                  {user.phoneNubmer}
                </th>
                <th className="py-2 text-xs lg:text-base hidden lg:block">
                  {user.email}
                </th>
                <th className="py-2 text-xs lg:text-base max-w-[40px] lg:max-w-[100px] truncate">
                  {user.address}
                </th>
                <th className="py-2 text-xs lg:text-base flex items-center justify-center gap-2">
                  <Trash className="w-4 md:w-6 cursor-pointer" />
                  <Edit className="w-4 md:w-6 cursor-pointer" />
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
        <CreateUser createUser={createUser} setCreateUser={setCreateUser} />
      )}
    </div>
  );
};

export default page;
