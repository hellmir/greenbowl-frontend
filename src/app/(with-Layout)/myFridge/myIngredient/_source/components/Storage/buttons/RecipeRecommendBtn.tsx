import { Button } from "@/components/ui/button";
import route from "@/constants/route";
import useEditIngredients from "@/store/editIngredientsStore";
import Link from "next/link";

const RecipeRecommendBtn = () => {
  const { clearDraft, commit, draftIngredientsSet } = useEditIngredients();

  const handleClick = () => {
    commit();
    clearDraft();
  };
  return (
    <Link href={route.recipe.root}>
      <Button
        disabled={draftIngredientsSet.size === 0}
        onClick={handleClick}
        variant={"bottom"}
        type="button"
      >
        {draftIngredientsSet.size === 0
          ? "재료를 선택해 주세요"
          : "선택한 재료로 레시피 추천받기"}
      </Button>
    </Link>
  );
};

export default RecipeRecommendBtn;
