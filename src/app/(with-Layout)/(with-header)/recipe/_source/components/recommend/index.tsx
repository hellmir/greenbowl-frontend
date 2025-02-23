import { getIngredients } from "@/app/(with-layout)/(with-header)/fridge/_source/actions/ingredient";

import Recommend from "./Recommend";

const RecommendContainer = async () => {
  const ingredients = await getIngredients();
  return (
    <form action="">
      <Recommend ingredients={ingredients} />
    </form>
  );
};

export default RecommendContainer;
