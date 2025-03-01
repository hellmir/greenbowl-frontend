"use client";

import { Button } from "@/components/ui/button";
import FirstOnboarding from "./_source/components/first";
import FourthOnboarding from "./_source/components/fourth/FourthOnboarding";
import Header from "./_source/components/Header";
import PigTailBottom from "./_source/components/PigTailBottom";
import SecondOnboarding from "./_source/components/second";
import ThirdOnboarding from "./_source/components/third/ThirdOnboarding";
import { useEffect, useRef, useState } from "react";

const Page = () => {
  const observeTarget = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          setIsVisible(!isIntersecting);
        });
      },
      { root: document.querySelector("#header"), threshold: 1 }
    );

    if (observeTarget.current) observer.observe(observeTarget.current);

    return () => observer.disconnect();
  }, []);

  console.log(isVisible);
  return (
    <div className="relative">
      <Header isChangeHeader={isVisible} />
      <FirstOnboarding observeTarget={observeTarget} />
      <SecondOnboarding />
      <ThirdOnboarding />
      <FourthOnboarding />
      {!isVisible && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-0 z-30">
          <PigTailBottom />
        </div>
      )}
      {isVisible && (
        <div className="px-4">
          <Button variant={"bottom"} className="bottom-5">
            시작하기
          </Button>
        </div>
      )}
    </div>
  );
};

export default Page;
