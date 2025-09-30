import React from 'react'

const LogoSetting = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-evenly gap-4 py-6 lg:flex-row' >
        <div className='w-full flex flex-col items-center'>
            <p>لوگو</p>
            <label htmlFor="logo" >
                <img className='w-[240px] h-[240px] rounded-md mt-6' src="/upload.png" alt="" />
                <input id="logo" type="file" accept="image/*" hidden />
            </label>
        </div>
        <div className='w-full'>
          <label htmlFor="brandName">نام برند شما</label>
          <input type="text" id='brandName' placeholder='brilliant' className='block w-full border border-strok rounded-md p-4 mt-4 outline-none' />
        </div>
    </div>
  )
}

export default LogoSetting