import { Swiper, SwiperSlide } from "swiper/react";
import { questions } from "../constants/questions";
import Question from "./Question";

import "swiper/css";
import { useEffect, useRef } from "react";
import { Swiper as TSwiper } from "swiper/types";

interface Props {
  handleClickAnswer: (questionId: number, answerId: number) => void;
  answers: number[];
  currentIdx: number;
}

const QuestionSwiper = ({ handleClickAnswer, answers, currentIdx }: Props) => {
  const swiperRef = useRef<TSwiper>(null);

  useEffect(() => {
    swiperRef.current?.slideTo(currentIdx);
  }, [currentIdx]);
  return (
    <Swiper
      slidesPerView={1}
      allowTouchMove={false}
      speed={600}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {questions.map((question, idx) => (
        <SwiperSlide key={question.id}>
          <Question
            question={question}
            handleClickAnswer={handleClickAnswer}
            selectedAnswer={answers[idx]}
            currentIdx={currentIdx}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default QuestionSwiper;
