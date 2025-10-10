import { PlusCircle, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
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
      <button className="absolute hover:scale-110 transition-all ease-in duration-100 top-2 left-2 border border-text-mute cursor-pointer p-2 bg-bg-2/30 backdrop-blur-sm rounded-full">
        <ShoppingCart size={20} />
      </button>
    </div>
  );
};

export default ProductCard;
