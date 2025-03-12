import IngredientsList from "./IngredientsList";
import { getCategoryIngredients } from "../../actions/categoryIngredient";

interface Props {
  categoryId: number;
}

const IngredientsContainer = async ({ categoryId }: Props) => {
  try {
    const ingredients = await getCategoryIngredients(categoryId);
    return (
      <div className="grid grid-cols-2 gap-4 pb-3">
        <IngredientsList initialIngredients={ingredients} />
      </div>
    );
  } catch (e) {
    console.error(e);
    return <div>데이터를 가져오는데 실패했습니다</div>;
  }
};

export default IngredientsContainer;
