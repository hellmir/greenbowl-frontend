import { Button } from "@/components/ui/button";
import useEditIngredients from "@/store/editIngredientsStore";
import { useFullscreenModalStore } from "@/store/fullscreenModalStore";
import EditContainer from "../../editIngredient/EditContainer";

interface Props {
  onClick?: () => void;
}

const EditButton = ({ onClick }: Props) => {
  const { ingredientsMap } = useEditIngredients();
  const { play } = useFullscreenModalStore();
  const isNotSelected = ingredientsMap.size === 0;

  const handleClick = () => {
    onClick?.();
    play(EditContainer);
  };

  return (
    <Button
      disabled={isNotSelected}
      variant={"bottom"}
      onClick={handleClick}
      type="button"
    >
      {isNotSelected ? "수정할 재료를 골라주세요" : "선택한 재료 수정하기"}
    </Button>
  );
};

export default EditButton;
