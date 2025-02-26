"use client";

import useEditIngredients from "@/store/editIngredientsStore";
import EditIngredient from "./EditIngredient";
import { FridgeIngredient } from "@/app/type/ingredients";

interface Props {
  ingredients: FridgeIngredient[];
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
