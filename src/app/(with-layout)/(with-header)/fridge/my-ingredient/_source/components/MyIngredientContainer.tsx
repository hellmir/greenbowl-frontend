import Empty from "./Empty";
import Storage from "./Storage";

import { getFridgeIngredients } from "../actions/fridgeIngredient";

const MyIngredientContainer = async () => {
  try {
    const ingredients = await getFridgeIngredients();
    console.log(ingredients);
    return (
      <>
        {ingredients.length === 0 ? (
          <Empty />
        ) : (
          <Storage ingredients={ingredients} />
        )}
      </>
    );
  } catch (e) {
    console.error(e);
    return (
      <div className="h-full w-full flex items-center justify-center mt-20">
        냉장고 재료를 가져오는 도중 에러가 발생했습니다.
      </div>
    );
  }
};

export default MyIngredientContainer;
