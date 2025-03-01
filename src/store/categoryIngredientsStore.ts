import { CategoryIngredient } from "@/app/type/ingredients";
import { create } from "zustand";

interface CategoryIngredientsState {
  selectedIngredientsMap: Map<number, CategoryIngredient>;
  toggleIngredient: (ingredient: CategoryIngredient) => void;
  reset: () => void;
}

export const useCategoryIngredientsStore = create<CategoryIngredientsState>(
  (set) => ({
    selectedIngredientsMap: new Map(),
    toggleIngredient: (ingredient) =>
      set((state) => {
        const newMap = new Map(state.selectedIngredientsMap);
        if (newMap.has(ingredient.id)) {
          newMap.delete(ingredient.id);
        } else {
          newMap.set(ingredient.id, ingredient);
        }
        return {
          selectedIngredientsMap: newMap,
        };
      }),
    reset: () => set({ selectedIngredientsMap: new Map() }),
  })
);
