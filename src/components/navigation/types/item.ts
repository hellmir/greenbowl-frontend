import { FillIconProps } from "@/components/icons/types/icon";
import { FC } from "react";

export interface NavItem {
  name: string;
  icon: FC<FillIconProps>;
  href: string;
}
