import { create } from "zustand";

interface AlertState {
  isOpen: boolean;
  message: string;
  setIsOpen: (isOpen: boolean) => void;
  setMessage: (message: string) => void;
  play: (message: string) => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  isOpen: false,
  message: "",
  setIsOpen: (isOpen) => set({ isOpen }),
  setMessage: (message) => set({ message }),
  play: (message) => {
    set({ isOpen: false, message: "" });
    setTimeout(() => {
      set({ isOpen: true, message });
    }, 0);
  },
}));
