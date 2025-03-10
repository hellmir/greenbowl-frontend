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

export type CommonOption = {
  label: string;
  value: "veryBad" | "bad" | "moderate" | "good" | "veryGood";
};

export type ChronicDiseaseOption = {
  label: string;
  value:
    | "diabetes"
    | "highBloodPressure"
    | "stomachDisease"
    | "arthritis"
    | "none";
};

type BaseQuestion = {
  id: number;
  isMultiple: boolean;
  question: string;
  character: ({ isPlay }: { isPlay: boolean }) => JSX.Element;
};

type CommonQuestion = BaseQuestion & {
  name:
    | "exerciseFrequency"
    | "waterIntake"
    | "fatigue"
    | "sleepDuration"
    | "dietQuality"
    | "stress"
    | "calorie"
    | "mentalHealth";
  isMultiple: false;
  options: CommonOption[];
};

type ChronicDiseaseQuestion = BaseQuestion & {
  name: "chronicDisease";
  isMultiple: true;
  options: ChronicDiseaseOption[];
};

export type Question = CommonQuestion | ChronicDiseaseQuestion;

export const questions: Question[] = [
  {
    id: 0,
    isMultiple: false,
    name: "exerciseFrequency",
    question: "주당 평균 운동 횟수는\n어떻게 되시나요?",
    options: [
      { label: "0회", value: "veryBad" },
      { label: "1회", value: "bad" },
      { label: "2회", value: "moderate" },
      { label: "3~5회", value: "good" },
      { label: "6회 이상", value: "veryGood" },
    ],
    character: ExerciseCharacter,
  },
  {
    id: 1,
    name: "waterIntake",
    isMultiple: false,
    question: "하루 물 섭취량은\n얼마나 되시나요?",
    options: [
      { label: "500ml 미만", value: "veryBad" },
      { label: "500ml~1L", value: "bad" },
      { label: "1L~1.5L", value: "moderate" },
      { label: "1.5L~2L", value: "good" },
      { label: "2L 이상", value: "veryGood" },
    ],
    character: DrinkingCharacter,
  },
  {
    id: 2,
    name: "fatigue",
    isMultiple: false,
    question: "일주일 중 피로나 숙취를\n 느끼는 날은 몇 일인가요?",
    options: [
      { label: "6~7일", value: "veryBad" },
      { label: "4~5일", value: "bad" },
      { label: "2~3일", value: "moderate" },
      { label: "1일", value: "good" },
      { label: "거의 없음", value: "veryGood" },
    ],
    character: AlcoholCharacter,
  },
  {
    id: 3,
    name: "sleepDuration",
    isMultiple: false,
    question: "평균 수면 시간은\n 얼마나 되시나요?",
    options: [
      { label: "4시간 미만", value: "veryBad" },
      { label: "4~5시간", value: "bad" },
      { label: "6~7시간", value: "moderate" },
      { label: "7~8시간", value: "good" },
      { label: "8시간 이상", value: "veryGood" },
    ],
    character: SleepCharacter,
  },
  {
    id: 4,
    name: "dietQuality",
    isMultiple: false,
    question: "주당 군것질/패스트푸드\n섭취 빈도는 어떻게 되시나요?",
    options: [
      { label: "매일", value: "veryBad" },
      { label: "주 4~5회", value: "bad" },
      { label: "주 2~3회", value: "moderate" },
      { label: "주 1회", value: "good" },
      { label: "거의 안 함", value: "veryGood" },
    ],
    character: EatingCharacter,
  },
  {
    id: 5,
    name: "chronicDisease",
    isMultiple: true,
    question: "현재 관리 중인 만성 질환이\n 있나요? (복수 선택 가능)",
    options: [
      { label: "당뇨", value: "diabetes" },
      { label: "고혈압", value: "highBloodPressure" },
      { label: "위장질환", value: "stomachDisease" },
      { label: "관절염", value: "arthritis" },
      { label: "없음", value: "none" },
    ],
    character: MedicineCharacter,
  },
  {
    id: 6,
    name: "stress",
    isMultiple: false,
    question: "스트레스 해소를 위한\n루틴이 있나요? (명상, 독서 등)",
    options: [
      { label: "전혀 없음", value: "veryBad" },
      { label: "월 1~2회", value: "bad" },
      { label: "주 1~2회", value: "moderate" },
      { label: "주 3~4회", value: "good" },
      { label: "매일", value: "veryGood" },
    ],
    character: ReadingCharacter,
  },
  {
    id: 7,
    name: "calorie",
    isMultiple: false,
    question: "최근 3개월 내 불안, 우울감을\n 얼마나 자주 느끼셨나요?",
    options: [
      { label: "거의 매일", value: "veryBad" },
      { label: "주 3~4회", value: "bad" },
      { label: "주 1~2회", value: "moderate" },
      { label: "월 1~2회", value: "good" },
      { label: "거의 없음", value: "veryGood" },
    ],
    character: StressCharacter,
  },
  {
    id: 8,
    name: "mentalHealth",
    isMultiple: false,
    question: "식사 후 칼로리나 체중 증가에\n대한 죄책감을 느끼시나요?",
    options: [
      { label: "항상", value: "veryBad" },
      { label: "자주", value: "bad" },
      { label: "가끔", value: "moderate" },
      { label: "드물게", value: "good" },
      { label: "전혀 없음", value: "veryGood" },
    ],
    character: WeightCharacter,
  },
];
