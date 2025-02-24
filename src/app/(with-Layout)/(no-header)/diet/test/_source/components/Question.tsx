import SelectButton from "./SelectButton";
import { Question as IQuestion } from "../constants/questions";

interface Props {
  question: IQuestion;
  handleClickAnswer: (questionId: number, answerId: number) => void;
  selectedAnswer: number;
  currentIdx: number;
}

const Question = ({
  question,
  handleClickAnswer,
  selectedAnswer,
  currentIdx,
}: Props) => {
  return (
    <div className="heading-m flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-foundation-primary mb-2">{`Q${question.id + 1}.`}</div>
        <p className="whitespace-pre text-center">{question.question}</p>
      </div>

      {<question.character isPlay={currentIdx === question.id} />}
      <div className="grid grid-cols-2 gap-3 w-full">
        {question.options.map((option, idx) => {
          const isSelected = idx + 1 === selectedAnswer;
          return (
            <SelectButton
              key={option.label}
              selected={isSelected}
              onClick={() => {
                if (currentIdx !== question.id) return;
                handleClickAnswer(question.id, option.value);
              }}
            >
              {option.label}
            </SelectButton>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
