"use client";
import UserOrders from "@/components/site/UserOrders";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { user, checkAuth } = useAuthStore();
  const { clearCart } = useCartStore();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      const valid = await checkAuth();
      if (!valid) {
        clearCart();
        router.replace("/login");
        return;
      }

      if (user && user.id) {
        await getOrders(user.id);
      }
      setLoading(false);
    };

    init();
  }, [user]);

  const getOrders = async (userId) => {
    try {
      const res = await api.get(`/orders/${userId}`);
      setOrders(res.data);
    } catch (err) {
      console.error("خطا در گرفتن سفارش‌ها:", err);
    }
  };

  if (user?.role === "admin") {
    router.replace("/admin");
    return null;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-xl">
        در حال بارگذاری سفارش‌ها...
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[80vh]">
      <h1 className="w-full text-center text-4xl my-10">لیست سفارشات شما</h1>
      {orders.length > 0 ? (
        orders.map((order) => <UserOrders key={order._id} order={order} />)
      ) : (
        <p className="text-center text-lg text-gray-500">
          هنوز سفارشی ثبت نکرده‌اید.
        </p>
      )}
    </div>
  );
};

export default Page;
