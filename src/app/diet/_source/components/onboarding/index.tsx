"use client";

import DietOnboardCharacter from "@/components/character/DietOnboardCharacter";
import { Button } from "@/components/ui/button";
import imagePath from "@/constants/imagePath";
import Image from "next/image";
import TextContainer from "./TextContainer";
import { useState } from "react";

const OnboardingContainer = () => {
  const [stage, setStage] = useState(0);

  const handleClickBtn = () => {
    if (stage === 2) return;
    setStage((prev) => prev + 1);
  };
  return (
    <div className=" relative min-h-screen -mx-4">
      <Image
        className="absolute h-full z-20 object-cover"
        src={imagePath.dietOnboarding.src}
        alt={imagePath.dietOnboarding.alt}
        fill={true}
      />

      <div className="inline-block  z-30 space-y-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
        <div className="flex flex-col justify-center">
          <TextContainer stage={stage} />
          <div className="w-full flex justify-center">
            <DietOnboardCharacter />
          </div>
        </div>
      </div>
      <div className="absolute z-30 w-full bottom-20 px-4">
        <Button onClick={handleClickBtn} className="heading-m w-full">
          {stage === 0 && "만나서 반가워요"}
          {stage === 1 && "해볼래요"}
          {stage === 2 && "알겠어요"}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingContainer;
