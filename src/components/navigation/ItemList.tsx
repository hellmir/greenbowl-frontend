"use client";

import NavigationItem from "./Item";

import { navList } from "@/constants/navigation";

import { usePathname } from "next/navigation";

import NavigationLoginRequireItem from "./LoginRequireItem";

const NavigationItemList = () => {
  const pathName = usePathname();

  return (
    <ul className="flex gap-4 h-full">
      {navList.map((item) =>
        item.isLoginRequire ? (
          <NavigationLoginRequireItem
            key={item.name}
            item={item}
            pathName={pathName}
          />
        ) : (
          <NavigationItem key={item.name} item={item} pathName={pathName} />
        )
      )}
    </ul>
  );
};

export default NavigationItemList;
