import BASE_API_URL from "@/constants/apiUrl";

const AI_RECOMMENDATION_SERVICE_URL = BASE_API_URL + "/api/recommendations";
export const RECIPE_SERVICE_URL: string = BASE_API_URL + process.env.NEXT_PUBLIC_RECIPE_SERVER_ENDPOINT!

const AI_MENUS_REQUEST_ENDPOINT: string = process.env.NEXT_PUBLIC_AI_MENUS_REQUEST_ENDPOINT!;
export const AI_MENUS_REQUEST_URL: string = AI_RECOMMENDATION_SERVICE_URL + AI_MENUS_REQUEST_ENDPOINT;
export const AI_DETAILED_MENU_REQUEST_URL: string = AI_MENUS_REQUEST_URL + "/detailed";

const AI_RECOMMENDATION_REQUEST_ENDPOINT: string = process.env.NEXT_PUBLIC_AI_RECOMMENDATION_REQUEST_ENDPOINT!;
export const AI_RECOMMENDATION_REQUEST_URL: string = AI_RECOMMENDATION_SERVICE_URL + AI_RECOMMENDATION_REQUEST_ENDPOINT;


export interface AiMenusRequestPayload {
    options: MenuOptions;
}

export interface MenuOptions {
    ingredients: string[];
    cookingTimeLimit: (string | null)[];
    cuisineType: (string | null)[];
}

export interface AiDetailedMenusRequestPayload {
    options: DetailedMenuOptions;
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
    options: RecipeOptions;
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