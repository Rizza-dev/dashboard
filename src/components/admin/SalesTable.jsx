import React from "react";
import { sales, users } from "@/assets/assets";
const SalesTable = () => {
  return (
    <div className="max-h-64 overflow-y-auto w-full mt-4">
      <table className="w-full">
        <thead className="sticky top-0 bg-bg-2">
          <tr className="border-b border-strok text-xs md:text-base text-nowrap" >
            <th className="p-2 ">کد</th>
            <th className="p-2 ">نام</th>
            <th className="p-2 ">تعداد فروش</th>
            <th className="p-2 ">قیمت</th>
            <th className="p-2 ">جمع فروش</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr
              key={index}
              className="border-b border-strok text-xs md:text-base hover:bg-strok"
            >
              <th className="p-4 ">{sale.code}</th>
              <th className="p-4 ">{sale.name}</th>
              <th className="p-4 ">{sale.count}</th>
              <th className="p-4 ">{sale.price}</th>
              <th className="p-4 ">{sale.total}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
