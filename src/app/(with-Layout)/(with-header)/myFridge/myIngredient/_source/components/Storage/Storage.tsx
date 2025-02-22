"use client";

import { Ingredient } from "@/app/(with-layout)/(with-header)/myFridge/_source/types/fridge";
import MyIngredients from "./MyIngredients";
import { useEffect, useState } from "react";
import EditContainer from "../editIngredient/EditContainer";
import useEditIngredients from "@/store/editIngredientsStore";
import useIngredientConfigState from "@/store/ingredientConfigStore";

interface Props {
  ingredients: Ingredient[];
}

const Storage = ({ ingredients }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const { clearDraft } = useEditIngredients();
  const { changeConfigState } = useIngredientConfigState();

  const handleEditOpen = () => setIsEdit(true);
  const handleEditClose = () => setIsEdit(false);

  useEffect(() => {
    return () => {
      clearDraft();

      changeConfigState("recipe");
    };
  }, [clearDraft, changeConfigState]);
  return (
    <div className="min-h-full">
      {isEdit ? (
        <EditContainer
          ingredients={ingredients}
          handleEditClose={handleEditClose}
        />
      ) : (
        <MyIngredients
          handleEditOpen={handleEditOpen}
          ingredients={ingredients}
        />
      )}
    </div>
  );
};

export default Storage;
