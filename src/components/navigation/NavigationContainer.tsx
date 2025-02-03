import { NavItem } from "./types/item";

import NavigationItemList from "./ItemList";

const items: NavItem[] = [
  { name: "냉장고", svg: "", href: "/myFridge" },
  { name: "레시피", svg: "", href: "/recipe" },
  { name: "식단", svg: "", href: "/diet" },
  { name: "저장", svg: "", href: "/save" },
];

const NavigationContainer = () => {
  return (
    <nav className=" fixed bottom-0 max-w-sm w-full">
      <NavigationItemList items={items} />
    </nav>
  );
};

export default NavigationContainer;
