import Image from "next/image";
import SwiperTags from "./SwiperTags";
import BookmarkStrokeIcon from "@/components/icons/BookmarkStroke";

const TipItem = () => {
  return (
    <div className="flex flex-col gap-16 relative">
      <div className="px-12 py-20 rounded-b-[12px] flex flex-col gap-16">
        <div className=" absolute right-0 top-3">
          <BookmarkStrokeIcon stroke="content-tertiary" />
        </div>
        <div className="flex gap-16 ">
          <Image
            src={"/image/img.png"}
            alt="팁이미지"
            height={86}
            width={86}
            className="rounded-[8px] object-cover overflow-hidden flex-shrink-0"
          />
          <div className="flex flex-col gap-[4px]">
            <p className=" heading-s w-10/12">
              식재료 소분의 모든 것! 냉장고 관리 시작하기
            </p>
            <p className=" heading-xs text-content-tertiary">
              한 번 배우면 평생 써먹는 식재료 소분 꿀팁 대공개
            </p>
          </div>
        </div>
        <div className=" relative paragraph-xs ">
          <SwiperTags />
          <div
            className=" z-20 absolute top-0 w-[30px] h-full right-0"
            style={{
              background:
                "linear-gradient(to left, #fff -30%, rgba(255,255,255,0) 100%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TipItem;
