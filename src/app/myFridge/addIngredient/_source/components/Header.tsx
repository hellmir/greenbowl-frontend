"use client";

import BackIcon from "@/components/icons/backIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import { useHeaderStore } from "@/store/headerStore";
import { useEffect } from "react";

const Header = () => {
  const { setHeaderType } = useHeaderStore();

  useEffect(() => {
    setHeaderType("none");
    return () => setHeaderType("show");
  }, [setHeaderType]);
  return (
    <div className="bg-foundation-secondary sticky top-0 flex items-center h-[54px] justify-between">
      <BackIcon stroke="content-tertiary" />
      <PlusIcon stroke="content-tertiary" />
    </div>
  );
};

export default Header;
