import { Button } from "@/components/ui/button";
import useEditIngredients from "@/store/editIngredientsStore";
import ConfirmDeleteModal from "../modal/ConfirmDeleteModal";
import { useState, useTransition } from "react";
import { deleteIngredients } from "@/app/(with-layout)/(with-header)/myFridge/_source/actions/ingredient";

const DeleteBtn = () => {
  const { draftIngredientsSet, allClear } = useEditIngredients();

  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const isNotSelected = draftIngredientsSet.size === 0;

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleOkBtn = () => {
    startTransition(() => {
      deleteIngredients([...draftIngredientsSet]);
      setIsOpen(false);
      allClear();
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
