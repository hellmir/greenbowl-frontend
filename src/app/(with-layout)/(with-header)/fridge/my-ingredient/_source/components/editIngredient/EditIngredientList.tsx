"use client";

import useEditIngredients from "@/store/editIngredientsStore";
import EditIngredient from "./EditIngredient";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useTransition } from "react";
import formatDate from "@/utils/date/formatDate";
import { FridgeIngredient } from "@/app/type/ingredients";
import { updateFridgeIngredients } from "../../actions/fridgeIngredient";

import { useFullscreenModalStore } from "@/store/fullscreenModalStore";
import useIngredientConfigState from "@/store/ingredientConfigStore";
import useAfterMutationEffects from "@/hooks/useAfterMutationEffects";
import { useAlertStore } from "@/store/alertStore";

const EditIngredientList = () => {
  const { ingredientsMap, clear } = useEditIngredients();
  const setIsFullscreenModalOpen = useFullscreenModalStore(
    (state) => state.setIsOpen
  );
  const play = useAlertStore((state) => state.play);
  const changeConfigState = useIngredientConfigState(
    (state) => state.changeConfigState
  );
  const [selectedIngredients, setSelectedIngredients] = useState<
    FridgeIngredient[]
  >([]);

  const [isPending, startTransition] = useTransition();

  const afterAction = useAfterMutationEffects("수정이 완료되었습니다.", () => {
    clear();
    setIsFullscreenModalOpen(false);
    changeConfigState("recipe");
  });

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        await updateFridgeIngredients(selectedIngredients);
        afterAction();
      } catch (e) {
        console.error(e);
        play("수정에 실패했습니다.");
      }
    });
  };

  useEffect(() => {
    setSelectedIngredients(
      [...ingredientsMap.values()].map((ingredient) => ({
        ...ingredient,
        expirationDate: formatDate(new Date(ingredient.expirationDate)),
      }))
    );
  }, [ingredientsMap]);

  return (
    <div className="pt-3 pb-10 ">
      <div className=" min-h-[80vh]">
        {selectedIngredients.map((ingredient) => (
          <EditIngredient
            key={ingredient.id}
            ingredient={ingredient}
            setSelectedIngredients={setSelectedIngredients}
          />
        ))}
      </div>
      <Button
        onClick={handleSubmit}
        disabled={ingredientsMap.size <= 0 || isPending}
        variant={"bottom"}
        className=""
      >
        {isPending ? "수정 처리중" : "수정하기 "}
      </Button>
    </div>
  );
};

export default EditIngredientList;
