import { FC } from "react";
import { create } from "zustand";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface FullscreenModalState {
  isOpen: boolean;
  Component: FC<any>;
  props: Record<string, any>;
  setIsOpen: (isOpen: boolean) => void;
  play: <T>(Component: FC<T>, props?: Record<string, any>) => void;
  close: () => void;
}

export const useFullscreenModalStore = create<FullscreenModalState>((set) => ({
  isOpen: false,
  Component: () => <></>,
  props: {},
  setIsOpen: (isOpen) => set({ isOpen }),
  play: (Component, props = {}) => set({ Component, props, isOpen: true }),
  close: () => set({ Component: () => <></>, props: {}, isOpen: false }),
}));
