import { MyFridgeTabs } from "../_source/components/tab";
import TipsContainer from "./_source/components/TipsContainer";

const page = () => {
  return (
    <div className="bg-foundation-quarternary px-4">
      <MyFridgeTabs />
      <TipsContainer />
    </div>
  );
};

export default page;
