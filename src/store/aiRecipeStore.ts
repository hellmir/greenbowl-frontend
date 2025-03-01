import { create } from "zustand";
import { MenuApiResponse } from "@/app/(with-layout)/(no-header)/recipe/ai/_source/config";

interface RecipeState {
  selectedRecipe: MenuApiResponse | null;
  setSelectedRecipe: (recipe: MenuApiResponse) => void;

  availableIngredients: string[];
  setAvailableIngredients: (ingredients: string[]) => void;
}

export const useAiRecipe = create<RecipeState>((set) => ({
  selectedRecipe: null,
  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),

  availableIngredients: [],
  setAvailableIngredients: (ingredients) =>
    set({ availableIngredients: ingredients }),
}));
