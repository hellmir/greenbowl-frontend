"use client";

import NavigationItem from "./Item";

import { navList } from "@/constants/navigation";
import useEditIngredients from "@/store/editIngredientsStore";
import useIngredientConfigState from "@/store/ingredientConfigStore";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const NavigationItemList = () => {
  const pathName = usePathname();
  const { allClear } = useEditIngredients();
  const { changeConfigState } = useIngredientConfigState();

  useEffect(() => {}, [pathName, allClear, changeConfigState]);

  return (
    <ul className="grid grid-cols-4 gap-4">
      {navList.map((item) => (
        <NavigationItem key={item.name} item={item} pathName={pathName} />
      ))}
    </ul>
  );
};

export default NavigationItemList;
