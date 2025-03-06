"use client";

import BackIcon from "@/components/icons/backIcon";
import { Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { GoShareAndroid } from "react-icons/go";

const Header = () => {
  const router = useRouter();

  const handleClickBack = () => router.back();
  return (
    <header className=" top-0 z-20 bg-foundation-secondary sticky w-[calc(100%+32px)] -ml-4 -mr-[50px] px-4">
      <div className="flex h-14 items-center justify-between relative">
        <BackIcon stroke="content-tertiary" onClick={handleClickBack} />
        <div className="flex gap-2">
          <GoShareAndroid className="w-6 h-6 mr-4 cursor-pointer text-content-tertiary" />
          <Bookmark className="w-6 h-6 cursor-pointer text-content-tertiary" />
        </div>
      </div>
    </header>
  );
};

export default Header;
