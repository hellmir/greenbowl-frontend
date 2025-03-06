import { Suspense } from "react";
import Bottom from "./Bottom";
import CategoriesContainer from "./category/CategoriesContainer";
import Header from "./Header";
import IngredientsContainer from "./ingredients/index";
import CategoryIngredientSkeleton from "./ingredients/Skeleton";
import SideEffect from "./SideEffect";

interface Props {
  categoryId: number;
}

const AddIngredientContainer = ({ categoryId }: Props) => {
  return (
    <div className=" ">
      <Header />

      <CategoriesContainer />
      <div className="px-4">
        <Suspense key={categoryId} fallback={<CategoryIngredientSkeleton />}>
          <IngredientsContainer categoryId={categoryId} />
        </Suspense>

        <Bottom />
      </div>
      <SideEffect />
    </div>
  );
};

export default AddIngredientContainer;
