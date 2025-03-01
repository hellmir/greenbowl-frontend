"use client";

import FirstOnboarding from "./_source/components/first";
import Header from "./_source/components/Header";
import PigTailBottom from "./_source/components/PigTailBottom";
import SecondOnboarding from "./_source/components/second";

const page = () => {
  return (
    <div className="relative">
      <Header />
      <FirstOnboarding />
      <SecondOnboarding />
      <div className="fixed left-1/2 -translate-x-1/2 bottom-0 z-30">
        <PigTailBottom />
      </div>
    </div>
  );
};

export default page;
