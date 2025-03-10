import VeryBadCharacter from "@/components/svg/testResult/character/VeryBad";
import { IResult } from "../../calculate";
import VeryBadText from "@/components/svg/testResult/text/VeryBad";
import BadCharacter from "@/components/svg/testResult/character/Bad";
import BadText from "@/components/svg/testResult/text/Bad";
import GoodCharacter from "@/components/svg/testResult/character/GoodCharacter";
import VeryGoodCharacter from "@/components/svg/testResult/character/VeryGood";
import VeryGoodText from "@/components/svg/testResult/text/VeryGood";
import GoodText from "@/components/svg/testResult/text/Good";
import Check from "@/components/svg/Check";
import { Navigation } from "@/components/navigation";

const state = {
  veryBad: {
    character: VeryBadCharacter,
    text: VeryBadText,
    prev: "건강 경고 신호 🚨",
  },
  bad: {
    character: BadCharacter,
    text: BadText,
    prev: "건강 개선이 필요한 단계!",
  },
  good: {
    character: GoodCharacter,
    text: GoodText,
    prev: "건강 습관 형성 중!",
  },
  veryGood: {
    character: VeryGoodCharacter,
    text: VeryGoodText,
    prev: "건강한 습관 유지 중!",
  },
};

const getHealthState = (score: number) => {
  if (score >= 36) return state.veryGood;
  if (score >= 27) return state.good;
  if (score >= 15) return state.bad;
  return state.veryBad;
};

const Result = ({ score, advice }: IResult) => {
  console.log(score);
  const healthState = getHealthState(score);
  return (
    <>
      <div className="px-4 flex flex-col items-center text-content-tertiary mb-20 bg-foundation-secondary">
        <div className="mt-8 flex flex-col items-center">
          <p className="label-s mb-2">{healthState.prev}</p>
          <healthState.text />
          <div className="mt-6">
            <healthState.character />
          </div>
          <div className="p-3 max-w-72 mt-6 label-xs bg-foundation-tertiary rounded-[0.65rem]">
            참고: 아보카도는 건강한 지방과 영양소가 풍부한 과일입니다. 여러분의
            상태를 아보카도 숙성 단계로 비유해 봤어요!
          </div>
        </div>
        <div className="p-3 label-s rounded-[0.65rem] border border-border-default mt-5">
          <p className="mb-3">건강 조언</p>
          <div className="flex flex-col gap-4">
            {advice.map((ad) => (
              <div key={ad.value} className="flex">
                <div className="w-4 h-4">
                  <Check />
                </div>
                <p className="ml-2">{ad.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Result;
