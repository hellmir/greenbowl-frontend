import { Suspense } from "react";
import Bottom from "./Bottom";
import CategoriesContainer from "./category/CategoriesContainer";
import Header from "./Header";
import IngredientsContainer from "./ingredients/index";
import CategoryIngredientSkeleton from "./ingredients/Skeleton";
import SideEffect from "./SideEffect";
import ErrorBoundaryProvider from "@/components/error/ErrorBoundary";

interface Props {
  categoryId: number;
}

const AddIngredientContainer = ({ categoryId }: Props) => {
  return (
    <div className=" ">
      <Header />
      <div className=" ">
        <CategoriesContainer />

        <Suspense key={categoryId} fallback={<CategoryIngredientSkeleton />}>
          <IngredientsContainer categoryId={categoryId} />
        </Suspense>
      </div>
      <Bottom />
      <SideEffect />
    </div>
  );
};

export default AddIngredientContainer;
