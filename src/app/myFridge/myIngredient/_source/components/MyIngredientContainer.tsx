import Empty from "./Empty";
import Storage from "./Storage";

import { getIngredients } from "./../../../_source/actions/ingredient";
import { MyFridgeTabs } from "@/app/myFridge/_source/components/tab";

const MyIngredientContainer = async () => {
  const ingredients = await getIngredients();

  return (
    <>
      <MyFridgeTabs />
      {ingredients.length === 0 ? (
        <Empty />
      ) : (
        <Storage ingredients={ingredients} />
      )}
    </>
  );
};

export default MyIngredientContainer;
