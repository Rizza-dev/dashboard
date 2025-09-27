import { SquareArrowOutUpRight } from "lucide-react";
import React from "react";
import { orders } from "@/assets/assets";
const page = () => {
  return (
    <div className="w-full h-[80vh] ">
      <div className="w-full h-full flex flex-col bg-bg-2 border border-strok rounded-xl p-4 gap-6 max-w-screen-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl">لیست سفارشات</h1>
        <div className="w-fit text-nowrap px-6 py-4 border border-strok rounded-2xl bg-background flex items-center gap-4 lg:gap-6">
          <button className="px-4  py-2  rounded-lg bg-foreground text-background text-sm lg:text-base">
            همه
          </button>
          <button className="px-4  py-2  rounded-lg  text-foreground border border-foreground text-sm lg:text-base">
            تکمیل شده
          </button>
          <button className="px-4  py-2  rounded-lg  text-foreground border border-foreground text-sm lg:text-base">
            در انتظار پرداخت
          </button>
          <button className="px-4  py-2 rounded-lg  text-foreground border border-foreground text-sm lg:text-base">
            لفو شده
          </button>
        </div>
        <div className="max-h-full w-full overflow-y-auto mt-4">
          <table className="w-full h-full">
            <thead className="sticky top-0 border-b border-strok bg-bg-2">
              <tr className="border-b border-strok text-xs md:text-base text-nowrap">
                <th className="pb-4">کد سفارش</th>
                <th className="pb-4">تاریخ</th>
                <th className="pb-4">کاربر</th>
                <th className="pb-4">جزییات</th>
                <th className="pb-4">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-strok text-xs md:text-base hover:bg-strok"
                >
                  <th className="p-2">{order.code}</th>
                  <th className="p-2">{order.date}</th>
                  <th className="p-2">{order.user}</th>
                  <th className="p-2 flex items-center justify-center cursor-pointer">
                    <SquareArrowOutUpRight className="w-4 md:w-6" />
                  </th>
                  <th className="p-2">
                    <select className="outline-none " name="" id="">
                      {order.status.map((status, index) => (
                        <option
                          className="text-background outline-none "
                          key={index}
                        >
                          {status}
                        </option>
                      ))}
                    </select>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
