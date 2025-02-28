import { NavItem } from "@/components/navigation/types/item";

import RecipeIcon from "@/components/icons/RecipeIcon";
import FridgeIcon from "@/components/icons/Fridge";
import DietIcon from "@/components/icons/DietIcon";
import MyPageIcon from "@/components/icons/MyPageIcon";
import route from "./route";

export const navList: NavItem[] = [
  {
    name: "레시피",
    icon: RecipeIcon,
    href: route.recipe.root,
    isLoginRequire: false,
  },
  {
    name: "냉장고",
    icon: FridgeIcon,
    href: route.myFridge.myIngredient,
    isLoginRequire: true,
  },
  {
    name: "식단코치",
    icon: DietIcon,
    href: route.diet.root,
    isLoginRequire: false,
  },
  {
    name: "마이",
    icon: MyPageIcon,
    href: route.myPage.root,
    isLoginRequire: true,
  },
];
