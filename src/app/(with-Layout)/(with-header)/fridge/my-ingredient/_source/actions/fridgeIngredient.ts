import {
  CreateFridgeIngredients,
  DeleteFidgetIngredients,
  FridgeIngredient,
  UpdateFridgeIngredients,
} from "@/app/type/ingredients";
import BASE_API_URL from "@/constants/apiUrl";
import { revalidateTag } from "next/cache";

export const fridgeIngredientsTags = {
  baseTag: () => "fridgeIngredients",
};

export const getFridgeIngredients = async () => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/fridges/ingredients`, {
      next: { tags: [fridgeIngredientsTags.baseTag()] },
      cache: "no-store",
    });
    console.log(res);
    const json: FridgeIngredient[] = await res.json();

    if (!res.ok) throw new Error(res.status + "");

    return json;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const createFridgeIngredients = async (
  fridgeIngredients: CreateFridgeIngredients
) => {
  "use server";
  try {
    const res = await fetch(`${BASE_API_URL}/api/fridges/ingredients`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(fridgeIngredients),
    });
    const json: FridgeIngredient[] = await res.json();

    if (!res.ok) throw new Error(res.status + "");

    revalidateTag(fridgeIngredientsTags.baseTag());

    return json;
  } catch (e) {
    console.log(e);
  }
};

export const updateFridgeIngredients = async (
  fridgeIngredients: UpdateFridgeIngredients
) => {
  "use server";
  try {
    const res = await fetch(`${BASE_API_URL}/api/fridges/ingredients`, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(fridgeIngredients),
    });
    const json: FridgeIngredient[] = await res.json();

    if (!res.ok) throw new Error(res.status + "");

    revalidateTag(fridgeIngredientsTags.baseTag());

    return json;
  } catch (e) {
    console.log(e);
  }
};

export const deleteFridgeIngredients = async (
  fridgeIngredients: DeleteFidgetIngredients
) => {
  "use server";
  try {
    const res = await fetch(`${BASE_API_URL}/api/fridges/ingredients`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify(fridgeIngredients),
    });
    const json = await res.json();

    if (!res.ok) throw new Error(res.status + "");

    revalidateTag(fridgeIngredientsTags.baseTag());

    return json;
  } catch (e) {
    console.log(e);
  }
};
