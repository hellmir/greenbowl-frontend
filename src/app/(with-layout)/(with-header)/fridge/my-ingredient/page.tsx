import { Suspense } from "react";
import { MyFridgeTabs } from "../_source/components/tab";
import MyIngredientContainer from "./_source/components/MyIngredientContainer";

const page = () => {
  return (
    <div className="bg-foundation-quarternary  px-4">
      <MyFridgeTabs />
      <Suspense
        fallback={
          <div className="min-h-screen bg-foundation-quarternary"></div>
        }
      >
        <MyIngredientContainer />
      </Suspense>
    </div>
  );
};

export default page;
