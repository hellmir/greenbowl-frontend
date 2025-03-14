import customFetchClient from "@/api/customFetchClient";
import customFetchServer from "@/api/customFetchServer";
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
  const res: FridgeIngredient[] = await customFetchServer(
    `${BASE_API_URL}/api/fridges/ingredients`,
    {
      next: { tags: [fridgeIngredientsTags.baseTag()] },
      cache: "no-store",
    }
  );

  return res;
};

export const createFridgeIngredients = async (
  fridgeIngredients: CreateFridgeIngredients
) => {
  const res = await customFetchClient(
    `${BASE_API_URL}/api/fridges/ingredients`,
    {
      method: "POST",
      body: JSON.stringify(fridgeIngredients),
    }
  );

  return res;
};

export const createFridgeIngredientsWithDefault = async (
  fridgeIngredients: CreateFridgeIngredients
) => {
  const res = await customFetchClient(
    `${BASE_API_URL}/api/fridges/default-ingredients`,
    {
      method: "POST",
      body: JSON.stringify(fridgeIngredients),
    }
  );

  return res;
};
export const updateFridgeIngredients = async (
  fridgeIngredients: UpdateFridgeIngredients
) => {
  const res = await customFetchClient(
    `${BASE_API_URL}/api/fridges/ingredients`,
    {
      method: "PUT",
      body: JSON.stringify(fridgeIngredients),
    }
  );

  return res;
};

export const deleteFridgeIngredients = async (
  fridgeIngredients: DeleteFidgetIngredients
) => {
  await customFetchClient(`${BASE_API_URL}/api/fridges/ingredients`, {
    method: "DELETE",
    body: JSON.stringify(fridgeIngredients),
  });

  return;
};
