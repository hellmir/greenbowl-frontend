import { CategoryIngredient } from "@/app/type/ingredients";

import Ingredient from "./Ingredient";

interface Props {
  initialIngredients: CategoryIngredient[];
}

const IngredientsList = ({ initialIngredients }: Props) => {
  return (
    <>
      {initialIngredients.map((item) => {
        return <Ingredient key={item.id} ingredient={item} />;
      })}
    </>
  );
};

export default IngredientsList;
