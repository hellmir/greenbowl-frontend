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

