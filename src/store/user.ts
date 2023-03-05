import { create } from "zustand";

export const useUserStore = create<any>()((set) => ({
  user: {},
  setUser: (user: any) => set({ user }),
}));
