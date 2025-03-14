"use client";

import imagePath from "@/constants/imagePath";
import route from "@/constants/route";
import { useHeaderStore } from "@/store/headerStore";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import MyPageBtn from "./MyPageBtn";

const noneHeaderRoutes: string[] = [];

const MainHeader = () => {
  const { headerType, setHeaderType } = useHeaderStore();
  const path = usePathname() as string;
  const isNoneHeader = noneHeaderRoutes.includes(path);

  useEffect(() => {
    setHeaderType(isNoneHeader ? "none" : "show");
  }, [isNoneHeader, setHeaderType]);

  return (
    <>
      {headerType === "show" && (
        <header className="h-[3.375rem] px-4 top-0 w-full max-w-[37.5rem] flex items-center justify-between sticky z-10 bg-foundation-quarternary">
          <Link href={route.recipe.root}>
            <Image
              className=" hover:cursor-pointer"
              src={imagePath.logo.src}
              alt={imagePath.logo.alt}
              height={12}
              width={118}
            />
          </Link>
          <MyPageBtn />
        </header>
      )}
    </>
  );
};

export default MainHeader;
