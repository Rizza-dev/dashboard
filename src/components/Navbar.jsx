"use client";
import useMenuState from "@/store/MenuState";
import { BellRing, Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const { onOpen } = useMenuState();
  return (
    <div className="w-full flex justify-between items-center">
      <div className="inline-block space-x-4">
       <button onClick={onOpen} className="w-[40px] md:hidden h-[40px] md:w-[48px] md:h-[48px] relative border-text-mute border-2 rounded-full bg-strok cursor-pointer">
          <Menu className="absolute inset-0 m-auto md:w-[24px] md:h-[24px] w-[16px]" />
        </button>
        <button className=" w-[40px] h-[40px] md:w-[48px] md:h-[48px] relative border-text-mute border-2 rounded-full cursor-pointer">
          <Image
            src={"/user-picture.svg"}
            fill
            className="rounded-full p-[1px]"
            alt="user"
          />
        </button>
        <button className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] relative border-text-mute border-2 rounded-full bg-strok cursor-pointer">
          <BellRing className="absolute inset-0 m-auto md:w-[24px] md:h-[24px] w-[16px]" />
          <span className="absolute md:top-1 top-0 right-0 md:right-0 w-2 h-2 bg-text-mute text-bg-2 rounded-full flex items-center justify-center"></span>
        </button>
      </div>
      <div className="md:pl-8 flex items-center jucetify-center gap-2">
        <p className="md:text-[40px] text-2xl">Brilliant</p>
        <Image
          src={"/logo.svg"}
          alt="logo"
          className="w-[32px]"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default Navbar;
