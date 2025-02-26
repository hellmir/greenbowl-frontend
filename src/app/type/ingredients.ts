import storageMethodMap from "@/constants/ingredients/storageMethod";

interface BaseIngredient {
  categoryDetail: string;
  sequence: number;
  id: number;
}

export type CategoryIngredient = BaseIngredient;
export type CreateCategoryIngredient = Omit<BaseIngredient, "id">;
export type DeleteCategoryIngredient = Pick<BaseIngredient, "id">[];

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

export type CreateFridgeIngredients = Omit<FetchFridgeIngredient, "id">[];
export type UpdateFridgeIngredients = FetchFridgeIngredient[];
export type DeleteFidgetIngredients = Pick<FetchFridgeIngredient, "id">[];
