import {  BellRing } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center'>
        <div className='inline-block space-x-4'>
            <button className='w-[48px] h-[48px] relative border-text-mute border-2 rounded-full cursor-pointer'>
                <Image src={'/user-picture.svg'} fill className='rounded-full p-[1px]' alt='user' />
            </button>
            <button className='w-[48px] h-[48px] relative border-text-mute border-2 rounded-full bg-strok cursor-pointer'>
                <BellRing  className='absolute inset-0 m-auto ' size={24} />
                <span className='absolute top-1 right-0 w-2 h-2 bg-text-mute text-bg-2 rounded-full flex items-center justify-center'></span>
            </button>
            
        </div>
        <div className='pl-8 flex items-center  gap-2'>
            <p className='text-[40px]'>Brilliant</p>
            <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
        </div>
    </div>
  )
}

export default Navbar