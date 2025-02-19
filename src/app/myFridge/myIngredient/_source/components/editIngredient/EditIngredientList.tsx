"use client";

import useEditIngredients from "@/store/editIngredientsStore";
import { Ingredient } from "@/app/myFridge/_source/types/fridge";
import EditIngredient from "./EditIngredient";

interface Props {
  ingredients: Ingredient[];
}

const EditIngredientList = ({ ingredients }: Props) => {
  const selectedIdsSet = useEditIngredients((state) => state.ingredientsSet);

  const selectedIngredients = ingredients.filter((ingredient) =>
    selectedIdsSet.has(+ingredient.id)
  );

  return (
    <div className="pt-[3.375rem] pb-10 min-h-[85vh]">
      {selectedIngredients.map((ingredient) => (
        <EditIngredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default EditIngredientList;
