"use client";
import DashboardChart from "@/components/admin/DashboardChart";
import NewUserTable from "@/components/admin/NewUserTable";
import SalesTable from "@/components/admin/SalesTable";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

import { data, sales, users } from "@/assets/assets";
import SalesCount from "@/components/admin/SalesCount";

const page = () => {
  return (
    <div className="flex w-full gap-6 flex-col h-full mb-10">
      {/* ===================top======================== */}
      <div className="flex justify-between items-center gap-4 w-full max-md:h-[700px] h-full flex-col lg:flex-row ">
        {/* =================== Sales Count======================= */}
        <SalesCount />
        {/* ====================Chart===================== */}
        <div className="w-full bg-bg-2 border border-strok rounded-2xl p-6 flex-2 h-[500px] max-md:h-[300px] relative flex items-center justify-center flex-col">
          <p>میزان فروش</p>
          <DashboardChart data={data} />
        </div>
      </div>
      {/* ====================bottom===================== */}
      <div className="flex justify-between items-start gap-4 w-full h-full flex-col lg:flex-row ">
        {/* ====================New Users===================== */}
        <div className="w-full bg-bg-2 h-[400px] border border-strok rounded-2xl p-6 flex items-center justify-start flex-col gap-4">
          <div className="w-full flex justify-between items-center ">
            <h2 className="xl:text-4xl text-2xl">کاربران جدید</h2>
            <Link
              href={"/admin/users"}
              className="border border-strok p-2 rounded-full"
            >
              <ArrowLeft size={16} />
            </Link>
          </div>
          <NewUserTable users={users} />
        </div>
        {/* ====================Best Sales===================== */}
        <div className="w-full bg-bg-2 h-[400px] border border-strok rounded-2xl p-6 flex flex-col items-center justify-start gap-4">
          <div className="w-full flex justify-between items-center">
            <h2 className="xl:text-4xl text-2xl">محصولات پرفروش</h2>
            <Link
              href={"/admin/products"}
              className="border border-strok p-2 rounded-full"
            >
              <ArrowLeft size={16} />
            </Link>
          </div>
          <SalesTable sales={sales} />
        </div>
      </div>
    </div>
  );
};

export default page;
