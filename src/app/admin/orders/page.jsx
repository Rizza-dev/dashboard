"use client";
import OrdersList from "@/components/admin/OrdersList";
import api from "@/lib/axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const getAllOrder = async () => {
        try {
          const res = await api.get("/orders");
          setOrders(res.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          toast.error("خطا در دریافت سفارش‌ها");
        }
      };

      getAllOrder()
    };
    init()
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-xl">
        در حال بارگذاری سفارش‌ها...
      </div>
    );
  }
  return <OrdersList orders={orders} />;
};

export default page;
