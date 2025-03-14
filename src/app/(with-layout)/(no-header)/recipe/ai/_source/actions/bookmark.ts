import {
    AddBookmarkRequestPayload,
    AddDetailedBookmarkRequestPayload,
    ModifyDetailedBookmarkRequestPayload,
    RECIPE_SERVICE_URL,
} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/config";
import customFetchClient from "@/api/customFetchClient";
import React from "react";

const DETAILED_RECIPE_ENDPOINT = "detailed";
const ONE_LINE_INTRODUCTION = "oneLineIntroduction";

export const POST = async (
    payload: AddBookmarkRequestPayload | AddDetailedBookmarkRequestPayload, setId: React.Dispatch<React.SetStateAction<string>>
) => {
    let requestEndpoint = RECIPE_SERVICE_URL;
    if (ONE_LINE_INTRODUCTION in payload) {
        requestEndpoint += DETAILED_RECIPE_ENDPOINT;
    }

    try {
        const response = await customFetchClient(requestEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(payload),
        });

        const id = await response.text();
        console.log("북마크 id: ", id);
        setId(id);
    } catch (error) {
        console.error("Error adding bookmark:", error);
        throw error;
    }
};

export const GET = async (id: string) => {
    try {
        const response = await fetch(`${RECIPE_SERVICE_URL}${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error("Error deleting bookmark:", error);
        throw error;
    }
};

export const PATCH = async (payload: ModifyDetailedBookmarkRequestPayload) => {
    try {
        const response = await customFetchClient(RECIPE_SERVICE_URL, {
            method: "PATCH",
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
        const response = await customFetchClient(`${RECIPE_SERVICE_URL}?name=${recipeName}`, {
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
