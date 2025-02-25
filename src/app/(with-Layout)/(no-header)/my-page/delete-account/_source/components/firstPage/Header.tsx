"use client";

import XIcon from "@/components/icons/XIcon";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleClickXIcon = () => router.back();
  
  return (
    <header className="h-[3.375rem] top-0 w-full max-w-[35.5rem]  sticky z-10 bg-foundation-secondary">
      <div className=" relative flex items-center justify-center h-full">
        <div className=" absolute left-0">
          <XIcon onClick={handleClickXIcon} stroke="content-tertiary" />
        </div>
        <p className="heading-m text-content-secondary">회원 탈퇴</p>
      </div>
    </header>
  );
};

export default Header;
