import { FridgeIngredient } from "@/app/type/ingredients";
import { create } from "zustand";

type State = {
  ingredientsMap: Map<number, FridgeIngredient>;
};

type Actions = {
  toggleIngredient: (ingredient: FridgeIngredient) => void;
  uncommitIngredient: (id: number) => void;
  clear: () => void;
};

const useEditIngredients = create<State & Actions>((set) => ({
  ingredientsMap: new Map(),

  toggleIngredient: (ingredient) =>
    set((state) => {
      const newMap = new Map(state.ingredientsMap);
      if (newMap.has(ingredient.id)) {
        newMap.delete(ingredient.id);
      } else {
        newMap.set(ingredient.id, ingredient);
      }
      return { ingredientsMap: newMap };
    }),

  uncommitIngredient: (id: number) =>
    set((state) => {
      const newIngredientsMap = new Map(state.ingredientsMap);

      newIngredientsMap.delete(id);
      return { ingredientsMap: newIngredientsMap };
    }),

  clear: () => set({ ingredientsMap: new Map() }),
}));

export default useEditIngredients;
