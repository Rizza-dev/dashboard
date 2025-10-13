import api from "@/lib/axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      cartLength: 0,

      // getCartLength: async () => {
      //   const res = await api.get("/cart/");
      //   const data = res.data;
      //   set({ cartLength: data.items.length });
      // },

      addToCart: (product, quantity = 1) => {
        const existing = get().cart.find((item) => item._id === product._id);
        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({ cart: [...get().cart, { ...product, quantity }] });
        }
      },

      removeFromCart: (id) => {
        set({ cart: get().cart.filter((item) => item._id !== id) });
      },

      clearCart: () => {
        set({ cart: [] });
      },

      updateQuantity: (id, quantity) => {
        set({
          cart: get().cart.map((item) =>
            item._id === id ? { ...item, quantity } : item
          ),
        });
      },
      totalPrice: () => {
        return get().cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
