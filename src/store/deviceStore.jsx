import { create } from "zustand";
import { persist } from "zustand/middleware";

// device id 전역 상태 관리
export const useDeviceStore = create(
  persist(
    (set) => ({
      deviceId: "DEVICE1",
      setDeviceId: (id) => set({ deviceId: id }),
      clearDeviceId: () => set({ deviceId: null }),
    }),
    {
      name: "device-storage",
      getStorage: () => localStorage,
    }
  )
);
