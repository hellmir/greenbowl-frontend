import { Answer } from "./components";
import healthData from "./constants/healthData";

const calculateScore = (answer: Answer) => {
  if (typeof answer.selected !== "string") {
    if (answer.selected[0] === "none") return 5;
    if (answer.selected.length === 1) return 2;
    if (answer.selected.length >= 2) return 1;
  }

  if (answer.selected === "veryBad") return 1;
  if (answer.selected === "bad") return 2;
  if (answer.selected === "moderate") return 3;
  if (answer.selected === "good") return 4;
  if (answer.selected === "veryGood") return 5;

  return 0;
};

export interface IResult {
  score: number;
  advice: {
    priority: number;
    value: string;
  }[];
}

const calculateTest = (userResponses: Answer[]) => {
  const score = userResponses.reduce((acc, cur) => {
    return acc + calculateScore(cur);
  }, 0);

  const advice: { priority: number; value: string }[] = [];
  const MAX_ADVICE = 5;

  userResponses.forEach((answer) => {
    if (answer.name === "chronicDisease") {
      answer.selected.forEach((s) =>
        advice.push({
          priority: healthData.chronicDisease.result[s].priority,
          value: healthData.chronicDisease.result[s].value,
        })
      );
      return;
    }
    if (answer.selected === "") return;
    advice.push({
      priority: healthData[answer.name].result[answer.selected].priority,
      value: healthData[answer.name].result[answer.selected].value,
    });
  });

  const sortAndSliceAdvice = advice
    .toSorted((a, b) => a.priority - b.priority)
    .splice(0, MAX_ADVICE);

  return { score, advice: sortAndSliceAdvice };
};

export default calculateTest;
