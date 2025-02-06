import Empty from "./Empty";
import Storage from "./Storage";

import { getIngredients } from "../../actions/ingredient";

const MyIngredientContainer = async () => {
  const ingredients = await getIngredients();

  return (
    <>
      {ingredients.length === 0 ? (
        <Empty />
      ) : (
        <Storage ingredients={ingredients} />
      )}
    </>
  );
};

export default MyIngredientContainer;
