import storageMethodMap from "@/constants/ingredients/storageMethod";

interface BaseIngredient {
  categoryDetail: string;
  sequence: number;
  id: number;
}

export interface CategoryIngredient extends BaseIngredient {
  default: boolean;
}
export type CreateCategoryIngredient = Omit<CategoryIngredient, "id">;
export type DeleteCategoryIngredient = Pick<CategoryIngredient, "id">[];

export interface FridgeIngredient extends BaseIngredient {
  expirationDate: string;
  quantity: number;
  storageMethod: keyof typeof storageMethodMap;
  categoryId: number;
}

type FetchFridgeIngredient = Omit<
  FridgeIngredient,
  "categoryDetail" | "sequence"
>;

export type CreateFridgeIngredient = Omit<FetchFridgeIngredient, "id">;
export type UpdateFridgeIngredient = FetchFridgeIngredient;
export type DeleteFidgetIngredient = Pick<FetchFridgeIngredient, "id">;

export type CreateFridgeIngredients = CreateFridgeIngredient[];
export type UpdateFridgeIngredients = UpdateFridgeIngredient[];
export type DeleteFidgetIngredients = DeleteFidgetIngredient[];
