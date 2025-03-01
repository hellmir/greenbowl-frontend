import {
    AI_MENUS_REQUEST_API_BASE_URL,
    AI_RECOMMENDATION_REQUEST_ENDPOINT,
    AiRecipeRequestPayload,
} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/config";
import React from "react";

interface Props {
    setRecipeIntroduction: React.Dispatch<React.SetStateAction<string>>;
    setIsStreaming: React.Dispatch<React.SetStateAction<boolean>>;
    controller: AbortController;
    payload: AiRecipeRequestPayload;
}

export const POST = async ({setRecipeIntroduction, setIsStreaming, controller, payload}: Props) => {
    const response = await fetch(AI_MENUS_REQUEST_API_BASE_URL + AI_RECOMMENDATION_REQUEST_ENDPOINT, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        signal: controller.signal,
        body: JSON.stringify(payload)
    });

    if (!response.body) {
        setIsStreaming(false);
        return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;
    try {
        while (!done) {
            const {value, done: doneReading} = await reader.read();
            done = doneReading;
            const chunk = decoder.decode(value, {stream: !done});
            const lines = chunk.split("\n");
            for (const line of lines) {
                if (line.startsWith("data:")) {
                    const content = line.startsWith("data: ")
                        ? line.slice("data: ".length)
                        : line.slice("data:".length);
                    if (content === "") {
                        setRecipeIntroduction((prev) => prev + "\n");
                    } else if (content === " ") {
                        setRecipeIntroduction((prev) => prev + " ");
                    } else if (content === "\n") {
                        setRecipeIntroduction((prev) => prev + "\n");
                    } else {
                        setRecipeIntroduction((prev) => prev + content);
                    }
                }
            }
        }
    } catch (error) {
        console.log("Streaming error", error);
    }
    setIsStreaming(false);
};
