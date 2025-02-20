"use client";

import Header from "./Header";

import { useState } from "react";
import QuestionSwiper from "./QuestionSwiper";
import { questions } from "../constants/questions";
import { useRouter } from "next/navigation";

const TestContainer = () => {
  const [answers, setAnswers] = useState<number[]>(
    Array.from({ length: questions.length }, () => 0)
  );
  const [currentIdx, setCurrentIdx] = useState(0);

  const router = useRouter();

  const handleClickBackIcon = () => {
    if (currentIdx === 0) {
      router.back();
      return;
    }

    setCurrentIdx((currentIdx) => currentIdx - 1);
  };

  const handleClickAnswer = (questionId: number, answerId: number) => {
    setAnswers((answers) =>
      answers.map((answer, idx) => {
        if (idx === questionId) return answerId;
        return answer;
      })
    );

    if (currentIdx === questions.length - 1) {
      return;
    }

    setCurrentIdx((currentIdx) => currentIdx + 1);
  };

  return (
    <div>
      <Header handleClickBackIcon={handleClickBackIcon} />
      <div className="h-1 mt-[3.375rem] w-[calc(100%+32px)] -ml-4 -mr-[50px] bg-foundation-primary mb-4"></div>
      <QuestionSwiper
        handleClickAnswer={handleClickAnswer}
        answers={answers}
        currentIdx={currentIdx}
      />
    </div>
  );
};

export default TestContainer;
