import imagePath from "@/constants/imagePath";
import Image from "next/image";

const SecondOnboarding = () => {
  return (
    <div className="px-4">
      <div className="mt-14 flex flex-col gap-3 text-center whitespace-pre justify-center">
        <span className="text-foundation-primary heading-s">레시피</span>
        <p className="heading-l text-content-primary">
          {"가진 식재료로 할 수 있는\n메뉴를 빠르게 찾고 싶을 때"}
        </p>
        <p className=" paragraph-xs text-content-secondary">
          {
            "재료만 간단히 입력하면 AI가 맞춤형 레시피를 추천해줘요.\n집에있는 재료로 건강하고 맛있는 한 끼를 요리해보세요."
          }
        </p>
        <div className="flex justify-center mt-11 mb-16">
          <div className="relative ">
            <Image
              src={imagePath.onboarding.recipe.src}
              alt={imagePath.onboarding.recipe.alt}
              width={288}
              height={204}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondOnboarding;
