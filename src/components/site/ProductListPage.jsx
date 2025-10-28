"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
const ProductListPage = ({ products }) => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
      {products.map((product, index) => (
        <motion.div
          key={product._id}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 * (index + 1) }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductListPage;
