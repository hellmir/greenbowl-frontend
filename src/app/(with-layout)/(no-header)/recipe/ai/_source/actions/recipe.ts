import {
    AI_RECOMMENDATION_REQUEST_URL,
    AiRecipeRequestPayload,
} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/config";
import React from "react";

interface Props {
    setRecipeIntroduction: React.Dispatch<React.SetStateAction<string>>;
    setIsStreaming: React.Dispatch<React.SetStateAction<boolean>>;
    controller: AbortController;
    payload: AiRecipeRequestPayload;
}

export const GET = async ({
                              setRecipeIntroduction,
                              setIsStreaming,
                              controller,
                              payload,
                          }: Props) => {
    const {options} = payload;

    const queryParams = new URLSearchParams();

    if (options.name) {
        options.name.forEach((n) => n && queryParams.append("name", n));
    }
    options.usedIngredientNames.forEach((item) => queryParams.append("usedIngredientNames", item));
    options.usedIngredientWeights.forEach((item) => queryParams.append("usedIngredientWeights", item));
    options.cookingTime.forEach((item) => queryParams.append("cookingTime", item));
    options.calories.forEach((item) => queryParams.append("calories", item));

    const response = await fetch(
        `${AI_RECOMMENDATION_REQUEST_URL}?${queryParams.toString()}`,
        {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            signal: controller.signal,
        }
    );

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
