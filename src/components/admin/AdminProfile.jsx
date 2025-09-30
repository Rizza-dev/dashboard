import React from "react";
import Button from "./Button";

const AdminProfile = () => {
  return (
    <div className="flex flex-col w-full h-full items-start justify-center gap-6 lg:mr-4">
      <div className="space-y-4 w-full">
        <label className="block" htmlFor="name">
          نام شما
        </label>
        <input
          id="name"
          type="text"
          placeholder="reza"
          className="border border-strok p-4 rounded-md block w-full max-w-[380px] outline-none"
        />
      </div>
      <div className="space-y-4 w-full">
        <label className="block" htmlFor="phoneNumber">
          شماره تماس
        </label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="0999999999"
          className="border border-strok p-4 rounded-md block w-full max-w-[380px] outline-none"
        />
      </div>
      <div className="space-y-4 w-full">
        <label className="block" htmlFor="email">
          ایمیل
        </label>
        <input
          type="email"
          id="email"
          placeholder="OoU2t@example.com"
          className="border border-strok p-4 rounded-md block w-full max-w-[380px] outline-none"
        />
      </div>
      <div className="mt-10">
        <Button style={"inline-block"} strok text={"تغییر رمز عبور"} />
        <Button style={"inline-block mr-4"} fill text={"ذخیره تغییرات"} />
      </div>
    </div>
  );
};

export default AdminProfile;
