"use client";

import Header from "./Header";
import { useState } from "react";
import QuestionSwiper from "./QuestionSwiper";
import {
  ChronicDiseaseOption,
  CommonOption,
  Question,
  questions,
} from "../constants/questions";
import { useRouter } from "next/navigation";
import Progress from "./Progress";
import { useFullscreenModalStore } from "@/store/fullscreenModalStore";
import Result from "./result";
import calculateTest, { IResult } from "../calculate";

interface SingleAnswer {
  name: Exclude<Question["name"], "chronicDisease">;
  selected: CommonOption["value"] | "";
}

interface ChronicDiseaseAnswer {
  name: "chronicDisease";
  selected: ChronicDiseaseOption["value"][];
}

export type Answer = SingleAnswer | ChronicDiseaseAnswer;

export type HandleClickAnswer = (
  questionName: Question["name"],
  answerValue: ChronicDiseaseOption["value"] | CommonOption["value"],
  isMultiple: boolean,
  isMultipleReset: boolean
) => void;

const TestContainer = () => {
  const [answers, setAnswers] = useState<Answer[]>(
    questions.map((question) => {
      if (question.name === "chronicDisease") {
        return { name: question.name, selected: [] };
      }
      return { name: question.name, selected: "" };
    })
  );

  const [currentIdx, setCurrentIdx] = useState(0);
  const { play } = useFullscreenModalStore();

  const router = useRouter();

  const handleClickBackIcon = () => {
    if (currentIdx === 0) {
      router.back();
      return;
    }
    setCurrentIdx((currentIdx) => currentIdx - 1);
  };

  const baseHandleClickAnswer = (
    questionName: Question["name"],
    answerValue: ChronicDiseaseOption["value"] | CommonOption["value"],
    isMultiple: boolean
  ) => {
    setAnswers((answers) =>
      answers.map((answer) => {
        if (answer.name === questionName) {
          if (answer.name === "chronicDisease") {
            const newValue = answerValue as ChronicDiseaseOption["value"];
            return answer.selected?.includes(newValue)
              ? {
                  ...answer,
                  selected: answer.selected.filter(
                    (value) => value !== newValue
                  ),
                }
              : {
                  ...answer,
                  selected: [...answer.selected, newValue].filter(
                    (v) => v !== "none"
                  ),
                };
          }
          const newValue = answerValue as CommonOption["value"];
          return { ...answer, selected: newValue };
        }
        return answer;
      })
    );
    handleClickNext(isMultiple);
  };

  const handleClickAnswerWithNone = (
    questionName: "chronicDisease",
    answerValue: "none"
  ) => {
    setAnswers((answers) =>
      answers.map((answer) => {
        if (answer.name === questionName) {
          return { ...answer, selected: [answerValue] };
        }
        return answer;
      })
    );
  };

  const handleClickAnswer = (
    questionName: Question["name"],
    answerValue: ChronicDiseaseOption["value"] | CommonOption["value"],
    isMultiple: boolean,
    isMultipleReset: boolean
  ) => {
    if (isMultipleReset && questionName === "chronicDisease") {
      handleClickAnswerWithNone(questionName, "none");
    } else {
      baseHandleClickAnswer(questionName, answerValue, isMultiple);
    }
  };

  const handleClickNext = (isMultiple: boolean) => {
    if (currentIdx === questions.length - 1) {
      const result = calculateTest(answers);
      play<IResult>(Result, result);
    }
    if (isMultiple) {
      return;
    }

    setCurrentIdx((currentIdx) => currentIdx + 1);
  };

  return (
    <div className="px-4 bg-scale-yellowgreen-100 min-h-screen">
      <Header handleClickBackIcon={handleClickBackIcon} />
      <Progress currentIdx={currentIdx} />
      <QuestionSwiper
        handleClickAnswer={handleClickAnswer}
        answers={answers}
        currentIdx={currentIdx}
        handleClickNext={handleClickNext}
      />
    </div>
  );
};

export default TestContainer;
