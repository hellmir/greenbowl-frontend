import { Button } from "@/components/ui/button";
import useEditIngredients from "@/store/editIngredientsStore";
import ConfirmDeleteModal from "../modal/ConfirmDeleteModal";
import { useState, useTransition } from "react";
import { deleteIngredients } from "@/app/myFridge/_source/actions/ingredient";

const DeleteBtn = () => {
  const { draftIngredientsSet, allClear } = useEditIngredients();

  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const isNotSelected = draftIngredientsSet.size === 0;

  const handleClick = () => {
    if (isNotSelected) return;
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
      <Button onClick={handleClick} type="button" variant={"bottom"}>
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
