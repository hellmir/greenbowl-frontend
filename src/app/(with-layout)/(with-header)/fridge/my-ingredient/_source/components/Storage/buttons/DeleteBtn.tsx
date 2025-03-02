import { Button } from "@/components/ui/button";
import useEditIngredients from "@/store/editIngredientsStore";
import ConfirmDeleteModal from "../modal/ConfirmDeleteModal";
import { useState, useTransition } from "react";
import { deleteFridgeIngredients } from "../../../actions/fridgeIngredient";

import useAfterMutationEffects from "@/hooks/useAfterMutationEffects";
import { useAlertStore } from "@/store/alertStore";

const DeleteBtn = () => {
  const { ingredientsMap, clear } = useEditIngredients();

  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const afterMutationAction = useAfterMutationEffects(
    "삭제가 완료되었습니다.",
    () => {
      setIsOpen(false);
      clear();
    }
  );

  const play = useAlertStore((state) => state.play);

  const isNotSelected = ingredientsMap.size === 0;

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleOkBtn = () => {
    startTransition(async () => {
      try {
        await deleteFridgeIngredients([
          ...ingredientsMap
            .values()
            .map((ingredient) => ({ id: ingredient.id })),
        ]);
        afterMutationAction();
      } catch {
        play("삭제에 실패했습니다.");
      }
    });
  };
  return (
    <>
      <Button
        disabled={isNotSelected}
        onClick={handleClick}
        type="button"
        variant={"bottom"}
      >
        {isNotSelected ? "삭제할 재료를 골라주세요" : "선택한 재료 삭제하기"}
      </Button>
      <ConfirmDeleteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleOkBtn={handleOkBtn}
        isPending={isPending}
      />
    </>
  );
};

export default DeleteBtn;
