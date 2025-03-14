import LogoType from "@/components/svg/LogoType";
import route from "@/constants/route";
import Link from "next/link";

const Header = ({ isChangeHeader }: { isChangeHeader: boolean }) => {
  return (
    <header className="bg-foundation-secondary top-0 z-30 sticky w-full  mx-auto h-14 ">
      {isChangeHeader ? (
        <div className=" px-4 flex items-center justify-between h-full">
          <div className="w-28 h-4 logo">
            <LogoType />
          </div>
          <Link
            className="text-foundation-primary heading-xs"
            href={route.onboarding.login}
          >
            로그인
          </Link>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="w-28 h-4 logo">
            <LogoType />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
