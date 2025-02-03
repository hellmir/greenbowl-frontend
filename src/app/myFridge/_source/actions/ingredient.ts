"use server";

import { revalidateTag } from "next/cache";
import { CreateIngredient } from "../types/fridge";

const INGREDIENTS_TAG = "ingredients";
// const INGREDIENT_TAG = "ingredient";

export const getIngredients = async () => {
  const res = await fetch("http://localhost:3000/api/test/fridge/ingredient", {
    cache: "force-cache",
    next: { revalidate: 60, tags: [INGREDIENTS_TAG] },
  });

  const data = await res.json();
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

export const deleteIngredient = async (id: string) => {
  const res = await fetch("http://localhost:3000/api/test/fridge/ingredient", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });

  revalidateTag(INGREDIENTS_TAG);

  const data = await res.json();
  return data;
};
