"use client";

import imagePath from "@/constants/imagePath";
import Image from "next/image";
import NavigationLoginRequiredModal from "../modal/LoginRequiredModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import route from "@/constants/route";
import { useSession } from "next-auth/react";

const MyPageBtn = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const session = useSession();

  const handleClick = () => {
    if (session.status === "unauthenticated") {
      setIsActive(true);
      return;
    }

    router.push(route.myPage.root);
  };

  const handleOkBtn = () => {
    router.push(route.login.root);
  };

  return (
    <>
      <Image
        className=" hover:cursor-pointer"
        src={imagePath.profile.src}
        alt={imagePath.profile.alt}
        height={32}
        width={32}
        onClick={handleClick}
      />
      <NavigationLoginRequiredModal
        handleOkBtn={handleOkBtn}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
};

export default MyPageBtn;
