import LogoType from "@/components/svg/LogoType";

const Header = () => {
  return (
    <div className="bg-foundation-secondary top-0 z-30 fixed w-full max-w-[37.5rem] mx-auto h-14 ">
      <div className="flex items-center justify-center h-full">
        <div className="w-28 h-4">
          <LogoType />
        </div>
      </div>
    </div>
  );
};

export default Header;
