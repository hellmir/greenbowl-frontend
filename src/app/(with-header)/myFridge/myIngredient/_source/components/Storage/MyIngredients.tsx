"use client";

import useEditIngredients from "@/store/editIngredientsStore";
import { Ingredient } from "@/app/(with-header)/myFridge/_source/types/fridge";
import useIngredientConfigState from "@/store/ingredientConfigStore";
import XIcon from "@/components/icons/XIcon";
import IngredientList from "./IngredientList";
import EditButton from "./buttons/EditButton";
import DeleteBtn from "./buttons/DeleteBtn";
import RecipeRecommendBtn from "./buttons/RecipeRecommendBtn";

interface Props {
  ingredients: Ingredient[];
  handleEditOpen: () => void;
}

export type Config = "recipe" | "delete" | "edit";

const MyIngredients = ({ ingredients, handleEditOpen }: Props) => {
  const { draftIngredientsSet, toggleIngredient, allClear } =
    useEditIngredients();

  const config = useIngredientConfigState((state) => state.configState);

  const changeConfigState = useIngredientConfigState(
    (state) => state.changeConfigState
  );

  const handleCardClick = (n: number) => {
    toggleIngredient(n);
  };

  const handleCloseBtn = () => {
    allClear();
    changeConfigState("recipe");
  };

  return (
    <div className=" relative text-content-secondary pb-[3.125rem] mt-[3.375rem] h-full">
      {config !== "recipe" && (
        <div className=" bg-foundation-quarternary w-full justify-between py-4 sticky top-[5.6rem]">
          <div className="flex label-s items-center ">
            <XIcon stroke="content-tertiary" onClick={handleCloseBtn} />
            <p className="ml-2 text-foundation-primary">
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

      {config === "recipe" && <RecipeRecommendBtn />}
      {config === "delete" && <DeleteBtn />}
      {config === "edit" && <EditButton onClick={handleEditOpen} />}
    </div>
  );
};

export default MyIngredients;
