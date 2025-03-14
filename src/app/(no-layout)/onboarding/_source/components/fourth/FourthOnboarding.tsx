import imagePath from "@/constants/imagePath";
import Image from "next/image";
import BgEllipse from "../BgEllipse";

const FourthOnboarding = () => {
  return (
    <div className="px-4 relative overflow-hidden">
      <div className="mt-14 flex flex-col gap-3 text-center whitespace-pre justify-center">
        <span className="text-foundation-primary heading-s">식단 코치</span>
        <p className="heading-l text-content-primary">
          {"나의 몸에 맞는 식단을을\n구성하고 싶으시다면"}
        </p>
        <p className=" paragraph-xs text-content-secondary">
          {"AI 식단 코치를 통해 나를 위한 영양가 있는\n식단을 제안 받아보세요."}
        </p>
        <div className="flex justify-center mt-11 mb-16">
          <div className="relative ">
            <Image
              src={imagePath.onboarding.diet.src}
              alt={imagePath.onboarding.diet.alt}
              width={240}
              height={936}
            />
          </div>
        </div>
      </div>
      <div className=" absolute top-1/2  left-1/2 -translate-x-[50%] -translate-y-[50%] -z-30 overflow-hidden">
        <BgEllipse />
      </div>
    </div>
  );
};

export default FourthOnboarding;
