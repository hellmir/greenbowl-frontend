import {
    AddBookmarkRequestPayload,
    AddDetailedBookmarkRequestPayload
} from "@/app/(with-Layout)/(with-header)/recipe/ai/_source/config";

const DETAILED_RECIPE_ENDPOINT = "/detailed";
const ONE_LINE_INTRODUCTION = "oneLineIntroduction";

export const POST
    = async (payload: AddBookmarkRequestPayload | AddDetailedBookmarkRequestPayload) => {
    let requestEndpoint = "http://localhost:8082";
    if (ONE_LINE_INTRODUCTION in payload) {
        requestEndpoint += DETAILED_RECIPE_ENDPOINT;
    }

    try {
        const response = await fetch(requestEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error fetching bookmark:", error);
        throw error;
    }
};
