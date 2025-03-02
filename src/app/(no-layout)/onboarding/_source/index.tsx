"use client";
import { useRef, useState, useEffect } from "react";

import FirstOnboarding from "./components/first";
import FourthOnboarding from "./components/fourth/FourthOnboarding";
import PigTailBottom from "./components/PigTailBottom";
import SecondOnboarding from "./components/second";
import ThirdOnboarding from "./components/third/ThirdOnboarding";
import Header from "./components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import route from "@/constants/route";

const Onboarding = () => {
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
          <Link href={route.onboarding.login}>
            <Button variant={"bottom"} className="bottom-5">
              시작하기
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
