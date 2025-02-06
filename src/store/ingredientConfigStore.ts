import { create } from "zustand";

type ConfigState = "none" | "edit" | "delete";

type State = {
  configState: ConfigState;
};

type Actions = {
  changeConfigState: (s: ConfigState) => void;
};

const useIngredientConfigState = create<State & Actions>((set) => ({
  configState: "none",
  changeConfigState: (s: ConfigState) => set({ configState: s }),
}));

export default useIngredientConfigState;
