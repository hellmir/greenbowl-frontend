export interface Ingredient {
  id: string;
  name: string;
  [key: string]: unknown;
}

export interface CreateIngredient extends Omit<Ingredient, "id"> {
  [key: string]: unknown;
}

export interface UpdateIngredient extends Omit<Ingredient, "id"> {
  [key: string]: unknown;
}
