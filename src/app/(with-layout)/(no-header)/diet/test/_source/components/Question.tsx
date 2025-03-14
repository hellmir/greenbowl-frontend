import SelectButton from "./SelectButton";
import {
  ChronicDiseaseOption,
  Question as IQuestion,
} from "../constants/questions";
import { Answer, HandleClickAnswer } from ".";
import { Button } from "@/components/ui/button";

interface Props {
  question: IQuestion;
  handleClickAnswer: HandleClickAnswer;
  selectedAnswer: Answer;
  currentIdx: number;
  handleClickNext: (isMultiple: boolean) => void;
}

const Question = ({
  question,
  handleClickAnswer,
  selectedAnswer,
  currentIdx,
  handleClickNext,
}: Props) => {
  return (
    <div className="heading-m flex flex-col items-center mt-[4.5rem]">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-foundation-primary mb-2">{`Q${question.id + 1}.`}</div>
        <p className="whitespace-pre text-center">{question.question}</p>
      </div>

      {<question.character isPlay={currentIdx === question.id} />}
      <div className="grid grid-cols-2 gap-3 w-full mb-40">
        {question.options.map((option) => {
          const isSelected =
            selectedAnswer.name === "chronicDisease"
              ? selectedAnswer.selected.includes(
                  option.value as ChronicDiseaseOption["value"]
                )
              : selectedAnswer.selected === option.value;

          const isMultipleReset = option.value === "none";
          return (
            <SelectButton
              key={option.label}
              selected={isSelected}
              onClick={() => {
                if (currentIdx !== question.id) return;
                handleClickAnswer(
                  question.name,
                  option.value,
                  question.isMultiple,
                  isMultipleReset
                );
              }}
            >
              {option.label}
            </SelectButton>
          );
        })}
      </div>
      {question.isMultiple && (
        <Button
          disabled={selectedAnswer.selected.length === 0}
          onClick={() => handleClickNext(false)}
          className="fixed w-full bottom-0 mb-20"
        >
          선택완료
        </Button>
      )}
    </div>
  );
};

export default Question;
