import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDeviceStore = create(
  persist(
    (set) => ({
      deviceId: null,
      setDeviceId: (id) => set({ deviceId: id }),
      clearDeviceId: () => set({ deviceId: null }),
    }),
    {
      name: "device-storage",
      getStorage: () => localStorage,
    }
  )
);
