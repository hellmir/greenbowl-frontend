"use client";

import useEditIngredients from "@/store/editIngredientsStore";
import useIngredientConfigState from "@/store/ingredientConfigStore";
import XIcon from "@/components/icons/XIcon";
import IngredientList from "./IngredientList";
import EditButton from "./buttons/EditButton";
import DeleteBtn from "./buttons/DeleteBtn";
import RecipeRecommendBtn from "./buttons/RecipeRecommendBtn";
import { FridgeIngredient } from "@/app/type/ingredients";

interface Props {
  ingredients: FridgeIngredient[];
}

export type Config = "recipe" | "delete" | "edit";

const MyIngredients = ({ ingredients }: Props) => {
  const { ingredientsMap, toggleIngredient, clear } = useEditIngredients();

  const config = useIngredientConfigState((state) => state.configState);

  const changeConfigState = useIngredientConfigState(
    (state) => state.changeConfigState
  );

  const handleCardClick = (ingredient: FridgeIngredient) => {
    toggleIngredient(ingredient);
  };

  const handleCloseBtn = () => {
    clear();
    changeConfigState("recipe");
  };

  return (
    <div className=" relative text-content-secondary pb-[3.125rem] h-full">
      {config !== "recipe" && (
        <div className=" bg-foundation-quarternary w-full justify-between py-4 sticky top-[5.6rem]">
          <div className="flex label-s items-center ">
            <XIcon stroke="content-tertiary" onClick={handleCloseBtn} />
            <p className="ml-2 text-foundation-primary">
              {ingredientsMap.size}
            </p>
            <p className=" text-content-tertiary">개 선택됨</p>
          </div>
        </div>
      )}

      <IngredientList
        ingredients={ingredients}
        selectedIngredients={ingredientsMap}
        handleCardClick={handleCardClick}
      />

      {config === "recipe" && <RecipeRecommendBtn />}
      {config === "delete" && <DeleteBtn />}
      {config === "edit" && <EditButton />}
    </div>
  );
};

export default MyIngredients;
