import { create } from "zustand";

type State = {
  draftIngredientsSet: Set<number>;
  ingredientsSet: Set<number>;
};

type Actions = {
  toggleIngredient: (id: number) => void;
  commit: () => void;
  clearDraft: () => void;
  clear: () => void;
  allClear: () => void;
};

const useEditIngredients = create<State & Actions>((set, get) => ({
  draftIngredientsSet: new Set(),
  ingredientsSet: new Set(),

  toggleIngredient: (id) =>
    set((state) => {
      if (state.draftIngredientsSet.has(id)) {
        state.draftIngredientsSet.delete(id);
      } else {
        state.draftIngredientsSet.add(id);
      }
      return { draftIngredientsSet: new Set(state.draftIngredientsSet) };
    }),

  commit: () =>
    set((state) => ({ ingredientsSet: new Set(state.draftIngredientsSet) })),

  clearDraft: () => set({ draftIngredientsSet: new Set() }),
  clear: () => set({ ingredientsSet: new Set() }),

  allClear: () => {
    const { clear, clearDraft } = get();
    clear();
    clearDraft();
  },
}));

export default useEditIngredients;
