import {
  CategoryIngredient,
  CreateCategoryIngredient,
} from "@/app/type/ingredients";
import BASE_API_URL from "@/constants/apiUrl";
import { revalidateTag } from "next/cache";

const categoryIngredientTags = {
  baseKey: () => "categoryIngredient",
};

export const getCategoryIngredients = async () => {
  const res = await fetch(`${BASE_API_URL}/api/fridges/category-items`, {
    next: { revalidate: 1000, tags: [categoryIngredientTags.baseKey()] },
  });

  const json: CategoryIngredient[] = await res.json();

  if (!res.ok) throw new Error(`${res.statusText}`);

  return json;
};

export const createCategoryIngredients = async ({
  categoryDetail,
  sequence,
}: CreateCategoryIngredient) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/fridges/category-items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        categoryDetail,
        sequence,
      }),
    });
    console.log(res);
    if (!res.ok) throw new Error(JSON.stringify(res.status));

    const json: CategoryIngredient = await res.json();

    return json;
  } catch (e) {
    console.log(e);
  }
};
