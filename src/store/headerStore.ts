import { create } from "zustand";

interface HeaderState {
  headerType: "main" | "edit";
  setHeaderType: (type: "main" | "edit") => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  headerType: "main",
  setHeaderType: (type) => set({ headerType: type }),
}));
