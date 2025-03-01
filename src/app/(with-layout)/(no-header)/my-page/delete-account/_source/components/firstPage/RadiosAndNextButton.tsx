"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const questions = [
  { id: 0, value: "기대했던 앱이 아니에요" },
  { id: 1, value: "이용이 번거롭고 불편해요" },
  { id: 2, value: "오류가 너무 많아요" },
  { id: 3, value: "재가입 해서 다시 이용하고 싶어요" },
];

const RadiosAndNextButton = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="mt-6 ">
      <div className="min-h-[69vh] flex flex-col gap-4">
        {questions.map((question) => {
          const isSelected = selected === question.id;
          return (
            <label
              key={question.id}
              htmlFor={`radio-${question.id}`}
              className=""
            >
              <div
                className={`w-full h-11 py-3 px-4 inline-block hover:cursor-pointer border rounded-xl ${isSelected ? "bg-scale-yellowgreen-100 border-foundation-primary" : "border-border-default"}`}
              >
                <p className="heading-s text-content-secondary">
                  {question.value}
                </p>
              </div>
              <Input
                id={`radio-${question.id}`}
                className="hidden"
                type="radio"
                checked={isSelected}
                name="question"
                value={question.value}
                onChange={() => setSelected(question.id)}
              />
            </label>
          );
        })}
      </div>
      <Button variant={"bottom"} type="button" disabled={selected === null}>
        다음
      </Button>
    </div>
  );
};

export default RadiosAndNextButton;
