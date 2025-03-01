import {
    AI_MENUS_REQUEST_API_BASE_URL,
    AI_MENUS_REQUEST_ENDPOINT,
    AiDetailedMenusRequestPayload,
    AiMenusRequestPayload
} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/config";


export const POST = async (payload: AiMenusRequestPayload | AiDetailedMenusRequestPayload) => {
    try {
        const response = await fetch(AI_MENUS_REQUEST_API_BASE_URL + AI_MENUS_REQUEST_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching menus: ", error);
        throw error;
    }
};
