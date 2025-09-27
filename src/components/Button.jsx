import React from 'react'

const Button = ({text , style , fill , strok , icon}) => {
  return (
    <button className={`${strok ? 'bg-strok border border-foreground' : ''} ${fill ? 'bg-foreground text-background' : ''} ${icon ? 'gap-2 pl-5' : 'pl-6'} pr-6 py-4 rounded-[4px] flex items-center justify-center hover:scale-105 cursor-pointer transition-all ease-in duration-100 ${style} max-md:text-sm max-md:py-3 max-md:px-4`}>{text}{icon}</button>
  )
}

export default Button