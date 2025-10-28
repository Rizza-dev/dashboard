"use client";
import Button from "@/components/admin/Button";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const page = () => {
  const { setAuth } = useAuthStore();
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const navigate = useRouter();

  // تبدیل ثانیه به فرمت دقیقه:ثانیه
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  // کنترل تایمر
  useEffect(() => {
    if (timer <= 0) {
      return;
    }

    const intervel = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervel);
  }, [timer]);

  useEffect(() => {
    const savedTime = localStorage.getItem("otpTimer");
    if (savedTime) {
      const remainiing = Math.floor((savedTime - Date.now()) / 1000);
      if (remainiing > 0) {
        setTimer(remainiing);
      }
    }
  }, []);

  useEffect(() => {
    if (timer > 0) {
      localStorage.setItem("otpTimer", Date.now() + timer * 1000);
    } else {
      localStorage.removeItem("otpTimer");
    }
  }, [timer]);
  const sendOTP = async () => {
    if (!phone) {
      return toast.error("لطفا شماره موبایل خود را وارد کنید");
    }

    setLoading(true);

    const res = await api.post("/auth/send-otp", { phone });

    const data = res.data;

    if (data.success) {
      toast.success("کد تایید به شماره موبایل شما ارسال شد");
      setStep(2);
      setLoading(false);
      setTimer(180);
    } else {
      toast.error(data.message);
      setLoading(false);
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
      setLoading(false);
    }

    if (data.user.role === "admin") {
     navigate.push("/admin");
    } else if (data.user.role === "user") {
      navigate.push("/");
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-[85vh] flex items-center justify-center ">
      <div className="w-full max-w-md bg-bg-2 min-w-80 h-fit flex flex-col items-center justify-center gap-4 p-4 border border-strok rounded-lg">
        {step === 1 && (
          <div className="w-full flex items-center justify-center flex-col p-6 gap-4 relative">
            <span className="absolute top-6 right-6">
              <button onClick={() => navigate.back()}>
                <ArrowRight size={24} />
              </button>
            </span>
            <div className="w-full h-full gap-2 flex flex-col items-center justify-center">
              <div className="relative  w-full max-w-20 aspect-square overflow-hidden">
                <Image src={"/logo.svg"} fill sizes="" alt="" />
              </div>
              <p className="text-2xl">brlliant</p>
            </div>
            <h1 className="w-full text-start text-2xl mt-4 mb-8">
              ورود | ثبت نام
            </h1>
            <div className="max-w-lg w-full space-y-2">
              <p className="text-sm">سلام!</p>
              <label htmlFor="phone">لطفا شماره موبایل خود را وارد کنید</label>
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                name="phone"
                id="phone"
                inputMode="tel"
                autoComplete="tel"
                minLength="11"
                maxLength="14"
                pattern="^(?:\+98|0098|0)9\d{9}$"
                className="block w-full border border-strok rounded-md p-4 mt-4 outline-none"
              />
            </div>
            <div className="w-full" onClick={sendOTP}>
              <Button
                disabled={loading}
                fill={loading}
                strok={!loading}
                text={loading ? "لطفا صبر کنید" : "ورود"}
                style={"w-full"}
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="w-full flex items-center justify-center flex-col p-6 gap-4 relative">
            <span className="absolute top-6 right-6">
              <button
                className="cursor-pointer"
                onClick={() => navigate.back()}
              >
                <ArrowRight size={24} />
              </button>
            </span>
            <div className="w-full h-full gap-2 flex flex-col items-center justify-center">
              <div className="relative  w-full max-w-20 aspect-square overflow-hidden">
                <Image src={"/logo.svg"} fill sizes="" alt="" />
              </div>
              <p className="text-2xl">brlliant</p>
            </div>
            <h1 className="w-full text-start text-2xl mt-4 mb-8">
              کد تایید را وارد کنید
            </h1>
            <div className="max-w-lg w-full space-y-2">
              <p>
                کد تایید برای شماره <span>{phone}</span> پیامک شد
              </p>
              <input
                type="text"
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
                name="phone"
                id="phone"
                inputMode="tel"
                autoComplete="tel"
                minLength="11"
                maxLength="14"
                pattern="^(?:\+98|0098|0)9\d{9}$"
                className="block w-full border border-strok rounded-md p-4 mt-4 outline-none"
              />
            </div>
            {timer > 0 && (
              <div className="flex object-center justify-center gap-2 my-2">
                <span>{formatTime(timer)}</span>
                <p>مانده تا دریافت مجدد کد</p>
              </div>
            )}
            {timer <= 0 && (
              <button
                onClick={sendOTP}
                className="hover:underline cursor-pointer my-2 w-full"
              >
                ارسال مجدد کد
              </button>
            )}
            <div className="w-full" onClick={verifyOTP}>
              <Button
                disabled={loading}
                fill={loading}
                strok={!loading}
                text={loading ? "لطفا صبر کنید" : "تایید"}
                style={"w-full"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
