import DietOnboardCharacter from "@/components/character/DietOnboardCharacter";
import imagePath from "@/constants/imagePath";
import Image from "next/image";

const OnboardingContainer = () => {
  return (
    <div className=" relative min-h-screen -mx-4">
      <Image
        className=" absolute object-cover z-20"
        src={imagePath.dietOnboarding.src}
        alt={imagePath.dietOnboarding.alt}
        fill={true}
      />

      <div className="inline-block  z-30 space-y-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
        <div className="flex flex-col justify-center">
          <div className="min-w-60 mb-5 px-3 py-2 flex flex-col items-center bg-foundation-secondary border border-border-default label-s text-content-secondary rounded-xl text-center">
            <p>반가워요!</p>
            <p>저는 컨디션을 체크하여 맞춤형으로</p>
            <p>식단을 만들어주는 AI 식단코치,</p>
            <p>그린이에요.</p>
          </div>
          <div className="w-full flex justify-center">
            <DietOnboardCharacter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingContainer;
