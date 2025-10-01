"use client";
import Button from "@/components/admin/Button";
import ProtactedRoute from "@/components/site/ProtactedRoute";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const { token, setAuth, user } = useAuthStore();
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token && user) {
      if (user.role === "admin") {
        window.location.href = "/admin";
      } else window.location.href = "/profile";
    }
  }, [token, user]);

  const sendOTP = async () => {
    setLoading(true);

    const res = await api.post("/auth/send-otp", { phone });

    const data = res.data;

    if (data.success) {
      toast.success("کد تایید به شماره موبایل شما ارسال شد");
      setStep(2);
      setLoading(false);
    } else {
      toast.error(data.message);
    }
  };

  const verifyOTP = async () => {
    setLoading(true);

    const res = await api.post("/auth/verify-otp", { phone, otp });
    const data = res.data;

    if (data.success) {
      setAuth(data.token, data.user);
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }

    if (data.requiresProfile === true) {
      window.location.href = "/profile";
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-[85vh] flex items-center justify-center ">
      <div className="w-fit bg-bg-2 min-w-80 h-fit flex flex-col items-center justify-center gap-4 p-4 border border-strok rounded-lg">
        {step === 1 && (
          <div className="w-full">
            <h1 className="w-full text-center text-2xl mt-4 mb-8">
              ورود به حساب کاربری
            </h1>
            <label htmlFor="phone">شماره موبایل</label>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              name="phone"
              id="phone"
              placeholder="09123456789"
              className="block w-full text-left border border-strok rounded-md p-4 mt-4 outline-none"
            />
            <div onClick={sendOTP}>
              <Button
                disabled={loading}
                fill={loading}
                strok={!loading}
                text={loading ? "لطفا صبر کنید" : "ارسال کد"}
                style={"mt-10 w-full"}
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="w-full">
            <h1 className="w-full text-center text-2xl mt-4 mb-8">
              کد را وارد کنید
            </h1>
            <label htmlFor="otpCode">کد تایید</label>
            <input
              type="text"
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
              name="otpCode"
              id="otpCode"
              placeholder="****"
              className="block w-full text-left border border-strok rounded-md p-4 mt-4 outline-none"
            />
            <div onClick={verifyOTP}>
              <Button
                disabled={loading}
                fill={loading}
                strok={!loading}
                text={loading ? "لطفا صبر کنید" : "تایید و ورود"}
                style={"mt-10 w-full"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
