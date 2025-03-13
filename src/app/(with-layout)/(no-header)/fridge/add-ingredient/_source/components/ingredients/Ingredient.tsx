"use client";

import { CategoryIngredient } from "@/app/type/ingredients";
import XIcon from "@/components/icons/XIcon";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { deleteCategoryIngredient } from "../../actions/categoryIngredient";
import { useCategoryIngredientsStore } from "@/store/categoryIngredientsStore";
import { useAlertStore } from "@/store/alertStore";
import useAfterMutationEffects from "@/hooks/useAfterMutationEffects";

interface Props {
  ingredient: CategoryIngredient;
}

const Ingredient = ({ ingredient }: Props) => {
  const [isPending, startTransition] = useTransition();
  console.log(ingredient);
  const { toggleIngredient, selectedIngredientsMap } =
    useCategoryIngredientsStore();
  const afterAction = useAfterMutationEffects("삭제가 완료되었습니다.");

  const play = useAlertStore((state) => state.play);

  const deleteAction = (ingredient: CategoryIngredient) => {
    startTransition(async () => {
      try {
        if (selectedIngredientsMap.has(ingredient.id)) {
          toggleIngredient(ingredient);
        }
        await deleteCategoryIngredient(ingredient.id);
        // await new Promise((res) => setTimeout(() > res, 2000));

        afterAction();
      } catch (e) {
        console.error(e);
        play("삭제에 실패했습니다.");
      }
    });
  };

  const isSelected = selectedIngredientsMap.has(ingredient.id);

  return (
    <div
      onClick={() => !isPending && toggleIngredient(ingredient)}
      key={ingredient.id}
      className={`${isSelected ? "bg-scale-yellowgreen-100 border-foundation-primary text-foundation-primary" : "bg-foundation-secondary border border-border-default text-content-secondary"} border relative w-full h-9  label-xs  flex justify-center items-center hover:cursor-pointer rounded-lg `}
    >
      <p className="">{ingredient.categoryDetail}</p>
      {ingredient.id >= 160 && (
        <div className="absolute right-0 top-0 p-1">
          <Button
            variant={"ghost"}
            onClick={(e) => {
              e.stopPropagation();
              deleteAction(ingredient);
            }}
            className=" p-0 m-0 h-full"
            loading={isPending}
            LoaderClassname="bg-white"
          >
            <XIcon stroke="content-tertiary" height={12} width={12} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Ingredient;
