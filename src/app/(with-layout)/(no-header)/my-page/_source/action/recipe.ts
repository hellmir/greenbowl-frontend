import customFetchClient from "@/api/customFetchClient";
import customFetchServer from "@/api/customFetchServer";
import { MenuApiResponse } from "@/app/api/test/recipe/ai/gpt/menus";
import BASE_API_URL from "@/constants/apiUrl";

export interface BookmarkRecipe extends MenuApiResponse {
  id: number;
}

export const getBookmarkRecipes = async () => {
  const res: BookmarkRecipe[] = await customFetchServer(
    `${BASE_API_URL}/api/recipes/`
  );

  return res;
};

export const deleteBookmarkRecipe = async (id: number) => {
  const res = await customFetchClient(`${BASE_API_URL}/api/recipes/${id}`, {
    method: "DELETE",
  });

  return res;
};
