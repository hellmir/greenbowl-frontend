"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import IngredientList from "./IngredientList";
import XIcon from "@/components/icons/XIcon";

import { Ingredient } from "@/app/myFridge/_source/types/fridge";

import { deleteIngredients } from "../../../actions/ingredient";

import useIngredientConfigState from "@/store/ingredientConfigStore";
import EditButton from "./buttons/EditButton";
import useEditIngredients from "@/store/editIngredientsStore";

interface Props {
  ingredients: Ingredient[];
}

export type Config = "none" | "delete" | "edit";

const Storage = ({ ingredients }: Props) => {
  const { draftIngredientsSet, toggleIngredient, allClear } =
    useEditIngredients();

  const [isPending, startTransition] = useTransition();

  const config = useIngredientConfigState((state) => state.configState);

  const changeConfigState = useIngredientConfigState(
    (state) => state.changeConfigState
  );

  const handleCardClick = (n: number) => {
    toggleIngredient(n);
  };

  const handleCloseBtn = () => {
    allClear();
    changeConfigState("none");
  };
  const handleDeleteBtnClick = () => {
    startTransition(() => {
      changeConfigState("none");
      deleteIngredients([...draftIngredientsSet]);
    });
  };

  return (
    <div className="relative h-[calc(100vh-170px)] text-content-secondary flex flex-col justify-between">
      {config !== "none" && (
        <div className="flex bg-white w-full justify-between mr-[25px] z-30">
          <div className="flex text-label-s items-center">
            <XIcon stroke="content-tertiary" onClick={handleCloseBtn} />
            <p className="ml-8 text-foundation-primary">
              {draftIngredientsSet.size}
            </p>
            <p className=" text-content-tertiary">개 선택됨</p>
          </div>
        </div>
      )}

      <IngredientList
        ingredients={ingredients}
        selectedIngredients={draftIngredientsSet}
        handleCardClick={handleCardClick}
      />

      {config === "none" && (
        <Button type="button" className="w-full mb-[10px] mt-[5px]">
          레시피 추천
        </Button>
      )}
      {config === "delete" && (
        <Button
          onClick={handleDeleteBtnClick}
          disabled={isPending}
          type="button"
          className="w-full mb-[10px] mt-[5px]"
        >
          재료 삭제하기
        </Button>
      )}
      {config === "edit" && <EditButton />}
    </div>
  );
};

export default Storage;
