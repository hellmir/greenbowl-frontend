import {
  CategoryIngredient,
  CreateCategoryIngredient,
} from "@/app/type/ingredients";
import BASE_API_URL from "@/constants/apiUrl";

export const getCategoryIngredients = async (sequence = 1) => {
  const res = await fetch(
    `${BASE_API_URL}/api/fridges/category-items?sequence=${sequence}`,
    { cache: "no-cache" }
  );

  const json: CategoryIngredient[] = await res.json();

  if (!res.ok) throw new Error(`${res.status}`);

  return json;
};

export const createCategoryIngredients = async ({
  categoryDetail,
  sequence,
}: CreateCategoryIngredient) => {
  const res = await fetch(`${BASE_API_URL}/api/fridges/category-items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      categoryDetail,
      sequence,
    }),
    cache: "no-cache",
  });

  if (!res.ok) throw new Error(JSON.stringify(res.status));

  const json: CategoryIngredient = await res.json();

  return json;
};

export const deleteCategoryIngredient = async (id: number) => {
  const res = await fetch(`${BASE_API_URL}/api/fridges/category-items`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
    }),
    cache: "no-cache",
  });

  if (!res.ok) throw new Error(`Failed to delete, status: ${res.status}`);

  return;
};
