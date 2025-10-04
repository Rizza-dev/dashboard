"use client";
import { useState } from "react";
import Button from "./Button";
import { data } from "@/assets/assets";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import api from "@/lib/axios";

const EditUser = ({ user }) => {
  const [form, setForm] = useState(user);
  const navigate = useParams();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      await api.put(`/users/`, {id : user._id, ...form});
      toast.success("کاربر با موفقیت ویرایش شد");
      window.location.href = `/admin/users`;
    } catch (error) {
      console.log(error);
      toast.error("خطا در ویرایش کاربر");
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-screen-sm relative h-fit bg-bg-2 border border-strok p-4 pt-10 lg:p-8 rounded-lg">
        <div className="w-full">
          <label htmlFor="name">نام کاربر</label>
          <input
            className="border mt-4 border-strok p-4 rounded-md block w-full max-w-[380px] outline-none"
            type="text"
            name="name"
            id="name"
            placeholder="نام کاربری"
            value={form.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="w-full mt-4">
          <label htmlFor="name">نقش کاربر</label>
          <select
            className="border mt-4 border-strok p-4 rounded-md block w-full max-w-[380px] outline-none"
            name="role"
            id="role"
            value={form.role}
            onChange={(e) => handleChange(e)}
          >
            <option className="text-background" value="user">کاربر</option>
            <option className="text-background" value="admin">ادمین</option>
          </select>
        </div>
        <div className="mt-4 w-full">
          <label htmlFor="phone">شماره تماس</label>
          <input
            className="border mt-4 border-strok p-4 rounded-md block w-full max-w-[380px] outline-none"
            type="tel"
            name="phone"
            id="phone"
            placeholder="0902846---"
            value={form.phone}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="w-full">
          <Button
            onClick={handleSubmit}
            fill={true}
            text={"ذخیره تغیرات"}
            style={"mt-10 w-full"}
          />
        </div>
      </div>
    </div>
  );
};

export default EditUser;
