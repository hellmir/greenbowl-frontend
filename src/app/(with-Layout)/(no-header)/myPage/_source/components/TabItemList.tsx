import route from "@/constants/route";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Link from "next/link";
import React from "react";

const itemList = [
  { value: "recipe", textValue: "레시피" },
  { value: "diet", textValue: "식단" },
  { value: "tips", textValue: "냉장고 꿀팁" },
];

interface Props {
  activeTabName: string;
}

const TabItemList = ({ activeTabName }: Props) => {
  return (
    <TabsList className="flex justify-between w-[calc(100%+32px)] -ml-4 h-9">
      {itemList.map((item) => (
        <TabsTrigger
          key={item.value}
          className=" relative flex-1 flex items-center justify-center"
          value={item.value}
          asChild
        >
          <Link href={`?${new URLSearchParams({ tabName: item.value })}`}>
            <p>{item.textValue}</p>
            {activeTabName === item.value && (
              <div className="absolute bottom-0 w-full h-[2px] bg-foundation-primary" />
            )}
          </Link>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default TabItemList;
