import { create } from "zustand";
import api from "@/lib/axios";

export const useCartStore = create((set, get) => ({
  cartLength: 0,

  getCartLength: async () => {
    try {
      const res = await api.get("/cart");
      const data = res.data;
      set({ cartLength: data.items?.length || 0 });
    } catch (err) {
      console.error("Error fetching cart length:", err);
    }
  },

  setCartLength: (len) => set({ cartLength: len }),
}));