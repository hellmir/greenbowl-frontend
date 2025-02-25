"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import BaseIcon from "../icons/BaseIcon";
import { BaseIconProps } from "../icons/types/icon";

interface BaseCheckBoxProps extends BaseIconProps {
  active: boolean;
}

const CircleCheckBox = ({ active = false, onClick }: BaseCheckBoxProps) => {
  const checkRef = useRef<SVGPathElement>(null);

  const handleClick = () => {
    onClick?.();
  };

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      checkRef.current,
      {
        strokeDashoffset: 50,
        strokeDasharray: 50,
        duration: 1,
        ease: "power2.inOut",
      },
      {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );
    if (active) {
      tl.restart();
    }
  }, [active]);

  return (
    <BaseIcon width={24} height={24} onClick={handleClick}>
      <path
        d="M23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12Z"
        stroke="#BEBEBE"
        strokeWidth="1.5"
      />

      <path
        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"
        className={`${active ? "fill-foundation-primary" : "fill-content-quinary"}`}
      />

      <path
        ref={checkRef}
        d="M6.38867 11.7523L10.7297 15.9652L16.9977 8.61621"
        className="stroke-white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {!active && (
        <path
          d="M6.38867 11.7523L10.7297 15.9652L16.9977 8.61621"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </BaseIcon>
  );
};

export default CircleCheckBox;
