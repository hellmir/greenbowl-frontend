"use client";

import "swiper/css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Props {
  children: React.ReactNode;
  direction: "left" | "right";
}
interface State {
  isActive: boolean;
}
gsap.registerPlugin(useGSAP);

const SwiperContainer = ({ children, direction }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(true);

  const { contextSafe } = useGSAP({ scope: containerRef });
  const remove = contextSafe(() => {
    const directionX = isActive ? 0 : "-100vw";
    const goalX = isActive ? "-100vw" : 0;
    const tween = gsap.fromTo(
      containerRef.current,
      {
        x: directionX,
      },
      {
        x: goalX,
        onComplete: () => setIsActive(!isActive),
      }
    );
  });

  return (
    <div className="content" ref={containerRef}>
      {isActive && children}

      <button onClick={remove} className=" bottom-24 w-64 h-28 mb-[50px]">
        테스트 버튼
      </button>
    </div>
  );
};

export default SwiperContainer;
