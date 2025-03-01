import { NavItem } from "./types/item";

import Link from "next/link";

interface Props {
  item: NavItem;
  pathName: string;
}

const NavigationItem = ({ item, pathName }: Props) => {
  const isCurrentPath = pathName.includes(item.href);
  const Icon = item.icon;

  return (
    <li className="w-full">
      <Link href={item.href} className=" h-full inline-block w-full">
        <div
          className={`h-full flex flex-col justify-center items-center  paragraph-xs ${isCurrentPath ? "text-foundation-primary" : "text-content-tertiary"}`}
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
