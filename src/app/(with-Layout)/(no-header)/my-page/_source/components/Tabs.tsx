import { Tabs } from "@radix-ui/react-tabs";
import TabItemList from "./TabItemList";

interface Props {
  tabName: string;
}

const TabsContainer = ({ tabName }: Props) => {
  return (
    <>
      <Tabs
        defaultValue={tabName}
        className="w-full sticky top-[3.375rem] flex flex-col  z-20 bg-foundation-quarternary"
      >
        <TabItemList activeTabName={tabName} />
      </Tabs>
    </>
  );
};

export default TabsContainer;
