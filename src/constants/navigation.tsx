import { NavItem } from "@/components/navigation/types/item";

import RecipeIcon from "@/components/icons/RecipeIcon";
import FridgeIcon from "@/components/icons/Fridge";
import BookmarkIcon from "@/components/icons/Bookmark";
import DietIcon from "@/components/icons/DietIcon";

export const navList: NavItem[] = [
  { name: "냉장고", icon: FridgeIcon, href: "/myFridge" },
  { name: "레시피", icon: RecipeIcon, href: "/recipe" },
  { name: "식단", icon: BookmarkIcon, href: "/diet" },
  { name: "저장", icon: DietIcon, href: "/save" },
];

// export const navIconList = [FridgeIcon, RecipeIcon, BookmarkIcon, DietIcon];
