import api from "@/lib/axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      avatar: null,
      setAuth: (token, user) => set({ token, user }),

      clearAuth: async () => {
        const token = get().token;
        set({ token: null, user: null , avatar : null});
        try {
          await api.post(
            "/auth/logout",
            {},
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
        } catch (error) {
          console.error("Logout failed:", error);
        }
      },

      checkAuth: async () => {
        const token = get().token;
        try {
          const res = await fetch("/api/auth/check", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
            cache: "no-store",
          });
          if (!res.ok) throw new Error("invalid");
          const data = await res.json();

          if (!data.valid) {
            await get().clearAuth();
            return false;
          }

          const currentUser = get().user;
          if (JSON.stringify(currentUser) !== JSON.stringify(data.user)) {
            set({ user: data.user, token: data.token || token , avatar : data.avatar});
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
      skipHydration: typeof window === "undefined",
    }
  )
);
