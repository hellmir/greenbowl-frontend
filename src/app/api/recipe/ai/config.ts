export const AI_MENUS_REQUEST_API_BASE_URL: string = process.env.NEXT_PUBLIC_LLM_SERVER_URL!;
export const AI_MENUS_REQUEST_ENDPOINT: string = process.env.NEXT_PUBLIC_AI_MENUS_REQUEST_ENDPOINT!;

export interface AiMenusRequestPayload {
    llm_type: string;
    template: string;
    options: MenuOptions;
    secret_key: string;
}

export interface MenuOptions {
    ingredients: string[];
    cookingTimeLimit: string[];
    cuisineType: string[];
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

export interface DetailedMenuApiResponse {
    carbohydrate: number;
    protein: number;
    fat: number;
    sodium: number;
    sugar: number;
    usedIngredients: UsedIngredient[];
    oneLineIntroduction: string;
}
