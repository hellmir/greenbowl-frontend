import { Button } from "@/components/ui/button";
import useEditIngredients from "@/store/editIngredientsStore";

interface Props {
  onClick?: () => void;
}

const EditButton = ({ onClick }: Props) => {
  const { draftIngredientsSet, commit } = useEditIngredients();

  const isNotSelected = draftIngredientsSet.size === 0;

  const handleClick = () => {
    commit();
    onClick?.();
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
