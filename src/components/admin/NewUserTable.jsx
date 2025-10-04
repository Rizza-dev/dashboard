import React from "react";
const NewUserTable = ({users}) => {

  console.log(users);
  
  return (
    <div className="max-h-64 overflow-y-auto w-full mt-4">
      <table className="w-full">
        <thead className="sticky top-0 bg-bg-2">
          <tr className="border-b border-strok text-xs md:text-base">
            <th className="p-2 ">شماره</th>
            <th className="p-2 ">تاریخ و ساعت</th>
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
              <th className="p-4 ">{index + 1}#</th>
              <th className="p-4 ">{new Date(user.createdAt).toLocaleString("fa-IR")}</th>
              <th className="p-4 ">{user.name}</th>
              <th className="p-4 ">{user.phone}</th>
              <th className="p-4 ">{user.email || "-"}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewUserTable;
