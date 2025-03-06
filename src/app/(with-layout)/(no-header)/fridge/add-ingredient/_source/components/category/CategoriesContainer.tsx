import { Tabs } from "@/components/ui/tabs";

import CategoryTriggers from "./CategoryTriggers";

const CategoriesContainer = () => {
  return (
    <div className=" w-full sticky top-[3.4rem] flex justify-center grow-0 py-6 z-20 bg-foundation-secondary mb-3 border-b border-border-default">
      <Tabs className="">
        <CategoryTriggers />
      </Tabs>
    </div>
  );
};

export default CategoriesContainer;
