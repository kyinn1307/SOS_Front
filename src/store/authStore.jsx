import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null,

      login: ({ accessToken, refreshToken }) =>
        set({
          isLoggedIn: true,
          accessToken,
          refreshToken,
        }),

      logout: () =>
        set({
          isLoggedIn: false,
          accessToken: null,
          refreshToken: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);
