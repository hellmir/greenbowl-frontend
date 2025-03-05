import {
    AI_DETAILED_MENU_REQUEST_URL,
    AiDetailedMenusRequestPayload,
} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/config";

export const GET = async (
    payload: AiDetailedMenusRequestPayload
) => {
    const {options} = payload;

    const queryParams = new URLSearchParams();

    if (options.name) {
        options.name.forEach((n) => n && queryParams.append("name", n));
    }
    options.availableIngredients.forEach((item) => queryParams.append("availableIngredients", item));
    options.cookingTime.forEach((item) => queryParams.append("cookingTime", item));
    options.calories.forEach((item) => queryParams.append("calories", item));

    try {
        const response = await fetch(
            `${AI_DETAILED_MENU_REQUEST_URL}?${queryParams.toString()}`,
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
