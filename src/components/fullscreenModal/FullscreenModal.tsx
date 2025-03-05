"use client";

import { useFullscreenModalStore } from "@/store/fullscreenModalStore";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

const FullscreenModal = () => {
  const { isOpen, setIsOpen } = useFullscreenModalStore();
  const pathName = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathName, setIsOpen]);

  return <>{isOpen && <FullscreenModalContent />}</>;
};

const FullscreenModalContent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { Component, close, props } = useFullscreenModalStore();

  const closeAnimation = () => {
    gsap.to(ref.current, {
      y: "100%",
      duration: 0.5,
      ease: "power4.out",
      onComplete: () => close(),
    });
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ref.current,
        {
          y: "100%",
        },
        {
          y: 0,
          duration: 1,
          ease: "power4.out",
        }
      );
    },
    { scope: ref }
  );

  return (
    <div className="flex justify-center items-center fixed inset-0 overflow-hidden z-50">
      <div
        ref={ref}
        className="top-0 fixed h-screen w-full max-w-[37.5rem] mx-auto bg-white "
      >
        <div className="h-full overflow-y-auto">
          <Component handleClose={closeAnimation} {...props} />
        </div>
      </div>
    </div>
  );
};

export default FullscreenModal;
