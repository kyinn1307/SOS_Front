import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRecoStore = create(
  persist(
    (set) => ({
      sessionId: "",
      recommendationData: null,
      productionType: "ORIGINAL", // 기본값
      setSessionId: (id) => set({ sessionId: id }),
      setRecommendationData: (data) => set({ recommendationData: data }),
      setProductionType: (type) => set({ productionType: type }), // setter
    }),
    {
      name: "reco-storage", // localStorage key
      getStorage: () => localStorage, // 기본값이 localStorage이지만 명시적으로 작성
    }
  )
);
