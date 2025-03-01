import imagePath from "@/constants/imagePath";
import Image from "next/image";

const ThirdOnboarding = () => {
  return (
    <div className="px-4">
      <div className="mt-14 flex flex-col gap-3 text-center whitespace-pre justify-center">
        <span className="text-foundation-primary heading-s">냉장고</span>
        <p className="heading-l text-content-primary">
          {"냉장고를 효율적으로\n괸리하고 싶을 때"}
        </p>
        <p className=" paragraph-xs text-content-secondary">
          {
            "가진 식재료와 유통기한을 한눈에 쉽게 확인하면서\n낭비 없는 식재료의 보관부터 활용까지!."
          }
        </p>
        <div className="flex justify-center mt-11">
          <div className="relative ">
            <Image
              src={imagePath.onboarding.myIngredient.src}
              alt={imagePath.onboarding.myIngredient.src}
              width={288}
              height={204}
            />
          </div>
        </div>
        <div className="flex justify-center mt-11 mb-16">
          <div className="relative ">
            <Image
              src={imagePath.onboarding.tips.src}
              alt={imagePath.onboarding.tips.src}
              width={288}
              height={204}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdOnboarding;
