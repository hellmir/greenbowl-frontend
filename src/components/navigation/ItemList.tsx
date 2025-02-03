"use client";

import NavigationItem from "./Item";

import { NavItem } from "./types/item";
import { usePathname } from "next/navigation";

interface Props {
  items: NavItem[];
}

const NavigationItemList = ({ items }: Props) => {
  const pathName = usePathname();
  return (
    <ul className="flex justify-between w-full">
      {items.map((item) => (
        <NavigationItem key={item.name} item={item} pathName={pathName} />
      ))}
    </ul>
  );
};

export default NavigationItemList;
