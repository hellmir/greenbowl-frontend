import { Suspense } from "react";
import { MyFridgeTabs } from "../_source/components/tab";
import MyIngredientContainer from "./_source/components/MyIngredientContainer";

const page = () => {
  return (
    <div className="bg-foundation-quarternary min-h-screen px-4">
      <MyFridgeTabs />
      <Suspense fallback={"로딩중"}>
        <MyIngredientContainer />
      </Suspense>
    </div>
  );
};

export default page;
