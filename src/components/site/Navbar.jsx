"use client"
import api from '@/lib/axios'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [logoURL, setLogoURL] = useState('')
    const [siteName, setSiteName] = useState('')

    useEffect(()=>{
        api.get('/setting').then(res=>{
            setLogoURL(res.data.logoUrl)
            setSiteName(res.data.siteName)
        })
    },[])
  return (
    <div className='w-full flex justify-between items-center'>
        <div>menu</div>
        <div className='gap-2 flex items-center justify-center'>
            <span className=' md:text-2xl font-bold'>{siteName || 'نام سایت سایت'}</span>
            <img src={logoURL || '/logo.svg'} alt="logo" className='w-4 md:w-6' />
        </div>
    </div>
  )
}

export default Navbar