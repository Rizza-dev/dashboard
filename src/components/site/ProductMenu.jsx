"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const ProductMenu = ({categories}) => {
    const pathName = usePathname();
  return (
    <div className="flex items-center justify-center gap-6 pt-10 pb-4 border-b-[1px] border-strok">
        <Buttons
          to={`/products`}
          active={pathName === "/products" || pathName === "/products/"}
        >
          همه محصولات
        </Buttons>
        {categories.map((category) => (
          <Buttons
            key={category.slug}
            to={`/products/${category.slug}`}
            active={pathName === `/products/${category.slug}`}
          >
            {category.name}
          </Buttons>
        ))}
      </div>
  )
}

const Buttons = ({to , active , children})=>{
  return(
    <Link className={`${active ? 'text-foreground' : 'text-strok'} text-lg md:text-xl lg:text-2xl`} href={to}>{children}</Link>
  )
}

export default ProductMenu