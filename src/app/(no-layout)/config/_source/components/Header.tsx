"use client";

import BackIcon from "@/components/icons/backIcon";
import { useRouter } from "next/navigation";

const ConfigHeader = () => {
  const router = useRouter();

  const handleClickBackIcon = () => router.back();
  return (
    <header className="h-[3.375rem] top-0 w-full max-w-[35.5rem] fixed z-10 bg-foundation-secondary">
      <div className=" relative flex items-center justify-center h-full">
        <div className=" absolute left-0">
          <BackIcon onClick={handleClickBackIcon} stroke="content-tertiary" />
        </div>
        <p className="heading-m text-content-secondary">설정</p>
      </div>
    </header>
  );
};

export default ConfigHeader;
