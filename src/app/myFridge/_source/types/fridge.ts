export type StorageCondition = "냉장" | "냉동" | "실온";

export interface Ingredient {
  id: string;
  name: string;
  category: number;
  quantity: number;
  storageCondition: StorageCondition;
  expirationDate: string;
  [key: string]: unknown;
}

export interface CreateIngredient extends Omit<Ingredient, "id"> {
  [key: string]: unknown;
}

export interface UpdateIngredient extends Omit<Ingredient, "id"> {
  [key: string]: unknown;
}
