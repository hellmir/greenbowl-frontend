import Recommend from "./Recommend";
import { getFridgeIngredients } from "@/app/(with-layout)/(with-header)/fridge/my-ingredient/_source/actions/fridgeIngredient";

const RecommendContainer = async () => {
  const ingredients = await getFridgeIngredients();
  return (
    <form action="">
      <Recommend ingredients={ingredients} />
    </form>
  );
};

export default RecommendContainer;
