"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";
import toast from "react-hot-toast";
import api from "@/lib/axios";

const CreateUser = ({ setCreateUser, createUser , getUsers }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  const handleCreateUser = async () => {
    try {
      if (!name || !phone) {
        toast.error("لطفا نام و شماره تماس را وارد کنید");
        return;
      }
      const res = await api.post("/users", {
        name,
        phone,
      });
      if (res.status === 201) {
        toast.success("کاربر با موفقیت ایجاد شد");
        setName("");
        setPhone("");
      }
      getUsers();
    } catch (error) {
      toast.error("خطا در ایجاد کاربر");
      console.log(error);
    }
  };

  return (
    <div
      className={`absolute top-0 right-0  left-0 bottom-0 bg-background/80 backdrop:blur-2xl h-full w-full flex items-center justify-center ${
        !createUser && "hidden"
      }`}
    >
      <div className="w-full max-w-screen-sm relative h-fit bg-bg-2 border border-strok p-4 pt-10 lg:p-8 rounded-lg">
        <div className="w-full">
          <label htmlFor="name">نام کاربر</label>
          <input
            className="border mt-4 border-strok p-4 rounded-md block w-full max-w-[380px] outline-none"
            type="text"
            name="name"
            id="name"
            placeholder="نام کاربری"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-4 w-full">
          <label htmlFor="phone">شماره تماس</label>
          <input
            className="border mt-4 border-strok p-4 rounded-md block w-full max-w-[380px] outline-none"
            type="tel"
            name="phone"
            id="phone"
            placeholder="0902846---"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <span
          onClick={() => setCreateUser(false)}
          className="absolute left-4 top-4 cursor-pointer"
        >
          <X />
        </span>
        <div className="w-full">
          <Button onClick={handleCreateUser} fill={true} text={"افزودن کاربر"} style={"mt-10 w-full"} />
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
