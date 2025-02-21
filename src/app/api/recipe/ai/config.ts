export const AI_MENUS_REQUEST_API_BASE_URL: string = process.env.NEXT_PUBLIC_LLM_SERVER_URL!;
export const AI_MENUS_REQUEST_ENDPOINT: string = process.env.NEXT_PUBLIC_AI_MENUS_REQUEST_ENDPOINT!;

export interface AiRequestPayload {
    llm_type: string;
    template: string;
    secret_key: string;
}
