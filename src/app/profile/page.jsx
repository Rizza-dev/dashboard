"use client";
import OrdersList from "@/components/admin/OrdersList";
import UserOrders from "@/components/site/UserOrders";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { user, checkAuth } = useAuthStore();
  const { clearCart } = useCartStore();
  const [orders, setOrders] = useState([]);
  const router = useRouter();
  console.log(orders);
  
  const getOrder = async () => {
    const res = await api.get("/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    checkAuth().then((valid) => {
      if (!valid) {
        router.replace("/login");
        clearCart();
      }
      getOrder();
    });
  }, []);

  if (user?.role === "admin") {
    window.location.href = "/admin";
  }

  return (
    <div className="w-full h-full min-h-[80vh]">
      <h1 className="w-full text-center text-4xl my-10">لیست سفارشات شما</h1>
      {orders.map((order) => (
        <UserOrders key={order._id} order={order} />
      ))}
    </div>
  );
};

export default page;
