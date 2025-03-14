"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Progress = ({ currentIdx }: { currentIdx: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (currentIdx === 9) return;
      const widthPercentage = (currentIdx / 8) * 100;
      gsap.to(".progress", {
        width: `${widthPercentage}%`,
        duration: 0.3,
      });
    },
    { scope: ref, dependencies: [currentIdx] }
  );
  return (
    <div
      ref={ref}
      className="h-1 z-20 fixed mt-[3.375rem] max-w-[37.5rem] w-full -ml-4 bg-foundation-secondary"
    >
      <div className="progress bg-foundation-primary mb-4 h-1 w-full"></div>
    </div>
  );
};

export default Progress;
