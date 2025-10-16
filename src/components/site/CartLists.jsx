"use client";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/useCartStore";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
const CartLists = ({ cart , getProduct}) => {
  const { getCartLength } = useCartStore();
  const { user } = useAuthStore();

  //   حذف محصول از سبد خرید و دیتابیس
  const deleteProduct = async (id) => {
    if (!user?._id) {
      toast.error("ابتدا وارد حساب کاربری شوید");
      return;
    }

    try {
      const res = await api.delete(`/cart/${user._id}?productId=${id}`);

      if (res.status === 200) {
        toast.success("کالا با موفقیت حذف شد ✅");
        await getCartLength();
        window.location.reload();
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
        window.location.reload();
      } else {
        toast.error("خطایی در بروزرسانی تعداد کالا رخ داد");
      }
    } catch (error) {
      console.log(error);
      toast.error("خطا در بروزرسانی تعداد کالا");
    }
  };
  return (
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
  );
};

export default CartLists;
