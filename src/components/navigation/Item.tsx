import { NavItem } from "./types/item";

import Link from "next/link";

interface Props {
  item: NavItem;
  pathName: string;
}

const NavigationItem = ({ item, pathName }: Props) => {
  const isCurrentPath = pathName === item.href;
  const Icon = item.icon;

  return (
    <li className="w-full">
      <Link href={item.href}>
        <div
          className={`flex flex-col justify-center items-center h-[60px] text-paragraph-xs ${isCurrentPath ? "text-foundation-primary" : "text-content-tertiary"}`}
        >
          <Icon
            fill={`${isCurrentPath ? "foundation-primary" : "content-quinary"}`}
          />
          <p>{item.name}</p>
        </div>
      </Link>
    </li>
  );
};

export default NavigationItem;
