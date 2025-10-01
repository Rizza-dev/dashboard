"use client";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtactedRoute = ({ children, role, guestOnly = false }) => {
  const router = useRouter();
  const { token, user } = useAuthStore();

  useEffect(() => {
    if (guestOnly && token) {
      router.replace("/profile");
    }
    if (!guestOnly && !token) {
      router.replace("/login");
    }
    if (role && user?.role !== role) {
      router.replace("/profile");
    }
  }, [token, user, guestOnly, role, router]);

  if (!guestOnly && !token) {
    return null;
  }

  if (role && user?.role !== role) {
    return null;
  }

  return <>{children}</>;
};

export default ProtactedRoute;
