import { Suspense } from "react";
import { MyFridgeTabs } from "../_source/components/tab";
import MyIngredientContainer from "./_source/components/MyIngredientContainer";

const page = () => {
  return (
    <>
      <MyFridgeTabs />
      <Suspense fallback={"로딩중"}>
        <MyIngredientContainer />
      </Suspense>
    </>
  );
};

export default page;
