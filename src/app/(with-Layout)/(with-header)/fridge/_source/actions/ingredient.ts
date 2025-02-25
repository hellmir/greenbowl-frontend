"use server";

import { revalidateTag } from "next/cache";
import { CreateIngredient, Ingredient } from "../types/fridge";

const INGREDIENTS_TAG = "ingredients";
// const INGREDIENT_TAG = "ingredient";

export const getIngredients = async () => {
  const res = await fetch("http://localhost:3000/api/test/fridge/ingredient", {
    headers: { "Content-Type": "application/json" },
    cache: "force-cache",
    next: { revalidate: 60, tags: [INGREDIENTS_TAG] },
  });

  const data: Ingredient[] = await res.json();
  return data;
};

export const createIngredient = async (ingredient: CreateIngredient) => {
  const res = await fetch("http://localhost:3000/api/test/fridge/ingredient", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ingredient),
  });

  revalidateTag(INGREDIENTS_TAG);

  const data = await res.json();
  return data;
};

export const deleteIngredients = async (ids: number[]) => {
  const res = await fetch("http://localhost:3000/api/test/fridge/ingredient", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids }),
  });

  revalidateTag(INGREDIENTS_TAG);

  const data = await res.json();
  return data;
};
