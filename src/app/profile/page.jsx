"use client";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const { clearAuth } = useAuthStore();
  const handleLogout = () => {
    clearAuth();
    window.location.href = "/";
  };
  return (
    <div>
      compelte profile
      <button
        className="m-10 border border-strok py-4 px-8 cursor-pointer"
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  );
};

export default page;
