"use client";

import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import CircleXIcon from "@/components/icons/CircleXIcon";
import ExitIcon from "@/components/icons/ExitIcon";
import LockIcon from "@/components/icons/LockIcon";
import NoteIcon from "@/components/icons/NoteIcon";
import route from "@/constants/route";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const MenuItem = ({
  icon: Icon,
  label,
  handleClick,
}: {
  icon: React.ElementType;
  label: string;
  handleClick: () => void;
}) => (
  <li
    onClick={handleClick}
    className="flex hover:cursor-pointer items-center h-12 justify-between"
  >
    <button className="flex items-center w-full text-left">
      <Icon fill="content-quarternary" />
      <span className="ml-1">{label}</span>
    </button>
    <ArrowRightIcon stroke="content-tertiary" />
  </li>
);

const MenuSection = ({
  title,
  items,
}: {
  title: string;
  items: { icon: React.ElementType; label: string; handleClick: () => void }[];
}) => (
  <section className="text-content-tertiary label-s">
    <h2 className="h-12 flex items-center text-content-secondary">{title}</h2>
    <ul>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          handleClick={item.handleClick}
        />
      ))}
    </ul>
  </section>
);

const SettingsMenu = () => {
  const router = useRouter();

  return (
    <nav className="mt-[3.275rem] flex flex-col gap-3">
      <MenuSection
        title="서비스 이용 관련"
        items={[
          {
            icon: NoteIcon,
            label: "서비스 이용약관",
            handleClick: () => router.push(route.terms.root),
          },
          {
            icon: LockIcon,
            label: "개인정보 처리방침",
            handleClick: () => router.push(route.privacy.root),
          },
        ]}
      />
      <MenuSection
        title="계정 관련"
        items={[
          {
            icon: ExitIcon,
            label: "로그아웃",
            handleClick: async () => await signOut({ callbackUrl: "/recipe" }),
          },
          {
            icon: CircleXIcon,
            label: "탈퇴하기",
            handleClick: () => router.push(route.myPage.deleteAccount),
          },
        ]}
      />
    </nav>
  );
};

export default SettingsMenu;
