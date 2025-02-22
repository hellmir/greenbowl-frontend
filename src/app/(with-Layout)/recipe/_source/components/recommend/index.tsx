import { getIngredients } from "@/app/(with-Layout)/myFridge/_source/actions/ingredient";

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
