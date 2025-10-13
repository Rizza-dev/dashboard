"use client";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/useCartStore";
import { Info, MinusCircle, PlusCircle, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const { checkAuth, user } = useAuthStore();
  const [cart, setCart] = useState([]);
  const { getCartLength } = useCartStore();
  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    await api.get("/cart/").then((res) => {
      setCart(res.data.items);
    });
  };

  const deleteProduct = async (id) => {
    if (!user?._id) {
      toast.error("ابتدا وارد حساب کاربری شوید");
      return;
    }

    try {
      const res = await api.delete(`/cart/${user._id}?productId=${id}`);

      if (res.status === 200) {
        toast.success("کالا با موفقیت حذف شد ✅");
        await getProduct(); // بعد از حذف، سبد خرید را مجدداً لود کن
        await getCartLength();
      } else {
        toast.error("خطایی در حذف کالا رخ داد");
      }
    } catch (error) {
      console.error("DELETE /cart error:", error);
      toast.error("خطا در حذف کالا ⚠️");
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (!user?._id) {
      toast.error("ابتدا وارد حساب کاربری شوید");
      return;
    }
    try {
      const res = await api.put(`/cart/${user._id}`, {
        productId,
        quantity: newQuantity,
      });
      if (res.data.success) {
        toast.success("تعداد کالا بروز شد ✅", { id: "update" });
        await getProduct();
      } else {
        toast.error("خطایی در بروزرسانی تعداد کالا رخ داد");
      }
    } catch (error) {
      console.log(error);
      toast.error("خطا در بروزرسانی تعداد کالا");
    }
  };

  if (!cart) {
    return (
      <div className="w-full h-[85vh] flex items-center justify-center">
        سبد خرید خالی است
      </div>
    );
  }
  return (
    <div className="w-full h-full min-h-[80vh] mt-20 grid grid-cols-1 md:grid-cols-6 gap-6">
      <div className="w-full h-full border border-strok rounded-md md:col-start-1 md:col-end-5">
        <table className="w-full h-fit">
          <thead>
            <tr>
              <th className="border-b border-strok py-4 text-xs xl:text-base">
                نام محصول
              </th>
              <th className="border-b border-strok py-4 text-xs xl:text-base text-start">
                تعداد
              </th>
              <th className="border-b border-strok py-4 text-xs xl:text-base hidden md:table-cell">
                قیمت
              </th>
              <th className="border-b border-strok py-4 text-xs xl:text-base">
                مجموع
              </th>
              <th className="border-b border-strok py-4 text-xs xl:text-base pl-4">
                حذف
              </th>
            </tr>
          </thead>
          <tbody className="w-full h-full">
            {cart.map((item) => (
              <tr key={item._id}>
                <th className="py-4">
                  <div className=" pr-2 flex items-center gap-1 md:gap-2  max-md:max-w-[120px]">
                    <div className="aspect-square w-10 h-10 relative object-fill rounded-full object-center overflow-hidden">
                      <img
                        src={item.image}
                        alt="product-image"
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                    <p className="text-xs truncate">{item.title}</p>
                  </div>
                </th>
                <th className="py-4 text-sm">
                  <div className="py-1 md:py-2 max-w-40 border rounded-sm border-strok flex items-center justify-between gap-1 md:gap-2 px-2 md:px-4 ml-4">
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
                      className="cursor-pointer"
                    >
                      <PlusCircle className="w-4" />
                    </button>
                    <p className="text-xs md:text-base">{item.quantity}</p>
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      className="cursor-pointer"
                    >
                      <MinusCircle className="w-4" />
                    </button>
                  </div>
                </th>
                <th className="py-4 text-sm hidden md:table-cell">
                  {new Intl.NumberFormat("fa-IR").format(item.price)}
                </th>
                <th className="py-4 text-sm">
                  {new Intl.NumberFormat("fa-IR").format(
                    item.price * item.quantity
                  )}
                </th>
                <th className="py-4 pl-4">
                  <button
                    className="cursor-pointer"
                    onClick={() => deleteProduct(item._id)}
                  >
                    <Trash size={16} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full h-full p-4 border border-strok rounded-md md:col-start-5 md:col-end-7">
        <h1 className="text-2xl ">جمع سبد خرید</h1>
        <div className="flex items-center justify-between w-full mt-6">
          <h2>قیمت تمام شده</h2>
          <p>
            {new Intl.NumberFormat("fa-IR").format(
              cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
            )}
          </p>
        </div>
        <div className="flex items-center justify-between w-full mt-6">
          <h2>هزینه ارسال با پست پسشتاز</h2>
          <p>{new Intl.NumberFormat("fa-IR").format(85000)}</p>
        </div>
        <span className="text-xs mb-8 text-[#e6e79d] flex items-center justify-start gap-1 mt-2">
          <Info size={14} /> هزینه ارسال به عهده مشتری است
        </span>
        <hr />
        <div className="flex items-center justify-between w-full mt-6">
          <h2>جمع کل</h2>
          <p>
            {new Intl.NumberFormat("fa-IR").format(
              cart.reduce((acc, item) => acc + item.price * item.quantity, 0) +
                85000
            )}
          </p>
        </div>
        <button className="w-full text-center py-3 bg-foreground text-background rounded-sm mt-10 hover:scale-90 transition-all ease-in duration-200 cursor-pointer">
          تکمیل سفارش
        </button>
      </div>
    </div>
  );
};

export default page;
