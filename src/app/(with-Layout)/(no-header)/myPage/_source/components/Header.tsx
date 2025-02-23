import SettingIcon from "@/components/icons/SettingIcon";
import route from "@/constants/route";
import Link from "next/link";

const MyPageHeader = () => {
  return (
    <header className="top-0 h-[3.375rem] w-full max-w-[35.5rem] fixed z-30 bg-foundation-secondary">
      <div className=" w-full h-full flex items-center justify-center relative">
        <p className=" heading-m text-content-secondary">마이 페이지</p>
        <div className="absolute right-0">
          <Link href={route.config.root}>
            <SettingIcon fill="content-tertiary" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MyPageHeader;
