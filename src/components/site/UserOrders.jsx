import { MapPin, Phone, Timer, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const UserOrders = ({ order }) => {
  const d = new Date(order.createdAt); // مقدار از MongoDB
  const formatted = d.toLocaleString("fa-IR", {
    timeZone: "Asia/Tehran", // یا حذفش کن و از timezone کاربر استفاده کن
    year: "numeric",
    month: "long", // "long" -> مهر، "numeric" -> 10
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  if (!order) {
    return <div>شما سفارشی ندارید</div>
  }

  return (
    <div className="w-full mb-20 border-b border-strok relative p-4 flex gap-2  items-start justify-center flex-col  lg:flex-row">
      <div className="lg:sticky lg:top-0 w-full flex-1  rounded">
        {/* ==================مشخصات گیرنده==================== */}
        <div className="w-full h-full border border-strok p-6">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex justify-between items-start w-full">
              <div>
                <h2 className="text-2xl">مشخصات گیرنده</h2>
                <h3 className="mt-2">شناسه سفارش : {order._id}</h3>
              </div>
              <p
                className={`animate-pulse text-nowrap flex items-center justify-center flex-row-reverse gap-1 ${
                  order.status === "تحویل داده شده"
                    ? "text-green-500"
                    : order.status === "لغو شده"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                وضیعت : {order.status}{" "}
                <span
                  className={`w-2 h-2 rounded-full ${
                    order.status === "تحویل داده شده"
                      ? "bg-green-500"
                      : order.status === "لغو شده"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                />
              </p>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <User size={16} />
              <p>{order.recipientName}</p>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <Timer size={16} />
              <p>{formatted}</p>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <MapPin size={16} />
              <div>
                <p className="text-sm text-wrap mb-2">آدرس : {order.address}</p>
                <p className="text-sm text-wrap"> کدپستی :{order.postalCode}</p>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <Phone size={14} />
              <p>شماره تماس گیرنده : {order.phone}</p>
            </div>
          </div>
        </div>
        {/* ==================مشخصات خرید==================== */}
        <div className="w-full h-full border border-strok p-6 mt-4 flex-col flex items-start justify-center gap-6">
          <h3 className="text-xl">خلاصه سفارشات</h3>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between">
              <p>تعداد کالاها :</p>
              <p>{order.items?.length}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>مجموع کالاها</p>
              <p>
                {new Intl.NumberFormat("fa-IR").format(
                  order?.items?.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )
                )}{" "}
                تومان
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>هزینه ارسال</p>
              <p>{new Intl.NumberFormat("fa-IR").format(85000)} تومان</p>
            </div>
            <span className="bg-strok h-[0.5px]" />
            <div className="flex items-center justify-between">
              <p className="text-xl">مجموع کالاها</p>
              <p className="text-xl">
                {new Intl.NumberFormat("fa-IR").format(order.finalPrice / 10)}{" "}
                تومان
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2 sticky top-0 w-full h-full flex gap-6 border border-strok p-4">
        {order?.items?.map((item) => (
          <div
            key={item._id}
            className=" pb-4 w-full h-full flex gap-4 items-center relative"
          >
            <Link
              className="absolute inset-0 z-10"
              href={`/product/${item.productId}`}
            />
            <div className="relative rounded aspect-square w-[100px] h-[100px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <h4 className="text-lg">{item.title}</h4>
              <p className="text-sm">
                {new Intl.NumberFormat("fa-IR").format(item.price)} تومان
              </p>
              <p>تعداد : {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrders;
