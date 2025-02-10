import { categories } from "@/constants/categories";
import { Ingredient } from "../types/fridge";

export const categorized = (ingredients: Ingredient[]) => {
  const categorizedMap = createCategoryMap();

  ingredients.forEach((ingredient) =>
    categorizedMap[+ingredient.category].ingredients.push(ingredient)
  );

  return categorizedMap;
};

const createCategoryMap = () =>
  categories.reduce(
    (acc, cur) => {
      acc[cur.id] = { ingredients: [] };
      return acc;
    },
    {} as Record<number, { ingredients: Ingredient[] }>
  );
