"use client";

import useEditIngredients from "@/store/editIngredientsStore";
import { Ingredient } from "../../types/fridge";
import { ScrollArea } from "@/components/ui/scroll-area";
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
    <ScrollArea className="overflow-x-hidden h-[90%] ">
      {selectedIngredients.map((ingredient) => (
        <EditIngredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </ScrollArea>
  );
};

export default EditIngredientList;
