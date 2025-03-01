import { CategoryIngredient } from "@/app/type/ingredients";

import AddCustomIngredient from "../bottomSheet/AddCustomIngredient";

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

      <div className="z-20 fixed flex top-0 justify-end w-full max-w-[37.5rem] ml-5 items-center">
        <div className="py-4 pr-12 flex justify-center items-center ">
          <AddCustomIngredient />
        </div>
      </div>
    </>
  );
};

export default IngredientsList;
