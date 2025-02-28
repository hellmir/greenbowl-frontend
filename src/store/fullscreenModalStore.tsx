import { create } from "zustand";
import { FC } from "react";

interface FullscreenModalProps {
  handleClose: () => void;
}

interface FullscreenModalState {
  isOpen: boolean;
  ReactNode: FC<FullscreenModalProps>;
  setIsOpen: (isOpen: boolean) => void;
  setReactNode: (reactNode: FC<FullscreenModalProps>) => void;
  play: (reactNode: FC<FullscreenModalProps>) => void;
  close: () => void;
}

export const useFullscreenModalStore = create<FullscreenModalState>((set) => ({
  isOpen: false,
  ReactNode: () => {
    return <></>;
  },
  setIsOpen: (isOpen) => set({ isOpen }),
  setReactNode: (ReactNode) => set({ ReactNode }),
  play: (ReactNode) => set({ ReactNode, isOpen: true }),
  close: () => set({ ReactNode: () => <div></div>, isOpen: false }),
}));
