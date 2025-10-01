import api from "@/lib/axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      setAuth: (token, user) => set({ token, user }),
      clearAuth: async () => {
        set({ token: null, user: null })
        await api.post("/auth/logout");
      },
    }),
    {
      name: "auth-storage", // ذخیره در localStorage
    }
  )
);
