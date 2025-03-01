import IngredientsList from "./IngredientsList";
import { getCategoryIngredients } from "../../actions/categoryIngredient";

interface Props {
  categoryId: number;
}

const IngredientsContainer = async ({ categoryId }: Props) => {
  const ingredients = await getCategoryIngredients(categoryId);
  return (
    <div className="grid grid-cols-2 gap-4">
      <IngredientsList initialIngredients={ingredients} />
    </div>
  );
};

export default IngredientsContainer;
