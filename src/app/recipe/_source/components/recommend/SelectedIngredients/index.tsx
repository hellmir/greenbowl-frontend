"use client";

import { Ingredient } from "@/app/myFridge/_source/types/fridge";
import useEditIngredients from "@/store/editIngredientsStore";
import Empty from "./Empty";
import Ingredients from "./Ingredients";

interface Props {
  ingredients: Ingredient[];
}

const SelectedIngredients = ({ ingredients }: Props) => {
  const { ingredientsSet } = useEditIngredients();

  const selectedIngredients = ingredients.filter((ingredient) =>
    ingredientsSet.has(+ingredient.id)
  );

  return (
    <div className="p-3 ">
      <div className="label-s mb-3">선택한 재료(0)</div>
      {selectedIngredients.length === 0 ? (
        <Empty />
      ) : (
        <Ingredients ingredients={selectedIngredients} />
      )}
    </div>
  );
};

export default SelectedIngredients;
