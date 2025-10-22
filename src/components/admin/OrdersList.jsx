"use client";
import api from "@/lib/axios";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "lucide-react";
import toast from "react-hot-toast";

const OrdersList = ({ orders }) => {
  const handleChangeStatus = async (id, status) => {
    
    try {
      const res = await api.put("/orders", { id, status });
      if (res.data.success === true) {
        toast.success("وضعیت سفارش با موفقیت تغییر کرد");
      }
      
    } catch (error) {
      console.log(error);
      toast.error("خطا در تغییر وضعیت سفارش");
    }
  };

  return (
    <div className="w-full h-full min-h-[80vh] relative">
      <div className="w-full h-full flex flex-col bg-bg-2 border border-strok rounded-xl p-4 gap-6 max-w-screen-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl">لیست سفارشات</h1>

        {/* فیلترها
        <div className="lg:w-fit h-[200px] text-nowrap w-full max-sm:overflow-x-auto whitespace-nowrap px-6 py-4 border border-strok rounded-2xl bg-background flex items-center justify-between gap-4 lg:gap-6">
          <button className="px-4 py-2 rounded-lg bg-foreground text-background text-sm lg:text-base">
            همه
          </button>
          <button className="px-4 py-2 rounded-lg text-foreground border border-foreground text-sm lg:text-base">
            تکمیل شده
          </button>
          <button className="px-4 py-2 rounded-lg text-foreground border border-foreground text-sm lg:text-base">
            در انتظار پرداخت
          </button>
          <button className="px-4 py-2 rounded-lg text-foreground border border-foreground text-sm lg:text-base">
            لغو شده
          </button>
        </div> */}

        {/* دسکتاپ: جدول */}
        <div className="hidden lg:block max-h-full w-full overflow-y-auto mt-4">
          <table className="w-full h-full">
            <thead className="sticky top-0 border-b border-strok bg-bg-2">
              <tr className="border-b border-strok text-xs md:text-base text-nowrap">
                <th className="pb-4">کد سفارش</th>
                <th className="pb-4">تاریخ</th>
                <th className="pb-4">کاربر</th>
                <th className="pb-4">آدرس</th>
                <th className="pb-4">جزییات</th>
                <th className="pb-4">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order._id}
                  className="border-b border-strok text-xs md:text-base hover:bg-strok"
                >
                  <th className="p-2">#{index + 1}</th>
                  <th className="p-2">
                    {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                  </th>
                  <th className="p-2">
                    {order.user?.name || order.recipientName}
                  </th>
                  <th className="p-2">
                    <p> آدرس :{order.address}</p>
                    <br />
                    <p> کدپستی :{order.postalCode}</p>
                  </th>
                  <th className="p-2">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex text-background justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className="text-xs">
                              مشاهده محصولات ({order.items.length})
                            </span>
                            <ChevronUpIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-5 h-5 text-purple-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm space-y-2">
                            {order.items.map((item) => (
                              <div
                                key={item._id}
                                className="flex items-center gap-2 border-b border-gray-200 pb-2"
                              >
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-12 h-12 object-cover rounded"
                                />
                                <div>
                                  <p className="font-medium">{item.title}</p>
                                  <p className="text-sm">
                                    تعداد: {item.quantity} — قیمت:{" "}
                                    {item.price.toLocaleString()} تومان
                                  </p>
                                </div>
                              </div>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </th>
                  <td
                    className={`p-2 ${
                      order.paymentStatus === "paid"
                        ? "text-green-600"
                        : order.paymentStatus === "pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.paymentStatus === "paid"
                      ? "پرداخت شده"
                      : order.paymentStatus === "pending"
                      ? "در انتظار پرداخت"
                      : "لغو شده"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* موبایل: کارت‌ها */}
        <div className="lg:hidden flex flex-col gap-4 mt-4 ">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border rounded-xl shadow p-4 bg-bg-2"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-medium">
                    {order.user?.name || order.recipientName}
                  </p>
                  <p className="text-sm">{order.user?.phone}</p>
                  <p className="text-sm">{order.address}</p>
                  <p className="text-sm">کد پستی: {order.postalCode}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {order.finalPrice.toLocaleString()} تومان
                  </p>
                  <p
                    className={`${
                      order.paymentStatus === "paid"
                        ? "text-green-600"
                        : order.paymentStatus === "pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.paymentStatus === "paid"
                      ? "پرداخت شده"
                      : order.paymentStatus === "pending"
                      ? "در انتظار پرداخت"
                      : "لغو شده"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                  </p>
                </div>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className="text-background">
                        مشاهده محصولات ({order.items.length})
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm space-y-2">
                      {order.items.map((item) => (
                        <div
                          key={item._id}
                          className="flex items-center gap-2 border-b border-gray-200 pb-2"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm">
                              تعداد: {item.quantity} — قیمت:{" "}
                              {item.price.toLocaleString()} تومان
                            </p>
                          </div>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <select
                value={order?.status}
                onChange={(e) => handleChangeStatus(order._id, e.target.value)}
                className="w-full py-2  px-4 border border-strok mt-4 rounded-md flex justify-between items-center"
              >
                <option className="text-background" value="در حال بررسی">
                  در حال بررسی
                </option>
                <option className="text-background" value="در حال ارسال">
                  در حال ارسال
                </option>
                <option className="text-background" value="تحویل داده شده">
                  تحویل شده
                </option>
                <option className="text-background" value="لغو شده">
                  لغو شده
                </option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
