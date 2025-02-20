"use client";

import ExerciseCharacter from "@/components/character/ExerciseCharacter";

import { useState } from "react";

const page = () => {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className="mt-[100px]">
      <ExerciseCharacter isPlay={isPlay} />

      <button onClick={() => setIsPlay(!isPlay)}>버튼</button>
    </div>
  );
};

export default page;
