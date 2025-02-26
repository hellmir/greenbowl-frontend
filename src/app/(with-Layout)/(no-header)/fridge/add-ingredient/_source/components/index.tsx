import { getCategoryIngredients } from "../actions/categoryIngredient";
import Bottom from "./Bottom";
import CategoriesContainer from "./category/CategoriesContainer";
import Header from "./Header";
import IngredientsContainer from "./ingredients/IngredientsContainer";

interface Props {
  categoryId: number;
}

const AddIngredientContainer = async ({ categoryId }: Props) => {
  const data = await getCategoryIngredients();
  console.log(data);
  return (
    <div>
      <Header />
      <div className="relative">
        <CategoriesContainer categoryId={categoryId} />
        <IngredientsContainer />
      </div>
      <Bottom />
    </div>
  );
};

export default AddIngredientContainer;
