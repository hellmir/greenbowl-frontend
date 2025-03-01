"use client";

import { useAlertStore } from "@/store/alertStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Alert = () => {
  const { isOpen } = useAlertStore();

  return <>{isOpen && <AlertContent />}</>;
};

const AlertContent = () => {
  const { isOpen, setIsOpen, message } = useAlertStore();

  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const tl = gsap.timeline({ onComplete: () => setIsOpen(false) });
      tl.fromTo(
        ref.current,
        {
          y: 70,
        },
        {
          y: 0,
        }
      );

      tl.to(
        ref.current,
        {
          opacity: 0,
          y: 70,
        },
        ">1"
      );
    },
    { scope: ref, dependencies: [isOpen] }
  );
  return (
    <>
      {isOpen && (
        <div
          ref={ref}
          className="fixed h-14 flex justify-start items-center w-72 bottom-20 left-1/2 transform -translate-x-1/2 gap-2.5 p-4 rounded-lg bg-black/80 z-50 "
        >
          <p className="flex-grow w-64 label-s text-center text-white">
            {message}
          </p>
        </div>
      )}
    </>
  );
};

export default Alert;
