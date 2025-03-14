import customFetchClient from "@/api/customFetchClient";
import customFetchServer from "@/api/customFetchServer";
import {
  CategoryIngredient,
  CreateCategoryIngredient,
} from "@/app/type/ingredients";
import BASE_API_URL from "@/constants/apiUrl";

export const getCategoryIngredients = async (sequence = 1) => {
  const res: CategoryIngredient[] = await customFetchServer(
    `${BASE_API_URL}/api/fridges/category-items?sequence=${sequence}`,
    { cache: "no-cache" }
  );

  return res;
};

export const createCategoryIngredients = async ({
  categoryDetail,
  sequence,
}: CreateCategoryIngredient) => {
  const res: CategoryIngredient = await customFetchClient(
    `${BASE_API_URL}/api/fridges/category-items`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        categoryDetail,
        sequence,
      }),
      cache: "no-cache",
    }
  );

  return res;
};

export const deleteCategoryIngredient = async (id: number) => {
  await customFetchClient(`${BASE_API_URL}/api/fridges/category-items`, {
    method: "DELETE",

    body: JSON.stringify({
      id,
    }),
    cache: "no-cache",
  });

  return;
};
