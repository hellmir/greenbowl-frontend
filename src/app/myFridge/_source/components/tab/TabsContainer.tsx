"use client";

import { Tabs } from "@radix-ui/react-tabs";

import TabsListContainer from "./TabsListContainer";
import { useHeaderStore } from "@/store/headerStore";

const TabsContainer = () => {
  const { headerType } = useHeaderStore();

  return (
    <>
      {headerType !== "edit" && (
        <Tabs
          defaultValue="myIngredient"
          className="w-full sticky top-[54px] flex flex-col  z-30 bg-foundation-quarternary"
        >
          <TabsListContainer />
        </Tabs>
      )}
    </>
  );
};

export default TabsContainer;
