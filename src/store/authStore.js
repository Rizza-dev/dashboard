import api from "@/lib/axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      user: null,

      setAuth: (token, user) => set({ token, user }),

      clearAuth: async () => {
        set({ token: null, user: null });
        try {
          await api.post("/auth/logout");
        } catch (error) {
          console.error("Logout failed:", error);
        }
      },

      checkAuth: async () => {
        try {
          const res = await fetch("/api/auth/check", { cache: "no-store" });
          if (!res.ok) throw new Error("invalid");
          const data = await res.json();

          if (!data.valid) {
            await get().clearAuth();
            return false;
          }

          return true;
        } catch (error) {
          await get().clearAuth();
          return false;
        }
      },
    }),
    {
      name: "auth-storage", // ذخیره در localStorage
    }
  )
);
