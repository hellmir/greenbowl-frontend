import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import FridgeIcon from "@/components/icons/Fridge";
import route from "@/constants/route";
import Link from "next/link";

const Empty = () => {
  return (
    <Link href={route.myFridge.myIngredient}>
      <div className="flex items-center justify-between w-full pl-4 pr-3 py-2 rounded-xl text-foundation-secondary bg-foundation-primary">
        <div>
          <div className="flex items-center">
            <div className="mr-1 heading-s">냉장고가기</div>
            <ArrowRightIcon stroke="foundation-secondary" />
          </div>
          <div className="label-xs">냉장고에서 재료를 선택해 보세요.</div>
        </div>
        <div>
          <FridgeIcon width={44} height={44} fill="foundation-secondary" />
        </div>
      </div>
    </Link>
  );
};

export default Empty;
