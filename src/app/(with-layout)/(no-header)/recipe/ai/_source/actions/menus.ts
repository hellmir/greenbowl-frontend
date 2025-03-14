import {AI_MENUS_REQUEST_URL, AiMenusRequestPayload,} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/config";

export const GET = async (
    payload: AiMenusRequestPayload
) => {
    const {options} = payload;

    const queryParams = new URLSearchParams();

    options.ingredients.forEach((item) => queryParams.append("ingredients", item));
    if (options.cookingTimeLimit) {
        options.cookingTimeLimit.forEach((n) => n && queryParams.append("cookingTimeLimit", n));
    }
    if (options.cuisineType) {
        options.cuisineType.forEach((n) => n && queryParams.append("cuisineType", n));
    }

    try {
        const response = await fetch(
            `${AI_MENUS_REQUEST_URL}?${queryParams.toString()}`,
            {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            }
        );

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching menus: ", error);
        throw error;
    }
};
