"use client";
import { useHeaderStore } from "@/store/headerStore";

import MainHeader from "./MainHeader";

const HeaderContainer = () => {
  const headerType = useHeaderStore((state) => state.headerType);
  const isHiddenHeader = headerType === "edit";

  return <>{isHiddenHeader ? <></> : <MainHeader />}</>;
};

export default HeaderContainer;
