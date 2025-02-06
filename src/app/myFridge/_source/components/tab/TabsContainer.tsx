import { Tabs, TabsContent } from "@radix-ui/react-tabs";

import { MyIngredient } from "../myIngredient";
import TabsListContainer from "./TabsListContainer";

const TabsContainer = () => {
  return (
    <Tabs
      defaultValue="myIngredient"
      className="w-full flex flex-col gap-[10px] "
    >
      <TabsListContainer />
      <TabsContent className="h-full" value="myIngredient">
        <MyIngredient />
      </TabsContent>
      <TabsContent value="fridgeTips">냉장고 팁</TabsContent>
    </Tabs>
  );
};

export default TabsContainer;
