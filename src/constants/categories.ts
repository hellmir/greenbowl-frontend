import CondimentSvg from "@/components/svg/Condiment";
import EtcSvg from "@/components/svg/Etc";
import FruitSvg from "@/components/svg/Fruit";
import MeatSvg from "@/components/svg/Meat";
import MilkSvg from "@/components/svg/Milk";
import NutsSvg from "@/components/svg/Nuts";
import SeafoodSvg from "@/components/svg/Seafood";
import VegetableSvg from "@/components/svg/Vegetable";
import { JSX } from "react";

export interface Category {
  id: number;
  name: string;
  icon: () => JSX.Element;
}

export const categories: Category[] = [
  { id: 1, name: "채소", icon: VegetableSvg },
  { id: 2, name: "과일", icon: FruitSvg },
  { id: 3, name: "육류", icon: MeatSvg },
  { id: 4, name: "수산물", icon: SeafoodSvg },
  { id: 5, name: "조미료", icon: CondimentSvg },
  { id: 6, name: "가공/유제품", icon: MilkSvg },
  { id: 7, name: "견과/곡류", icon: NutsSvg },
  { id: 8, name: "기타", icon: EtcSvg },
];
