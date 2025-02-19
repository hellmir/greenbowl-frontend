import { Swiper } from "swiper/types";
import { create } from "zustand";

type State = {
  swiper: Swiper | null;
};

type Actions = {
  setSwiper: (n: Swiper) => void;
};

const useIngredientSwiper = create<State & Actions>((set) => ({
  swiper: null,
  setSwiper: (swiper: Swiper) => set({ swiper }),
}));

export default useIngredientSwiper;
