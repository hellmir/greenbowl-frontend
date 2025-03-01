import { Button } from "@/components/ui/button";
import imagePath from "@/constants/imagePath";
import route from "@/constants/route";
import Image from "next/image";
import Link from "next/link";

const Empty = () => {
  return (
    <div className=" ]">
      <div className="pb-10 h-full min-h-[75vh] flex items-center justify-center relative">
        <Image
          src={imagePath.FridgeEmpty.src}
          alt={imagePath.FridgeEmpty.alt}
          height={219}
          width={187}
        />
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
