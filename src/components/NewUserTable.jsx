import React from "react";
import { users } from "@/assets/assets";
const NewUserTable = () => {
  return (
    <div className="max-h-64 overflow-y-auto w-full mt-4">
      <table className="w-full">
        <thead className="sticky top-0 bg-background">
          <tr className="border-b border-strok text-xs md:text-base">
            <th className="p-2 ">تاریخ</th>
            <th className="p-2 ">ساعت</th>
            <th className="p-2 ">نام</th>
            <th className="p-2 ">شماره تماس</th>
            <th className="p-2 ">ایمیل</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-b border-strok text-xs md:text-base hover:bg-strok"
            >
              <th className="p-4 ">{user.date}</th>
              <th className="p-4 ">{user.time}</th>
              <th className="p-4 ">{user.name}</th>
              <th className="p-4 ">{user.phoneNubmer}</th>
              <th className="p-4 ">{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewUserTable;
