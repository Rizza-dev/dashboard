"use client"
import {  ArrowLeft, ArrowLeftCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {motion} from 'framer-motion'
const HomePageCategories = ({categoryList}) => {
  return (
    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center mt-6 mb-20'>
        {
            categoryList.map((category , index) => (
                <motion.div initial={{ opacity: 0 , x: -100 }}  whileInView={{ opacity: 1 , x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 * (index + 1) }} key={index} className='w-full h-full flex flex-col items-center justify-center gap-8 p-2 rounded-lg bg-bg-2 pb-14'>
                    <div className='relative aspect-[3/4] w-full rounded-lg overflow-hidden'>
                        <Link href={`/products/${category.slug}`} className='absolute w-full h-full top-0 left-0 z-10'></Link>
                        <Image fill src={category.image} alt={category.name} />
                    </div>
                    <div className='flex items-center justify-center gap-2 '>
                        <Link href={`/products/${category.slug}`} className='text-xl'>{category.description}</Link>
                        <ArrowLeft size={16} />
                    </div>
                </motion.div>
            ))
        }
    </div>
  )
}

export default HomePageCategories