import { Button } from "@/components/ui/button";
import route from "@/constants/route";
import useEditIngredients from "@/store/editIngredientsStore";
import { useRouter } from "next/navigation";

const RecipeRecommendBtn = () => {
  const { ingredientsMap } = useEditIngredients();
  const router = useRouter();

  const handleClick = () => router.push(route.recipe.root);
  return (
    <Button
      onClick={handleClick}
      disabled={ingredientsMap.size === 0}
      variant={"bottom"}
      type="button"
    >
      {ingredientsMap.size === 0
        ? "재료를 선택해 주세요"
        : "선택한 재료로 레시피 추천받기"}
    </Button>
  );
};

export default RecipeRecommendBtn;
