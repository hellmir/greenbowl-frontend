import {MenuOptions} from "@/app/api/recipe/ai/config";

export const availablePorkBellyIngredients =["삼겹살", "낙지", "두부", "양파", "감자", "고추장"];
export const availablePorkIngredients = ["돼지고기", "생선", "두부", "양파", "감자", "고추장"];

export const porkBellyOptions: MenuOptions = {
    ingredients: availablePorkBellyIngredients,
    cookingTimeLimit: ["30분"],
    cuisineType: ["한식"]
}

export const porkOptions: MenuOptions = {
    ingredients: availablePorkIngredients,
    cookingTimeLimit: ["1시간"],
    cuisineType: ["한식"]
}
