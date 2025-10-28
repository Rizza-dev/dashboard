"use client";
import api from "@/lib/axios";
import { useEffect, useState } from "react";
import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
const RelatedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const init = async () => {
      const getAllProducts = async () => {
        const res = await api.get("/products");
        setProducts(res.data);
      };
      getAllProducts();
      setLoading(false);
    };
    init();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-xl">
        در حال بارگذاری محصولات...
      </div>
    );
  }

  return (
    <div className="mt-20">
      <h2 className="text-4xl text-center my-10">محصولات مرتبط</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mt-6">
        {products.slice(0, 4).map((product,index) => (
          <ProductCard index={index} key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
