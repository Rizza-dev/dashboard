"use client";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { Info } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
const page = ({ cart }) => {
  const { user } = useAuthStore();
  const { getCartLength } = useCartStore();
  const [cartItems, setCartItems] = useState(cart?.items);

  //   حذف محصول از سبد خرید و دیتابیس
  const deleteProduct = async (id) => {
    if (!user?.id) {
      toast.error("ابتدا وارد حساب کاربری شوید");
      return;
    }

    try {
      const res = await api.delete(`/cart/${user.id}?productId=${id}`);

      if (res.status === 200) {
        toast.success("کالا با موفقیت حذف شد ✅");
        setCartItems(res.data.items);
        await getCartLength();
      } else {
        toast.error("خطایی در حذف کالا رخ داد");
      }
    } catch (error) {
      console.error("DELETE /cart error:", error);
      toast.error("خطا در حذف کالا ⚠️");
    }
  };
  //   بروزرسانی تعداد محصول
  const updateQuantity = async (productId, newQuantity) => {
    if (!user?.id) {
      toast.error("ابتدا وارد حساب کاربری شوید");
      return;
    }
    try {
      const res = await api.put(`/cart/${user.id}`, {
        productId,
        quantity: newQuantity,
      });
      if (res.data.success) {
        toast.success("تعداد کالا بروز شد ✅", { id: "update" });

        setCartItems(res.data.cart.items);

        await getCartLength();
      } else {
        toast.error("خطایی در بروزرسانی تعداد کالا رخ داد");
      }
    } catch (error) {
      console.log(error);
      toast.error("خطا در بروزرسانی تعداد کالا");
    }
  };

  if (!cartItems) {
    return (
      <div className="w-full h-full min-h-[80vh] flex items-center justify-center flex-col text-2xl">
        <p>سبد خرید شما خالی است</p>
        <Link
          href="/products"
          className="text-base mt-6 bg-foreground text-background py-2 px-6 rounded-md"
        >
          برگرد به فروشگاه
        </Link>
      </div>
    );
  }
  return (
    <div className="w-full h-full min-h-[80vh] mt-20 grid grid-cols-1 md:grid-cols-6 gap-6 relative">
      {/* =====================================Cart List================================= */}
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
            {cartItems?.map((item) => (
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
      {/* =====================================Cart Summary================================= */}
      <div className="w-full h-full p-4 border border-strok rounded-md md:col-start-5 md:col-end-7">
        <h1 className="text-2xl ">جمع سبد خرید</h1>
        <div className="flex items-center justify-between w-full mt-6">
          <h2>قیمت تمام شده</h2>
          <p>
            {new Intl.NumberFormat("fa-IR").format(
              cartItems?.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )
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
          <h2 className="text-xl">جمع کل</h2>
          <p className="text-2xl font-bold">
            {new Intl.NumberFormat("fa-IR").format(
              cartItems?.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              ) + 85000
            )}
          </p>
        </div>
        <Link href="/checkout">
          <button className="w-full text-center py-3 bg-foreground text-background rounded-sm mt-10 hover:scale-90 transition-all ease-in duration-200 cursor-pointer">
            تکمیل سفارش
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
