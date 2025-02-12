import Bottom from "./Bottom";
import CategoriesContainer from "./category/CategoriesContainer";
import Header from "./Header";

const AddIngredientContainer = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <CategoriesContainer />
      </div>
      <Bottom />
    </div>
  );
};

export default AddIngredientContainer;
