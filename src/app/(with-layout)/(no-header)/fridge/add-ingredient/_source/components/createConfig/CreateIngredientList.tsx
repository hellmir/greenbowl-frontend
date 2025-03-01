"use client";

import { CreateFridgeIngredient } from "@/app/type/ingredients";
import CreateIngredient from "./CreateIngredient";
import { useCategoryIngredientsStore } from "@/store/categoryIngredientsStore";
import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { createFridgeIngredients } from "@/app/(with-layout)/(with-header)/fridge/my-ingredient/_source/actions/fridgeIngredient";
import { useRouter } from "next/navigation";
import route from "@/constants/route";
import formatDate from "@/utils/date/formatDate";
import useAfterMutationEffects from "@/hooks/useAfterMutationEffects";
import { useAlertStore } from "@/store/alertStore";

const CreateIngredientList = () => {
  const { selectedIngredientsMap } = useCategoryIngredientsStore();
  const play = useAlertStore((state) => state.play);
  const [fridgeIngredients, setFridgeIngredients] = useState<
    CreateFridgeIngredient[]
  >([]);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const afterAction = useAfterMutationEffects(
    "냉장고에 재료를 추가했습니다.",
    () => router.push(route.myFridge.myIngredient)
  );

  useEffect(() => {
    const newFridgeIngredients = [...selectedIngredientsMap.values()].map(
      (ingredient): CreateFridgeIngredient => ({
        categoryId: ingredient.id,
        expirationDate: formatDate(new Date()),
        quantity: 1,
        storageMethod: "COLD",
      })
    );
    setFridgeIngredients(newFridgeIngredients);
  }, [selectedIngredientsMap]);

  const handleClickSubmitBtn = () => {
    startTransition(async () => {
      try {
        await createFridgeIngredients(fridgeIngredients);
        afterAction();
      } catch (e) {
        console.error(e);
        play("냉장고 재료 등록에 실패했습니다.");
      }
    });
  };

  return (
    <div className="mt-3 pb-12  ">
      <div className="min-h-[80vh]">
        {fridgeIngredients.map((ingredient) => {
          const selectedIngredient = selectedIngredientsMap.get(
            ingredient.categoryId
          );

          if (selectedIngredient) {
            return (
              <CreateIngredient
                key={ingredient.categoryId}
                ingredient={ingredient}
                selectedIngredient={selectedIngredient}
                setCreateFridgeIngredients={setFridgeIngredients}
              />
            );
          }
        })}
      </div>
      <Button
        disabled={selectedIngredientsMap.size <= 0}
        onClick={handleClickSubmitBtn}
        loading={isPending}
        variant={"bottom"}
      >
        재료 리스트 전부 추가 할게요
      </Button>
    </div>
  );
};

export default CreateIngredientList;
