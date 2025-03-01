import AlcoholCharacter from "@/components/character/AlcoholCharacter";
import DrinkingCharacter from "@/components/character/DrinkingCharacter";
import EatingCharacter from "@/components/character/EatingCharacter";
import ExerciseCharacter from "@/components/character/ExerciseCharacter";
import MedicineCharacter from "@/components/character/MedicineCharacter";
import ReadingCharacter from "@/components/character/ReadingCharacter";
import SleepCharacter from "@/components/character/SleepCharacter";
import StressCharacter from "@/components/character/StressCharacter";
import WeightCharacter from "@/components/character/WeightCharacter";
import { JSX } from "react";

export interface Question {
  id: number;
  question: string;
  options: { label: string; value: number }[];
  character: ({ isPlay }: { isPlay: boolean }) => JSX.Element;
}

export const questions: Question[] = [
  {
    id: 0,
    question: "주당 평균 운동 횟수는\n어떻게 되시나요?",
    options: [
      { label: "0회", value: 1 },
      { label: "1회", value: 2 },
      { label: "2~3회", value: 3 },
      { label: "4~5회", value: 4 },
      { label: "5회 이상", value: 5 },
    ],
    character: ExerciseCharacter,
  },
  {
    id: 1,
    question: "하루 물 섭취량은\n얼마나 되시나요?",
    options: [
      { label: "500ml 미만", value: 1 },
      { label: "500ml~1L", value: 2 },
      { label: "1L~1.5L", value: 3 },
      { label: "1.5L~2L", value: 4 },
      { label: "2L 이상", value: 5 },
    ],
    character: DrinkingCharacter,
  },
  {
    id: 2,
    question: "일주일 중 피로나 숙취를\n 느끼는 날은 몇 일인가요?",
    options: [
      { label: "6~7일", value: 1 },
      { label: "4~5일", value: 2 },
      { label: "2~3일", value: 3 },
      { label: "1일", value: 4 },
      { label: "거의 없음", value: 5 },
    ],
    character: AlcoholCharacter,
  },
  {
    id: 3,
    question: "평균 수면 시간은\n 얼마나 되시나요?",
    options: [
      { label: "4시간 미만", value: 1 },
      { label: "4~5시간", value: 2 },
      { label: "6~7시간", value: 3 },
      { label: "7~8시간", value: 4 },
      { label: "8시간 이상", value: 5 },
    ],
    character: SleepCharacter,
  },
  {
    id: 4,
    question: "주당 군것질/패스트푸드\n섭취 빈도는 어떻게 되시나요?",
    options: [
      { label: "매일", value: 1 },
      { label: "주 4~5회", value: 2 },
      { label: "주 2~3회", value: 3 },
      { label: "주 1회", value: 4 },
      { label: "거의 안 함", value: 5 },
    ],
    character: EatingCharacter,
  },
  {
    id: 5,
    question: "현재 관리 중인 만성 질환이\n 있나요? (복수 선택 가능)",
    options: [
      { label: "당뇨", value: 1 },
      { label: "고혈압", value: 2 },
      { label: "위장질환", value: 3 },
      { label: "관절염", value: 4 },
      { label: "없음", value: 5 },
    ],
    character: MedicineCharacter,
  },
  {
    id: 6,
    question: "스트레스 해소를 위한\n루틴이 있나요? (명상, 독서 등)",
    options: [
      { label: "전혀 없음", value: 1 },
      { label: "월 1~2회", value: 2 },
      { label: "주 1~2회", value: 3 },
      { label: "주 3~4회", value: 4 },
      { label: "매일", value: 5 },
    ],
    character: ReadingCharacter,
  },
  {
    id: 7,
    question: "최근 3개월 내 불안, 우울감을\n 얼마나 자주 느끼셨나요?",
    options: [
      { label: "거의 매일", value: 1 },
      { label: "주 3~4회", value: 2 },
      { label: "주 1~2회", value: 3 },
      { label: "월 1~2회", value: 4 },
      { label: "거의 없음", value: 5 },
    ],
    character: StressCharacter,
  },
  {
    id: 8,
    question: "식사 후 칼로리나 체중 증가에\n대한 죄책감을 느끼시나요?",
    options: [
      { label: "항상", value: 1 },
      { label: "자주", value: 2 },
      { label: "가끔", value: 3 },
      { label: "드물게", value: 4 },
      { label: "전혀 없음", value: 5 },
    ],
    character: WeightCharacter,
  },
];
