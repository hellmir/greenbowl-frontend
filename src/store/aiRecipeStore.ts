import {create} from "zustand";
import {MenuApiResponse} from "@/app/api/recipe/ai/config";

interface RecipeState {
    selectedRecipe: MenuApiResponse | null;
    setSelectedRecipe: (recipe: MenuApiResponse) => void;

    availableIngredients: string[];
    setAvailableIngredients: (ingredients: string[]) => void;
}

export const useAiRecipe = create<RecipeState>((set) => ({
    selectedRecipe: null,
    setSelectedRecipe: (recipe) => set({selectedRecipe: recipe}),

    availableIngredients: [],
    setAvailableIngredients: (ingredients) => set({availableIngredients: ingredients}),
}));
