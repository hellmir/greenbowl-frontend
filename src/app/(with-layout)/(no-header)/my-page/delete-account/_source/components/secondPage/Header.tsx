"use client";

import BackIcon from "@/components/icons/backIcon";

const Header = () => {
  return (
    <header className="h-[3.375rem] top-0 w-full max-w-[35.5rem] sticky z-10 bg-foundation-secondary">
      <div className=" relative flex items-center justify-center h-full">
        <div className=" absolute left-0">
          <BackIcon stroke="content-tertiary" />
        </div>
        <p className="heading-m text-content-secondary">회원 탈퇴</p>
      </div>
    </header>
  );
};

export default Header;
