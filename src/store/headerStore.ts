import { create } from "zustand";

interface HeaderState {
  headerType: "show" | "none";
  setHeaderType: (type: "show" | "none") => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  headerType: "show",
  setHeaderType: (type) => set({ headerType: type }),
}));
