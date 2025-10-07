"use client";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HomePage = () => {
  const { checkAuth } = useAuthStore();
  const router = useRouter();
  useEffect(() => {
    checkAuth().then((valid) => {
      if (!valid) {
        router.replace("/login");
      }
    });
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
