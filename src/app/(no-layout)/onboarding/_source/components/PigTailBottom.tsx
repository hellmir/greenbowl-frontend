import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const PigTailBottom = () => {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        {
          y: -20,
        },
        {
          y: 0,
          repeat: -1,
          yoyo: true,
          ease: "power3.out",
          duration: 0.3,
        }
      );
    },
    { scope: ref }
  );

  return (
    <svg
      ref={ref}
      width="90"
      height="80"
      viewBox="0 0 47 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pigTailBottom"
    >
      <path
        d="M26.7014 42.5363C26.4924 42.602 26.2741 42.4649 26.2427 42.248L25.8141 39.2906C25.7707 38.9905 26.0986 38.7772 26.3554 38.9385L29.6345 40.9991C29.8912 41.1605 29.8412 41.5485 29.552 41.6395L26.7014 42.5363Z"
        className=" fill-content-secondary"
      />
      <path
        d="M16.4001 7.10309C39.0188 25.7484 22.8853 37.0903 21.5534 32.8028C20.2215 28.5154 33.5699 32.3137 27.0472 41.3927
"
        className=" stroke-content-secondary"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PigTailBottom;
