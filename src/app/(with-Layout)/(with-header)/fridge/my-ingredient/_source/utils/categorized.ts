import { categories } from "@/constants/categories";
import { FridgeIngredient } from "@/app/type/ingredients";

export const categorized = (ingredients: FridgeIngredient[]) => {
  const categorizedMap = createCategoryMap();

  ingredients.forEach((ingredient) =>
    categorizedMap[+ingredient.sequence].ingredients.push(ingredient)
  );

  return categorizedMap;
};

const createCategoryMap = () =>
  categories.reduce(
    (acc, cur) => {
      acc[cur.id] = { ingredients: [] };
      return acc;
    },
    {} as Record<number, { ingredients: FridgeIngredient[] }>
  );
