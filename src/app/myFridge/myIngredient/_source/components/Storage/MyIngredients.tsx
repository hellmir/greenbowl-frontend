"use client";

import useEditIngredients from "@/store/editIngredientsStore";
import { Ingredient } from "@/app/myFridge/_source/types/fridge";
import { useTransition } from "react";
import useIngredientConfigState from "@/store/ingredientConfigStore";
import { deleteIngredients } from "@/app/myFridge/_source/actions/ingredient";
import XIcon from "@/components/icons/XIcon";
import IngredientList from "./IngredientList";
import EditButton from "./buttons/EditButton";
import { Button } from "@/components/ui/button";
import DeleteBtn from "./buttons/DeleteBtn";

interface Props {
  ingredients: Ingredient[];
  handleEditOpen: () => void;
}

export type Config = "none" | "delete" | "edit";

const MyIngredients = ({ ingredients, handleEditOpen }: Props) => {
  const { draftIngredientsSet, toggleIngredient, allClear } =
    useEditIngredients();

  const [isPending, startTransition] = useTransition();

  const config = useIngredientConfigState((state) => state.configState);

  const changeConfigState = useIngredientConfigState(
    (state) => state.changeConfigState
  );

  const handleCardClick = (n: number) => {
    if (config === "none") return;
    toggleIngredient(n);
  };

  const handleCloseBtn = () => {
    allClear();
    changeConfigState("none");
  };

  return (
    <div className=" relative text-content-secondary pb-[50px] mt-[54px] flex-col h-full">
      {config !== "none" && (
        <div className=" bg-foundation-quarternary w-full justify-between py-16 sticky top-[90px]">
          <div className="flex label-s items-center ">
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
        <Button variant={"bottom"} type="button">
          레시피 추천받기
        </Button>
      )}
      {config === "delete" && <DeleteBtn />}
      {config === "edit" && <EditButton onClick={handleEditOpen} />}
    </div>
  );
};

export default MyIngredients;
