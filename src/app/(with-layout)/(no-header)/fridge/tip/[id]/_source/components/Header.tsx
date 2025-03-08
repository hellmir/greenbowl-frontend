"use client";

import BackIcon from "@/components/icons/backIcon";
import ShareBottomSheet from "@/components/share/ShareBottomSheet";
import { deploymentUrl } from "@/constants/url";
import { Bookmark } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { GoShareAndroid } from "react-icons/go";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickBack = () => router.back();
  const requestUrl = useMemo(() => {
    if (typeof window !== "undefined") {
      return `${deploymentUrl}${pathname}`;
    }
    return "";
  }, [pathname]);

  console.log(requestUrl);

  return (
    <header className=" top-0 z-20 bg-foundation-secondary sticky w-[calc(100%+32px)] -ml-4 -mr-[50px] px-4">
      <div className="flex h-14 items-center justify-between relative">
        <BackIcon stroke="content-tertiary" onClick={handleClickBack} />
        <div className="flex gap-2">
          <ShareBottomSheet title={title} requestUrl={requestUrl}>
            <GoShareAndroid className="w-6 h-6 mr-4 cursor-pointer text-content-tertiary" />
          </ShareBottomSheet>

          <Bookmark className="w-6 h-6 cursor-pointer text-content-tertiary" />
        </div>
      </div>
    </header>
  );
};

export default Header;
