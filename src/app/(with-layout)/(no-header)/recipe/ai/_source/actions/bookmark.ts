import {
    AddBookmarkRequestPayload,
    AddDetailedBookmarkRequestPayload,
    RECIPE_SERVICE_URL,
} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/config";

const DETAILED_RECIPE_ENDPOINT = "detailed";
const ONE_LINE_INTRODUCTION = "oneLineIntroduction";

export const POST = async (
    payload: AddBookmarkRequestPayload | AddDetailedBookmarkRequestPayload
) => {
    let requestEndpoint = RECIPE_SERVICE_URL;
    if (ONE_LINE_INTRODUCTION in payload) {
        requestEndpoint += DETAILED_RECIPE_ENDPOINT;
    }

    try {
        const response = await fetch(requestEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error adding bookmark:", error);
        throw error;
    }
};

export const DELETE = async (recipeName: string) => {
    try {
        const response = await fetch(`${RECIPE_SERVICE_URL}?name=${recipeName}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error deleting bookmark:", error);
        throw error;
    }
};
