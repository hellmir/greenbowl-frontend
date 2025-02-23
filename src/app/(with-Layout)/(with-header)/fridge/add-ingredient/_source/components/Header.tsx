"use client";

import BackIcon from "@/components/icons/backIcon";
import { useHeaderStore } from "@/store/headerStore";
import { useEffect } from "react";
import AddCustomIngredient from "./bottomSheet/AddCustomIngredient";

const Header = () => {
  const { setHeaderType } = useHeaderStore();

  useEffect(() => {
    setHeaderType("none");
    return () => setHeaderType("show");
  }, [setHeaderType]);
  return (
    <div className="bg-foundation-secondary sticky w-full max-w-[35.5rem] top-0 flex items-center h-[3.375rem] justify-between">
      <BackIcon stroke="content-tertiary" />
      <AddCustomIngredient />
    </div>
  );
};

export default Header;
