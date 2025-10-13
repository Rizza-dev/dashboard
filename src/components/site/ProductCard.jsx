"use client";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { user, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  const { addToCart } = useCartStore();
  const handleAddToCart = async () => {
    if (user === null) {
      return toast.error("لطفا وارد حساب کاربری خود شوید", { id: "Auth" });
    }
    try {
      await api.post("/cart", {
        userId: user._id,
        product: {
          productId: product._id,
          title: product.name,
          price: product.price,
          quantity: 1,
          image: product.images[0],
        },
      });
      addToCart(product, 1);
      toast.success("محصول با موفقیت به سبد خرید اضافه شد");
    } catch (error) {
      toast.error("خطا در اضافه کردن محصول به سبد خرید");
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full relative aspect-[3/4] max-w-[450px] max-h-[600px] rounded-lg overflow-hidden">
      <Image
        fill
        src={product.images[0]}
        alt={product.name}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Link
        href={`/product/${product._id}`}
        className="absolute inset-0 x-10"
      />
      <Link href={`/product/${product._id}`}>
        <div className="w-[95%] hover:scale-95 transition-all ease-in duration-100 mx-auto h-fit absolute bottom-2 lg:bottom-4 right-0 left-0 flex items-center justify-between px-2 py-4 md:py-4 border-[0.5px] border-white/30 bg-bg-2/30 backdrop-blur-sm rounded-lg z-20">
          <p className="text-base xl:text-lg 2xl:text-xl text-nowrap max-w-1/2 md:w-full truncate">
            {product.name}
          </p>
          <p className="text-xl 2xl:text-2xl text-nowrap">
            {new Intl.NumberFormat("fa-IR").format(product.price)} تومان
          </p>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="absolute hover:scale-110 transition-all ease-in duration-100 top-2 left-2 border border-text-mute cursor-pointer p-2 bg-bg-2/30 backdrop-blur-sm rounded-full"
      >
        <ShoppingCart size={20} />
      </button>
    </div>
  );
};

export default ProductCard;
