import BASE_API_URL from "@/constants/apiUrl";

export const AI_MENUS_REQUEST_API_BASE_URL: string = process.env.NEXT_PUBLIC_LLM_SERVER_URL!;
export const AI_MENUS_REQUEST_ENDPOINT: string = process.env.NEXT_PUBLIC_AI_MENUS_REQUEST_ENDPOINT!;
export const AI_RECOMMENDATION_REQUEST_ENDPOINT: string = process.env.NEXT_PUBLIC_AI_RECOMMENDATION_REQUEST_ENDPOINT!;
export const RECIPE_SERVICE_URL: string = BASE_API_URL + process.env.NEXT_PUBLIC_AI_RECIPE_REQUEST_ENDPOINT!;

export interface AiMenusRequestPayload {
    llm_type: string;
    template: string;
    options: MenuOptions;
    secret_key: string;
}

export interface MenuOptions {
    ingredients: string[];
    cookingTimeLimit: (string | null)[];
    cuisineType: (string | null)[];
}

export interface AiDetailedMenusRequestPayload {
    llm_type: string;
    template: string;
    options: DetailedMenuOptions;
    secret_key: string;
}

export interface DetailedMenuOptions {
    name: (string | undefined)[];
    availableIngredients: string[];
    cookingTime: string[];
    calories: string[];
}

export interface UsedIngredient {
    name: string;
    weight: number;
}

export interface MenuApiResponse {
    name: string;
    cookingTime: number;
    calories: number;
    imageUrls: [string | undefined];
}

export interface AiRecipeRequestPayload {
    llm_type: string;
    template: string;
    options: RecipeOptions;
    secret_key: string;
}

export interface RecipeOptions {
    name: (string | undefined)[];
    usedIngredientNames: string[];
    usedIngredientWeights: string[];
    cookingTime: string[];
    calories: string[];
}

export interface AddBookmarkRequestPayload {
    name: string | undefined;
    imageUrl: string | undefined;
    cookingTime: number | undefined;
    calories: number | undefined;
}

export interface AddDetailedBookmarkRequestPayload {
    name: string | undefined;
    imageUrl: string | undefined;
    cookingTime: number | undefined;
    calories: number | undefined;
    oneLineIntroduction: string | undefined;
    ingredients: UsedIngredient[];
    introduction: string;
    nutrition: Nutrition;
}

export interface Nutrition {
    calories: number | undefined;
    carbohydrate: number | undefined;
    protein: number | undefined;
    fat: number | undefined;
    sodium: number | undefined;
    sugar: number | undefined;
}