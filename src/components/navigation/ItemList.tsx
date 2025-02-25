"use client";

import NavigationItem from "./Item";

import { navList } from "@/constants/navigation";
import useEditIngredients from "@/store/editIngredientsStore";
import useIngredientConfigState from "@/store/ingredientConfigStore";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NavigationLoginRequireItem from "./LoginRequireItem";

const NavigationItemList = () => {
  const pathName = usePathname();
  const { allClear } = useEditIngredients();
  const { changeConfigState } = useIngredientConfigState();

  useEffect(() => {}, [pathName, allClear, changeConfigState]);

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
