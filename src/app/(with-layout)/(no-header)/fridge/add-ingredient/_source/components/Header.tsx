"use client";

import BackIcon from "@/components/icons/backIcon";

import { useRouter } from "next/navigation";
import AddCustomIngredient from "./bottomSheet/AddCustomIngredient";

const Header = () => {
  const router = useRouter();
  const handleClickBackIcon = () => router.back();

  return (
    <div className=" px-4 bg-foundation-secondary sticky w-full top-0 flex items-center h-[3.375rem] justify-between z-10">
      <BackIcon onClick={handleClickBackIcon} stroke="content-tertiary" />
      <AddCustomIngredient />
    </div>
  );
};

export default Header;
