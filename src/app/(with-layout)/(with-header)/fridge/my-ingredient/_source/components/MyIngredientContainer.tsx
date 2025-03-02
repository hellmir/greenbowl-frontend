import Empty from "./Empty";
import Storage from "./Storage";

import { getFridgeIngredients } from "../actions/fridgeIngredient";

const MyIngredientContainer = async () => {
  try {
    const ingredients = await getFridgeIngredients();

    return (
      <>
        {ingredients.length === 0 ? (
          <Empty />
        ) : (
          <Storage ingredients={ingredients} />
        )}
      </>
    );
  } catch {
    <div className="h-full w-full flex items-center justify-center">
      냉장고 재료를 가져오는 도중 에러가 발생했습니다.
    </div>;
  }
};

export default MyIngredientContainer;
