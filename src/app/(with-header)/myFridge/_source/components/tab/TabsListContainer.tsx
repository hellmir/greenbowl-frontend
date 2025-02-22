"use client";

import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { usePathname } from "next/navigation";
import SelectConfigTypeModal from "@/app/(with-header)/myFridge/myIngredient/_source/components/Storage/modal/SelectConfigTypeModal";
import route from "@/constants/route";
import Link from "next/link";

const tabItems = [
  { key: "myIngredient", name: "내 재료", route: route.myFridge.myIngredient },
  { key: "tip", name: "냉장고 꿀팁", route: route.myFridge.tip },
];

const TabsListContainer = () => {
  const pathName = usePathname();

  // 현재 경로와 일치하는 탭 찾기
  const activeTab = tabItems.find((tab) => pathName === tab.route)?.key;

  return (
    <TabsList className="h-9 flex w-full justify-between heading-m">
      <div className="flex">
        {tabItems.map((item) => (
          <TabsTrigger key={item.key} className="h-full" value={item.key}>
            <Link href={item.route}>
              <div
                className={`relative flex items-center h-full p-2 justify-center`}
              >
                <p
                  className={
                    activeTab === item.key
                      ? "text-content-secondary"
                      : "text-content-quarternary"
                  }
                >
                  {item.name}
                </p>
                {activeTab === item.key && (
                  <div className="absolute bottom-0 w-full h-[2px] bg-foundation-primary"></div>
                )}
              </div>
            </Link>
          </TabsTrigger>
        ))}
      </div>

      {/* 특정 탭일 때만 Modal 버튼 표시 */}
      {activeTab === "myIngredient" && <SelectConfigTypeModal />}
    </TabsList>
  );
};

export default TabsListContainer;
