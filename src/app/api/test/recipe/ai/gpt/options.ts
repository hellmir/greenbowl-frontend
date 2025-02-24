import {Options} from "@/app/api/recipe/ai/config";

export const porkBellyOptions: Options = {
    ingredients: ["삼겹살", "낙지", "두부", "양파", "감자", "고추장"],
    cookingTimeLimit: ["30분"],
    cuisineType: ["한식"]
}

export const porkOptions: Options = {
    ingredients: ["돼지고기", "생선", "두부", "양파", "감자", "고추장"],
    cookingTimeLimit: ["1시간"],
    cuisineType: ["한식"]
}
