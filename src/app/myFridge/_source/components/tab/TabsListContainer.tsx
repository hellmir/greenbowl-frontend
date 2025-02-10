"use client";

import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";
import ModalBtn from "@/app/myFridge/myIngredient/_source/components/Storage/modal/ModalBtn";
import { usePathname } from "next/navigation";

const TabsListContainer = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const pathName = usePathname();
  const isMyIngredient = pathName.includes("myIngredient");

  return (
    <TabsList className="h-9 flex w-full justify-between text-heading-m">
      <div className="">
        <TabsTrigger
          className="h-full"
          onClick={() => setSelectedIdx(0)}
          value="myIngredient"
        >
          <div className="relative flex items-center h-full">
            <p
              className={`${selectedIdx === 0 ? "text-content-secondary" : "text-content-quarternary"}`}
            >
              내 재료
            </p>
            {selectedIdx === 0 && (
              <div className=" absolute bottom-0 w-full h-[2px] bg-foundation-primary"></div>
            )}
          </div>
        </TabsTrigger>
        <TabsTrigger
          onClick={() => setSelectedIdx(1)}
          value="fridgeTips"
          className="pl-[15px] h-full"
        >
          <div className="relative flex items-center h-full">
            <p
              className={`${selectedIdx === 1 ? "text-content-secondary" : "text-content-quarternary"}`}
            >
              냉장고 꿀팁
            </p>
            {selectedIdx === 1 && (
              <div className=" absolute bottom-0 w-full h-[2px] bg-foundation-primary"></div>
            )}
          </div>
        </TabsTrigger>
      </div>
      {isMyIngredient && <ModalBtn />}
    </TabsList>
  );
};

export default TabsListContainer;
