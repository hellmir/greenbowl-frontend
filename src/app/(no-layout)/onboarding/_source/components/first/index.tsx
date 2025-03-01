"use client";

import { Button } from "@/components/ui/button";
import BackgroundSvg from "./backgroundSvg";
import Link from "next/link";
import route from "@/constants/route";
import DietOnboardCharacter from "@/components/character/DietOnboardCharacter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const FirstOnboarding = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      document.querySelectorAll(".firstTexts > span").forEach((textBox) =>
        tl.fromTo(
          textBox,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
          },
          "<0.3"
        )
      );
      tl.fromTo(
        document.querySelector(".firstStartBtn"),
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1 }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className=" relative h-screen min-h-[500px]">
      <div className="absolute inset-0 top-0 -z-50">
        <BackgroundSvg />
      </div>

      <div className="h-screen min-h-[500px] z-20 px-7 w-full flex flex-col items-center pt-20 gap-6 ">
        <p className="whitespace-pre text-center heading-l text-content-primary firstTexts">
          <span className="block">{"나의 건강을 담은 영양가 있는\n"}</span>
          <span className="block">{"맞춤형 AI 요리 코치\n"}</span>

          <span className="block">
            <span className="text-foundation-primary">그린볼</span> 에 오신걸
            환영해요!
          </span>
        </p>

        <Link
          href={route.onboarding.login}
          className="w-full flex flex-col items-center firstStartBtn"
        >
          <Button className="w-1/2 h-10 rounded-xl">시작하기</Button>
        </Link>

        <div className="mt-12 landscape:mt-6 mainCharacter">
          <DietOnboardCharacter />
        </div>
      </div>
    </div>
  );
};

export default FirstOnboarding;
