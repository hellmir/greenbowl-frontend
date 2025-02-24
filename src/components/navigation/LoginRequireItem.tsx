"use client";

import { useRouter } from "next/navigation";
import { NavItem } from "./types/item";

import { useSession } from "next-auth/react";
import { useState } from "react";
import LoginRequiredModal from "../modal/LoginRequiredModal";
import route from "@/constants/route";

interface Props {
  item: NavItem;
  pathName: string;
}

const NavigationLoginRequireItem = ({ item, pathName }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();
  const session = useSession();

  const isCurrentPath = pathName.includes(item.href);
  const Icon = item.icon;

  const handleClick = () => {
    if (session.status === "unauthenticated") {
      setIsActive(true);
      return;
    }

    router.push(item.href);
  };
  const handleOkBtn = () => {
    router.push(route.login.root);
  };
  return (
    <>
      <li onClick={handleClick} className="w-full ">
        <div
          className={`hover:cursor-pointer h-full flex flex-col justify-center items-center  paragraph-xs ${isCurrentPath ? "text-foundation-primary" : "text-content-tertiary"}`}
        >
          <Icon
            fill={`${isCurrentPath ? "foundation-primary" : "content-quinary"}`}
          />
          <p>{item.name}</p>
        </div>
      </li>
      <LoginRequiredModal
        handleOkBtn={handleOkBtn}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
};

export default NavigationLoginRequireItem;
