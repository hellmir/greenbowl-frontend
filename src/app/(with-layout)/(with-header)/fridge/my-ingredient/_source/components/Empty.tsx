import { Button } from "@/components/ui/button";
import route from "@/constants/route";
import Link from "next/link";
import EmptySvg from "../svg/EmptySvg";

const Empty = () => {
  return (
    <div className=" ">
      <div className="pb-10 h-full min-h-[75vh] flex items-center justify-center relative">
        <EmptySvg />
      </div>
      <Link href={route.myFridge.addIngredient}>
        <Button type="button" variant={"bottom"} className=" w-full">
          식품 추가하기
        </Button>
      </Link>
    </div>
  );
};

export default Empty;
