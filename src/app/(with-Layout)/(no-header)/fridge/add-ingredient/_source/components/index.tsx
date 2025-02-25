import Bottom from "./Bottom";
import CategoriesContainer from "./category/CategoriesContainer";
import Header from "./Header";
import IngredientsContainer from "./ingredients/IngredientsContainer";

const AddIngredientContainer = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <CategoriesContainer />
        <IngredientsContainer />
      </div>
      <Bottom />
    </div>
  );
};

export default AddIngredientContainer;
