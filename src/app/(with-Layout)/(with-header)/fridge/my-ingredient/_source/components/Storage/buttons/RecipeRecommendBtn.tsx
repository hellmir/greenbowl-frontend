import { Button } from "@/components/ui/button";
import route from "@/constants/route";
import useEditIngredients from "@/store/editIngredientsStore";
import Link from "next/link";

const RecipeRecommendBtn = () => {
  const { ingredientsMap } = useEditIngredients();

  return (
    <Link href={route.recipe.root}>
      <Button
        disabled={ingredientsMap.size === 0}
        variant={"bottom"}
        type="button"
      >
        {ingredientsMap.size === 0
          ? "재료를 선택해 주세요"
          : "선택한 재료로 레시피 추천받기"}
      </Button>
    </Link>
  );
};

export default RecipeRecommendBtn;
