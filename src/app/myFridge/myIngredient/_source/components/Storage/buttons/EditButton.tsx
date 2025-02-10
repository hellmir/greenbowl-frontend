import { Button } from "@/components/ui/button";
import useEditIngredients from "@/store/editIngredientsStore";

interface Props {
  onClick?: () => void;
}

const EditButton = ({ onClick }: Props) => {
  const { draftIngredientsSet, commit } = useEditIngredients();
  console.log(draftIngredientsSet);
  const isNotSelected = draftIngredientsSet.size === 0;

  const handleClick = () => {
    if (isNotSelected) return;

    commit();
    onClick?.();
  };

  return (
    <Button
      variant={"bottom"}
      onClick={handleClick}
      type="button"
      className="w-full"
    >
      {isNotSelected ? "수정할 재료를 골라주세요" : "선택한 재료 수정하기"}
    </Button>
  );
};

export default EditButton;
