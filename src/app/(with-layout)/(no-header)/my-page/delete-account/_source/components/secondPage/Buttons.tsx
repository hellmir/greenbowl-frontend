"use client";

import CircleCheckBox from "@/components/checkbox/CircleCheckBox";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Buttons = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className=" relative mt-9 mb-14 z-10 bg-foundation-secondary">
      <div className="flex items-center mb-6">
        <CircleCheckBox
          active={isChecked}
          onClick={() => setIsChecked((p) => !p)}
        />
        <p className="ml-1 label-s text-content-primary">
          유의사항을 모두 확인하였습니다.
        </p>
      </div>
      <div className="flex gap-3">
        <Button
          variant={"bottom"}
          className=" bg-content-quinary text-content-secondary"
        >
          탈퇴하기
        </Button>
        <Button variant={"bottom"} className="text-foundation-secondary">
          취소
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
