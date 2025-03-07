import ErrorCharacter from "@/components/character/ErrorCharacter";
import { Button } from "@/components/ui/button";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 not-found",
};

const NotFound = () => {
  return (
    <div className="w-full h-screen  pb-20 px-4 ">
      <div className=" text-center flex flex-col items-center justify-center h-full ">
        <ErrorCharacter />
        <div className="mt-5">
          <p className="text-content-secondary heading-m mb-1">
            존재하지 않는 페이지 입니다.
          </p>
          <p className=" whitespace-pre text-content-quarternary mb-6 paragraph-xs">
            {
              "주소가 잘못 입력되었거나 변경 혹은 삭제되어\n 사용하실 수 없습니다."
            }
          </p>
          <p className=" whitespace-pre text-content-quarternary paragraph-xs">
            {"주소를 다시 확인하시거나\n그린볼 메인 페이지로 이동하세요."}
          </p>
        </div>
      </div>
      <div className="">
        <Button className=" " variant={"bottom"}>
          그린볼 메인 페이지로 이동하기
        </Button>
      </div>
    </div>
  );
};
export default NotFound;
