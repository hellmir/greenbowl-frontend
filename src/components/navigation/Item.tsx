import { NavItem } from "./types/item";

import Link from "next/link";

interface Props {
  item: NavItem;
  pathName: string;
}

const NavigationItem = ({ item, pathName }: Props) => {
  const isCurrentPath = pathName === item.href;

  return (
    <li className="w-full">
      <Link href={item.href}>
        <div
          className={`flex justify-center items-center h-[60px] ${isCurrentPath ? "text-blue-400" : ""}`}
        >
          {item.name}
        </div>
      </Link>
    </li>
  );
};

export default NavigationItem;
