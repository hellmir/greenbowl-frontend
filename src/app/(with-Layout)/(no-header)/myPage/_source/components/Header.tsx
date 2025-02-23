import SettingIcon from "@/components/icons/SettingIcon";

const MyPageHeader = () => {
  return (
    <header className=" h-[3.375rem] w-full max-w-[35.5rem] fixed z-30 bg-foundation-secondary">
      <div className=" w-full h-full flex items-center justify-center relative">
        <p className=" heading-m text-content-secondary">마이 페이지</p>
        <div className="absolute">
          <SettingIcon fill="content-tertiary" />
        </div>
      </div>
    </header>
  );
};

export default MyPageHeader;
