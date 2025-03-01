"use client";

import { Button } from "@/components/ui/button";
import { useCategoryIngredientsStore } from "@/store/categoryIngredientsStore";
import { useFullscreenModalStore } from "@/store/fullscreenModalStore";
import CreateContainer from "./createConfig/CreateContainer";

const Bottom = () => {
  const { selectedIngredientsMap, reset } = useCategoryIngredientsStore();
  const { play } = useFullscreenModalStore();
  return (
    <div className="fixed bottom-0 py-3 flex w-full max-w-[35.5rem] bg-white z-40 border-t-border-default border">
      <div className=" flex w-full pr-8 md:pr-0">
        <Button
          onClick={() => reset()}
          className=" bg-content-quinary text-content-secondary w-4/12"
        >
          초기화
        </Button>

        <Button
          disabled={selectedIngredientsMap.size <= 0}
          onClick={() => play(CreateContainer)}
          className=" flex-grow ml-2 "
        >
          {selectedIngredientsMap.size}개 재료 추가하기
        </Button>
      </div>
    </div>
  );
};

export default Bottom;
