import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const Header = () => {
  const router = useRouter();
  const handleClickArrowBack = () => {
    router.back();
  };
  return (
    <div className="top-0 sticky bg-foundation-tertiary">
      <div className="h-14 flex items-center justify-center w-full relative">
        <IoIosArrowBack
          className=" absolute left-0 cursor-pointer h-6 w-6"
          onClick={handleClickArrowBack}
        />
        <h2 className="heading-m text-content-secondary">AI 추천 메뉴</h2>
      </div>
    </div>
  );
};

export default Header;
