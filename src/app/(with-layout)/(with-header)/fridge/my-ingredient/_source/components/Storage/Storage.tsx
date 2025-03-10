"use client";

import MyIngredients from "./MyIngredients";
import { useEffect } from "react";

import useIngredientConfigState from "@/store/ingredientConfigStore";
import { FridgeIngredient } from "@/app/type/ingredients";
import useEditIngredients from "@/store/editIngredientsStore";

interface Props {
  ingredients: FridgeIngredient[];
}

const Storage = ({ ingredients }: Props) => {
  const { changeConfigState } = useIngredientConfigState();
  const clear = useEditIngredients((state) => state.clear);

  useEffect(() => {
    clear();
    return () => {
      changeConfigState("recipe");
    };
  }, [changeConfigState, clear]);

  return (
    <div className="min-h-[75vh]">
      <MyIngredients ingredients={ingredients} />
    </div>
  );
};

export default Storage;
