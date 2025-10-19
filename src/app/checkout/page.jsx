"use client";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();

  // user information
  const { user } = useAuthStore();
  const [recipientName, setRecipientName] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  // cart information
  const [cartItems, setCartItems] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const getCartItems = async () => {
    try {
      const res = await api.get("/cart/");
      setCartItems(res.data.items);
      const totalPrice = res.data.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setFinalPrice((totalPrice + 85000) * 10);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  // handle checkout
  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!recipientName || !phone || !postalCode || !address) {
        toast.error("لطفا مشخصات گیرنده را پر کنید", { id: "checkout" });
        return;
      }
      if (cartItems.length === 0) {
        toast.error("سبد خرید شما خالی است");
        return;
      }
      // ارسال درخواست به زرین پال برای پرداخت
      const res = await api.post("/payment-zarinpal/request", {
        user: user.id,
        items: cartItems,
        finalPrice: finalPrice,
        recipientName,
        phone,
        postalCode,
        address,
      });
      setLoading(false);
      // اگر درخواست با موفقیت انجام شد، به صفحه پرداخت منتقل شود
      if (res.data.url) {
        router.push(res.data.url);
      } else {
        toast.error("خطا در پرداخت");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("خطا در پرداخت");
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="bg-background w-full mx-auto max-w-xl p-4 h-fit rounded-md">
        <h2 className="text-2xl text-center">مشخصات گیرنده</h2>
        <form className="w-full h-full">
          <input
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            className=" w-full py-2 border border-strok rounded-md px-4 mt-6"
            type="text"
            name="recipientName"
            id="recipientName"
            placeholder="نام و نام خانوادگی گیرنده"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className=" w-full py-2 border border-strok rounded-md px-4 mt-6 text-end"
            type="tel"
            name="phone"
            id="phone"
            pattern="^(\+98|0)?9\d{9}$"
            placeholder="شماره همراه"
          />
          <input
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className=" w-full py-2 border border-strok rounded-md px-4 mt-6"
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="کد پستی"
          />
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className=" w-full py-2 border border-strok rounded-md px-4 mt-6"
            type="text"
            name="address"
            id="address"
            placeholder="ادرس"
          />
          <div className="relative aspect-[3/4] w-[100px] mt-4 rounded-md overflow-hidden border border-strok">
            <Image
              className="p-[2px]"
              src={"/zarinpal.png"}
              fill
              sizes="100vw"
              alt="zarinpal"
            />
          </div>
          <button
            disabled={loading}
            onClick={(e) => handleCheckout(e)}
            className={`${
              loading && "opacity-50 cursor-not-allowed"
            } w-full py-2 bg-foreground text-background mt-6 cursor-pointer rounded-md hover:scale-95 transition-all ease-in duration-200`}
          >
            پرداخت
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
