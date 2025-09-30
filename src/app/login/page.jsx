import Button from "@/components/admin/Button";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[85vh] flex items-center justify-center ">
      <div className="w-fit bg-bg-2 min-w-80 h-fit flex flex-col items-center justify-center gap-4 p-4 border border-strok rounded-lg">
        <h1>login</h1>
        <div className="w-full">
          <label htmlFor="username">نام کاربری</label>
          <input type="text" name="username" id="username" placeholder="admin" className="block w-full text-left border border-strok rounded-md p-4 mt-4 outline-none" />
        </div>
        <div className="w-full">
          <label htmlFor="password">رمز عبور</label>
          <input type="password" name="password" id="password" placeholder="*******" className="block w-full text-left border border-strok rounded-md p-4 mt-4 outline-none" />
        </div>
        <Button text={'ورود'} style={'mt-10 w-full'} fill={true} />
      </div>
    </div>
  );
};

export default page;
