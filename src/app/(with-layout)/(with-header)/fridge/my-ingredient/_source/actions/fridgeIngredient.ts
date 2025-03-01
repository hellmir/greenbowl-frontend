import {
  CreateFridgeIngredients,
  DeleteFidgetIngredients,
  FridgeIngredient,
  UpdateFridgeIngredients,
} from "@/app/type/ingredients";
import BASE_API_URL from "@/constants/apiUrl";

export const fridgeIngredientsTags = {
  baseTag: () => "fridgeIngredients",
};

export const getFridgeIngredients = async () => {
  const res = await fetch(`${BASE_API_URL}/api/fridges/ingredients`, {
    next: { tags: [fridgeIngredientsTags.baseTag()] },
    cache: "no-store",
  });

  const json: FridgeIngredient[] = await res.json();

  if (!res.ok) throw new Error(res.status + "");

  return json;
};

export const createFridgeIngredients = async (
  fridgeIngredients: CreateFridgeIngredients
) => {
  const res = await fetch(`${BASE_API_URL}/api/fridges/ingredients`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(fridgeIngredients),
  });
  const json: FridgeIngredient[] = await res.json();

  if (!res.ok) throw new Error(res.status + "");

  return json;
};

export const updateFridgeIngredients = async (
  fridgeIngredients: UpdateFridgeIngredients
) => {
  const res = await fetch(`${BASE_API_URL}/api/fridges/ingredients`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify(fridgeIngredients),
  });
  const json: FridgeIngredient[] = await res.json();

  if (!res.ok) throw new Error(res.status + "");

  return json;
};

export const deleteFridgeIngredients = async (
  fridgeIngredients: DeleteFidgetIngredients
) => {
  const res = await fetch(`${BASE_API_URL}/api/fridges/ingredients`, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
    body: JSON.stringify(fridgeIngredients),
  });

  if (!res.ok) throw new Error(res.status + "");

  return;
};
