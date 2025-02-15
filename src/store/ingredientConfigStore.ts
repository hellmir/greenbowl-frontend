import { create } from "zustand";

type ConfigState = "recipe" | "edit" | "delete";

type State = {
  configState: ConfigState;
};

type Actions = {
  changeConfigState: (s: ConfigState) => void;
};

const useIngredientConfigState = create<State & Actions>((set) => ({
  configState: "recipe",
  changeConfigState: (s: ConfigState) => set({ configState: s }),
}));

export default useIngredientConfigState;
