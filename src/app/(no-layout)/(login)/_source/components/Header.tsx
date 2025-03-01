"use client";

import BackIcon from "@/components/icons/backIcon";
import { useRouter } from "next/navigation";

const LoginHeader = () => {
  const router = useRouter();
  const handleClickBackIcon = () => {
    router.back();
  };
  return (
    <header className="h-[3.375rem] w-full max-w-[35.5rem] flex items-center justify-between fixed z-30 bg-foundation-secondary">
      <BackIcon onClick={handleClickBackIcon} stroke="content-tertiary" />
    </header>
  );
};

export default LoginHeader;
