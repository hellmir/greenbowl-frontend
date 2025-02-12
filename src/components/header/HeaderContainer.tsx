"use client";
import { useHeaderStore } from "@/store/headerStore";

import MainHeader from "./MainHeader";

const HeaderContainer = () => {
  const headerType = useHeaderStore((state) => state.headerType);
  const isHiddenHeader = headerType === "none";

  return <>{isHiddenHeader ? <></> : <MainHeader />}</>;
};

export default HeaderContainer;
